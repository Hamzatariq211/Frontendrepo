import React from 'react';
import flutter from './../assets/images/flutter.png';
import html5 from './../assets/images/html5.png';
import css3 from './../assets/images/css3.png';
import c1 from './../assets/images/c1.png';
import c2 from './../assets/images/c2.png';
import python from './../assets/images/python.png';
import swift from './../assets/images/swift.png';
import java from './../assets/images/java.png';
import ai from './../assets/images/ai.jpg';
import code from './../assets/images/code.jpg';
import machine from './../assets/images/machine.jpg';

function Deliver() {
  return (
    <div className="relative bg-gray-100 p-4 sm:p-6 lg:p-10 overflow-hidden">
      {/* Half-circle behind the heading */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-3/4 h-1/2 bg-[#EAE8F4] rounded-t-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4"></div>
      </div>
      
      <div className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mb-4 sm:mb-6 lg:mb-10 relative z-10">
        Code. Build. Deliver.
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div
          className="bg-gray-800 rounded-full p-4 sm:p-6 lg:p-8 text-white transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden flex flex-col justify-center items-center"
          style={{
            width: '100%', // Adjust to control the oval's width
            height: '200px', // Adjust to control the oval's height
            backgroundImage: 'url(/path-to-your-background-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold mb-3 sm:mb-4 lg:mb-6 relative z-10">Our Work</h2>
          <p className="mb-2 sm:mb-3 lg:mb-4 text-base sm:text-lg lg:text-xl text-center relative z-10">Your vision, our code.</p>
          <span className="text-4xl sm:text-5xl lg:text-6xl relative z-10">&lt;/&gt;</span>
        </div>
        <div
          className="bg-gray-800 rounded-full p-4 sm:p-6 lg:p-8 text-white transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden flex flex-col justify-center items-center"
          style={{
            width: '100%', // Adjust to control the oval's width
            height: '200px', // Adjust to control the oval's height
            backgroundImage: 'url(/path-to-your-background-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold mb-3 sm:mb-4 lg:mb-6 relative z-10">Services</h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <img src={c1} alt="Service icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" />
            <img src={c2} alt="Service icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" />
            <img src={flutter} alt="Service icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" />
            <img src={html5} alt="Service icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" />
            <img src={css3} alt="Service icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" />
            <img src={python} alt="Service icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" />
            <img src={swift} alt="Service icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" />
            <img src={java} alt="Service icon" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover" />
          </div>
        </div>
        <div
          className="bg-gray-800 rounded-full p-4 sm:p-6 lg:p-8 text-white transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden flex flex-col justify-center items-center"
          style={{
            width: '100%', // Adjust to control the oval's width
            height: '200px', // Adjust to control the oval's height
            backgroundImage: 'url(/path-to-your-background-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold mb-3 sm:mb-4 lg:mb-6 relative z-10">About Us</h2>
          <p className="mb-2 sm:mb-3 lg:mb-4 text-base sm:text-lg lg:text-xl text-center relative z-10">From humble beginnings in 2023, we've grown into a leading software house.</p>
        </div>
      </div>
      <div className="mt-4 sm:mt-6 lg:mt-10 text-center">
        <a
          href="#"
          className="inline-block px-4 py-2 bg-blue-600 text-white font-bold text-sm sm:text-base lg:text-lg rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          View All
        </a>
        {/* You can replace `href="#"` with the actual link to your view-all page */}
      </div>
      <div className="mt-4 sm:mt-6 lg:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-300 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <img
              src={code}
              alt="Computer vision"
              className="w-36 h-24 sm:w-32 sm:h-32 lg:w-60 lg:h-40 object-cover rounded-full relative z-10"
            />
            <p className="mt-2 text-center text-gray-700 text-xs sm:text-sm lg:text-base relative z-10">
              "Computer vision allows computers to 'see' and interpret images and video."
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-300 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <img
              src={ai}
              alt="Artificial intelligence"
              className="w-36 h-24 sm:w-32 sm:h-32 lg:w-60 lg:h-40 object-cover rounded-full relative z-10"
            />
            <p className="mt-2 text-center text-gray-700 text-xs sm:text-sm lg:text-base relative z-10">
              "AI empowers machines to learn, reason, and make decisions like a human, transforming data into intelligent actions."
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-300 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <img
              src={machine}
              alt="Machine learning"
              className="w-36 h-24 sm:w-32 sm:h-32 lg:w-60 lg:h-40 object-cover rounded-full relative z-10"
            />
            <p className="mt-2 text-center text-gray-700 text-xs sm:text-sm lg:text-base relative z-10">
              "Machine learning enables systems to learn from data and improve their performance over time without being explicitly programmed."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deliver;
