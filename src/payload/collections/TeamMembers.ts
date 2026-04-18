import type { CollectionConfig } from 'payload'
import { isPublishedOrAdmin } from '@/payload/access/isPublishedOrAdmin'
import { isAdmin } from '@/payload/access/isAdmin'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  access: {
    read: isPublishedOrAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'fullName',
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: 'fullName', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'profilePhoto',
      label: 'Profile Photo',
      type: 'relationship',
      relationTo: 'media',
      admin: { description: 'Optional for now. A placeholder avatar will display on the website until a photo is selected.' },
    },
    { name: 'jobTitle', type: 'text' },
    { name: 'shortBio', type: 'textarea' },
    { name: 'fullBio', type: 'textarea' },
    { name: 'email', type: 'email' },
    { name: 'phone', type: 'text' },
    { name: 'featuredOnFirmPage', type: 'checkbox' },
  ],
}
