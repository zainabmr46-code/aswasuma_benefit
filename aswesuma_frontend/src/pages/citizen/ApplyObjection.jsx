import React, { useState, useEffect } from "react";

import "../../componentStyle/ApplyBenefit.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import languages from "../../language";
import Language from "../../language/Language.jsx";
import CitizenNot from "../../citizenNot/CitizenNot.jsx";
import DigitalSign from "./addictional/DigitalSign";
import api from "../../api/axios";
import { toast } from "react-toastify";

function ApplyObjection() {
  const [language, setLanguage] = useState("en");
  const t = languages[language];

  const navigate = useNavigate();
  const hasChecked = useRef(false);

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    obj_name: "",
    obj_nic: "",
    obj_address: "",
    obj_mobile: "",
    obj_province: "Central Province",
    obj_district: "Kandy",
    obj_divisional: "Pasbage Korale",
    obj_gn_division: "",

    reference_number: "",

    reason: "",
    reason_detail: "",

    signature: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReasonChange = (e) => {
    const value = e.target.value;

    const words = value
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    if (words.length <= 200) {
      setFormData((prev) => ({
        ...prev,
        reason_detail: value,
      }));
    }
  };
 

 

  function validate() {
    const newError = {};

    if (!formData.obj_name || !formData.obj_name.trim()) {
      newError.obj_name = "Name is required!";
    }

    const nicOld = /^[0-9]{9}[VXvx]$/;
    const nicNew = /^[0-9]{12}$/;

    if (!formData.obj_nic) {
      newError.obj_nic = "NIC is required!";
    } else if (
      !nicOld.test(formData.obj_nic) &&
      !nicNew.test(formData.obj_nic)
    ) {
      newError.obj_nic =
        "Invalid NIC! Use old(123456789v) or new(200157600897)";
    }

    const phoneRegex = /^(?:0|94)?[0-9]{9}$/;

    if (!formData.obj_mobile && !formData.obj_landline) {
      newError.obj_mobile =
        "Please enter either a mobile number or a landline number.";
    } else {
      if (formData.obj_mobile && !phoneRegex.test(formData.obj_mobile)) {
        newError.obj_mobile = "Invalid mobile number";
      }

      if (formData.obj_landline && !phoneRegex.test(formData.obj_landline)) {
        newError.obj_landline = "Invalid landline number";
      }
    }

    setErrors(newError);

    return newError;
  }

  function handleNext() {
    setStep(step + 1);
  }

  function handleBack() {
    setStep(step - 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("OBJECTION DATA:", formData);

    const validationError = validate();

    if (Object.keys(validationError).length > 0) {
      toast.error("Please correct the errors!");

      return;
    }

    try {
      const response = await api.post("/objection", formData);

      console.log("SUCCESS RESPONSE:", response.data);

      toast.success("Objection submitted successfully!");

      setTimeout(() => {
        navigate("/track-applications");
      }, 1500);
    } catch (error) {
      console.log("FULL ERROR:", error);

      if (error.response) {
        console.log("ERROR RESPONSE:", error.response.data);

        toast.error(
          error.response.data.message || "Failed to submit objection",
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

          <Link to="/ApplyBenefit">{t.apply}</Link>

          <span className="sap"> &gt; </span>

          <Link to="/ApplyClaims">{t.claims}</Link>

          <span className="sap"> &gt; </span>

          <p>{t.objection}</p>
        </div>
        <div className="layout">
          <h1>{t.form_title}</h1>

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
                    <p>{t.section_objector_details}</p>
                    <br />
                    <br />
                    <label htmlFor="fullname">1.1 {t.fullName}</label>

                    <input
                      type="text"
                      id="name"
                      name="obj_name"
                      value={formData.obj_name}
                      onChange={handleChange}
                    />

                    <br />
                    {errors.obj_name && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "13px",
                        }}
                      >
                        {errors.obj_name}
                      </p>
                    )}
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="nic">1.2 {t.nic}</label>
                    <input
                      type="text"
                      id="obj_nic"
                      name="obj_nic"
                      value={formData.obj_nic}
                      onChange={handleChange}
                    />
                    <br />
                    {errors.obj_nic && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "13px",
                        }}
                      >
                        {errors.obj_nic}
                      </p>
                    )}
                  </div>
                  <br />

                  <br />

                  <div className="group">
                    <label htmlFor="address">1.3 {t.address}</label>
                    <input
                      type="text"
                      id="address"
                      name="obj_address"
                      value={formData.obj_address}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <br />

                  <div className="group">
                    <label htmlFor="obj_mobile">1.4 {t.phone}</label>

                    <input
                      type="text"
                      id="head_mobile"
                      name="obj_mobile"
                      placeholder="07XXXXXXXX"
                      value={formData.obj_mobile}
                      onChange={handleChange}
                    />

                    {errors.obj_mobile && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "5px",
                        }}
                      >
                        {errors.obj_mobile}
                      </p>
                    )}
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="province">1.5 {t.province}</label>
                    <input
                      type="text"
                      id="province"
                      placeholder="Central Province"
                      name="obj_province"
                      value={formData.obj_province}
                      readOnly
                    />
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="district">1.6 {t.district}</label>
                    <input
                      type="text"
                      id="district"
                      placeholder="Kandy"
                      name="obj_district"
                      value={formData.obj_district}
                      readOnly
                    />
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="divisional">1.7 {t.divisional}</label>
                    <input
                      type="text"
                      id="divisional"
                      placeholder="Pasbage Korale"
                      name="obj_divisional"
                      value={formData.obj_divisional}
                      readOnly
                    />
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="gn">1.8 {t.gn}</label>
                    <select
                      name="obj_gn_division"
                      id="gn"
                      value={formData.obj_gn_division}
                      onChange={handleChange}
                    >
                      <option value="selectGn">{t.selectGn}</option>
                      <option value="Hydri">{t.hydri}</option>
                      <option value="Westhole">{t.westhole}</option>
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

            {step === 3 && (
              <div className="section">
                <div className="group">
                  <p>{t.section_objectant_details}</p>

                  <br />

                  <label htmlFor="reference_number">1.9 {t.field_hh_code}</label>
                  <br />
                  <input
                    type="text"
                    id="reference_number"
                    name="reference_number"
                    placeholder={t.hh_code_example}
                    value={formData.reference_number}
                    onChange={handleChange}
                    style={{
                      width: "350px",
                      padding: "10px",
                      fontSize: "16px",
                      border: "1px solid #999",
                      borderRadius: "5px",
                    }}
                  />
                </div>

                <br />
                <br />

                <div className="form-A">
                  <h3>2.1 {t.field_reason_title}</h3>

                  <div
                    className="group"
                    style={{
                      width: "100%",
                      overflowX: "auto",
                    }}
                  >
                    <table border="1" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>{t.table_header_no}</th>
                          <th>{t.table_header_reason}</th>
                          <th>{t.table_header_select}</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>{t.reason_1}</td>
                          <td>
                            <input
                              type="radio"
                              name="reason"
                              value={t.reason_1}
                              checked={formData.reason === t.reason_1}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>{t.reason_2}</td>
                          <td>
                            <input
                              type="radio"
                              name="reason"
                              value={t.reason_2}
                              checked={formData.reason === t.reason_2}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td>{t.reason_3}</td>
                          <td>
                            <input
                              type="radio"
                              name="reason"
                              value={t.reason_3}
                              checked={formData.reason === t.reason_3}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>4</td>
                          <td>{t.reason_4}</td>
                          <td>
                            <input
                              type="radio"
                              name="reason"
                              value={t.reason_4}
                              checked={formData.reason === t.reason_4}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td>{t.reason_5}</td>
                          <td>
                            <input
                              type="radio"
                              name="reason"
                              value={t.reason_5}
                              checked={formData.reason === t.reason_5}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>6</td>
                          <td>{t.reason_6}</td>
                          <td>
                            <input
                              type="radio"
                              name="reason"
                              value={t.reason_6}
                              checked={formData.reason === t.reason_6}
                              onChange={handleChange}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <br />

                    <h3>2.2 {t.field_grounds_title}</h3>

                    <div className="group">
                      <label htmlFor="reason_detail">
                        {t.field_grounds_desc}
                      </label>

                      <textarea
                        id="reason_detail"
                        name="reason_detail"
                        rows={12}
                        value={formData.reason_detail}
                        onChange={handleReasonChange}
                        style={{
                          width: "100%",
                          border: "2px solid black",
                          padding: "10px",
                          resize: "vertical",
                          fontSize: "16px",
                        }}
                      />

                      <small>
                        {
                          formData.reason_detail
                            .trim()
                            .split(/\s+/)
                            .filter((word) => word.length > 0).length
                        }
                        /200 {t.word_count_limit.replace("0/200", "")}
                      </small>
                    </div>
                  </div>

                  <br />

                  <DigitalSign
                    language={language}
                    setSignature={(signature) =>
                      setFormData((prev) => ({
                        ...prev,
                        signature,
                      }))
                    }
                  />
                </div>

                <br />

                <div className="btn-group">
                  <button type="button" onClick={handleBack}>
                    {t.back}
                  </button>
                  <br />
                  <button
                    type="submit"
                    style={{
                      width: "200px",
                    }}
                  >
                    {t.btn_submit}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
export default ApplyObjection;
