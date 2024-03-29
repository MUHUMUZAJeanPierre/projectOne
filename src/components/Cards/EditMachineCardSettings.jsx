import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMachineCardSettings() {
  const [machine_name, setMachine_name] = useState("");
  const [mainImage, setMainImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const machineId = params.id;
  console.log("machineId: ", machineId);
  let token = localStorage.getItem("token");

  const fetchMachine = () => {
    axios({
      url: `https://fablab-backend-api.onrender.com/machine/getMachineById/${machineId}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("response: ", response);
        setMachine_name(response?.data?.data?.machine_name);
        setMainImage(response?.data?.data?.mainImage);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMachine();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("machine_name", machine_name);
    data.append("mainImage", mainImage);

    setIsLoading(true)
    axios({
      url: `https://fablab-backend-api.onrender.com/machine/updateMachineById/${machineId}`,
      method: "PATCH",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Edit-updated successfully");
        setTimeout(() => {
          navigate("/dashboard/machineDash");
        }, 3000);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="pt-[10rem]">
        <div className="relative bg-white mt-[2rem] pt-[0rem] font-sora flex flex-col items-start min-w-0 break-words   w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6 ">
            <div className="text-center flex justify-between ">
              <h6 className="text-blueGray-700 text-xl font-bold">Machine</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0  z-10">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold  uppercase">
                Machine Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Machine Name
                    </label>
                    <input
                      type="text"
                      className="border px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="3D Printer"
                      value={machine_name}
                      onChange={(e) => {
                        setMachine_name(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full flex flex-row  lg:w-12/12 ">
                  <div className="flex flex-col  px-3 space-y-4 ">
                    <label htmlFor="" className="font-bold text-xs uppercase">
                      Machine image
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setMainImage(e.target.files[0])}
                      accept="image/*"
                      className="border shadow rounded py-2 px-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className=" h-11 w-36 bg-blue-500 hover:bg-black transition-all duration-300 mt-4 text-white rounded-lg"
                >
                  {isLoading ? "Editing..." : "Edit machine"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
