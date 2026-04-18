import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'

import { Users } from '@/payload/collections/Users'
import { Pages } from '@/payload/collections/Pages'
import { ServicePillars } from '@/payload/collections/ServicePillars'
import { Services } from '@/payload/collections/Services'
import { Sectors } from '@/payload/collections/Sectors'
import { TeamMembers } from '@/payload/collections/TeamMembers'
import { Insights } from '@/payload/collections/Insights'
import { Media } from '@/payload/collections/Media'
import { IntakeSubmissions } from '@/payload/collections/IntakeSubmissions'
import { SiteSettings } from '@/payload/globals/SiteSettings'
import { HeaderGlobal } from '@/payload/globals/HeaderGlobal'
import { FooterGlobal } from '@/payload/globals/FooterGlobal'
import { Homepage } from '@/payload/globals/Homepage'
import { ContactSettings } from '@/payload/globals/ContactSettings'
import { PortalEntrySettings } from '@/payload/globals/PortalEntrySettings'
import { getSiteUrl, requirePayloadSecret } from '@/lib/env'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const payloadSecret = requirePayloadSecret()

const db = process.env.PAYLOAD_DB === 'postgres'
  ? postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URL,
      },
    })
  : sqliteAdapter({
      client: {
        url: process.env.DATABASE_URL || 'file:./domes-legal.db',
        authToken: process.env.DATABASE_AUTH_TOKEN,
      },
      wal: true,
    })

export default buildConfig({
  secret: payloadSecret,
  serverURL: getSiteUrl(),
  sharp,
  editor: lexicalEditor(),
  db,
  telemetry: false,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, './src/app/(payload)'),
      importMapFile: path.resolve(dirname, './src/app/(payload)/admin/importMap.js'),
    },
  },
  collections: [Users, Pages, ServicePillars, Services, Sectors, TeamMembers, Insights, Media, IntakeSubmissions],
  globals: [SiteSettings, HeaderGlobal, FooterGlobal, Homepage, ContactSettings, PortalEntrySettings],
  typescript: {
    outputFile: path.resolve(dirname, './payload-types.ts'),
  },
})
