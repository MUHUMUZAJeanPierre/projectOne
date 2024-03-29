import React,{useState} from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

// components

export default function EventUserCardSettings() {
  const [classTitle, setClassTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState();
  const navigate = useNavigate();
  let data = new FormData();
        data.append("classTitle", classTitle);
        data.append("description", description);
        data.append("mainImage", mainImage);
      

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://fablab-backend-api.onrender.com/class/createClass",
      data: data,
      headers:{
        "Content-Type":"multipart/data",
      },
    })
     .then((response)=>{
      console.log(response.data);
      toast.success('succesefull ');
      setTimeout(()=>{
        navigate("/dashboard/EventUserDash")
      })
     })
     .catch((error)=>{
      console.log(error);
      toast.error(error.message)
     });

  };

  return (
    <>
    <ToastContainer/>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 ">
          <div className="text-center flex justify-between ">
            <h6 className="text-blueGray-700 text-xl font-bold">
              FabClass User form
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white z-10">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            FabClass User form
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    FABCLASS NAME
                  </label>
                  <input
                    onChange={(e)=>{setClassTitle(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="lucky.jesse"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    fabClass description
                  </label>
                  <input
                    onChange={(e)=>{setDescription(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="description"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full flex flex-row  lg:w-12/12 px-4">
                
                <div className="flex flex-col w-1/2 px-3 space-y-4 ">
                  <label htmlFor="" className="font-bold text-xs uppercase">
                     Image
                  </label>
                  <input
                    onChange={(e)=>{setMainImage(e.target.files[0])}}
                    type="file"
                    className="py-3 shadow w-full border-0 px-3 bg-white rounded focus:outline-none focus:ring ease-in-out transition-all"
                  />
                </div>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center py-11">
              <button onClick={handleSubmit} className=" h-11 w-36 bg-blue-600 text-white rounded-lg">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
