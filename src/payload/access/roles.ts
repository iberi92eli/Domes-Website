import type { User } from '@payload-types'

type Role = NonNullable<User['role']>

export function hasRole(user: null | undefined | Partial<User>, roles: Role[]) {
  return Boolean(user?.role && roles.includes(user.role as Role))
}
