import type { CollectionConfig } from 'payload'
import { isPublishedOrAdmin } from '@/payload/access/isPublishedOrAdmin'
import { isAdmin } from '@/payload/access/isAdmin'

export const Insights: CollectionConfig = {
  slug: 'insights',
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
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'relationship',
      relationTo: 'media',
      admin: { description: 'Optional for now. The website will render a placeholder panel until an image is selected.' },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Legal Update', value: 'legal-update' },
        { label: 'Article', value: 'article' },
        { label: 'Briefing', value: 'briefing' },
        { label: 'Regulatory Alert', value: 'regulatory-alert' },
        { label: 'Dispute Note', value: 'dispute-note' },
      ],
    },
    { name: 'excerpt', type: 'textarea' },
    { name: 'body', type: 'textarea' },
    { name: 'author', type: 'relationship', relationTo: 'team-members' },
    { name: 'relatedServices', label: 'Related Practice Groups', type: 'relationship', relationTo: 'service-pillars', hasMany: true },
    { name: 'relatedSectors', type: 'relationship', relationTo: 'sectors', hasMany: true },
  ],
}
