import type { Access } from 'payload'
import { hasRole } from '@/payload/access/roles'

export const isSuperAdmin: Access = ({ req }) => {
  return hasRole(req.user, ['super-admin'])
}
