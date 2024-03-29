import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function TestimonyCardSettings() {
  const [machine_name, setMachine_name] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("machine_name", machine_name);
    formData.append("mainImage", mainImage);
    let token = localStorage.getItem("token")
    setIsLoading(true)
    axios({
      method: "POST",
      url: "https://fablab-backend-api.onrender.com/machine/createMachine",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/dashboard/MachineDash")
        },1500)
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="relative flex bg-white flex-col items-start min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <ToastContainer />
        <div className="rounded-t  mb-0 px-6 py-6 ">
          <div className="text-center flex justify-between ">
            <h6 className="text-blueGray-700 text-xl font-bold">Machine</h6>
          </div>
        </div>
        <div className="flex-auto font-sora px-4 lg:px-10 py-10 pt-0  z-10">
          <form className="font-sora">
            <h6 className="text-blueGray-400 font-sora text-sm mt-3 mb-6 font-bold uppercase">
              Machine Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full  px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Machine Name
                  </label>
                  <input
                    type="text"
                    className="border mb-4 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="3D Printer"
                    onChange={(e) => {
                      setMachine_name(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full flex flex-row  lg:w-12/12 ">
                <div className="flex flex-col  px-3 space-y-4 ">
                  <label htmlFor="" className="font-bold text-xs uppercase">
                    Machine Image
                  </label>
                  <input
                    type="file"
                    className="py-3 shadow w-full border-0 px-3 bg-white rounded focus:outline-none focus:ring ease-in-out transition-all"
                    onChange={(e) => {
                      setMainImage(e.target.files[0]);
                    }}
                  />
                </div>
                
              </div>
            </div>

            <div className="px-3">
              <button
                type="button"
                className="px-4 py-2 mt-4 bg-blue-400 hover:bg-black transition-all duration-300 text-white rounded-lg"
                onClick={(e) => handleForm(e)}
              >
                {isLoading ? "Adding new machine..." : "Add machine"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
