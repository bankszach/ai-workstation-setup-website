import { OfferCard } from "../components/OfferCard";
import { Section } from "../components/Section";

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

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap heroGrid">
          <div>
            <h1>Set up your first practical AI workstation.</h1>
            <p className="heroText">
              AI Workstation Setup helps small businesses organize documents,
              configure AI tools, create repeatable workflows, train the first
              user, and maintain a simple support log.
            </p>
            <a className="primary" href="mailto:your-email@example.com">
              Book a starter setup
            </a>
            <a className="secondaryLink" href="/codex">
              Open Codex setup surface
            </a>
          </div>
          <div className="workspacePanel" aria-label="Starter setup summary">
            <div className="panelTop">
              <span>Starter Boundary</span>
              <strong>one user</strong>
            </div>
            <div className="stack">
              <span>approved documents</span>
              <span>one workflow</span>
              <span>training session</span>
              <span>usage and support log</span>
            </div>
          </div>
        </div>
      </section>

      <Section title="What it is">
        <div className="plainGrid">
          <OfferCard title="Not a chatbot" body="The service builds the working layer around AI tools: folders, approved documents, recipes, verification, and logs." />
          <OfferCard title="Not a transformation program" body="The starter is deliberately small, built for one user and one workflow before any wider rollout." />
          <OfferCard title="A controlled setup" body="The first workstation starts with approved documents only and keeps sensitive integrations out of scope." />
        </div>
      </Section>

      <Section title="Agent-first service surface" tone="muted">
        <div className="verticalBlock">
          <p>
            This project is the first implementation of the agent-first service
            pattern: human-readable setup pages, machine-readable setup
            manifests, recipe packets, template metadata, API routes, and a
            Vercel-ready path to Neon Postgres and Blob storage.
          </p>
          <div className="verticalList">
            <a href="/api/setup-manifest">/api/setup-manifest</a>
            <a href="/api/recipes">/api/recipes</a>
            <a href="/api/templates">/api/templates</a>
            <a href="/api/platform">/api/platform</a>
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
          <p>Start with one user, one document set, and one workflow.</p>
          <a className="primary inverse" href="mailto:your-email@example.com">
            your-email@example.com
          </a>
        </div>
      </section>
    </main>
  );
}
