import React from "react";

// components

 
import CardProfile from "../../components/Cards/CardProfile.jsx";
import TestimonyCardSettings from "../../components/Cards/TestimonyCardSettings.jsx";

export default function AddTestimonyForm() {
  return (
    <>
      <div className="flex flex-wrap  ">
        <div className="w-full px-4 pt-[10rem]">
          <TestimonyCardSettings />
        </div>
        {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
}
