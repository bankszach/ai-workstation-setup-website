import { recipePackets, setupManifest, templateManifests } from "../../../lib/platform/data";
import { jsonResponse } from "../../../lib/platform/http";

export function GET() {
  return jsonResponse({
    surface: "future-mcp",
    status: "read-only-discovery",
    service: setupManifest.service,
    version: setupManifest.version,
    tools: [
      {
        name: "get_setup_manifest",
        description: "Return the current AI Workstation setup manifest.",
        route: "/api/setup-manifest",
      },
      {
        name: "list_recipe_packets",
        description: "Return recipe packet summaries.",
        route: "/api/recipes",
      },
      {
        name: "get_recipe_packet",
        description: "Return a recipe packet by ID.",
        route: "/api/recipes/{recipe_id}",
      },
      {
        name: "list_template_manifests",
        description: "Return starter template manifests.",
        route: "/api/templates",
      },
      {
        name: "get_service_brief",
        description: "Return a concise chatbot-readable service brief.",
        route: "/api/service-brief",
      },
      {
        name: "get_provider_profile",
        description: "Return public operator and business identity details.",
        route: "/api/provider-profile",
      },
      {
        name: "get_buyer_faq",
        description: "Return buyer-readiness questions and answers.",
        route: "/api/buyer-faq",
      },
      {
        name: "get_visual_assets",
        description: "Return labeled service images and local platform launch badges for chat surfaces that support image display.",
        route: "/api/visual-assets",
      },
    ],
    recipeCount: recipePackets.length,
    templateCount: templateManifests.length,
    mutationPolicy: "no write tools in the public starter surface",
  });
}
