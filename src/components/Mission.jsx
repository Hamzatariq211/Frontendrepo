import React from 'react';
import Web from './../assets/images/Web.png';

function Mission() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Fusion Flare Technologies, we innovate at the intersection of
              creativity and technology. Our mission is to transform industries with
              expert coding, data science, and web/app development, crafting digital
              solutions that are both impactful and visionary.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Learn More
            </button>
          </div>
          <div className="flex-1">
            <img
              src={Web}
              alt="Coding and design"
              className="w-full h-96 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
