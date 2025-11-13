import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const RequestSubmit = ({modalOpen,setModalOpen}) => {
 const data = useLoaderData();
  const food = data.result;
  const { user } = useContext(AuthContext);


  // Handle Request Form Submit
  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login to request food!");

   const requestData = {
  food_id: food._id,
  food_name: food.food_name,
  food_owner_email: food.donator_email,
  donator_name: food.donator_name,
  requester_name: user.displayName,
  requester_email: user.email,
  requester_photo: user.photoURL,
  location: e.target.location.value,
  why_need: e.target.why_need.value,
  contact_no: e.target.contact_no.value
};



    const res = await fetch("http://localhost:3000/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData)
    });

    const dataRes = await res.json();
    if (dataRes.success) {
      alert("Request submitted!");
      e.target.reset();
      setModalOpen(false);
    }
  };

  return (
    <div>
       {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Request Food</h2>
            <form onSubmit={handleRequestSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="location"
                placeholder="Your Location"
                className="border p-2 rounded"
                required
              />
              <textarea
                name="why_need"
                placeholder="Why you need this food"
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="contact_no"
                placeholder="Contact Number"
                className="border p-2 rounded"
                required
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    

  </div>
       );
};

export default RequestSubmit;