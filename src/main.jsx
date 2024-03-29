import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import About from "./pages/about.jsx";
// import Programs from "./pages/programs.jsx";
import FabClass from "./pages/fabClass.jsx";
import OurServices from "./pages/ourServices.jsx";
import Events from "./pages/events.jsx";
import EventRegister from "./pages/eventRegister.jsx";
import EventApplicationForm from "./pages/eventApplicationForm.jsx";
import GetQuote from "./pages/getQuote.jsx";
import Nav from "./components/Navbars/HomeNavbar.jsx";
import DashboardLayout from "./layouts/Dashboard.jsx";
import Machines from "./pages/machines.jsx";
import EditEventApplication from "./pages/editEventApplication.jsx";

import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Maps from "./pages/dashboard/Maps.jsx";
import Settings from "./pages/dashboard/Settings.jsx";
import Tables from "./pages/dashboard/Tables.jsx";
import NavFooter from "./components/Footers/NavFooter.jsx";
import Machine from "./pages/Machine.jsx";

import Portfolio from "./pages/Portfolio.jsx";

import ProgramDash from "./pages/dashboard/Program.jsx";
import EventsDash from "./pages/dashboard/EventsDash.jsx";
import TestimonyDash from "./pages/dashboard/TestimonyDash.jsx";
import MachineDash from "./pages/dashboard/MachineDash.jsx";
// Dashoard form
import ProgramForm from "./pages/dashboard/programForm.jsx";
import EventDashForm from "./pages/dashboard/EventDashForm.jsx";
import TestimonialForm from "./pages/dashboard/TestimonialForm.jsx";
import MachineForm from "./pages/dashboard/MachineForm.jsx";
import AddProgramForm from "./pages/dashboard/addProgram.jsx";
import AddEventForm from "./pages/dashboard/addEvent.jsx";
import Register from './pages/auth/Register.jsx';

// import  from './pages/auth/Register.jsx';

import Login from "./pages/auth/Login.jsx";
import EventUserDash from "./pages/dashboard/GalleryDash.jsx";
import AddProgramUserForm from "./pages/dashboard/addTestimonyForm.jsx";
import AddEventUserForm from "./pages/dashboard/AddGalleryForm.jsx";



// import Login from "./pages/auth/Login.jsx";
import FabClassDash from "./pages/dashboard/FabClassDash.jsx";

import AddTestimonyForm from "./pages/dashboard/addTestimonyForm.jsx";
import AddMachineForm from "./pages/dashboard/addMachineForm.jsx";
import EditProgramCardSettings from "./components/Cards/EditProgramCardSettings.jsx";
import slides from './data/carauselData'
import ProgramDetails from "./pages/dashboard/ProgramDetails.jsx";
import ApplicantDetails from "./pages/dashboard/ApplicantDetails.jsx";
import Programs from "./pages/programs.jsx";
import TestimonyCardSettings from "./components/Cards/TestimonyCardSettings.jsx";
import EditTestimonyCardSettings from "./components/Cards/EditTestimonyCardSettings.jsx";
import EditMachineCardSettings from "./components/Cards/EditMachineCardSettings.jsx";
import TestimonyDetail from "./pages/dashboard/TestimonyDetail.jsx";
import MachineDetail from "./pages/dashboard/MachineDetail.jsx";

import GalleryDash from "./pages/dashboard/GalleryDash.jsx";
import AddGalleryForm from "./pages/dashboard/AddGalleryForm.jsx";
import EventDetail from "./pages/dashboard/EventDetail.jsx";
import FabClassForm from "./pages/dashboard/FabClassForm.jsx";
import FabClassDetail from "./pages/dashboard/FabClassDetail.jsx";
import AddFabClass from "./pages/dashboard/AddFabClass.jsx";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />                                     
      <NavFooter/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About data={slides} />} />
          <Route path="programs" element={<Programs />} />
          <Route path="fabClass" element={<FabClass />} />
          <Route path="ourServices" element={<OurServices />} />
          <Route path="events" element={<Events />} />
          <Route path="eventRegister/:id" element={<EventRegister />} />
          <Route path="getQuote" element={<GetQuote />} />
          <Route path="machine" element={<Machines />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="eventApplicationForm" element={<EventApplicationForm />}/>
          <Route path="EditEventApplication" element={<EditEventApplication />}        />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/stats" index element={<Dashboard />} />
          <Route path="/dashboard/maps" element={<Maps />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/tables" element={<Tables />} />
          <Route path="/dashboard/programDash" element={<ProgramDash />} />
          <Route path="/dashboard/eventsDash" element={<EventsDash />} />
          <Route path="/dashboard/TestimonyDash" element={<TestimonyDash />} />
          <Route path="/dashboard/MachineDash" element={<MachineDash />} />
          <Route path="/dashboard/EventUserDash" element={<EventUserDash />} />
          <Route path="/dashboard/galleryDash" element={<GalleryDash />} />
          <Route path="/dashboard/FabClassDash" element={<FabClassDash />} />
          <Route path="/dashboard/programForm" element={<ProgramForm />} />
          <Route path="/dashboard/EventDashForm/:id" element={<EventDashForm />} />
          <Route path="/dashboard/FabClassForm/:courseName" element={<FabClassForm />} />
          <Route path="/dashboard/FabClass" element={<AddFabClass />} />
          
          <Route
            path="/dashboard/TestimonialForm"
            element={<TestimonialForm />}
          />
          <Route path="/dashboard/MachineForm" element={<MachineForm />} />
          <Route
            path="/dashboard/AddProgramForm"
            element={<AddProgramForm />}
          />
          <Route path="/dashboard/AddEventForm" element={<AddEventForm />} />
          <Route
            path="/dashboard/AddTestimonyForm"
            element={<AddTestimonyForm />}
          />
          <Route
            path="/dashboard/AddMachineForm"
            element={<AddMachineForm />}
          />
          <Route
            path="/dashboard/AddEventUserForm"
            element={<AddEventUserForm />}
            />
            <Route
            path="/dashboard/AddGalleryForm"
            element={<AddGalleryForm />}
          />
          <Route
            path="/dashboard/editProgram/:id"
            element={<EditProgramCardSettings />}
          />
          <Route
            path="/dashboard/programDetails/:id"
            element={<ProgramDetails />}
          />
          <Route
            path="/dashboard/applicantDetails/:id"
            element={<ApplicantDetails/>}
            />
            <Route
            path="/dashboard/editTestimony/:id"
            element={<EditTestimonyCardSettings />}
          />
          <Route
            path="/dashboard/editMachine/:id"
            element={<EditMachineCardSettings />}
          />
          <Route
            path="/dashboard/testimonyDetail/:id"
            element={<TestimonyDetail />}
          />
          <Route
            path="/dashboard/machineDetail/:id"
            element={<MachineDetail />}
          />
        <Route path="/dashboard/editProgram/:id" element={<EditProgramCardSettings/>} />
        <Route path="/dashboard/eventDetail/:id" element={<EventDetail/>} />
        <Route path="/dashboard/FabClassDetail/:id" element={<FabClassDetail/>} />
        
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
