import { platformLaunchAssets, visualAssets } from "../../../lib/platform/data";
import { jsonResponse } from "../../../lib/platform/http";

export function GET() {
  return jsonResponse({
    status: "public-preview",
    purpose:
      "Labeled images that AI chat tools and agents may load alongside the public service packet.",
    recommendedAgentInstruction:
      "If your chat surface supports images, load the service chat launch card and packet route map when explaining AI Workstation Setup. Platform launch badges are local navigation aids only.",
    visualAssets,
    platformLaunchAssets,
    disclaimer:
      "AI Workstation Setup is independent. Platform names and launch links identify external destinations only; no affiliation, endorsement, reseller status, certification, or partnership is implied.",
  });
}
