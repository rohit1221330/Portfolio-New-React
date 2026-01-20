// src/sections/Projects.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants/Index'; 
import { FiGithub, FiExternalLink, FiFolder, FiChevronDown } from 'react-icons/fi';

const projectCategories = [
  'All',
  'Freelance',
  'Service Websites',
  'Web Applications'
];

// --- ANIMATION VARIANTS ---
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

// --- INTERNAL CARD COMPONENT ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative w-full bg-[#0a0a0a] border border-white/5 rounded-xl md:rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-all duration-300"
    >
      <div className="relative w-full overflow-hidden h-36 md:h-60">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent opacity-90" />
        <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] font-bold tracking-widest text-white bg-purple-600/90 backdrop-blur-md rounded-full uppercase shadow-lg">
          {project.category}
        </div>
      </div>

      <div className="relative z-10 p-3 -mt-8 md:p-6 md:-mt-12">
        <div className="flex justify-end gap-2 mb-2 md:gap-3 md:mb-4">
          <a 
            href={project.gitUrl}
            target="_blank" 
            rel="noreferrer"
            className="p-2 text-white transition-all border rounded-full shadow-lg md:p-3 bg-black/50 backdrop-blur-md border-white/10 hover:bg-purple-600 hover:border-purple-600"
            title="View Code"
          >
            <FiGithub size={14} className="md:w-[18px] md:h-[18px]" />
          </a>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 text-white transition-all border rounded-full shadow-lg md:p-3 bg-black/50 backdrop-blur-md border-white/10 hover:bg-white hover:text-black hover:border-white"
            title="Live Demo"
          >
            <FiExternalLink size={14} className="md:w-[18px] md:h-[18px]" />
          </a>
        </div>

        <h3 className="mb-1 text-sm font-bold text-white transition-colors md:mb-2 md:text-xl group-hover:text-purple-400 line-clamp-1 md:line-clamp-none">
          {project.title}
        </h3>

        <p className="hidden mb-6 text-sm leading-relaxed text-gray-400 md:block line-clamp-3">
          {project.description}
        </p>

        <div className="flex-wrap hidden gap-2 md:flex">
          {project.tags && project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 text-xs font-medium text-gray-400 border rounded-full bg-white/5 border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};


// --- MAIN SECTION ---
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  // STATE: Control visible count
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    // --- LOGIC CHANGE HERE ---
    // Mobile (< 768px): Show 4 projects (2 Rows x 2 Columns)
    // Desktop (>= 768px): Show 3 projects (1 Row x 3 Columns)
    const isMobile = window.innerWidth < 768;
    const initialCount = isMobile ? 4 : 3;
    
    setVisibleCount(initialCount);

    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const showMoreProjects = () => {
    // Load 6 more (Works well for both: 3 rows on mobile, 2 rows on desktop)
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="projects" className="relative py-16 overflow-hidden font-sans bg-black md:py-24">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-900/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-900/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>

      <div className="relative z-10 px-4 mx-auto md:px-6 max-w-7xl">
        
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 mb-10 md:gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3 md:mb-4"
            >
               <span className="h-[1px] w-8 md:w-12 bg-purple-500"></span>
               <span className="text-purple-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                 PORTFOLIO
               </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Works</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base"
          >
            A selection of real-world projects built for service businesses, 
            focused on <b>performance</b> and <b>lead generation.</b>
          </motion.p>
        </div>


        {/* FILTER TABS */}
        <div className="flex justify-start pb-4 mb-8 overflow-x-auto md:mb-12 md:justify-center md:pb-0 scrollbar-hide">
          <div className="flex p-1 border rounded-full bg-white/5 border-white/10 backdrop-blur-md">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-3 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  activeFilter === category 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeFilter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-purple-800"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </div>


        {/* PROJECTS GRID */}
        <motion.div 
          key={activeFilter} 
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-3 md:gap-8 lg:grid-cols-3"
        >
          {filteredProjects.slice(0, visibleCount).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
           <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }}
             className="py-12 text-center md:py-20"
           >
              <div className="inline-flex p-3 mb-3 text-gray-500 rounded-full md:p-4 md:mb-4 bg-white/5">
                <FiFolder size={20} className="md:w-6 md:h-6" />
              </div>
              <p className="text-sm text-gray-400 md:text-base">No projects found in this category.</p>
           </motion.div>
        )}

        {/* --- VIEW MORE BUTTON --- */}
        {visibleCount < filteredProjects.length && (
            <div className="mt-8 text-center md:mt-16">
                <button 
                    onClick={showMoreProjects}
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white transition-all border rounded-full group md:text-sm border-white/10 hover:bg-white/10 hover:border-purple-500/50"
                >
                    View More Projects
                    <FiChevronDown className="transition-transform group-hover:translate-y-1" />
                </button>
            </div>
        )}

      </div>
    </section>
  );
};

export default Projects;