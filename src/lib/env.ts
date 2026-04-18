const fallbackSiteUrl = 'http://localhost:3000'

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL || process.env.PAYLOAD_PUBLIC_SERVER_URL || fallbackSiteUrl
  return value.replace(/\/$/, '')
}

export function requirePayloadSecret() {
  const secret = process.env.PAYLOAD_SECRET
  if (!secret) {
    throw new Error('PAYLOAD_SECRET is required')
  }
  return secret
}
