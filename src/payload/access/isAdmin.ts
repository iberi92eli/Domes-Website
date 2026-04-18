import type { Access } from 'payload'
import { hasRole } from '@/payload/access/roles'

export const isAdmin: Access = ({ req }) => {
  return hasRole(req.user, ['admin', 'super-admin'])
}
