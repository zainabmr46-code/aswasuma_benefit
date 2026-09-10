import React from "react";
import "../../../componentStyle/ApplyBenefit.css";
import DigitalSign from "./DigitalSign";
import languages from "../../../language";
import { ToastContainer, toast } from "react-toastify";

function ClaimsAdd({
  formData,
  setFormData,
  handleMemberChange,
  addMember,
  t,
}) {
  const rotate = {
    writingMode: "vertical-rl",
    transform: "rotate(180deg)",
    whiteSpace: "nowrap",
    textAlign: "center",
    verticalAlign: "middle",
    padding: "10px",
  };

  return (
    <div className="steps">
      <div className="col">
        <table className="main-table" border={1}>
          <thead>
            <tr className="header-row">
              <th>{t.serialNumber}</th>
              <th style={rotate}>
                {t.familyMembersHeading}
                <br />
                <br />
                {t.familyMembersSub}
              </th>
              <th style={rotate}>{t.relationshipToApplicant}</th>
              <th style={rotate}>{t.gender}</th>
              <th style={rotate}>{t.maritalStatus}</th>
              <th style={rotate}>{t.dateOfBirth}</th>
              <th style={rotate}>{t.completedAge}</th>
              <th style={rotate}>
                {t.nicHeader}
                <br />
                {t.nicSub}
              </th>
              <th style={rotate}>
                {t.attendingSchool}
                <br />
                {t.attendingSchoolSub}
              </th>
              <th style={rotate}>
                {t.levelOfEducation}
                <br />
                {t.levelOfEducationSub}
              </th>
              <th style={rotate}>{t.mainEconomicActivity}</th>
              <th style={rotate}>
                {t.govAllowances}
                <br />
                {t.govAllowancesSub}
              </th>
              <th style={rotate}>
                {t.facingProblems}
                <br />
                {t.facingProblemsSub}
              </th>
              <th style={rotate}>{t.disabilityStatus}</th>
              <th style={rotate}>{t.identifiedDisability}</th>
              <th style={rotate}>{t.chronicDisease}</th>
              <th style={rotate}>{t.phone}</th>
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
              <th>9</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
            </tr>
          </tbody>
          <tbody>
            {formData.members.map((member, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    name="relationship"
                    value={member.relationship}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    name="gender"
                    value={member.gender}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="marital_status"
                    value={member.marital_status}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="dob"
                    value={member.dob}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="age"
                    value={member.age}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="nic"
                    value={member.nic}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="education_attending"
                    value={member.education_attending}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="education_level"
                    value={member.education_level}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="occupation"
                    value={member.occupation}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    name="gov_allowances"
                    value={member.gov_allowances}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="challenges"
                    value={member.challenges}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="disability_status"
                    value={member.disability_status}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="disability_type"
                    value={member.disability_type}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="chronic_disease"
                    value={member.chronic_disease}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="mobile"
                    value={member.mobile}
                    onChange={(e) => handleMemberChange(index, e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br />

        <div className="btn-group">


        <button type="button" onClick={addMember}>
          {t.addMemberBtn}
        </button>
        </div>
        <div className="info-wrapper">
          <br />
          <br />
          <div className="note-text">{t.codeInstructionNote}</div>
        </div>

        <div className="card1">
          <div className="grid">
            <div className="card">
              <h4>{t.block3Title}</h4>
              <ul>
                <li>
                  <strong>1</strong>-{" "}
                  {t.rel01 ? t.rel01.split("- ")[1] : "Self(Applicant)"}
                </li>
                <li>
                  <strong>2</strong>-{" "}
                  {t.rel02 ? t.rel02.split("- ")[1] : "Mother"}
                </li>
                <li>
                  <strong>3</strong>-{" "}
                  {t.rel03 ? t.rel03.split("- ")[1] : "Father"}
                </li>
                <li>
                  <strong>4</strong>-{" "}
                  {t.rel04 ? t.rel04.split("- ")[1] : "Wife"}
                </li>
                <li>
                  <strong>5</strong>-{" "}
                  {t.rel05 ? t.rel05.split("- ")[1] : "Husband"}
                </li>
                <li>
                  <strong>6</strong>- {t.rel06 ? t.rel06.split("- ")[1] : "Son"}
                </li>
                <li>
                  <strong>7</strong>-{" "}
                  {t.rel07 ? t.rel07.split("- ")[1] : "Daughter"}
                </li>
                <li>
                  <strong>8</strong>-{" "}
                  {t.rel08 ? t.rel08.split("- ")[1] : "Son-in-law"}
                </li>
                <li>
                  <strong>9</strong>-{" "}
                  {t.rel09 ? t.rel09.split("- ")[1] : "Daughter-in-law"}
                </li>
                <li>
                  <strong>10</strong>-{" "}
                  {t.rel10 ? t.rel10.split("- ")[1] : "Mother-in-law"}
                </li>
                <li>
                  <strong>11</strong>-{" "}
                  {t.rel11 ? t.rel11.split("- ")[1] : "Father-in-law"}
                </li>
                <li>
                  <strong>12</strong>-{" "}
                  {t.rel12 ? t.rel12.split("- ")[1] : "Other Relative"}
                </li>
              </ul>

              <br />
              <h4>{t.block4Title}</h4>
              <ul>
                <li>
                  <strong>1</strong>-{" "}
                  {t.gender01 ? t.gender01.split("- ")[1] : "Male"}
                </li>
                <li>
                  <strong>2</strong>-{" "}
                  {t.gender02 ? t.gender02.split("- ")[1] : "Female"}
                </li>
              </ul>

              <br />

              <h4>{t.block5Title}</h4>
              <ul>
                <li>
                  <strong>1</strong>-{" "}
                  {t.marital01
                    ? t.marital01.split("- ")[1]
                    : "Never Married / Unmarried"}
                </li>
                <li>
                  <strong>2</strong>-{" "}
                  {t.marital02 ? t.marital02.split("- ")[1] : "Married"}
                </li>
                <li>
                  <strong>3</strong>-{" "}
                  {t.marital03 ? t.marital03.split("- ")[1] : "Widow / Widower"}
                </li>
                <li>
                  <strong>4</strong>-{" "}
                  {t.marital04 ? t.marital04.split("- ")[1] : "Divorced"}
                </li>
                <li>
                  <strong>5</strong>-{" "}
                  {t.marital05
                    ? t.marital05.split("- ")[1]
                    : "Legally Separated"}
                </li>
              </ul>

              <br />

              <h4>{t.block10Title}</h4>
              <ul>
                <li>
                  <strong>1</strong> -{" "}
                  {t.eduAtt01 ? t.eduAtt01.split(" - ")[1] : "Pre-school"}
                </li>
                <li>
                  <strong>2</strong> -{" "}
                  {t.eduAtt02 ? t.eduAtt02.split(" - ")[1] : "Primary School"}
                </li>
                <li>
                  <strong>3</strong> -{" "}
                  {t.eduAtt03
                    ? t.eduAtt03.split(" - ")[1]
                    : "Special Education"}
                </li>
                <li>
                  <strong>4</strong> -{" "}
                  {t.eduAtt04 ? t.eduAtt04.split(" - ")[1] : "Not attending"}
                </li>
              </ul>

              <br />
              <h4>{t.block11Title}</h4>
              <ul>
                <li>
                  <strong>1</strong> - {t.eduLvl01 ? t.eduLvl01.split(" - ")[1] : "Not attending"}
                </li>
                <li>
                  <strong>2</strong> - {t.eduLvl02 ? t.eduLvl02.split(" - ")[1] : "Grade 1-5"}
                </li>
                <li>
                  <strong>3</strong> - {t.eduLvl03 ? t.eduLvl03.split(" - ")[1] : "Grade 6-9"}
                </li>
                <li>
                  <strong>4</strong> - {t.eduLvl04 ? t.eduLvl04.split(" - ")[1] : "O/L"}
                </li>
                <li>
                  <strong>5</strong> - {t.eduLvl05 ? t.eduLvl05.split(" - ")[1] : "A/L"}
                </li>
                <li>
                  <strong>6</strong> - {t.eduLvl06 ? t.eduLvl06.split(" - ")[1] : "Vocational"}
                </li>
                <li>
                  <strong>7</strong> - {t.eduLvl07 ? t.eduLvl07.split(" - ")[1] : "University"}
                </li>
                <li>
                  <strong>8</strong> - {t.eduLvl08 ? t.eduLvl08.split(" - ")[1] : "Postgraduate"}
                </li>
              </ul>
            </div>

            <div className="card">
              <h4>{t.block12Title}</h4>
              <ul>
                <li>
                  <strong>1</strong> - {t.econ01 ? t.econ01.split(" - ")[1] : "Agriculture / Farming"}
                </li>
                <li>
                  <strong>2</strong> - {t.econ02 ? t.econ02.split(" - ")[1] : "Fishing"}
                </li>
                <li>
                  <strong>3</strong> - {t.econ03 ? t.econ03.split(" - ")[1] : "Animal Husbandry"}
                </li>
                <li>
                  <strong>4</strong> - {t.econ04 ? t.econ04.split(" - ")[1] : "Handicrafts / Cottage Industries"}
                </li>
                <li>
                  <strong>5</strong> - {t.econ05 ? t.econ05.split(" - ")[1] : "Garments"}
                </li>
                <li>
                  <strong>6</strong> - {t.econ06 ? t.econ06.split(" - ")[1] : "Plantation Work"}
                </li>
                <li>
                  <strong>7</strong> - {t.econ07 ? t.econ07.split(" - ")[1] : "Mining and Quarrying"}
                </li>
                <li>
                  <strong>8</strong> - {t.econ08 ? t.econ08.split(" - ")[1] : "Labor / Daily Wages"}
                </li>
                <li>
                  <strong>9</strong> - {t.econ09 ? t.econ09.split(" - ")[1] : "Small Export Crops"}
                </li>
                <li>
                  <strong>10</strong> - {t.econ10 ? t.econ10.split(" - ")[1] : "Construction / Carpentery Work"}
                </li>
                <li>
                  <strong>11</strong> - {t.econ11 ? t.econ11.split(" - ")[1] : "Trade / Commerce"}
                </li>
                <li>
                  <strong>12</strong> - {t.econ12 ? t.econ12.split(" - ")[1] : "Transport / Transporation"}
                </li>
                <li>
                  <strong>13</strong> - {t.econ13 ? t.econ13.split(" - ")[1] : "Industry / Manufacturing"}
                </li>
                <li>
                  <strong>14</strong> - {t.econ14 ? t.econ14.split(" - ")[1] : "Retired"}
                </li>
                <li>
                  <strong>15</strong> - {t.econ15 ? t.econ15.split(" - ")[1] : "Other Employment"}
                </li>
                <li>
                  <strong>16</strong> - {t.econ16 ? t.econ16.split(" - ")[1] : "Student"}
                </li>
                <li>
                  <strong>17</strong> - {t.econ17 ? t.econ17.split(" - ")[1] : "Others"}
                </li>
              </ul>

              <br />
             <h4>{t.block13Title}</h4>
              <ul>
                <li>
                  <strong>1</strong>- {t.allow01 ? t.allow01.split("- ")[1] : "Samurdhi Allowance"}
                </li>
                <li>
                  <strong>3</strong>- {t.allow03 ? t.allow03.split("- ")[1] : "Elderly Allowance / Old Age Allowance"}
                </li>
                <li>
                  <strong>4</strong>- {t.allow04 ? t.allow04.split("- ")[1] : "Disability Allowance"}
                </li>
                <li>
                  <strong>5</strong>- {t.allow05 ? t.allow05.split("- ")[1] : "Kidney Patient Allowance"}
                </li>
                <li>
                  <strong>6</strong>- {t.allow06 ? t.allow06.split("- ")[1] : "Thalassemia Patient Allowance"}
                </li>
                <li>
                  <strong>7</strong>- {t.allow07 ? t.allow07.split("- ")[1] : "Cancer Patient Allowance"}
                </li>
                <li>
                  <strong>8</strong>- {t.allow08 ? t.allow08.split("- ")[1] : "Mahapola Scholarship Allowance (Grade 5)"}
                </li>
                <li>
                  <strong>9</strong>- {t.allow09 ? t.allow09.split("- ")[1] : "PING PADI & Public Assistance"}
                </li>
                <li>
                  <strong>10</strong>- {t.allow10 ? t.allow10.split("- ")[1] : "Others"}
                </li>
              </ul>
              <br />
              <h4>{t.block14Title}</h4>
              <ul>
                <li>
                  <strong>1</strong>- {t.prob01 ? t.prob01.split("- ")[1] : "Yes"}
                </li>
                <li>
                  <strong>2</strong>- {t.prob02 ? t.prob02.split("- ")[1] : "No"}
                </li>
              </ul>
              <br />
              <h4>{t.block15Title}</h4>
              <ul>
                <li>
                  <strong>1</strong>- {t.disStat01 ? t.disStat01.split("- ")[1] : "No difficulty"}
                </li>
                <li>
                  <strong>2</strong>- {t.disStat02 ? t.disStat02.split("- ")[1] : "Difficulty seeing (even with glasses)"}
                </li>
                <li>
                  <strong>3</strong>- {t.disStat03 ? t.disStat03.split("- ")[1] : "Difficulty hearing (even with a hearing aid)"}
                </li>
                <li>
                  <strong>4</strong>- {t.disStat04 ? t.disStat04.split("- ")[1] : "Difficulty walking short distances or climbing stairs"}
                </li>
                <li>
                  <strong>5</strong>- {t.disStat05 ? t.disStat05.split("- ")[1] : "Difficulty remembering or concentrating"}
                </li>
                <li>
                  <strong>6</strong>- {t.disStat06 ? t.disStat06.split("- ")[1] : "Difficulty with self-care (such as dressing or washing)"}
                </li>
                <li>
                  <strong>7</strong>- {t.disStat07 ? t.disStat07.split("- ")[1] : "Difficulty communicating (understanding or being understood) due to physical or mental reasons"}
                </li>
              </ul>
            </div>
            <br />
            <div className="card">
              <h4>{t.block16Title}</h4>
              <ul>
                <li>
                  <strong>1</strong>- {t.disId01 ? t.disId01.split("- ")[1] : "No disability"}
                </li>
                <li>
                  <strong>2</strong>- {t.disId02 ? t.disId02.split("- ")[1] : "Complete visual impairment / Blindness"}
                </li>
                <li>
                  <strong>3</strong>- {t.disId03 ? t.disId03.split("- ")[1] : "Speech impairment"}
                </li>
                <li>
                  <strong>4</strong>- {t.disId04 ? t.disId04.split("- ")[1] : "Hearing impairment"}
                </li>
                <li>
                  <strong>5</strong>- {t.disId05 ? t.disId05.split("- ")[1] : "Intellectual disability / Developmental delay"}
                </li>
                <li>
                  <strong>6</strong>- {t.disId06 ? t.disId06.split("- ")[1] : "Neurological disorder (e.g., Multiple Sclerosis)"}
                </li>
                <li>
                  <strong>7</strong>- {t.disId07 ? t.disId07.split("- ")[1] : "Asthma"}
                </li>
                <li>
                  <strong>8</strong>- {t.disId08 ? t.disId08.split("- ")[1] : "Amputated, paralyzed, or deformed limbs"}
                </li>
                <li>
                  <strong>9</strong>- {t.disId09 ? t.disId09.split("- ")[1] : "Spinal cord injury / Physical disability"}
                </li>
                <li>
                  <strong>10</strong>- {t.disId10 ? t.disId10.split("- ")[1] : "Mood disorders / Severe mental illnesses"}
                </li>
                <li>
                  <strong>11</strong>- {t.disId11 ? t.disId11.split("- ")[1] : "Psoriasis"}
                </li>
                <li>
                  <strong>12</strong>- {t.disId12 ? t.disId12.split("- ")[1] : "Multiple disabilities"}
                </li>
              </ul>
              <br />
              <h4>{t.block17Title}</h4>
              <ul>
                <li>
                  <strong>1</strong>- {t.disease01 ? t.disease01.split("- ")[1] : "No disease"}
                </li>
                <li>
                  <strong>2</strong>- {t.disease02 ? t.disease02.split("- ")[1] : "Heart disease"}
                </li>
                <li>
                  <strong>3</strong>- {t.disease03 ? t.disease03.split("- ")[1] : "Diabetes"}
                </li>
                <li>
                  <strong>4</strong>- {t.disease04 ? t.disease04.split("- ")[1] : "High blood pressure / Hypertension"}
                </li>
                <li>
                  <strong>5</strong>- {t.disease05 ? t.disease05.split("- ")[1] : "Low blood pressure / Hypotension"}
                </li>
                <li>
                  <strong>6</strong>- {t.disease06 ? t.disease06.split("- ")[1] : "Kidney disease"}
                </li>
                <li>
                  <strong>7</strong>- {t.disease07 ? t.disease07.split("- ")[1] : "Mental illness"}
                </li>
                <li>
                  <strong>8</strong>- {t.disease08 ? t.disease08.split("- ")[1] : "Others"}
                </li>
              </ul>

            </div>
          </div>

          <br />
          <DigitalSign
          language={languages}
            setSignature={(signature) =>
              setFormData((prev) => ({
                ...prev,
                signature,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ClaimsAdd;
