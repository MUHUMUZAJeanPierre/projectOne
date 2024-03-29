import React from "react";

// components

import CardTableEvent from "../../components/Cards/CardTableEvent";

export default function EventsDash() {
  return (
    <>
      <div className="flex flex-wrap pt-[8rem]      ">
        
          <CardTableEvent cardHeading="Events" addButton="Add event" />
        
      </div>
    </>
  );
}
