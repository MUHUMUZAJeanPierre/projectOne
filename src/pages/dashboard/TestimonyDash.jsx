import React from 'react'
import CardTableTestimony from '../../components/Cards/CardTableTestimony';

const TestimonyDash = () => {
  return (
    
      <>
        <div className="flex flex-wrap mt-4 pt-[10rem]">
          <div className="w-full mb-12 px-4">
            <CardTableTestimony cardHeading="Testimonies" addButton="Add Testimonies" />
          </div>
        </div>
      </>
    
  );
}

export default TestimonyDash