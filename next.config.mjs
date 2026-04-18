import path from 'node:path'
import { withPayload } from '@payloadcms/next/withPayload'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const parsedSiteUrl = new URL(siteUrl)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: parsedSiteUrl.protocol.replace(':', ''),
        hostname: parsedSiteUrl.hostname,
        port: parsedSiteUrl.port || undefined,
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@payload-config': path.resolve(process.cwd(), 'payload.config.ts'),
    }
    return config
  },
}

export default withPayload(nextConfig)
