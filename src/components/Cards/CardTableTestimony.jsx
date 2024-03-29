 
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableDropdown from "../../components/Dropdowns/TableDropdown.jsx";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import EditTestimonialDropdown from "../Dropdowns/EditTestimonialDropdown.jsx";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
export default function TestimonyCardSettings({ color, cardHeading, addButton } ) {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const testimonialsPerPage = 4;
  const testimonialsVisited = pageNumber * testimonialsPerPage;
  const testimonialsCount = Math.ceil(
    testimonials.length / testimonialsPerPage
  );
  useEffect(() => {
    fetchTestimonials();
  }, []);
  const fetchTestimonials = () => {
    axios
      .get(
        "https://fablab-backend-api.onrender.com/testmony/getAllTestimonials"
      )
      .then((response) => {
        setTestimonials(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);
    formData.append("mainImage", mainImage)
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
        // Refresh testimonials after submitting a new one
        fetchTestimonials();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const testimonialsDisplay = testimonials
    .slice(testimonialsVisited, testimonialsVisited + testimonialsPerPage)
    .map((item) => (
      <tr className="  w-full even:bg-slate-200" key={item._id}>
        <td>
          <img
            src={item.mainImage}
            alt=""
            className="w-12 h-12 ml-3 rounded-full border-2 border-blue-gray-50 shadow"
          />
        </td>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          {item.name}
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-wrap p-4">
          {item.message}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
          <EditTestimonialDropdown id={item._id} />
        </td>
      </tr>
    ));
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full   lg:mt-[-1.05rem] bg-white rounded-xl   text-black   ">
      <ToastContainer />
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex justify-between ">
            <h3 className="font-semibold text-lg text-black font-sora ">
              {cardHeading}
            </h3>
            <Link to="/dashboard/AddTestimonyForm">
              <button className="px-6 py-2 bg-blue-400  font-sora hover:bg-black transition-all duration-300 font-semibold text-white rounded-lg">
                {addButton}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-start min-w-0  break-words w-full mb-6">
        <div className="flex-auto px-4  container lg:px-10 py-72 pt-0 ">
          <div className="block w-full  ">
            <table className="items-center overflow-x-auto  w-full   font-sora  border-collapse">
              <thead>
                <tr>
                  <th className="px-6 align-middle border py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Image
                  </th>
                  <th className="px-6 align-middle border py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Testimonial User
                  </th>
                  <th className="px-6 align-middle border py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Testimonial description
                  </th>
                  <th className="px-6 align-middle border py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="  ">{testimonialsDisplay}</tbody>
            </table>
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={<FaChevronLeft className="inline" />}
        nextLabel={<FaChevronRight className="inline" />}
        pageCount={testimonialsCount}
        onPageChange={handlePageClick}
        containerClassName="flex bg-white  mt-[14rem] justify-center  flex-row space-x-4 items-center md:py-[1rem]  md:mt-4  "
        pageClassName="rounded-full text-white"
        pageLinkClassName=" text-slate-800  font-semibold rounded-full py-1   px-2 "
        previousLinkClassName="rounded-full  text-slate-800 rounded-full  pb-2 hover:bg-blue-500  hover:text-white py-1 px-2 font-semibold "
        nextLinkClassName=" text-slate-800 rounded-full  pb-2 hover:bg-blue-500  hover:text-white py-1 px-2 font-semibold  "
        disabledClassName=""
        activeClassName="bg-blue-500   px-2 py-1 pb-2 text-white"
        activeLinkClassName="text-white"
      />
    </div>
  );
}