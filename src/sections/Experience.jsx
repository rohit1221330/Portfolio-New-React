// src/sections/Experience.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../constants/Index';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);

  // Animation variants for the staggered content reveal
  const detailsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const detailsItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section id="experience" className="py-20 overflow-hidden bg-gray-100 dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl">

        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">Work Experience</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">My professional journey and accomplishments.</p>
          <div className="w-24 h-1 mx-auto mt-4 bg-purple-500 rounded"></div>
        </motion.div>

        {/* --- THIS IS THE KEY LAYOUT CHANGE --- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-16">
          
          {/* Left Column (1/4 width on desktop): Job Titles (Tabs) */}
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              {experiences.map((job) => (
                <button
                  key={job.title}
                  onClick={() => setSelectedJob(job)}
                  className={`relative w-full p-4 text-left text-lg whitespace-nowrap transition-colors duration-300 border-l-4
                    ${job.title === selectedJob.title ? 'border-purple-500 text-purple-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-purple-500'}
                  `}
                >
                  {job.title === selectedJob.title && (
                    <motion.div
                      className="absolute inset-y-0 left-0 w-full rounded-r-md bg-purple-500/10"
                      layoutId="activeJobIndicator"
                    />
                  )}
                  <span className="relative z-10">{job.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (3/4 width on desktop): Job Details Card */}
          <div className="relative w-full min-h-[350px] bg-white dark:bg-gray-900/50 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-white/10 lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedJob.title}
                variants={detailsContainerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                <motion.h3 variants={detailsItemVariants} className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedJob.title} @ <span className="text-purple-500">{selectedJob.company_name}</span>
                </motion.h3>
                <motion.p variants={detailsItemVariants} className="mt-1 text-gray-500 dark:text-gray-400">{selectedJob.date}</motion.p>
                <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside dark:text-gray-300">
                  {experiences.find(e => e.title === selectedJob.title).points.map((point, index) => (
                    <motion.li key={index} variants={detailsItemVariants} className="leading-relaxed">
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;