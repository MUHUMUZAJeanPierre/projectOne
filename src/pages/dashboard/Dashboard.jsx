import React from "react";

// components

import CardLineChart from "../../components/Cards/CardLineChart.jsx";
import CardBarChart from "../../components/Cards/CardBarChart.jsx";
import CardPageVisits from "../../components/Cards/CardPageVisits.jsx";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.jsx";
import HeaderStats from "../../components/Headers/HeaderStats.jsx";

 

export default function Dashboard() {
  return (
    <>
      <div className="pt-[5rem]">
        <HeaderStats />
      </div>

      <div className="flex flex-wrap ">
        <div className="w-full xl:w-1/2 px-4 h-[65vh]">
          <CardBarChart />
        </div>
        <div className="w-full   h-[65vh]   lg:w-1/2 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
    </>
  );
}
