# Domes Legal - Next.js + Payload CMS Starter (CMS-Wired)

This is the CMS-wired implementation starter for the Domes Legal public website.

## What changed in this version

- Public pages now read their content from **Payload collections and globals** instead of hardcoded frontend arrays.
- Placeholder service pillars, sectors, insights, team members, global settings, and page content are **auto-seeded on first run**.
- The current visual direction remains based on **Website Design option 1.3**.
- All phase-one enquiry flows are stored in the **intake-submissions** collection by default; live email or CRM notifications are optional follow-on wiring.

## Tech stack

- Next.js App Router
- Payload CMS 3
- SQLite by default for easy local startup
- Ready to switch to Postgres later

## Local setup

1. Copy `.env.example` to `.env`
2. Install dependencies
3. Start the app

```bash
npm install
npm test
npm run dev
```

Then open:

```
http://localhost:3000
```

## Payload admin

Open:

```
http://localhost:3000/admin
```

On first use, create the first admin user through the Payload admin flow.

## How the placeholder content works

This starter automatically seeds the database with realistic placeholder content the first time the site runs. That includes:

- Site settings
- Header and footer globals
- Homepage global
- Contact settings
- Portal entry settings
- Firm / services / sectors / insights / legal pages
- Service pillars
- Sectors
- Insights
- Team members

Once the content exists, you can edit it directly in Payload.

Seed refresh behavior is now intentionally conservative:

- existing CMS content is **not overwritten by default** when the starter seed version changes
- if you intentionally want starter-managed content to refresh on an existing database, set `ALLOW_SEED_CONTENT_MIGRATION=true` for that run
- that migration flag is meant for controlled starter-content updates, not for day-to-day editing

## What you can edit through the CMS

- Homepage text
- Services and service pillar pages
- Sectors
- Insights and author linkage
- Team profiles
- Contact details
- Client portal entry page text
- Legal pages

## Important limitation

You can add **new content entries** through the CMS easily.

Examples:
- add another sector
- add another service pillar
- add another article
- add another team member

But **new visual module types** still require developer work. In other words, the CMS can add more entries to the approved templates, but it does not automatically invent new page components by itself.

## Current scope

This starter covers the **public website + CMS foundation** only. The secure client portal itself is still a later phase.

Public lawyer profiles and representative-matter details should be published only when final real-world biographies are ready. The starter now avoids surfacing placeholder lawyer profiles on the public site by default.


Admin integration note: this build uses separate `(site)` and `(payload)` route groups so the public site and Payload admin each control their own document root without nested `<html>` / `<body>` issues.


## Runtime notes

- The project now generates Payload's admin import map automatically before `npm run dev` and `npm run build`.
- The `services` collection is seeded with placeholder entries on first run.


## Production notes

- The starter now uses `next/image` for site and CMS-managed images. Configure `NEXT_PUBLIC_SITE_URL` correctly for the deployment environment so image optimisation and canonical URLs resolve to the right host.
- The built-in intake-form rate limiter is intentionally lightweight. It includes validation, a honeypot, bounded request windows, and periodic cleanup of expired keys, but it remains **process-scoped**. In multi-instance or serverless production deployments, use a shared store or edge/provider rate limiting if you need stronger protection.
- Minimal smoke tests now cover intake validation/rate limiting and the seed write-decision gate. Run `npm test` before release changes that touch either flow.


## Intake submissions

- Contact and workspace-request forms are now durably stored in the `intake-submissions` collection for manual review.
- The starter does **not** send live email notifications by default. Before production, connect email, CRM, or another alerting channel.
- Sensitive intake payloads are not written to logs; only minimal redacted operational logs are emitted.


## Proxy-aware rate limiting

The starter rate limiter is in-memory and process-scoped. It is suitable for local development and low-risk starter deployments, but not as a complete production abuse-control layer.

- By default, the app does **not** trust proxy-derived IP headers and falls back to a local/shared bucket unless you opt in to proxy trust.
- It only trusts proxy-derived IP headers (`cf-connecting-ip`, `x-real-ip`, or `x-forwarded-for`) when you explicitly set `TRUST_PROXY=true` in your environment.
- In multi-instance or serverless deployments, use an external shared rate-limiting store or edge/platform protection.

## Dependency security note

- The project now includes an `overrides` entry for `drizzle-orm` so installations can resolve to a newer patched ORM release when supported by the Payload dependency graph.
- Because the SQL adapter stack is upstream to Payload, you should still review `npm audit` output during release preparation and keep Payload packages current.
