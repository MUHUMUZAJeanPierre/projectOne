

const NavFooter = () => {
  return (
    <footer className="mainFooter">
      <div className=" container pt-2">
        <div className=" md:flex md:justify-evenly border-b md:gap-4 border-solid border-white pb-9 pl-4 sm:pl-8">
          <div className="">
            <a href="">
              <div className="lg:w-[19rem]">
                <img
                  src="https://i.ibb.co/vXX29yT/10001.png"
                  alt="Logo Image"
                  className="lx:w-14 md:72 mt-6 lg:w-96 h-auto p-5"
                />
              </div>
            </a>
            {/* </Link> */}
          </div>

          <div className=" sm:flex justify-between sm:w-full md:gap-2 mt-5  pr-32">
            <div className="mb-4 sm:mb-12 lg:mb-12 ">
              <span>
                <ul className="">
                  <li className="">
                    <h2 className="headingTwo">Our company</h2>
                  </li>
                  <li className="">
                    <a href="" className="anchorTag">
                      About Us
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="anchorTag">
                      Get a Quote
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="anchorTag">
                      Our Service
                    </a>
                  </li>
                  <li className="">
                    <a href="" className="anchorTag">
                      Fab Class
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <div className="mb-4 sm:mb-8 lg:mb-12">
              {/* <h2>Get In Touch</h2> */}
              <span>
                <ul>
                  <li>
                    <h2 className="headingTwo">Get In Touch</h2>
                  </li>
                  <li>
                    <a href="" className="anchorTag">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="" className="anchorTag">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="" className="anchorTag">
                      Instagram
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <div className="mb-4 sm:mb-8 lg:mb-12">
              <ul>
                <li>
                  <h2 className="headingTwo">Contact Info</h2>
                </li>
                <li>
                  <p className="text-white text-base font-sans font-light no-underline block transition-all duration-300 ease-in-out leading-6 pt-2">
                    44 KG 548 St, Kigali
                  </p>
                </li>
                <li>
                  <p className="text-white text-base font-sans  font-light no-underline block transition-all duration-300 ease-in-out leading-6 pt-2">
                    +250-789-276-080
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between pt-8 pb-8 pl-4 sm:pl-8">
          <div className="pl-9">
            <p className="text-white font-sans font-medium">
              Copyright © 2022 FABLAB RWANDA
            </p>
          </div>
          <div className="pr-20">
            <p className="text-white font-sans">Designed By Klab</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NavFooter