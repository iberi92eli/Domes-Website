import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { getPageBySlug, getServicePillars, getServices } from '@/lib/cms'
import type { Service, ServicePillar } from '@/lib/cms-types'
import { buildMetadata } from '@/lib/metadata'
import { splitParagraphs } from '@/lib/text'

function belongsToPillar(service: Service, pillar: ServicePillar) {
  const relation = service.pillar
  const relationId = typeof relation === 'object' ? relation?.id : relation
  return String(relationId) === String(pillar.id)
}

export async function generateMetadata() {
  const page = await getPageBySlug('services')
  return buildMetadata(page?.heroTitle || page?.title || 'Services', page?.heroText || page?.body, '/services')
}

export default async function ServicesPage() {
  const [page, servicePillars, services] = await Promise.all([
    getPageBySlug('services'),
    getServicePillars(),
    getServices(),
  ])

  const groupedServices = servicePillars.map((pillar: ServicePillar) => ({
    pillar,
    services: services.filter((item: Service) => belongsToPillar(item, pillar)),
  }))

  return (
    <PageShell currentPath="/services">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> / <span>Services</span>
          </div>
          <div className="eyebrow">Services</div>
          <h1>{page?.heroTitle}</h1>
          <p>{page?.heroText}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {splitParagraphs(page?.body).map((paragraph, index) => (
            <p className="section-intro" key={index}>{paragraph}</p>
          ))}
          <div className="grid-3">
            {servicePillars.map((item: ServicePillar) => (
              <article className="card" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link className="card-link" href={`/services/${item.slug}`}>
                  View practice group
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="kicker">Detailed services</div>
          <h2 style={{ marginTop: '.6rem' }}>Specific legal services, organised by practice group.</h2>
          <p className="section-intro">
            This section sets out the firm&apos;s specific mandates beneath each practice group, so visitors can move from the broader architecture to the exact support Domes Legal provides.
          </p>
          <div className="service-group-stack">
            {groupedServices.map(({ pillar, services }) => (
              <section className="surface" key={pillar.id} id={`group-${pillar.slug}`}>
                <div className="service-group-header">
                  <div>
                    <div className="kicker">Practice Group</div>
                    <h3 style={{ marginTop: '.7rem' }}>{pillar.title}</h3>
                    <p>{pillar.summary}</p>
                  </div>
                  <Link className="btn btn-secondary btn-small" href={`/services/${pillar.slug}`}>
                    Open group page
                  </Link>
                </div>
                <div className="service-list-grid">
                  {services.map((item: Service) => (
                    <article className="service-mini-card" key={item.id}>
                      <h4>{item.title}</h4>
                      <p>{item.summary}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
