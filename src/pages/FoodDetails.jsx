import React from 'react';
import { useLoaderData } from 'react-router'; 
const FoodDetails = () => {
  const data = useLoaderData();
  const food = data.result;
  console.log(food);

  return (
    <div className='flex justify-center items-center'>
      <div>
        <img src={food.food_image} alt={food.food_name} className='w-64 rounded-lg' />
      </div>
      <div className='ml-6'>
        <h2 className='text-2xl font-bold'>{food.food_name}</h2>
        <p className='text-gray-600'>{food.food_quantity}</p>
        <p className='text-gray-500'>{food.pickup_location}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
