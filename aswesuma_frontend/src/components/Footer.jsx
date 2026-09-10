import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../componentStyle/Footer.css";
import languages from "../language";
import Header from "./Header";

function Footer() {
  const [language] = useState(localStorage.getItem("language") || "en");

  const t = languages[language];

  return (
    <>
      <div className="footer-top">
        <div className="footer-top-col">
          <h2>{t.vision}</h2>
          <p>"{t.visionDesc}"</p>
        </div>

        <div className="footer-top-col">
          <h2>{t.mission}</h2>
          <p>"{t.missionDesc}"</p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <u>{t.aboutAswesumaTitle}</u>
            </h3>

            <p>{t.aboutAswesumaDesc}</p>
          </div>

          <div className="footer-section">
            <h3>
              <u>{t.ourServicesTitle}</u>
            </h3>

            <p>{t.service1}</p>
            <p>{t.service2}</p>
            <p>{t.service3}</p>
            <p>{t.service4}</p>
          </div>

          <div className="footer-section">
            <h3>
              <u>{t.quickLinksTitle}</u>
            </h3>

            <Link to="/">{t.home}</Link>

            <Link to="/MyAccount">{t.myAccount}</Link>

            <Link to="/About">{t.about}</Link>

            <Link to="/ContactUs">{t.contact}</Link>

            <Link to="/Services">{t.services}</Link>

            <Link to="/track-applications">{t.trackApplications}</Link>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <p>Welfare Benefits Board (WBB) | © 2026 All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
