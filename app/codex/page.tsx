import Link from "next/link";
import { dataServiceModel, setupManifest } from "../../lib/platform/data";

export default function CodexPage() {
  return (
    <main>
      <section className="hero compactHero">
        <div className="wrap">
          <h1>Codex setup surface.</h1>
          <p className="heroText">
            This is the agent-facing entrypoint for AI Workstation Setup:
            setup manifests, recipe packets, template metadata, validation
            rules, and future MCP discovery.
          </p>
          <div className="linkRow">
            <Link className="primary" href="/api/setup-manifest">
              Setup manifest
            </Link>
            <Link className="primary inverse" href="/codex/recipes">
              Recipe packets
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap twoColumn">
          <div>
            <h2>Platform role</h2>
            <p className="large">
              The business installs AI workflows. This platform serves the
              packets, recipes, templates, manifests, and package metadata that
              make those installations repeatable.
            </p>
          </div>
          <div className="package">
            <h3>{setupManifest.service}</h3>
            <ul>
              <li>{setupManifest.version}</li>
              <li>{setupManifest.status}</li>
              <li>{dataServiceModel.logicSurface}</li>
              <li>{dataServiceModel.primaryDatabase}</li>
              <li>{dataServiceModel.objectStorage}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap endpointGrid">
          {setupManifest.machineEntryPoints.map((entryPoint) => (
            <Link className="endpoint" href={entryPoint} key={entryPoint}>
              <span>{entryPoint}</span>
              <strong>Open</strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
