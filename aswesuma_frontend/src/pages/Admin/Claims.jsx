import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

function Claims() {
  const [gn, setGn] = useState("");
  const [claims, setClaims] = useState([]);

  const navigate = useNavigate();

  const handleChange = async (e) => {
    const division = e.target.value;

    setGn(division);

    if (!division) {
      setClaims([]);

      return;
    }

    try {
      const res = await api.get(`/admin/claims/${division}`);

      setClaims(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateClaimStatus = async (id, status) => {
    try {
      setClaims((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: status,
              }
            : item,
        ),
      );

      await api.put(`/admin/claim/status/${id}`, {
        status: status,
      });
    } catch (error) {
      console.log(
        "Status update error:",
        error.response?.data || error.message,
      );
    }
  };

  const updateClaimCategory = async (id, category) => {
    try {
      setClaims((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                assigned_category: category,
              }
            : item,
        ),
      );

      await api.put(`/admin/claim/category/${id}`, {
        assigned_category: category,
      });
    } catch (error) {
      console.log(
        "Category update error:",
        error.response?.data || error.message,
      );
    }
  };

  const viewClaim = (id) => {
    navigate(`/admin/claim/${id}`);
  };

  return (
    <div className="admin-content">
      <h1>Claims</h1>

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

        <option value="Uda Rambukpitiya">Uda Rambukpitiya</option>

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
          <h3>Claims - {gn}</h3>

          <table border="1" width="100%">
            <thead>
              <tr>
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
              {claims.length > 0 ? (
                claims.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>

                    <td>{item.nic}</td>

                    <td>{item.gn_division}</td>

                    <td>{item.mobile}</td>

                    <td>
                      <select
                        value={item.status || "Pending"}
                        onChange={(e) =>
                          updateClaimStatus(item.id, e.target.value)
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
                        value={item.assigned_category || "Not Assigned"}
                        onChange={(e) =>
                          updateClaimCategory(item.id, e.target.value)
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
                        <button onClick={() => viewClaim(item.id)}>View</button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No Claims Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Claims;
