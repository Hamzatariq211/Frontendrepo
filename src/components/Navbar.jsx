import React, { useState } from "react";
import Logo from "./../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-navbarColor p-4 sm:p-6 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img src={Logo} alt="Company Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-white text-lg font-bold" >
            Fusion Flare Technologies
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex flex-col lg:flex-row lg:space-x-9 ${
            isMenuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <Link to="/" className="block py-2 text-gray-300 hover:text-white">
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-300 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block py-2 text-gray-300 hover:text-white"
          >
            Services
          </Link>
          <Link
            to="/work"
            className="block py-2 text-gray-300 hover:text-white"
          >
            Our Work
          </Link>
          <Link
            to="/blogs/1"
            className="block py-2 text-gray-300 hover:text-white"
          >
            Blogs
          </Link>
          <Link
            to="/privacy"
            className="block py-2 text-gray-300 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-navbarColor z-50 p-4 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="self-end text-gray-300 hover:text-white mb-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="services"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/work"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Our Work
              </Link>
              <Link
                to="/blogs"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Blogs
              </Link>
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
