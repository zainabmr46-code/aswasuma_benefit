import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ClaimView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pdfRef = useRef();

  const [claim, setClaim] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getClaim();
  }, []);

  const getClaim = async () => {
    try {
      const response = await api.get(`/admin/claim/${id}`);

      console.log("CLAIM DATA:", response.data);

      setClaim(response.data);
    } catch (error) {
      console.log("CLAIM ERROR:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = async () => {
    const input = pdfRef.current;

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      heightLeft -= pdfHeight;
    }

    pdf.save(`Claim_${claim?.claim_name}_${claim?.claim_nic}.pdf`);
  };

  if (loading) {
    return <h2 style={{ color: "black" }}>Loading Claim...</h2>;
  }

  if (!claim) {
    return <h2 style={{ color: "black" }}>No Claim Found</h2>;
  }

  const cardStyle = {
    color: "black",
    background: "#fff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    border: "1px solid black",
    padding: "10px",
    background: "#f2f2f2",
    color: "black",
  };

  const tdStyle = {
    border: "1px solid black",
    padding: "10px",
    color: "black",
  };

  return (
    <div
      ref={pdfRef}
      className="admin-content"
      style={{
        padding: "30px",
        background: "#fff",
        minHeight: "100vh",
        color: "black",
      }}
    >
      <h1>Claim Details</h1>

      <div style={cardStyle}>
        <h2>Claimant Information</h2>

        <p>
          <b>Name :</b> {claim.claim_name}
        </p>

        <p>
          <b>NIC :</b> {claim.claim_nic}
        </p>

        <p>
          <b>Date of Birth :</b> {claim.claim_dob}
        </p>

        <p>
          <b>Gender :</b> {claim.gender}
        </p>

        <p>
          <b>Mobile :</b> {claim.claim_mobile}
        </p>

        <p>
          <b>Landline :</b> {claim.claim_landline}
        </p>
      </div>
      <div style={cardStyle}>
        <h2>Address Information</h2>

        <p>
          <b>Address :</b> {claim.claim_address}
        </p>

        <p>
          <b>Province :</b> {claim.claim_province}
        </p>

        <p>
          <b>District :</b> {claim.claim_district}
        </p>

        <p>
          <b>Divisional Secretariat :</b> {claim.claim_divisional}
        </p>

        <p>
          <b>GN Division :</b> {claim.claim_gn_division}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Notification</h2>

        <p>
          <b>Preferred Notification :</b> {claim.preferred_notification}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Section 02 - Land and Building Asset Information</h2>

        <p>
          <b>Housing Nature :</b>
          {claim.property?.housing_nature}
        </p>

        <p>
          <b>Floor Material :</b>
          {claim.property?.floor_material}
        </p>

        <p>
          <b>Roof Material :</b>
          {claim.property?.roof_material}
        </p>

        <p>
          <b>Wall Material :</b>
          {claim.property?.wall_material}
        </p>

        <p>
          <b>Floor Area :</b>
          {claim.property?.floor_area_code}
        </p>

        <p>
          <b>Property Ownership :</b>
          {claim.property?.property_ownership}
        </p>

        <p>
          <b>Other Buildings :</b>
          {claim.property?.other_buildings}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Facilities</h2>

        <p>
          <b>Lighting Source :</b>
          {claim.property?.lighting_source}
        </p>

        <p>
          <b>Water Source :</b>
          {claim.property?.water_source}
        </p>

        <p>
          <b>Toilet Facility :</b>
          {claim.property?.toilet_facility}
        </p>

        <p>
          <b>Toilet Nature :</b>
          {claim.property?.toilet_nature}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Vehicles</h2>

        <ul>
          {claim.property &&
            Object.entries(claim.property)

              .filter(
                ([key, value]) =>
                  [
                    "motorbike",
                    "scooter",
                    "three_wheeler",
                    "motor_car",
                    "van_jeep",
                    "bus",
                    "lorry_tipper",
                    "hand_tractor",
                    "tractor",
                  ].includes(key) && value === 1,
              )

              .map(([key]) => <li key={key}>{key.replaceAll("_", " ")}</li>)}
        </ul>
      </div>

      <div style={cardStyle}>
        <h2>Machinery And Equipment</h2>

        <ul>
          {claim.property &&
            Object.entries(claim.property)

              .filter(
                ([key, value]) =>
                  [
                    "mechanized_fishing_boat",
                    "non_mechanized_fishing_boat",
                    "combine_harvester",
                    "paddy_machine",
                    "other_fishing_agri_equipment",
                    "self_employment_equipment",
                  ].includes(key) && value === 1,
              )

              .map(([key]) => <li key={key}>{key.replaceAll("_", " ")}</li>)}
        </ul>
      </div>

      <div style={cardStyle}>
        <h2>Livestock</h2>

        <ul>
          {claim.property?.livestock_01_qty > 0 && (
            <li>Cattle : {claim.property.livestock_01_qty}</li>
          )}

          {claim.property?.livestock_02_qty > 0 && (
            <li>Goat : {claim.property.livestock_02_qty}</li>
          )}

          {claim.property?.livestock_03_qty > 0 && (
            <li>Pig : {claim.property.livestock_03_qty}</li>
          )}

          {claim.property?.livestock_04_qty > 0 && (
            <li>Chicken : {claim.property.livestock_04_qty}</li>
          )}

          {claim.property?.livestock_05_qty > 0 && (
            <li>Duck : {claim.property.livestock_05_qty}</li>
          )}
        </ul>
      </div>

      <div style={cardStyle}>
        <h2>Monthly Income And Expenditure</h2>

        <h3>Income</h3>

        <p>
          <b>Salary Income :</b>
          Rs. {claim.financial?.salary_income ?? 0}
        </p>

        <p>
          <b>Agriculture Income :</b>
          Rs. {claim.financial?.agriculture_income ?? 0}
        </p>

        <p>
          <b>Business Income :</b>
          Rs. {claim.financial?.business_income ?? 0}
        </p>

        <p>
          <b>Pension :</b>
          Rs. {claim.financial?.pension ?? 0}
        </p>

        <p>
          <b>Samurdhi :</b>
          Rs. {claim.financial?.samurdhi ?? 0}
        </p>

        <p>
          <b>Other Income :</b>
          Rs. {claim.financial?.other_income ?? 0}
        </p>

        <p>
          <b>Total Income :</b>
          Rs. {claim.financial?.income_total ?? 0}
        </p>

        <h3>Expenses</h3>

        <p>
          <b>Food & Drinks :</b>
          Rs. {claim.financial?.food_drinks ?? 0}
        </p>

        <p>
          <b>Drinking Water :</b>
          Rs. {claim.financial?.drinking_water ?? 0}
        </p>

        <p>
          <b>Medicine :</b>
          Rs. {claim.financial?.medicine ?? 0}
        </p>

        <p>
          <b>Electricity :</b>
          Rs. {claim.financial?.electricity ?? 0}
        </p>

        <p>
          <b>Education :</b>
          Rs. {claim.financial?.education ?? 0}
        </p>

        <p>
          <b>Total Expense :</b>
          Rs. {claim.financial?.expense_total ?? 0}
        </p>

        <p>
          <b>Electricity Units :</b>
          {claim.financial?.electricity_units ?? 0} kWh
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Family Members</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>No</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Relationship</th>
              <th style={thStyle}>Gender</th>
              <th style={thStyle}>DOB</th>
              <th style={thStyle}>Age</th>
              <th style={thStyle}>NIC</th>
            </tr>
          </thead>

          <tbody>
            {claim.members && claim.members.length > 0 ? (
              claim.members.map((member, index) => (
                <tr key={member.id}>
                  <td style={tdStyle}>{index + 1}</td>

                  <td style={tdStyle}>{member.name}</td>

                  <td style={tdStyle}>{member.relationship}</td>

                  <td style={tdStyle}>{member.gender}</td>

                  <td style={tdStyle}>{member.dob}</td>

                  <td style={tdStyle}>{member.age}</td>

                  <td style={tdStyle}>{member.nic}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td style={tdStyle} colSpan="7">
                  No Family Members
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={cardStyle}>
        <h2>Digital Signature</h2>

        {claim.signature ? (
          <img
            src={claim.signature}
            alt="Digital Signature"
            width="300"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
            }}
          />
        ) : (
          <p>No Signature Uploaded</p>
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div className="btn-group">
          <button type="button" onClick={downloadPDF}>
            Download PDF
          </button>

          <button onClick={handleBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default ClaimView;