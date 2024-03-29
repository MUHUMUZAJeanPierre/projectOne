// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Circles } from "react-loader-spinner";


const FabClass = () => {

  const [fabClass, setFabClass] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  


  const fetchClass = ()=>{
    let token = localStorage.getItem('token');
    setIsLoading(true)


    axios({
      method: 'GET',
      url: 'https://fablab-backend-api.onrender.com/class/getAllClasses',
      headers:{
        "Content-Type": "multipart/data",
        Authorization: `Bearer ${token}`,
      }
    })
    .then((response)=>{
      console.log(response.data.data);
      setFabClass(response.data.data);
      console.log(fabClass,"FAB")
      setIsLoading(false)
      
   })
    .catch((error)=>{
      console.error(error);
    });
  };


  useEffect(()=>{
    fetchClass();
  }, []);
  return (
    <>
      <div className="bg-fabClass -z-10 bg-cover bg-center relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-52  ">
          <div className=" w-3/4 h-72 mx-auto   align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold mt-[-7rem]   w-100 h-16 text-6xl ">
                FabClass{" "}
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
      {/* </div> */}
      <div className="mx-2 flex flex-col relative lg:mb-8 ">
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
        {fabClass.map((items, index) => {
          return index % 2 == 0 ? (
            <div className=" h-full">
              <div className=" lg:p-14 md:flex-row ml  bg-slate-100 border-t-2 gap-10 flex-col-reverse flex w-full">
                <div className="flex-1">
                  <div className="">
                    <h1 className="text-indigo-900 font-bold text-4xl pb-8">
                      {items.classTitle}
                    </h1>
                    <p>{items.description}</p>
                  </div>
                </div>

                <div className=" lg:w-1/2 ">
                  <img
                    alt="..."
                    src={items.mainImage}
                    className=" h-[15rem]  w-[30rem]   lg:ml-14 lg:mt-2 lg:w-[35rem] lg:h-[17rem] mt-3"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full">
              <div className="lg:p-14 md:flex-row-reverse bg-slate-100 border-t-2 gap-10 flex-col-reverse flex">
                <div className="flex-1">
                  <div>
                    <h1 className="text-indigo-900 font-bold text-4xl pb-8">
                      {items.classTitle}
                    </h1>
                    <p>{items.description}</p>
                  </div>
                </div>

                <div className=" lg:w-1/2 ">
                  <img
                    alt="..."
                    src={items.mainImage}
                    className=" h-[15rem]   w-[30rem]   lg:ml-3 lg:mt-2 lg:w-[35rem] lg:h-[17rem] mt-3 object-contain"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FabClass;
