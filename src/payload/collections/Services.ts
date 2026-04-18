import type { CollectionConfig } from 'payload'
import { isPublishedOrAdmin } from '@/payload/access/isPublishedOrAdmin'
import { isAdmin } from '@/payload/access/isAdmin'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: isPublishedOrAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'pillar', label: 'Practice Group', type: 'relationship', relationTo: 'service-pillars', required: true },
    { name: 'summary', type: 'textarea' },
    { name: 'body', type: 'textarea' },
  ],
}
