import React from 'react'
// import collabo from '../../assets/collaborate.jpg'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from 'axios'
// import CardTableProgramDetails from '../../components/Cards/CardTableProgramDetails';
const EventDetail = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [eventDescription,setEventDescription] = useState('');
    const [mainImage,setMainImage] = useState();
  const params = useParams();
  const EventId = params.id;
  console.log(EventId);
  // fetch programs
  //fetch users axios
  const fetchEvents = () => {
    axios({
      method: "GET",
      url: `https://fablab-backend-api.onrender.com/event/getEventById/${EventId}`,
      headers: {
        // Authoriz.ation: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data.data);
      setEventName(response?.data?.data?.eventName)
      setEventDate(response?.data?.data?.eventDate)
      setFrom(response?.data?.data?.from);
      setTo(response?.data?.data?.to);
      setEventDescription(response?.data?.data?.eventDescription)
      setMainImage(response?.data?.data?.mainImage);
    });
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div className="p-4   ">
      <div className="mt-[10rem] p-4 flex flex-col  space-y-12">
        <h2 className="text-blue font-bold text-center  ">Event details</h2>
        <div className="  flex lg:flex-row flex-col justify-evenly pb-[2rem] ">
          <div className="lg:w-1/3 ">
            <img src={mainImage} className="rounded-lg" alt="" />
          </div>
          <div className="flex flex-col space-y-3">
            <div>
              <h2 className="font-light">Event name</h2>
              <p className="font-semibold">{eventName}</p>
            </div>
            <div>
              <h2 className="font-light">Event Date</h2>
              <p className="max-w-sm font-semibold">{eventDate}</p>
            </div>
            <div>
              <h2 className="font-light">From</h2>
              <p className="font-semibold">{from}</p>
            </div>
            <div>
              <h2 className="font-light">to</h2>
              <p className="font-semibold">{to}</p>
            </div>
            <div>
              <h2 className="font-light">eventDescription:</h2>
              <p className="font-semibold">{eventDescription}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <CardTableProgramDetails cardHeading="Applicants" addButton="Add Program" /> */}
    </div>
  );
}
export default EventDetail











