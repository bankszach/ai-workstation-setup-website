import { getBlobStatus } from "../../../lib/platform/blob";
import { setupManifest } from "../../../lib/platform/data";
import { getDatabaseStatus } from "../../../lib/platform/db";
import { jsonResponse } from "../../../lib/platform/http";

export const dynamic = "force-dynamic";

export function GET() {
  return jsonResponse(
    {
      ok: true,
      service: setupManifest.service,
      version: setupManifest.version,
      status: setupManifest.status,
      database: getDatabaseStatus(),
      blob: getBlobStatus(),
      machineEntryPoints: setupManifest.machineEntryPoints,
    },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  );
}
