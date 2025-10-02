// src/components/Footer.jsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 overflow-hidden bg-gray-100 border-t border-gray-200 dark:bg-black dark:border-white/10">
      <div className="px-4 mx-auto text-center text-gray-600 max-w-7xl dark:text-gray-400">
        
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center gap-6">
          <a href="#" className="text-3xl font-bold text-gray-900 dark:text-white" onClick={() => window.scrollTo(0, 0)}>
            RD
          </a>
          <p className="max-w-md text-lg">
            Let's build something amazing together. Get in touch to discuss your next project.
          </p>
          
          {/* Social Media Links with new hover effect */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/rohit1221330" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-600 transition-all duration-300 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-600 hover:text-white hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rohit-dhyani-51b25b32a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-600 transition-all duration-300 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-600 hover:text-white hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://x.com/RohitDh12987207" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-600 transition-all duration-300 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-600 hover:text-white hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://www.instagram.com/_dhyani_jii_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 text-gray-600 transition-all duration-300 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-600 hover:text-white hover:scale-110"
              aria-label="Twitter"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Sub-Footer */}
        <div className="pt-8 mt-10 border-t border-gray-200 dark:border-white/10">
          <p className="text-sm text-gray-500">
            © {currentYear} Rohit Dhyani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;