import Link from 'next/link'

type FooterProps = {
  siteName?: string
  siteDescription?: string
  footerIntro?: string
  footerAddress?: string
  footerEmail?: string
  footerPhone?: string
}

export function Footer({
  siteName = 'Domes Legal',
  siteDescription,
  footerIntro,
  footerAddress,
  footerEmail,
  footerPhone,
}: FooterProps) {
  const intro = footerIntro || siteDescription || 'Premium legal counsel for business, disputes, and strategic risk.'

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>{siteName}</h3>
            <p>{intro}</p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li>
                <Link href="/firm">Firm</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/sectors">Sectors</Link>
              </li>
              <li>
                <Link href="/insights">Insights</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Key pages</h4>
            <ul>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/client-portal">Confidential Intake</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookie-notice">Cookie Notice</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              {footerEmail ? (
                <li>
                  <a href={`mailto:${footerEmail}`}>{footerEmail}</a>
                </li>
              ) : null}
              {footerPhone ? (
                <li>
                  <a href={`tel:${footerPhone.replace(/\s+/g, '')}`}>{footerPhone}</a>
                </li>
              ) : null}
              {(footerAddress || '').split(/\n/).filter(Boolean).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>(c) {siteName}. All rights reserved.</span>
          <span>
            <Link href="/terms-of-use">Terms</Link> | <Link href="/privacy-policy">Privacy</Link> | <Link href="/cookie-notice">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
