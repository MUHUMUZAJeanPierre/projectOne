import React from "react";

import our1 from "../assets/img/our1.jpg";
import our2 from "../assets/img/our2.jpg";
import our3 from "../assets/img/fabclass2.jpg";
import our4 from "../assets/img/our3.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Circles } from "react-loader-spinner";

  

const Programs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [programs, setPrograms] = useState([]);
  const [status, setStatus] = useState([]);
  const fetchPrograms = () => {
    setIsLoading(true)
    axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/program/getAllPrograms",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setPrograms(response.data.data);
        console.log(response.data.data);
        setStatus(response.data.data);
        setIsLoading(false)


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
    <div className="relative ">
      <div className="bg-bgProgram   bg-cover bg-center relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-52  ">
          <div className=" w-3/4 h-72 mx-auto  pt-24 text-center  ">
            <span className="">
              <h2 className="uppercase font-semibold text-white mt-[-7rem] text-xl z-50">
                Fablab programs
              </h2>
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                Our programs
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
      <div className="mx-2  mt-[6rem] flex flex-col relative lg:mb-8 ">
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
          )
        }
        {programs.map((item, index) => {
          return index % 2 === 0 ? (
            <div className="flex flex-col   md:flex-row-reverse  ">
              <div className="lg:w-1/2 pt-[1rem] px-[1.5rem]  lg:px-[5rem] ">
                <div className="  lg:mt-[-1rem]">
                  <h1 className="text-4xl overflow-ellipsis lg:m-8 lg:ml-1 ">
                    {item.programName}
                    <div
                      style={{
                        height: 4,
                        marginTop: 16,
                        width: 37,
                        marginLeft: 2,
                        border: "4px dashed #FFBB44",
                      }}
                    ></div>
                    <div
                      style={{
                        background: "#FFBB44",
                        height: 4,
                        width: 37,
                        marginLeft: 43,
                        marginTop: -6,
                      }}
                    ></div>
                  </h1>
                </div>
                <div className=" ">
                  <p className=" text-gray-500 mt-8 ">{item.description}</p>
                </div>
                <div>
                  {item.status == "open" && (
                    <Link to={`/eventRegister/${item._id}`}>
                      <button className="py-2 px-8 mt-8 bg-blue-500 mb-[1rem] text-white rounded-lg hover:bg-black hover:text-white transition-all">
                        Apply
                      </button>
                    </Link>
                  )}
                </div>
              </div>

              <div className=" lg:w-1/2 ">
                <img
                  alt="..."
                  src={item.images}
                  className="lg:h-full object-cover  "
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col pt-[0rem]  md:flex-row   ">
              <div className="lg:w-1/2 pt-[0rem] px-[3rem] py-[1rem] ">
                <div className="  lg:mt-[-1rem]">
                  <h1 className="text-4xl lg:m-8 lg:ml-1  ">
                    {item.programName}
                    <div
                      style={{
                        height: 4,
                        marginTop: 16,
                        width: 37,
                        marginLeft: 2,
                        border: "4px dashed #FFBB44",
                      }}
                    ></div>
                    <div
                      style={{
                        background: "#FFBB44",
                        height: 4,
                        width: 37,
                        marginLeft: 43,
                        marginTop: -6,
                      }}
                    ></div>
                  </h1>
                </div>
                <div className=" ">
                  <p className=" text-gray-500 mt-8 ">{item.description}</p>
                </div>

                <div>
                  {item.status === "open" && (
                    <Link to={`/eventRegister/${item._id}`}>
                      <button className="py-2 px-8 mt-8 bg-blue-500 mb-[1rem] text-white rounded-lg hover:bg-black hover:text-white transition-all">
                        Apply
                      </button>
                    </Link>
                  )}
                </div>
              </div>

              <div className=" lg:w-1/2   ">
                <img
                  alt="..."
                  src={item.images}
                  className="lg:h-full object-cover  lg:w-fit    "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
