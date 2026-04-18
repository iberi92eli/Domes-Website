import type { CollectionConfig } from 'payload'
import { isPublishedOrAdmin } from '@/payload/access/isPublishedOrAdmin'
import { isAdmin } from '@/payload/access/isAdmin'

export const Sectors: CollectionConfig = {
  slug: 'sectors',
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
    { name: 'summary', type: 'textarea' },
    { name: 'overview', type: 'textarea' },
    { name: 'principalLegalIssues', type: 'array', fields: [{ name: 'item', type: 'text' }] },
    { name: 'relatedServicePillars', label: 'Related Practice Groups', type: 'relationship', relationTo: 'service-pillars', hasMany: true },
  ],
}
