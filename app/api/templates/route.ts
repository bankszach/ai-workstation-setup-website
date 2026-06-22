import { templateManifests } from "../../../lib/platform/data";
import { jsonResponse } from "../../../lib/platform/http";

export function GET() {
  return jsonResponse({
    count: templateManifests.length,
    templates: templateManifests,
  });
}
