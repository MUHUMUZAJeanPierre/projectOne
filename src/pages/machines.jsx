import React, { useState, useEffect } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";


export default function Machines() {
  const [machines, setMachines] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    fetchMachines();
  }, []);

  const fetchMachines = () => {
    setIsLoading(true);
    axios
      .get("https://fablab-backend-api.onrender.com/machine/getAllMachines")
      .then((response) => {
        setMachines(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // You can handle the error here, for example, by displaying a toast notification
        // toast.error(error.message);
      });
  };

  return (
    <div className="relative">
      <div className="bg-Machines -z-10 bg-cover bg-center relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-52  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold mt-[-7rem]  w-100 h-16 text-6xl  ">
                Fablab showroom
              </h1>
            </span>
            <span>
              <p className=" text-white text-[1.5rem] font-semibold mt-4">
                We make almost anything
              </p>
            </span>
          </div>
        </div>
      </div>
      <h1 className="mt-20 text-center text-5xl text-blue-900 font-bold">
        Our Machines
      </h1>

      {isLoading && (
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
      )}

      {/* Render machines */}
      <div className="grid lg:grid-cols-4 gap-2        ">
        {machines.map((machine, index) => (
          <div key={index} className="">
            <img
              alt="..."
              src={machine.mainImage}
              className="w-48 h-36 lg:w-[16rem] lg:p-4 lg:h-[18rem] lg:ml-[2rem]"
            />
            <div className="lg:w-[17rem] -ml-4">
              <br />
              <p className="text-xl lg:w-[14rem] lg:ml-[4rem] ml-4 -mt-12 p-8 text-blue-900 font-bold border-2 bg-slate-100  lg:h-12">
                {machine.machine_name}
              </p>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
