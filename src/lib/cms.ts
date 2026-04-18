import { getPayloadClient } from '@/lib/payload'

export async function getSiteChrome() {
  const payload = await getPayloadClient()
  const [siteSettings, headerGlobal, footerGlobal] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings', depth: 2, overrideAccess: true }),
    payload.findGlobal({ slug: 'header-global', depth: 1, overrideAccess: true }),
    payload.findGlobal({ slug: 'footer-global', depth: 1, overrideAccess: true }),
  ])

  return { siteSettings, headerGlobal, footerGlobal }
}

export async function getHomepageData() {
  const payload = await getPayloadClient()
  const [homepage, services, sectors, insights] = await Promise.all([
    payload.findGlobal({ slug: 'homepage', depth: 1, overrideAccess: true }),
    payload.find({ collection: 'service-pillars', depth: 1, limit: 20, draft: false }),
    payload.find({ collection: 'sectors', depth: 1, limit: 20, draft: false }),
    payload.find({ collection: 'insights', depth: 2, limit: 3, draft: false, sort: '-createdAt' }),
  ])

  return { homepage, services: services.docs, sectors: sectors.docs, insights: insights.docs }
}

export async function getPageBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    draft: false,
  })

  return result.docs[0] || null
}

export async function getServicePillars() {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'service-pillars', depth: 1, limit: 20, draft: false })
  return result.docs
}

export async function getServices() {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'services', depth: 2, limit: 100, draft: false, sort: 'title' })
  return result.docs
}

export async function getServicePillarBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'service-pillars',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
    draft: false,
  })
  return result.docs[0] || null
}

export async function getSectors() {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'sectors', depth: 1, limit: 20, draft: false })
  return result.docs
}

export async function getSectorBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'sectors',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
    draft: false,
  })
  return result.docs[0] || null
}

export async function getInsights() {
  const payload = await getPayloadClient()
  const result = await payload.find({ collection: 'insights', depth: 2, limit: 20, draft: false, sort: '-createdAt' })
  return result.docs
}

export async function getInsightBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'insights',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    draft: false,
  })
  return result.docs[0] || null
}

export async function getFeaturedTeam() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'team-members',
    where: { featuredOnFirmPage: { equals: true } },
    limit: 12,
    depth: 2,
    draft: false,
  })
  return result.docs
}

export async function getAllTeamMembers() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'team-members',
    limit: 50,
    depth: 2,
    draft: false,
    sort: 'fullName',
  })
  return result.docs
}

export async function getTeamMemberBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'team-members',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    draft: false,
  })
  return result.docs[0] || null
}

export async function getPortalSettings() {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'portal-entry-settings', depth: 1, overrideAccess: true })
}

export async function getContactSettings() {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'contact-settings', depth: 1, overrideAccess: true })
}
