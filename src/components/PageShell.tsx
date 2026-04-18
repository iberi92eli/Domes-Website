import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { StickyCTA } from '@/components/StickyCTA'
import { getSiteChrome } from '@/lib/cms'
import { getMediaUrl } from '@/lib/media'

type SiteSettingsShape = {
  siteName?: string | null
  siteDescription?: string | null
  logo?: unknown
}

type HeaderGlobalShape = {
  utilityEmail?: string | null
  utilityPhone?: string | null
  portalButtonLabel?: string | null
  trustNotice?: string | null
}

type FooterGlobalShape = {
  footerIntro?: string | null
  footerAddress?: string | null
  footerEmail?: string | null
  footerPhone?: string | null
}

export async function PageShell({ currentPath, children }: { currentPath?: string; children: ReactNode }) {
  const { siteSettings, headerGlobal, footerGlobal } = await getSiteChrome()

  const normalizedSiteSettings = (siteSettings || {}) as SiteSettingsShape
  const normalizedHeaderGlobal = (headerGlobal || {}) as HeaderGlobalShape
  const normalizedFooterGlobal = (footerGlobal || {}) as FooterGlobalShape

  return (
    <>
      <Header
        currentPath={currentPath}
        siteName={normalizedSiteSettings.siteName ?? undefined}
        utilityEmail={normalizedHeaderGlobal.utilityEmail ?? undefined}
        utilityPhone={normalizedHeaderGlobal.utilityPhone ?? undefined}
        portalButtonLabel={normalizedHeaderGlobal.portalButtonLabel ?? undefined}
        trustNotice={normalizedHeaderGlobal.trustNotice ?? undefined}
        logoUrl={getMediaUrl(normalizedSiteSettings.logo)}
      />
      <main>{children}</main>
      <Footer
        siteName={normalizedSiteSettings.siteName ?? undefined}
        siteDescription={normalizedSiteSettings.siteDescription ?? undefined}
        footerIntro={normalizedFooterGlobal.footerIntro ?? undefined}
        footerAddress={normalizedFooterGlobal.footerAddress ?? undefined}
        footerEmail={normalizedFooterGlobal.footerEmail ?? undefined}
        footerPhone={normalizedFooterGlobal.footerPhone ?? undefined}
      />
      <StickyCTA />
    </>
  )
}
