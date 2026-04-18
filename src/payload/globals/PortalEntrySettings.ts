import type { GlobalConfig } from 'payload'
import { isAdmin } from '@/payload/access/isAdmin'

export const PortalEntrySettings: GlobalConfig = {
  slug: 'portal-entry-settings',
  access: {
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    { name: 'portalEyebrow', type: 'text', defaultValue: 'Confidential Intake' },
    { name: 'portalHeading', type: 'text', defaultValue: 'Confidential intake for matters requiring greater discretion.' },
    { name: 'portalIntro', type: 'textarea' },
    {
      name: 'securityChips',
      type: 'array',
      fields: [{ name: 'label', type: 'text' }],
    },
  ],
}
