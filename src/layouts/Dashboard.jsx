/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet} from "react-router-dom";
import { useState, useEffect } from "react";

// components
import UserDropdown from "../components/Dropdowns/UserDropdown.jsx";
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import FooterAdmin from "../components/Footers/FooterAdmin.jsx";

// views

import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Maps from "../pages/dashboard/Maps.jsx";
import Settings from "../pages/dashboard/Settings.jsx";
import Tables from "../pages/dashboard/Tables.jsx";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  // const [open, setOpen] = useState(true);
  // const token = localStorage.getItem("token");
  // const status = localStorage.getItem("status");

  // const userString = localStorage.getItem("user");
  // const user = JSON.parse(userString);
  // const navigate = useNavigate();
   
  // const openDash = ()=>{
  //   setOpen(true);
  // }
  // const closeDash =()=>{
  //   setOpen(false);
  // };
  
  return (
    <>
    {open  && (
      <>
      <Sidebar />
      <div className="relative md:ml-64 bg-slate-100 ">
        <AdminNavbar />
        <div className="px-4  md:px-10 mx-auto w-full -m-24">
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
      </>
    )}
      
    </>
  );
}
