"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { navItems, topbarLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type HeaderProps = {
  currentPath?: string
  siteName?: string
  utilityEmail?: string
  utilityPhone?: string
  portalButtonLabel?: string
  trustNotice?: string
  logoUrl?: string | null
}

export function Header({
  currentPath = '/',
  siteName = 'Domes Legal',
  utilityEmail,
  utilityPhone,
  portalButtonLabel = 'Confidential Intake',
  trustNotice,
  logoUrl,
}: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-meta">
            {utilityEmail ? (
              <span>
                Email: <a href={`mailto:${utilityEmail}`}>{utilityEmail}</a>
              </span>
            ) : null}
            {utilityPhone ? (
              <span>
                Phone: <a href={`tel:${utilityPhone.replace(/\s+/g, '')}`}>{utilityPhone}</a>
              </span>
            ) : null}
          </div>
          <div className="topbar-links">
            {trustNotice ? <span className="topbar-trust">{trustNotice}</span> : null}
            {topbarLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.href === '/client-portal' ? portalButtonLabel : item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label={`${siteName} home`}>
            <Image
              className="brand-logo"
              src={logoUrl || '/logo.svg'}
              alt={siteName}
              width={1252}
              height={355}
              priority
            />
          </Link>
          <nav className="nav-desktop" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={cn('nav-link', currentPath === item.href && 'active')}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="btn btn-secondary portal-link" href="/client-portal">
              {portalButtonLabel}
            </Link>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Open navigation"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={cn('mobile-panel', open && 'is-open')}>
        <div className="mobile-panel-inner">
          <div className="mobile-panel-bar">
            <strong>Menu</strong>
            <button className="btn btn-secondary btn-small" type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Mobile">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/client-portal" onClick={() => setOpen(false)}>
              {portalButtonLabel}
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
