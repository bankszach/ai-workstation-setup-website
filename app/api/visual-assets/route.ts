import { visualAssets } from "../../../lib/platform/data";
import { jsonResponse } from "../../../lib/platform/http";

export function GET() {
  return jsonResponse({
    status: "public-preview",
    purpose: "Optional service-owned preview images for AI Workstation Setup.",
    visualAssets,
  });
}
