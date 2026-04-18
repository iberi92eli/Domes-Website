import type { CollectionConfig } from 'payload'
import { isPublishedOrAdmin } from '@/payload/access/isPublishedOrAdmin'
import { isAdmin } from '@/payload/access/isAdmin'

export const Pages: CollectionConfig = {
  slug: 'pages',
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
    { name: 'pageType', type: 'select', options: ['standard', 'legal-page', 'firm', 'careers'] },
    { name: 'heroTitle', type: 'text' },
    { name: 'heroText', type: 'textarea' },
    { name: 'body', type: 'textarea' },
  ],
}
