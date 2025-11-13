
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) {
      setRequests([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`http://localhost:3000/foodRequests?userEmail=${encodeURIComponent(user.email)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch requests");
        return res.json();
      })
      .then((data) => {
        setRequests(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        setError("Request problem");
      })
      .finally(() => setLoading(false));
  }, [user?.email]);

  const handleCancel = async (requestId) => {
    const ok = await Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No",
    });

    if (!ok.isConfirmed) return;

    try {
      const res = await fetch(`http://localhost:3000/foodRequests/${requestId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");

      setRequests((prev) => prev.filter((r) => r._id !== requestId && r.id !== requestId));
      Swal.fire("Cancelled!", "Your request has been cancelled.", "success");
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Request cancellation failed.", "error");
    }
  };

  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">only user</h2>
        <Link to="/login" className="px-4 py-2 bg-indigo-600 text-white rounded">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Food Requests</h1>

      {loading && (
        <div className="flex items-center justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-indigo-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {!loading && requests.length === 0 && (
        <div className="text-center py-12">
          <p className="mb-4"> Food Request Not found</p>
          <Link to="/available-foods" className="px-4 py-2 bg-indigo-600 text-white rounded">
            Available Foods 
          </Link>
        </div>
      )}

      {!loading && requests.length > 0 && (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Food</th>
                <th className="px-4 py-3 text-left">Donator</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Contact</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Requested At</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, idx) => {
                const id = req._id ?? req.id ?? idx;
                const status = req.status ?? "pending";
                const foodName = req.food?.food_name ?? req.food_name ?? "—";
                const donator = req.food?.donator_name ?? req.donator_name ?? req.donatorEmail ?? "—";
                const createdAt = req.createdAt ? new Date(req.createdAt).toLocaleString() : "—";

                return (
                  <tr key={id} className="border-t">
                    <td className="px-4 py-3">{idx + 1}</td>
                    <td className="px-4 py-3">{foodName}</td>
                    <td className="px-4 py-3">{donator}</td>
                    <td className="px-4 py-3">{req.location ?? req.pickup_location ?? "—"}</td>
                    <td className="px-4 py-3">{req.contact ?? req.contact_no ?? "—"}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          status === "accepted"
                            ? "bg-green-100 text-green-800"
                            : status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{createdAt}</td>
                    <td className="px-4 py-3 flex gap-2">
                      {status === "pending" && (
                        <button
                          onClick={() => handleCancel(id)}
                          className="px-3 py-1 rounded bg-red-600 text-white text-sm"
                        >
                          Cancel
                        </button>
                      )}
                      {req.food?._id && (
                        <Link
                          to={`/food/${req.food._id}`}
                          className="px-3 py-1 rounded bg-indigo-600 text-white text-sm"
                        >
                          View
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequests;
