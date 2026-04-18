import type { GlobalConfig } from 'payload'
import { isAdmin } from '@/payload/access/isAdmin'

export const ContactSettings: GlobalConfig = {
  slug: 'contact-settings',
  access: {
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    { name: 'contactHeading', type: 'text' },
    { name: 'contactIntro', type: 'textarea' },
    { name: 'contactEmail', type: 'email' },
    { name: 'contactPhone', type: 'text' },
    { name: 'contactAddress', type: 'textarea' },
  ],
}
