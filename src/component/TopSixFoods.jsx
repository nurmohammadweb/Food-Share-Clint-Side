import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

import { Link } from 'react-router';

const TopSixFoods = ({ foods }) => {
  const { _id } = foods;
  console.log(foods);
  
  return (
    <Link to="/availablefoods">
    
       <div className=''>
      <div>
        <h1 className='text-center text-5xl font-bold'> Top Food Quantity Foods </h1>
      </div>
      <div className='grid grid-cols-3 items-center gap-10 w-10/12 mx-auto my-5'>
        
      {
        foods.map((food) => <div key={_id} className="card bg-base-100 w-96 shadow-sm h-96">
  <figure className="px-10 pt-10">
    <img
      src={food.food_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
   <p>Food Name : {food.food_name}</p>
   <p>Food Quantity : {food.food_quantity}</p>
   <p>Expire Date : {food.expire_date}</p>
   <p> Additional Notes : {food.additional_notes}</p>
  
    <div className="card-actions">
              <Link to="/availablefoods">
                <button className="btn btn-primary">Views All Foods</button>
              </Link>
    </div>
  </div>
</div>)
      }
      
      
     
      </div>
      <div className='text-center mb-5'>
        <Link to={"/availablefoods"}>
         <button  className='text-center bg-amber-300 p-2 w-2xs rounded-2xl'><span className='flex justify-center items-center gap-3 font-bold'>Show All <FaArrowAltCircleRight /></span>
</button>
        </Link>
        </div>
   </div>

    </Link>
    
  );
};

export default TopSixFoods;