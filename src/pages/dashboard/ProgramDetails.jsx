import React from 'react'
import collabo from '../../assets/collaborate.jpg'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from 'axios'
import CardTableProgramDetails from '../../components/Cards/CardTableProgramDetails';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const   ProgramDetails = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [details, setDetails] = useState("");
  const [programName, setProgramName] = useState("");
  const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLoad, setIsLoad] = useState(false);

  const params = useParams();
  const programId = params.id;
  // console.log(programId);

  // fetch programs
  //fetch users axios
let token = localStorage.getItem("token");
  const openPrograms = () => {
    setIsLoading(true);
     

    axios({
      method: "PATCH",
      url: `https://fablab-backend-api.onrender.com/program/openProgram/${programId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response);
      setIsLoading(false);
      toast.success("Program Status:OPEN");
    });
  };

  const closePrograms = () => {
     
     setIsLoad(true);

    axios({
      method: "PATCH",
      url: `https://fablab-backend-api.onrender.com/program/closeProgram/${programId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response);
      setIsLoad(false);
      toast.success("Program Status:CLOSED");
      setTimeout(() => {
        location.reload();
      },3000)
    });
  };
  const fetchPrograms = () => {
    axios({
      method: "GET",
      url: `https://fablab-backend-api.onrender.com/program/getProgramById/${programId}`,
      headers: {
         Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data.data);
      setFrom(response?.data?.data?.startDate);

      setTo(response?.data?.data?.endDate);
      setDetails(response?.data?.data?.description);

      setProgramName(response?.data?.data?.programName);
      setStatus(response?.data?.data?.status);
    });
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <div className="p-4   ">
      <ToastContainer/>
      <div className="mt-[6rem] p-4 flex flex-col  space-y-12">
        <h2 className="text-blue font-bold text-center  ">Program details</h2>
        <div className="  flex lg:flex-row flex-col justify-evenly pb-[2rem] ">
          <div className="lg:w-1/3  ">
            <img src={collabo} className="rounded-lg" alt="" />

            <div className="flex flex-row justify-around space-x-14 lg:pt-[2rem] py-[2rem]">
              <button
                className="px-2 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded "
                onClick={() => {
                  openPrograms();
                }}
              >
                {isLoading ? "Opening program..." : "Open program"}
              </button>
              <button
                className="px-2 py-4 bg-red-500 text-white rounded font-semibold hover:bg-red-400"
                onClick={() => {
                  closePrograms();
                }}
              >
                {isLoad ? "Closing program..." : "Close program"}
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <div>
              <h2 className="font-light">Program name</h2>
              <p className="font-semibold">{programName}</p>
            </div>
            <div>
              <h2 className="font-light">Program details</h2>
              <p className="max-w-sm font-semibold">{details}</p>
            </div>
            <div>
              <h2 className="font-light">From</h2>
              <p className="font-semibold">{from}</p>
            </div>
            <div>
              <h2 className="font-light">to</h2>
              <p className="font-semibold">{to}</p>
            </div>
            <div>
              <h2 className="font-light">Status:</h2>
              <p className="font-semibold">{status}</p>
            </div>
          </div>
        </div>
      </div>

      <CardTableProgramDetails
        cardHeading="Applicants"
        addButton="Export"
      />
    </div>
  );
}

export default ProgramDetails