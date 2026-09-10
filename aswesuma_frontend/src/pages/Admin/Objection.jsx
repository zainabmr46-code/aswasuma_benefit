import React, { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Objection() {
  const [gn, setGn] = useState("");
  const [objections, setObjections] = useState([]);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const division = e.target.value;
    setGn(division);

    if (!division) {
      setObjections([]);
      return;
    }

    try {
      const res = await api.get(`/admin/objections/${division}`);

      console.log("API RESPONSE:", res.data);

      setObjections(res.data);
    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
    }
  };

  const viewObjection = (id) => {
    navigate(`/admin/objections/${id}`);
  };

  const updateObjectionStatus = async (id, status) => {
    try {
      await api.put(`/admin/objection/status/${id}`, { status });

      setObjections((prev) =>
        prev.map((item) => (item.id === id ? { ...item, status } : item)),
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateObjectionCategory = async (id, category) => {
    if (!category) return;

    try {
      await api.put(`/admin/objection/category/${id}`, {
        assigned_category: category,
      });

      setObjections((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, assigned_category: category } : item,
        ),
      );
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className="admin-content">
      <h1>Submit for Objection</h1>

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
        <p style={{ marginTop: "20px" }}>
          Selected GN Division: <strong>{gn}</strong>
        </p>
      )}

      <br />
      <br />

      {objections.length > 0 && (
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>NIC</th>
              <th>GN Division</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {objections.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.obj_name}</td>
                <td>{item.obj_nic}</td>
                <td>{item.obj_gn_division}</td>
                <td>{item.obj_mobile}</td>

                <td>
                  <select
                    style={{ width: "170px" }}
                    value={item.status || "Pending"}
                    onChange={(e) =>
                      updateObjectionStatus(item.id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Application Processing">
                      Application Processing
                    </option>
                    <option value="Eligible">Eligible</option>
                    <option value="Not Eligible">Not Eligible</option>
                  </select>
                </td>

                <td>
                  <select
                    style={{ width: "220px" }}
                    value={item.assigned_category || ""}
                    onChange={(e) =>
                      updateObjectionCategory(item.id, e.target.value)
                    }
                  >
                    <option value="Not Assigned">Not Assigned</option>
                    <option value="Extremely Poor">Extremely Poor</option>
                    <option value="Severely Poor">Severely Poor</option>
                    <option value="Poor">Poor</option>
                    <option value="Vulnerable">Vulnerable</option>
                    <option value="Transitional">Transitional</option>
                  </select>
                </td>

                <td>
                  <div className="btn-group">
                    <button onClick={() => viewObjection(item.id)}>View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Objection;
