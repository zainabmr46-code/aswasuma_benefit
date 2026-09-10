import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ApplicationView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pdfRef = useRef();

  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplication();
  }, []);

  const getApplication = async () => {
    try {
      const res = await api.get(`/admin/application/${id}`);

      console.log("APPLICATION DATA:", res.data);

      setApplication(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  function handleBack() {
    navigate("/admin/applications");
  }

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

    pdf.save(
      `Application_${application?.household?.head_name}_${application?.household?.nic}.pdf`
    );
  };

  if (loading) {
    return <h2 style={{ color: "black" }}>Loading Application...</h2>;
  }

  if (!application) {
    return <h2 style={{ color: "black" }}>No Application Found</h2>;
  }

  const household = application.household;

  const cardStyle = {
    color: "black",
    backgroundColor: "white",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  };

  const tableStyle = {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    borderCollapse: "collapse",
  };

  const thStyle = {
    padding: "10px",
    border: "1px solid black",
    backgroundColor: "#f2f2f2",
    color: "black",
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid black",
    color: "black",
  };

  return (
    <div
      ref={pdfRef}
      className="admin-content"
      style={{
        color: "black",
        backgroundColor: "white",
        padding: "30px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "black" }}>Application Details</h1>

      <div style={cardStyle}>
        <h2 style={{ color: "black" }}>Application Information</h2>

        <p>
          <b>Application:</b> {application.apply_for}
        </p>

        <p>
          <b>Status:</b> {application.status}
        </p>

        <p>
          <b>Category:</b> {application.assigned_category}
        </p>

        <p>
          <b>Total Score:</b> {application.total_score}
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={{ color: "black" }}>Applicant Information</h2>

        <p>
          <b>Name:</b> {household?.head_name}
        </p>

        <p>
          <b>NIC:</b> {household?.nic}
        </p>

        <p>
          <b>Date Of Birth:</b> {household?.dob}
        </p>

        <p>
          <b>Gender:</b> {household?.gender}
        </p>

        <p>
          <b>Mobile:</b> {household?.mobile}
        </p>

        <p>
          <b>Landline:</b> {household?.landline}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Address Information</h2>

        <p>
          <b>Address:</b> {household?.address}
        </p>

        <p>
          <b>Province:</b> {household?.province}
        </p>

        <p>
          <b>District:</b> {household?.district}
        </p>

        <p>
          <b>Divisional Secretariat:</b> {household?.divisional}
        </p>

        <p>
          <b>GN Division:</b> {household?.gn_division}
        </p>
      </div>

      <div style={cardStyle}>
        <h2>Notification</h2>

        <p>
          <b>Preferred Method:</b> {household?.preferred_notification}
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
              <th style={thStyle}>Date Of Birth</th>
              <th style={thStyle}>Age</th>
              <th style={thStyle}>NIC</th>
            </tr>
          </thead>

          <tbody>
            {household?.members &&
              household.members.map((member, index) => (
                <tr key={member.id || `member-${index}`}>
                  <td style={tdStyle}>{index + 1}</td>

                  <td style={tdStyle}>{member.name}</td>

                  <td style={tdStyle}>{member.relationship}</td>

                  <td style={tdStyle}>{member.gender}</td>

                  <td style={tdStyle}>{member.dob}</td>

                  <td style={tdStyle}>{member.age}</td>

                  <td style={tdStyle}>{member.nic}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {household?.signature && (
        <div style={cardStyle}>
          <h2>Digital Signature</h2>

          <img src={household.signature} alt="Digital Signature" width="300" />
        </div>
      )}

      <div className="btn-group">
        <button type="button" onClick={downloadPDF}>
          Download PDF
        </button>

        <button type="button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ApplicationView;