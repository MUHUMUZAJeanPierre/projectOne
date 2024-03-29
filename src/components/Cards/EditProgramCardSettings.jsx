import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { useParams } from "react-router-dom";
import { useNavigate, } from "react-router-dom";

// components

export default function EditProgramCardSettings() {
  const [courseName, setCourseName] = useState("");
  const [courseTitles, setCourseTitles] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [posterPath, setPosterPath] = useState(
    "https://th.bing.com/th/id/OIP.Z_PIeIRDajXPmZHROt-T_QHaEK?rs=1&pid=ImgDetMain"
  );
  // const [posterPath, setPosterPath] = useState("")
  const [courseTeacher, setCourseTeacher] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [id,setId]=useState("")
//params
  const params = useParams();
  const courseId = params.id;
//navigate
const navigate = useNavigate(); 

  //fetch data
  const fetchCourses = () => {
    
    axios({
      method: "GET",
      url: `https://afri-code-back-end-zeo6.onrender.com/api/course/findCourse/?courseName=${courseId}`,
    }).then((response) => {
      console.log(response.data.course);

      setId(response.data?.course?._id)
      setCourseName(response.data?.course?.courseName);
      setCourseTitles(response?.data?.course?.courseTitles);
      setCourseDescription(response?.data?.course?.courseDescription);
      setPosterPath(response?.data?.course?.posterPath);
      setCourseTeacher(response?.data?.course?.courseTeacher);
      setContent(response?.data?.course?.content);
      
      
    });
    


  }
  
  
  
  useEffect(() => {
    fetchCourses();
  }, []);



  

  // handleForm

  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = {
      courseTitles: courseTitles,
      courseDescription: courseDescription,
      courseTeacher: courseTeacher,
      content: content,
      posterPath: posterPath
    };

    axios
      .put(`https://fablab-backend-api.onrender.com/program/updateProgram/${courseId}`, form)
      .then((response) => {
        toast.success(response.data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setIsLoading(false);
      });
};

  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg font-sora bg-blueGray-100 ">
        <ToastContainer />
        <div className="rounded-t bg-white mb-0 px-6 py-6 pt-[8rem] ">
          <div className="flex justify-between text-center ">
            <h6 className="text-xl font-bold text-blueGray-700 font-sora ">
              Edit Course
            </h6>
          </div>
        </div>
        <div className="z-10 flex-auto px-4 py-10 pt-0 bg-white lg:px-10">
          <form>
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
              Course Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3 ">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    course name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
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
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    course title
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Open"
                    onChange={(e) => {
                      setCourseTitles(e.target.value);
                    }}
                    value={courseTitles}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3 ">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    course teacher
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="lucky.jesse"
                    value={courseTeacher}
                    onChange={(e) => {
                      courseTeacher(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    course description
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="course description"
                    onChange={(e) => {
                      setCourseDescription(e.target.value);
                    }}
                    value={courseDescription}
                  />
                </div>
              </div>
              
            </div>

            <div className="flex flex-wrap ">
              <div className="flex flex-col w-full px-4 lg:flex-row lg:w-12/12">
                <div className="relative mb-3 lg:w-1/2">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                  content
                  </label>
                  <textarea
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                    rows="2"
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    value={content}
                  ></textarea>
                </div>
                <div className="flex flex-col px-3 space-y-4 lg:w-1/2 ">
                  <label htmlFor="" className="text-xs font-bold uppercase">
                    course image
                  </label>
                  <input
                    type="file"
                    // onChange={(e) => {
                    //   setPosterPath(e.target.files[0]);
                    // }}
                    className="w-full px-3 py-3 transition-all ease-in-out bg-white border rounded shadow focus:outline-none focus:ring"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center font-semibold lg:mt-4 mt-4 mb-[5rem]">
              <button
                className="items-center px-6 py-2 text-white transition-all duration-300 rounded-lg hover:bg-black bg-secondary md:items-start bg-cyan-600 text-md"
                onClick={handleForm}
              >
                <p>{isLoading ? "Editing course..." : "Edit course"}</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
