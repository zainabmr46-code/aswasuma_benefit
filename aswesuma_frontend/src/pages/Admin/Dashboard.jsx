import React, { useEffect, useState } from "react";
import "../../componentStyle/Admin.css";
import api from "../../api/axios";

function Dashboard() {
  const [data, setData] = useState({
    users: 0,
    applications: 0,
    claims: 0,
    objections: 0,
    recent_applications: [],
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await api.get("/admin/dashboard");

        console.log("Dashboard Data:", response.data);

        setData(response.data);
      } catch (error) {
        console.log("Dashboard Error:", error.response?.data || error.message);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="admin-content">
      <hr />

      <div className="dashboard">
        <h1>Admin Dashboard</h1>

        <p>Welcome to the Aswesuma Benefits Administration System</p>

        <div className="cards">
          <div className="card users">
            <h2>{data.users}</h2>
            <p>Registered Users</p>
          </div>

          <div className="card applications">
            <h2>{data.applications}</h2>
            <p>Benefit Applications</p>
          </div>

          <div className="card claims">
            <h2>{data.claims}</h2>
            <p>Claims</p>
          </div>

          <div className="card objections">
            <h2>{data.objections}</h2>
            <p>Objections</p>
          </div>
        </div>


        <br/>
        <br/>
        <div className="application">
          <h2>Recent Applications</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>NIC</th>
                <th>GN Division</th>
                <th>Apply For</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {data.recent_applications.length > 0 ? (
                data.recent_applications.map((app) => (
                  <tr key={app.id}>
                    <td>{app.name}</td>

                    <td>{app.nic}</td>

                    <td>{app.gn_division}</td>
                    <td>{app.apply_for}</td>

                    <td>{app.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No Applications Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
