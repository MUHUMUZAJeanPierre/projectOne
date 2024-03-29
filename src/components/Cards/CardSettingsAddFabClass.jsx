import React, { useState } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom';

// components

export default function CardSettingsAddFabClass() {
  const [classTitle, setClassTitle] = useState("");
  const [description,setDescription] = useState("");
  const [mainImage,setMainImage] = useState("");
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("classTitle", classTitle);
  formData.append("mainImage", mainImage);
  formData.append("description", description);

  // handleForm

  const handleForm = (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');

    axios({
      method: "POST",
      url: "https://fablab-backend-api.onrender.com/class/createClass",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/dashboard/FabClassDash");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  
  const handleTouchImage = ()=>{
    set
  }
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
        <ToastContainer />
        <div className="px-6 py-6 mb-0 bg-white rounded-t ">
          <div className="flex justify-between text-center ">
            <h6 className="text-xl font-bold text-blueGray-700 font-sora ">
              Fab Class form
            </h6>
          </div>
        </div>
        <div className="z-10 flex-auto px-4 py-10 pt-0 bg-white lg:px-10 font-sora">
          <form>
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Fab Class Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3 ">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Fab Class name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="lucky.jesse"
                    onChange={(e) => {
                      setClassTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Program description
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="jesse@example.com"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Lucky"
                    onChange={(e) => {
                      setMainImage(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 font-semibold">
                <button
                className="items-center px-6 py-2 text-white transition-all duration-300 rounded-lg hover:bg-black bg-secondary md:items-start bg-cyan-600 text-md"
                onClick={handleForm}
              >
                <p >Add fab class</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
