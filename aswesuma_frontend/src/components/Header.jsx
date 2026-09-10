import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import "../componentStyle/Header.css";
import Language from "../language/Language.jsx";
import languages from "../language";

const Header = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en",
  );

  const t = languages[language];

  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
    window.location.reload();
  };

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div className="top-bar">
        <hr />
        <div className="top-bar-content">
          <div className="top-bar-left">
            <p>{t.welcomeTitle}</p>
          </div>

          <div className="top-bar-right">
            <span className="hotline">{t.divisionalSecretariat}</span>
            <span className="sap">|</span>
            <span className="hotline">{t.generalPhone}</span>
          </div>
        </div>
        <hr />
      </div>
      <div className="main-header">
        <div className="logo-section">
          <img src={logo2} alt="logo2" />
          <div className="title">
            <h2>WELFARE BENEFITS BOARD</h2>
            <p>සුබසාධක ප්‍රතිලාභ මණ්ඩලය</p>
            <p>நலன்புரி நன்மைகள் சபை</p>
          </div>
          <img src={logo1} alt="" />
        </div>

        <nav>
          <Link to="/">{t.home}</Link>

          <Link to="/MyAccount">{t.myAccount}</Link>

          <Link to="/About">{t.about}</Link>

          <Link to="/ContactUs">{t.contact}</Link>

          <Link to="/Services">{t.services}</Link>

         <Link to="/track-applications">{t.track}</Link>
        </nav>

        <div className="lan">
          <button onClick={() => changeLanguage("en")}>English</button>

          <button onClick={() => changeLanguage("si")}>Sinhala</button>

          <button onClick={() => changeLanguage("ta")}>Tamil</button>
        </div>
        {token && (
          <button
            onClick={handleLogout}
            style={{
              marginLeft: "10px",
              backgroundColor: "#002244",
              color: "#fff",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
