import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-6  from-orange-50 to-white">
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-5">
          Food Sharing Community (PlateShare)
        </h1>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
          PlateShare — A vibrant food sharing community where people connect to reduce food waste and help others. 
          Share surplus meals, discover local food donations, and make every plate count. 
          Together, we create kindness through food and community.
        </p>
        <Link to="/availablefoods">
          <button className="btn btn-primary px-6 py-2 text-sm md:text-base">
            View All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
