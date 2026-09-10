import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import "../../componentStyle/MyAccount.css";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";
import languages from "../../language";

import { toast } from "react-toastify";

export default function MyAccount() {
  // 1. Establish a real state variable for language so React knows when to re-render
  const [currentLang, setCurrentLang] = useState(localStorage.getItem("language") || "en");

  // 2. Safely derive your active translations dictionary matching the current state
  const t = languages[currentLang] || languages["en"];

  // 3. Listen for language toggle actions happening elsewhere in the header/app
  useEffect(() => {
    const checkLanguageChange = () => {
      const storedLang = localStorage.getItem("language") || "en";
      if (storedLang !== currentLang) {
        setCurrentLang(storedLang);
      }
    };

    // Check for updates periodically or on click events
    const interval = setInterval(checkLanguageChange, 500);
    window.addEventListener("storage", checkLanguageChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", checkLanguageChange);
    };
  }, [currentLang]);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    nic: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
    const newErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = "Name is required!";
    }

    const nicOld = /^[0-9]{9}[VXvx]$/;
    const nicNew = /^[0-9]{12}$/;

    if (!formData.nic) {
      newErrors.nic = "NIC is required!";
    } else if (!nicOld.test(formData.nic) && !nicNew.test(formData.nic)) {
      newErrors.nic = "Invalid NIC! Use old(123456789v) or new(200157600897)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format!";
    }

    const phoneRegex = /^(?:0|94)?[0-9]{9}$/;

    if (!formData.phone) {
      newErrors.phone = "Phone is required!";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format!";
    }

    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = "Password is required!";
    } else if (!passRegex.test(formData.password)) {
      newErrors.password =
        "Password must have: 8+ chars, uppercase, lowercase, number, symbol!";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password!";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }

    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/register", {
        name: formData.name,
        nic: formData.nic,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      console.log("SUCCESS RESPONSE:", response);
      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.log("FULL ERROR:", err);
      if (err.response?.data?.errors) {
        const backendErrors = {};
        Object.keys(err.response.data.errors).forEach((key) => {
          backendErrors[key] = err.response.data.errors[key][0];
        });
        setErrors(backendErrors);
      } else {
        toast.error(err.response?.data?.message || "Registration failed!");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="container">
        <hr />
        <div className="bar">
          <Link to="/">{t.home}</Link>
          <span className="sap"> &gt; </span>
          <Link to="/Login">{t.signInLink}</Link>
          <span className="sap">&gt;</span>
          <p>{t.signUpBtn}</p>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>{t.createAccount}</h1>

            <label htmlFor="name">{t.nameLabel}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            {errors.name && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
            )}
            <br />

            <label htmlFor="nic">{t.nicLabel}</label>
            <input
              type="text"
              id="nic"
              name="nic"
              placeholder="123456789V or 200112345678"
              value={formData.nic}
              onChange={handleChange}
            />
            <br />
            {errors.nic && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.nic}</p>
            )}
            <br />

            <label htmlFor="email">{t.emailLabel}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            {errors.email && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
            )}
            <br />

            <label htmlFor="phone">{t.phoneLabel}</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="094777851550"
              maxLength={12}
              value={formData.phone}
              onChange={handleChange}
            />
            <br />
            {errors.phone && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.phone}</p>
            )}
            <br />

            <label htmlFor="password">{t.passwordLabel}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            {errors.password && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>
            )}
            <br />

            <label htmlFor="confirmPassword">{t.confirmPasswordLabel}</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <br />
            {errors.confirmPassword && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.confirmPassword}</p>
            )}
            <br />

            {/* Fixed conditional button state using your active language keys */}
            <button type="submit" disabled={loading}>
              {loading ? t.signingInBtn : t.signUpBtn}
            </button>
            
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <p>
                {t.alreadyHaveAccount}{" "}
                <Link
                  to="/Login"
                  style={{
                    marginLeft: "5px",
                    color: "#0056b3",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  {t.signingInBtn}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


