#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

required=(
  "app/page.tsx"
  "app/codex/page.tsx"
  "app/codex/setup/page.tsx"
  "app/codex/recipes/page.tsx"
  "app/codex/templates/page.tsx"
  "app/provider/page.tsx"
  "components/CopySurface.tsx"
  "app/api/health/route.ts"
  "app/api/platform/route.ts"
  "app/api/provider-profile/route.ts"
  "app/api/buyer-faq/route.ts"
  "app/api/setup-manifest/route.ts"
  "app/api/service-brief/route.ts"
  "app/api/recipes/route.ts"
  "app/api/templates/route.ts"
  "app/api/mcp/route.ts"
  "app/llms.txt/route.ts"
  "lib/platform/data.ts"
  "lib/platform/db.ts"
  "lib/platform/blob.ts"
  "docs/vercel-import.md"
)

for path in "${required[@]}"; do
  test -f "$ROOT/$path" || {
    echo "missing required file: $path" >&2
    exit 1
  }
done

if find "$ROOT" -path "$ROOT/.git" -prune -o -name ".env" -print | grep -q .; then
  echo "project-local .env file found; keep secrets out of this repo" >&2
  exit 1
fi

if ! grep -q "Neon Postgres" "$ROOT/lib/platform/data.ts"; then
  echo "platform data missing Neon Postgres boundary" >&2
  exit 1
fi

if ! grep -q "Vercel Blob" "$ROOT/lib/platform/data.ts"; then
  echo "platform data missing Vercel Blob boundary" >&2
  exit 1
fi

if ! grep -q "recommendedChatbotSummary" "$ROOT/lib/platform/data.ts"; then
  echo "platform data missing chatbot service brief" >&2
  exit 1
fi

if ! grep -q "Zachary Banks" "$ROOT/lib/platform/data.ts"; then
  echo "platform data missing public provider identity" >&2
  exit 1
fi

if ! grep -q "providerProfile.publicIdentitySummary" "$ROOT/app/page.tsx"; then
  echo "homepage missing first-screen provider identity" >&2
  exit 1
fi

if ! grep -q "Copy the prompt. Open your AI." "$ROOT/app/page.tsx"; then
  echo "homepage missing AI-first positioning" >&2
  exit 1
fi

if ! grep -q "navigator.clipboard.writeText" "$ROOT/components/CopySurface.tsx"; then
  echo "copy surface missing clipboard behavior" >&2
  exit 1
fi

if ! grep -q "https://chatgpt.com/" "$ROOT/app/page.tsx"; then
  echo "homepage missing ChatGPT launch link" >&2
  exit 1
fi

if ! grep -q "https://claude.ai/" "$ROOT/app/page.tsx"; then
  echo "homepage missing Claude launch link" >&2
  exit 1
fi

echo "ai-workstation-setup-website smoke passed"
