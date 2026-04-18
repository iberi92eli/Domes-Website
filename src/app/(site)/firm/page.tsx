import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import { getFeaturedTeam, getPageBySlug } from '@/lib/cms'
import type { FeaturedTeamMember } from '@/lib/cms-types'
import { getInitials, getMediaUrl } from '@/lib/media'
import { buildMetadata } from '@/lib/metadata'
import { isPlaceholderProfile } from '@/lib/publicProfiles'
import { splitParagraphs } from '@/lib/text'

export async function generateMetadata() {
  const page = await getPageBySlug('firm')
  return buildMetadata(page?.heroTitle || page?.title || 'Firm', page?.heroText || page?.body, '/firm')
}

export default async function FirmPage() {
  const [page, team] = await Promise.all([getPageBySlug('firm'), getFeaturedTeam()])
  const publicProfiles = team.filter((member) => !isPlaceholderProfile(member))

  return (
    <PageShell currentPath="/firm">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> / <span>Firm</span>
          </div>
          <div className="eyebrow">Firm</div>
          <h1>{page?.heroTitle}</h1>
          <p>{page?.heroText}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid-2">
          {splitParagraphs(page?.body).map((paragraph, index) => {
            const sectionLabels = ['Who we are', 'Core focus', 'How we work', 'Why clients instruct us']
            return (
              <article className="surface" key={index}>
                <div className="kicker">{sectionLabels[index] || 'Approach'}</div>
                <p style={{ marginTop: '1rem' }}>{paragraph}</p>
              </article>
            )
          })}
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="kicker">Representative profiles</div>
          <h2 style={{ marginTop: '.6rem' }}>Public lawyer profiles appear here once final biographies are approved.</h2>
          <p className="section-intro" style={{ marginBottom: '1.5rem' }}>
            This section is intentionally conservative. It should show real names, real roles, and verified biographies only. Until those profiles are ready, the firm page should stay honest rather than padded with placeholders.
          </p>
          {publicProfiles.length ? (
            <div className="grid-2" style={{ marginTop: '2rem' }}>
              {publicProfiles.map((member: FeaturedTeamMember) => {
                const photoUrl = getMediaUrl(member.profilePhoto)
                return (
                  <article className="card" key={member.id}>
                    <div className="profile-card">
                      {photoUrl ? (
                        <Image className="media-thumb media-thumb-avatar" src={photoUrl} alt={member.fullName} width={96} height={96} />
                      ) : (
                        <div className="avatar">{getInitials(member.fullName)}</div>
                      )}
                      <div>
                        <h3>{member.fullName}</h3>
                        <p><strong>{member.jobTitle}</strong></p>
                      </div>
                    </div>
                    <p style={{ marginTop: '1rem' }}>{member.shortBio}</p>
                    <Link className="card-link" href={`/team/${member.slug}`}>
                      View profile
                    </Link>
                  </article>
                )
              })}
            </div>
          ) : (
            <article className="surface firm-profile-note">
              <div className="kicker">Current status</div>
              <p style={{ marginTop: '1rem' }}>
                The CMS structure for public lawyer profiles is ready, but final biographies, headshots, and representative-matter summaries should be added only once they are approved for publication.
              </p>
              <Link className="btn btn-secondary btn-small" href="/contact">
                Contact the firm
              </Link>
            </article>
          )}
        </div>
      </section>
    </PageShell>
  )
}
