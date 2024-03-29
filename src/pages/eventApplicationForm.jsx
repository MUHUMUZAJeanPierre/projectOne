import React from 'react'

export default function eventApplicationForm() {
  return (
    <div>
      <div class="bg-Events">
        <div>
          <p class="text-white font-bold text-4xl lg:p-64 absolute  mt-52 lg:ml-36 lg:-mt-6 md:p-48 md:ml-84">
            Event Application Form
          </p>
        </div>
      </div>
      <div className=" lg:w-[70rem] w-full lg:ml-28 bg-slate-100   lg:p-20">
        <div className=" text-center   ">
          <h1 className=" lg:-ml-[38rem] text-4xl text-center font-bold"> Application Form</h1>
        </div>
        <h1 className=" font-bold text-xl p-4 ml-4">
          1. Basic personal information
        </h1>
        <div class="flex flex-col md:flex-row lg:-mt-6 gap-4 p-6 md:p-8">
          <div class="w-full md:w-1/2">
            <label for="fullNames" class="block font-bold">
              Full Names *
            </label>
            <input
              type="text"
              id="fullNames"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
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
            />
          </div>
          <div class="w-full md:w-1/2">
            <label for="phoneNumber" class="block font-bold">
              Phone Number *
            </label>
            <input
              type="text"
              id="phoneNumber"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row -mt-8 lg:-mt-10 gap-4 p-6 md:p-8">
          <div class="w-full md:w-1/2">
            <label for="fullNames" class="block font-bold">
              Address *
            </label>
            <input
              type="text"
              id="fullNames"
              placeholder="Kigali-Rwanda,Nyarugenge,Kimisagara"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div class="w-full md:w-1/2">
            <label for="district" class="font-bold">
              Country *
            </label>
            <select
              id="district"
              name="district"
              class="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="District 0">Select Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo, Democratic Republic of the">
                Congo, Democratic Republic of the
              </option>
              <option value="Congo, Republic of the">
                Congo, Republic of the
              </option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote d'Ivoire">Cote d'Ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Greece">Greece</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-Bissau">Guinea-Bissau</option>
              <option value="Ivory Coast">Ivory Coast (Côte d'Ivoire)</option>
              <option value="Kenya">Kenya</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Mali">Mali</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Namibia">Namibia</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Norway">Norway</option>
              <option value="Rwanda">Rwanda</option>
              <option value="São Tomé and Príncipe">
                São Tomé and Príncipe
              </option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Sudan">South Sudan</option>
              <option value="Sudan">Sudan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Togo">Togo</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Uganda">Uganda</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </div>
        </div>
        <h1 className=" font-bold text-xl p-4 -mt-4 ml-4">
          2. Professional background
        </h1>
        <div class="flex flex-col md:flex-row lg:-mt-6 gap-4 p-6 md:p-8 -mt-4">
          <div class="w-full md:w-1/2">
            <label for="title" class="font-bold">
              Title
            </label>
            <select
              id="title"
              name="title"
              class="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Province 0">Select your title</option>
              <option value="Province 1">Mr</option>
              <option value="Province 2">Mrs</option>
              <option value="Province 3">Miss</option>
              <option value="Province 4">Married</option>
              <option value="Province 5">Devorce</option>
            </select>
          </div>

          <div class="w-full md:w-1/2">
            <label for="JobTitle/position" class="block font-bold">
              Job title/position
            </label>
            <input
              type="text"
              id="JobTitle/position"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div class="w-full md:w-1/2">
            <label for="Company/organization" class="block font-bold">
              Company/organization
            </label>
            <input
              type="text"
              id="Company/organization"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row lg:-mt-10 gap-4 p-6 md:p-8 -mt-6">
          <div class="w-full md:w-1/2">
            <label for="yearsOfExperience" class="font-bold">
              Years of experience
            </label>
            <select
              id="title"
              name="title"
              class="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Province 0">Select Years of experience</option>
              <option value="Province 1">Less than 1 year</option>
              <option value="Province 2">1-3 year</option>
              <option value="Province 3">3-5 year</option>
              <option value="Province 4">More than 5 year</option>
            </select>
          </div>
          <div class="w-full md:w-1/2">
            <label for="githubLink" class="block font-bold">
              Github Link
            </label>
            <input
              type="text"
              id="githubLink"
              placeholder="https://"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div class="w-full md:w-1/2">
            <label for="linkedInLink" class="block font-bold">
              LinkedIn Link
            </label>
            <input
              type="text"
              id="linkedInLink"
              placeholder="https://"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
        <h1 className=" font-bold text-xl p-4 lg:-mt-7 ml-4">
          3. Emergency contact details
        </h1>

        <div class="flex flex-col md:flex-row -mt-4 lg:-mt-8 gap-4 p-6 md:p-8">
          <div class="w-full md:w-1/2">
            <label for="names" class="block font-bold">
              Names
            </label>
            <input
              type="text"
              id="names"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div class="w-full md:w-1/2">
            <label for="email" class="block font-bold">
              Email
            </label>
            <input
              type="text"
              id="email"
              required
              class="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div class="w-full md:w-1/2">
            <label for="tel" class="block font-bold">
              Phone Number
            </label>
            <input
              type="text"
              id="tel"
              required
              class=" border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>
        </div>
        <h1 className=" font-bold text-xl p-4 lg:-mt-7 ml-4">
          4. What your expectation in this event
        </h1>
        <div className="mb-4 p-12 -mt-10 lg:-mt-16">
          <label
            htmlFor="businessIdea"
            className=" lg:mt-6 -ml-4 font-bold lg:-ml-5"
          >
            Please describe your expection in 500 words.*
          </label>
          <br />
          <textarea
            id="businessIdea"
            placeholder='Text Here'
            required
            className=" lg:-mt-6 lg:w-[56rem] lg:h-[7rem] w-[21rem] -ml-5 border border-gray-300 rounded cursor-default h-[8rem]"
          />
        </div>
        <div className=" lg:-mt-10  text-center lg:ml-60 -ml-36 w-[35rem] ">
          <a href="/">
            <button className="text-2xl lg:text-xl lg:w-36 -mt-[4rem] lg:-mt-[8rem] text-white  lg:ml-4 ml-28 bg-blue-900 w-36 h-12 ">
              Submit
            </button>
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}
