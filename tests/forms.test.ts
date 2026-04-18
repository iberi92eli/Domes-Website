import assert from 'node:assert/strict'
import test from 'node:test'
import {
  checkRateLimit,
  parseInquiryForm,
  resetRateLimitStateForTests,
  validateInquiryPayload,
} from '../src/lib/forms'

test('parseInquiryForm normalizes and trims intake values', async () => {
  const formData = new FormData()
  formData.set('name', '  Nino Example  ')
  formData.set('company', '  Domes  ')
  formData.set('email', '  INFO@DOMES.GE ')
  formData.set('phone', '  +995 555 678 999 ')
  formData.set('inquiryType', 'general')
  formData.set('urgency', 'urgent')
  formData.set('subject', '  Matter  ')
  formData.set('message', '  This is a sufficiently detailed matter summary for intake testing.  ')
  formData.set('consent', 'on')
  formData.set('website', '')

  const request = new Request('http://localhost/contact', {
    method: 'POST',
    body: formData,
  })

  const payload = await parseInquiryForm(request)

  assert.equal(payload.name, 'Nino Example')
  assert.equal(payload.company, 'Domes')
  assert.equal(payload.email, 'info@domes.ge')
  assert.equal(payload.phone, '+995 555 678 999')
  assert.equal(payload.subject, 'Matter')
  assert.equal(payload.website, '')
  assert.equal(payload.consent, true)
})

test('validateInquiryPayload accepts a well-formed intake payload', () => {
  const result = validateInquiryPayload({
    name: 'Nino Example',
    company: 'Domes',
    email: 'info@domes.ge',
    phone: '+995 555 678 999',
    inquiryType: 'confidential-intake',
    urgency: 'priority',
    subject: 'Urgent commercial dispute',
    message: 'This is a sufficiently detailed matter summary to pass the intake validation rules.',
    consent: true,
    website: '',
  })

  assert.equal(result, null)
})

test('validateInquiryPayload rejects honeypot spam submissions', () => {
  const result = validateInquiryPayload({
    name: 'Spam Bot',
    company: '',
    email: 'bot@example.com',
    phone: '',
    inquiryType: 'general',
    urgency: 'standard',
    subject: 'Spam subject',
    message: 'This looks valid but the honeypot should make the request fail immediately.',
    consent: true,
    website: 'https://spam.example.com',
  })

  assert.equal(result, 'Unable to process this request.')
})

test('checkRateLimit blocks repeated submissions after the configured window allowance', async () => {
  resetRateLimitStateForTests()
  const request = new Request('http://localhost/contact', {
    headers: {
      'user-agent': 'node-test',
    },
  })

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const result = checkRateLimit(request, 'contact')
    assert.equal(result.limited, false)
  }

  const blocked = checkRateLimit(request, 'contact')
  assert.equal(blocked.limited, true)
  if (blocked.limited) {
    assert.equal(blocked.response.status, 429)
    const body = await blocked.response.json()
    assert.equal(body.ok, false)
  }
})
