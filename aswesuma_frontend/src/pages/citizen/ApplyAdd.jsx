import React from "react";
import DigitalSign from "./addictional/DigitalSign";
import "../../componentStyle/ApplyBenefit.css";
import languages from "../../language";

function ApplyAdd({
  formData,
  setFormData,
  handleMemberChange,
  addMember,
  language,
}) {
  const t = languages[language];

  const rotate = {
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    whiteSpace: "nowrap",
    textAlign: "center",
    verticalAlign: "middle",
    padding: "10px",
    fontSize: "20px"
  };

  const layoutContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    boxSizing: "border-box",
    width: "100%",
  };

  const tableWrapper = {
    width: "100%",
    overflowX: "auto",
  };

  const signatureWrapper = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
  };

  return (
    <div style={layoutContainer} className="steps">

      <div style={tableWrapper} className="col">

        <table className="main-table" border={1} style={{ width: "100%" }}>

          <thead>
            <tr className="header-row">

              <th style={rotate}>
                {t.serialNumber}
              </th>

              <th style={rotate}>
                {t.familyMembersHeading}
                <br />
                <br />
                {t.familyMembersSub}
                <br/>
                {t.sub}
              </th>

              <th style={rotate}>
                {t.relationshipToApplicant}
              </th>

              <th style={rotate}>
                {t.gender}
              </th>

              <th style={rotate}>
                {t.dateOfBirth}
              </th>

              <th style={rotate}>
                {t.completedAge}
              </th>

              <th style={rotate}>
                {t.nicHeader}
                <br />
                {t.nicSub}
              </th>

            </tr>
          </thead>


          <tbody>

            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
            </tr>


            {formData.members.map((member, index) => (

              <tr key={index}>

                <td>
                  {index + 1}
                </td>


                <td>
                  <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={(e) =>
                      handleMemberChange(index, e)
                    }
                  />
                </td>


                <td>
                  <input
                    type="text"
                    name="relationship"
                    value={member.relationship}
                    onChange={(e) =>
                      handleMemberChange(index, e)
                    }
                  />
                </td>


                <td>

                  <select
                    name="gender"
                    value={member.gender}
                    onChange={(e) =>
                      handleMemberChange(index, e)
                    }
                  >

                    <option value="">
                      {t.selectDropdown}
                    </option>

                    <option value="Male">
                      {t.male}
                    </option>

                    <option value="Female">
                      {t.female}
                    </option>

                  </select>

                </td>



                <td>

                  <input
                    type="date"
                    name="dob"
                    value={member.dob}
                    onChange={(e) =>
                      handleMemberChange(index, e)
                    }
                  />

                </td>



                <td>

                  <input
                    type="text"
                    name="age"
                    value={member.age}
                    onChange={(e) =>
                      handleMemberChange(index, e)
                    }
                  />

                </td>



                <td>

                  <input
                    type="text"
                    name="nic"
                    value={member.nic}
                    onChange={(e) =>
                      handleMemberChange(index, e)
                    }
                  />

                </td>


              </tr>

            ))}


          </tbody>

        </table>


        <br />

        <div className="btn-group">


        <button
          type="button"
          onClick={addMember}
          className="add-member-btn"

          style={{
            width: "200px"
          }}
        >
          {t.addMemberBtn}
        </button>
        </div>


      </div>



      <div style={signatureWrapper}>

        <DigitalSign
  
  setSignature={(signature) =>
    setFormData((prev) => ({ ...prev, signature }))
  }
/>
        
      </div>


    </div>
  );
}

export default ApplyAdd;
