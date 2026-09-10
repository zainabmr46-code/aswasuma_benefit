import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";
import "../../componentStyle/MyAccount.css";

function PreList() {
  const [gn, setGn] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (division) => {
    try {
      setLoading(true);

      const res = await api.get("/eligible", {
        params: {
          gn_division: division,
        },
      });

      setData(res.data.data);
    } catch (error) {
      console.log("Eligible List Error:", error);

      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setGn(value);

    if (value) {
      fetchData(value);
    } else {
      setData([]);
    }
  };

  return (
    <div className="container">
      <hr />

      <div className="bar">
        <Link to="/">Home</Link>

        <span className="sap">&gt;</span>

        <p>List of Eligible Families - 2025</p>
      </div>

      <div>
        <label htmlFor="gn">Grama Niladhari Division:</label>

        <select
          name="gn_division"
          id="gn_division"
          value={gn}
          onChange={handleChange}
        >
          <option value="">-- Select GN Division --</option>

         <option value="Westhole">Westhole</option>
        <option value="Hydri">Hydri</option>
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
        <br />

        {gn && (
          <table border="1" width="100%">
            <thead>
              <tr>
                <th
                  colSpan="6"
                  style={{
                    background: "#fff",
                    color: "#002244",
                  }}
                >
                  Eligible List for {gn}
                </th>
              </tr>

              <tr>
                <th>#</th>

                <th>Ref No</th>

                <th>Name</th>

                <th>Address</th>
                <th>GN Division</th>

                <th>Category</th>

                <th>Aswesuma Eligible</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    Loading...
                  </td>
                </tr>
              ) : data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>

                    <td>{item.ref_no}</td>

                    <td>{item.name}</td>

                    <td>{item.address}</td>
                    <td>{item.gn_division}</td>
                    <td>{item.category}</td>

                    <td>{item.aswesuma_eligible}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>
                    No data found for {gn}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default PreList;

