// src/components/EntryAnimation.jsx

import React from 'react';
import { motion } from 'framer-motion';

const EntryAnimation = ({ onEnter }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
    >
      {/* Subtle animated glow circles */}
      <motion.div
        className="absolute bg-purple-700 rounded-full opacity-30 w-72 h-72"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: '25%', left: '15%', filter: 'blur(120px)' }}
      />
      <motion.div
        className="absolute bg-indigo-600 rounded-full opacity-25 w-80 h-80"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: '20%', right: '10%', filter: 'blur(140px)' }}
      />

      {/* Welcome Text */}
      <motion.h1
        className="mb-10 text-4xl font-extrabold text-gray-200 select-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Enter Button */}
      <motion.button
        onClick={onEnter}
        className="relative px-12 py-4 font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-indigo-500/60 focus:outline-none focus:ring-4 focus:ring-indigo-400"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8 } }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px #7c3aed' }}
        whileTap={{ scale: 0.95 }}
      >
        Enter
      </motion.button>
    </motion.div>
  );
};

export default EntryAnimation;
