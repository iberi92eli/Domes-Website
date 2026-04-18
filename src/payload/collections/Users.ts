import type { Access, CollectionConfig } from 'payload'
import { hasRole } from '@/payload/access/roles'
import { isAdminOrSelf } from '@/payload/access/isAdminOrSelf'
import { isSuperAdmin } from '@/payload/access/isSuperAdmin'

const canCreateUser: Access = async ({ req }) => {
  if (hasRole(req.user, ['super-admin'])) return true
  if (req.user) return false

  const existing = await req.payload.count({ collection: 'users', overrideAccess: true })
  return existing.totalDocs === 0
}

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    admin: async ({ req }) => {
      if (!req.user) return true

      return hasRole(req.user, ['admin', 'super-admin'])
    },
    read: isAdminOrSelf,
    create: canCreateUser,
    update: isAdminOrSelf,
    delete: isSuperAdmin,
  },
  admin: {
    useAsTitle: 'email',
  },
  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation !== 'create') return data

        const existing = await req.payload.count({ collection: 'users', overrideAccess: true })
        if (existing.totalDocs === 0) {
          return {
            ...data,
            role: 'super-admin',
          }
        }

        return data
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      defaultValue: 'editor',
      saveToJWT: true,
      access: {
        create: async ({ req }) => {
          const existing = await req.payload.count({ collection: 'users', overrideAccess: true })
          if (existing.totalDocs === 0) return true
          return hasRole(req.user, ['super-admin'])
        },
        update: ({ req }) => hasRole(req.user, ['super-admin']),
      },
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Contributor', value: 'contributor' },
      ],
    },
  ],
}
