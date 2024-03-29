import React, {useState, useEffect} from "react";
import Ang from "../../assets/img/angular.jpg";
import axios from 'axios';
import ReactPaginate from 'react-paginate'
// components

import TestimonialTableDropdown from "../Dropdowns/TestimonialTableDropdown.jsx";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";
import FabClassDropdown from "../Dropdowns/FabClassDropdown.jsx";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function CardTableFabClass({ color, cardHeading, addButton }) {
  const [fabClass, setFabClass] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //paginate
  const [fabClassPageNumber, setFabClassPageNumber] = useState(0);
  const fabClassPerPage = 5;
  const fabClassVisited = fabClassPageNumber * fabClassPerPage;
  const fabClassCount = Math.ceil(fabClass.length) / fabClassPerPage;
  const fabClassPage = ({ selected }) => {
    setFabClassPageNumber(selected);
  };
  const fabClassDisplay = fabClass.slice(fabClassVisited, fabClassVisited + fabClassPerPage)
                                  .map((items)=>{
                                    return(
                                      <>
                                      <tr className="even:bg-slate-200">
                                        <td>
                                          <img  src={items.mainImage} alt="view" className="w-12 h-12 ml-3 border-2 rounded-full shadow border-blueGray-50" />
                                        </td>
                                        <td className="flex items-center p-8 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                          {items?.classTitle}
                                        </td>
                                        <td className="p-4 px-4 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                          <FabClassDropdown id={items._id} />
                                        </td>
                                      </tr>
                                      </>
                                    )

                                  })


  const fetchFabClass = ()=>{
    setIsLoading(true)
    let token = localStorage.getItem('token')

    axios({
      method:"GET",
      url:"https://fablab-backend-api.onrender.com/class/getAllClasses",
      headers:{
        
        Authorization:`Bearer ${token}`,
      },
    }).then((response)=>{
      setFabClass(response.data.data)
      setIsLoading(false)
      // console.log("response is here: ", response.data);
    }).catch((error)=>{
      setIsLoading(false);
      console.log(error.data);
    })
  }


  useEffect(()=>{
    fetchFabClass();
  }, [])
  
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 text-black break-words bg-white rounded-lg shadow-lg ">
        <div className="px-4 py-3 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex justify-between w-full max-w-full px-4 ">
              <h3 className="text-lg font-semibold text-black ">
                {cardHeading}
              </h3>
              <Link to="/dashboard/FabClass">
                <button className="px-6 py-2 font-semibold text-white transition-all duration-300 bg-blue-400 rounded-lg hover:bg-black font-sora">
                  {addButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent bg-white border-collapse">
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
                  student id
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                student email
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  role
                </th>
              </tr>
            </thead>
            <tbody>{fabClassDisplay}</tbody>
          </table>
          <ReactPaginate
            previousLabel={<FaChevronLeft className="inline" />}
            nextLabel={<FaChevronRight className="inline" />}
            pageCount={fabClassCount}
            onPageChange={fabClassPage}
            containerClassName="flex bg-slate-100   justify-center   flex-row space-x-4 items-center md:py-[1rem]  md:mt-4  "
            pageClassName="  "
            pageLinkClassName="text-slate-800  font-semibold   hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white  rounded-full py-1   px-2 "
            previousLinkClassName="hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500  rounded-full  py-1 px-2 pb-2 "
            nextLinkClassName="text-slate-800 rounded-full hover:text-white focus:text-white pb-2 hover:bg-blue-500  focus:bg-blue-500 focus:text-white  py-1 px-2 font-semibold  "
            disabledClassName=""
            activeClassName=""
          />
        </div>
      </div>
    </>
  );
}
