/* eslint-disable react/prop-types */

import React from "react";
import { createPopper } from "@popperjs/core";
import { HiDotsVertical } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';

const NotificationDropdown = ({id}) => {

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  // deleting event

  const handleDelete = async ()=>{
    let token = localStorage.getItem('token');
    if(window.confirm("are you sure you want to delete this Event")){
      axios({
        url:`https://fablab-backend-api.onrender.com/event/deleteEventById/${id}`,
        method:"DELETE",
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
       .then((response)=>{
        console.log(response)
        toast.success(response.data.message)
       })
        .catch((error)=>{
          toast.error(error.message);
          console.log(error)
        });
    }
  }

  // editing event


  return (
    <>
    <ToastContainer/>
      <div
        className=" items-center  py-3 px-1 flex space-x-4"
        href="#pablo"
        ref={btnDropdownRef}
      >
        
        <Link to={`/dashboard/EventDashForm/${id}`} >
          <button>
            <FaPen />
          </button>
        </Link>
        <button>
          <FaTrash onClick={()=> handleDelete()} />
        </button>
        <Link to={`/dashboard/eventDetail/${id}`}>
          <button >
            <FaEye />
          </button>
        </Link>
      </div>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-yellow-400 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
