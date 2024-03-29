import React from 'react'
import { Link } from 'react-router-dom';
const HomeDropdown = ({closeDrop}) => {
  return (
    <>
      <div
        className="absolute left-[58rem] shadow-lg scale-100  transition-all top-[4rem] text-white pt-2  duration-300   border-t-2 border-t-blue-600 px-4 space-y-6 ease-in-out flex flex-col z-20"
        onMouseLeave={closeDrop}
      >
        <Link to="ourServices">Our services</Link>
        <Link to="machine">Machines</Link>
        <Link to="portfolio">Portfolio</Link>

        
        
      </div>
    </>
  );
}

export default HomeDropdown