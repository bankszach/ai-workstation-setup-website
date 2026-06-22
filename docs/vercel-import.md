# Vercel Import

Publish this directory as the GitHub repository:

```text
/Users/m5-pro/40-49-code-automation/40.10-repositories/business/ai-workstation-setup/ai-workstation-setup-website
```

Recommended GitHub repository name:

```text
ai-workstation-setup-website
```

## Vercel Settings

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: default

## Storage And Database

The app builds without storage credentials. Add these through Vercel Project
Settings after import:

- `DATABASE_URL`: Neon Postgres connection string from Vercel Marketplace.
- `BLOB_READ_WRITE_TOKEN`: Vercel Blob token.

Do not commit `.env` files to this repo.

## Current Public Routes

- `/`
- `/codex`
- `/codex/setup`
- `/codex/recipes`
- `/codex/templates`
- `/provider`
- `/api/health`
- `/api/platform`
- `/api/provider-profile`
- `/api/buyer-faq`
- `/api/setup-manifest`
- `/api/service-brief`
- `/api/recipes`
- `/api/recipes/starter-workspace-install`
- `/api/templates`
- `/api/mcp`
- `/llms.txt`
