import type { GlobalConfig } from 'payload'
import { isAdmin } from '@/payload/access/isAdmin'

export const HeaderGlobal: GlobalConfig = {
  slug: 'header-global',
  access: {
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    { name: 'utilityEmail', type: 'email' },
    { name: 'utilityPhone', type: 'text' },
    { name: 'trustNotice', type: 'text' },
    { name: 'portalButtonLabel', type: 'text', defaultValue: 'Confidential Intake' },
  ],
}
