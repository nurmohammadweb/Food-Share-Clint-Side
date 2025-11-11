import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className='text-center'>
      <div className="max-w">
      <h1 className="mb-5 text-4xl font-bold text-red-500 mt-4"> Food Sharing Community
(PlateShare)</h1>
      <p className="mb-5 text-black px-40">
     PlateShare — A vibrant food sharing community where people connect to reduce food waste and help others. Share surplus meals, discover local food donations, and make every plate count. Together, we create kindness through food and community.
      </p>
      <Link to="/availablefoods"><button className="btn btn-primary items-center mb-4">Views All Foods</button></Link>
    </div>
   </div>
  );
};

export default Banner;