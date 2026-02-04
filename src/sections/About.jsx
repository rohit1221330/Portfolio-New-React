// src/sections/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
// Icons
import { FaReact, FaNodeJs, FaFigma, FaLaptopCode,  } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';
import { FiArrowUpRight, FiCheckCircle, FiTrendingUp, FiLayout, FiGlobe } from 'react-icons/fi';

// --- ICONS DATA ---
const techStack = [
  { icon: <FaReact />, color: "text-cyan-400" },
  { icon: <SiNextdotjs />, color: "text-white" },
  { icon: <SiTailwindcss />, color: "text-cyan-300" },
  { icon: <SiTypescript />, color: "text-blue-400" },
  { icon: <FaNodeJs />, color: "text-green-500" },
  { icon: <SiMongodb />, color: "text-green-400" },
  { icon: <FaFigma />, color: "text-purple-400" },
  { icon: <SiPostgresql />, color: "text-blue-300" },
];

const About = () => {
  return (
    <section id="about" className="relative pt-24 pb-24 font-sans text-white bg-black">

      <div className="flex flex-col gap-12 px-6 mx-auto max-w-7xl lg:flex-row lg:gap-20">

        {/* =========================================
            LEFT: STICKY IMAGE
        ========================================= */}
        <motion.div 
          className="w-full lg:w-[35%] h-fit lg:sticky lg:top-28 self-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <div className="relative overflow-hidden shadow-2xl rounded-2xl border border-white/10 bg-[#050505] aspect-[3/4] group">

            {/* Accent Line */}
            <div className="absolute top-0 left-0 z-20 w-1 h-full bg-gradient-to-b from-purple-600 via-blue-500 to-purple-600"></div>

            {/* Image */}
            <img
              src="public\New .jpeg"  // APNI PHOTO KA PATH
              alt="Profile"
              className="object-cover w-full h-full transition-all duration-700 grayscale group-hover:grayscale-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* Floating Badge */}
           <motion.div 
                 className="absolute z-20 bottom-6 left-6"
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5 }}
               >
                  <div className="flex items-center gap-3 p-4 transition-all border backdrop-blur-md bg-white/10 border-white/10 rounded-xl hover:bg-white/20">
                    <div className="p-3 text-white bg-blue-600 rounded-lg">
                        <FiGlobe size={20} />
                    </div>
                    <div>
                        {/* CHANGED TEXT HERE */}
                        <h3 className="text-lg font-bold leading-none text-white">Freelance Dev</h3>
                        <p className="text-[10px] uppercase tracking-widest text-gray-300 mt-1">Remote & Scalable</p>
                    </div>
                  </div>
               </motion.div>
          </div>

          {/* Tech Stack Grid */}
          <motion.div 
            className="p-6 mt-6 border rounded-2xl border-white/5 bg-white/[0.02]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">My Toolkit</h4>
            <div className="flex flex-wrap gap-4">
              {techStack.map((tech, i) => (
                <span key={i} className={`text-2xl ${tech.color} hover:scale-110 transition-transform`}>{tech.icon}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>


        {/* =========================================
            RIGHT: SCROLLING CONTENT
        ========================================= */}
        <div className="w-full lg:w-[65%] flex flex-col gap-10">

          {/* --- 1. TAG --- */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-purple-500"></span>
              <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
                Why Clients Work With Me
              </span>
            </motion.div>


            {/* --- 2. HEADLINE --- */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              I turn{" "}
              <span className="relative inline-block text-gray-500">
                <span className="relative z-10">websites</span>
                <span className="absolute left-0 w-full h-1 bg-purple-500 top-1/2 -rotate-2"></span>
              </span>{" "}
              into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                conversion-focused assets
              </span>
            </motion.h2>

          </div>

          {/* --- 3. PROBLEM VS SOLUTION (Text Content) --- */}
          <div className="flex flex-col gap-8">

            {/* Problem Statement */}
            <motion.div 
              className="pl-6 border-l-2 border-white/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-lg leading-relaxed text-gray-400">
                Most <span className="text-gray-300">service businesses</span> lose potential leads because their websites look fine
                but <span className="text-gray-200 border-b border-white/20">
                  don’t guide users to take action
                </span>.
              </p>
            </motion.div>

            {/* Solution Statement */}
            <motion.div 
              className="pl-6 border-l-2 border-purple-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg leading-relaxed text-gray-300">
                I focus on building{" "}
                <span className="font-medium text-white">conversion-focused</span>,{" "}
                <span className="font-medium text-white">mobile-first websites</span>{" "}
                designed around real user behavior —{" "}
                <span className="text-purple-400">clear structure</span>,{" "}
                <span className="text-purple-400">strong CTAs</span>, and{" "}
                <span className="text-purple-400">fast performance</span>{" "}
                that turn visitors into{" "}
                <span className="font-medium text-white">real inquiries</span>.
              </p>
            </motion.div>

          </div>


          {/* --- 4. FEATURE CARDS --- */}
          <div className="grid grid-cols-2 gap-5 mt-4 md:grid-cols-2">
            {/* Card 1 */}
            <motion.div 
              className="p-6 transition-all border group rounded-2xl bg-white/5 border-white/5 hover:border-blue-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="mb-4 text-blue-400">
                <FiTrendingUp className="text-3xl transition-transform group-hover:-translate-y-1" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white md:text-xl">Conversion-Driven Builds</h3>
              <p className="leading-relaxed text-gray-400 text-[11px] md:text-sm ">
                Clean frontend architecture focused on speed, clarity, and lead flow.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="p-6 transition-all border group rounded-2xl bg-white/5 border-white/5 hover:border-purple-500/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="mb-4 text-purple-400">
                <FiLayout className="text-3xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white md:text-xl">Business-First Design</h3>
              <p className="leading-relaxed text-gray-400 text-[11px] md:text-sm">
                Every section is designed to guide users toward action, not just visuals.
              </p>
            </motion.div>
          </div>

          {/* --- 5. FOOTER STATUS (Inspiration Style) --- */}
          <motion.div 
            className="flex flex-row justify-between gap-4 pt-8 mt-8 border-t border-white/10 sm:flex-row sm:items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >

            {/* Status Indicator */}
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">CURRENT STATUS</p>
              <div className="flex items-center gap-3">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                  <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
                </span>
                <span className="text-sm font-medium tracking-wide text-white">Accepting New Projects</span>
              </div>
            </div>

            {/* Optional Signature or Extra Info */}
            <span className="font-serif text-lg italic text-gray-600 opacity-50">Rohit Dhyani</span>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default About;