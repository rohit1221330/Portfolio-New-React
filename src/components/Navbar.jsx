// src/components/Navbar.jsx

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [bubble, setBubble] = useState({ left: 0, width: 0, opacity: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef(null);
  const linkRefs = useRef([]);

  // Handle scroll effects for navbar background and active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = 'Home';
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = link.title;
        }
      });
      setActive(currentSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial active state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update bubble position when active link changes or on resize
  useEffect(() => {
    const updateBubble = () => {
      const activeLinkIndex = navLinks.findIndex(link => link.title === active);
      const activeLinkNode = linkRefs.current[activeLinkIndex];
      if (activeLinkNode && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const targetRect = activeLinkNode.getBoundingClientRect();
        setBubble({
          left: targetRect.left - navRect.left,
          width: targetRect.width,
          opacity: 1,
        });
      }
    };
    updateBubble(); // Update on active change
    window.addEventListener('resize', updateBubble); // Update on resize
    return () => window.removeEventListener('resize', updateBubble);
  }, [active]);

  const handleMouseEnter = (e) => {
    const targetRect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    setBubble({
      left: targetRect.left - navRect.left,
      width: targetRect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    // Revert to the active link's position
    const activeLinkIndex = navLinks.findIndex(link => link.title === active);
    const activeLinkNode = linkRefs.current[activeLinkIndex];
    if (activeLinkNode && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const targetRect = activeLinkNode.getBoundingClientRect();
      setBubble({
        left: targetRect.left - navRect.left,
        width: targetRect.width,
        opacity: 1,
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 z-50 flex items-center justify-center w-full transition-all duration-300 ${scrolled ? 'mt-0' : 'mt-4 sm:mt-8'}`}
      >
        <div className="relative flex items-center justify-between gap-32 p-2 mx-4 border rounded-full shadow-lg bg-white/5 dark:bg-black/10 backdrop-blur-xl border-white/10">
          <a href="#" className="pl-4 pr-2 text-2xl font-bold text-gray-900 dark:text-white" onClick={() => window.scrollTo(0, 0)}>RD</a>
          
          <ul ref={navRef} className="relative items-center hidden gap-2 sm:flex" onMouseLeave={handleMouseLeave}>
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                ref={el => (linkRefs.current[index] = el)}
                className={`relative px-4 py-2 text-lg font-medium transition-colors cursor-pointer ${active === link.title ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                onMouseEnter={handleMouseEnter}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <motion.div
              className="absolute h-full rounded-full bg-white/80 dark:bg-white/10"
              style={{ zIndex: -1 }}
              animate={bubble}
              // THIS IS THE ONLY LINE THAT CHANGED
              transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
            />
          </ul>

          {/* Hamburger Menu Button */}
          <div className="pr-2 sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-900 dark:text-white">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-xl sm:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => setIsMobileMenuOpen(false)}>
                  <a href={`#${link.id}`} className="text-3xl font-bold text-gray-900 dark:text-white">{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;