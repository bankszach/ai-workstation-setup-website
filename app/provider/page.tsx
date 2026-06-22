import { buyerFaq, providerProfile, serviceBrief } from "../../lib/platform/data";

export default function ProviderPage() {
  return (
    <main>
      <section className="hero compactHero">
        <div className="wrap">
          <h1>{providerProfile.operatorName}</h1>
          <p className="heroText">{providerProfile.publicIdentitySummary}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap twoColumn">
          <div>
            <h2>Operating profile</h2>
            <p className="large">{providerProfile.serviceRelationship}</p>
            <p className="note">{providerProfile.companyStatus}</p>
            <p className="note">{providerProfile.verificationNote}</p>
          </div>
          <div className="package">
            <h3>Business basis</h3>
            <ul>
              <li>{providerProfile.operatingCompany}</li>
              <li>{providerProfile.baseLocation}</li>
              <li>{serviceBrief.contact.operatingModel}</li>
              <li>{serviceBrief.contact.serviceArea}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="wrap checkGrid">
          {buyerFaq.map((item) => (
            <article className="offerCard" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
