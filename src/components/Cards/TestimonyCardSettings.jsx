import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TestimonyCardSettings() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mainImage, setMainImage] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("mainImage", mainImage);

    axios({
      method: "POST",
      url: "https://fablab-backend-api.onrender.com/testmony/createTestimonial",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <>
        <ToastContainer />
      <div className="relative flex flex-col bg-white items-start min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 ">
          <div className="text-center flex justify-between ">
            <h6 className="text-blueGray-700 text-xl font-bold font-sora">Testimonial</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0  z-10">
          <form className="font-sora"> 
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold font-sora uppercase">
              Testimonies Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full  px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-sora font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Testimonial User
                  </label>
                  <input
                    type="text"
                    className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="lucky.jesse"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full  px-4">
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Testimonial description
                  </label>
                  <textarea
                    type="text"
                    className="border px-3 w-full py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                    placeholder="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                    rows="2"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full flex flex-row  lg:w-12/12 ">
                <div className="flex flex-col  px-3 space-y-4 mb-4 ">
                  <label htmlFor="" className="font-bold text-xs uppercase">
                    Testimonial Image
                  </label>
                  <input
                    type="file"
                    className="py-3 shadow w-full border px-3 bg-white rounded focus:outline-none focus:ring ease-in-out transition-all"
                    onChange={(e) => {
                      setMainImage(e.target.files[0]);
                    }}
                  />
                </div>
                 
              </div>
            </div>

            <div>
              
                <button
                  type="button"
                  className="px-6 py-2 bg-blue-400 hover:bg-black transition-all duration-300 text-white rounded-lg"
                  onClick={(e) => handleForm(e)}
                >
                  Submit
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
