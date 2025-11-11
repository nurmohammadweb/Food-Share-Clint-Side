import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddFood = () => {
  const { user } = use(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();

    const formData = {
      food_name: e.target.name.value,
      food_image:e.target.image.value,
      food_quantity:e.target.quantity.value,
      pickup_location:e.target.pickup.value,
      expire_date:e.target.date.value,
      additional_notes:e.target.description.value,
      
      donator_name: user.displayName,
      donator_email: user.email,
      donator_image: user?.photoURL || "/default-avatar.png"

      
    }
    fetch('http://localhost:3000/foods', {
      method: 'POST',
      headers: {
       'content-type': "application/json",
      },
      body: JSON.stringify(formData)

    })
    .then(res => res.json())
     .then(data => {
         console.log(data)
      })
      .catch(err=> {
      console.log(err)
    })
  }


  return (
    <div className="hero bg-base-200">
     
  <div className="hero-content flex-col lg:flex-row-reverse">
   
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
           <h1 className='text-center text-2xl p-2 font-bold'>
      Add Food
      </h1>
      <div className="card-body">
            <form onSubmit={handleAddFood}>
              <fieldset className="fieldset">
              
              {/* Name */}
          <label className="label">Food Name</label>
              <input type="name"  name='name' className="input" placeholder="Name" />
              
           
                   
                {/* Photo URL */}
            <label className="label">Food URL</label>
            <input
              name="image"
              type="text"
              className="input"
              placeholder="image URL"
            />
                   
                {/*Food Quantity */}
            <label className="label">Food Quantity</label>
            <input
              name="quantity"
              type="text"
              className="input"
              placeholder="Serves ?? people"
            />
                {/* Pickup Location */}
            <label className="label">Pickup Location</label>
            <input
              name="pickup"
              type="text"
              className="input"
              placeholder="Pickup Location"
            />
                {/*  expire_date */}
            <label className="label"> Expire Date</label>
            <input
              name="date"
              type="text"
              className="input"
              placeholder="year-month-day"
            />
                {/*  */}
            <label className="label">Description</label>
            <input
              name="description"
              type="text"
              className="input"
              placeholder="Description"
            />
        
       
          <button type='submit' value='input' className="btn btn-neutral mt-4">Add Food</button>
        </fieldset>
            </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default AddFood;