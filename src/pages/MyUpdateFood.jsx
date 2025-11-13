
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const MyUpdateFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null); // initially null
  const [loading, setLoading] = useState(true);

  // Fetch food data
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/foods/${id}`)
      .then(res => res.json())
      .then(data => {
        setFood(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedFood = {
      food_name: form.food_name.value,
      food_image: form.food_image.value,
      food_quantity: form.food_quantity.value,
      pickup_location: form.pickup_location.value,
      expire_date: form.expire_date.value,
      additional_notes: form.additional_notes.value,
    };

    fetch(`http://localhost:3000/foods/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your food info has been updated.", "success");
          setFood(updatedFood); // update local state
        } else {
          Swal.fire("Oops!", "Nothing was updated.", "info");
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire("Error!", "Something went wrong.", "error");
      });
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!food) return <div className="text-center mt-10">Food not found.</div>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Food</h2>
      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          name="food_name"
          defaultValue={food.food_name}
          placeholder="Food Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="food_image"
          defaultValue={food.food_image}
          placeholder="Food Image URL"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="food_quantity"
          defaultValue={food.food_quantity}
          placeholder="Food Quantity"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="pickup_location"
          defaultValue={food.pickup_location}
          placeholder="Pickup Location"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          name="expire_date"
          defaultValue={food.expire_date}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="additional_notes"
          defaultValue={food.additional_notes}
          placeholder="Additional Notes"
          className="w-full border p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
        >
          Update Food
        </button>
      </form>
    </div>
  );
};

export default MyUpdateFood;
