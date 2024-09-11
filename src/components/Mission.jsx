import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Import necessary Framer Motion features
import Web from './../assets/images/Web.png';

function Mission() {
  const ref = useRef(null); // Create a ref to track the visibility of the section
  const isInView = useInView(ref, { triggerOnce: false }); // Trigger animation every time it's in view

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div ref={ref} className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">

          {/* Animated Text Section */}
          <motion.div
            className="flex-1 lg:mr-8 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -100 }}   // Initial state before scrolling into view
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Reset animation when out of view
            transition={{ duration: 0.8 }}      // Transition duration
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Fusion Flare Technologies, we innovate at the intersection of
              creativity and technology. Our mission is to transform industries with
              expert coding, data science, and web/app development, crafting digital
              solutions that are both impactful and visionary.
            </p>
            <motion.button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              whileHover={{ scale: 1.05 }}  // Scale effect on hover
              whileTap={{ scale: 0.95 }}    // Slight scale down on tap
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Animated Image Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}   // Initial state before scrolling into view
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}  // Reset animation when out of view
            transition={{ duration: 0.8 }}        // Transition duration
          >
            <img
              src={Web}
              alt="Coding and design"
              className="w-full h-96 object-cover rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
