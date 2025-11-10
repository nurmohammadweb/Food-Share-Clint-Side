import React from 'react';

const PlateShareWork = () => {
  return (
   <section className="py-16 bg-white dark:bg-gray-900">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-300">
          How It Works
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          PlateShare makes it easy to share food with the community. Just follow these 3 simple steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow">
          <div className="text-5xl mb-3">🍲</div>
          <h3 className="text-xl font-semibold mb-2">Post Food</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Share your extra meals with details like quantity, location, and expiry date.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow">
          <div className="text-5xl mb-3">🔍</div>
          <h3 className="text-xl font-semibold mb-2">Find Food</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Browse available foods and request the ones you need for yourself or your family.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-xl text-center shadow">
          <div className="text-5xl mb-3">🤝</div>
          <h3 className="text-xl font-semibold mb-2">Collect Food</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Once your request is accepted, pick up the food at the donor’s chosen location.
          </p>
        </div>
      </div>
    </section>


  );
};

export default PlateShareWork;