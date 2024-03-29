import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableDropdown from "../../components/Dropdowns/TableDropdown.jsx";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import EditMachineDropdown from "../Dropdowns/EditMachineDropdown.jsx";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function MachineCardSettings({
  color,
  cardHeading,
  addButton,
}) {
  const [machine, setMachine] = useState([]);
  const [machine_name, setMachine_name] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const MachinePerPage = 6;
  const MachineVisited = pageNumber * MachinePerPage;
  const MachineCount = Math.ceil(
    machine.length / MachinePerPage
  );

  useEffect(() => {
    fetchMachine();
  }, []);

  const fetchMachine = () => {
    axios
      .get("https://fablab-backend-api.onrender.com/machine/getAllMachines")
      .then((response) => {
        setMachine(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("machine_name", machine_name);
    formData.append("mainImage", mainImage);

    axios({
      method: "POST",
      url: "https://fablab-backend-api.onrender.com/testmony/createTestimonial",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        fetchMachine();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const MachineDisplay = machine
    .slice(MachineVisited, MachineVisited + MachinePerPage)
    .map((item) => (
      <div
        className="flex flex-col bg-white justify-center items-center relative  shadow-lg rounded-xl pb-[1rem]  lg:pt-[4rem] w-[16rem] "
        key={item._id}
      >
        <p>
          <img
            src={item.mainImage}
            alt=""
            className="w-[23rem] px-2 h-[15rem] -mt-[3.8rem] flex rounded-lg border-2 border-blue-gray-50  bg-slate-200 flex-wrap shadow"
          />
        </p>
        <p className="text-xl font-semibold mt-4 font-sora">{item.machine_name}</p>

        <p className="border-t-0  px-6 align-middle border-l-0  border-r-0 text-xs whitespace-nowrap p-4 text-right">
          <EditMachineDropdown id={item._id} />
        </p>
      </div>
    ));

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <ToastContainer />
      <div className=" rounded-t-xl  mb-0 px-4  py-3  bg-white flex flex-row container ">
        <div className="relative w-full px-4 max-w-full flex justify-between ">
          <h3 className="font-semibold text-lg text-black ">{cardHeading}</h3>
          <Link to="/dashboard/AddMachineForm">
            <button className="px-6 py-2 bg-blue-400 duration-300 text-white font-sora hover:bg-black transition-all font-semibold  rounded-lg">
              {addButton}
            </button>
          </Link>
        </div>
      </div>

      <div className="relative  bg-white rounded-b-xl  px-24 gap-4 grid lg:grid-cols-3  min-w-0 break-words w-full mb-6   text-black py-14  ">
        {MachineDisplay}
      </div>
      <ReactPaginate
        previousLabel={<FaChevronLeft className="inline" />}
        nextLabel={<FaChevronRight className="inline" />}
        pageCount={MachineCount}
        onPageChange={handlePageClick}
        containerClassName="flex bg-slate-100 container   justify-center   flex-row space-x-4 items-center md:py-[1rem]  md:mt-4 "
        pageClassName=""
        pageLinkClassName="text-slate-800  font-semibold   hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white  rounded-full py-1   px-2 "
        previousLinkClassName="hover:bg-blue-500 hover:text-white focus:text-white focus:bg-blue-500  rounded-full  py-1 px-2 pb-2 "
        nextLinkClassName="text-slate-800 rounded-full hover:text-white focus:text-white pb-2 hover:bg-blue-500  focus:bg-blue-500 focus:text-white  py-1 px-2 font-semibold "
        disabledClassName=""
        activeClassName=""
      />
    </>
  );
}
