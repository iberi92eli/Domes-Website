import type {
  getAllTeamMembers,
  getFeaturedTeam,
  getHomepageData,
  getInsightBySlug,
  getInsights,
  getPortalSettings,
  getSectorBySlug,
  getSectors,
  getServicePillarBySlug,
  getServicePillars,
  getServices,
} from '@/lib/cms'

export type HomepageData = Awaited<ReturnType<typeof getHomepageData>>
export type HomepageServicePillar = HomepageData['services'][number]
export type HomepageSector = HomepageData['sectors'][number]
export type HomepageInsight = HomepageData['insights'][number]

export type ServicePillar = Awaited<ReturnType<typeof getServicePillars>>[number]
export type Service = Awaited<ReturnType<typeof getServices>>[number]
export type Sector = Awaited<ReturnType<typeof getSectors>>[number]
export type Insight = Awaited<ReturnType<typeof getInsights>>[number]
export type TeamMember = Awaited<ReturnType<typeof getAllTeamMembers>>[number]
export type FeaturedTeamMember = Awaited<ReturnType<typeof getFeaturedTeam>>[number]
export type ServicePillarDetail = NonNullable<Awaited<ReturnType<typeof getServicePillarBySlug>>>
export type SectorDetail = NonNullable<Awaited<ReturnType<typeof getSectorBySlug>>>
export type InsightDetail = NonNullable<Awaited<ReturnType<typeof getInsightBySlug>>>
export type PortalSettings = Awaited<ReturnType<typeof getPortalSettings>>
