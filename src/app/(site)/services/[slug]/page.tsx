import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { getServicePillarBySlug, getServices } from '@/lib/cms'
import type { Service, ServicePillarDetail } from '@/lib/cms-types'
import { buildMetadata } from '@/lib/metadata'
import { arrayItems } from '@/lib/text'

export const dynamic = 'force-dynamic'

function belongsToPillar(service: Service, pillar: ServicePillarDetail) {
  const relation = service.pillar
  const relationId = typeof relation === 'object' ? relation?.id : relation
  return String(relationId) === String(pillar.id)
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getServicePillarBySlug(slug)
  if (!item) return buildMetadata('Services', null, '/services')
  return buildMetadata(item.title, item.summary || item.intro, `/services/${item.slug}`)
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = await getServicePillarBySlug(slug)
  if (!item) notFound()

  const services = await getServices()
  const relatedServices = services.filter((entry: Service) => belongsToPillar(entry, item))

  return (
    <PageShell currentPath="/services">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> / <span>{item.title}</span>
          </div>
          <div className="eyebrow">Practice group</div>
          <h1>{item.title}</h1>
          <p>{item.intro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <div className="kicker">Key mandates</div>
            <h2 style={{ fontSize: '2rem', marginTop: '.6rem' }}>Representative work areas</h2>
            <ul className="list-clean">
              {arrayItems(item.keyMandates).map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
          <aside className="surface">
            <div className="kicker">Typical client needs</div>
            <ul className="list-clean" style={{ marginTop: '1rem' }}>
              {arrayItems(item.clientNeeds).map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Discuss this matter
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="kicker">Services within this group</div>
          <h2 style={{ marginTop: '.6rem' }}>Detailed service catalogue.</h2>
          <div className="service-list-grid" style={{ marginTop: '2rem' }}>
            {relatedServices.map((entry: Service) => (
              <article className="service-mini-card" key={entry.id}>
                <h4>{entry.title}</h4>
                <p>{entry.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
