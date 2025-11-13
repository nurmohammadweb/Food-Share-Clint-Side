
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import RequestSubmit from "./RequestSubmit";

const FoodDetails = () => {
  const data = useLoaderData();
  const food = data.result;
  const { user } = useContext(AuthContext);

  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  const [requests, setRequests] = useState([]);

  // Load requests (only if current user is the owner)
  useEffect(() => {
    if (user?.email === food.donator_email) {
      fetch(`http://localhost:3000/requests?ownerEmail=${food.donator_email}&foodId=${food._id}`)
        .then(res => res.json())
        .then(data => setRequests(data));
    }
  }, [food, user]);

  

  // Handle Accept / Reject
  const handleStatusChange = async (requestId, status) => {
    const res = await fetch(`http://localhost:3000/requests/${requestId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    if (res.ok) {
      setRequests(prev => prev.map(r => r._id === requestId ? {...r, status} : r));
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4">
      {/* Food Details Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg border w-full">
        <img
          src={food.food_image || "https://via.placeholder.com/400"}
          alt={food.food_name}
          className="w-full h-60 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{food.food_name}</h2>
        <div className="flex items-center gap-2 mb-3">
          <img
            src={food.donator_image || "https://via.placeholder.com/40"}
            alt="donator"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-gray-700">{food.donator_name}</p>
        </div>
        <p className="text-gray-600 mb-2">{food.food_quantity}</p>
        <p className="text-gray-600 mb-2">Pickup: {food.pickup_location}</p>
        <p className="text-gray-600 mb-2">Expire: {food.expire_date}</p>
        <p className="text-gray-700 mb-4">{food.additional_notes}</p>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Request Food
        </button>
      </div>

    <RequestSubmit modalOpen={modalOpen} setModalOpen={setModalOpen}></RequestSubmit>

      {/* Requests Table (Owner Only) */}
      {user?.email === food.donator_email && requests.length > 0 && (
        <div className="mt-10 w-full max-w-4xl">
          <h3 className="text-xl font-bold mb-3">Food Requests</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Photo</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Why Need</th>
                <th className="border p-2">Contact</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(r => (
                <tr key={r._id} className="text-center">
                  <td className="border p-2">
                    <img src={r.requester_photo} alt="req" className="w-8 h-8 rounded-full mx-auto"/>
                  </td>
                  <td className="border p-2">{r.requester_name}</td>
                  <td className="border p-2">{r.requester_email}</td>
                  <td className="border p-2">{r.location}</td>
                  <td className="border p-2">{r.why_need}</td>
                  <td className="border p-2">{r.contact_no}</td>
                  <td className="border p-2">{r.status}</td>
                  <td className="border p-2 flex flex-col gap-1">
                    {r.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleStatusChange(r._id, 'accepted')}
                          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleStatusChange(r._id, 'rejected')}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;

