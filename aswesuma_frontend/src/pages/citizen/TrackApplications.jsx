import React, { useEffect, useState } from "react";
import api from "../../api/axios";

export default function TrackApplications() {

  const [applications, setApplications] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));


  useEffect(() => {

    api.get("/my-applications")
      .then(res => {
        setApplications(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);



  return (

    <div>

      <h2>
        Welcome back {user?.name}!
      </h2>


      <table border="1">

        <thead>
          <tr>
            <th>Application</th>
            <th>NIC</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>


        <tbody>

          {
            applications.map((item,index)=>(

              <tr key={index}>

                <td>{item.apply_for}</td>

                <td>{item.nic}</td>

                <td>{item.category}</td>

                <td>{item.status}</td>

              </tr>

            ))
          }

        </tbody>

      </table>


    </div>

  );

}
