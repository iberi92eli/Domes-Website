import { getPayloadClient } from '@/lib/payload'
import { checkRateLimit, errorResponse, getSubmissionMeta, parseInquiryForm, redactOperationalLog, successResponse, validateInquiryPayload } from '@/lib/forms'

export async function POST(request: Request) {
  const rateLimit = checkRateLimit(request, 'workspace-request')
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
      submissionType: 'workspace-request',
      ...payload,
      ...submissionMeta,
      status: 'new',
    },
    overrideAccess: true,
  })

  console.info('Stored intake submission', {
    id: submission.id,
    type: 'workspace-request',
    ...redactOperationalLog(payload),
  })

  return successResponse(
    'Confidential intake request received. It has been recorded and queued for manual review.',
    rateLimit.headers,
  )
}
