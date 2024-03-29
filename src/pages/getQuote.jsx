import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";



const GetQuote = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setIsLoading(true)
    let token = localStorage.getItem('token');
    axios({
      method:'POST',
      url:'https://fablab-backend-api.onrender.com/contacts/createContact',
      data:{
        name: name,
        email:email,
        subject:subject,
        message:message,

      },
      headers:{
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

    }).then((response)=>{
      console.log("response: ", response);
      toast.success(response.data.message)
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
    }).catch((error)=>{
      console.log(error);
      toast.error(error.message)
      setIsLoading(false);
    })
    
  }

  return (
    <>
      <div>
        <ToastContainer />

        <div className="backgroundImageGetQuote -z-10 bg-cover bg-center relative bg-blue-600 ">
          <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
          <div className="pt-52  ">
            <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
              <span className="">
                <h2 className="uppercase fo nt-semibold text-white mt-[-7rem] text-xl z-50">
                  get in touch
                </h2>
                <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                  About Us{" "}
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
        <div className="">
          <div className="xl:flex xl:justify-evenly md:flex md:justify-around gap-5 xl:py-20 xl:px-20 py-12 px-6">
            <div className="  xl:w-[28rem] xl:h-[31rem]  ">
              <img
                src="../../src/assets/peopleTshirt.jpg"
                alt=""
                className="xl:w-[28rem]  border-2 rounded"
              />
            </div>

            {/* <div className=""> */}
            <div className=" p-10 md:w-[25rem] ">
              {/* <div className="bg-red-700   "> */}
              <h1 className="text-3xl font-semibold">Let's Talk Business!</h1>
              <ul className="list-none mt-10 ">
                <li className="flex items-center text-gray-500 font-bold">
                  <span className="w-[0.9rem] h-[0.9rem] mr-2 rounded-full bg-blue-800 "></span>
                  Consultation
                </li>
                <li className="flex items-center text-gray-500 font-bold mt-2">
                  <span className="w-[0.9rem] h-[0.9rem]  mr-2 rounded-full bg-blue-800"></span>
                  Get a Quote
                </li>
                <li className="flex items-center text-gray-500 font-bold mt-2">
                  <span className="w-[0.9rem] h-[0.9rem] mr-2 rounded-full bg-blue-800"></span>
                  Lab Installation
                </li>
              </ul>
              {/* </div> */}
            </div>

            <div className=" xl:w-[30rem]  xl:h-[31rem] xl:pt-6">
              <form action="" className="">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Name"
                  className="xl:w-[21.3rem]  h-12 pl-2 border-2 border-white-600 focus:border-blue-600 outline-none rounded"
                />
                <br />
                <br />
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Email"
                  className="xl:w-[21.3rem] h-12 pl-2 border-2 border-white-600 rounded focus:border-blue-600 outline-none "
                />
                <br />
                <br />
                <input
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  type="text"
                  placeholder="Subject"
                  className="md:w-[21.3rem] h-12 pl-2 border-2 border-white-600 rounded outline-none focus:border-blue-600"
                />
                <br />
                <br />
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="md:w-[21.3rem] p-2 h-[10rem] border-2 border-white-600 outline-none focus:border-blue-600 rounded"
                ></textarea>
                <br />
                <br />
                <button
                  onClick={handleSubmit}
                  className="text-white bg-blue-800 rounded w-[9rem] h-[2.8rem] font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="bg-gray-100 py-24">
          <div className=" xl:w-[75rem] py-10 px-auto xl:mx-auto">
            <div className="xl:flex xl:justify-evenly md:flex md:justify-evenly ">
              <div className="bg-white- mx-6 mx:ml-[1.3rem] my-4 xl:w-[55rem] ">
                <h1 className="text-3xl font-medium py-4">Contact Details</h1>
                <p className="font-normal ">
                  You can use a few enticing words and flaunt your capabilities
                  that will
                  <br />
                  attract future clients and encourage them to hire you right
                  away.
                </p>
              </div>
              {/* <FaFacebookF className="text-xl"/> */}
              <div className=" flex items-center justify-evenly space-x-2  md:items-center text-sm gap-1 w-[10rem] pt-[2rem]  my-4 mx-6">
                <div className="group w-8 h-8 bg-blue-800 hover:bg-white flex justify-center items-center rounded-full ">
                  <FaLinkedinIn className="text-white group-hover:text-blue-800" />
                </div>
                <div className="group w-8 h-8 bg-blue-800 hover:bg-white  flex justify-center items-center rounded-full">
                  <FaFacebookF className="text-white group-hover:text-blue-800" />
                </div>
                <div className="group w-8 h-8 bg-blue-800 hover:bg-white flex items-center justify-center rounded-full ">
                  <IoLogoTwitter className="text-white group-hover:text-blue-800" />
                </div>
                <div className="group w-8 h-8 bg-blue-800 hover:bg-white flex justify-center items-center rounded-full">
                  <FaXTwitter className="text-white group-hover:text-blue-800" />
                </div>
              </div>
            </div>

            <div className=" md:block md:justify-evenly xl:flex xl:justify-evenly xl:pt-10 px-6">
              <div className="bg-white xl:flex justify-evenly xl:w-[23rem] h-[16rem] md:h-[11rem] xl:items-center mt-3 md:pr-[3rem] hover:shadow-lg transition duration-300 ease-in-out">
                <div className="w-12 h-12 bg-slate-100 flex justify-center items-center rounded-full">
                  <MdLocationPin className="text-blue-800 text-3xl" />
                </div>
                <div className="mr-[3rem]">
                  <h1 className="font-semibold text-2xl">Address</h1>
                  <p className="mt-2">44 KG 548 Street</p>
                  <p>Kigali, Rwanda</p>
                </div>
              </div>
              <div className="bg-white xl:flex justify-evenly xl:w-[23rem] h-[16rem] md:h-[11rem] xl:items-center mt-3 md:pr-[3rem] hover:shadow-lg transition duration-300 ease-in-out">
                <div className="w-12 h-12 bg-slate-100 flex justify-center items-center rounded-full">
                  <MdEmail className="text-blue-800  text-3xl" />
                </div>
                <div className="mr-[3rem]">
                  <h1 className="font-semibold text-2xl">Email Us</h1>
                  <p className="mt-[0.8rem]">info@fablab.rw</p>
                </div>
              </div>
              <div className="bg-white xl:flex justify-evenly xl:w-[23rem]  h-[16rem] md:h-[11rem] xl:items-center mt-3 md:pr-[4rem] hover:shadow-lg transition duration-300 ease-in-out">
                <div className="w-12 h-12 bg-slate-100 flex justify-center items-center rounded-full">
                  <MdOutlineCall className="text-blue-800  text-3xl" />
                </div>
                <div className="mr-[3rem]">
                  <h1 className="font-semibold text-2xl">Call Us</h1>
                  <p className="mt-[0.8rem]">0789 276 080</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.532684844812!2d30.088252274067653!3d-1.9394799366869868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca694ca62bccb%3A0x97ae40abc4b4d74f!2sFablab%20Rwanda!5e0!3m2!1sen!2srw!4v1700646813929!5m2!1sen!2srw"
            height="450"
            className="w-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default GetQuote;
