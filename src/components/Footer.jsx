// src/components/Footer.jsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/rohit1221330", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rohit-dhyani-51b25b32a/", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://x.com/RohitDh12987207", label: "Twitter" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/_dhyani_jii_/", label: "Instagram" }
];



const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 font-sans text-sm bg-black border-t border-white/10">
      <div className="px-6 mx-auto max-w-7xl">
        
        <div className="flex flex-col items-center justify-around gap-6 md:flex-row">
          
          {/* 1. LEFT: BRAND & COPYRIGHT */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-lg font-bold tracking-tight text-white transition-colors hover:text-purple-400"
            >
              ROHIT DHYANI
            </button>
            <p className="mt-1 text-xs text-gray-500">
              © {currentYear} • Built with React & Tailwind
            </p>
          </div>

         

          {/* 3. RIGHT: SOCIAL ICONS */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 transition-colors hover:text-white hover:scale-110"
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;