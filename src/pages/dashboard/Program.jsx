import React from "react";

// components

import CardTable from "../../components/Cards/CardTable";
import { Link } from "react-router-dom";

export default function ProgramDash() {
  return (
    <>
      <div className="flex pt-[10rem]">
         
        
          <CardTable cardHeading="COURSES" addButton="Add courses"  />
        

         
         
      </div>
    </>
  );
}
