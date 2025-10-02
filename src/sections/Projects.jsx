// src/sections/Projects.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants/Index';
import ProjectCard from '../components/ProjectCard';

const projectCategories = ['All', 'Full Stack', 'Frontend']; // Define your categories

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 overflow-hidden bg-gray-100 dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl">
        
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">My Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">A selection of my work. Click to filter.</p>
          <div className="w-24 h-1 mx-auto mt-4 bg-purple-500 rounded"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === category 
                ? 'bg-purple-600 text-white' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;