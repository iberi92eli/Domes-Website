import { InquiryForm } from '@/components/InquiryForm'
import { PageShell } from '@/components/PageShell'
import { getContactSettings, getPageBySlug } from '@/lib/cms'
import { buildMetadata } from '@/lib/metadata'
import { getTextValue } from '@/lib/text'

export async function generateMetadata() {
  const [page, contact] = await Promise.all([getPageBySlug('contact'), getContactSettings()])
  return buildMetadata(page?.heroTitle || contact?.contactHeading || 'Contact', page?.heroText || contact?.contactIntro, '/contact')
}

export default async function ContactPage() {
  const [page, contact] = await Promise.all([getPageBySlug('contact'), getContactSettings()])
  const contactLines = [
    contact?.contactEmail ? `Email: ${contact.contactEmail}` : null,
    contact?.contactPhone ? `Phone: ${contact.contactPhone}` : null,
    ...(contact?.contactAddress ? contact.contactAddress.split(/\n/).filter(Boolean).map((line) => `Office: ${line}`) : []),
  ].filter(Boolean) as string[]

  return (
    <PageShell currentPath="/contact">
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <span>Home</span> / <span>Contact</span>
          </div>
          <div className="eyebrow">Contact</div>
          <h1>{page?.heroTitle || contact?.contactHeading}</h1>
          <p>{page?.heroText || contact?.contactIntro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="surface">
            <div className="kicker">Get in touch</div>
            <p style={{ marginTop: '1rem' }}>
              {contact?.contactEmail ? (
                <>
                  Email: <a href={`mailto:${contact.contactEmail}`}>{contact.contactEmail}</a>
                </>
              ) : (
                'Use the form for a first approach.'
              )}
              {contact?.contactPhone ? (
                <>
                  <br />
                  Phone: <a href={`tel:${contact.contactPhone.replace(/\s+/g, '')}`}>{contact.contactPhone}</a>
                </>
              ) : null}
              {contact?.contactAddress ? (
                <>
                  <br />
                  Office: {contact.contactAddress.split(/\n/).join(', ')}
                </>
              ) : null}
            </p>
            <div className="callout">
              Initial website enquiries are reviewed confidentially and stored in the firm&apos;s intake system for follow-up.
            </div>
            {contactLines.length === 1 && !contact?.contactPhone && !contact?.contactAddress ? (
              <p className="utility-note" style={{ marginTop: '1rem' }}>
                Additional contact details can be added in the CMS once the final public office information is ready.
              </p>
            ) : null}
          </div>
          <div className="surface">
            <div className="kicker">Tell us about the matter</div>
            <p style={{ marginTop: '1rem' }}>{getTextValue(page?.body)}</p>
            <div style={{ marginTop: '1rem' }}>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
