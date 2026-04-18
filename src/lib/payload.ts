import { cache } from 'react'
import { getPayload } from 'payload'
import config from '../../payload.config'
import { ensureSeeded } from '@/lib/seed'

export const getPayloadClient = cache(async () => {
  const payload = await getPayload({ config })
  await ensureSeeded(payload)
  return payload
})
