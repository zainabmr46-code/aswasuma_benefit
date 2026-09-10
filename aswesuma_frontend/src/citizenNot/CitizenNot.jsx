import React, { useState } from "react";
import languages from "../language";

function CitizenNot({ language = "en", onNext }) {

  const t = languages[language];

  const [isRegistered, setIsRegistered] = useState(true);
  const [referenceNumber, setReferenceNumber] = useState("");

  const styles = {
    container: {
      display: "flex",
      minHeight: "500px",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f3f4f6",
      fontFamily: "system-ui, sans-serif",
      borderRadius: "10px"
    },

    card: {
      width: "420px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "40px 32px",
      boxShadow:
        "0 10px 25px -5px rgba(0,0,0,0.1)",
    },

    heading: {
      fontSize: "24px",
      fontWeight: "600",
      marginBottom: "25px",
    },

    radioContainer: {
      display: "flex",
      gap: "20px",
      marginBottom: "25px",
      
    },

    radioLabel: {
      display: "flex",
      gap: "8px",
      cursor: "pointer",
    },

    inputGroup: {
      marginBottom: "25px",
      
    },

    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "500",
    },

    textField: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },

  };


  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h2 style={styles.heading}>
          {t.regQuestion}
        </h2>


        <div style={styles.radioContainer}>

          <label style={styles.radioLabel}>

            <input
              type="radio"
              name="registeredStatus"
              checked={isRegistered}
              onChange={() => setIsRegistered(true)}
            />

            <span>
              {t.isRegCitizen}
            </span>

          </label>



          <label style={styles.radioLabel}>

            <input
              type="radio"
              name="registeredStatus"
              checked={!isRegistered}
              onChange={() => setIsRegistered(false)}
            />

            <span>
              {t.notRegCitizen}
            </span>

          </label>


        </div>


        {isRegistered && (

          <div style={styles.inputGroup}>

            <label style={styles.label}>

              {t.socialRefNum}

              <span style={{color:"red"}}>
                *
              </span>

            </label>


            <input
              type="text"
              placeholder="HH-x-x-xx-xx-xxx-xxxxx"
              value={referenceNumber}
              onChange={(e)=>setReferenceNumber(e.target.value)}
              style={styles.textField}
            />

          </div>

        )}



        <div className="btn-group">

        <button
          style={styles.button}
          onClick={onNext}
        >

          {t.continueBtn}

        </button>
        </div>


      </div>

    </div>
  );
}


export default CitizenNot;