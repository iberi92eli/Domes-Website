export const dynamic = 'force-dynamic'

import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/env'
import { getInsights, getSectors, getServicePillars, getAllTeamMembers } from '@/lib/cms'
import type { Insight, Sector, ServicePillar, TeamMember } from '@/lib/cms-types'

function getLastModified(value: { updatedAt?: string | null; createdAt?: string | null }) {
  return new Date(value.updatedAt || value.createdAt || Date.now())
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl()
  const staticPages = ['', '/firm', '/services', '/sectors', '/insights', '/contact', '/client-portal', '/privacy-policy', '/terms-of-use', '/cookie-notice']
  const [servicePillars, sectors, insights, team] = await Promise.all([
    getServicePillars(),
    getSectors(),
    getInsights(),
    getAllTeamMembers(),
  ])

  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })),
    ...servicePillars.map((item: ServicePillar) => ({ url: `${base}/services/${item.slug}`, lastModified: getLastModified(item) })),
    ...sectors.map((item: Sector) => ({ url: `${base}/sectors/${item.slug}`, lastModified: getLastModified(item) })),
    ...insights.map((item: Insight) => ({ url: `${base}/insights/${item.slug}`, lastModified: getLastModified(item) })),
    ...team.map((item: TeamMember) => ({ url: `${base}/team/${item.slug}`, lastModified: getLastModified(item) })),
  ]
}
