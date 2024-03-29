import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTestimonyCardSettings() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mainImage, setMainImage] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const testimonialId = params.id;
  console.log("testimonialId: ", testimonialId);

  const fetchTestimonials = () => {
    const token = localStorage.getItem("token");
    axios({
      url: `https://fablab-backend-api.onrender.com/testmony/getTestimonialById/${testimonialId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("response: ", response);
        setName(response?.data?.data?.name);
        setMessage(response?.data?.data?.message);
        setMainImage(response?.data?.data?.mainImage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem('token');

    let data = new FormData();
    data.append("name", name);
    data.append("message", message);
    data.append("mainImage", mainImage);

    axios({
      url: `https://fablab-backend-api.onrender.com/testmony/updateTestimonialById/${testimonialId}`,
      method: "PATCH",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Edit-updated successfully");
        setTimeout(() => {
          navigate("/dashboard/testimonyDash");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="pt-[10rem]">
        <div className="relative flex flex-col bg-white font-sora items-start min-w-0 break-words mt-8 w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <ToastContainer />
          <div className="rounded-t bg-white mb-0 px-6 py-6 ">
            <div className="text-center flex justify-between ">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Testimonial
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0  z-10">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold  uppercase">
                Testimonies Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Testimonial User
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="lucky.jesse"
                      value={name}
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
                      className="border-0 px-3 w-full py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                      placeholder="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                      rows="2"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full flex flex-row  lg:w-12/12 ">
                  <div className="flex flex-col  px-3 space-y-4 ">
                    <label htmlFor="" className="font-bold text-xs uppercase">
                      Testimonial image
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setMainImage(e.target.files[0])}
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className=" h-11 w-36 bg-blue-600 hover:bg-black transition-all duration-300   text-white rounded-lg"
                >
                  Edit testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
