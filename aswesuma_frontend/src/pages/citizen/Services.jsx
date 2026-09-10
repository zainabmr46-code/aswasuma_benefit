import React from "react";
import "../../componentStyle/About.css";
import languages from "../../language";

function Services() {
  const language = localStorage.getItem("language") || "en";

  const t = languages[language];

  return (
    <div className="layout about-page">
      <div className="about-hero">
        <h1 className="about-title">{t.servicesTitle}</h1>
      </div>

      <section className="about-section">
        <h2>{t.communityEmpowerment}</h2>

        <p>{t.communityEmpowermentDesc}</p>

        <h3>{t.corePillars}</h3>

        <ul>
          <li>
            <b>{t.capacityBuilding}</b>
            {t.capacityBuildingDesc}
          </li>

          <li>
            <b>{t.leadershipCultivation}</b>
            {t.leadershipCultivationDesc}
          </li>

          <li>
            <b>{t.rightsAdvocacy}</b>
            {t.rightsAdvocacyDesc}
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>{t.microfinance}</h2>

        <p>{t.microfinanceDesc}</p>

        <h3>{t.financialInstruments}</h3>

        <ul>
          <li>
            <b>{t.microcredit}</b>
            {t.microcreditDesc}
          </li>

          <li>
            <b>{t.savings}</b>
            {t.savingsDesc}
          </li>

          <li>
            <b>{t.microInsurance}</b>
            {t.microInsuranceDesc}
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>{t.socialDevelopment}</h2>

        <p>{t.socialDevelopmentDesc}</p>

        <h3>{t.serviceVerticals}</h3>

        <ul>
          <li>{t.healthcare}</li>

          <li>{t.education}</li>

          <li>{t.climate}</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>{t.communityOrganization}</h2>

        <p>{t.communityOrganizationDesc}</p>

        <h3>{t.sustainability}</h3>

        <ul>
          <li>{t.governance}</li>

          <li>{t.resourceOptimization}</li>

          <li>{t.strategicNetworking}</li>

          <li>{t.independence}</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
