import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://food-share-server-ten.vercel.app/foods?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This food item will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://food-share-server-ten.vercel.app/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your food item has been removed.", "success");
              setFoods(foods.filter((food) => food._id !== id));
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Manage My Foods</h2>
      {foods.length === 0 ? (
        <p className="text-center text-gray-500 text-base sm:text-lg">No foods added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foods.map((food) => (
            <div
              key={food._id}
              className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-300"
            >
              <img
                src={food.food_image}
                alt={food.food_name}
                className="w-full h-44 sm:h-48 md:h-52 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold mb-1">{food.food_name}</h3>
              <p className="text-sm text-gray-600">Quantity: {food.food_quantity}</p>
              <p className="text-sm text-gray-600">Location: {food.pickup_location}</p>
              <p className="text-sm text-gray-600">
                Status: <span className="font-medium">{food.food_status}</span>
              </p>
              <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
                <Link
                  to={`/update-food/${food._id}`}
                  className="bg-blue-600 text-white text-center px-3 py-1.5 rounded-md hover:bg-blue-700 w-full sm:w-auto"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(food._id)}
                  className="bg-red-600 text-white text-center px-3 py-1.5 rounded-md hover:bg-red-700 w-full sm:w-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
