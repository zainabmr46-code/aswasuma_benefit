import React, { useState } from "react";
import api from "../../api/axios";
import Header from "../../components/Header";
import "../../componentStyle/MyAccount.css";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import languages from "../../language";

function Login() {
   const language = localStorage.getItem("language") || "en";

  const t = languages[language];
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/login", formData);

      setLoading(true);
      setError("");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

      sessionStorage.setItem("justLoggedIn", "true");

      if (res.data.user.role === "admin") {
        toast.success("Login successfully!");
        navigate("/admin/dashboard");
      } else if (res.data.user.role === "office") {
        toast.success("Login successfully!");
        navigate("/office/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("RESPONSE:", err.response);
      console.log("DATA:", err.response?.data);

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
          <Link to="/MyAccount">{t.signUpBtn}</Link>
          <span className="sap">&gt;</span>
          <p>{t.signInLink}</p>
        </div>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>{t.signInTitle}</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <label htmlFor="email">{t.nicOrEmailLabel}</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.nicOrEmailPlaceholder}
            />
            <br />
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
            <br />

            <button type="submit" disabled={loading}>
              {loading ? t.signingInBtn : t.signInLink}
            </button>

            

            <div>
              <p>
                {t.dontHaveAccount} <Link to="/MyAccount">{t.signUpBtn}</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
