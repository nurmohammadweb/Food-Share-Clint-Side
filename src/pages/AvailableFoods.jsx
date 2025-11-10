import React from 'react';
import AllFoods from '../component/AllFoods';
import { useLoaderData } from 'react-router';

const AvailableFoods = () => {

    const foods = useLoaderData();
  console.log(foods);
   
  return (
    <div>
      <AllFoods foods={foods}></AllFoods>
    </div>
  );
};

export default AvailableFoods;