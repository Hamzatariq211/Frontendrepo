import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="text-gray-600 text-center sm:text-left mb-4 sm:mb-0">
            <a href="#" className="hover:text-gray-800 mx-2">About us</a>
            <span className="mx-2 hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-800 mx-2">Privacy Policy</a>
            <span className="mx-2 hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-800 mx-2">Explore</a>
            <span className="mx-2 hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-800 mx-2">Terms of Service</a>
          </div>
          <div className="flex space-x-4 text-gray-600 text-center">
            <a href="#" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-blue-900">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-4">
          &copy; 2023 FusionFlareTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
