import React from "react";
import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../componentStyle/MyAccount.css";
import "../../componentStyle/ApplyBenefit.css";
import { useState, useEffect } from "react";
import ApplyAdd from "./ApplyAdd";
import ApplyAdd2 from "./ApplyAdd2";
import ApplyAdd4 from "./ApplyAdd4";
import Language from "../../language/Language.jsx";
import languages from "../../language";
import CitizenNot from "../../citizenNot/CitizenNot.jsx";
  import { toast } from "react-toastify";
import api from "../../api/axios";

function ApplyBenefit() {
  const [language, setLanguage] = useState("en");
  const t = languages[language];

  const navigate = useNavigate();
  const hasChecked = useRef(false);
  useEffect(() => {
    if (hasChecked.current) return;
    hasChecked.current = true;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log to the system");
      navigate("/login");
    }
  }, []);

  const [formData, setFormData] = useState({
    head_name: "",
    head_nic: "",
    head_dob: "",
    head_gender: "",

    address: "",

    landline: "",
    head_mobile: "",

    province: "Central Province",
    district: "Kandy",
    divisional: "Pasbage Korale",

    gn_division: "",

    preferred_notification: "",

    signature: "",

    members: [
      {
        name: "",
        relationship: "",
        gender: "",
        marital_status: "",
        dob: "",
        age: "",
        nic: "",
      },
    ],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? "" : value,
    }));
  };

  function addMember() {
    setFormData((prev) => ({
      ...prev,
      members: [
        ...prev.members,
        {
          name: "",
          relationship: "",
          gender: "",
          marital_status: "",
          dob: "",
          age: "",
          nic: "",
        },
      ],
    }));
  }

  function handleMemberChange(index, e) {
    const updated = [...formData.members];
    updated[index][e.target.name] = e.target.value;
    setFormData((prev) => ({
      ...prev,
      members: updated,
    }));
  }

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!formData.head_gender) {
      newErrors.head_gender = "Gender is required!";
    }

    if (!formData.gn_division) {
      newErrors.gn_division = "GN Division is required!";
    }

    if (!formData.preferred_notification) {
      newErrors.preferred_notification = "Select notification method!";
    }

    if (!formData.head_name || !formData.head_name.trim()) {
      newErrors.head_name = "Name is required!";
    }

    const nicOld = /^[0-9]{9}[VXvx]$/;
    const nicNew = /^[0-9]{12}$/;

    if (!formData.head_nic) {
      newErrors.head_nic = "NIC is required!";
    } else if (
      !nicOld.test(formData.head_nic) &&
      !nicNew.test(formData.head_nic)
    ) {
      newErrors.head_nic =
        "Invalid NIC! Use old(123456789v) or new(200157600897)";
    }

    const phoneRegex = /^(?:0|94)?[0-9]{9}$/;

    if (!formData.head_mobile && !formData.landline) {
      newErrors.head_mobile =
        "Please enter either a mobile number or a landline number.";
    } else {
      if (formData.head_mobile && !phoneRegex.test(formData.head_mobile)) {
        newErrors.head_mobile = "Invalid mobile number";
      }

      if (formData.landline && !phoneRegex.test(formData.landline)) {
        newErrors.landline = "Invalid landline number";
      }
    }

    setErrors(newErrors);

    return newErrors;
  }

  const [step, setStep] = useState(1);

  function handleNext() {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      setStep(step + 1);
    }
  }

  function handleBack() {
    setStep(step - 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("FORM DATA");

    console.log(JSON.stringify(formData, null, 2));

    const validationError = validate();

    if (Object.keys(validationError).length > 0) {
      toast.error("Please correct the errors!");

      return;
    }

    try {
      const response = await api.post("/apply-benefit", formData);

      console.log(response.data);

      toast.success("Application submitted successfully!");

      setTimeout(() => {
        navigate("/track-applications");
      }, 1500);
    } catch (error) {
      console.log("FULL ERROR:", error);

      if (error.response) {
        console.log("STATUS:", error.response.status);

        console.log("DATA:", JSON.stringify(error.response.data, null, 2));

        toast.error(
          error.response.data.message || "Failed to submit application",
        );
      } else {
        toast.error("Network error. Check your connection!");
      }
    }
  }

  return (
    <>
      <div className="container">
        <hr />
        <div className="bar">
          <Link to="/">{t.home}</Link>
          <span className="sap"> &gt; </span>
          <Link to="/ApplyClaims">{t.claims}</Link>
          <span className="sap">&gt;</span>
          <Link to="/ApplyObjection">{t.objection}</Link>
          <span className="sap">&gt;</span>
          <p>{t.apply}</p>
        </div>

        <div className="layout">
          <h2>{t.title}</h2>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <Language onNext={handleNext} setLanguage={setLanguage} />
              </div>
            )}

          
            {step === 2 && (
              <div className="section">
                <div className="col">
                  <div className="group">
                    <label htmlFor="fullname">1.1 {t.fullName}</label>

                    <input
                      type="text"
                      id="name"
                      name="head_name"
                      value={formData.head_name}
                      onChange={handleChange}
                    />

                    <br />
                    {errors.head_name && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "13px",
                        }}
                      >
                        {errors.head_name}
                      </p>
                    )}
                  </div>
                  <br />
                  <br/>
                  <div className="group">
                    <label htmlFor="nic">1.2 {t.nic}</label>
                    <input
                      type="text"
                      id="head_nic"
                      name="head_nic"
                      value={formData.head_nic}
                      onChange={handleChange}
                    />
                    <br />
                    {errors.head_nic && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "13px",
                        }}
                      >
                        {errors.head_nic}
                      </p>
                    )}
                  </div>
                  <br />
                  <br/>
                  <div className="group">
                    <label htmlFor="birth">1.3 {t.dob}</label>
                    <input
                      type="date"
                      id="birth"
                      name="head_dob"
                      value={formData.head_dob}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <br />
                    <br/>
                  <div className="group">
                    <label htmlFor="">1.4 {t.gender}</label>
                    <select
                      name="head_gender"
                      id="gender"
                      value={formData.head_gender}
                      onChange={handleChange}
                    >
                      <option value="">{t.select}</option>
                      <option value="Male">{t.male}</option>
                      <option value="Female">{t.female}</option>
                    </select>
                    {errors.gender && (
                      <p style={{ color: "red" }}>{errors.gender}</p>
                    )}
                  </div>

                  <br />
                  <br />

                  <div className="group">
                    <label htmlFor="address">1.5 {t.address}</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <br />

                  <div className="group">
                    <label>1.6 {t.telephones}</label>

                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <label htmlFor="landline">1.6.1 {t.landline}</label>

                        <input
                          type="text"
                          id="landline"
                          name="landline"
                          placeholder="0XXXXXXXXX"
                          value={formData.landline}
                          onChange={handleChange}
                        />

                        {errors.landline && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.landline}
                          </p>
                        )}
                      </div>
                      <br />
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <label htmlFor="head_mobile">1.6.2 {t.mobile}</label>

                        <input
                          type="text"
                          id="head_mobile"
                          name="head_mobile"
                          placeholder="07XXXXXXXX"
                          value={formData.head_mobile}
                          onChange={handleChange}
                        />

                        {errors.head_mobile && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {errors.head_mobile}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label html="province">1.7 {t.province}</label>
                    <input
                      type="text"
                      id="province"
                      placeholder="Central Province"
                      name="province"
                      value={formData.province}
                      readOnly
                    />
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="district">1.8 {t.district}</label>
                    <input
                      type="text"
                      id="district"
                      placeholder="Kandy"
                      name="district"
                      value={formData.district}
                      readOnly
                    />
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="divisional">1.9 {t.divisional}</label>
                    <input
                      type="text"
                      id="divisional"
                      placeholder="Pasbage Korale"
                      name="divisional"
                      value={formData.divisional}
                      readOnly
                    />
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="gn">2.1 {t.gn}</label>
                    <select
                      name="gn_division"
                      id="gn"
                      value={formData.gn_division}
                      onChange={handleChange}
                    >
                      <option value="selectGn">{t.selectGn}</option>

                      <option value="Westhole">{t.westhole}</option>
                      <option value="Hydri">{t.hydri}</option>
                      <option value="KadiEllena">{t.kadiEllena}</option>
                      <option value="Greenwood">{t.greenwood}</option>
                      <option value="Bawwagama">{t.bawwagama}</option>
                      <option value="Imbulpitiya">{t.imbulpitiya}</option>
                      <option value="Nawalapitiya East">
                        {t.nawalapitiyaEast}
                      </option>
                      <option value="Nawalapitiya South">
                        {t.nawalapitiyaSouth}
                      </option>
                      <option value="Nawalapitiya West">
                        {t.nawalapitiyaWest}
                      </option>
                      <option value="Nawalapitiya North">
                        {t.nawalapitiyaNorth}
                      </option>
                      <option value="Uda Rabukpitiya">
                        {t.udaRabukpitiya}
                      </option>
                      <option value="Pahala Rambukpitiya">
                        {t.pahalaRambukpitiya}
                      </option>
                      <option value="Balantota North">
                        {t.balantotaNorth}
                      </option>
                      <option value="Balantota South">
                        {t.balantotaSouth}
                      </option>
                      <option value="Aluthgama">{t.aluthgama}</option>
                      <option value="Dekinda">{t.dekinda}</option>
                      <option value="Wewegama">{t.wewegama}</option>
                      <option value="Weligampola">{t.weligampola}</option>
                      <option value="Kandopitiya">{t.kandopitiya}</option>
                      <option value="Inguruoya South">
                        {t.inguruoyaSouth}
                      </option>
                      <option value="Inguruoya North">
                        {t.inguruoyaNorth}
                      </option>
                      <option value="Mapakanda North">
                        {t.mapakandaNorth}
                      </option>
                      <option value="Mapakanda South">
                        {t.mapakandaSouth}
                      </option>
                      <option value="Weligodawatta">{t.weligodawatta}</option>
                      <option value="Dandubadiruppa">{t.dandubadiruppa}</option>
                      <option value="Pallegama">{t.pallegama}</option>
                      <option value="Warakawa">{t.warakawa}</option>
                      <option value="Panithuduwa">{t.panithuduwa}</option>
                      <option value="Karahadungala">{t.karahadungala}</option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="preferred">2.2 {t.preferred}</label>

                    <select
                      id="preferred_notification"
                      name="preferred_notification"
                      value={formData.preferred_notification}
                      onChange={handleChange}
                    >
                      <option value="">{t.select}</option>
                      <option value="telephone">{t.telephone}</option>
                      <option value="sms">{t.sms}</option>
                      <option value="post">{t.post}</option>
                    </select>
                  </div>
                  <br />
                  <div className="btn-group">
                    <button type="button" onClick={handleBack}>
                      {t.back}
                    </button>
                    <button type="button" onClick={handleNext}>
                      {t.next}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>

          {step === 3 && (
            <div>
              <ApplyAdd
                formData={formData}
                setFormData={setFormData}
                handleMemberChange={handleMemberChange}
                addMember={addMember}
                language={language}
              />
              <br />
              <div className="btn-group">
                <button type="button" onClick={handleBack}>
                  {t.back}
                </button>
              </div>
              <br />
              <div className="btn-group">
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{
                    width: "200px",
                  }}
                >
                  {t.submit}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ApplyBenefit;
