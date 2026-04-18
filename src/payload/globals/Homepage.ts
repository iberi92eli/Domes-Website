import type { GlobalConfig } from 'payload'
import { isAdmin } from '@/payload/access/isAdmin'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    { name: 'heroEyebrow', type: 'text', defaultValue: 'Commercial law | disputes | discreet first contact' },
    { name: 'heroHeadline', type: 'text', defaultValue: 'Clear legal judgment when the stakes are real.' },
    { name: 'heroText', type: 'textarea' },
    { name: 'servicesIntro', type: 'textarea' },
    { name: 'sectorsIntro', type: 'textarea' },
    { name: 'whyDomesHeading', type: 'text', defaultValue: 'Why clients come to the firm' },
    {
      name: 'whyDomesItems',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'text', type: 'textarea' },
      ],
    },
    { name: 'secondaryPracticeTitle', type: 'text' },
    { name: 'secondaryPracticeText', type: 'textarea' },
    { name: 'experienceTitle', type: 'text' },
    { name: 'experienceText', type: 'textarea' },
    { name: 'contactHeading', type: 'text' },
    { name: 'contactText', type: 'textarea' },
    {
      name: 'homeMetrics',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'text', type: 'textarea' },
      ],
    },
  ],
}
