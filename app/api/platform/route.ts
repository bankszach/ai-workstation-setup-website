import { getBlobStatus } from "../../../lib/platform/blob";
import { dataServiceModel, providerProfile } from "../../../lib/platform/data";
import { getDatabaseStatus } from "../../../lib/platform/db";
import { jsonResponse } from "../../../lib/platform/http";

export const dynamic = "force-dynamic";

export function GET() {
  return jsonResponse(
    {
      platform: "agent-workstation-knowledge-surface",
      operator: providerProfile,
      logicSurface: dataServiceModel.logicSurface,
      primaryDatabase: dataServiceModel.primaryDatabase,
      objectStorage: dataServiceModel.objectStorage,
      futureMcpSurface: dataServiceModel.futureMcpSurface,
      database: getDatabaseStatus(),
      blob: getBlobStatus(),
      tables: dataServiceModel.tables,
      blobArtifacts: dataServiceModel.blobArtifacts,
    },
    {
      headers: {
        "cache-control": "no-store",
      },
    },
  );
}
