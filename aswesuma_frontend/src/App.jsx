import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/citizen/Home";
import MyAccount from "./pages/citizen/MyAccount";
import About from "./pages/citizen/About";
import ContactUs from "./pages/citizen/ContactUs";
import Login from "./pages/citizen/Login";
import PreList from "./pages/citizen/PreList";
import Services from "./pages/citizen/Services";
import TrackApplications from "./pages/citizen/TrackApplications";
import ApplyClaims from "./pages/citizen/ApplyClaims";
import ApplyBenefit from "./pages/citizen/ApplyBenefit";
import ApplyObjection from "./pages/citizen/ApplyObjection";
import Forgot from "./pages/citizen/Forgot";

import CitizenLayout from "./layount/CitizenLayout";

import AdminDashboard from "./pages/Admin/Dashboard";
import AdminLayout from "./pages/Admin/AdminLayout";
import Application from "./pages/Admin/Application";
import ApplicationView from "./pages/Admin/ApplicationView";

import Claims from "./pages/Admin/Claims";
import ClaimView from "./pages/Admin/ClaimView";

import Objection from "./pages/Admin/Objection";
import ObjectionView from "./pages/Admin/ObjectionView";
import PreviousData from "./pages/Admin/PreviousData";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer />

      <Routes>
        <Route element={<CitizenLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/MyAccount" element={<MyAccount />} />

          <Route path="/About" element={<About />} />

          <Route path="/ContactUs" element={<ContactUs />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/PreList" element={<PreList />} />

          <Route path="/Services" element={<Services />} />

          <Route path="/track-applications" element={<TrackApplications />} />

          <Route path="/ApplyClaims" element={<ApplyClaims />} />

          <Route path="/ApplyBenefit" element={<ApplyBenefit />} />

          <Route path="/ApplyObjection" element={<ApplyObjection />} />

          <Route path="/Forgot" element={<Forgot />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/previousData" element={<PreviousData />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          <Route path="/admin/applications" element={<Application />} />

          <Route path="/admin/application/:id" element={<ApplicationView />} />

          <Route path="/admin/claims" element={<Claims />} />

          <Route path="/admin/claim/:id" element={<ClaimView />} />

          <Route path="/admin/objections" element={<Objection />} />
          <Route path="/admin/objections/:id" element={<ObjectionView />} />

  
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
