import { LegalPageTemplate, getLegalPageMetadata } from '@/components/LegalPageTemplate'

export async function generateMetadata() {
  return getLegalPageMetadata('privacy-policy', '/privacy-policy')
}

export default async function PrivacyPolicyPage() {
  return <LegalPageTemplate slug="privacy-policy" />
}
