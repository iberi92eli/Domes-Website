import type { CollectionConfig } from 'payload'
import { isAdmin } from '@/payload/access/isAdmin'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  upload: true,
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    { name: 'alt', type: 'text' },
    { name: 'caption', type: 'text' },
  ],
}
