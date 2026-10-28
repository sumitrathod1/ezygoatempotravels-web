# Ezy Goa Tempo Travels: website

Next.js 16 (App Router, TypeScript, Tailwind CSS 4), fully static pages with a standalone server for Easypanel.

Project notes (the brief, tracking setup and content to-do list) are kept outside this repository.

## Run locally

```bash
npm install
cp .env.example .env.local    # then set NEXT_PUBLIC_GTM_ID
npm run dev                   # http://localhost:3000
```

GTM only loads on `www.ezygoatempotravels.com`, or when GTM Preview adds `gtm_debug` to the URL.

## Production build

```bash
npm run build
cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
node .next/standalone/server.js    # PORT and HOSTNAME env vars set the address
```

## Deploy on Easypanel

Build from this repository with the `Dockerfile` (no build settings needed):

- **Port:** 3000.
- **Build args** (optional; these are the defaults baked into the Dockerfile):
  `NEXT_PUBLIC_SITE_URL=https://www.ezygoatempotravels.com`, `NEXT_PUBLIC_GTM_ID=GTM-MBMT9VR7`.
  They are build-time values: changing them means rebuilding, not just restarting.

Previews on Easypanel's temporary `*.easypanel.host` URL are safe to share: every response on any host
other than `www.ezygoatempotravels.com` carries `X-Robots-Tag: noindex, nofollow`, and GTM doesn't load
there, so no analytics are sent.

Going live on the real domain (DNS, both `www` and apex domains with HTTPS) is a separate step; see the
launch checklist in Phase 4 of the brief.
