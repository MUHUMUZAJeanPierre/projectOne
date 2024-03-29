import React from "react";

// components

import CardSettings from "../../components/Cards/CardSettings.jsx";
import CardProfile from "../../components/Cards/CardProfile.jsx";
import CardSettingsFabClass from "../../components/Cards/CardSettingsFabClass.jsx";

export default function FabClassForm() {
  return (
    <>
      <div className="flex flex-wrap  ">
        <div className="w-full  mt-[10rem] px-4">
          <CardSettingsFabClass />
        </div>
      </div>
    </>
  );
}
