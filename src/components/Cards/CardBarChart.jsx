import React, { useEffect } from "react";
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
import { Bar, Doughnut } from "react-chartjs-2";
import { useState } from "react";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);



export default function CardBarChart() {
  const [applicants,setApplicants] = useState([]);
  const [program,setProgram] = useState([]);

  
  let token = localStorage.getItem("token");
  const fetchApplicants = () => {
    axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/apply/countPerMonth",
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

  useEffect(()=>{
    fetchApplicants();
    console.log(applicants)
  })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "number of bookings ",
        data: applicants.map((x) => x.count),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const data1 = {
    labels: applicants.map((x) => x.label),
    datasets: [
      {
        label: "# of Votes",
        data: applicants.map((x) => x.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };



   return (
     <>
       <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 shadow-lg rounded">
         <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
           <div className="flex flex-wrap items-center">
             <div className="relative w-full max-w-full flex-grow flex-1">
               <h6 className="uppercase text-blueGray-400 mb-1 text-xl font-bold font-sora">
                 Applicants in a month
               </h6>
               
             </div>
           </div>
         </div>
         <div className="p-4">
           {/* Chart */}
           <Bar options={options} data={data} className="" />;
         </div>
       </div>
     </>
   );
}
