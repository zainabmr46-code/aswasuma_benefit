import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ObjectionView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pdfRef = useRef();

  const [objection, setObjection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getObjection();
  }, [id]);

  const getObjection = async () => {
    try {
      const response = await api.get(`/admin/objection/${id}`);

      console.log("OBJECTION DATA:", response.data);

      setObjection(response.data);
    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Failed to load objection");
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

    pdf.save(`Objection_${objection?.obj_name}_${objection?.obj_nic}.pdf`);
  };

  if (loading) {
    return <h2 style={{ color: "black" }}>Loading Objection...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  if (!objection) {
    return <h2 style={{ color: "black" }}>No Objection Found</h2>;
  }

  const cardStyle = {
    background: "#fff",
    color: "black",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ddd",
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
      <h1>Objection Details</h1>

      <div style={cardStyle}>
        <h2>Objector Information</h2>

        <p>
          <b>Name :</b> {objection.obj_name || "N/A"}
        </p>

        <p>
          <b>NIC :</b> {objection.obj_nic || "N/A"}
        </p>

        <p>
          <b>Address :</b> {objection.obj_address || "N/A"}
        </p>

        <p>
          <b>Mobile :</b> {objection.obj_mobile || "N/A"}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Location Information</h2>

        <p>
          <b>Province :</b> {objection.obj_province || "N/A"}
        </p>

        <p>
          <b>District :</b> {objection.obj_district || "N/A"}
        </p>

        <p>
          <b>Divisional Secretariat :</b> {objection.obj_divisional || "N/A"}
        </p>

        <p>
          <b>GN Division :</b> {objection.obj_gn_division || "N/A"}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Reference Information</h2>

        <p>
          <b>Household Reference Number :</b>{" "}
          {objection.reference_number || "N/A"}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Objection Reason</h2>

        <p>
          <b>Selected Reason :</b> {objection.reason || "N/A"}
        </p>

        <p>
          <b>Reason Details :</b>
        </p>

        <p>{objection.reason_detail || "No details provided"}</p>
      </div>

      <div style={cardStyle}>
        <h2>Digital Signature</h2>

        {objection.signature ? (
          <img
            src={objection.signature}
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

      <div className="btn-group">
        <button type="button" onClick={downloadPDF}>
          Download PDF
        </button>

        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
}

export default ObjectionView;