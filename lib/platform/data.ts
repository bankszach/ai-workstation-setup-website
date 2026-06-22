import type {
  DataServiceModel,
  RecipePacket,
  SetupManifest,
  TemplateManifest,
} from "./types";

export const serviceVersion = "2026.06.22-alpha";

export const dataServiceModel: DataServiceModel = {
  primaryDatabase: "Neon Postgres through Vercel Marketplace",
  objectStorage: "Vercel Blob",
  logicSurface: "Next.js App Router on Vercel",
  futureMcpSurface: "HTTP route handlers first, dedicated MCP transport only if required",
  tables: [
    "recipes",
    "recipe_versions",
    "setup_manifests",
    "templates",
    "template_versions",
    "vertical_packs",
    "package_snapshots",
    "source_records",
    "validation_profiles",
    "agent_contracts",
    "audit_events",
  ],
  blobArtifacts: [
    "generated package JSON bundles",
    "downloadable Markdown exports",
    "client-safe package snapshots",
    "training handouts",
    "template bundles",
  ],
};

export const recipePackets: RecipePacket[] = [
  {
    id: "starter-workspace-install",
    title: "AI Workstation Starter Workspace Install",
    version: serviceVersion,
    status: "active",
    audience: "new Codex workspace",
    purpose:
      "Install one bounded AI workflow for one user using approved documents, a workflow recipe, training, and logging.",
    approvedSources: [
      "approved document inventory",
      "client README",
      "workflow recipe",
      "service boundary rules",
    ],
    inputs: [
      "first user",
      "workflow name",
      "approved document list",
      "output format",
      "review owner",
    ],
    steps: [
      "Create a client workspace from the starter template.",
      "Record the first user and workflow boundary.",
      "Copy only approved documents into the approved document set.",
      "Create or select one workflow recipe packet.",
      "Run the workflow once with non-sensitive inputs.",
      "Review the output with the human owner.",
      "Record the usage/support log entry.",
    ],
    outputs: [
      "client README",
      "approved document inventory",
      "workflow recipe",
      "training plan",
      "handoff note",
      "usage/support log",
    ],
    verification: [
      "The workflow has one user.",
      "The workflow uses one approved document set.",
      "No excluded sensitive systems are connected.",
      "A human review step is defined before external use.",
      "The run is logged.",
    ],
    stopConditions: [
      "The user asks to connect email, accounting, payroll, HR, legal, customer databases, servers, or live business systems.",
      "The document approval status is unclear.",
      "The output contains claims the user cannot verify.",
      "The workflow expands beyond one user or one workflow.",
    ],
    apiPath: "/api/recipes/starter-workspace-install",
  },
  {
    id: "insurance-agency-renewal-prep",
    title: "Insurance Agency Renewal Prep Starter",
    version: serviceVersion,
    status: "draft",
    audience: "independent insurance agency first user",
    purpose:
      "Use sanitized carrier guidance, a renewal checklist, and approved templates to prepare a renewal review draft for human approval.",
    approvedSources: [
      "sanitized carrier guidance",
      "non-client renewal checklist",
      "approved email template",
      "agency workflow notes",
    ],
    inputs: [
      "renewal scenario",
      "approved carrier document names",
      "desired checklist format",
      "review owner",
    ],
    steps: [
      "Confirm the renewal materials are approved for the demo.",
      "Ask the agent to summarize the applicable checklist items.",
      "Draft a renewal preparation checklist.",
      "Draft a review email using the approved template.",
      "Mark all assumptions and points needing licensed review.",
      "Record the result in the support log.",
    ],
    outputs: [
      "renewal preparation checklist",
      "draft review email",
      "questions for human reviewer",
      "usage/support log row",
    ],
    verification: [
      "No AMS, live email, client database, carrier portal, or sensitive client data is used.",
      "Coverage or policy advice is marked for human review.",
      "The output uses only approved sources.",
    ],
    stopConditions: [
      "Client private records are requested.",
      "The workflow asks for carrier portal credentials.",
      "The agent is asked to send client communication automatically.",
    ],
    apiPath: "/api/recipes/insurance-agency-renewal-prep",
  },
];

export const templateManifests: TemplateManifest[] = [
  {
    id: "client-readme",
    title: "Client README Template",
    format: "markdown",
    purpose: "Defines the client workspace purpose, first user, workflow, approved documents, and human review rule.",
    path: "docs/04-client-templates/client-readme-template.md",
    packetRole: "workspace-orientation",
  },
  {
    id: "workflow-recipe",
    title: "Workflow Recipe Template",
    format: "markdown",
    purpose: "Defines one repeatable AI workflow with inputs, steps, outputs, verification, and stop conditions.",
    path: "docs/04-client-templates/workflow-recipe-template.md",
    packetRole: "recipe-contract",
  },
  {
    id: "document-inventory",
    title: "Document Inventory Template",
    format: "csv",
    purpose: "Tracks approved, review, and excluded documents for the starter workflow.",
    path: "docs/04-client-templates/document-inventory-template.csv",
    packetRole: "source-boundary",
  },
  {
    id: "support-log",
    title: "Support Log Template",
    format: "csv",
    purpose: "Records usage, issues, follow-up, and handoff support activity.",
    path: "docs/04-client-templates/support-log-template.csv",
    packetRole: "event-log",
  },
];

export const setupManifest: SetupManifest = {
  service: "ai-workstation-setup",
  version: serviceVersion,
  generatedAt: "2026-06-22T00:00:00-07:00",
  status: "static-ready",
  purpose:
    "Serve the first public agent-facing setup contract for AI workflow installation workspaces.",
  humanEntryPoints: ["/", "/codex", "/codex/setup", "/codex/recipes", "/codex/templates"],
  machineEntryPoints: [
    "/api/health",
    "/api/platform",
    "/api/setup-manifest",
    "/api/recipes",
    "/api/templates",
    "/api/mcp",
  ],
  serviceBoundary: {
    included: [
      "one user",
      "one approved document set",
      "one workflow",
      "one training session",
      "one usage/support log",
    ],
    excluded: [
      "direct email integration",
      "server access",
      "payroll/accounting access",
      "HR/legal sensitive data",
      "customer database access",
      "company-wide rollout",
      "multi-user permissions",
      "custom web apps",
      "full embedding databases",
      "advanced automations",
    ],
    humanReviewRequired: [
      "before sending outputs to customers, vendors, employees, regulators, or the public",
      "before using outputs for business decisions",
      "before adding documents with unclear approval status",
      "before connecting any sensitive system",
    ],
  },
  dataServiceModel,
  starterRecipeIds: recipePackets.map((recipe) => recipe.id),
  templateIds: templateManifests.map((template) => template.id),
};

export function findRecipe(recipeId: string) {
  return recipePackets.find((recipe) => recipe.id === recipeId);
}
