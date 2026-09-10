import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="admin-sidebar">

      <style>
        {`
          .admin-sidebar {
            width: 250px;
            height: 100vh;
            background-color: #0d47a1;
            padding: 30px 20px;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
          }

          .admin-sidebar a {
            color: white;
            text-decoration: none;
            padding: 12px 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            font-size: 18px;
            font-weight: 500;
            transition: 0.3s;
          }

          .admin-sidebar a:hover {
            background-color: #1565c0;
            transform: translateX(5px);
          }

          .admin-sidebar a.active {
            background-color: white;
            color: #0d47a1;
            font-weight: bold;
          }
        `}
      </style>


      <NavLink to="/admin/dashboard">
        Dashboard
      </NavLink>

      <NavLink to="/admin/applications">
        Applications
      </NavLink>

      <NavLink to="/admin/claims">
        Claims
      </NavLink>

      <NavLink to="/admin/objections">
        Objection
      </NavLink>

      
    </div>
  );
}

export default Sidebar;