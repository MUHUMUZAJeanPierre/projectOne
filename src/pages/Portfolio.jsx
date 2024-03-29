import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import axios from "axios";
import { Circles } from "react-loader-spinner";


const Portfolio = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  


  console.log(photos);
  const fetchPictures = () => {
    setIsLoading(true)
    axios({
      method: "GET",
      url: "https://fablab-backend-api.onrender.com/portfolio/getAll",
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        let source = [];
        response.data.data.map((item) => {
          source.push({
            src: item.portfolioImages[0],
            width: 500,
            height: randomHeight(),
          });
        });
        setPhotos(source);
        setIsLoading(false)

        console.log(response.data.data);

        // toast.success(response.data.message);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.message);
      });
  };

  useEffect(() => {
    fetchPictures();
  }, []);

  const randomHeight = (height) => {
    height = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;

    console.log(height, "height");
    return height;
  };

  return (
    <div className="relative">
      <div className="fabPortfolio -z-10 bg-cover bg-center relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-52  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold uppercase mt-[-7rem]  w-100 h-16 text-6xl mt-4">
                Fablab portfolio
              </h1>
            </span>
          </div>
        </div>
      </div>

      <div className=" lg:px-[5rem] lg:py-[2rem]">
        {isLoading && (
          <div className="  justify-center h-[50vh] items-center flex ">
            <Circles
              height="90"
              width="80"
              color="rgb(96, 165, 250)"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass="flex flex-row  justify-center"
              visible={true}
            />
          </div>
        )}
        <PhotoAlbum
          renderPhoto={(data) => {
            console.log(data);
            return (
              <div className="p-1">
                <img src={data.photo.src}></img>
              </div>
            );
          }}
          layout="columns"
          columns={4}
          width={5}
          photos={photos}
        />
      </div>
    </div>
  );
};

export default Portfolio;
