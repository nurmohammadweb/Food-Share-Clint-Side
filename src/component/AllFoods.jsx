import React from 'react';


const AllFoods = ({foods}) => {
  console.log(foods);

  return (
    <div>
      <h1 className='text-5xl text-center p-5 font-bold'>All Foods</h1>
        
         {/* Search */}
      <div className='text-center'>
              
      <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Foods" />
    </label>
     </div>
    

      <div className='grid grid-cols-3 items-center gap-10 w-10/12 mx-auto my-5'>
        
    
    
      {
        foods.map((food) => <div key='_id' className="card bg-base-100 w-96 shadow-sm h-96">
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
      <button className="btn btn-primary">Views Details</button>
    </div>
  </div>
</div>)
      }
    </div>
    </div>
  );
};

export default AllFoods;