import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import login from "../../assets/login.jpg";
import fabIcon from "../../assets/img/fabIcon.png";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Basic form validation
    if (!email.trim() || !password.trim()) {
      toast.error("Email and password are required.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://fablab-backend-api.onrender.com/auth/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      toast.success(response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.access_token);
      const token = localStorage.getItem("token");
      navigate(`/dashboard/stats`);
      // setTimeout(() => {
      //   if (response.data.user.role === "admin") {
      //     console.log(token);
      //     navigate(`/dashboard/stats`);
      //   } else {
      //     navigate("/");
      //   }
      // }, 3000);
    } catch (error) {
      console.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 401) {
          toast.error("Incorrect password. Please try again.");
        } else {
          toast.error(`Correct Email or Password`);
        }
      } else if (error.request) {
        // The request was made but no response was receiv
        toast.error("Network error. Please try again later.");
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center ">
        <div className="absolute -z-20 object-contain h-[100vh]">
          <img src={login} alt="" className="" />
        </div>
        <div className="flex items-center justify-center ">
          <div className=" flex flex-col items-center  lg:pt-[4rem] ">
            <div className="relative flex lg:w-full w-[100vw] bg-white  flex-col min-w-0 break-words   mb-6 shadow-lg rounded-lg  border-0">
              <div className="px-6 py-6 mb-0 rounded-t">
                <div className="flex flex-col items-center mb-3">
                  <div className="w-fit -mt-[4rem] ">
                    <img
                      src={fabIcon}
                      alt="Logo Image"
                      className="lx:w-14 md:72 mt-6 lg:w-[25vw] h-auto p-14"
                    />
                  </div>
                  <h6 className="text-xl font-bold text-blueGray-500 font-sora">
                    Log in
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                <div className="mb-3 font-bold text-center text-blueGray-400"></div>
                <form className="font-sora">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <Link to='/dashboard/stats' className="mt-6 text-center">
                    <button
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-cyan-700 hover:bg-green-600 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      // onClick={handleLogin}
                      
                    >
                      {isLoading ? "Logging in ..." : "Log in "}
                    </button>
                  </Link>
                </form>
              </div>
            </div>
            <div className="flex   space-x-[16rem] relative">
              <div className="w-1/2 mb-[5rem]">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small className="text-white">Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/register" className="text-blueGray-200">
                  <small className="text-white ml-[5rem]">
                    Create new account
                  </small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
