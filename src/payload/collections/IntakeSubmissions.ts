import type { CollectionConfig } from 'payload'
import { isAdmin } from '@/payload/access/isAdmin'

export const IntakeSubmissions: CollectionConfig = {
  slug: 'intake-submissions',
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['submissionType', 'subject', 'email', 'urgency', 'status', 'createdAt'],
  },
  fields: [
    {
      name: 'submissionType',
      type: 'select',
      required: true,
      options: [
        { label: 'Contact Inquiry', value: 'contact' },
        { label: 'Workspace Request', value: 'workspace-request' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Review', value: 'in-review' },
        { label: 'Closed', value: 'closed' },
      ],
    },
    { name: 'name', type: 'text', required: true },
    { name: 'company', type: 'text' },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'inquiryType', type: 'text' },
    { name: 'urgency', type: 'text' },
    { name: 'subject', type: 'text', required: true },
    { name: 'message', type: 'textarea', required: true },
    { name: 'consent', type: 'checkbox' },
    { name: 'sourceIP', type: 'text', admin: { readOnly: true } },
    { name: 'userAgent', type: 'text', admin: { readOnly: true } },
  ],
}
