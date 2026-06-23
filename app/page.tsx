import { CopySurface, type ChatPlatform } from "../components/CopySurface";
import { providerProfile, serviceBrief } from "../lib/platform/data";

const launchPrompt = `Please inspect this AI-first service website for me.

Start here:
${serviceBrief.urls.homepage}

If you can browse additional routes, also read:
${serviceBrief.urls.serviceBrief}
${serviceBrief.urls.providerProfile}
${serviceBrief.urls.buyerFaq}
${serviceBrief.urls.setupManifest}
${serviceBrief.urls.llms}

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
  serviceBrief.urls.serviceBrief,
  serviceBrief.urls.providerProfile,
  serviceBrief.urls.buyerFaq,
  serviceBrief.urls.setupManifest,
  serviceBrief.urls.llms,
];

export default function Home() {
  return (
    <main className="launcherPage">
      <section className="launcherHero">
        <div className="wrap launcherShell">
          <div className="launcherIntro">
            <p className="systemLabel">AI-first launch surface</p>
            <h1>Copy the prompt. Open your AI.</h1>
            <p className="launcherText">
              This website is designed to be consumed through a chat tool first.
              Copy the prompt, choose ChatGPT, Claude, Gemini, Grok, Perplexity,
              or Copilot, then let the model inspect the public packet routes.
            </p>
            <div className="identityPanel">
              <strong>{providerProfile.operatingCompany}</strong>
              <span>{providerProfile.publicIdentitySummary}</span>
            </div>
          </div>

          <CopySurface platforms={platforms} prompt={launchPrompt} />
        </div>
      </section>

      <section className="launcherSteps" aria-label="How to use this site">
        <div className="wrap stepGrid">
          <div>
            <span>01</span>
            <h2>Copy</h2>
            <p>Use the prompt deck above. It already includes the main site and packet routes.</p>
          </div>
          <div>
            <span>02</span>
            <h2>Open</h2>
            <p>Pick the AI chat tool you already use. Platform links open in a new tab.</p>
          </div>
          <div>
            <span>03</span>
            <h2>Paste</h2>
            <p>Ask the model to inspect the service, summarize it, and challenge the buying case.</p>
          </div>
        </div>
      </section>

      <section className="routeStrip" aria-label="Public agent packet routes">
        <div className="wrap">
          <h2>Agent packet routes</h2>
          <div className="routeList">
            {packetRoutes.map((route) => (
              <a href={route} key={route}>
                {route.replace(serviceBrief.urls.homepage, "") || "/"}
              </a>
            ))}
          </div>
          <p>
            Independent launch links only. Pick the chat tool you already use, paste the prompt,
            and let it inspect the public packet routes.
          </p>
        </div>
      </section>
    </main>
  );
}
