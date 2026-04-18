import { NextResponse } from 'next/server'

const TRUST_PROXY = process.env.TRUST_PROXY === 'true'

export type InquiryPayload = {
  name: string
  company: string
  email: string
  phone: string
  inquiryType: string
  urgency: string
  subject: string
  message: string
  consent: boolean
  website: string
}

const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()
let nextCleanupAt = Date.now() + CLEANUP_INTERVAL_MS

const allowedInquiryTypes = new Set([
  'general',
  'corporate',
  'disputes',
  'regulatory',
  'employment',
  'projects',
  'sensitive',
  'confidential-intake',
])
const allowedUrgency = new Set(['standard', 'priority', 'urgent'])

function sweepExpiredRateLimits(now: number) {
  if (now < nextCleanupAt) return

  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key)
    }
  }

  nextCleanupAt = now + CLEANUP_INTERVAL_MS
}

function normalizeIpCandidate(candidate: string | null) {
  if (!candidate) return null
  const cleaned = candidate.trim().replace(/^\[(.*)\]$/, '$1')
  if (!cleaned || cleaned.length > 64) return null
  if (!/^[0-9a-fA-F:.]+$/.test(cleaned)) return null
  return cleaned
}

export function getClientIp(request: Request) {
  if (TRUST_PROXY) {
    const trustedDirect = normalizeIpCandidate(request.headers.get('cf-connecting-ip'))
      || normalizeIpCandidate(request.headers.get('x-real-ip'))

    if (trustedDirect) return trustedDirect

    const forwarded = request.headers.get('x-forwarded-for')
    const firstForwarded = forwarded?.split(',')[0] ?? null
    const trustedForwarded = normalizeIpCandidate(firstForwarded)
    if (trustedForwarded) return trustedForwarded
  }

  return 'local'
}

function getClientKey(request: Request, scope: string) {
  return `${scope}:${getClientIp(request)}`
}

type RateLimitHeaders = Record<string, string>

type RateLimitAllowed = {
  limited: false
  headers: RateLimitHeaders
}

type RateLimitBlocked = {
  limited: true
  response: NextResponse
}

export type RateLimitResult = RateLimitAllowed | RateLimitBlocked

export function checkRateLimit(request: Request, scope: string): RateLimitResult {
  const key = getClientKey(request, scope)
  const now = Date.now()
  sweepExpiredRateLimits(now)
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    const resetAt = now + WINDOW_MS
    rateLimitStore.set(key, { count: 1, resetAt })
    return {
      limited: false,
      headers: {
        'X-RateLimit-Limit': String(MAX_REQUESTS),
        'X-RateLimit-Remaining': String(MAX_REQUESTS - 1),
        'X-RateLimit-Reset': String(Math.ceil(resetAt / 1000)),
      },
    }
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      limited: true,
      response: NextResponse.json(
        { ok: false, message: 'Too many requests. Please try again shortly.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(MAX_REQUESTS),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(Math.ceil(current.resetAt / 1000)),
          },
        },
      ),
    }
  }

  current.count += 1
  rateLimitStore.set(key, current)

  return {
    limited: false,
    headers: {
      'X-RateLimit-Limit': String(MAX_REQUESTS),
      'X-RateLimit-Remaining': String(Math.max(MAX_REQUESTS - current.count, 0)),
      'X-RateLimit-Reset': String(Math.ceil(current.resetAt / 1000)),
    },
  }
}

export function resetRateLimitStateForTests() {
  rateLimitStore.clear()
  nextCleanupAt = Date.now() + CLEANUP_INTERVAL_MS
}

function cleanString(value: FormDataEntryValue | string | null, maxLength: number) {
  const cleaned = typeof value === 'string' ? value.trim() : ''
  return cleaned.slice(0, maxLength)
}

export async function parseInquiryForm(request: Request): Promise<InquiryPayload> {
  const formData = await request.formData()

  return {
    name: cleanString(formData.get('name'), 120),
    company: cleanString(formData.get('company'), 160),
    email: cleanString(formData.get('email'), 160).toLowerCase(),
    phone: cleanString(formData.get('phone'), 80),
    inquiryType: cleanString(formData.get('inquiryType'), 40),
    urgency: cleanString(formData.get('urgency'), 20),
    subject: cleanString(formData.get('subject'), 180),
    message: cleanString(formData.get('message'), 5000),
    consent: formData.get('consent') === 'on',
    website: cleanString(formData.get('website'), 120),
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function validateInquiryPayload(payload: InquiryPayload) {
  if (payload.website) {
    return 'Unable to process this request.'
  }

  if (!payload.name || payload.name.length < 2) {
    return 'Please provide your full name.'
  }

  if (!payload.email || !isValidEmail(payload.email)) {
    return 'Please provide a valid email address.'
  }

  if (!allowedInquiryTypes.has(payload.inquiryType)) {
    return 'Please choose a valid inquiry type.'
  }

  if (!allowedUrgency.has(payload.urgency)) {
    return 'Please choose a valid urgency level.'
  }

  if (!payload.subject || payload.subject.length < 3) {
    return 'Please provide a short subject.'
  }

  if (!payload.message || payload.message.length < 20) {
    return 'Please provide a slightly fuller matter summary.'
  }

  if (!payload.consent) {
    return 'Please confirm the intake notice before submitting.'
  }

  return null
}

export function getSubmissionMeta(request: Request) {
  return {
    sourceIP: getClientIp(request),
    userAgent: cleanString(request.headers.get('user-agent'), 255),
  }
}

export function redactOperationalLog(payload: InquiryPayload) {
  return {
    inquiryType: payload.inquiryType,
    urgency: payload.urgency,
    emailDomain: payload.email.includes('@') ? payload.email.split('@')[1] : null,
  }
}

export function successResponse(message: string, headers: Record<string, string>) {
  return NextResponse.json({ ok: true, message }, { headers })
}

export function errorResponse(message: string, status: number, headers: Record<string, string>) {
  return NextResponse.json({ ok: false, message }, { status, headers })
}
