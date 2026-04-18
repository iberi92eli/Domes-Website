import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { getInsightBySlug } from '@/lib/cms'
import { getInitials, getMediaUrl } from '@/lib/media'
import { buildMetadata } from '@/lib/metadata'
import { getPublicAuthorLabel, isPlaceholderProfile } from '@/lib/publicProfiles'
import { splitParagraphs } from '@/lib/text'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = await getInsightBySlug(slug)
  if (!article) return buildMetadata('Insights', null, '/insights')
  return buildMetadata(article.title, article.excerpt, `/insights/${article.slug}`)
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getInsightBySlug(slug)
  if (!article) notFound()

  const author = article.author && typeof article.author === 'object' ? article.author : null
  const publicAuthor = author && !isPlaceholderProfile(author) ? author : null
  const imageUrl = getMediaUrl(article.featuredImage)
  const authorImageUrl = getMediaUrl(publicAuthor?.profilePhoto)

  return (
    <PageShell currentPath="/insights">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / <span>{article.title}</span>
          </div>
          <div className="eyebrow">{article.category}</div>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <article className="surface article-content">
            {imageUrl ? (
              <Image className="media-thumb media-thumb-hero" src={imageUrl} alt={article.title} width={1200} height={675} />
            ) : (
              <div className="media-placeholder media-placeholder-hero">
                <span>Featured image</span>
              </div>
            )}
            {splitParagraphs(article.body).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
          <aside className="surface">
            <div className="kicker">Author</div>
            {publicAuthor ? (
              <>
                <div className="profile-card" style={{ marginTop: '1rem' }}>
                  {authorImageUrl ? (
                    <Image className="media-thumb media-thumb-avatar" src={authorImageUrl} alt={publicAuthor.fullName} width={96} height={96} />
                  ) : (
                    <div className="avatar">{getInitials(publicAuthor.fullName)}</div>
                  )}
                  <div>
                    <p><strong>{publicAuthor.fullName}</strong><br />{publicAuthor.jobTitle}</p>
                  </div>
                </div>
                <p>{publicAuthor.shortBio}</p>
                <Link className="btn btn-secondary btn-small" href={`/team/${publicAuthor.slug}`}>
                  View profile
                </Link>
              </>
            ) : (
              <>
                <p style={{ marginTop: '1rem' }}>
                  <strong>{getPublicAuthorLabel(author)}</strong>
                </p>
                <p>
                  This article is published without an individual public byline until final representative profiles are approved for the live site.
                </p>
              </>
            )}
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
