import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const EventRegister = () => {
  const [disabled,setDisabled] = useState(false)
  const params = useParams();
  const [fullname,setFullName] = useState("")
  const [consent,setConsent] = useState("")

  const [isLoading,setIsLoading] = useState("");
  const [gender,setGender] = useState("");
  const [age,setAge] = useState("");
  const [district,setDistrict] = useState("");
  const [province,setProvince] = useState("")
  const [date,setDate] = useState("");
  const [cell,setCell] = useState("");
  const [village,setVillage] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [university,setUniversity] = useState("");
  const [education,setEducation] = useState("");
  const [jobStatus,setJobStatus] = useState("");
  const [participated,setParticipated] = useState("");
  const [solution,setSolution] = useState("");
  const [idea,setIdea] = useState("");
  const [image,setImage] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [sector,setSector] = useState("")
  const [innovation,setInnovation] = useState("")

  const formData = new FormData();
  formData.append("fullNames", fullname);
  formData.append("images", image );
  formData.append("email", email);
  formData.append("phoneNumber", phone );
  formData.append("yearOfBirth", date);
  formData.append("gender", gender);
  formData.append("ageRange", age);
  formData.append("province", province);
  formData.append("district", district); 
  formData.append("sector", sector);
  formData.append("village", village);
  formData.append("educationLevel", education);
  formData.append("jobStatus", jobStatus);
  formData.append("fieldOfStudy", fieldOfStudy);
  formData.append("previouslyParticipated", participated);
  formData.append("innovationDescription", innovation);
  formData.append("businessIdeaFile", idea);
  formData.append("consent", consent);
  

   
    




  


  const programId = params.id
  console.log(programId)
  const postEvent = (e) => {
    setIsLoading(true);
    e.preventDefault()
    setDisabled(true);

    // Basic form validation
    if (
      !fullname ||
      !email ||
      !phone ||
      !date ||
      !gender ||
      !age ||
      !province ||
      !district ||
      !sector ||
      !village ||
      !education ||
      !jobStatus ||
      !fieldOfStudy ||
      !university ||
      !participated ||
      !innovation ||
      !idea ||
      !image ||
      !consent
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    axios({
      method: "POST",
      url: `https://fablab-backend-api.onrender.com/apply/applyFor/${programId}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setIsLoading(false);
 
        toast.success("Applicant registered")
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.response.data.message);
        setIsLoading(false)
      });
  
  }
  
  return (
    <div className=" relative">
      <ToastContainer />
      <div class="bg-Events lg:h-[80vh] h-[50vh]" />
      <div className="absolute lg:top-[14rem] lg:left-[24rem] top-[10rem]">
        <p class="text-white font-bold lg:max-w-xl lg:text-4xl text-2xl text-center max-w-lg  ">
          Tech Innovators Pre-Incubation Program Application
        </p>
      </div>
      <div class="p-6 md:p-16 bg-slate-100">
        <p>
          Are you a tech innovator with a groundbreaking technology solution? Do
          you have a passion for innovation and a drive to bring your ideas to
          life to transform our society and economy? Apply for the
          Pre-Incubation Program.
        </p>
        <br />
        <p class="text-2xl text-blue-900 font-bold">Who should apply?</p>
        <br />
        <ul class="list-disc ml-6 md:ml-16">
          <li>
            Tech innovators with innovative technology solutions that have a
            significant impact.
          </li>
          <li>
            Open to individuals, teams, and startups with a strong commitment to
            developing their ideas.
          </li>
          <li>Having a working prototype</li>
        </ul>
        <br />
        <p>
          The benefits of the program are mentorship, training, resources, and
          support to help turn your innovative ideas into viable products and
          services.
        </p>
      </div>
      <div className=" lg:p-20 lg:-mt-36 bg-slate-100 ">
        <div class="flex flex-col md:flex-row gap-4 p-6 md:p-8">
          <div class="w-full md:w-1/2">
            <label for="fullNames" class="block font-bold">
              Full Names *
            </label>
            <input
              type="text"
              id="fullNames"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div class="w-full md:w-1/2">
            <label for="emailAddress" class="block font-bold">
              Email Address *
            </label>
            <input
              type="email"
              id="emailAddress"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-4 p-6 md:p-8 lg:-mt-12 -mt-8 ">
          <div class="w-full md:w-1/2">
            <label for="phoneNumber" class="font-bold block">
              Phone Number *
            </label>
            <input
              type="phone"
              id="phone"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div class="w-full md:w-1/2 flex flex-col">
            <label for="DateOfBirth" class="font-bold block">
              Date Of Birth *
            </label>
            <input
              type="date"
              id="DateOfBirth"
              required
              class="w-full border border-gray-300 rounded py-2"
              onChange={(e) => setDate(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-5 p-6 lg:-mt-14 -mt-12  ">
          <div class="flex flex-col w-1/2 p-6 ">
            <p class="font-bold ml-1 text-xl">Gender *</p>
            <div className="space-x-4">
              <input
                type="radio"
                id="female"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value="female"
              />
              <label for="female">Female</label>
            </div>
            <div className="space-x-4">
              <input
                type="radio"
                id="male"
                name="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value="male"
              />
              <label for="male">Male</label>
            </div>
          </div>
          <div class="w-full md:w-1/2 flex flex-col -mt-10 lg:mt-1">
            <div className=" ">
              <p className=" font-bold w-1/2 p-6">Age Range *</p>
              <div className=" space-x-4 ml-4">
                <input
                  on
                  type="radio"
                  id="age1"
                  name="age"
                  value="15-25"
                  onChange={(e) => setAge(e.target.value)}
                />
                <label for="age1"> 15 - 25</label>

                <input
                  type="radio"
                  id="age2"
                  name="age"
                  value="26-30"
                  onChange={(e) => setAge(e.target.value)}
                />
                <label for="age2"> 26 - 30</label>

                <input
                  type="radio"
                  id="age3"
                  name="age"
                  value="Above 36"
                  onChange={(e) => setAge(e.target.value)}
                />
                <label for="age3"> Above 36</label>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col  md:flex-row mb-4 -mt-10 lg:-mt-8">
          <div class="flex flex-col     md:w-1/2 p-8">
            <label for="province" class="font-bold">
              Province
            </label>
            <select
              id="province"
              name="province"
              class="border  border-gray-300 rounded px-3 py-2"
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value="Province 0">Select Province</option>
              <option value="Kigali city">Kigali City</option>
              <option value="Northern">Northern Province</option>
              <option value="Southern">Southern Province</option>
              <option value="Western">Western Province</option>
              <option value="Eastern">Eastern Province</option>
            </select>
          </div>
          <div class="flex flex-col  md:w-1/2 p-8 lg:-ml-2 lg:w-10 -mt-10 lg:mt-1">
            <label for="district" class="font-bold">
              District
            </label>
            <select
              id="district"
              name="district"
              class="border border-gray-300 rounded px-3 py-2 lg:w-[30rem]"
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option value="District 0">Select District</option>
              <option value="Nyarugenge">Nyarugenge</option>
              <option value="Gasabo">Gasabo</option>
              <option value="Kicukiro">Kicukiro</option>
              <option value="Bugesera">Bugesera</option>
              <option value="Gatsibo">Gatsibo</option>
              <option value="Kayonza">Kayonza</option>
              <option value="Ngoma">Ngoma</option>
              <option value="Nyaruguru">Nyaruguru</option>
              <option value="Nyamagabe">Nyamagabe</option>
              <option value="Huye">Huye</option>
              <option value="Gisagara">Gisagara</option>
              <option value="Kamonyi">Kamonyi</option>
              <option value="Muhanga">Muhanga</option>
              <option value="Nyanza">Nyanza</option>
              <option value="Ruhango">Ruhango</option>
              <option value="Burera">Burera</option>
              <option value="Gicumbi">Gicumbi</option>
              <option value="Musanze">Musanze</option>
              <option value="Rubavu">Rubavu</option>
              <option value="Rusizi">Rusizi</option>
              <option value="Nyamasheke">Nyamasheke</option>
              <option value="Rutsiro">Rutsiro</option>
              <option value="Karongi">Karongi</option>
              <option value="Ngororero">Ngororero</option>
              <option value="Nyabihu">Nyabihu</option>
              <option value="Nyagatare">Nyagatare</option>
              <option value="Province 5">Eastern Province</option>
              <option value="Rwamagana">Rwamagana</option>
            </select>
          </div>
        </div>
        <div class="flex  flex-col md:flex-row gap-12   p-12 -mt-10 lg:-mt-20">
          <div class="w-full  md:w-1/2 flex flex-col -mt-10 lg:mt-1">
            <label for="sector" class="font-bold block">
              Sector
            </label>
            <input
              type="text"
              id="sector"
              name="sector"
              class=" border border-gray-300 rounded px-0 py-2 w-[20rem]  "
              onChange={(e) => setSector(e.target.value)}
            />
          </div>
          <div class="w-full  md:w-1/2 -mt-10 lg:mt-1 flex flex-col">
            <label for="cell" class="font-bold block">
              Cell
            </label>
            <input
              type="text"
              id="cell"
              name="cell"
              class=" w-[20rem] -ml-5 border border-gray-300 rounded px-3 py-2"
              onChange={(e) => setCell(e.target.value)}
            />
          </div>
          <div class="w-full -mt-10 lg:mt-1 md:w-1/2 flex flex-col">
            <label for="village" class="font-bold block">
              Village
            </label>
            <input
              type="text"
              id="village"
              name="village"
              class=" w-[20rem] -ml-5 border border-gray-300 rounded px-3 py-2"
              onChange={(e) => setVillage(e.target.value)}
            />
          </div>
        </div>
        <div className="flex  flex-col md:flex-row p-6 -mt-12 lg:-ml-2">
          <div className="p-12 w-full md:w-1/2 -ml-10">
            <div className="mt-6 ">
              <p className="font-bold">Education level *</p>
              <br />
              <input
                type="radio"
                id="hs"
                name="hs"
                value="Highschool"
                onChange={(e) => setEducation(e.target.value)}
              />
              <label for="">Highschool</label>
              <br />
              <input
                type="radio"
                id="under"
                name="under"
                value="Undergraduate"
                onChange={(e) => setEducation(e.target.value)}
              />
              <label htmlFor="jobStatus1">Undergraduate</label>
              <br />
              <input
                type="radio"
                id="bach"
                name="bach"
                value="Bachelor"
                onChange={(e) => setEducation(e.target.value)}
              />
              <label for=""> Bachelor Degree</label>
              <br />
              <input
                type="radio"
                id="master"
                name="master"
                value="Masters"
                onChange={(e) => setEducation(e.target.value)}
              />
              <label for=""> Masters</label>
              <br />
              <input
                type="radio"
                id="phd"
                name="phd"
                value="Phd"
                onChange={(e) => setEducation(e.target.value)}
              />
              <label for=""> PHD</label>
              <br />
              <input
                type="radio"
                id="other"
                name="other"
                value="Others"
                onChange={(e) => setEducation(e.target.value)}
              />
              <label for=""> Others</label>
            </div>

            <div className="mt-6">
              <p className="font-bold">Job Status *</p>
              <br />
              <input
                type="radio"
                id="jobStatus1"
                name="jobStatus"
                value="Employed"
                onChange={(e) => setJobStatus(e.target.value)}
              />
              <label htmlFor="jobStatus1">Employed</label>
              <br />
              <input
                type="radio"
                id="jobStatus2"
                name="jobStatus"
                value="Self employed"
                onChange={(e) => setJobStatus(e.target.value)}
              />
              <label htmlFor="jobStatus2">Self employed</label>
              <br />
              <input
                type="radio"
                id="jobStatus3"
                name="jobStatus"
                value="Unemployed"
                onChange={(e) => setJobStatus(e.target.value)}
              />
              <label htmlFor="jobStatus3">Unemployed</label>
              <br />
              <input
                type="radio"
                id="jobStatus4"
                name="jobStatus"
                value="Student"
                onChange={(e) => setJobStatus(e.target.value)}
              />
              <label htmlFor="jobStatus4">Student</label>
              <br />
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12">
            <div className="font-bold lg:mt-10 -mt-16 lg:w-[35.5rem]">
              <label htmlFor="fieldOfStudy" className="block">
                Field of Study *
              </label>
              <input
                type="text"
                id="fieldOfStudy"
                name="fieldOfStudy"
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={(e) => setFieldOfStudy(e.target.value)}
              />
            </div>
            <br />
            <div className="font-bold lg:w-[35.5rem]">
              <label htmlFor="university" className="block">
                University *
              </label>
              <input
                type="text"
                id="university"
                name="university"
                className="w-full border border-gray-300 rounded px-3 py-2"
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className=" flex-col p-12 -mt-10 lg:-ml-6">
          <p className=" font-bold">
            Have you previously participated in any other programs at FabLab or
            KLab? *
          </p>{" "}
          <br />
          <input
            type="radio"
            id="pparticipated"
            name="pparticipated"
            onChange={(e) => setParticipated(e.target.value)}
            value="Yes"
          />
          <label for="age1"> Yes</label>
          <br />
          <input
            type="radio"
            id="pparticipated"
            name="pparticipated"
            onChange={(e) => setParticipated(e.target.value)}
            value="No"
          />
          <label for="pparticipated"> No</label>
        </div>
        <div>
          <div className="mb-4 p-12 -mt-16 ">
            <label htmlFor="businessIdea" className="block font-bold lg:-ml-5">
              Please describe your innovation solution in 200 words.*
            </label>
            <br />
            <textarea
              id="businessIdea"
              required
              className=" lg:w-full w-[20rem] -ml-5 border border-gray-300 rounded px-3 py-2"
              onChange={(e) => setInnovation(e.target.value)}
            />
          </div>

          <div className=" p-12 lg:-mt-20 -mt-24  ">
            <label htmlFor="businessIdea" className="block font-bold lg:-ml-5">
              Upload your business idea *
            </label>
            <br />
            <textarea
              id="businessIdea"
              required
              className="lg:w-full w-[20rem] -ml-5 border border-gray-300 rounded px-3 py-2"
              onChange={(e) => setIdea(e.target.value)}
            />
          </div>

          <div className=" p-12 font-bold -mt-16">
            <label
              htmlFor="uploadLocation"
              className=" justify-center lg:-ml-5"
            >
              Upload your file *
            </label>
            <br /> <br />
            <input
              type="file"
              id="uploadLocation"
              required
              className=" lg:w-full w-[20rem] -ml-5 border border-gray-300 rounded px-3 py-2"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
        </div>
        <div className=" p-12 -mt-16 lg:-ml-6">
          <p className=" font-bold lg:ml-1">
            I consent my data to be used by KLab and FabLab to get updates about
            any program, events and other opportunities *
          </p>
          <br />
          <input
            type="radio"
            id="consent"
            onChange={(e) => {
              setConsent(e.target.value);
            }}
            name="consent"
            value="Yes"
          />
          <label for="consent"> Yes</label>
          <br />
          <input
            type="radio"
            id="consent"
            onChange={(e) => {
              setConsent(e.target.value);
            }}
            name="age"
            value="consent"
          />
          <label for="consent"> No</label>
          <br />
        </div>

        <div className=" p-1 bg-blue-900 text-white hover:bg-black w-56 h-10 lg:ml-80 ml-16 text-center font-bold justify-evenly -mt-5">
          <button
            type="submit"
            className="hover:text-white "
            onClick={postEvent} disabled={disabled}
            
          >
            {isLoading ? "Submitting..." : "Submit your application"}
          </button>
        </div>
      </div>
      <br /> <br />
    </div>
  );
};

export default EventRegister;
