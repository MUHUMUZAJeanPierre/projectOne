import React from 'react'
import { Link } from 'react-router-dom';
const SignUpDropdown = ({closeDrop}) => {
  return (
    <>
      <div
        className="absolute left-[55rem] top-[4rem] text-white pt-2 transition duration-300   border-t-2 border-t-blue-600 px-4 space-y-6 ease-in-out flex flex-col"
        onMouseLeave={closeDrop}
      >
        <Link to="ourServices">Sign Up</Link>
        <Link to="machine">Log in</Link>
        <Link to="portfolio">Dashboard</Link>

        
        
      </div>
    </>
  );
}

export default HomeDropdown