import { LegalPageTemplate, getLegalPageMetadata } from '@/components/LegalPageTemplate'

export async function generateMetadata() {
  return getLegalPageMetadata('terms-of-use', '/terms-of-use')
}

export default async function TermsOfUsePage() {
  return <LegalPageTemplate slug="terms-of-use" />
}
