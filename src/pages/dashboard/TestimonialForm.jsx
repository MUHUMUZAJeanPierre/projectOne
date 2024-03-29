import React from "react";

// components

import CardSettings from "../../components/Cards/CardSettings.jsx";
import CardProfile from "../../components/Cards/CardProfile.jsx";

export default function ProgramForm() {
  return (
    <>
      <div className="flex flex-wrap  ">
        <div className="w-full  lg:w-8/12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}
