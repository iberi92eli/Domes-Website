import { getPayloadClient } from '@/lib/payload'
import { checkRateLimit, errorResponse, getSubmissionMeta, parseInquiryForm, redactOperationalLog, successResponse, validateInquiryPayload } from '@/lib/forms'

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(request, 'contact')
  if (rateLimit.limited) {
    return rateLimit.response
  }

  const payload = await parseInquiryForm(request)
  const validationError = validateInquiryPayload(payload)

  if (validationError) {
    return errorResponse(validationError, 400, rateLimit.headers)
  }

  const submissionMeta = getSubmissionMeta(request)
  const payloadClient = await getPayloadClient()
  const submission = await payloadClient.create({
    collection: 'intake-submissions',
    data: {
      submissionType: 'contact',
      ...payload,
      ...submissionMeta,
      status: 'new',
    },
    overrideAccess: true,
  })

  console.info('Stored intake submission', {
    id: submission.id,
    type: 'contact',
    ...redactOperationalLog(payload),
  })

  return successResponse(
    'Thank you. Your enquiry has been securely recorded and queued for manual review.',
    rateLimit.headers,
  )
}
