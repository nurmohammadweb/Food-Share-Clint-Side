import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router';

const TopSixFoods = ({ foods }) => {
  

  return (
    <div className="py-10">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        Top Food Quantity Foods
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        {foods.map((food) => (
          <div
            key={food._id}
            className="card bg-base-100 shadow-md rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-80 mx-auto"
          >
            <figure className="px-6 pt-6">
              <img
                src={food.food_image || "https://via.placeholder.com/400"}
                alt={food.food_name}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <p className="font-semibold">Food Name: {food.food_name}</p>
              <p>Quantity: {food.food_quantity}</p>
              <p>Expire Date: {food.expire_date}</p>
              <p className="text-sm text-gray-600">
                Notes: {food.additional_notes || "No notes provided"}
              </p>
              <div className="card-actions mt-3 w-full">
                <Link to={`/fooddetails/${food._id}`}>
                  <button className="btn btn-primary w-full hover:scale-105 transition-transform duration-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/availablefoods">
          <button className="bg-amber-300 hover:bg-amber-400 px-6 py-2 rounded-2xl font-bold flex justify-center items-center gap-3 mx-auto transition transform hover:scale-105 duration-200">
            Show All <FaArrowAltCircleRight className="text-lg" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopSixFoods;
