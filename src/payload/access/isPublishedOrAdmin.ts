import type { Access } from 'payload'
import { hasRole } from '@/payload/access/roles'

export const isPublishedOrAdmin: Access = ({ req }) => {
  if (hasRole(req.user, ['admin', 'super-admin'])) return true
  return {
    _status: {
      equals: 'published',
    },
  }
}
