import React, { useState } from "react";
import api from "../../api/axios";

function PreviousData() {
  const [gn, setGn] = useState("");

  const [refNos, setRefNos] = useState([]);

  const [selectedRef, setSelectedRef] = useState("");

  const [family, setFamily] = useState(null);

  const handleChange = async (e) => {
    const division = e.target.value;

    setGn(division);

    setSelectedRef("");

    setFamily(null);

    if (!division) {
      setRefNos([]);
      return;
    }

    try {
      const res = await api.get(`/admin/eligible-refnos/${division}`);

      console.log(res.data);

      setRefNos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefChange = async (e) => {
    const ref = e.target.value;

    setSelectedRef(ref);

    if (!ref) {
      setFamily(null);
      return;
    }

    try {
      const res = await api.get(`/admin/eligible-family/${ref}`);

      console.log(res.data);

      setFamily(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-content">
      <h1>Previous Data of Householders</h1>

      <br />

      <label>
        <strong>Grama Niladhari Division:</strong>
      </label>

      <br />
      <br />

      <select value={gn} onChange={handleChange}>
        <option value="">-- Select GN Division --</option>

        <option value="Westhole">Westhole</option>
        <option value="Hydree">Hydree</option>
        <option value="KadiEllena">KadiEllena</option>
        <option value="Greenwood">Greenwood</option>
        <option value="Bawwagama">Bawwagama</option>
        <option value="Imbulpitiya">Imbulpitiya</option>
        <option value="Nawalapitiya East">Nawalapitiya East</option>
        <option value="Nawalapitiya South">Nawalapitiya South</option>
        <option value="Nawalapitiya West">Nawalapitiya West</option>
        <option value="Nawalapitiya North">Nawalapitiya North</option>
        <option value="Uda Rabukpitiya">Uda Rabukpitiya</option>
        <option value="Pahala Rambukpitiya">Pahala Rambukpitiya</option>
        <option value="Balantota North">Balantota North</option>
        <option value="Balantota South">Balantota South</option>
        <option value="Aluthgama">Aluthgama</option>
        <option value="Dekinda">Dekinda</option>
        <option value="Wewegama">Wewegama</option>
        <option value="Weligampola">Weligampola</option>
        <option value="Kandopitiya">Kandopitiya</option>
        <option value="Inguruoya South">Inguruoya South</option>
        <option value="Inguruoya North">Inguruoya North</option>
        <option value="Mapakanda North">Mapakanda North</option>
        <option value="Mapakanda South">Mapakanda South</option>
        <option value="Weligodawatta">Weligodawatta</option>
        <option value="Dandubadiruppa">Dandubadiruppa</option>
        <option value="Pallegama">Pallegama</option>
        <option value="Warakawa">Warakawa</option>
        <option value="Panithuduwa">Panithuduwa</option>
        <option value="Karahadungala">Karahadungala</option>
      </select>

      {gn && (
        <>
          <br />
          <br />

          <label>
            <strong>Reference Number:</strong>
          </label>

          <br />
          <br />

          <select
            value={selectedRef}
            onChange={handleRefChange}
          >
            <option value="">-- Select Ref No --</option>

            {refNos.map((item) => (
              <option key={item.id} value={item.ref_no}>
                {item.ref_no}
              </option>
            ))}
          </select>
        </>
      )}

      {family && (
        <>
          <br />
          <br />

          <table border="1" width="100%">
            <thead>
              <tr>
                <th>Ref No</th>
                <th>Name</th>
                <th>Address</th>
                <th>GN Division</th>
                <th>Category</th>
                <th>Eligible</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{family.ref_no}</td>
                <td>{family.name}</td>
                <td>{family.address}</td>
                <td>{family.gn_division}</td>
                <td>{family.category}</td>
                <td>{family.aswesuma_eligible}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default PreviousData;