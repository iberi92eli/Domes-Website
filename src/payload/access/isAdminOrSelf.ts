import type { Access } from 'payload'
import { hasRole } from '@/payload/access/roles'

export const isAdminOrSelf: Access = ({ req, id }) => {
  if (hasRole(req.user, ['admin', 'super-admin'])) return true
  if (!req.user || !id) return false
  return String(req.user.id) == String(id)
}
