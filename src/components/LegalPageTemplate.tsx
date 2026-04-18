import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { getPageBySlug } from '@/lib/cms'
import { buildMetadata } from '@/lib/metadata'
import { splitParagraphs } from '@/lib/text'

export async function getLegalPageMetadata(slug: string, path: string) {
  const page = await getPageBySlug(slug)
  return buildMetadata(page?.heroTitle || page?.title || 'Legal', page?.heroText || page?.body, path)
}

export async function LegalPageTemplate({ slug }: { slug: string }) {
  const page = await getPageBySlug(slug)
  if (!page) notFound()

  return (
    <PageShell>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Legal</div>
          <h1>{page.heroTitle || page.title}</h1>
          <p>{page.heroText}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="surface">
            {splitParagraphs(page.body).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </PageShell>
  )
}
