import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components

export default function CardSettings() {
  const [courseName, setCourseName] = useState("");
  const [courseTitles, setCourseTitles] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [posterPath, setPosterPath] = useState(
    "https://th.bing.com/th/id/OIP.Z_PIeIRDajXPmZHROt-T_QHaEK?rs=1&pid=ImgDetMain"
  );
  // const [posterPath, setPosterPath] = useState("")
  const [courseTeacher, setCourseTeacher] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = {
      courseName: courseName,
      courseTitles: courseTitles,
      courseDescription: courseDescription,
      posterPath: posterPath,
      courseTeacher: courseTeacher,
      content: content
    };

    // axios({
    //   method: "POST",
    //   url: "https://afri-code-back-end-zeo6.onrender.com/api/course/createCourse",
    //   data: form,
    //   headers:{
    //     "Content-Type": "multipart/form-data",
    //   }
    // })

    console.log(form);
    axios.post(
        "https://afri-code-back-end-zeo6.onrender.com/api/course/createCourse",
        form
      ).then((response) => {
        toast.success(response.data.message);
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  const handleImage = (e) => {
    e.preventDefault();
    setPosterPath(e.target.files[0]);
  };

  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
        <ToastContainer />
        <div className="px-6 py-6 mb-0 bg-white rounded-t ">
          <div className="flex justify-between text-center ">
            <h6 className="flex text-xl font-bold uppercase text- text-blueGray-700 font-sora ">
              course form
            </h6>
          </div>
        </div>
        <div className="z-10 flex-auto px-4 py-10 pt-0 bg-white lg:px-10">
          <form>
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400 font-sora">
              course Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3 ">
                  <label
                    className="block mb-2 text-xs font-bold uppercase font-sora text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    course Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 font-sora text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="lucky.jesse"
                    value={courseName}
                    onChange={(e) => {
                      setCourseName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600 font-sora"
                    htmlFor="grid-password"
                  >
                    course Title
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="jesse@example.com"
                    value={courseTitles}
                    onChange={(e) => {
                      setCourseTitles(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap ">
              <div className="flex flex-row w-full px-4 lg:w-12/12">
                <div className="relative w-1/2 mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600 font-sora"
                    htmlFor="grid-password"
                  >
                    course description
                  </label>
                  <textarea
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                    rows="2"
                    value={courseDescription}
                    onChange={(e) => {
                      setCourseDescription(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="flex flex-col w-1/2 px-3 space-y-4 ">
                  <label
                    htmlFor=""
                    className="text-xs font-bold uppercase font-sora"
                  >
                    COURSE Image
                  </label>
                  <input
                    type="file"
                    className="w-full px-3 py-3 transition-all ease-in-out bg-white border rounded shadow focus:outline-none focus:ring"
                    // onChange={handleImage}
                    
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3 ">
                  <label
                    className="block mb-2 text-xs font-bold uppercase font-sora text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    course teacher
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 font-sora text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="peggy"
                    value={courseTeacher}
                    onChange={(e) => {
                      setCourseTeacher(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600 font-sora"
                    htmlFor="grid-password"
                  >
                    content
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="jesse dkjfdjkf"
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4 font-semibold">
              <button
                className="items-center px-6 py-2 text-white transition-all rounded-lg hover:bg-black bg-secondary md:items-start bg-cyan-600 text-md"
                onClick={handleForm}
              >
                <p>{isLoading ? "Adding program..." : "Add Course"}</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
