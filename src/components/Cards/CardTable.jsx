import React, { useState } from "react";
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
import { useEffect } from "react";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa";

// components
import { Circles } from "react-loader-spinner";
import TableDropdown from "../../components/Dropdowns/TableDropdown.jsx";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import moment from "moment";

export default function CardTable({ color, cardHeading, addButton }) {
  const specificDate = moment();
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //paginate
  const [programsPageNumber, setProgramsPageNumber] = useState(0);
  const programsPerPage = 5;
  const programsVisited = programsPageNumber * programsPerPage;
  const programsCount = Math.ceil(programs.length) / programsPerPage;
  const programsDisplay = programs
    .slice(programsVisited, programsVisited + programsPerPage)
    .map((item) => {
      return (
        <tr className=" even:bg-slate-200">
          <td>
            <img
              src={item.posterPath}
              alt="view"
              className="w-12 h-12 ml-3 border-2 rounded-full shadow border-blueGray-50"
            />
          </td>
          <td className="p-4 px-6 text-xs whitespace-normal align-middle border-t-0 border-l-0 border-r-0">
            {item.courseTitles}
          </td>
          <td className="p-4 px-6 text-xs whitespace-normal align-middle border-t-0 border-l-0 border-r-0">
            {item.courseName}
          </td>
          <td className="p-4 px-6 text-xs whitespace-normal align-middle border-t-0 border-l-0 border-r-0">
            {item.courseTeacher}
          </td>
          <td className="p-4 px-6 text-xs whitespace-normal align-middle border-t-0 border-l-0 border-r-0">
            {item.courseDescription}
          </td>

          <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
            <TableDropdown id={item.courseName} />
          </td>
        </tr>
      );
    });

  const programsPage = ({ selected }) => {
    setProgramsPageNumber(selected);
  };

  //fetchProgram

  const fetchPrograms = () => {
    setIsLoading(true);
    axios({
      method: "GET",
      url: "https://afri-code-back-end-zeo6.onrender.com/api/course/getAllCourse",
    })
      .then((response) => {
        setPrograms(response.data.courses);
        console.log("response data", response.data.courses);
        setIsLoading(false);

        // toast.success(response.data.message);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message);
      });
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 lg:mt-[-2.05rem]    bg-white  break-words w-full mb-6 shadow-lg rounded-lg     "
        }
      >
        <div className="px-4 py-3 mb-0 border-0 rounded-t ">
          <div className="flex flex-wrap items-center ">
            <div className="relative flex justify-between w-full max-w-full px-4 ">
              <h3 className="text-lg text-black font-sora">{cardHeading}</h3>
              <Link to="/dashboard/AddProgramForm">
                <button className="px-6 py-2 font-light text-white transition-all bg-blue-400 rounded-lg hover:bg-black font-sora">
                  {addButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto ">
          {/* Projects table */}
          {isLoading ? (
            <div className="  justify-center h-[50vh] items-center flex ">
              <Circles
                height="90"
                width="80"
                color="rgb(96, 165, 250)"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass="flex flex-row  justify-center"
                visible={true}
              />
            </div>
          ) : (
            <table className="items-center w-full bg-white border-collapse font-sora ">
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
                    course Images
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    Course title
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    course name
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    course teacher
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  text-center " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    course Description
                  </th>
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  text-center " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                  >
                    action
                  </th>
                </tr>
              </thead>
              <tbody>{programsDisplay}</tbody>
            </table>
          )}
        </div>

        <ReactPaginate
          previousLabel={<FaChevronLeft className="inline" />}
          nextLabel={<FaChevronRight className="inline" />}
          pageCount={programsCount}
          onPageChange={programsPage}
          containerClassName="flex     justify-center   flex-row space-x-4 items-center md:py-[1rem]  md:mt-4  "
          pageClassName=" rounded-full  "
          pageLinkClassName=" text-slate-800  font-semibold   hover:bg-blue-500 hover:text-white    rounded-full py-1   px-2 "
          previousLinkClassName="hover:bg-blue-500 hover:text-white    rounded-full  py-1 px-2 pb-2"
          nextLinkClassName=" text-slate-800 rounded-full hover:text-white   pb-2 hover:bg-blue-500     py-1 px-2 font-semibold   "
          disabledClassName=""
          activeClassName="bg-blue-500   px-2 py-1 pb-2  "
          onPageActive="text-white bg-black"
          activeLinkClassName="text-white"
        />
      </div>
    </>
  );
}
