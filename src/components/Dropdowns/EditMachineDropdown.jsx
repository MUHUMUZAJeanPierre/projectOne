import React from "react";
import { createPopper } from "@popperjs/core";
import { HiDotsVertical } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const EditMachineDropdown = ({ id }) => {
  console.log("item", id);
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
  const handleDelete = async () => {
    let token = localStorage.getItem("token");
    if (window.confirm("do you want to delete ?")) {
      axios({
        url: `https://fablab-backend-api.onrender.com/machine/deleteMachineById/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          console.log(response);
          toast.success("successfully deleted");
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });
    }
  };

  return (
    <>
      <ToastContainer />

      <div
        className=" items-center  py-3 px-1 flex space-x-2"
        href="#pablo"
        ref={btnDropdownRef}
      >
        <Link to={`/dashboard/editMachine/${id}`}>
          <button className=" px-[1.1rem] py-2 bg-blue-400 duration-300 hover:bg-black transition-all  rounded-lg font-semibold font-sora top-0 text-white text-xl   ">
            Edit
          </button>
        </Link>
        <button
          className="px-2 py-2 bg-red-500 rounded-lg font-semibold font-sora top-0 text-white text-xl  transition-all hover:bg-red-400"
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
        {/* <Link to={`/dashboard/machineDetail/${id}`}>
          <button className="  boarder-2 bg-yellow-500 w-[3.6rem] rounded-lg">
             <FaEye />  View
          </button>
        </Link> */}
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

export default EditMachineDropdown;
