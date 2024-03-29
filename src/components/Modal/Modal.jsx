import React from "react";
import { Link } from "react-router-dom";

const Modal = ({handletoggle}) => {
  return (
    <>
      <div className="absolute z-50 items-start pl-4 pt-4 bg-slate-50 inset-0 top-[4rem] bottom-[10rem]    flex flex-col   text-blue-400 space-y-6">
        <Link to="about" onClick={handletoggle}>
          About Us
        </Link>
        <Link to="programs" onClick={handletoggle}>
          Our programs
        </Link>
        <Link to="fabClass" onClick={handletoggle}>
          Fab class
        </Link>
        <Link to="ourServices" onClick={handletoggle}>
          Our services
        </Link>
        <Link to="machine" onClick={handletoggle}>
          Machines
        </Link>
        <Link to="portfolio" onClick={handletoggle}>
          Portfolio
        </Link>
        <Link to="events" onClick={handletoggle}>
          Events
        </Link>
        <Link to="getQuote" onClick={handletoggle}>
          Get a quote
        </Link>
      </div>
    </>
  ); 
};

export default Modal;
