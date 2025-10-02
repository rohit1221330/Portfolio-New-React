// src/sections/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants/Index';
import SkillCard from '../components/SkillCard';
import { FaCalendarAlt, FaCode } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// A new component for our animated stats
const AnimatedStat = ({ icon, end, suffix, label }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="flex items-center gap-4">
      {icon}
      <div>
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          {inView && <CountUp start={0} end={end} duration={2.5} separator="," />}
          {suffix}
        </h4>
        <p className="text-gray-600 dark:text-gray-400">{label}</p>
      </div>
    </div>
  );
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    // Adjusted vertical padding for mobile
    <section id="about" className="py-16 overflow-hidden bg-gray-100 md:py-20 dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl">
        
        {/* Main Section Header with adjusted margin */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          {/* Adjusted heading size for mobile */}
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl dark:text-white">About Me</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">My journey, my skills, and my passion for development.</p>
          <div className="w-24 h-1 mx-auto mt-4 bg-purple-500 rounded"></div>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Adjusted heading size for mobile */}
            <h3 className="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white">Who I Am</h3>
            <p className="mb-10 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a passionate Frontend Developer with a knack for creating dynamic, user-friendly web applications. With expertise in React.js, Tailwind CSS, and modern JavaScript, I love turning complex problems into beautiful, intuitive designs. I'm a lifelong learner, always eager to embrace new technologies and build amazing things on the web.
            </p>
            
            <div className="flex flex-col gap-8 sm:flex-row">
              <AnimatedStat icon={<FaCalendarAlt className="text-4xl text-purple-500" />} end={2} suffix="+" label="Years of Experience" />
              <AnimatedStat icon={<FaCode className="text-4xl text-purple-500" />} end={15} suffix="+" label="Projects Completed" />
            </div>
          </motion.div>

          {/* Right Column: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Adjusted heading size for mobile */}
            <h3 className="mb-6 text-2xl font-semibold text-gray-900 md:text-3xl dark:text-white">My Technical Toolkit</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              // --- THIS IS THE KEY CHANGE FOR THE SKILLS GRID ---
              className="grid grid-cols-3 gap-4 sm:grid-cols-4"
            >
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;