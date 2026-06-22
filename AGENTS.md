# AGENTS.md - AI Workstation Setup Website

This repo is the publishable Next.js/Vercel implementation of the AI
Workstation Setup agent-first service surface.

## Purpose

This is not a traditional company app. It is the first implementation of the
agent-first service pattern for AI workflow installation:

- human-readable setup pages;
- machine-readable setup manifests;
- recipe packets;
- template manifests;
- API routes;
- Vercel-ready Neon Postgres boundary;
- Vercel Blob package-artifact boundary;
- future MCP discovery surface.

## Operating Rules

- Keep the starter service boundary narrow: one user, one approved document set,
  one workflow, one training session, one usage/support log.
- Do not imply official vendor affiliation, certification, reseller status, or
  endorsement.
- Do not commit `.env*`, credentials, keys, tokens, or local build output.
- Keep public write tools out of the starter surface.
- Use Route Handlers for public agent APIs.
- Use lazy initialization for database, Blob, and other service clients so
  Vercel builds without runtime secrets.

## Safe Commands

```bash
npm install
npm run build
npm audit --audit-level=moderate
./scripts/smoke.sh
```

## Vercel Import

Import this repository into Vercel as a Next.js project.

Future environment variables:

- `DATABASE_URL`: Neon Postgres through Vercel Marketplace.
- `BLOB_READ_WRITE_TOKEN`: Vercel Blob.
