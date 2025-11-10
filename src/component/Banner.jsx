import React from 'react';

const Banner = () => {
  return (
    <div
  className="hero w-100% h-100"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/Ld7R172W/f3.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold"> Food Sharing Community
(PlateShare)</h1>
      <p className="mb-5">
     PlateShare — A vibrant food sharing community where people connect to reduce food waste and help others. Share surplus meals, discover local food donations, and make every plate count. Together, we create kindness through food and community.
      </p>
      <button className="btn btn-primary">Views All Foods</button>
    </div>
  </div>
</div>
  );
};

export default Banner;