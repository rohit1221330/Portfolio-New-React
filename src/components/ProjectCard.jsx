// src/components/ProjectCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ 
        y: -10,
        boxShadow: "0px 20px 30px -10px rgba(147, 51, 234, 0.3)", // Purple glow
        transition: { duration: 0.3 } 
      }}
      className="flex flex-col h-full overflow-hidden bg-white border border-gray-200 shadow-lg group dark:bg-gray-900/50 rounded-2xl dark:border-white/10"
    >
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        
        <p className="flex-grow mt-2 text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full dark:text-purple-300 dark:bg-purple-900/50">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 font-semibold text-purple-600 transition-colors dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-200"
          aria-label={`View project: ${project.title}`}
        >
          View Project 
          <FaExternalLinkAlt 
            size={14} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;