import React from "react";
import { createPopper } from "@popperjs/core";
import { HiDotsVertical } from "react-icons/hi";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import { useNavigate } from "react-router-dom";

const NotificationDropdown = ({id}) => {
  console.log("item", id);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios({
        url: `https://afri-code-back-end-zeo6.onrender.com/api/course/deleteCourse/?id=${id}`,
        method: "DELETE",
      })
        .then((response) => {
          toast.success("Delete successful");
          console.log(response.data)
          setTimeout(() => {
            location.reload();
          }, 1000);
          console.log(response, "response");
          
        })

        .catch((error) => {
          console.log(error, "Error");
          toast.error(error.message);
        });
    }
  };

   
  return (
    <>
    <ToastContainer/>
      <div
        className="flex items-center px-1 py-3 space-x-4 "
        href="#pablo"
         
      >
        <Link to={`/dashboard/editProgram/${id}`}>
          <button>
            <FaPen />
          </button>
        </Link>
        <button onClick={()=> {handleDelete(id)}}>
          <FaTrash />
        </button>
          <Link to ={`/dashboard/programDetails/${id}`}>
        <button>
          <FaEye />
        </button>
          </Link>
      </div>
      <div
         
      >
        
      </div>
    </>
  );
};

export default NotificationDropdown;
