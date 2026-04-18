import type { GlobalConfig } from 'payload'
import { isAdmin } from '@/payload/access/isAdmin'

export const FooterGlobal: GlobalConfig = {
  slug: 'footer-global',
  access: {
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    { name: 'footerIntro', type: 'textarea' },
    { name: 'footerAddress', type: 'textarea' },
    { name: 'footerEmail', type: 'email' },
    { name: 'footerPhone', type: 'text' },
  ],
}
