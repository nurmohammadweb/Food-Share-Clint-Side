import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/foods?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setFoods(data));
  }, [user?.email]);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${id}`, { method: "DELETE" })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              setFoods(prev => prev.filter(f => f._id !== id));
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {foods.map(food => (
        <div
          key={food._id}
          className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all"
        >
          <img
            src={food.food_image || "https://via.placeholder.com/300"}
            alt={food.food_name}
            className="w-full h-48 object-cover rounded-xl mb-3"
          />
          <h2 className="text-xl font-bold">{food.food_name}</h2>
          <p className="text-gray-600">{food.food_quantity}</p>
          <p className="text-gray-600">{food.pickup_location}</p>
          <p className="text-gray-500 text-sm mb-3">
            Expire: {food.expire_date}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => window.location.assign(`/update-food/${food._id}`)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(food._id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageMyFoods;
