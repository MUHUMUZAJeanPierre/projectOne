import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useNavigate} from 'react-router-dom';

// components

export default function CardSettingsFabClass() {
  const [classTitle,setClassTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState('');
  const params = useParams();
  const classId = params.id;
  console.log(classId)
  const navigate = useNavigate();

  //fetching fabClass

  const fetchClass = ()=>{
    let token = localStorage.getItem('token');
    axios({
      method: "GET",
      url: `https://fablab-backend-api.onrender.com/class/getClassById/${classId}`,
      headers:{
        Authorization:`Bearer ${token}`,
      },
    })
      .then((response)=>{
      // console.log("response: ", response);
      console.log(response?.data?.data, "response")
      setClassTitle(response.data?.data?.classTitle);
      setDescription(response?.data?.description);
      setMainImage(response?.data?.mainImage);

    })
      .catch((error)=>{
      console.log(error)
    })

  };
  useEffect(()=>{
    fetchClass()
  }, [])

  // update event 

  const handleUpdate = async(e)=>{
    e.preventDefault();
    let token = localStorage.getItem("token");
    let data = new FormData();
        data.append("classTitle", classTitle);
        data.append("description", description);
        data.append("mainImage", mainImage);
    axios({
      method:"PATCH",
      url:`https://fablab-backend-api.onrender.com/class/updateClassById/${classId}`,
      data: data,
      headers:{
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      },

    })
      .then((response)=>{
        console.log(response);
        toast.success(response.data.message);
        setTimeout(()=>{
          navigate('/dashboard/FabClassDash')
        }, 3000);
      })
      .catch((error)=>{3
        console.log(error)
        toast.error(error.message)
      })
  }

  

  
  return (
    <>
    <ToastContainer/>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
        <ToastContainer />
        <div className="px-6 py-6 mb-0 bg-white rounded-t ">
          <div className="flex justify-between text-center ">
            <h6 className="text-xl font-bold text-blueGray-700 ">
              Fab Class
            </h6>
          </div>
        </div>
        <div className="z-10 flex-auto px-4 py-10 pt-0 bg-white lg:px-10 font-sora">
          <form>
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              FabClass Information
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
                    value={classTitle}
                    onChange={(e)=>{setClassTitle(e.target.value)}}
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="lucky.jesse"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Fab Class description
                  </label>
                  <input
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="jesse@example.com"
                  />
                </div>
              </div>

            </div>
              <div className="flex flex-row w-full px-4 lg:w-12/12">
                
                <div className="flex flex-col w-1/2 px-3 space-y-4 ">
                  <label htmlFor="" className="text-xs font-bold uppercase">
                    Image
                  </label>
                  <input
                  // value={mainImage}
                  onChange={(e)=>{setMainImage(e.target.files[0])}}
                  type="file"
                    className="w-full px-3 py-3 transition-all ease-in-out bg-white border-0 rounded shadow focus:outline-none focus:ring"
                  />
                </div>
              </div>
            <div className="flex justify-center mt-4 font-semibold">
              <button
                onClick={handleUpdate}
                className="items-center px-6 py-2 text-white transition-all duration-300 rounded-lg bg-secondary md:items-start hover:bg-black bg-cyan-600 text-md"
              >
                <p>Add class</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
