import React from "react";
import collabo from "../../assets/collaborate.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TestimonyCardSettings from "../../components/Cards/CardTableTestimony";
const TestimonyDetails = () => {
  
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mainImage, setMainImage] = useState("");
  const params = useParams();
  const TestimonyId = params.id;
  console.log(TestimonyId);
  // fetch Testimonys
  //fetch users axios
  const fetchTestimonys = () => {
    axios({
      method: "GET",
      url: `https://fablab-backend-api.onrender.com/testmony/getTestimonialById/${TestimonyId}`,
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      //   console.log();
      setName(response?.data?.data?.name);
      setMessage(response?.data?.data?.message);
      setMainImage(response?.data?.data?.mainImage);
    });
  };
  useEffect(() => {
    fetchTestimonys();
  }, []);
  return (
    <div className="p-4   ">
      <div className="mt-[6rem] p-4 flex flex-col  space-y-12">
        <h2 className="text-blue font-bold text-center  ">Testimony details</h2>
        <div className="  flex lg:flex-row flex-col justify-evenly pb-[2rem] ">
          <div className="lg:w-1/3 ">
            <img src={mainImage} className="rounded-lg" alt="" />
          </div>
          <div className="flex flex-col space-y-3">
            <div>
              <h2 className="font-light">Testimony User</h2>
              <p className="max-w-sm font-semibold">{name}</p>
            </div>
            <div>
              <h2 className="font-light">Testimony description</h2>
              <p className="max-w-sm font-semibold">{message}</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};
export default TestimonyDetails;
