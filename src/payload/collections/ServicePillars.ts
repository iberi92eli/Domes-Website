import type { CollectionConfig } from 'payload'
import { isPublishedOrAdmin } from '@/payload/access/isPublishedOrAdmin'
import { isAdmin } from '@/payload/access/isAdmin'

export const ServicePillars: CollectionConfig = {
  slug: 'service-pillars',
  labels: {
    singular: 'Practice Group',
    plural: 'Practice Groups',
  },
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
    { name: 'summary', type: 'textarea', required: true },
    { name: 'intro', type: 'textarea' },
    { name: 'keyMandates', type: 'array', fields: [{ name: 'item', type: 'text' }] },
    { name: 'clientNeeds', type: 'array', fields: [{ name: 'item', type: 'text' }] },
  ],
}
