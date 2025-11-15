
import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;

    const food_name = form.food_name.value.trim();
    const food_image = form.food_image.value.trim();
    const food_quantity = form.food_quantity.value.trim();
    const pickup_location = form.pickup_location.value.trim();
    
    const expire_date = form.expire_date.value;
    const additional_notes = form.additional_notes.value.trim();

    //  Validation check
    if (!food_name || !food_image || !food_quantity || !pickup_location || !expire_date) {
      return Swal.fire("Error", "Please fill all required fields!", "error");
    }

    const newFood = {
      food_name,
      food_image,
      food_quantity,
      pickup_location,
      expire_date,
      additional_notes,
      donator_name: user?.displayName,
      donator_email: user?.email,
      donator_image: user?.photoURL,
      food_status: "Available", // default status
      createdAt: new Date(),
    };

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: "Success!",
            text: "Food added successfully!",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          form.reset();
        } else {
          Swal.fire("Error", "Failed to add food.", "error");
        }
      })
      .catch(() => Swal.fire("Error", "Server error occurred!", "error"));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-5 text-center">Add New Food</h2>
      <form onSubmit={handleAddFood} className="space-y-4">
        <input type="text" name="food_name" placeholder="Food Name" className="border p-2 w-full rounded-md" required />
        <input type="text" name="food_image" placeholder="Image URL (imgbb link)" className="border p-2 w-full rounded-md" required />
        <input type="text" name="food_quantity" placeholder="e.g. Serves 3 people" className="border p-2 w-full rounded-md" required />
        <input type="text" name="pickup_location" placeholder="Pickup Location" className="border p-2 w-full rounded-md" required />
        <input type="date" name="expire_date" className="border p-2 w-full rounded-md" required />
        <textarea name="additional_notes" placeholder="Additional Notes" className="border p-2 w-full rounded-md"></textarea>

        <button type="submit" className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
