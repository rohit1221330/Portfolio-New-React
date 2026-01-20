import React from 'react';
import { motion } from 'framer-motion';

const DataAnalystPortfolio = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex items-center justify-center min-h-screen text-white bg-slate-900"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-indigo-400">Data Analyst Portfolio</h1>
        <p className="mt-4 text-xl">Work in Progress...</p>
        <p className="mt-2 text-gray-400">Yahan tumhare Python/SQL projects aayenge.</p>
      </div>
    </motion.div>
  );
};

export default DataAnalystPortfolio;