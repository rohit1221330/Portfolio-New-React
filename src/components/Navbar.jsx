// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants/Index'; // Ensure path is correct
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- SCROLL & ACTIVE SECTION LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect Active Section
      let current = 'Home';
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 300;
          if (window.scrollY >= sectionTop) {
            current = link.title;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- LOCK SCROLL WHEN MENU IS OPEN ---
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // --- SMOOTH SCROLL HANDLER ---
  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* ==========================================================
          THE FLOATING CAPSULE NAVBAR
      ========================================================== */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 top-0  transition-all duration-500 items-center ease-in-out ${scrolled
            ? 'top-2 w-[100%]  items-center rounded-full'
            : 'top-0 w-full rounded-none items-center py-6  border-transparent'
          }`}
      >

        <div
          className={`relative flex items-center justify-between px-6 transition-all duration-500 ${scrolled
              ? 'bg-black/60 backdrop-blur-xl border border-white/10 rounded-full py-3 pr-3 pl-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'bg-transparent py-2 max-w-7xl mx-auto'
            }`}
        >
          {/* --- LOGO --- */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 overflow-hidden transition-colors border rounded-full border-white/20 group-hover:border-purple-500">
              {/* Placeholder for Logo Image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-[10px] font-bold text-white">
                RD
              </div>
              {/* Agar image use karni ho toh niche wala uncomment karein */}
              {/* <img src="/Rohit.png" alt="Logo" className="object-cover w-full h-full" /> */}
            </div>
            <span className="text-sm font-bold tracking-wider text-white uppercase transition-colors group-hover:text-purple-400">
              Rohit<span className="hidden md:inline"> Dhyani</span>
            </span>
          </a>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex items-center gap-4">

            {/* CTA Button (Hidden on very small screens to save space) */}
            <a
              href="#contact"
              className={`hidden md:flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest text-black uppercase transition-all bg-white rounded-full hover:bg-purple-400 hover:text-white ${scrolled ? 'h-10' : ''}`}
            >
              Let's Talk
            </a>

            {/* MENU TOGGLE (Magnetic Feel) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(true)}
              className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all group ${scrolled ? 'bg-black/50' : ''}`}
            >
              <div className="flex flex-col gap-[5px] group-hover:gap-[4px] items-end transition-all">
                <span className="w-5 h-[2px] bg-current group-hover:w-5 transition-all"></span>
                <span className="w-3 h-[2px] bg-current group-hover:w-5 transition-all"></span>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>


      {/* ==========================================================
          FULL SCREEN CINEMATIC MENU OVERLAY
      ========================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col justify-center items-center overflow-hidden"
          >
            {/* Texture/Noise Overlay for Film Grain Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Background Blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[150px]" />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute z-50 flex items-center gap-3 transition-colors top-8 right-8 md:top-12 md:right-12 group text-white/50 hover:text-white"
            >
              <span className="uppercase text-xs tracking-[0.2em] font-bold hidden md:block">Close</span>
              <div className="flex items-center justify-center w-12 h-12 transition-all border rounded-full border-white/10 group-hover:bg-white group-hover:text-black">
                <FiX size={24} />
              </div>
            </button>


            {/* MENU LINKS */}
            <ul className="relative z-10 flex flex-col items-center gap-4 md:gap-8">
              {navLinks.map((link, index) => {
                const isActive = active === link.title;

                return (
                  <motion.li
                    key={link.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    className="overflow-hidden"
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => handleNavClick(link.id)}
                      className="relative block text-center group"
                    >
                      {/* The Text */}
                      <span
                        className={`block text-5xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-500 ${isActive
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200'
                            : 'text-white/20 hover:text-white'
                          }`}
                      >
                        {link.title}
                      </span>

                      {/* Hover Reveal Image/Text (Optional fancy effect) */}
                      <span className={`absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] font-normal text-purple-400 opacity-0 transition-all duration-300 transform translate-y-2 ${isActive ? 'opacity-100 translate-y-0' : 'group-hover:opacity-100 group-hover:translate-y-0'}`}>
                        0{index + 1}
                      </span>
                    </a>
                  </motion.li>
                )
              })}
            </ul>

            {/* MENU FOOTER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute left-0 w-full text-center bottom-10"
            >
              <div className="flex flex-col items-center gap-2">
                <p className="text-xs tracking-widest text-gray-500 uppercase">Available for Freelance</p>
                <a href="mailto:your-email@example.com" className="text-white transition-colors hover:text-purple-400">
                  your-email@example.com
                </a>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;