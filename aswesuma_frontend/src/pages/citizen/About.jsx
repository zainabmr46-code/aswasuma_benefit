import React from "react";
import about from "../../assets/picturesUpdate/about.png";
import "../../componentStyle/About.css";

function About() {
  return (
    <div className="layout about-page">
      <div className="about-hero">
        <img src={about} alt="Aswesuma Welfare Programme" className="about-image" />
        <h1 className="about-title">Aswesuma Welfare Programme (AWP)</h1>
      </div>

      <section className="about-section">
        <p>
          Aswesuma is a national social welfare initiative in Sri Lanka designed
          to provide financial assistance to vulnerable populations affected by
          economic hardships, particularly in the aftermath of crises such as the
          COVID-19 pandemic and the country's economic downturn. Managed by the
          Welfare Benefits Board (WBB), Aswesuma constitutes the new Welfare
          Benefit Payments Scheme (WBPS) and targets those in extreme poverty,
          transitional stages, vulnerable households, and the severely poor. The
          programme also provides tailored assistance to elderly citizens,
          individuals with disabilities, and patients with chronic illnesses, such
          as kidney disease. Specific benefits include cash transfers of Rs.
          5,000–7,500 depending on the category of need.
        </p>
      </section>

      <section className="about-section">
        <h2>Objectives and Impact</h2>
        <p>
          The primary aim of Aswesuma is to alleviate poverty and promote social
          equity by directly linking welfare support with the recipients through a
          transparent and accountable system. Key goals include:
        </p>
        <ul>
          <li>
            Delivering cash assistance directly to beneficiaries' bank accounts,
            minimizing intermediary involvement.
          </li>
          <li>
            Establishing a unified and verifiable database for targeting
            genuinely needy individuals.
          </li>
          <li>
            Gradually promoting self-reliance by providing support for
            livelihoods and integrating beneficiaries into vocational training
            and employment programs, particularly transitioning them to the
            Samurdhi programme for sustainable income generation.
          </li>
          <li>
            Correcting errors of inclusion and exclusion that had occurred in
            earlier welfare schemes, thereby depoliticizing the distribution
            process.
          </li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Significance and Future Plans</h2>
        <p>
          Aswesuma represents a modern approach to social welfare in Sri Lanka by
          combining technology-driven beneficiary identification, direct cash
          assistance, and strategies for sustainable self-reliance. The programme
          currently serves approximately 1.4 million individuals and aims to
          expand to 2.4 million beneficiaries by the end of 2024. Future
          directions include refining data collection processes, improving mobile
          application usability, and scaling support for additional vulnerable
          groups based on available budget resources. The WBB emphasizes the
          ongoing iterative improvement of Aswesuma to enhance program efficiency
          and maximize social impact.
        </p>
      </section>
    </div>
  );
}

export default About;