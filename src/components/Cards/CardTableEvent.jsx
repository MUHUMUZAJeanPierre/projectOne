/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
import axios from 'axios';
import EventTableDropdown from "../../components/Dropdowns/EventTableDropdown.jsx";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate'


import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";



export default function CardTableEvent({ color, cardHeading, addButton }) {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  //paginate
  const [eventsPageNumber, setEventsPageNumber] = useState(0);
  const eventsPerPage = 5;
  const eventsVisited = eventsPageNumber * eventsPerPage;
  const eventsCount = Math.ceil(events.length) / eventsPerPage;
  const eventsPage = ({ selected }) => {
    setEventsPageNumber(selected);
  };

  const eventsDisplay = events.slice(eventsVisited, eventsVisited + eventsPerPage ).map(
    (items) =>{
                                return (
                                  <>
                                    <tr className="even:bg-slate-200">
                                      <td>
                                        <img
                                          src={items.mainImage}
                                          alt="view"
                                          className="w-12 h-12 ml-3 border-2 rounded-full shadow border-blueGray-50"
                                        />
                                      </td>
                                      <td className="flex items-center p-8 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        {items?.eventName}
                                      </td>
                                      {/* <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        {items?.eventDescription}
                                      </td> */}
                                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        {items?.eventDate}
                                      </td>

                                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        {items?.from}
                                      </td>

                                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        {items?.to}
                                      </td>

                                      <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        {items?.eventStatus}
                                      </td>
                                      <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                                        <EventTableDropdown id={items._id} />
                                      </td>
                                    </tr>
                                  </>
                                );
                         })


  // fetching Events
  const fetchEvent = () =>{
    setIsLoading(true);
    let token = localStorage.getItem("token");
    console.log(token)
    axios({
      url:"https://fablab-backend-api.onrender.com/event/getAllEvents",
      method:"GET",
      headers:{
        Authorization: `Bearer ${token}`
      },
    })
    .then((response)=>{
      setIsLoading(false)
      console.log("events data",response.data.data)
      setEvents(response.data.data)
      console.log( events, "Events")
    })
    .catch((error)=>{
      console.log(error.data)
      setIsLoading(false)
    })
  };

  useEffect(()=>{
    fetchEvent();
  }, [])

  console.log(events);
  return (
    <>
      {/* <ToastContainer/> */}
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg ">
        <div className="px-4 py-3 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex justify-between w-full max-w-full px-4 ">
              <h3 className="text-lg font-semibold text-black font-sora ">
                {cardHeading}
              </h3>
              <Link to="/dashboard/AddEventForm">
                <button className="px-6 py-2 text-white transition-all bg-blue-400 rounded-lg hover:bg-black font-sora">
                  {addButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent bg-white border-collapse font-sora">
            <thead>
              <tr className="">
                <th
                  className={
                    "px-6 align-middle border border-solid py-6 w-4 h-4 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Images
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Event name
                </th>
                {/* <th
                   className={
                     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                     (color === "light"
                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                   }
                >
                  Event description
                </th> */}
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Event duration
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  from
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  to
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>{eventsDisplay}</tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel={<FaChevronLeft className="inline" />}
          nextLabel={<FaChevronRight className="inline" />}
          pageCount={eventsCount}
          onPageChange={eventsPage}
          containerClassName="flex bg-slate-100   justify-center   flex-row space-x-4 items-center md:py-[1rem]  md:mt-4  "
          pageClassName="rounded-full text-white"
          pageLinkClassName=" text-slate-800  font-semibold rounded-full py-1   px-2 "
          previousLinkClassName="rounded-full  text-slate-800 rounded-full  pb-2 hover:bg-blue-500  hover:text-white py-1 px-2 font-semibold "
          nextLinkClassName=" text-slate-800 rounded-full  pb-2 hover:bg-blue-500  hover:text-white py-1 px-2 font-semibold  "
          disabledClassName=""
          activeClassName="bg-blue-500   px-2 py-1 pb-2 text-white"
          activeLinkClassName="text-white"
        />
      </div>
    </>
  );
}
