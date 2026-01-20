// src/sections/Hero.jsx

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen pt-32 pb-20 overflow-hidden font-sans bg-[#050508]">

      {/* ====================================================
          BACKGROUND ATMOSPHERE (Enhanced)
      ==================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* 1. Noise Texture Overlay (For tactile feel) */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>

        {/* 2. Enhanced Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

        {/* 3. Existing Purple Glow (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px]"
        />

        {/* 4. Existing Cyan Glow (Top Right) */}
        <motion.div
           initial={{ opacity: 0.3 }}
           animate={{ opacity: 0.6, scale: [1, 1.1, 1] }}
           transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
           className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px]"
        />

        {/* --- NEW ADDITIONS FOR DEPTH --- */}

        {/* 5. Floating Abstract Geometrics (Slow rotating outlines) */}
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 0.1 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/3 w-[800px] h-[800px] border-[1px] border-cyan-500/30 rounded-[30%] blur-[1px]"
        />
        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: -360, opacity: 0.08 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] border-[1px] border-purple-500/30 rounded-full blur-[1px]"
        />

        {/* 6. Subtle Rising Particles */}
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/20"
                initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0 }}
                animate={{ 
                    y: "-10vh", 
                    opacity: [0, 0.5, 0],
                    scale: [0.5, 1.5, 0.5]
                }}
                transition={{ 
                    duration: Math.random() * 10 + 20, 
                    repeat: Infinity, 
                    delay: Math.random() * 5,
                    ease: "linear"
                }}
            />
        ))}

      </div>

      {/* ====================================================
          MAIN CONTENT (Same as before)
      ==================================================== */}
      <div className="container relative z-10 flex flex-col items-center px-6 mx-auto text-center">

        {/* 1. TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-5 py-2 mb-8 border rounded-full border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">
            Available for New Projects
          </span>
        </motion.div>

        {/* 2. HERO HEADLINE WITH SMOOTH TYPING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center max-w-5xl"
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl">
            Conversion-Focused Websites for
          </h1>
          <div className="mt-2 text-3xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl sm:mt-4 h-[40px] sm:h-[60px] flex items-center justify-center">
             <TypeAnimation
                sequence={[
                  1000,
                  'Realtors & Agencies', 
                  2000,
                  'Service Businesses',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={70}
                cursor={true}
                repeat={Infinity}
                className="font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-purple-300"
              />
          </div>
        </motion.div>

        {/* 3. SUBTEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-8"
        >
          <p className="max-w-xl mx-auto text-sm leading-relaxed text-gray-300 sm:text-lg">
            I design and build fast, mobile-first websites that turn visitors into real leads — not just good-looking pages.
          </p>
          <p className="max-w-xl mx-auto mt-3 text-sm leading-relaxed text-gray-500">
            Frontend-first development with essential backend integrations — forms, email alerts & WhatsApp lead notifications.
          </p>
        </motion.div>

        {/* 4. BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col items-center gap-4 mt-10 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative px-7 py-3.5 rounded-full bg-white text-black font-bold text-base hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2"
          >
            View Work
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full border border-white/15 text-gray-200 font-medium hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm flex items-center gap-2"
          >
            Get a Free Website Review
            <FiArrowRight />
          </a>
        </motion.div>

      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-[#050508] to-transparent" />

    </section>
  );
};

export default Hero;