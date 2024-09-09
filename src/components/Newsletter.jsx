import React from 'react';

function Newsletter() {
  return (
    <div className="bg-gradient-to-r from-black to-blue-900 p-4 rounded-lg shadow-lg flex justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Subscribe Newsletters
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1 mb-2 sm:mb-0 sm:mr-4"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
