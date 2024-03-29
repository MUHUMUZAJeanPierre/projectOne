import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { TfiLightBulb } from "react-icons/tfi";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiBrainLight } from "react-icons/pi";
import { PiHandshakeFill } from "react-icons/pi";
import { LuPen } from "react-icons/lu";
import "../App.css";
import slides from "../data/carauselData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  const[slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlide((prevSlide) => prevSlide - 1 + (slides.length % slides.length));
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoSlideInterval);
  }, []);
  console.log(slides);

  return (
    <>
      <div className="relative">
        <div className="relative bg-blue-600 bg-center bg-cover backgroundImage -z-10 ">
          <div className="transition-all duration-300 bg-e-global-color-1046ecd -z-20 overlay" />
          <div className="pt-52 ">
            <div className="w-3/4 pt-24 mx-auto text-center h-72 align-center">
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

        <div className=" w-full pt-[4rem] bg-slate-100 bg-gradient-to-b from-white">
          <div className="md:flex justify-evenly   md:h-[30rem]">
            <div className=" md:w-[37rem] pl-6 md:h-[29rem]">
              {/* <div className="flex gap-3 flex-start "> */}
              {/* <div className="h-[0.1rem] w-14 bg-blue-800 mt-3"></div> */}
              <p className="font-normal tracking-wide text-md">
                ABOUT FABLAB RWANDA
              </p>
              {/* </div> */}
              <h1 className="mt-[0.5rem] text-[1.8rem] font-semibold">
                Who we are
              </h1>
              <p className="mt-[1.2rem]">
                FabLab Rwanda is a space for members to turn innovative ideas
                into products specifically in the hardware and electronics
                domain. The space provides a platform for capacity building and
                integration of hardware skills with software knowledge and
                quickly bringing Rwandan innovators closer to the Internet of
                Things era. The space provides collaborative community,
                Knowledge base and innovation business model Guidance with a
                core focus to increase Rwandas competitiveness in the fields of
                Design, Engineering, Electronics, Fabrication and High-Tech
                innovative business.
              </p>
              <p className="mt-[1.2rem]">
                FABLAB Rwanda also serves as a model for the nations leaders in
                policy, government, and industry, to experience, first hand, Fab
                Labs grass roots approach in developing technical education and
                literacy, promoting innovation and launching inventions
                <br /> while transforming traditional industries into digital
                fabrication agents.
              </p>
            </div>
            <div className=" md:h-[23rem] xl:w-[32rem] md:w-[30rem] sm:w-[10rem] sm:h-[40rem] block justify-end px-4 py-2 ">
              <span className="flex justify-end ">
                <img
                  src="https://i.ibb.co/ggfVWRm/10001.jpg"
                  alt=""
                  className=" mt-2 md:w-[29rem] rounded-md"
                />
              </span>

              <span className="flex justify-end ">
                <p className="mt-3 font-semibold text-slate-500">
                  Innovation Lab
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="h-full bg-yellow">
          <div className="w-full h-full gap-2 p-5 transition duration-500 md:flex xl:justify-evenly xl:pr- xl:pl-20">
            <div className="group p-5 md:w-[70rem] border-2 border-gray-100  rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
              <div className="flex items-center justify-center w-24 h-24 mt-6 ml-auto mr-auto bg-blue-900 rounded-full group-hover:bg-white group-hover:border-4 group-hover:border-blue-900 ">
                <MdOutlineWbSunny className="text-5xl text-white transition-colors duration-500 delay-150 group-hover:text-blue-900 " />
              </div>
              <h2 className="flex justify-center mt-5 text-xl font-semibold -200">
                Our Mission
              </h2>
              <p className="ml-2 mt-14">
                {" "}
                FabLab Rwanda Ltd mission is to provide knowledge and skills,
                access to the tools, innovate and invent using technology and
                digital fabrication to allow anyone to make (almost anything).We
                will accomplish this while providing quality of training, access
                to high standard digital facilities and excellent quality
                services to our primary beneficiaries who are engineering
                graduates, educational institutions, non-profit and community
                organizations and creating an enjoyable working environment for
                our employees.
              </p>
            </div>
            <div className=" group p-5 md:w-[70rem]  border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
              <div className="flex items-center justify-center w-24 h-24 mt-6 ml-auto mr-auto bg-blue-900 rounded-full group-hover:bg-white group-hover:border-4 group-hover:border-blue-900">
                <TfiLightBulb className="text-5xl text-white transition-colors duration-500 delay-200 group-hover:text-blue-900" />
              </div>
              <h2 className="flex justify-center mt-5 text-xl font-semibold ">
                Our Vision
              </h2>
              <p className="ml-2 mt-14">
                To be a well-established digital fabrication company in Rwanda
                that is able to meet customers needs and deliver on time.
              </p>
            </div>
            <div className="group p-5 md:w-[70rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
              <div className="flex items-center justify-center w-24 h-24 mt-6 ml-auto mr-auto bg-blue-900 rounded-full group-hover:bg-white group-hover:border-4 group-hover:border-blue-900">
                <TfiMenuAlt className="text-5xl text-white transition-colors duration-500 delay-200 group-hover:text-blue-900" />
              </div>
              <h2 className="flex justify-center mt-5 text-xl font-semibold ">
                Our objectives
              </h2>
              <p className="ml-2 mt-14">
                To Provide shared workspace and tools for schools, TVETs &
                individuals to work and develop ideas into products in a wide
                range of domains. To develop Skills in technology education
                through events & workshops To facilitate translation of
                innovative concepts into marketable products To enhance the
                number of professional design experts in Rwanda with word class
                hands on experience and access to tools. To increase research
                and improve designs of African centric hardware tools
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-sky-900 w-full xl:h-[19rem] ">
          <div className="h-full py-8 md:flex md:justify-evenly md:pt-20 md:pb-20 px-9">
            <div className=" md:w-[40rem] xl:h-36 ">
              <h1 className="text-4xl font-semibold text-white ">Donation</h1>
              <p className="text-white pt-7">
                It makes our innovation program and training possible for
                everyone to access and empower our trainees into employment, by
                running an employability training program to support their move
                into long-term, sustainable employment in the future.
              </p>
            </div>
            <div className="flex h-32 xl:w-80 sm:justify-end">
              <button className="bg-white text-blue-90 font-semibold w-52 h-16 mt-auto mb-auto rounded-[2rem] uppercase hover:bg-blue-400 hover:text-white">
                contact us
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full xl:h-[42rem] bg-slate-100 bg-gradient-to-b from-white ">
          <div>
            <span>
              <h1 className=" text-[2rem] font-semibold flex items-center justify-center pt-10 pb-10">
                Our core values
              </h1>
            </span>
            <div className="gap-3 px-5 py-2 transition md:flex xl:justify-evenly xl:h-full md:pr-20 md:pl-20">
              <div className="group bg-white p-5 md:w-[40rem] border-2 border-gray-100 rounded-sm  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3  transition-colors duration-500 delay-150">
                <div className="flex items-center justify-center w-20 h-20 mt-6 ml-auto mr-auto bg-blue-900 rounded-full group-hover:bg-white group-hover:border-4 group-hover:border-blue-900">
                  <LuPen className="text-5xl text-white transition-colors duration-500 delay-150 group-hover:text-blue-900" />
                </div>
                <h2 className="flex justify-center m-4 mb-10 text-xl font-semibold ">
                  Innovate
                </h2>
                <p>
                  We believe that everyone may have innovative ideas and should
                  have the space to turn those innovative ideas into products.
                  At FabLab Rwanda we encourage creative and inspirational ideas
                  that will help the community.
                </p>
              </div>
              <div className="group bg-white p-5  md:w-[40rem]  border-2 border-gray-100 rounded-sm  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3  transition-colors duration-500 delay-150">
                <div className="flex items-center justify-center w-20 h-20 mt-6 ml-auto mr-auto bg-blue-900 rounded-full group-hover:bg-white group-hover:border-4 group-hover:border-blue-900">
                  <PiHandshakeFill className="text-5xl text-white transition-colors duration-500 delay-150 group-hover:text-blue-900" />
                </div>
                <h2 className="flex justify-center m-4 mb-10 text-xl font-semibold ">
                  Collaborate
                </h2>
                <p>
                  We recognize that union makes strength and no one can solve
                  the challenges in design and digital fabrication alone. We
                  believe in a community where people or organizations working
                  together can create a greater impact than individual
                  organizations can accomplish alone.
                </p>
              </div>
              <div className="group bg-white p-4 md:w-[40rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-150">
                <div className="flex items-center justify-center w-20 h-20 mt-6 ml-auto mr-auto bg-blue-900 rounded-full group-hover:bg-white group-hover:border-4 group-hover:border-blue-900">
                  <PiBrainLight className="text-5xl text-white transition-colors duration-500 delay-150 group-hover:text-blue-900" />
                </div>
                <h2 className="flex justify-center m-4 mb-10 text-xl font-semibold ">
                  Think Big
                </h2>
                <p>
                  In our business of digital fabrication, we need to challenge
                  everything we do, we challenge our ideas to see what is
                  possible to implement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* sliding   */}
        <div className="container flex flex-col items-center w-full  md:mt-[3rem]  ">
          <h1 className="flex justify-center mt-3 text-2xl font-semibold ">
            In partnership with:
          </h1>
          <p className="flex justify-center pt-5 mx-10 ">
            We believe that partnership is a key element of success in a global
            market in{" "}
          </p>
          <span className="flex items-center">
            manufacturing digital products.
          </span>

          <div className="flex flex-col Carouselo lg:flex-row xl:my-auto-500 xl:mx-auto-500 xl:mb-16 ">
            <MdKeyboardArrowLeft
              className="arrow arrow-left right-[12rem] lg:right-[43rem]"
              onClick={prevSlide}
            />
            {slides.map((item, idx) =>
              item.images.map((item) => (
                <img
                  src={item.image}
                  key={idx}
                  className={slide === idx ? "slide" : "slide slide-hidden"}
                />
              ))
            )}
            <MdKeyboardArrowRight
              className="arrow arrow-right  left-[12rem] lg:left-[43rem] bg-white-00 rounded-full"
              onClick={nextSlide}
            />
            <span className="indicators">
              {slides.map((__, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlide(idx)}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                ></button>
              ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
