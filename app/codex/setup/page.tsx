import { setupManifest } from "../../../lib/platform/data";

export default function CodexSetupPage() {
  return (
    <main>
      <section className="hero compactHero">
        <div className="wrap">
          <h1>Starter setup contract.</h1>
          <p className="heroText">{setupManifest.purpose}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap twoColumn">
          <div>
            <h2>Included</h2>
            <ul className="plainList">
              {setupManifest.serviceBoundary.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Excluded</h2>
            <ul className="plainList">
              {setupManifest.serviceBoundary.excluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap">
          <h2>Human review gates</h2>
          <div className="checkGrid">
            {setupManifest.serviceBoundary.humanReviewRequired.map((item) => (
              <div className="checkItem" key={item}>
                <span aria-hidden="true">OK</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
