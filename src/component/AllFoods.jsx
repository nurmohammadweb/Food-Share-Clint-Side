import React, { useState } from 'react';
import { Link } from 'react-router';

const AllFoods = ({ foods }) => {
  const [search, setSearch] = useState('');

  const Searchfilter = foods.filter((food) =>
    food.food_name.toLowerCase().includes(search)
  );

  return (
    <div className="w-11/12 mx-auto py-8">
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-6">All Foods</h1>

      <div className="flex justify-center mb-8">
        <label className="input w-full max-w-md flex items-center gap-2 border rounded-lg px-4 py-2 shadow-sm">
          <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search Foods"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="flex-1 outline-none bg-transparent"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {Searchfilter.map((food) => (
          <div key={food._id} className="card bg-base-100 w-80 sm:w-96 shadow-md hover:shadow-lg transition duration-300">
            <figure className="px-6 pt-6">
              <img src={food.food_image} alt={food.food_name} className="rounded-xl w-full h-48 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
              <p className="font-semibold">Food Name: {food.food_name}</p>
              <p>Quantity: {food.food_quantity}</p>
              <p>Expire Date: {food.expire_date}</p>
              <p className="text-sm text-gray-600">Notes: {food.additional_notes}</p>
              <div className="card-actions mt-4">
                <Link to={`/fooddetails/${food._id}`}>
                  <button className="btn btn-primary w-full">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
