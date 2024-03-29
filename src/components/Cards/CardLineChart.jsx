import React, { useEffect } from "react";

import { useState } from "react";
import axios from "axios";
 
import { Doughnut } from "react-chartjs-2"; 

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);



export default function CardLineChart() {
  //fetchApplicants
  const [applicants, setApplicants] = useState([]);
  let token = localStorage.getItem("token");
  const fetchApplicants = () => {
    axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/program/getCountPerMonthForPrograms",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        //setTours(response.data);
        // console.log(response.data.data,"response");
        setApplicants(response.data.data);
        //toast.success(response.data.message);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });
  };

  const [programs,setPrograms] = useState([]);
  //fetch program
  const fetchPrograms = () => {
    //setIsLoading(true);
    axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/program/getCountPerMonthForPrograms",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setPrograms(response.data.data);
        console.log(response.data.data);
        //setIsLoading(false);

        // toast.success(response.data.message);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message);
      });
  };

  useEffect(() => {
    
      fetchApplicants();
      fetchPrograms();
    
  });

  const data = {
    labels: programs.map((x) => x.month),
    datasets: [
      {
        label: "Programs",
        data: programs.map((x) => x.count),

        backgroundColor: [
          "rgba(77,166,255,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255,1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 2,
      },
    ],
  };


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full h-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-1   ">
          <div className="flex flex-wrap items-center ">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xl font-bold pt-2 font-sora">
                Programs in a Year
              </h6>
              <h2 className="text-white text-xl font-semibold">
                Applicants-Programme
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-auto   ">
          {/* Chart */}
          <div className="relative w-[35vw] h-[50vh] px-12  ">
            <Doughnut data={data} className="" />;
          </div>
        </div>
      </div>
    </>
  );
}
