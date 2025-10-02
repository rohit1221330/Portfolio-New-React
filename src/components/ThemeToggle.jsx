// src/components/ThemeToggle.jsx

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  // Initialize state from localStorage or system preference
  const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  // Use the saved theme if it exists, otherwise default to 'dark'
  return savedTheme || 'dark';
});

  // Effect to apply the theme class to <html> and save to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-400 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;