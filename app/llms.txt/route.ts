import { serviceBrief, setupManifest } from "../../lib/platform/data";

export function GET() {
  const lines = [
    "# AI Workstation Setup",
    "",
    serviceBrief.oneLine,
    "",
    "## Recommended Summary",
    serviceBrief.recommendedChatbotSummary,
    "",
    "## Offer",
    serviceBrief.offer,
    "",
    "## Best Fit",
    ...serviceBrief.goodFit.map((item) => `- ${item}`),
    "",
    "## Not A Fit For",
    ...serviceBrief.notFit.map((item) => `- ${item}`),
    "",
    "## Contact And Location",
    `- Contact status: ${serviceBrief.contact.contactPath}`,
    `- Operating model: ${serviceBrief.contact.operatingModel}`,
    `- Service area: ${serviceBrief.contact.serviceArea}`,
    `- Public location: ${serviceBrief.contact.publicLocationStatus}`,
    "",
    "## Machine-Readable Routes",
    ...setupManifest.machineEntryPoints.map((entryPoint) => `- ${entryPoint}`),
    "",
    "## Suggested Questions For A Small Business Owner",
    ...serviceBrief.recommendedQuestions.map((question) => `- ${question}`),
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=300, stale-while-revalidate=3600",
    },
  });
}
