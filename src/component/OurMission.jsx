import React from 'react';

const OurMission = () => {
  return (
   <section className="py-16 bg-green-100 dark:bg-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-300">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          We aim to build a hunger-free community by reducing food waste and connecting people through kindness.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold text-green-600">🍽️ 1200+</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Meals Donated</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold text-green-600">800+</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Families Served</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold text-green-600">300+</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Active Donors</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold text-green-600">15+</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Cities Connected</p>
        </div>
      </div>
    </section>

  );
};

export default OurMission;