/*eslint-disable*/
import React from "react";
import { NavLink} from "react-router-dom";

import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/fabIcon.png"
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import NotificationDropdown from "../../components/Dropdowns/NotificationDropdown.jsx";
import UserDropdown from "../../components/Dropdowns/UserDropdown.jsx";
import logoNy from '../../assets/img/logoNy.png'

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [ openDash, setOpenDash] = useState(false);
  const token = localStorage.getItem("token");
  const userString = localStorage.getItem("user");
  // const user = JSON.parse(userString);
  const navigate = useNavigate();


  const handleLogOut = ()=>{
    localStorage.Item('token', null);
    localStorage.removeItem('admin', "");
    navigate('/');
  }

  // useEffect(()=>{
  //   if(!token){
  //     navigate('/');
  //   }
  // })
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white border-r md:left-0 md:block border-r-grey-400 shadow-3xl md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <div className="flex flex-row items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Brand */}
          <NavLink
            className="px-0 text-sm font-bold text-left uppercase p-auto -4 minline-block md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
            to="/"
          >
            <img src={logoNy} className="w-[10%] lg:w-fit items-center" alt="" />
          </NavLink>

          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i>
              {" "}
              <FaBars className="font-bold text-black" />
            </i>
          </button>
          {/* User */}
          {/* <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              <NotificationDropdown />
            </li>
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul> */}
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <NavLink
                    className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                    to="/"
                  >
                    <img src={logo} alt="" />
                  </NavLink>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <IoMdClose />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full font-sora">
              <li className="items-center">
                <NavLink
                  className="block py-3 text-xs font-bold uppercase transition-all duration-300 rounded-lg hover:bg-slate-100 hover:text-blue-500 active:bg-slate-100 "
                  to="/dashboard/stats"
                  activeClassName="bg-red-400 text-blue-500"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/stats") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Stats
                </NavLink>
              </li>

              <li className="items-center">
                <NavLink
                  className={
                    "text-xs uppercase py-3 font-bold block hover:text-blue-500  rounded-lg hover:bg-slate-100 transition-all duration-300  " +
                    (window.location.href.indexOf("/dashboard/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/dashboard/programDash"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Courses
                </NavLink>
              </li>

              {/* <li className="items-center">
                <NavLink
                  className={
                    "text-xs uppercase py-3 font-bold block hover:text-blue-500  rounded-lg hover:bg-slate-100 transition-all duration-300  " +
                    (window.location.href.indexOf("/dashboard/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/dashboard/eventsDash"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Events
                </NavLink>
              </li> */}

              {/* <li className="items-center">
                <NavLink
                  className="block py-3 text-xs font-bold uppercase transition-all duration-300 rounded-lg hover:bg-slate-100 hover:text-blue-500"
                  to="/dashboard/TestimonyDash"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Testimony
                </NavLink>
              </li> */}

              {/* <li className="items-center">
                <NavLink
                  className="block py-3 text-xs font-bold uppercase transition-all duration-300 rounded-lg hover:text-blue-500 hover:bg-slate-100 "
                  to="/dashboard/galleryDash"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Gallery
                </NavLink>

                <NavLink
                  className="block py-3 text-xs font-bold uppercase transition-all duration-300 rounded-lg hover:text-blue-500 hover:bg-slate-100 "
                  to="/dashboard/machineDash"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Machine
                </NavLink>
              </li> */}
              <li className="items-center">
                <NavLink
                  className="block py-3 text-xs font-bold uppercase transition-all duration-300 rounded-lg hover:bg-slate-100 hover:text-blue-500"
                  to="/dashboard/FabClassDash"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Students
                </NavLink>
              </li>
              <div className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase hover:text-blue-500"
                  // to="/"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  <div className="flex justify-start ">
                    <button 
                    type='button' 
                    onClick={handleLogOut} 
                    className="font-bold text-white uppercase transition-all duration-300 bg-blue-500 rounded-lg h-11 w-36 hover:bg-black">
                       Log out
                    </button>
                  </div>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
