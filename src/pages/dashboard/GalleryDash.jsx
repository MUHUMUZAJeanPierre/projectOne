import React from 'react'

import CardTableGallery from '../../components/Cards/CardTableGallery';

const GalleryDash = () => {
  return (
    
      <>
        <div className="flex flex-wrap mt-4 pt-[10rem]">
          <div className="w-full mb-12 px-4">
            <CardTableGallery cardHeading="Gallery" addButton="Add Picture" />
          </div>
        </div>
      </>
    
  );
}

export default GalleryDash