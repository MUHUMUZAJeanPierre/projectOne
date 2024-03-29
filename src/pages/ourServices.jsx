import React from "react";
import guys from '../assets/img/guysLaptop.jpg'
import eggs from '../assets/img/eggs.jpg'
import ange from '../assets/img/ange.jpg'
import nuts from '../assets/img/nuts.jpg'
import wood from '../assets/img/wood.jpg'
import lab from '../assets/img/lab.jpg' 
import precision from '../assets/img/precision.png'
import tree from '../assets/img/tree.jpeg'

const OurServices = () => {
  return (
    <>
      <div className="">
        <div className="bg-image-1 -z-10 bg-cover bg-center relative bg-blue-600 ">
          <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
          <div className="pt-52   ">
            <div className=" w-3/4  h-72 mx-auto  align-center pt-24 text-center  ">
              <span className="">
                <h2 className="uppercase fo nt-semibold text-white mt-[-7rem] text-xl z-50">
                  FabLab services
                </h2>
                <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                  Our services{" "}
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
        <div>
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill "
            className="bg-white
          "
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg> */}
        </div>
      </div>

      {/* section */}
      <div className="lg:p-[3rem] p-[1rem]  ">
        <div>
          {/* upper w-1/3 section  */}
          <div className=" parent lg:grid flex flex-col">
            <div className="relative bg-cover   ">
              <img
                src={guys}
                className="custom-contrast  custom-brightness bg-contain h-[12rem] w-[30rem] "
                alt=""
              />
              <p className=" absolute top-[5rem] left-[4rem] text-white font-bold text-2xl ">
                Digital Manufacturing training (CNC,3D printing,PCB)
              </p>
            </div>
            <div className="relative     ">
              <img
                src={eggs}
                className="custom-contrast custom-brightness bg-cover h-[12rem] w-[30rem]  "
                alt=""
              />
              <p className=" absolute top-[5rem] left-[4rem] text-white font-bold text-2xl ">
                3D scanning and 3D printing
              </p>
            </div>
            <div className="relative     ">
              <img
                src={ange}
                className="custom-contrast custom-brightness bg-cover h-[12rem] w-[30rem]  "
                alt=""
              />
              <p className=" absolute top-[5rem] left-[4rem] text-white font-bold text-2xl ">
                Laser cutting and Engraving
              </p>
            </div>
            <div className="relative     ">
              <img
                src={lab}
                className="custom-contrast custom-brightness bg-cover h-[12rem] w-[30rem]  "
                alt=""
              />
              <p className=" absolute top-[5rem] left-[4rem] text-white font-bold text-2xl ">
                Workshop & Mobile Lab installation
              </p>
            </div>
            <div className="relative     ">
              <img
                src={nuts}
                className="custom-contrast custom-brightness bg-cover h-[12rem] w-[30rem]  "
                alt=""
              />
              <p className=" absolute top-[5rem] left-[4rem] text-white font-bold text-2xl ">
                Computer Controlled maintenance and repair
              </p>
            </div>
            <div className="relative     ">
              <img
                src={wood}
                className="custom-contrast custom-brightness bg-cover h-[12rem] w-[30rem]  "
                alt=""
              />
              <p className=" absolute top-[5rem] left-[4rem] text-white font-bold text-2xl ">
                CNC cutting and Machining
              </p>
            </div>
          </div>
          {/* lower grid division */}
          <div className="child mt-2 lg:grid">
            <div className="relative     ">
              <img
                src={precision}
                className="custom-contrast custom-brightness bg-cover h-[12rem]  w-full  "
                alt=""
              />
              <p className=" absolute top-[5rem] lg:left-[14rem] left-[3rem] text-white font-bold text-2xl ">
                PCB Design and Printing
              </p>
            </div>
            <div className="relative     ">
              <img
                src={tree}
                className="custom-contrast custom-brightness bg-cover h-[12rem] w-full  "
                alt=""
              />
              <p className=" absolute top-[5rem] lg:left-[14rem] left-[5rem] text-white font-bold text-2xl ">
                Interior design
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* blue section */}

      <div className="flex lg:flex-row flex-col bg-[#1C3E6A] p-10 items-center justify-between lg:px-[5rem] space-y-4 lg:space-y-0">
        <div className="lg:w-1/2  space-y-6 text-white">
          <h2 className="font-semibold text-3xl">
            At FabLab, We make Almost Anything!
          </h2>
          <p>
            FABLAB is about the power of digital fabrication for innovation,
            entrepreneurship, learning for community impact and solving global
            challenges. In digital fabrications we provide our clients with the
            following services:
          </p>
        </div>

        <div>
          <div>
            <button className="bg-white text-[#1C3E6A] font-semibold hover:bg-slate-400 hover:text-black duration-100 transition px-12 py-4 rounded-full">
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* digital fabrication section */}

      <div className="bg-[#F4F6F8] lg:p-[5rem] space-y-6 group  ">
        <div className="flex lg:flex-row flex-col lg:space-x-4">
          <div className="lg:w-1/2 bg-white   px-[3rem] py-[2rem] space-y-4 lg:pb-[12rem]">
            <h3 className="font-bold group-hover:text-blue-500">
              Digital Fabrication Lab setting up
            </h3>
            <p className="max-w-lg">
              Fablab Rwanda is your one-stop-shop when setting up a digital
              fabrication lab and it's designed to be a resource for advice for
              setting up, repairing, training and managing the lab.
            </p>
          </div>

          <div className="  bg-white  px-[3rem] py-[2rem] space-y-4 lg:pb-[10rem]">
            <h3 className="font-bold group-hover:text-blue-500">
              Prototyping & product Development
            </h3>
            <p className="max-w-lg">
              Through Research and development, we use our digital fabrication
              facilities to prototype, design, fabricate and test ideas from
              ourselves and other people. We document all the project
              requirements and then work with our clients to determine the best
              manufacturing approach to implement their digital fabrication
              project.
            </p>
          </div>
        </div>

        <div className="bg-white px-[3rem] py-[2rem] space-y-4">
          <h2 className="font-bold group-hover:text-blue-500">
            Fab Café and Event Space
          </h2>
          <p>
            The first digital powered coffee shop that is going to be in the
            global Fab Cafe network. Beautifully designed workspace created to
            facilitate new connections for networking and combine business with
            pleasure where you enjoy a diverse collection of art in our
            showroom. the space can host up to 100 pax seated and standing set
            up it´s come with all the following features:
          </p>
          <ul className=" list-disc">
            <li>Space</li>
            <li>High speed internet</li>
            <li>Coffee, tea & water</li>
            <li>Lunch & Dinner</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OurServices;
