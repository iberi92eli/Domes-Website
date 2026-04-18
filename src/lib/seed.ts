import type { Payload } from 'payload'
import { globalSeeds, homeMetrics, insights, pageSeeds, sectors, servicePillars, servicesCatalog, team } from '@/lib/site-data'

const SEED_VERSION = 'domes-seed-v5'
const ALLOW_SEED_CONTENT_MIGRATION = process.env.ALLOW_SEED_CONTENT_MIGRATION === 'true'

let seedPromise: Promise<void> | null = null

type SeedId = number
type InsightCategory = 'article' | 'briefing' | 'legal-update' | 'regulatory-alert' | 'dispute-note'
type PageType = 'standard' | 'legal-page' | 'firm' | 'careers'

type PageSeed = {
  title: string
  slug: string
  pageType: PageType
  heroTitle: string
  heroText: string
  body: string
}

function isSeedId(value: unknown): value is SeedId {
  return typeof value === 'number'
}

function definedSeedIds(values: Array<SeedId | null | undefined>): SeedId[] {
  return values.filter(isSeedId)
}

function asInsightCategory(value: string): InsightCategory {
  switch (value) {
    case 'article':
    case 'briefing':
    case 'legal-update':
    case 'regulatory-alert':
    case 'dispute-note':
      return value
    default:
      return 'article'
  }
}

export function getSeedWriteDecision({
  currentSeedVersion,
  targetSeedVersion = SEED_VERSION,
  allowSeedContentMigration = ALLOW_SEED_CONTENT_MIGRATION,
}: {
  currentSeedVersion?: string | null
  targetSeedVersion?: string
  allowSeedContentMigration?: boolean
}) {
  const isFirstRun = !currentSeedVersion
  const shouldRefreshSeededContent =
    !isFirstRun && currentSeedVersion !== targetSeedVersion && allowSeedContentMigration

  return {
    isFirstRun,
    shouldRefreshSeededContent,
    shouldWriteSeedContent: isFirstRun || shouldRefreshSeededContent,
  }
}

export function resetSeedStateForTests() {
  seedPromise = null
}

async function findPageBySlug(payload: Payload, slug: string) {
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    overrideAccess: true,
    draft: true,
  })

  return result.docs[0] || null
}

async function findServicePillarBySlug(payload: Payload, slug: string) {
  const result = await payload.find({
    collection: 'service-pillars',
    where: { slug: { equals: slug } },
    limit: 1,
    overrideAccess: true,
    draft: true,
  })

  return result.docs[0] || null
}

async function findServiceBySlug(payload: Payload, slug: string) {
  const result = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
    overrideAccess: true,
    draft: true,
  })

  return result.docs[0] || null
}

async function findSectorBySlug(payload: Payload, slug: string) {
  const result = await payload.find({
    collection: 'sectors',
    where: { slug: { equals: slug } },
    limit: 1,
    overrideAccess: true,
    draft: true,
  })

  return result.docs[0] || null
}

async function findTeamMemberBySlug(payload: Payload, slug: string) {
  const result = await payload.find({
    collection: 'team-members',
    where: { slug: { equals: slug } },
    limit: 1,
    overrideAccess: true,
    draft: true,
  })

  return result.docs[0] || null
}

async function findInsightBySlug(payload: Payload, slug: string) {
  const result = await payload.find({
    collection: 'insights',
    where: { slug: { equals: slug } },
    limit: 1,
    overrideAccess: true,
    draft: true,
  })

  return result.docs[0] || null
}

async function seedGlobals(payload: Payload, shouldWriteSeedContent: boolean) {
  if (!shouldWriteSeedContent) return

  const seededPortalSettings = {
    ...globalSeeds.portalEntrySettings,
    securityChips: globalSeeds.portalEntrySettings.securityChips.map((label) => ({ label })),
  }

  await payload.updateGlobal({
    slug: 'site-settings',
    data: { ...globalSeeds.siteSettings, seedVersion: SEED_VERSION },
    overrideAccess: true,
  })
  await payload.updateGlobal({ slug: 'header-global', data: globalSeeds.headerGlobal, overrideAccess: true })
  await payload.updateGlobal({ slug: 'footer-global', data: globalSeeds.footerGlobal, overrideAccess: true })
  await payload.updateGlobal({ slug: 'homepage', data: { ...globalSeeds.homepage, homeMetrics }, overrideAccess: true })
  await payload.updateGlobal({ slug: 'contact-settings', data: globalSeeds.contactSettings, overrideAccess: true })
  await payload.updateGlobal({ slug: 'portal-entry-settings', data: seededPortalSettings, overrideAccess: true })
}

export async function ensureSeeded(payload: Payload) {
  if (seedPromise) return seedPromise

  seedPromise = (async () => {
    const siteSettings = await payload.findGlobal({ slug: 'site-settings', overrideAccess: true })
    const currentSeedVersion = (siteSettings as { seedVersion?: string | null })?.seedVersion
    const { isFirstRun, shouldRefreshSeededContent, shouldWriteSeedContent } = getSeedWriteDecision({
      currentSeedVersion,
    })

    if (!isFirstRun && currentSeedVersion !== SEED_VERSION && !ALLOW_SEED_CONTENT_MIGRATION) {
      console.warn(
        `[seed] Detected seed version ${currentSeedVersion ?? 'unknown'}; current version is ${SEED_VERSION}. Existing CMS content was left unchanged. Set ALLOW_SEED_CONTENT_MIGRATION=true to apply starter-content updates to an existing database.`,
      )
    }

    await seedGlobals(payload, shouldWriteSeedContent)

    const serviceMap = new Map<string, SeedId>()
    for (const item of servicePillars) {
      const existing = await findServicePillarBySlug(payload, item.slug)

      const data = {
        title: item.title,
        slug: item.slug,
        summary: item.summary,
        intro: item.intro,
        keyMandates: item.keyMandates.map((entry) => ({ item: entry })),
        clientNeeds: item.clientNeeds.map((entry) => ({ item: entry })),
        _status: 'published' as const,
      }

      const doc = existing
        ? (isFirstRun || shouldRefreshSeededContent)
          ? await payload.update({ collection: 'service-pillars', id: existing.id, data, overrideAccess: true })
          : existing
        : await payload.create({ collection: 'service-pillars', data, overrideAccess: true })

      if (isSeedId(doc.id)) {
        serviceMap.set(item.slug, doc.id)
      }
    }

    for (const item of servicesCatalog) {
      const pillarId = serviceMap.get(item.pillarSlug)
      if (!isSeedId(pillarId)) continue

      const existing = await findServiceBySlug(payload, item.slug)
      const data = {
        title: item.title,
        slug: item.slug,
        pillar: pillarId,
        summary: item.summary,
        body: item.body.join('\n\n'),
        _status: 'published' as const,
      }

      if (existing) {
        if (isFirstRun || shouldRefreshSeededContent) {
          await payload.update({ collection: 'services', id: existing.id, data, overrideAccess: true })
        }
      } else {
        await payload.create({ collection: 'services', data, overrideAccess: true })
      }
    }

    const sectorMap = new Map<string, SeedId>()
    for (const item of sectors) {
      const existing = await findSectorBySlug(payload, item.slug)
      const data = {
        title: item.title,
        slug: item.slug,
        summary: item.summary,
        overview: item.overview,
        principalLegalIssues: item.legalIssues.map((entry) => ({ item: entry })),
        relatedServicePillars: definedSeedIds(item.relatedServiceSlugs.map((slug) => serviceMap.get(slug))),
        _status: 'published' as const,
      }

      const doc = existing
        ? (isFirstRun || shouldRefreshSeededContent)
          ? await payload.update({ collection: 'sectors', id: existing.id, data, overrideAccess: true })
          : existing
        : await payload.create({ collection: 'sectors', data, overrideAccess: true })

      if (isSeedId(doc.id)) {
        sectorMap.set(item.slug, doc.id)
      }
    }

    const teamMap = new Map<string, SeedId>()
    for (const item of team) {
      const existing = await findTeamMemberBySlug(payload, item.slug)
      const data = {
        ...item,
        _status: 'published' as const,
      }

      const doc = existing
        ? (isFirstRun || shouldRefreshSeededContent)
          ? await payload.update({ collection: 'team-members', id: existing.id, data, overrideAccess: true })
          : existing
        : await payload.create({ collection: 'team-members', data, overrideAccess: true })

      if (isSeedId(doc.id)) {
        teamMap.set(item.slug, doc.id)
      }
    }

    for (const item of insights) {
      const existing = await findInsightBySlug(payload, item.slug)
      const authorId = teamMap.get(item.author)
      const data = {
        title: item.title,
        slug: item.slug,
        category: asInsightCategory(item.category),
        excerpt: item.excerpt,
        body: item.body.join('\n\n'),
        author: isSeedId(authorId) ? authorId : undefined,
        relatedServices: definedSeedIds(item.relatedServiceSlugs.map((slug) => serviceMap.get(slug))),
        relatedSectors: definedSeedIds(item.relatedSectorSlugs.map((slug) => sectorMap.get(slug))),
        _status: 'published' as const,
      }

      if (existing) {
        if (isFirstRun || shouldRefreshSeededContent) {
          await payload.update({ collection: 'insights', id: existing.id, data, overrideAccess: true })
        }
      } else {
        await payload.create({ collection: 'insights', data, overrideAccess: true })
      }
    }

    for (const [slug, data] of Object.entries(pageSeeds) as Array<[string, PageSeed]>) {
      const existing = await findPageBySlug(payload, slug)
      const pageData = { ...data, _status: 'published' as const }

      if (existing) {
        if (isFirstRun || shouldRefreshSeededContent) {
          await payload.update({ collection: 'pages', id: existing.id, data: pageData, overrideAccess: true })
        }
      } else {
        await payload.create({ collection: 'pages', data: pageData, overrideAccess: true })
      }
    }
  })()

  return seedPromise
}
