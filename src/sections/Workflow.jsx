// src/sections/Workflow.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FiSearch,
  FiLayout,
  FiCode,
  FiCheckCircle,
  FiArrowRight,
  FiArrowDown,
  FiArrowLeft
} from "react-icons/fi";

const workflowSteps = [
  {
    id: "01",
    title: "Understanding Goals",
    // Mobile ke liye short description logic code me handle karenge
    desc: "We start by understanding your business, audience, and what success looks like.",
    icon: <FiSearch />,
  },
  {
    id: "02",
    title: "Structure & UX",
    desc: "I plan the site structure and conversion flow so users always know where to take action.",
    icon: <FiLayout />,
  },
  {
    id: "03",
    title: "Design & Dev",
    desc: "I design and build a fast, mobile-first website with clean visuals and clear CTAs.",
    icon: <FiCode />,
  },
  {
    id: "04",
    title: "Launch & Support",
    desc: "Everything is tested before launch. I remain available for fixes and support.",
    icon: <FiCheckCircle />,
  },
];

const Workflow = () => {
  return (
    <section id="workflow" className="relative py-20 overflow-hidden font-sans bg-black md:py-24">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-900/10 rounded-full blur-[100px] md:blur-[120px]" />
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto md:px-6">
        
        {/* HEADER */}
        <div className="mb-12 text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-3 md:mb-4"
          >
            <span className="w-6 md:w-8 h-[2px] bg-purple-600"></span>
            <span className="text-purple-400 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
              My Workflow
            </span>
            <span className="w-6 md:w-8 h-[2px] bg-purple-600"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            Process <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
              To Launch
            </span>
          </motion.h2>
        </div>

        {/* ============================================================
             MOBILE VIEW: VERTICAL TIMELINE (Based on Image)
        ============================================================ */}
        <div className="relative flex flex-col gap-8 md:hidden">
            
            {/* The Vertical Line (Left Side) */}
            <div className="absolute left-5 top-4 bottom-4 w-[2px] bg-white/5">
                {/* Filling Animation on Scroll */}
                <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="w-full h-full origin-top bg-gradient-to-b from-purple-500 via-purple-400 to-purple-600"
                />
            </div>

            {workflowSteps.map((step, index) => (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-14" // Padding left to make space for line
                >
                    {/* The Dot on the Line */}
                    <div className="absolute left-[14px] top-6 w-3.5 h-3.5 bg-[#0a0a0a] border-2 border-purple-500 rounded-full z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                    {/* Compact Card */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-5 hover:border-purple-500/30 transition-colors">
                        
                        <div className="flex items-center gap-3 mb-3">
                             <div className="p-2 text-lg text-purple-400 border rounded-lg bg-white/5 border-white/10">
                                {step.icon}
                             </div>
                             <div>
                                 <span className="block text-[10px] font-bold text-gray-500 tracking-widest uppercase">STEP {step.id}</span>
                                 <h3 className="text-lg font-bold leading-none text-white">
                                    {step.title}
                                 </h3>
                             </div>
                        </div>

                        <p className="text-xs leading-relaxed text-gray-400">
                            {step.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>


        {/* ============================================================
             DESKTOP VIEW: S-SHAPE SNAKE LAYOUT (Unchanged)
        ============================================================ */}
        <div className="relative hidden md:block">
            
            {/* ROW 1: Step 1 -> Step 2 */}
            <div className="relative grid grid-cols-2 gap-20 mb-20">
                
                {/* CONNECTOR 1 (Horizontal) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[5rem]">
                    <div className="w-full h-[2px] bg-white/5 absolute top-0 left-0"></div>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        className="h-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 relative overflow-hidden"
                    >
                         <div className="absolute right-0 text-xl text-purple-400 -translate-y-1/2 top-1/2">
                            <FiArrowRight />
                         </div>
                    </motion.div>
                </div>

                <DesktopCard step={workflowSteps[0]} index={0} />
                <DesktopCard step={workflowSteps[1]} index={1} delay={0.8} />
                
                {/* CONNECTOR 2 (Vertical) */}
                <div className="absolute right-[25%] bottom-[-5rem] h-[5rem] w-[2px] z-0">
                   <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
                   <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, ease: "linear", delay: 1 }}
                      className="relative w-full bg-gradient-to-b from-purple-500 to-purple-400"
                   >
                      <div className="absolute bottom-0 -left-[9px] text-purple-400 text-xl">
                         <FiArrowDown />
                      </div>
                   </motion.div>
                </div>
            </div>

            {/* ROW 2: Step 4 <- Step 3 */}
            <div className="relative grid grid-cols-2 gap-20">
                {/* CONNECTOR 3 (Horizontal Left) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[5rem]">
                    <div className="w-full h-[2px] bg-white/5 absolute top-0 left-0"></div>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                        className="h-[2px] bg-gradient-to-l from-purple-500 via-purple-400 to-purple-500 relative float-right"
                    >
                         <div className="absolute left-0 text-xl text-purple-400 -translate-y-1/2 top-1/2">
                            <FiArrowLeft />
                         </div>
                    </motion.div>
                </div>

                <DesktopCard step={workflowSteps[3]} index={3} delay={2.5} />
                <DesktopCard step={workflowSteps[2]} index={2} delay={1.5} />
            </div>
        </div>


        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }} // Faster on mobile
          className="mt-12 text-center md:mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 pb-1 text-xs tracking-widest text-gray-400 uppercase transition-colors border-b border-transparent md:text-sm hover:text-white hover:border-purple-500"
          >
            Ready to start your project?
          </a>
        </motion.div>

      </div>
    </section>
  );
};

// --- DESKTOP CARD (Large, Detailed) ---
const DesktopCard = ({ step, index, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay }}
            className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all group z-10"
        >
            <span className="absolute font-serif text-5xl font-black transition-colors select-none top-4 right-4 text-white/20 group-hover:text-white/30">
                {step.id}
            </span>
            <div className="inline-flex p-3 mb-6 text-2xl text-purple-400 transition-all border rounded-xl bg-white/5 border-white/10 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                {step.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-purple-300">
                {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
                {step.desc}
            </p>
        </motion.div>
    )
}

export default Workflow;