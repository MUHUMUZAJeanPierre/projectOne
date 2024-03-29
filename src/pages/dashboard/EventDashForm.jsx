import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';

// components
export default function EventDashForm() {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [eventDescription,setEventDescription] = useState('');
    const [mainImage,setMainImage] = useState();
    const navigate = useNavigate();
    const params = useParams();
    const eventId = params.id;
    console.log("eventId: ", eventId);
    
    
    //fetching events
    const  fetchEvents = ()=>{
    // console.log('eventId Get more ', eventId)
    const token = localStorage.getItem('token');
    axios({
        url:`https://fablab-backend-api.onrender.com/event/getEventById/${eventId}`,
        method:"GET",
        headers:{
            Authorization: `Bearer ${token}`,

        }
    })
      .then((response)=>{
        console.log("response: ", response);
        setEventName(response?.data?.data?.eventName);
        setEventDate(response?.data?.eventDate);
        setFrom(response?.data?.data?.from);
        setTo(response?.data?.data?.to);
        setEventDescription(response?.data?.data?.eventDescription);
        setMainImage(response?.data?.data?.mainImage);
    })
    .catch((error)=>{
      console.log(error);
  })
};

useEffect(()=>{
  fetchEvents();
}, [])


// update event
const handleSubmit = async(e)=>{
  e.preventDefault();
  let token = localStorage.getItem('token');

  let data = new FormData();
      data.append("eventName", eventName);
      data.append("eventDate", eventDate);
      data.append("from", from);
      data.append("eventDescription", eventDescription);
      data.append("to", to);
      data.append("mainImage", mainImage);
    

    axios({
      url:`https://fablab-backend-api.onrender.com/event/updateEventById/${eventId}`,
      method:"PATCH",
      data:data,
      headers:{
        Authorization: `Bearere ${token}`,
        "Content-Type":"multipart/form-data",
        
      },
    })
      .then((response)=>{
        console.log(response)
        toast.success("Edit-updated successfully")
        setTimeout(()=>{
          navigate("/dashboard/eventsDash")
        },3000);
      })
        .catch((error)=>{
          console.log(error);
          toast.error(error.message);
        })
}

    return (
    <>
    <ToastContainer/>
    <div className="flex flex-wrap">
      <div className="w-full mt-[10rem] px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6 ">
          <div className="text-center flex justify-between ">
            <h6 className="text-blueGray-700 text-xl font-bold">Event form</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white z-10">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Event Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Event name
                  </label>
                  <input
                    value={eventName}
                    onChange={(e)=>{setEventName(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="lucky.jesse"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Event duration
                  </label>
                  <input
                    value={eventDate}
                    onChange={(e)=>{setEventDate(e.target.value)}}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="jesse@example.com"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    From:
                  </label>
                  <input
                    value={from}
                    onChange={(e)=>{setFrom(e.target.value)}}
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Lucky"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    to:
                  </label>
                  <input
                    value={to}
                    onChange={(e)=>{setTo(e.target.value)}}
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Jesse"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full flex flex-row lg:w-12/12 px-4">
                <div className="relative w-1/2 mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Event description
                  </label>
                  <textarea
                    value={eventDescription}
                    onChange={(e)=>{setEventDescription(e.target.value)}}
                    type="text"
                    className="border-0 px-3 w-full py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150"
                    // defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                    rows="2"
                  ></textarea>
                </div>
                <div className="flex flex-col w-1/2 px-3 space-y-4 ">
                  <label htmlFor="" className="font-bold text-xs uppercase">
                    Event Image
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
            <div className="flex flex-col px-4">
              <label className="uppercase text-xs font-bold">
                Event status
              </label>
              <select 
              className="shadow focus:outline-none px-3 py-3">
                <option value="">Select</option>
                <option value="">Open</option>
                <option value="">Close</option>
                <option value="">Draft</option>
              </select>
            </div>
            <div className="flex justify-center py-11">
              <button type='submit' onClick={handleSubmit} className=" h-11 w-36 bg-blue-600 text-white rounded-lg">Edit Event</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}









