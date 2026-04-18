import type { Metadata } from 'next'
import { getSiteUrl } from '@/lib/env'
import { getTextValue } from '@/lib/text'

export function buildMetadata(title: string, description?: string | null, path = ''): Metadata {
  const cleanDescription = getTextValue(description) || 'Domes Legal advises on commercial matters, disputes, regulatory exposure, and complex legal risk.'
  const cleanTitle = title ? `${title} | Domes Legal` : 'Domes Legal'

  return {
    title: cleanTitle,
    description: cleanDescription,
    alternates: {
      canonical: `${getSiteUrl()}${path}`,
    },
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url: `${getSiteUrl()}${path}`,
      siteName: 'Domes Legal',
      type: 'website',
    },
  }
}
