import React from "react";
import collabo from "../../assets/collaborate.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MachineCardSettings from "../../components/Cards/CardTableMachine";
const MachineDetails = () => {
  const [machine_name, setMachine_name] = useState("");
  const [mainImage, setMainImage] = useState("");
  const params = useParams();
  const MachineId = params.id;
  //console.log(MachineId);
  // fetch Testimonys
  //fetch users axios
  const fetchMachine = () => {
    axios({
      method: "GET",
      url: `https://fablab-backend-api.onrender.com/machine/getMachineById/${MachineId}`,
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response?.data?.data?.machine_name);
      setMachine_name(response?.data?.data?.machine_name);

      setMainImage(response?.data?.data?.mainImage);
    });
  };
  useEffect(() => {
    fetchMachine();
  }, []);
  return (
    <div className="p-4   ">
      <div className="mt-[6rem] p-4 flex flex-col  space-y-12">
        <h2 className="text-blue font-bold text-center  ">Machine details</h2>
        <div className="  flex lg:flex-row flex-col justify-evenly pb-[2rem] ">
          <div className="lg:w-1/3 ">
            <img src={mainImage} className="rounded-lg" alt="" />
          </div>
          <div className="flex flex-col space-y-3">
            <div>
              <h2 className="font-light">Machine Name</h2>
              <p className="max-w-sm font-semibold">{machine_name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MachineDetails;
