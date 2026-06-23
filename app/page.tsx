import { CopySurface, type ChatPlatform } from "../components/CopySurface";
import { providerProfile, serviceBrief } from "../lib/platform/data";

const launchPrompt = `Please inspect this AI-first service website for me.

Start here:
${serviceBrief.urls.homepage}

If you can browse a normal web page, read:
${serviceBrief.urls.brief}

If you can browse additional machine-readable routes, also read:
${serviceBrief.urls.serviceBrief}
${serviceBrief.urls.providerProfile}
${serviceBrief.urls.buyerFaq}
${serviceBrief.urls.setupManifest}
${serviceBrief.urls.llms}

Important: this is not a physical computer build, GPU workstation sales, or local AI hardware setup service.

Tell me what the company offers, who operates it, where it is based, who it is for, what problem it solves, whether it seems useful for a small business owner, and what questions a buyer should ask before booking.`;

const platforms: ChatPlatform[] = [
  {
    name: "ChatGPT",
    href: "https://chatgpt.com/",
    mark: "CG",
    accent: "#22c55e",
    instruction: "Paste the prompt into a new chat.",
  },
  {
    name: "Claude",
    href: "https://claude.ai/",
    mark: "CL",
    accent: "#d97745",
    instruction: "Open Claude and ask it to inspect the links.",
  },
  {
    name: "Gemini",
    href: "https://gemini.google.com/app",
    mark: "GE",
    accent: "#7c8cff",
    instruction: "Paste the prompt and let Gemini browse.",
  },
  {
    name: "Grok",
    href: "https://grok.com/",
    mark: "GX",
    accent: "#e5e7eb",
    instruction: "Open Grok with the copied prompt.",
  },
  {
    name: "Perplexity",
    href: "https://www.perplexity.ai/",
    mark: "PX",
    accent: "#20c7b6",
    instruction: "Use it for source-backed inspection.",
  },
  {
    name: "Copilot",
    href: "https://copilot.microsoft.com/",
    mark: "CP",
    accent: "#38bdf8",
    instruction: "Paste the prompt into Copilot chat.",
  },
];

const packetRoutes = [
  {
    href: serviceBrief.urls.brief,
    path: "/brief",
    label: "/brief",
    role: "Start here",
    description: "Plain-language buyer and agent brief.",
  },
  {
    href: serviceBrief.urls.serviceBrief,
    path: "/api/service-brief",
    label: "/api/service-brief",
    role: "Service summary",
    description: "Concise JSON description of the offer, audience, fit, and limitations.",
  },
  {
    href: serviceBrief.urls.providerProfile,
    path: "/api/provider-profile",
    label: "/api/provider-profile",
    role: "Operator identity",
    description: "Zachary Banks, Banks Inc., San Diego, California.",
  },
  {
    href: serviceBrief.urls.buyerFaq,
    path: "/api/buyer-faq",
    label: "/api/buyer-faq",
    role: "Buyer questions",
    description: "Trust, pricing, contact, scope, proof, and readiness questions.",
  },
  {
    href: serviceBrief.urls.setupManifest,
    path: "/api/setup-manifest",
    label: "/api/setup-manifest",
    role: "Setup contract",
    description: "Current starter boundary and machine-readable entry points.",
  },
  {
    href: serviceBrief.urls.llms,
    path: "/llms.txt",
    label: "/llms.txt",
    role: "LLM text index",
    description: "Compact text packet for chat tools and crawlers.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${serviceBrief.urls.homepage}/#organization`,
      name: providerProfile.operatingCompany,
      founder: providerProfile.operatorName,
      url: serviceBrief.urls.homepage,
      location: {
        "@type": "Place",
        name: providerProfile.baseLocation,
      },
    },
    {
      "@type": "Service",
      "@id": `${serviceBrief.urls.homepage}/#service`,
      name: serviceBrief.name,
      serviceType: "AI workflow installation",
      provider: {
        "@id": `${serviceBrief.urls.homepage}/#organization`,
      },
      areaServed: "United States",
      description:
        "A practical AI workflow installation service for small businesses: one user, one approved document set, one workflow, one training session, and one usage/support log. This is not a physical computer build, GPU workstation sales, local AI server build, or hardware sourcing service.",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Small business owners and office operators",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="launcherPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="launcherHero">
        <div className="wrap launcherShell">
          <div className="launcherIntro">
            <p className="systemLabel">Agent-readable service surface</p>
            <h1>Understand the service fast.</h1>
            <p className="launcherText">
              AI Workstation Setup is built so a person or AI agent can quickly
              verify the offer, operator, scope, exclusions, and buyer questions
              from public text routes. The service installs one controlled AI
              workflow; it does not sell or build physical AI workstations.
            </p>
            <div className="identityPanel">
              <strong>{providerProfile.operatingCompany}</strong>
              <span>{providerProfile.publicIdentitySummary}</span>
            </div>
            <a
              className="humanJump"
              href="#chat-handoff"
              aria-label="Humans click here: copy the prompt and open your chat tool"
            >
              Humans click here
              <span>Copy the prompt and open your chat tool</span>
            </a>
          </div>

          <div className="trustPanel" aria-label="Fast trust signals">
            <h2>Fast read order</h2>
            <ol>
              <li>
                <strong>Read the brief.</strong>
                <span>Human-readable explanation of what the service is and is not.</span>
              </li>
              <li>
                <strong>Check the provider profile.</strong>
                <span>Operator identity, company name, and public location.</span>
              </li>
              <li>
                <strong>Inspect the setup manifest.</strong>
                <span>Starter boundary, exclusions, and public packet routes.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="agentDirectory" aria-label="Public agent route directory">
        <div className="wrap">
          <div className="sectionHeader">
            <p className="systemLabel light">Public packet</p>
            <h2>Text routes for agents and buyers</h2>
            <p>
              These routes are the primary navigation. They are plain HTML, JSON,
              and text surfaces designed for fast reading, citation, and verification.
            </p>
          </div>
          <div className="routeCardGrid">
            {packetRoutes.map((route) => (
              <a className="routeCard" href={route.path} key={route.href}>
                <span>{route.role}</span>
                <strong>{route.label}</strong>
                <p>{route.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="handoffSection"
        id="chat-handoff"
        aria-label="Optional chat handoff prompt"
      >
        <div className="wrap handoffGrid">
          <div>
            <p className="systemLabel light">Optional handoff</p>
            <h2>Paste this into a chat tool when you want a second read.</h2>
            <p>
              The prompt is not the site structure. It is a shortcut for sending
              ChatGPT, Claude, Gemini, Grok, Perplexity, or Copilot through the
              same public text packet.
            </p>
          </div>
          <CopySurface platforms={platforms} prompt={launchPrompt} />
        </div>
      </section>
    </main>
  );
}
