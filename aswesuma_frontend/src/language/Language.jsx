import React, { useState } from "react";
import "../componentStyle/ApplyBenefit.css";

export default function LanguageSelector({ onNext, setLanguage }) {
  const [selected, setSelected] = useState("en");

  const options = [
    {
      id: "si",
      label: "සිංහල",
      subLabel: "Sinhala",
      flag: "LK",
      flagBg: "#ea580c",
    },
    {
      id: "ta",
      label: "தமிழ்",
      subLabel: "Tamil",
      flag: "LK",
      flagBg: "#ea580c",
    },
    {
      id: "en",
      label: "English",
      subLabel: "English",
      flag: "US",
      flagBg: "#3b82f6",
    },
  ];

  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8fafc",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "20px",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      maxWidth: "480px",
      borderRadius: "24px",
      backgroundColor: "#ffffff",
      padding: "40px",
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
      border: "1px solid #f1f5f9",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      marginTop: "0px",
      marginBottom: "32px",
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a",
      letterSpacing: "-0.025em",
    },
    optionsWrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    optionRow: (isSelected) => ({
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      borderRadius: "16px",
      border: isSelected ? "2px solid #2563eb" : "1px solid #e2e8f0",
      padding: isSelected ? "19px" : "20px", // Compensates for the thicker active border
      backgroundColor: isSelected ? "#f0f6ff" : "#ffffff",
      transition: "all 0.2s ease",
    }),
    radioOuter: (isSelected) => ({
      marginRight: "16px",
      display: "flex",
      height: "22px",
      width: "22px",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      border: isSelected ? "2px solid #2563eb" : "2px solid #cbd5e1",
      backgroundColor: "#ffffff",
    }),
    radioInner: {
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      backgroundColor: "#2563eb",
    },
    flagCircle: (bg) => ({
      marginRight: "16px",
      display: "flex",
      height: "40px",
      width: "40px",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      fontSize: "13px",
      fontWeight: "700",
      color: "#ffffff",
      backgroundColor: bg,
    }),
    textGroup: {
      display: "flex",
      flexDirection: "column",
    },
    textMain: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#1e293b",
      lineHeight: "1.2",
    },
    textSub: {
      fontSize: "14px",
      color: "#64748b",
      marginTop: "4px",
    },
    
    footer: {
      marginTop: "24px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      color: "#64748b",
    },
    icon: {
      height: "18px",
      width: "18px",
      color: "#0ea5e9",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Choose Language</h2>

        <div style={styles.optionsWrapper}>
          {options.map((option) => {
            const isSelected = selected === option.id;
            return (
              <label
                key={option.id}
                onClick={() => setSelected(option.id)}
                style={styles.optionRow(isSelected)}
              >
                <div style={styles.radioOuter(isSelected)}>
                  {isSelected && <div style={styles.radioInner} />}
                </div>

                <div style={styles.flagCircle(option.flagBg)}>
                  {option.flag}
                </div>

                <div style={styles.textGroup}>
                  <span style={styles.textMain}>{option.label}</span>
                  <span style={styles.textSub}>{option.subLabel}</span>
                </div>
              </label>
            );
          })}
          <br/>
        </div>

        

          <div className="btn-group">

        <button
          type="button"
         
          onClick={() => {
            setLanguage(selected);
            onNext();
          }}
          onMouseOver={(e) =>
            (e.currentTarget)
          }
          onMouseOut={(e) =>
            (e.currentTarget)
          }
        >
          Change Language
        </button>
          </div>

        <div style={styles.footer}>
          <svg
            style={styles.icon}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7v5l3 3"
            />
          </svg>
          <span>Select Your Preferred Language</span>
        </div>
      </div>
    </div>
  );
}
