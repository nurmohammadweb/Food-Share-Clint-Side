import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-6  from-orange-50 to-white">
    
      <div className="max-w-4xl"
       style={{
    backgroundImage:
      "url(https://i.ibb.co.com/vCBs79gw/f3.jpg)",
  }}
      >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 mb-5">
          Food Sharing
        </h1>
        
        <p className="text-white text-sm sm:text-base md:text-lg mb-6 leading-relaxed mt-10">
          PlateShare — A vibrant food sharing community where people connect to reduce food waste and help others. 
          Share surplus meals, discover local food donations, and make every plate count. 
          Together, we create kindness through food and community.
        </p>
        <Link to="/availablefoods">
          <button className="btn btn-primary px-6 py-2 text-sm md:text-base mb-10">
            View All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
