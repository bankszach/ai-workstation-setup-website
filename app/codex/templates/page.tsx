import { templateManifests } from "../../../lib/platform/data";

export default function TemplatesPage() {
  return (
    <main>
      <section className="hero compactHero">
        <div className="wrap">
          <h1>Template manifests.</h1>
          <p className="heroText">
            Starter template metadata for client workspace generation, recipe
            packets, and future package snapshots.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap checkGrid">
          {templateManifests.map((template) => (
            <article className="offerCard" key={template.id}>
              <h3>{template.title}</h3>
              <p>{template.purpose}</p>
              <p>
                <strong>Format:</strong> {template.format}
              </p>
              <p>
                <strong>Role:</strong> {template.packetRole}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
