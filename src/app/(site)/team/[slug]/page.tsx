import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageShell } from '@/components/PageShell'
import { getTeamMemberBySlug } from '@/lib/cms'
import { getInitials, getMediaUrl } from '@/lib/media'
import { buildMetadata } from '@/lib/metadata'
import { isPlaceholderProfile } from '@/lib/publicProfiles'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getTeamMemberBySlug(slug)
  if (!member || isPlaceholderProfile(member)) return buildMetadata('Team', null, '/firm')
  return buildMetadata(member.fullName, member.shortBio || member.jobTitle, `/team/${member.slug}`)
}

export default async function TeamProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = await getTeamMemberBySlug(slug)
  if (!member || isPlaceholderProfile(member)) notFound()

  const photoUrl = getMediaUrl(member.profilePhoto)

  return (
    <PageShell currentPath="/firm">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / <Link href="/firm">Firm</Link> / <span>{member.fullName}</span>
          </div>
          <div className="eyebrow">Team profile</div>
          <h1>{member.fullName}</h1>
          <p>{member.jobTitle}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <article className="surface">
            <p>{member.fullBio}</p>
          </article>
          <aside className="surface">
            {photoUrl ? (
              <Image className="media-thumb media-thumb-profile" src={photoUrl} alt={member.fullName} width={320} height={400} />
            ) : (
              <div className="avatar avatar-large">{getInitials(member.fullName)}</div>
            )}
            <p style={{ marginTop: '1rem' }}>
              Email: <a href={`mailto:${member.email}`}>{member.email}</a>
              <br />
              Phone: {member.phone}
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
