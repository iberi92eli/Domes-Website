import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { getPageBySlug, getSectors } from '@/lib/cms'
import type { Sector } from '@/lib/cms-types'
import { buildMetadata } from '@/lib/metadata'
import { splitParagraphs } from '@/lib/text'

export async function generateMetadata() {
  const page = await getPageBySlug('sectors')
  return buildMetadata(page?.heroTitle || page?.title || 'Sectors', page?.heroText || page?.body, '/sectors')
}

export default async function SectorsPage() {
  const [page, sectors] = await Promise.all([getPageBySlug('sectors'), getSectors()])

  return (
    <PageShell currentPath="/sectors">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> / <span>Sectors</span>
          </div>
          <div className="eyebrow">Sectors</div>
          <h1>{page?.heroTitle}</h1>
          <p>{page?.heroText}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {splitParagraphs(page?.body).map((paragraph, index) => (
            <p className="section-intro" key={index}>{paragraph}</p>
          ))}
          <div className="grid-2">
            {sectors.map((item: Sector) => (
              <article className="card" key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link className="card-link" href={`/sectors/${item.slug}`}>
                  View sector
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
