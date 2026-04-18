import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { getHomepageData } from '@/lib/cms'
import { buildMetadata } from '@/lib/metadata'

type HomepageMetric = { title?: string | null; text?: string | null }
type SimpleDoc = { id: string | number; slug: string; title: string; summary?: string | null; excerpt?: string | null; category?: string | null }

const instructionSignals = [
  {
    title: 'The facts are messy',
    text: 'The issue does not fit neatly into one label, but legal judgment still has to be fast and commercially usable.',
  },
  {
    title: 'Exposure is rising',
    text: 'Regulatory attention, contract friction, asset risk, or reputational pressure is beginning to harden.',
  },
  {
    title: 'Execution matters as much as analysis',
    text: 'The client needs drafting, negotiation, and controlled follow-through, not just abstract commentary.',
  },
]

function arrayText(items: HomepageMetric[] | null | undefined) {
  return (items || []).filter((entry) => entry?.title || entry?.text)
}

export async function generateMetadata() {
  const { homepage } = await getHomepageData()
  return buildMetadata(homepage?.heroHeadline || 'Domes Legal', homepage?.heroText, '/')
}

export default async function HomePage() {
  const { homepage, services, sectors, insights } = await getHomepageData()
  const metrics = arrayText(homepage?.homeMetrics as HomepageMetric[] | undefined)
  const whyDomes = arrayText(homepage?.whyDomesItems as HomepageMetric[] | undefined)
  const practiceGroups = services as SimpleDoc[]
  const sectorDocs = sectors as SimpleDoc[]
  const insightDocs = insights as SimpleDoc[]

  return (
    <PageShell currentPath="/">
      <section className="hero hero-layered">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">{homepage?.heroEyebrow || 'Commercial law firm'}</div>
            <h1>{homepage?.heroHeadline}</h1>
            <div className="tagline">Commercial judgment. Discreet first contact. Controlled execution.</div>
            <p>{homepage?.heroText}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Request a consultation
              </Link>
              <Link className="btn btn-secondary" href="/client-portal">
                Start confidential intake
              </Link>
            </div>
            <div className="pillars-nav">
              {practiceGroups.map((item) => (
                <Link key={item.slug} href={`/services/${item.slug}`}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card">
              <strong>{homepage?.experienceTitle || 'How we work'}</strong>
              <span>{homepage?.experienceText}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="narrative-band">
            {metrics.map((metric) => (
              <article key={`${metric.title}-${metric.text}`} className="narrative-card">
                <strong>{metric.title}</strong>
                <p>{metric.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-balanced">
          <div>
            <div className="kicker">Core practice</div>
            <h2>Built around the points where legal quality changes outcome.</h2>
            <p className="section-intro">{homepage?.servicesIntro}</p>
          </div>
          <aside className="surface insight-aside">
            <div className="kicker">{homepage?.whyDomesHeading || 'Why clients instruct the firm'}</div>
            <ul className="list-clean" style={{ marginTop: '1rem' }}>
              {whyDomes.map((item) => (
                <li key={`${item.title}-${item.text}`}>
                  <strong>{item.title}</strong> {item.text}
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="container">
          <div className="grid-3">
            {practiceGroups.map((item) => (
              <article className="card card-accent" key={item.id}>
                <span className="badge">Primary practice</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link className="card-link" href={`/services/${item.slug}`}>
                  Explore service
                </Link>
              </article>
            ))}
            <article className="card card-accent">
              <span className="badge">Additional mandate profile</span>
              <h3>{homepage?.secondaryPracticeTitle}</h3>
              <p>{homepage?.secondaryPracticeText}</p>
              <Link className="card-link" href="/client-portal">
                Use confidential intake
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container">
          <div className="kicker">When to use the firm</div>
          <h2>Most useful when the matter stops being routine.</h2>
          <p className="section-intro">
            Domes Legal should not read like a directory of interchangeable services. The firm is strongest where facts, pressure, and consequences have already started to converge.
          </p>
          <div className="grid-3">
            {instructionSignals.map((item) => (
              <article className="surface surface-contrast" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split split-balanced">
          <div>
            <div className="kicker">Sector focus</div>
            <h2>Sector context that sharpens advice instead of decorating it.</h2>
            <p className="section-intro">{homepage?.sectorsIntro}</p>
          </div>
          <aside className="surface insight-aside">
            <div className="kicker">Why it matters</div>
            <p style={{ marginTop: '1rem' }}>
              Sector focus is useful only when it improves legal judgment. Here it is used to understand counterparties, regulatory rhythm, transaction structure, and the types of disputes most likely to surface.
            </p>
          </aside>
        </div>
        <div className="container">
          <div className="grid-3 sector-grid-three">
            {sectorDocs.map((item) => (
              <article className="card" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="btn btn-secondary" href="/sectors">
              View sectors
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-reverse">
          <div className="surface insight-aside">
            <div className="kicker">Insights</div>
            <h2 style={{ fontSize: '2.15rem', marginTop: '.6rem' }}>Commentary that helps clients think earlier and more clearly.</h2>
            <p>
              The insights section should support judgment, not noise. It works best when it explains what clients should notice before a problem hardens, not after everyone already sees it.
            </p>
            <Link className="btn btn-secondary btn-small" href="/insights">
              View all insights
            </Link>
          </div>
          <div className="grid-2">
            {insightDocs.map((item) => (
              <article className="card" key={item.id}>
                <span className="badge">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <Link className="card-link" href={`/insights/${item.slug}`}>
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-final">
        <div className="container">
          <div className="surface final-cta">
            <div>
              <div className="kicker">Contact</div>
              <h2 style={{ marginTop: '.6rem' }}>{homepage?.contactHeading}</h2>
              <p>{homepage?.contactText}</p>
            </div>
            <div className="hero-actions final-cta-actions">
              <Link className="btn btn-primary" href="/contact">
                Contact the firm
              </Link>
              <Link className="btn btn-secondary" href="/client-portal">
                Confidential intake
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
