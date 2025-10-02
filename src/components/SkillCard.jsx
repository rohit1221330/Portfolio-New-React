// src/components/SkillCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900/50 rounded-xl shadow-lg gap-4 
                 transition-all duration-300 hover:!scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      <div className="text-5xl text-purple-500 transition-transform duration-300 group-hover:scale-110">
        {skill.icon}
      </div>
      <p className="font-semibold text-center text-gray-700 dark:text-gray-300">
        {skill.title}
      </p>
    </motion.div>
  );
};

export default SkillCard;