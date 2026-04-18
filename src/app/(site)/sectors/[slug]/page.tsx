import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { getSectorBySlug } from '@/lib/cms'
import type { ServicePillar } from '@/lib/cms-types'
import { buildMetadata } from '@/lib/metadata'
import { arrayItems } from '@/lib/text'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getSectorBySlug(slug)
  if (!item) return buildMetadata('Sectors', null, '/sectors')
  return buildMetadata(item.title, item.summary || item.overview, `/sectors/${item.slug}`)
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = await getSectorBySlug(slug)
  if (!item) notFound()

  return (
    <PageShell currentPath="/sectors">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/sectors">Sectors</Link> / <span>{item.title}</span>
          </div>
          <div className="eyebrow">Sector</div>
          <h1>{item.title}</h1>
          <p>{item.overview}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Principal legal issues</div>
            <ul className="list-clean" style={{ marginTop: '1rem' }}>
              {arrayItems(item.principalLegalIssues).map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
          <aside className="surface">
            <div className="kicker">Related services</div>
            <ul className="list-clean" style={{ marginTop: '1rem' }}>
              {(item.relatedServicePillars || []).map((entry: ServicePillar | string | number) => {
                if (typeof entry !== 'object' || !('slug' in entry)) return null
                return (
                  <li key={entry.id}>
                    <Link href={`/services/${entry.slug}`}>{entry.title}</Link>
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
