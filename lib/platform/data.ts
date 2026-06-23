import type {
  DataServiceModel,
  BuyerFaq,
  ProviderProfile,
  PlatformLaunchAsset,
  ServiceBrief,
  RecipePacket,
  SetupManifest,
  TemplateManifest,
  VisualAsset,
} from "./types";

export const serviceVersion = "2026.06.22-public-preview";

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

export const publicBaseUrl = "https://ai-workstation-setup-website.vercel.app";

function publicAsset(path: string) {
  return `${publicBaseUrl}${path}`;
}

export const contactProfile = {
  status: "provider-identified" as const,
  contactPath:
    "Operated by Zachary Banks under Banks Inc. A public email or booking link still needs to be published before outbound sales.",
  operatingModel:
    "Remote-first setup and training for small businesses, with client-local workspaces and approved documents only.",
  serviceArea:
    "Based in San Diego, California. Remote-first service for small businesses unless a local/on-site scope is agreed separately.",
  publicLocationStatus:
    "Operator base is San Diego, California. No public office address is listed.",
};

export const providerProfile: ProviderProfile = {
  operatorName: "Zachary Banks",
  operatingCompany: "Banks Inc.",
  companyStatus:
    "California S corporation, as provided by the operator for public service positioning.",
  baseLocation: "San Diego, California",
  serviceRelationship:
    "AI Workstation Setup is a new service line operated by Zachary Banks under Banks Inc.",
  publicIdentitySummary:
    "Zachary Banks operates AI Workstation Setup through Banks Inc. from San Diego, California.",
  verificationNote:
    "This public profile is operator-provided and should be paired with a published contact path, pricing, and terms before outbound sales.",
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

export const platformLaunchAssets: PlatformLaunchAsset[] = [
  {
    name: "ChatGPT",
    href: "https://chatgpt.com/",
    badgeUrl: publicAsset("/platform-assets/chatgpt-launch-badge.svg"),
    badgeAlt: "Local launch badge for opening ChatGPT",
    sourceUrl: "https://openai.com/brand/",
    sourceLabel: "OpenAI Design Guidelines",
    brandUseNote:
      "OpenAI owns the OpenAI, ChatGPT, and GPT marks. This site uses a local launch badge and text reference only; no affiliation or endorsement is implied.",
  },
  {
    name: "Claude",
    href: "https://claude.ai/",
    badgeUrl: publicAsset("/platform-assets/claude-launch-badge.svg"),
    badgeAlt: "Local launch badge for opening Claude",
    sourceUrl: "https://claude.ai/",
    sourceLabel: "Claude public product site",
    brandUseNote:
      "Claude is referenced only as an independent destination where a user may paste the service-inspection prompt.",
  },
  {
    name: "Gemini",
    href: "https://gemini.google.com/app",
    badgeUrl: publicAsset("/platform-assets/gemini-launch-badge.svg"),
    badgeAlt: "Local launch badge for opening Gemini",
    sourceUrl: "https://partnermarketinghub.withgoogle.com/brands/google/overview/",
    sourceLabel: "Google Partner Marketing Hub overview",
    brandUseNote:
      "Gemini and Google are referenced only as independent destinations where a user may paste the service-inspection prompt.",
  },
  {
    name: "Grok",
    href: "https://grok.com/",
    badgeUrl: publicAsset("/platform-assets/grok-launch-badge.svg"),
    badgeAlt: "Local launch badge for opening Grok",
    sourceUrl: "https://x.ai/legal/brand-guidelines",
    sourceLabel: "xAI Brand Guidelines",
    brandUseNote:
      "xAI owns the xAI and Grok marks. This site uses a local launch badge and text reference only; no affiliation or endorsement is implied.",
  },
  {
    name: "Perplexity",
    href: "https://www.perplexity.ai/",
    badgeUrl: publicAsset("/platform-assets/perplexity-launch-badge.svg"),
    badgeAlt: "Local launch badge for opening Perplexity",
    sourceUrl: "https://live.standards.site/perplexity/logo",
    sourceLabel: "Perplexity logo standards",
    brandUseNote:
      "Perplexity is referenced only as an independent destination where a user may paste the service-inspection prompt.",
  },
  {
    name: "Copilot",
    href: "https://copilot.microsoft.com/",
    badgeUrl: publicAsset("/platform-assets/copilot-launch-badge.svg"),
    badgeAlt: "Local launch badge for opening Copilot",
    sourceUrl: "https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks",
    sourceLabel: "Microsoft Trademark and Brand Guidelines",
    brandUseNote:
      "Microsoft Copilot is referenced only as an independent destination. This site uses a local launch badge rather than a Microsoft product icon.",
  },
];

export const visualAssets: VisualAsset[] = [
  {
    id: "service-chat-launch-card",
    label: "AI Workstation Setup chat launch card",
    type: "service-brand-card",
    imageUrl: publicAsset("/agent-assets/ai-workstation-chat-card.svg"),
    alt: "AI Workstation Setup card that says Copy the prompt. Open your AI.",
    recommendedUse:
      "Load this image when summarizing the service in a chat interface that supports rich previews or image display.",
    markdown: `![AI Workstation Setup chat launch card](${publicAsset("/agent-assets/ai-workstation-chat-card.svg")})`,
    source: "AI Workstation Setup owned service asset",
    rightsNote: "Owned service branding for AI Workstation Setup / Banks Inc.",
  },
  {
    id: "agent-packet-route-map",
    label: "Agent packet route map",
    type: "service-packet-map",
    imageUrl: publicAsset("/agent-assets/ai-workstation-packet-map.svg"),
    alt: "Route map showing the public agent-readable endpoints for AI Workstation Setup.",
    recommendedUse:
      "Load this image when explaining how an AI agent should inspect the website and its public packet routes.",
    markdown: `![AI Workstation Setup packet map](${publicAsset("/agent-assets/ai-workstation-packet-map.svg")})`,
    source: "AI Workstation Setup owned service asset",
    rightsNote: "Owned service branding for AI Workstation Setup / Banks Inc.",
  },
  ...platformLaunchAssets.map((platform): VisualAsset => ({
    id: `${platform.name.toLowerCase().replaceAll(" ", "-")}-launch-badge`,
    label: `${platform.name} launch badge`,
    type: "platform-launch-badge",
    imageUrl: platform.badgeUrl,
    alt: platform.badgeAlt,
    recommendedUse:
      "Use as a navigation aid on the AI Workstation Setup launch surface; do not treat it as a partnership, endorsement, or official vendor asset.",
    markdown: `![${platform.badgeAlt}](${platform.badgeUrl})`,
    source: platform.sourceLabel,
    rightsNote: platform.brandUseNote,
  })),
];

export const setupManifest: SetupManifest = {
  service: "ai-workstation-setup",
  version: serviceVersion,
  generatedAt: "2026-06-22T00:00:00-07:00",
  status: "public-preview",
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
    "/api/service-brief",
    "/api/provider-profile",
    "/api/buyer-faq",
    "/api/visual-assets",
    "/llms.txt",
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
  contact: contactProfile,
  provider: providerProfile,
  starterRecipeIds: recipePackets.map((recipe) => recipe.id),
  templateIds: templateManifests.map((template) => template.id),
};

export const buyerFaq: BuyerFaq[] = [
  {
    question: "Who operates AI Workstation Setup?",
    answer:
      "AI Workstation Setup is operated by Zachary Banks under Banks Inc., based in San Diego, California.",
  },
  {
    question: "Where does the service operate?",
    answer:
      "The public posture is remote-first from San Diego, California. Local or on-site work should be scoped separately.",
  },
  {
    question: "How do I contact or book the service?",
    answer:
      "A public email or booking link has not been published yet. That should be added before outbound sales or paid intake.",
  },
  {
    question: "What is included in the starter?",
    answer:
      "One user, one approved document set, one workflow, one training session, and one usage/support log.",
  },
  {
    question: "What is excluded from the starter?",
    answer:
      "Direct email integration, server access, payroll/accounting access, HR/legal sensitive data, customer database access, company-wide rollout, multi-user permissions, custom web apps, full embedding databases, and advanced automations.",
  },
  {
    question: "Is pricing public?",
    answer:
      "Not yet. Pricing, terms, and refund/cancellation policy should be published before active sales.",
  },
  {
    question: "What proof should a buyer ask for?",
    answer:
      "Ask for a sample workflow recipe, approved-document inventory, support log, training outline, and a sanitized example setup.",
  },
];

export const serviceBrief: ServiceBrief = {
  name: "AI Workstation Setup",
  oneLine:
    "A practical AI workflow installation service for small businesses that want one controlled first AI workflow before broader automation.",
  provider: providerProfile,
  audience: [
    "small business owners",
    "office admins",
    "consultants",
    "insurance agencies",
    "training teams",
    "property offices",
    "service businesses",
    "nonprofits",
  ],
  problemSolved:
    "Many small businesses want to use AI but do not know how to start safely. The service turns approved documents, one user, and one repeatable workflow into a controlled AI-assisted operating process with human review.",
  offer:
    "AI Workstation Starter: one user, one approved document set, one workflow, one training session, and one usage/support log. Sensitive integrations are excluded from the starter.",
  goodFit: [
    "a business with repeatable document-heavy admin work",
    "a team that needs safe first-user AI adoption",
    "an owner who wants practical setup and training rather than a broad AI transformation project",
    "a workflow where approved documents, templates, checklists, or SOPs can support the user",
  ],
  notFit: [
    "immediate Gmail, accounting, payroll, HR, legal, server, or customer database integration",
    "company-wide rollout",
    "autonomous outbound communication",
    "custom app development as the first step",
  ],
  contact: contactProfile,
  recommendedChatbotSummary:
    "AI Workstation Setup is operated by Zachary Banks under Banks Inc. from San Diego, California. It installs one controlled AI workflow for one small-business user using approved documents, a reusable recipe, training, and a support log. It is useful for businesses that want safe, practical AI adoption before sensitive integrations or company-wide rollout.",
  recommendedQuestions: [
    "Which repeatable workflow would save the first user the most time?",
    "Which documents are approved for AI use?",
    "Who reviews outputs before they are sent or used for business decisions?",
    "Which systems must stay out of scope?",
    "What output should the first workflow produce?",
  ],
  urls: {
    homepage: publicBaseUrl,
    setupManifest: `${publicBaseUrl}/api/setup-manifest`,
    recipes: `${publicBaseUrl}/api/recipes`,
    serviceBrief: `${publicBaseUrl}/api/service-brief`,
    providerProfile: `${publicBaseUrl}/api/provider-profile`,
    buyerFaq: `${publicBaseUrl}/api/buyer-faq`,
    visualAssets: `${publicBaseUrl}/api/visual-assets`,
    llms: `${publicBaseUrl}/llms.txt`,
  },
};

export function findRecipe(recipeId: string) {
  return recipePackets.find((recipe) => recipe.id === recipeId);
}
