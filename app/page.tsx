import { CopySurface } from "../components/CopySurface";
import { OfferCard } from "../components/OfferCard";
import { Section } from "../components/Section";
import { providerProfile, serviceBrief } from "../lib/platform/data";

const included = [
  "tool selection/setup guidance",
  "workspace folder structure",
  "approved document folder",
  "basic document inventory",
  "reusable workflow recipe",
  "first-user training",
  "support log",
];

const audiences = [
  "contractors",
  "insurance agencies",
  "training teams",
  "property offices",
  "service businesses",
  "consultants",
  "small offices",
  "nonprofits",
  "project managers",
  "office admins",
];

const verticals = [
  "independent insurance agencies",
  "training and certification businesses",
  "property management companies",
];

const aiReviewPrompt = `Please review this AI-first service website and tell me what you understand the company offers, who operates it, where it is based, who it is for, what problem it solves, and whether it seems useful for a small business owner.

${serviceBrief.urls.homepage}`;

const shortShareMessage = `Open this AI-first service website and inspect the public packet routes if useful:

${serviceBrief.urls.homepage}`;

const agentPacket = [
  serviceBrief.urls.homepage,
  serviceBrief.urls.serviceBrief,
  serviceBrief.urls.providerProfile,
  serviceBrief.urls.buyerFaq,
  serviceBrief.urls.setupManifest,
  serviceBrief.urls.llms,
].join("\n");

const copyItems = [
  {
    label: "Review prompt",
    helper: "Best default message for ChatGPT, Claude, Gemini, or Grok.",
    value: aiReviewPrompt,
  },
  {
    label: "Short link message",
    helper: "Use when you only need to send the site into a chat window.",
    value: shortShareMessage,
  },
  {
    label: "Agent packet links",
    helper: "Use when an AI tool should inspect the machine-readable routes.",
    value: agentPacket,
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap heroGrid">
          <div>
            <p className="eyebrow">AI-first website for LLM chat tools</p>
            <h1>Paste this site into your AI chat.</h1>
            <p className="heroText">
              This surface is designed to be consumed by ChatGPT, Claude,
              Gemini, Grok, Codex, and other AI agents. Copy a prompt, drop it
              into a chat window, and let the model inspect the public service
              packets.
            </p>
            <p className="identityLine">{providerProfile.publicIdentitySummary}</p>
            <a className="primary" href="#copy-for-ai">
              Copy an AI prompt
            </a>
            <a className="secondaryLink" href="/codex">
              Open Codex setup surface
            </a>
          </div>
          <CopySurface items={copyItems} />
        </div>
      </section>

      <section className="section copyBand" id="copy-for-ai">
        <div className="wrap">
          <h2>Send the website to an AI agent first</h2>
          <div className="copyWorkflow">
            <div>
              <span>1</span>
              <h3>Copy a message</h3>
              <p>Use the review prompt, short link message, or packet route list.</p>
            </div>
            <div>
              <span>2</span>
              <h3>Paste into chat</h3>
              <p>Drop it into ChatGPT, Claude, Gemini, Grok, or another LLM tool.</p>
            </div>
            <div>
              <span>3</span>
              <h3>Let the model inspect</h3>
              <p>The site exposes pages, JSON routes, and llms.txt for agent reading.</p>
            </div>
          </div>
        </div>
      </section>

      <Section title="What it is">
        <div className="plainGrid">
          <OfferCard title="AI-first website" body="The primary user path is to copy this site into an AI chat tool and let the model inspect the public service packet." />
          <OfferCard title="Not a chatbot" body="The service builds the working layer around AI tools: folders, approved documents, recipes, verification, and logs." />
          <OfferCard title="Not a transformation program" body="The starter is deliberately small, built for one user and one workflow before any wider rollout." />
        </div>
      </Section>

      <Section title="Agent-first service surface" tone="muted">
        <div className="verticalBlock">
          <p>
            This project is the first implementation of the agent-first service
            pattern: human-readable setup pages, machine-readable setup
            manifests, recipe packets, template metadata, API routes, and a
            Vercel-ready path to Neon Postgres and Blob storage. Generic chat
            assistants can inspect the packet routes and summarize the service
            without private context.
          </p>
          <div className="verticalList">
            <a href="/api/service-brief">/api/service-brief</a>
            <a href="/api/provider-profile">/api/provider-profile</a>
            <a href="/llms.txt">/llms.txt</a>
            <a href="/api/setup-manifest">/api/setup-manifest</a>
            <a href="/api/recipes">/api/recipes</a>
          </div>
        </div>
      </Section>

      <Section title="Share with ChatGPT, Claude, or Grok">
        <div className="twoColumn">
          <div>
            <p className="large">{serviceBrief.recommendedChatbotSummary}</p>
            <p className="note">
              Baseline prompt: review this website and explain what the company
              offers, who it is for, what problem it solves, and whether it is
              useful for a small business owner.
            </p>
          </div>
          <div className="package">
            <h3>Public contact status</h3>
            <p>{serviceBrief.contact.contactPath}</p>
            <p>{serviceBrief.contact.serviceArea}</p>
          </div>
        </div>
      </Section>

      <Section title="Who operates it">
        <div className="twoColumn">
          <div>
            <p className="large">{providerProfile.publicIdentitySummary}</p>
            <p className="note">{providerProfile.serviceRelationship}</p>
            <a href="/provider">Open provider profile</a>
          </div>
          <div className="package">
            <h3>{providerProfile.operatingCompany}</h3>
            <ul>
              <li>{providerProfile.baseLocation}</li>
              <li>{providerProfile.companyStatus}</li>
              <li>{serviceBrief.contact.serviceArea}</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="One setup, adapted by industry" tone="muted">
        <div className="verticalBlock">
          <p>
            The core process stays the same: approved documents, organized
            workspace, first workflow, trained user, and support log. The
            examples change by market.
          </p>
          <div className="verticalList">
            {verticals.map((vertical) => (
              <span key={vertical}>{vertical}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Starter package">
        <div className="package">
          <h3>AI Workstation Starter</h3>
          <ul>
            <li>one user</li>
            <li>one approved document set</li>
            <li>one workflow</li>
            <li>one training session</li>
            <li>one usage log</li>
            <li>no sensitive integrations</li>
          </ul>
        </div>
      </Section>

      <Section title="Who it is for">
        <div className="pillGrid">
          {audiences.map((audience) => (
            <span key={audience}>{audience}</span>
          ))}
        </div>
      </Section>

      <Section title="What is included" tone="muted">
        <div className="checkGrid">
          {included.map((item) => (
            <div key={item} className="checkItem">
              <span aria-hidden="true">OK</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Security boundary">
        <p className="large">
          Starter package does not require access to email, servers,
          accounting, payroll, HR, customer databases, or internal systems. It
          starts with approved documents only.
        </p>
      </Section>

      <section className="cta">
        <div className="wrap">
          <h2>Book a starter setup</h2>
          <p>
            Start with one user, one document set, and one workflow. Public
            booking details are not published yet.
          </p>
          <a className="primary inverse" href="/api/provider-profile">
            Open provider profile
          </a>
        </div>
      </section>
    </main>
  );
}
