import type { GlobalConfig } from 'payload'
import { isAdmin } from '@/payload/access/isAdmin'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    { name: 'siteName', type: 'text', defaultValue: 'Domes Legal' },
    { name: 'tagline', type: 'text', defaultValue: 'Clarity. Strategy. Resolution.' },
    { name: 'siteDescription', type: 'textarea' },
    {
      name: 'logo',
      label: 'Logo',
      type: 'relationship',
      relationTo: 'media',
      admin: { description: 'Optional for now. The website will continue showing the built-in placeholder logo until a media asset is selected.' },
    },
    {
      name: 'brandAsset',
      label: 'Brand Asset',
      type: 'relationship',
      relationTo: 'media',
      admin: { description: 'Optional placeholder field for future brand files, marks, or downloadable brand materials.' },
    },
    {
      name: 'seedVersion',
      type: 'text',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
  ],
}
