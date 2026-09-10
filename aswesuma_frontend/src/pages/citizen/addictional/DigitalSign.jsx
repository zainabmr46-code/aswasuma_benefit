import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import languages from "../../../language";

function DigitalSign({setSignature, language }) {

   
  const t = languages[language] || languages.en;

  const sigRef = useRef(null);

  const saveSignature = () => {
    if (sigRef.current && !sigRef.current.isEmpty()) {
      const image = sigRef.current.toDataURL("image/png");

      setSignature(image);
    }
  };

  const clear = () => {
    if (sigRef.current) {
      sigRef.current.clear();

      setSignature("");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <fieldset
        style={{
          textAlign: "center",
          padding: "25px",
          background: "#fafafa",
          borderRadius: "12px",
          border: "1px solid #cbd5e1",
        }}
      >
        <p>{t.certificationText}</p>

        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            display: "inline-block",
          }}
        >
          <SignatureCanvas
            ref={sigRef}
            penColor="black"
            canvasProps={{
              width: 500,
              height: 180,
              className: "signatureCanvas",
            }}
            onEnd={saveSignature}
          />
        </div>

        <br />

        <p>
          <strong>{t.applicantsSignature}</strong>
        </p>

        <div className="btn-group">
          
        </div>
        <div className="btn-group">

        <button type="button" onClick={clear} className="btn-group" style={{
          width: '250px'
        }}>
          {t.clearSignatureBtn}
        </button>
        </div>
      </fieldset>
    </div>
  );
}

export default DigitalSign;
