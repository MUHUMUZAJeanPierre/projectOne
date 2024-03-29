import React from "react";

// components

import CardSettings from "../../components/Cards/CardSettings.jsx";
import CardProfile from "../../components/Cards/CardProfile.jsx";

export default function MachineForm() {
  return (
    <>
      <div className="flex flex-wrap  ">
        <div className="w-full  lg:w-8/12 px-4">
          <CardSettings />
        </div>
        {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
}
