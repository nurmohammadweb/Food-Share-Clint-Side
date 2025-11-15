import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import RequestSubmit from "./RequestSubmit";

const FoodDetails = () => {
  const data = useLoaderData();
  const food = data?.result || data;
  const { user } = useContext(AuthContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(false);

  useEffect(() => {
    if (user?.email === food?.donator_email) {
      setLoadingRequests(true);
      fetch(`https://food-share-server-ten.vercel.app/requests?ownerEmail=${food.donator_email}&foodId=${food._id}`)
        .then((res) => res.json())
        .then((data) => setRequests(Array.isArray(data) ? data : []))
        .catch(() => setRequests([]))
        .finally(() => setLoadingRequests(false));
    }
  }, [food, user]);

  const handleStatusChange = async (requestId, status) => {
    try {
      const res = await fetch(`https://food-share-server-ten.vercel.app/requests/${requestId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) throw new Error();

      setRequests((prev) =>
        prev.map((r) => (r._id === requestId ? { ...r, status } : r))
      );
    } catch {
      alert("Failed to update request. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg border w-full">
        <img
          src={food.food_image || "https://via.placeholder.com/400"}
          alt={food.food_name || "Food"}
          className="w-full h-60 sm:h-64 md:h-72 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{food.food_name}</h2>
        <div className="flex items-center gap-2 mb-3">
          <img
            src={food.donator_image || "https://via.placeholder.com/40"}
            alt="donator"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-gray-700 font-medium">{food.donator_name}</p>
        </div>
        <div className="space-y-2 text-gray-600 mb-4">
          <p>Quantity: {food.food_quantity}</p>
          <p>Pickup Location: {food.pickup_location}</p>
          <p>Expire Date: {food.expire_date}</p>
          <p>Notes: {food.additional_notes}</p>
        </div>
        {user?.email !== food.donator_email && (
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
          >
            Request Food
          </button>
        )}
      </div>

      <RequestSubmit modalOpen={modalOpen} setModalOpen={setModalOpen} food={food} />
 


      {user?.email === food.donator_email && (
        <div className="mt-10 w-full max-w-4xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Food Requests</h3>
          {loadingRequests ? (
            <div className="flex justify-center items-center py-6">
              <div className="animate-spin h-8 w-8 border-4 border-gray-300 border-t-blue-600 rounded-full"></div>
            </div>
          ) : requests.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="border p-2">Photo</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Location</th>
                    <th className="border p-2">Reason</th>
                    <th className="border p-2">Contact</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((r) => (
                    <tr key={r._id} className="text-center hover:bg-gray-50">
                      <td className="border p-2">
                        <img
                          src={r.requester_photo || "https://via.placeholder.com/40"}
                          alt="req"
                          className="w-8 h-8 rounded-full mx-auto"
                        />
                      </td>
                      <td className="border p-2 font-medium">{r.requester_name}</td>
                      <td className="border p-2">{r.requester_email}</td>
                      <td className="border p-2">{r.location}</td>
                      <td className="border p-2">{r.why_need}</td>
                      <td className="border p-2">{r.contact_no}</td>
                      <td className="border p-2 capitalize font-semibold">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            r.status === "accepted"
                              ? "bg-green-100 text-green-700"
                              : r.status === "rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {r.status || "pending"}
                        </span>
                      </td>
                      <td className="border p-2 flex flex-col sm:flex-row gap-2 justify-center">
                        {r.status === "pending" ? (
                          <>
                            <button
                              onClick={() => handleStatusChange(r._id, "accepted")}
                              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleStatusChange(r._id, "rejected")}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <span className="text-gray-500 text-sm">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-600 py-6">
              No requests have been made for this food yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
