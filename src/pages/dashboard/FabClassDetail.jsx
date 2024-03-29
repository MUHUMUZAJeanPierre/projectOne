import React from 'react'
// import collabo from '../../assets/collaborate.jpg'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from 'axios'
// import CardTableProgramDetails from '../../components/Cards/CardTableProgramDetails';
const FabClassDetail = () => {
  const [classTitle, setClassTitle] = useState('');
  const [description  , setDescription] = useState('');
  const [mainImage, setMainImage] = useState();
  const params = useParams();
  const classId = params.id;
  console.log(classId);

  //fetch fabclass axios
  const fetchEvents = () => {
    axios({
      method: "GET",
      url: `https://fablab-backend-api.onrender.com/class/getClassById/${classId}`,
      headers: {
      },
    }).then((response) => {
      console.log(response.data.data, "response");
      setClassTitle(response?.data?.data?.classTitle)
      setDescription(response?.data?.data?.description        )
      setMainImage(response?.data?.data?.mainImage);
    });
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div className="p-4   ">
      <div className="mt-[10rem] p-4 flex flex-col  space-y-12">
        <h2 className="text-blue font-bold text-center  ">Fab Class details</h2>
        <div className="  flex lg:flex-row flex-col justify-evenly pb-[2rem] ">
          <div className="lg:w-1/3 ">
            <img src={mainImage} className="rounded-lg" alt="" />
          </div>
          <div className="flex flex-col space-y-3">
            <div>
              <h2 className="font-light">Fab Class name</h2>
              <p className="font-semibold">{classTitle}</p>
            </div>
            <div>
              <h2 className="font-light">Fab Class Description</h2>
              <p className="max-w-sm font-semibold">{description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <CardTableProgramDetails cardHeading="Applicants" addButton="Add Program" /> */}
    </div>
  );
}
export default FabClassDetail











