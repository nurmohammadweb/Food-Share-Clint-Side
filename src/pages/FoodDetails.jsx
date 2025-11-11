// import React from 'react';
// import { useLoaderData } from 'react-router'; 
// const FoodDetails = () => {
//   const data = useLoaderData();
//   const food = data.result;
//   console.log(food);

//   return (
//     <div className='flex justify-center items-center'>
//       <div>
//         <img src={food.food_image} alt={food.food_name} className='w-64 rounded-lg' />
//       </div>
//       <div className='ml-6'>
//         <h2 className='text-2xl font-bold'>{food.food_name}</h2>
//         <p className='text-gray-600'>{food.food_quantity}</p>
//         <p className='text-gray-500'>{food.pickup_location}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodDetails;


import React from "react";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const data = useLoaderData();
   const food = data.result;
   console.log(food);


  return (
    <div className="flex justify-center py-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg border">
        <img
          src={food.food_image || "https://via.placeholder.com/400"}
          alt={food.food_name}
          className="w-full h-60 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{food.food_name}</h2>
        <div className="flex items-center gap-2 mb-3">
          <img
            src={food.donator_image || "https://via.placeholder.com/40"}
            alt="donator"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-gray-700">{food.donator_name}</p>
        </div>
        <p className="text-gray-600 mb-2">{food.food_quantity}</p>
        <p className="text-gray-600 mb-2">Pickup: {food.pickup_location}</p>
        <p className="text-gray-600 mb-2">Expire: {food.expire_date}</p>
        <p className="text-gray-700 mb-4">{food.additional_notes}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Request Food
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
