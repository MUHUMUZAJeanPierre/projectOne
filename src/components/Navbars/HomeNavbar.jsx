import React, { useState } from "react";
import logo from "../../assets/fabIcon.png";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Dropdown from '../Dropdowns/HomeDropdown'
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [openModal,setOpenModal] = useState(false);
  const handletoggle = () => {
    setOpenModal(!openModal);
  }

  const [openDropDown,setOpenDropDown] = useState(false);

  const openDrop = () => {
    setOpenDropDown(true);
  }

  
  const closeDrop = () => {
    setOpenDropDown(false);
    
  };
  return (
    <>
      <div className="absolute md:px-14 z-10    flex w-full  p-4 lg:px-20 justify-between items-center  ">
        <div className="  ">
          <Link to="/">
            <img src={logo} className="lg:h-[3.15rem] h-[2.5rem]" alt="" />
          </Link>
        </div>

        {/* navigation */}

        <div className="navbar hidden lg:flex z-20 lg:space-x-6 font-normal text-white    ">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          <Link to="programs">Programs</Link>

          <Link to="fabClass">Fab class</Link>

          <Link onMouseOver={openDrop} to="ourServices">
            Our services
          </Link>

          <Link to="events">Events</Link>

          <Link to="getQuote">Get a quote</Link>

          <Link to="/login">Login</Link>
        </div>

        <div className="lg:hidden text-4xl text-white " onClick={handletoggle}>
          {openModal ? <IoMdClose /> : <BiMenuAltRight />}
        </div>
      </div>

      {/* navigation modal */}

      {openModal && <Modal handletoggle={handletoggle} />}

      {/* dropdown modal */}

      {openDropDown && <Dropdown closeDrop={closeDrop} />}
    </>
  );
};

export default Nav;
