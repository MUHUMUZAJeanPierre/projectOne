import React from "react";
import CardTableMachineCardSettings from "../../components/Cards/CardTableMachine";


const MachineDash = () => {
  return (
    <>
      <div className="flex flex-wrap mt-4 pt-[10rem]  ">
         
          <CardTableMachineCardSettings  cardHeading ="Machines" addButton="Add machine"/>
        
      </div>
    </>
  );
};

export default MachineDash;
