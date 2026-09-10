import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

function Application() {
  const [gn, setGn] = useState("");
  const [applications, setApplications] = useState([]);

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const division = e.target.value;

    setGn(division);

    if (!division) {
      setApplications([]);

      return;
    }

    try {
      const res = await api.get(`/admin/applications/${division}`);

      setApplications(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/admin/application/status/${id}`, {
        status,
      });

      setApplications((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status,
              }
            : item,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async (id, category) => {
    try {
      // Backend validates "assigned_category", not "category" — key must match exactly
      await api.put(`/admin/application/category/${id}`, {
        assigned_category: category,
      });

      setApplications((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                assigned_category: category,
              }
            : item,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const viewApplication = (id) => {
    navigate(`/admin/application/${id}`);
  };

  return (
    <div className="admin-content">
      <h1>Applications</h1>

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

      <br />
      <br />

      {gn && (
        <>
          <h3>Applications - {gn}</h3>

          <table border="1" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>NIC</th>
                <th>Apply For</th>
                <th>Family Members</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.length > 0 ? (
                applications.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>

                    <td>{item.nic}</td>

                    <td>{item.apply_for}</td>

                    <td>{item.family_members}</td>

                    <td>{item.mobile}</td>

                    <td>
                      <select
                        style={{
                          width: "150px",
                        }}
                        value={item.status || "Pending"}
                        onChange={(e) => updateStatus(item.id, e.target.value)}
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
                        style={{
                          width: "200px",
                        }}
                        value={item.assigned_category || "Not Assigned"}
                        onChange={(e) =>
                          updateCategory(item.id, e.target.value)
                        }
                      >
                        <option value="Not Assigned">Not Assigned </option>

                        <option value="Extremely Poor">Extremely Poor</option>

                        <option value="Severely Poor">Severely Poor</option>

                        <option value="Poor">Poor</option>

                        <option value="Vulnerable">Vulnerable</option>

                        <option value="Transitional">Transitional</option>
                      </select>
                    </td>

                    <td>
                      <div className="btn-group">
                        <button onClick={() => viewApplication(item.id)}>
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No Applications Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Application;