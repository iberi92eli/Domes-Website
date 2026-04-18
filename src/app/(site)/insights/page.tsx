import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { getInsights, getPageBySlug } from '@/lib/cms'
import type { Insight } from '@/lib/cms-types'
import { getMediaUrl } from '@/lib/media'
import { buildMetadata } from '@/lib/metadata'
import { splitParagraphs } from '@/lib/text'

export async function generateMetadata() {
  const page = await getPageBySlug('insights')
  return buildMetadata(page?.heroTitle || page?.title || 'Insights', page?.heroText || page?.body, '/insights')
}

export default async function InsightsPage() {
  const [page, insights] = await Promise.all([getPageBySlug('insights'), getInsights()])

  return (
    <PageShell currentPath="/insights">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> / <span>Insights</span>
          </div>
          <div className="eyebrow">Insights</div>
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
            {insights.map((item: Insight) => {
              const imageUrl = getMediaUrl(item.featuredImage)
              return (
                <article className="card" key={item.id}>
                  {imageUrl ? (
                    <Image className="media-thumb media-thumb-article" src={imageUrl} alt={item.title} width={640} height={360} />
                  ) : (
                    <div className="media-placeholder">
                      <span>Featured image</span>
                    </div>
                  )}
                  <span className="badge" style={{ marginTop: '1rem' }}>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link className="card-link" href={`/insights/${item.slug}`}>
                    Read article
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
