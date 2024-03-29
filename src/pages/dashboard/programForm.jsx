import React from "react";

// components

import CardSettings from "../../components/Cards/CardSettings.jsx";
import CardProfile from "../../components/Cards/CardProfile.jsx";

export default function ProgramForm() {
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="w-full  mt-[10rem] px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}
