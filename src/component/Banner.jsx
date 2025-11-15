import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
  <div
  className="hero min-h-1/2"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/vCBs79gw/f3.jpg)",
  }}
>
   <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">   Food Sharing</h1>
      <p className="mb-5">
        PlateShare — A vibrant food sharing community where people connect to reduce food waste and help others. 
          Share surplus meals, discover local food donations, and make every plate count. 
          Together, we create kindness through food and communityi.
      </p>
      <Link to="/availablefoods">
          <button className="btn btn-primary px-6 py-2 text-sm md:text-base mb-10">
            View All Foods
          </button>
        </Link>
    </div>
  </div>
</div>
  );
};

export default Banner;
