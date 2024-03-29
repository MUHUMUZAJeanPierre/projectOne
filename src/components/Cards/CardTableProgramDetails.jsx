 import React, { useState } from "react";
 import PropTypes from "prop-types";
 import axios from "axios";
 import * as XLSX from "xlsx";
 import TestimonialTableDropdown from "../Dropdowns/TestimonialTableDropdown.jsx";
 import { Link } from "react-router-dom";
 import ProgramDetailDropdown from "../Dropdowns/ProgramDetailDropdown.jsx";
 import moment from "moment";

 // ... Other imports and styles
 export default function CardTableProgramDetails({
   color,
   cardHeading,
   addButton,
 }) {
   let token = localStorage.getItem("token");
   const [applicants, setApplicants] = useState([]);
   // Function to export data to Excel
   const onExportClick = () => {
     const worksheet = XLSX.utils.json_to_sheet(applicants);
     const workbook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(workbook, worksheet, "Applicants");
     XLSX.writeFile(workbook, "applicants.xlsx");
   };
   // Fetch applicants data
   axios({
     method: "GET",
     url: "https://fablab-backend-api.onrender.com/apply/getAll",
     headers: {
       Authorization: `Bearer ${token}`,
     },
   })
     .then((response) => {
       setApplicants(response.data.applicants_List);
     })
     .catch((error) => {
       console.log(error);
     });
   return (
     <>
       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-white text-black rounded-lg  ">
         <div className="rounded-t mb-0 px-4 py-3 border-0">
           <div className="flex flex-wrap items-center">
             <div className="relative w-full px-4 max-w-full flex justify-between ">
               <h3 className="font-semibold text-lg text-black ">
                 {cardHeading}
               </h3>
               <button
                 onClick={onExportClick}
                 className="px-6 py-2 font-sora hover:bg-black transition-all duration-300 bg-blue-500 text-white rounded-lg"
               >
                 Export
               </button>
               {/* ... Your existing JSX code */}
             </div>
           </div>
         </div>
         <div className="block w-full overflow-x-auto">
           {/* Projects table */}
           <table className="items-center w-full bg-transparent border-collapse bg-white">
             <thead>
               <tr>
                 <th
                   className={
                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                     (color === "light"
                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                   }
                 >
                   Applicants name
                 </th>
                 <th
                   className={
                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                     (color === "light"
                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                   }
                 >
                   Applicant email
                 </th>
                 <th
                   className={
                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                     (color === "light"
                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                   }
                 >
                   Date applied 
                 </th>
                 <th
                   className={
                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                     (color === "light"
                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                   }
                 >
                   Applicant phone number
                 </th>
                 <th
                   className={
                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                     (color === "light"
                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                   }
                 >
                   Gender
                 </th>
                 <th
                   className={
                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  text-center " +
                     (color === "light"
                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                   }
                 >
                   Actions
                 </th>
               </tr>
             </thead>
             <tbody>
               {applicants.map((item) => {
                 return (
                   <tr className="even:bg-slate-200">
                     <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                       {item.fullNames}
                     </th>
                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                       {item.email}
                     </td>
                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                       {moment(item.createdAt).format("MMMM Do YYYY")}
                     </td>
                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                       <div className="flex">{item.phoneNumber}</div>
                     </td>
                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                       <div className="flex items-center  ">{item.gender}</div>
                     </td>
                     <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                       <ProgramDetailDropdown id={item._id} />
                     </td>
                   </tr>
                 );
               })}
             </tbody>
           </table>
         </div>
       </div>
     </>
   );
 }