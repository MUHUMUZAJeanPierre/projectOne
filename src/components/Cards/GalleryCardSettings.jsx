import React, { useState } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate  } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

// components

export default function GalleryCardSettings() {
  const navigate = useNavigate()
  const [image,setImage] = useState("")
  const formData = new FormData();
  formData.append("portfolioImages", image);

  let token = localStorage.getItem("token");


   // handle pictures 

  const handleImage = (e) => {
    e.preventDefault();
    console.log(e.target.files, "file");
    setImage(e.target.files[0]);
  }

  const handleForm = (e) => {
    //console.log("Hii");
    e.preventDefault();
    
    axios({
      method: "POST",

      url: "https://fablab-backend-api.onrender.com/portfolio/create",
      data: formData,
      headers: {
        "content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log(response);

        toast.success(response.data.message);
         setTimeout(() => {
           navigate("/dashboard/galleryDash");
         }, 3000);
         
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <>
    <ToastContainer/>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 font-sora ">
          <div className="text-center flex justify-between ">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Gallery form
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white z-10">
          <form className="font-sora">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Gallery Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-full px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Add picture
                  </label>
                  <input
                    type="file"
                    className="border mb-4 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Add picture"
                    onChange={handleImage}
                    
                  />

                  <div>
                    <button className="bg-blue-400 px-6 py-2 text-white" onClick={handleForm}>Add Picture</button>
                  </div>
                </div>
              </div>
                
            </div>

             
          </form>
        </div>
      </div>
    </>
  );
}
