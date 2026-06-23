import { providerProfile, serviceBrief, setupManifest } from "../../lib/platform/data";

export default function BriefPage() {
  return (
    <main className="briefPage">
      <section className="briefHero">
        <div className="briefWrap">
          <p className="systemLabel">Buyer and agent brief</p>
          <h1>{serviceBrief.name}</h1>
          <p>{serviceBrief.oneLine}</p>
        </div>
      </section>

      <section className="briefContent">
        <div className="briefWrap briefGrid">
          <article>
            <h2>What It Is</h2>
            <p>{serviceBrief.offer}</p>
            <p>{serviceBrief.problemSolved}</p>
          </article>

          <article>
            <h2>What It Is Not</h2>
            <p>
              This is not a physical computer build, GPU workstation sales, local AI
              server build, or hardware sourcing service. The workstation is an operating
              workflow: approved documents, a recipe, training, review, and a support log.
            </p>
          </article>

          <article>
            <h2>Provider</h2>
            <p>
              {providerProfile.operatorName} operates AI Workstation Setup through{" "}
              {providerProfile.operatingCompany} from {providerProfile.baseLocation}.
            </p>
          </article>

          <article>
            <h2>Best Fit</h2>
            <ul>
              {serviceBrief.goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2>Out Of Scope</h2>
            <ul>
              {serviceBrief.notFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <h2>Starter Boundary</h2>
            <ul>
              {setupManifest.serviceBoundary.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
