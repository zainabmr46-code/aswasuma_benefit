import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import languages from "../../language";

import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.png";
import pic3 from "../../assets/pic3.png";
import pic4 from "../../assets/pic4.png";
import pic7 from "../../assets/pic7.jpg";
import one from "../../assets/picturesUpdate/one.png";
import two from "../../assets/picturesUpdate/two.png";
import three from "../../assets/picturesUpdate/three.png";
import four from "../../assets/picturesUpdate/four.png";
import five from "../../assets/picturesUpdate/five.png";
import six from "../../assets/picturesUpdate/six.png";
import "../../componentStyle/Home.css";

function Home() {
  const language = localStorage.getItem("language") || "en";

  const t = languages[language];

  const location = useLocation();
  const images = [pic1, pic2, pic7, pic4, pic3];
  const [currentImage, setCurrentImage] = useState(0);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const justLoggedIn = sessionStorage.getItem("justLoggedIn");

    if (token && loggedInUser?.name) {
      setUserName(loggedInUser.name);

      sessionStorage.removeItem("justLoggedIn");
    } else {
      setUserName("");
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

   return (
    <>
      <div className="banner">
        <img
          src={images[currentImage]}
          alt="banner"
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
          }}
        />

        {userName && (
          <div
            className="welcome-message"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "12px 24px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#1a1a1a",
              zIndex: 100,
            }}
          >
            {t.welcome}, {userName}! 👋
          </div>
        )}

        <div className="elegible">
          <div className="click">
            <Link to="/PreList">{t.clickMe}</Link>
          </div>
          <h3>{t.aswesumaTitle}</h3>
          <p>{t.eligibleFamily}</p>
        </div>

        <div className="quick-link">
          <Link to="/ApplyBenefit" className="items">
            <h3>{t.applyBenefit}</h3>
          </Link>

          <div>
            <Link to="/ApplyClaims" className="items">
              <h3>{t.submitClaims}</h3>
            </Link>
          </div>

          <div>
            <Link to="/ApplyObjection" className="items">
              <h3>{t.submitObjection}</h3>
          </Link>
          </div>
        </div>
      </div>

      <div className="update">
        <h2>{t.latestUpdate}</h2>
        <hr />

        <div className="pic">
          <img
            src={one}
            alt="Update 1"
            style={{
              height: "600px",
            }}
          />
          <img
            src={two}
            alt="Update 2"
            style={{
              height: "600px",
            }}
          />
        </div>

        <div className="pic">
          <img
            src={three}
            alt="Update 3"
            style={{
              marginLeft: "250px",
              height: "600px",
            }}
          />
        </div>
        
        <div className="pic single">
          <img
            src={six}
            alt="Update 6"
            style={{
              height: "820px",
            }}
          />
        </div>

        <div className="pic single">
          <img
            src={five}
            alt="Update 5"
            style={{
              height: "820px",
            }}
          />
        </div>

        <div className="pic single">
          <img
            src={four}
            alt="Update 4"
            style={{
              width: "100%",
              height: "700px",
            }}
          />
        </div>
      </div>

      
    </>
  );
}

export default Home;