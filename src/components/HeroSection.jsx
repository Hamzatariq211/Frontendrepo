import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { motion, useInView } from 'framer-motion'; 
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Web from './../assets/images/Web.png';
import Robot from './../assets/images/Robot.png';
import Blog from './../assets/images/Blog.png';
import Neural from './../assets/images/Neural.png';
import TypeformEmbed from './TypeformEmbed';

const slides = [
  {
    image: Web,
    title: 'Innovating the Future',
    subtitle: 'Code by Code',
  },
  {
    image: Robot,
    title: "Building Tomorrow's Tech",
    subtitle: 'One Line at a Time',
  },
  {
    image: Blog,
    title: 'Empowering Ideas',
    subtitle: 'With Expert Solutions',
  },
  {
    image: Neural,
    title: 'Exploring Neural Networks',
    subtitle: 'Advanced AI Solutions',
  }
];

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    appendDots: (dots) => (
      <div className="absolute bottom-5 w-full flex justify-center z-10">
        <ul className="m-0 p-0 list-none flex space-x-2">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        type="button"
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
        aria-label={`Slide ${i + 1}`}
      />
    ),
  };

  return (
    <div className="relative bg-gradient-to-r from-black to-blue-900 h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { triggerOnce: false });

          return (
            <div
              key={index}
              ref={ref} 
              className="flex flex-col md:flex-row items-center justify-between h-full p-4 sm:p-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between w-full h-full p-2 sm:p-4">
                
                {/* Animated Title and Subtitle */}
                <motion.div
                  className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2 p-2 sm:p-4"
                  initial={{ opacity: 0, x: -100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl sm:text-6xl md:text-8xl text-white font-bold mb-4 sm:mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-xl sm:text-2xl md:text-4xl text-white mb-4 sm:mb-6">
                    {slide.subtitle}
                  </p>
                  <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row">
                    
                    {/* Link to About Page */}
                    <Link to="/about">
                      <motion.button
                        className="px-6 sm:px-8 py-3 sm:py-4 mb-2 sm:mb-0 sm:mr-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}    
                      >
                        Learn More
                      </motion.button>
                    </Link>

                    <motion.button
                      onClick={() => setShowForm(true)}
                      className="px-6 sm:px-8 py-3 sm:py-4 mb-2 sm:mb-0 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </motion.div>

                {/* Animated Slide Image */}
                <motion.div
                  className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-auto max-w-md sm:max-w-lg md:max-w-2xl object-contain" 
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </Slider>
      {showForm && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 p-4 md:p-8">
          <TypeformEmbed />
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-5 right-5 text-white text-2xl md:text-3xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
