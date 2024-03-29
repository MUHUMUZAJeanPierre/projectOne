import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { CgPerformance } from "react-icons/cg";
import { useEffect } from "react";
import axios from "axios";




// components

import CardStats from "../../components/Cards/CardStats.jsx";

export default function HeaderStats() {
  let token = localStorage.getItem("token");
  const [events ,setEvents] = useState([])
  const [machine, setMachine] = useState([])
  const fetchMachine = () => {
    axios
      .get("https://fablab-backend-api.onrender.com/machine/getAllMachines")
      .then((response) => {
        setMachine(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  // fetching Events
  const fetchEvent = () => {
     
    axios({
      url: "https://fablab-backend-api.onrender.com/event/getAllEvents",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
         
        console.log("events data", response.data.data);
        setEvents(response.data.data);
        //console.log(events, "Events");
      })
      .catch((error) => {
        console.log(error.data);
        //setIsLoading(false);
      });
  };

  //applicants
  const [applicants, setApplicants] = useState([]); 
  const fetchApplicants = () => {
    axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/apply/getAll",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        //setTours(response.data);
        //console.log(response.data.applicants_List);
        setApplicants(response.data.applicants_List);
        //toast.success(response.data.message);
        //setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        //toast.error(error.message);
      });

  }
  
  const [program, setPrograms] = useState([]);

  //fetch program
  const fetchPrograms = () => {
    //setIsLoading(true);
    axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/program/getAllPrograms",
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
    fetchPrograms(),
    fetchEvent();
    fetchMachine();
    fetchApplicants();
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative w-full bg-blue-500 md:pt-32 pb-14 pt-12 mb-14">
        <div className="px-4 md:px-10  w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PROGRAM"
                  statTitle={program.length}
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-emerald-500"
                  statDescripiron={`${program.length} programs available`}
                  statIconName={<MdOutlineRemoveRedEye />}
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="APPLICANTS"
                  statTitle={applicants.length}
                  statArrow="down"
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron={`${applicants.length} applied`}
                  statIconName={<LuUsers />}
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EVENTS"
                  statTitle={events.length}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName={<FiShoppingCart />}
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-2">
                <CardStats
                  statSubtitle="Machines"
                  statTitle={machine.length}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName={<CgPerformance />}
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
