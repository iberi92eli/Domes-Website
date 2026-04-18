import Link from 'next/link'

export function StickyCTA() {
  return (
    <div className="sticky-cta">
      <Link className="btn btn-primary" href="/contact">
        Request a consultation
      </Link>
    </div>
  )
}
