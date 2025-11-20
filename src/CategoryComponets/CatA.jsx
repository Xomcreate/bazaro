// File: src/CategoryComponets/CatA.jsx
import React from 'react';

function CatA() {
  return (
    <div className="bg-white min-h-[450px] flex flex-col md:flex-row items-center justify-center p-8 md:p-12 lg:p-20 border-b border-gray-200">

      <div className="order-2 md:order-1 w-full md:w-5/12 h-64 md:h-96 rounded-lg shadow-xl mb-8 md:mb-0 md:mr-12">
        <img
          src="https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?w=500"
          alt="Category"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="order-1 md:order-2 max-w-lg text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600 mb-2">
          New Arrivals
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
          The <span className="text-red-600">Essential</span> Collection
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Crafted for those who demand excellence. Explore top-quality items.
        </p>

        <button className="bg-gray-900 text-white py-3 px-10 rounded-full hover:bg-red-600 transition">
          See All Items
        </button>
      </div>

    </div>
  );
}

export default CatA;
