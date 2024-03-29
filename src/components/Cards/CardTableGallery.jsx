import React from "react";
import PropTypes from "prop-types";
import Boot from "../../assets/img/bootstrap.jpg";
import Team_1 from "../../assets/img/team-1-800x800.jpg";
import Team_2 from "../../assets/img/team-2-800x800.jpg";
import Team_3 from "../../assets/img/team-3-800x800.jpg";
import Team_4 from "../../assets/img/team-4-470x470.png";
import Ang from "../../assets/img/angular.jpg";
import Sketch from "../../assets/img/sketch.jpg";
import Rea from "../../assets/img/react.jpg";
import vu from "../../assets/img/vue.jpg";
// components

import TestimonialTableDropdown from "../Dropdowns/TestimonialTableDropdown.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
//fetch pictures

  

export default function CardTableGallery({ color, cardHeading, addButton }) {
  const [pictures,setPictures] = useState([]);
  let token = localStorage.getItem("token");
  
  const fetchPictures= () => {
   axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/portfolio/getAll",
      headers: {
         Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setPictures(response.data.data);
        console.log(response);

        // toast.success(response.data.message);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message);
      });
  };    

  const deletePictures= (id) => {
    axios({
      method: "DELETE",
      url: `https://fablab-backend-api.onrender.com/portfolio/delete/${id}`,
      headers: {
         Authorization: `Bearer ${token}`,
      },

    })
    .then((response) => {
      console.log(response)
      location.reload(true);
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchPictures();
  }, []);


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-white text-black rounded-lg  ">
        <div className="rounded-t mb-0 px-4 py-3 border-0 ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex justify-between ">
              <h3 className="font-semibold font-sora text-lg text-black ">
                {cardHeading}
              </h3>
              <Link to="/dashboard/AddGalleryForm">
                <button className="px-6 py-2 bg-blue-400 font-sora hover:bg-black transition duration-300 text-white font-semibold rounded-lg">
                  {addButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" overflow-x-auto grid gap-4 lg:grid-cols-3 p-6   ">
          {
            /* card for picture */ pictures.map((item) => {
              return (
                <div className="flex flex-col lg:space-y-4 space-y-2 pb-4 bg-slate-100   shadow">
                  <img src={item.portfolioImages} className="h-[75%] object-contain p-2" alt="" />

                  <div className="flex flex-row justify-center items-center relative">
                    <button
                      onClick={() => {
                        deletePictures(item._id);
                        setTimeout(() => window.location.reload(),3000 )
                        
                      }}
                      className="px-4 py-2 bg-red-500 rounded-lg absolute top-0 text-white  font-semibold hover:bg-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
