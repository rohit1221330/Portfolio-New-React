// src/sections/FinalCTA.jsx

import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAlertTriangle, FiArrowRight } from "react-icons/fi";

const FinalCTA = () => {
  return (
    <section id="decision" className="relative py-16 overflow-hidden font-sans bg-black md:py-24">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] -translate-x-1/2 -translate-y-1/2 bg-purple-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto md:px-6">
        
        {/* HEADER (Compact on Mobile) */}
        <div className="mb-8 text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3 md:gap-3 md:mb-4"
          >
            <span className="w-6 md:w-8 h-[2px] bg-purple-600"></span>
            <span className="text-purple-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              Decision Point
            </span>
            <span className="w-6 md:w-8 h-[2px] bg-purple-600"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold leading-tight text-white md:text-5xl"
          >
            Two Possible Outcomes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
              for Your Website
            </span>
          </motion.h2>
        </div>

        {/* MATRIX (Compact Grid) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
          
          {/* LEFT — Positive (Optimized) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-5 rounded-2xl bg-[#0a0a0a] border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.05)] overflow-hidden group md:p-10 md:rounded-3xl"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-[40px] md:w-32 md:h-32 md:blur-[60px]"></div>
            
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="flex items-center justify-center w-6 h-6 text-green-400 rounded-full bg-green-500/20 md:w-8 md:h-8">
                    <FiCheckCircle size={14} className="md:w-auto md:h-auto" />
                </div>
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-green-400 uppercase">
                  System Optimized
                </span>
            </div>

            <ul className="space-y-2 md:space-y-4">
              {[
                "Clear user flow guides action",
                "Fast mobile-first performance",
                "Strong CTAs get real enquiries",
                "Website supports business growth"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 md:gap-3 md:text-base">
                  <FiCheckCircle className="mt-0.5 text-purple-400 shrink-0 md:mt-1" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — Negative (Stagnant) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-5 rounded-2xl bg-[#0a0a0a]/50 border border-white/5 opacity-80 md:p-10 md:rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="flex items-center justify-center w-6 h-6 text-gray-400 rounded-full bg-gray-500/20 md:w-8 md:h-8">
                    <FiAlertTriangle size={14} className="md:w-auto md:h-auto" />
                </div>
                <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-500 uppercase">
                  If Nothing Changes
                </span>
            </div>

            <ul className="space-y-2 md:space-y-4">
              {[
                "Visitors leave without action",
                "Looks fine but doesn't convert",
                "Paid traffic yields low return",
                "No measurable business results"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-500 md:gap-3 md:text-base">
                  <FiAlertTriangle className="mt-0.5 text-gray-600 shrink-0 md:mt-1" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* SOFT CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center md:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 pb-1 text-xs font-bold text-white transition-all border-b border-purple-500 group md:text-sm hover:text-purple-400 hover:border-purple-400"
          >
            Let’s fix this together 
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;