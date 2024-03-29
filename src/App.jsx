// import { ReactComponent as HillySvg } from "./components/Svg/Hilly.svg";
import fab8 from './assets/img/fab8.png'
import { FaGraduationCap } from "react-icons/fa";
import { PiLightbulbLight } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiServer } from "react-icons/bi";
import timber from "./assets/img/timberlandBoy.jpg"
import { useEffect, useState } from 'react';
import axios from 'axios';
 
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function App() {
    

  const [testimonies,setTestimonies] = useState([]);
  const fetchTestimonies = () => {
    axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/testmony/getAllTestimonials"
    }).then((response) => {
      console.log(response.data.data);
      setTestimonies(response.data.data);
    })
  }

  useEffect(() => {
    fetchTestimonies()
    console.log(testimonies,"Test")
  },[]);
  return (
    <>
      <div>
        <div className="bg-image lg:h-screen " />
        <div className="flex flex-col container  mx-auto justify-center items-center md:items-start md:pt-[18rem] pt-[8rem] px-4 md:px-12   ">
          <h2 className="text-white font-bold md:text-7xl text-4xl max-w-xl">
            We make almost Anything
          </h2>
          <div className="py-[4rem] lg:py-[5.45rem]">
            <button className="px-6 py-3  hover:text-black transition text-white hover:bg-slate-300 border-2 border-slate-200 rounded-full ">
              See our services
            </button>
          </div>
          {/* <div>
          <HillySvg className="bg-white"/>
        </div> */}
        </div>
      </div>

      {/* section */}
      <div className="  flex justify-center items-center flex-col  bg-[#F3F5F5] space-y-6 lg:space-y-0 ">
        <h2 className="text-center text-[#3A3A3A] flex justify-center lg:max-w-xl  text-2xl font-semibold mb-10 mt-8  ">
          FabLab Rwanda is a space for members to turn innovative ideas into
          products specifically in the hardware and electronics domain.
        </h2>
        <div className="flex lg:flex-row flex-col lg:items-center px-[2rem]  lg:space-x-[5rem] lg:container lg:mx-auto">
          <div className="lg:w-[50vw] md:w-[80vw]  lg:p-[5rem]   lg:space-y-4  ">
            <img src={fab8} className="rounded-lg" alt="" />
            <p className="font-semibold text-[#3A3A3A] lg:text-left md:text-right text-center py-4 lg:py-0">
              We make almost anything{" "}
            </p>
          </div>
          <div className="space-y-3 flex-col flex items-start ">
            <h3 className="text-[#3A3A3A] font-bold ">MAKE ALMOST ANYTHING</h3>
            <div className="flex flex-col items-start">
              <h2 className="text-3xl text-[#03396C] font-semibold ">
                Who We are
              </h2>
              <p className=" lg:max-w-md max-w-xl md:text-left  ">
                FabLab Rwanda was established in May 12th, 2016, by ICT Chamber
                in partnership with Rwanda Development Board (RDB), Japan
                International Cooperation Agency (JICA), Ministry of Education,
                SolidWorks Corporation MIT-CBA, and Gasabo3D who followed
                through taking lessons learnt from efforts of supporting
                Software Innovators (at KLAB) to execute on His Excellency’s
                recommendation to put in place a Fabrication Laboratory (FABLAB)
                to support Hardware Innovators in Rwanda.
              </p>
            </div>
            <div className="mt-10 lg:pb-10 md:pb-20 pb-6">
              <button className="px-10 py-3 md border-2 border-[#03396C]  hover:text-white transition text-[#03396C] hover:bg-[#03396C]  rounded-full ">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* what we offer */}
      <div className="">
        <div className="bg-image-1 lg:h-screen" />
        <div className="flex flex-row     md:px-[4rem] md:pr-[8rem] relative ">
          <div className="bg-white  md:absolute lg:w-[40%] md:w-[80%] md:items-start rounded-md py-8 space-y-8       md:top-[-38rem] md:left-[5rem] lg:top-[-40rem] lg:right-[10rem] lg:left-[40rem]     flex flex-col px-6 ">
            <h2 className="text-[#03396C] text-3xl font-semibold">
              What we Offer
            </h2>
            <p className="max-w-lg text-[#3A3A3A]">
              FABLAB is about the power of digital fabrication for innovation,
              entrepreneurship, and learning for community impact and solving
              global challenges
            </p>
            <ul className="list-none space-y-2 text-[#3A3A3A] font-semibold ">
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>Prototyping and product Development</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>Digital Fabrication Lab setting up</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>Digital Manufacturing training</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>3D scanning and 3D printing</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>Laser cutting and Engraving</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>LAb installation</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>Computer Controlled maintenance and repair</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>CNC cutting and Machining</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>CNC,Laser and 3D Maintenance</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>PCB Design and Printing</p>
              </li>
              <li className="space-x-2 flex flex-row items-center ">
                <span className="bg-[#0170B9] rounded-full px-[0.5rem] py-[0.5rem] "></span>
                <p>Interior design</p>
              </li>
            </ul>
            <div className="mt-10 pb-4">
              <button className="px-10 py-3  border-2 border-[#03396C]  hover:text-white transition text-[#03396C] hover:bg-[#03396C]  rounded-full ">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our services */}
      <div className="bg-[#F3F5F5] flex flex-col items-center    pt-10 ">
        <div className=" absolute hidden md:block text-opacity-5 font-bold z-[10] text-slate-400 text-[8rem] max-w-3xl text-center">
          WE MAKE ALMOST EVERYTHING
        </div>
        <div className="text-center pt-14">
          <h2 className="text-[#3A3A3A] text-xl font-semibold">
            FABLAB SERVICES
          </h2>
          <h1 className="text-[#03396C] font-semibold text-4xl">
            Our Services
          </h1>
        </div>
        <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row lg:px-[4rem] lg:pb-[8rem] pt-16 justify-around container mx-auto     ">
          <div className="space-y-[4rem]">
            <div className="text-center">
              <h2 className="text-[#03396C] text-2xl font-semibold">
                3D Signs
              </h2>
              <p className="">
                Office sign letter,lightning signage,brand signage,Background
                lightning signage
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-[#03396C] text-2xl font-semibold ">
                CNC router Works
              </h2>
              <p>Cutting, engraving,wood furnitures</p>
            </div>
          </div>
          <div className="space-y-[4rem]">
            <div className="text-center">
              <h2 className="text-[#03396C] text-2xl font-semibold ">
                Laser Cutting & Engraving
              </h2>
              <p>
                Nursery decor,home decor,kitchen decor , offices decor,wood
                cutting,engraving,living room partition,Offices partition
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-[#03396C] text-2xl font-semibold ">
                Wooden Furnitures
              </h2>
              <p>
                Chair,living room partition,Offices partition,games ,3D arts
              </p>
            </div>
          </div>
          <div className="space-y-[4rem]">
            <div className="text-center">
              <h2 className="text-[#03396C] text-2xl font-semibold ">
                3D Design & Printing
              </h2>
              <p>Signage letter,3D printing,3D Arts</p>
            </div>

            <div className="text-center">
              <h2 className="text-[#03396C] text-2xl font-semibold ">
                Interior and Exterior Design
              </h2>
              <p>
                wooden paterns,living room partition,Offices partition,3D Arts
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our program */}

      <div className="bg-[#F3F5F5]">
        <div className="space-y-[2rem]">
          <h2 className="text-center text-[#03396C] font-bold text-3xl">
            Our program
          </h2>
          <p className="text-center text-[#3A3A3A]">Capacity building </p>
        </div>
        <div className="flex lg:flex-row md:flex-col space-y-6 lg:space-y-0  flex-col p-[3rem] container mx-auto justify-around lg:space-x-8">
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-[#03396C] font-semibold text-2xl flex flex-row items-center">
              <span className="text-5xl px-2">
                <BiServer />
              </span>
              IOT
            </h2>
            <p className="max-w-md pl-12 pt-2 text-[#3A3A3A]">
              Apply now for a six months training on Internet of Things(IoT)
              organized by WDA (Workforce Development Authority) under the
              Skills Development Fund (SDF) II and will be carried out by FABLAB
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="flex flex-row items-center font-semibold text-2xl text-[#03396C]">
              <span className="px-2 text-5xl">
                <FaGraduationCap />
              </span>
              Fab Academy
            </h2>
            <p className="px-16 max-w-2xl text-[#3A3A3A]">
              The Fab Academy is a fast paced, hands-on learning experience
              where students learn rapid-prototyping by planning and executing a
              new project each week, resulting in a personal portfolio of
              technical accomplishments.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2 className="font-semibold text-2xl text-[#03396C] flex flex-row items-center ">
              <span className="text-5xl px-2">
                <HiOutlineLightBulb />
              </span>
              Tech UpSkills
            </h2>
            <p className="max-w-md pl-16 text-[#3A3A3A]">
              Capacity Building program for Tech innovators & Tech talented in
              Rwanda
            </p>
          </div>
        </div>
      </div>

      {/* Key achievements  */}

      <div className="p-10">
        <div className="text-center flex items-center flex-col space-y-8">
          <h2 className="text-[#03396C] text-4xl font-semibold">
            Key Achievements
          </h2>
          <p className="text-[#3A3A3A] max-w-2xl text-center">
            The best evidence that we have customers is that we deliver work on
            time, the clientele increases nearly 60% every year, 10+ new
            innovative projects yearly from Fablab members and individuals that
            approach us. Through different partnership, Fablab Rwanda has been
            able to open three new Fablab, one located in Huye and another
            located in Rwamagana, our team takes part in training Locals and
            engage in the growth of the new Fablab
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center space-y-6 md:space-y-0   justify-evenly pt-8 ">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="font-bold text-3xl">5</p>
              <p className="font-bold text-3xl">+</p>
            </div>

            <div>
              <p className="text-[#03396C] font-bold">Awards</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="font-bold text-3xl">254</p>
              <p className="font-bold text-3xl">+</p>
            </div>

            <div>
              <p className="text-[#03396C] font-bold">Clients</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="font-bold text-3xl">1200</p>
              <p className="font-bold text-3xl">+</p>
            </div>

            <div>
              <p className="text-[#03396C] font-bold">Students</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="font-bold text-3xl">13</p>
              <p className="font-bold text-3xl">+</p>
            </div>

            <div>
              <p className="text-[#03396C] font-bold">Cohorts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonies  */}
      <div className="bg-[#F3F5F5] lg:px-[8rem] px-[1rem] mt-[4rem] pb-[5rem]">
        <h2 className="text-center text-3xl font-semibold py-8 text-[#03396C]">
          Testimonies
        </h2>
         <Carousel showArrows={true} stopOnHover={true} infiniteLoop={true} useKeyboardArrows={true} interval={2000} autoPlay={true} >

        {
          testimonies.map((item) => {
            return (
              <div className="flex md:flex-row bg-white flex-col items-center px-[1rem] justify-evenly py-8 ">
                <div className="md:w-1/2 flex flex-col space-y-6">
                  <p className="text-[#3A3A3A]">
                    {item.message}
                  </p>
                  <p className="font-bold">{item.name}</p>
                </div>
                <div className="">
                  <img
                    src={item.mainImage}
                    className="lg:h-[40vh] md:h-[30vh] hover:brightness-50 transition-all duration-300 translate-y-[-10]"
                    alt=""
                  />
                </div>
              </div>
            );
          })
        }
        
         </Carousel>
      </div>

      {/* contact form */}

      <div className="pb-8 relative">
        <div className="bg-image-2 " />
        <div className="bg-white  flex flex-col md:flex-row absolute lg:w-[50%] md:w-[75%] mt-[-52rem]   lg:top-[54rem] md:left-[8rem] md:top-[55rem] py-[2rem] md:pb-[6rem] pb-[5rem] w-full">
          <div className="flex flex-col px-8 py-0 md:w-2/3 space-y-10 ">
            <h2 className="text-[#03396C] text-2xl font-semibold">
              Get a quote
            </h2>

            <input
              type="text"
              placeholder="Name"
              name=""
              id=""
              className="border border-gray-400 rounded-sm px-3 py-1"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-400 rounded-sm px-3 py-1"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-400 rounded-sm px-3 py-1"
              required
            />
            <input
              type="text"
              placeholder="Message"
              className="border border-gray-400 rounded-sm px-3 py-8"
              required
            />
            <div className="">
              <button className="px-4 py-2 bg-[#055589] rounded-md text-white font-semibold">
                Send message
              </button>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col items-center  space-y-2 pt-[4rem] pb-[4rem]  ">
            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Address
              </h2>
              <p className="text-[#3A3A3A]">KG 548 St, Kigali</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Email
              </h2>
              <p className="text-[#3A3A3A]">info@fablab.rw</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Phone
              </h2>
              <p className="text-[#3A3A3A]">+250 789 276 080</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
