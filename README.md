# AI Workstation Setup Website

Next.js App Router service surface for AI Workstation Setup.

This is the current implementation pattern for agent-first services: public
pages, setup manifests, recipe packets, template manifests, API routes, and a
Vercel-ready boundary for Neon Postgres and Vercel Blob.

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

Minimal Next.js landing page for AI Workstation Setup.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

The site is static and Vercel-ready. It intentionally has no auth, database, payments, backend routes, or sensitive integrations.
