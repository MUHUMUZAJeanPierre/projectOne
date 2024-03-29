import React from "react";

// components

import CardProfile from "../../components/Cards/CardProfile.jsx";
import MachineCardSettings from "../../components/Cards/MachineCardSettings.jsx";

export default function AddMachineForm() {
  return (
    <>
      <div className="flex flex-wrap  ">
        <div className="w-full px-4 pt-[10rem]">
          <MachineCardSettings />
        </div>
        {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
}
