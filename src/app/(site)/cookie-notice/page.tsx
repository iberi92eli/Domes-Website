import { LegalPageTemplate, getLegalPageMetadata } from '@/components/LegalPageTemplate'

export async function generateMetadata() {
  return getLegalPageMetadata('cookie-notice', '/cookie-notice')
}

export default async function CookieNoticePage() {
  return <LegalPageTemplate slug="cookie-notice" />
}
