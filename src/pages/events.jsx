import React from 'react'
import event from "../assets/img/imgEvent1.jpeg";
import { Link } from "react-router-dom";

export default function events() {
  return (
    <div className="relative">
      <div className="bg-Events -z-10 bg-cover bg-center relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-52  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h2 className="uppercase fo nt-semibold text-white mt-[-7rem] text-xl z-50">
                Know Fablab Events
              </h2>
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                Our Events
              </h1>
            </span>
            
          </div>
        </div>
      </div>
      <div className=" lg:w-1/3 lg:h-full mt-6  lg:p-[0rem] lg:ml-10 mb-6 shadow-lg px-4">
        <img src={event} />

        <div className="border-l-4 border-blue-900 p-6  ">
          <p className="text-slate-700 font-bold">
            First series: Industry 4.0 The Future <br /> of Made in Rwanda"
          </p>
          <p className="p-2">
            <b>Topic:</b> Exploring the Impact of Digitalization and Automation
            in the fabrication and manufacturing industry
          </p>
          <p className="p-2">
            <b>Application Date:</b> 28 Aug, 2023
          </p>
          <p className="p-2">
            <b>Deadline:</b> 15 Jan, 2024
          </p>
        </div>
        <a href="/eventApplicationForm">
          <button className="text-xl rounded-lg mb-4  lg:ml-14   ml-14 -mt-2 bg-blue-900 text-white p-3">
            Application Open
          </button>
        </a>
      </div>
    </div>
  );
}
