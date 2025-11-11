import React, { useState } from 'react';
import { Link } from 'react-router';


const AllFoods = ({ foods }) => {
  const { _id } = foods
  console.log(foods)


  const [search, setSearch] = useState('');

  //  const filteredPlants = plants.filter((plant) =>
  //   plant.plantName.toLowerCase().includes(search)
  // );

  const Searchfilter = foods.filter((food) =>
    food.food_name.toLowerCase().includes(search)
  );


  


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
  <input type="search" required placeholder="Search Foods" value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
    </label>
     </div>
    

      <div className='grid grid-cols-3 items-center gap-10 w-10/12 mx-auto my-5'>
        
    
    
      {
        Searchfilter.map((food) => <div key={_id} className="card bg-base-100 w-96 shadow-sm h-96">
  <figure className="px-10 pt-10">
    <img
      src={food.food_image}
      alt={food.food_name}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
   <p>Food Name : {food.food_name}</p>
   <p>Food Quantity : {food.food_quantity}</p>
   <p>Expire Date : {food.expire_date}</p>
   <p> Additional Notes : {food.additional_notes}</p>
  
    <div className="card-actions">
    <Link to={`/fooddetails/${food._id}`}>  <button className="btn btn-primary">Views Details</button></Link>
    </div>
  </div>
</div>)
      }
    </div>
    </div>
  );
};

export default AllFoods;