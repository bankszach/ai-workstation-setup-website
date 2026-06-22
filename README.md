# AI Workstation Setup Website

Next.js App Router service surface for AI Workstation Setup.

This is the current implementation pattern for agent-first services: public
pages, setup manifests, recipe packets, template manifests, API routes, and a
Vercel-ready boundary for Neon Postgres and Vercel Blob.

The site also exposes chatbot-readable discovery surfaces:

- `/api/service-brief`
- `/api/provider-profile`
- `/api/buyer-faq`
- `/llms.txt`
- `/api/setup-manifest`

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
./scripts/smoke.sh
```

## Publish

Publish this directory to GitHub as:

```text
ai-workstation-setup-website
```

Then import the GitHub repository into Vercel as a Next.js project. See
`docs/vercel-import.md`.
