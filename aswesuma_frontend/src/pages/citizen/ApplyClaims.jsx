import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ApplyAdd from "./ApplyAdd.jsx";
import "../../componentStyle/ApplyBenefit.css";
import { useNavigate, Link } from "react-router-dom";

import ClaimsApply4 from "./addictional/ClaimsApply4.jsx";
import ClaimsApply2 from "./addictional/ClaimsApply2.jsx";
import ClaimsAdd from "./addictional/ClaimsAdd.jsx";
import api from "../../api/axios.js";
import Language from "../../language/Language.jsx";
import languages from "../../language";
import CitizenNot from "../../citizenNot/CitizenNot.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ApplyClaims() {
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

  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    claim_name: "",
    claim_nic: "",
    claim_dob: "",
    claim_gender: "",
    claim_address: "",
    claim_landline: "",
    claim_mobile: "",
    claim_province: "Central Province",
    claim_district: "Kandy",
    claim_divisional: "Pasbage Korale",
    reference_number:"",
    claim_gn_division: "",

    address_changed: "",
    new_address: "",
    members_changed: "",
    total_members: "",
    signature: "",

    food_drinks: "",
    drinking_water: "",
    clothes: "",
    medicine: "",
    housing_rent: "",
    personal_transport: "",
    public_transport: "",
    electricity: "",
    cooking: "",
    communication: "",
    education: "",
    entertainment: "",
    other_expenses: "",
    expense_total: 0,

    inc_non_agri: "",
    salary_income: "",
    economic_income: "",
    agriculture_income: "",
    inc_rentals: "",
    pension: "",
    samurdhi: "",
    inc_elders_allowance: "",
    inc_disability_allowance: "",
    inc_illness_allowance: "",
    inc_interests: "",
    inc_foreign_remittance: "",
    inc_local_sources: "",
    inc_gov_relief: "",
    other_income: "",
    income_total: 0,

    property: {
      motorbike: "",
      scooter: "",
      three_wheeler: "",
      motor_car: "",
      van_jeep: "",
      bus: "",
      lorry_tipper: "",
      hand_tractor: "",
      tractor: "",
      none: "",

      mechanized_fishing_boat: "",
      non_mechanized_fishing_boat: "",
      combine_harvester: "",
      paddy_machine: "",
      other_fishing_agri_equipment: "",
      self_employment_equipment: "",
      none01: "",

      livestock_01_qty: "",
      livestock_02_qty: "",
      livestock_03_qty: "",
      livestock_04_qty: "",
      livestock_05_qty: "",
      livestock_06_qty: "",
      animal: "",
      livestock_07_qty: "",

      housing_nature: "",
      floor_material: "",
      roof_material: "",
      wall_material: "",
      floor_area_code: "",
      property_ownership: "",
      other_buildings: "",
      lighting_source: "",
      water_source: "",
      toilet_facility: "",
      toilet_nature: "",
      family_structure: "",
    },

    members: [
      {
        name: "",
        relationship: "",
        gender: "",
        marital_status: "",
        dob: "",
        age: "",
        nic: "",
        education_attending: "",
        education_level: "",
        occupation: "",
        gov_allowances: "",
        challenges: "",
        disability_status: "",
        disability_type: "",
        chronic_disease: "",
        mobile: "",
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

  function handlePropertyChange(e) {
    setFormData((prev) => ({
      ...prev,
      property: {
        ...prev.property,
        [e.target.name]: e.target.value,
      },
    }));
  }

  useEffect(() => {
    const expenseTotal =
      Number(formData.food_drinks || 0) +
      Number(formData.drinking_water || 0) +
      Number(formData.clothes || 0) +
      Number(formData.medicine || 0) +
      Number(formData.housing_rent || 0) +
      Number(formData.personal_transport || 0) +
      Number(formData.public_transport || 0) +
      Number(formData.electricity || 0) +
      Number(formData.cooking || 0) +
      Number(formData.communication || 0) +
      Number(formData.education || 0) +
      Number(formData.entertainment || 0) +
      Number(formData.other_expenses || 0);

    setFormData((prev) => ({
      ...prev,
      expense_total: expenseTotal,
    }));
  }, [
    formData.food_drinks,
    formData.drinking_water,
    formData.clothes,
    formData.medicine,
    formData.housing_rent,
    formData.public_transport,
    formData.electricity,
    formData.cooking,
    formData.communication,
    formData.education,
    formData.entertainment,
    formData.other_expenses,
  ]);

  useEffect(() => {
    const incomeTotal =
      Number(formData.inc_non_agri || 0) +
      Number(formData.salary_income || 0) +
      Number(formData.economic_income || 0) +
      Number(formData.agriculture_income || 0) +
      Number(formData.inc_rentals || 0) +
      Number(formData.pension || 0) +
      Number(formData.samurdhi || 0) +
      Number(formData.inc_elders_allowance || 0) +
      Number(formData.inc_disability_allowance || 0) +
      Number(formData.inc_illness_allowance || 0) +
      Number(formData.inc_interests || 0) +
      Number(formData.inc_foreign_remittance || 0) +
      Number(formData.inc_local_sources || 0) +
      Number(formData.inc_gov_relief || 0) +
      Number(formData.other_income || 0);

    setFormData((prev) => ({
      ...prev,
      income_total: incomeTotal,
    }));
  }, [
    formData.inc_non_agri,
    formData.salary_income,
    formData.economic_income,
    formData.agriculture_income,
    formData.inc_rentals,
    formData.pension,
    formData.samurdhi,
    formData.inc_elders_allowance,
    formData.inc_disability_allowance,
    formData.inc_illness_allowance,
    formData.inc_foreign_remittance,
    formData.inc_local_sources,
    formData.inc_gov_relief,
    formData.other_income,
  ]);

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
          education_level: "",
          occupation: "",
          disability_status: "",
          disability_type: "",
          chronic_disease: "",
          mobile: "",
        },
      ],
    }));
  }

  function handleMemberChange(index, e) {
    const update = [...formData.members];
    update[index][e.target.name] = e.target.value;
    setFormData((prev) => ({
      ...prev,
      members: update,
    }));
  }

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function validate() {
    const newErrors = {};

    if (!formData.claim_name || !formData.claim_name.trim()) {
      newErrors.claim_name = "Name is required!";
    }

    const nicOld = /^[0-9]{9}[VXvx]$/;
    const nicNew = /^[0-9]{12}$/;

    if (!formData.claim_nic) {
      newErrors.claim_nic = "NIC is required!";
    } else if (
      !nicOld.test(formData.claim_nic) &&
      !nicNew.test(formData.claim_nic)
    ) {
      newErrors.claim_nic =
        "Invalid NIC! Use old NIC (123456789V) or new NIC (200157600897)";
    }

    if (!formData.claim_dob) {
      newErrors.claim_dob = "Date of birth is required!";
    }

  if (!formData.claim_gender) {
  newErrors.claim_gender = "Gender is required!";
}

    const phoneRegex = /^(?:0|94)?[0-9]{9}$/;

    if (!formData.claim_mobile && !formData.claim_landline) {
      newErrors.claim_mobile = "Please enter mobile number or landline number.";
    }

    if (formData.claim_mobile) {
      if (!phoneRegex.test(formData.claim_mobile)) {
        newErrors.claim_mobile = "Invalid mobile number.";
      }
    }

    if (formData.claim_landline) {
      if (!phoneRegex.test(formData.claim_landline)) {
        newErrors.claim_landline = "Invalid landline number.";
      }
    }

    if (!formData.claim_address || !formData.claim_address.trim()) {
      newErrors.claim_address = "Address is required!";
    }

    if (!formData.claim_province) {
      newErrors.claim_province = "Province is required!";
    }

    if (!formData.claim_district) {
      newErrors.claim_district = "District is required!";
    }

    if (!formData.claim_divisional) {
      newErrors.claim_divisional = "Divisional Secretariat is required!";
    }

    if (!formData.claim_gn_division) {
      newErrors.claim_gn_division = "GN Division is required!";
    }

    if (!formData.preferred_notification) {
      newErrors.preferred_notification = "Please select notification method.";
    }

    if (!formData.signature || formData.signature === "") {
      newErrors.signature = "Digital signature is required!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleNext() {
    setStep(step + 1);
  }
  function handleBack() {
    setStep(step - 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    if (!validate()) {
      toast.error("Please fill all required fields correctly!");
      setLoading(false);
      return;
    }

    const payload = {
      ...formData,
      claim_dob: formData.claim_dob || null,
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await api.post("/claim-benefit", payload);

      console.log("Success:", response.data);

      toast.success("Application submitted successfully!");

      setTimeout(() => {
        navigate("/track-applications");
      }, 1500);
    } catch (error) {
      console.log("FULL ERROR:", error);

      if (error.response) {
        const { status, data } = error.response;

        if (status === 422) {
          const messages = data.errors || data.message || data;
          if (messages && typeof messages === "object") {
            Object.values(messages)
              .flat()
              .forEach((msg) => toast.error(msg));
          } else {
            toast.error(messages || "Validation failed!");
          }
        } else {
          toast.error(data?.message || "Server error. Please try again.");
        }
      } else if (error.request) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="container">
        <hr />
        <div className="bar">
          <Link to="/">{t.home}</Link>
          <span className="sap"> &gt; </span>
          <Link to="/ApplyBenefit">{t.title}</Link>
          <span className="sap">&gt;</span>
          <Link to="/ApplyObjection">{t.objection}</Link>
          <span className="sap">&gt;</span>
          <p>{t.claims}</p>
        </div>

        <div className="layout">
          <h1>
            {t.claimsTitle}
            <br />
            {t.claimsSubTitle}
          </h1>

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
                    <label htmlFor="name">
                      <br />
                      1.1 {t.fullName}
                      {t.claimantSuffix}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="claim_name"
                      value={formData.claim_name}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <br />
                  <label htmlFor="reference_number"><b>1.2 {t.field_hh_code}</b></label>
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
                  <br/><br/>
                  <br/>
                  <div className="group">
                    <label htmlFor="nic">
                      1.3 {t.nic} <br />
                      {t.claimantSuffix}
                    </label>
                    <input
                      type="text"
                      id="nic"
                      name="claim_nic"
                      value={formData.claim_nic}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="birth">
                      1.4 {t.dob}
                      <br />
                      {t.claimantSuffix}
                    </label>
                    <input
                      type="date"
                      id="birth"
                      name="claim_dob"
                      value={formData.claim_dob}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <br />

                  <div className="group">
                    <label htmlFor="">1.5 {t.gender}</label>
                    <select
                      name="claim_gender"
                      id=""
                      value={formData.claim_gender}
                      onChange={handleChange}
                    >
                      <option value="">{t.select}</option>
                      <option value="Male">{t.male}</option>
                      <option value="Female">{t.female}</option>
                    </select>
                  </div>

                  <br />
                  <br />

                  <div className="group">
                    <label htmlFor="address">
                      1.6 {t.address}
                      <br />
                      {t.claimantSuffix}
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="claim_address"
                      value={formData.claim_address}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <label style={{ fontWeight: "bold" }}>
                      1.7 {t.telephones}  {t.claimantSuffix}
                    </label>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        flexWrap: "nowrap",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        <label
                          htmlFor="landline"
                          style={{ marginBottom: "5px" }}
                        >
                          1.7.1 {t.landline}
                        </label>
                        <input
                          type="text"
                          id="landline"
                          name="claim_landline"
                          maxLength={10}
                          placeholder="0XXXXXXXXX"
                          value={formData.claim_landline}
                          onChange={handleChange}
                        />
                      </div>
                      <br />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        <label htmlFor="mobile" style={{ marginBottom: "5px" }}>
                         1.7.2 {t.mobile}
                        </label>
                        <input
                          type="text"
                          id="mobile"
                          name="claim_mobile"
                          maxLength={10}
                          placeholder="07XXXXXXXX"
                          value={formData.claim_mobile}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label html="province">
                      1.8 {t.province}
                      <br />
                      {t.claimantSuffix}
                    </label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      placeholder="Central Province"
                      value={formData.claim_province}
                      readOnly
                    />
                  </div>
                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="district">
                      1.9 {t.district}
                      <br />
                      {t.claimantSuffix}
                    </label>
                    <input
                      type="text"
                      id="district"
                      placeholder="Kandy"
                      name="district"
                      value={formData.claim_district}
                      readOnly
                    />
                  </div>
                  <br />
                  <br />

                  <div className="group">
                    <label htmlFor="divisional">
                      2.1 {t.divisional}
                      <br />
                      {t.claimantSuffix}
                    </label>
                    <input
                      type="text"
                      id="divisional"
                      name="claim_divisional"
                      placeholder="Pasbage Korale"
                      value={formData.claim_divisional}
                      readOnly
                    />
                  </div>

                  <br />
                  <br />
                  <div className="group">
                    <label htmlFor="gn">2.2 {t.gn}</label>
                    <select
                      name="claim_gn_division"
                      id=""
                      value={formData.claim_gn_division}
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
                    <label htmlFor="preferred">2.3 {t.preferred}</label>

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

                        <br/>
                  <div class="form-A">
                    <h3>{t.formATitle}</h3>
                    <p>{t.formASubTitle}</p>

                    <div className="group">
                      <label>{t.addressChangeQ}</label>

                      <select
                        id="address_changed"
                        name="address_changed"
                        value={formData.address_changed}
                        onChange={handleChange}
                      >
                        <option value="Select">{t.select}</option>
                        <option value="Yes">{t.yes}</option>
                        <option value="No">{t.no}</option>
                      </select>
                    </div>
                    <br />
                    <div className="group">
                      <label htmlFor="newAddress">{t.newAddressLabel}</label>
                      <input
                        type="text"
                        id="newAddress"
                        name="new_address"
                        value={formData.new_address}
                        onChange={handleChange}
                      />
                    </div>
                    <br />
                    <br />

                    <div className="group">
                      <label>{t.memberChangeQ}</label>

                      <select
                        id="members_changed"
                        name="members_changed"
                        value={formData.members_changed}
                        onChange={handleChange}
                      >
                        <option value="">{t.select}</option>
                        <option value="Yes">{t.yes}</option>
                        <option value="No">{t.no}</option>
                      </select>
                    </div>
                    <br />
                    <div className="group">
                      <label htmlFor="total">{t.totalMembersLabel}</label>
                      <input
                        type="number"
                        id="total_members"
                        name="total_members"
                        value={formData.total_members}
                        onChange={handleChange}
                      />
                    </div>
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

            {step === 3 && (
              <div>
                <div>
                  <ClaimsApply2
                    formData={formData}
                    handleChange={handleChange}
                    handlePropertyChange={handlePropertyChange}
                    t={t}
                  />
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

            {step === 4 && (
              <div>
                <div>
                  <ClaimsApply4
                    formData={formData}
                    handlePropertyChange={handlePropertyChange}
                    t={t}
                  />
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

            {step === 5 && (
              <div>
                <ClaimsAdd
                  formData={formData}
                  setFormData={setFormData}
                  handleMemberChange={handleMemberChange}
                  addMember={addMember}
                  t={t}
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
                      width: "150px",
                    }}
                  >
                    {t.submit}
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
export default ApplyClaims;
