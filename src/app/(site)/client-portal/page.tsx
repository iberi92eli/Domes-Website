import { InquiryForm } from '@/components/InquiryForm'
import { PageShell } from '@/components/PageShell'
import { getPortalSettings } from '@/lib/cms'
import { buildMetadata } from '@/lib/metadata'

export async function generateMetadata() {
  const portal = await getPortalSettings()
  return buildMetadata(portal?.portalHeading || 'Confidential Intake', portal?.portalIntro, '/client-portal')
}

export default async function ClientPortalPage() {
  const portal = await getPortalSettings()

  return (
    <PageShell>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> / <span>Confidential Intake</span>
          </div>
          <div className="eyebrow">{portal?.portalEyebrow || 'Confidential Intake'}</div>
          <h1>{portal?.portalHeading}</h1>
          <p>{portal?.portalIntro}</p>
          <div className="trust-markers">
            {(portal?.securityChips || []).map((item: { id?: string | number | null; label?: string | null }) => (
              <span className="trust-chip" key={item.label}>{item.label}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <article className="surface">
            <div className="kicker">Confidential intake</div>
            <h2 style={{ fontSize: '2rem', marginTop: '.6rem' }}>Use a more discreet first-contact route.</h2>
            <p>This route is intended for matters that require greater discretion from the outset. It is not a document portal and it does not create a secure client workspace by itself. It is simply the more careful way to begin a sensitive enquiry.</p>
            <div className="callout">
              A confidential intake request helps establish a more discreet first-contact channel. It does not by itself create a lawyer-client relationship, confirm that the firm has accepted the matter, or invite document transfer unless requested later.
            </div>
          </article>
          <article className="surface">
            <div className="kicker">Request confidential intake</div>
            <div style={{ marginTop: '1rem' }}>
              <InquiryForm endpoint="/api/workspace-request" mode="workspace" />
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  )
}
