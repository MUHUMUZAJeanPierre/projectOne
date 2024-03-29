import React from 'react'
import collabo from '../../assets/collaborate.jpg'
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from 'axios'
import CardTableProgramDetails from '../../components/Cards/CardTableProgramDetails';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ApplicantDetails = () => {
    const [from, setFrom] = useState("");
    const [yearOfBirth,setYearOfbirth] = useState("");
    const [applicantEmail,setApplicantEmail] = useState("");
    const [applicantName,setApplicantName] = useState("");
    const [applicantPnumber,setApplicantPNumber] = useState("")    
    const [gender, setGender] = useState("");  
    const [educationLevel, setEducationLevel] = useState("");  
    const [province,setProvince] = useState("")
    const [fieldOfStudy,setFieldOfStudy] = useState("")
    const [previouslyParticipated,setPreviouslyParticipated] = useState("");
    const [jobStatus,setJobStatus] = useState("")
    const [sector,setSector] = useState("");
    const [village,setVillage] = useState("");
    const params = useParams();
  const applicantId = params.id;
  
   let token = localStorage.getItem("token")

   const approveApplicant = () => {
    //  setIsLoading(true);

     axios({
       method: "PATCH",
       url: `https://fablab-backend-api.onrender.com/apply/approveApplicationById/${applicantId}`,
       headers: {
         Authorization: `Bearer ${token}`,
       },
     }).then((response) => {
       console.log(response);
      //  setIsLoading(false);
       toast.success("Approved applicant");
     })
     .catch((error) => {
       console.log(error);
      //  setIsLoading(false);
      toast.error(error);
     })
   };

   const rejectApplicant = () => {
     //  setIsLoading(true);

     axios({
       method: "PATCH",
       url: `https://fablab-backend-api.onrender.com/apply/rejectById/${applicantId}`,
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
       .then((response) => {
         console.log(response);
         //  setIsLoading(false);
         toast.success("Applicant rejected");
       })
       .catch((error) => {
         console.log(error);
         //  setIsLoading(false);
         toast.error(error);
       });
   };
  // fetch programs
  //fetch users axios
  const fetchPrograms = () => {
     console.log(applicantId, "app");
    axios({
      method: "GET",
      url: `https://fablab-backend-api.onrender.com/apply/getApplicationById/${applicantId}`,
      headers: {
         Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data);
      setApplicantName(response?.data?.applicants_List?.fullNames);
      setApplicantEmail(response?.data?.applicants_List?.email);
      setYearOfbirth(response?.data?.applicants_List?.yearOfBirth)
      setApplicantPNumber(response?.data?.applicants_List?.phoneNumber);
      setGender(response?.data?.applicants_List?.gender);
      setEducationLevel(response?.data?.applicants_List?.educationalLevel);
      setProvince(response?.data?.applicants_List?.province);
      setFieldOfStudy(response?.data?.applicants_List?.fieldOfStudy);
      setPreviouslyParticipated(response?.data?.applicants_List?.previouslyParticipated);
      setJobStatus(response?.data?.applicants_List?.jobStatus);
      setVillage(response?.data?.applicants_List?.village);
      setSector(response?.data?.applicants_List?.sector);

      //  setTo(response?.data?.data?.endDate);
      //  setDetails(response?.data?.data?.description)

      // setProgramName(response?.data?.data?.programName);
    });
  };
  
  
  useEffect(() => {
    fetchPrograms();
  }, []);


  
  return (
    <div className="p-4   ">
      <ToastContainer />

      <div className="mt-[6rem] p-4 flex flex-col  space-y-12">
        <h2 className="text-blue font-bold text-center  ">Applicant details</h2>
        <div className="  flex lg:flex-row flex-col justify-evenly pb-[2rem]  ">
          <div className="lg:w-1/3   ">
            <img src={collabo} className="rounded-lg" alt="" />

            <div className="flex flex-row justify-around lg:pt-[5rem]">
              <button
                onClick={() => {
                  approveApplicant();
                }}
                className="px-2 py-4 bg-green-500 hover:bg-green-400 text-white font-semibold rounded hover:bg-green-"
              >
                Admit applicant
              </button>
              <button onClick={()=>{
                rejectApplicant();
              }} className="px-2 py-4 bg-red-500 text-white rounded font-semibold hover:bg-red-400">
                Reject applicant
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-3  ">
            <div>
              <h2 className="font-light">Applicant name</h2>
              <p className="font-semibold">{applicantName}</p>
            </div>
            <div>
              <h2 className="font-light">Applicant email</h2>
              <p className="max-w-sm font-semibold">{applicantEmail}</p>
            </div>
            <div>
              <h2 className="font-light">Year of birth</h2>
              <p className="font-semibold">{yearOfBirth}</p>
            </div>
            <div>
              <h2 className="font-light">Applicant phone number</h2>
              <p className="font-semibold">{applicantPnumber}</p>
            </div>
            <div>
              <h2 className="font-light">Gender</h2>
              <p className="font-semibold">{gender}</p>
            </div>
            <div>
              <h2 className="font-light">Education level</h2>
              <p className="font-semibold">{educationLevel}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3  ">
            <div>
              <h2 className="font-light">Previously participated</h2>
              <p className="font-semibold">{previouslyParticipated}</p>
            </div>
            <div>
              <h2 className="font-light">Job status</h2>
              <p className="max-w-sm font-semibold">{jobStatus}</p>
            </div>
            <div>
              <h2 className="font-light">Village</h2>
              <p className="font-semibold">{village}</p>
            </div>
            <div>
              <h2 className="font-light">Sector</h2>
              <p className="font-semibold">{sector}</p>
            </div>
            <div>
              <h2 className="font-light">Province</h2>
              <p className="font-semibold">{province}</p>
            </div>
            <div>
              <h2 className="font-light">Field of study</h2>
              <p className="font-semibold">{fieldOfStudy}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <CardTableProgramDetails cardHeading="Applicants" addButton="Add Program" /> */}
    </div>
  );
}

export default ApplicantDetails