import { Outlet } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar";
import Sidebar from "../../components/Admin/Slidebar"; 

export default function AdminLayout() {
  return (
    <>
      <Navbar />
      <div className="admin-container">
        <Sidebar />
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}