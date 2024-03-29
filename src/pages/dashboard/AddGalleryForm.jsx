import React from "react";

// components

import GalleryCardSettings from "../../components/Cards/GalleryCardSettings.jsx";
import CardProfile from "../../components/Cards/CardProfile.jsx";

export default function AddGalleryForm() {
  return (
    <>
      <div className="flex flex-wrap  ">
        <div className="w-full px-4 pt-[10rem]">
          <GalleryCardSettings />
        </div>
        {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
} 
