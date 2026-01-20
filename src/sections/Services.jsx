// src/sections/Services.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiTrendingUp,
  FiRefreshCcw,
  FiZap,
  FiArrowRight,
  FiCheck,
  FiChevronDown, // Added for mobile dropdown
} from "react-icons/fi";

const services = [
  {
    id: 1,
    title: "Conversion-Focused Websites",
    desc: "Websites built to guide visitors toward one clear action — enquiries, calls, or bookings. Ideal for realtors and service businesses that need results, not just design.",
    points: [
      "Mobile-first & fast loading",
      "Clear page structure & CTAs",
      "Built for real leads, not vanity",
    ],
    icon: <FiTrendingUp />,
    color: "from-blue-500 to-cyan-500",
    bgGlow: "group-hover:shadow-cyan-500/20",
    border: "border-cyan-500/30",
    textAccent: "text-cyan-400"
  },
  {
    id: 2,
    title: "Website Redesign & Optimization",
    desc: "If your current website looks fine but isn’t converting, I improve structure, clarity, and performance without rebuilding everything from scratch.",
    points: [
      "UX & layout improvements",
      "Speed & performance fixes",
      "Conversion flow optimization",
    ],
    icon: <FiRefreshCcw />,
    color: "from-purple-500 to-pink-500",
    bgGlow: "group-hover:shadow-purple-500/20",
    border: "border-purple-500/30",
    textAccent: "text-purple-400"
  },
  {
    id: 3,
    title: "Forms, Integrations & Enhancements",
    desc: "Essential backend integrations that make your website actually useful for your business operations.",
    points: [
      "Enquiry forms & email alerts",
      "WhatsApp lead notifications",
      "Basic backend & admin setup",
    ],
    icon: <FiZap />,
    color: "from-green-500 to-emerald-500",
    bgGlow: "group-hover:shadow-green-500/20",
    border: "border-green-500/30",
    textAccent: "text-green-400"
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(1); // For Mobile View

  return (
    <section id="services" className="relative py-24 overflow-hidden font-sans bg-black">
      
      {/* 1. Dynamic Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        
        {/* 2. HEADER */}
        <div className="flex flex-col items-end justify-between gap-6 mb-16 md:mb-24 md:flex-row">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-purple-600"></span>
              <span className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase">
                Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold leading-tight text-white md:text-5xl"
            >
              Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                Growth & Performance
              </span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block"
          >
             <div className="flex items-center justify-center w-16 h-16 border rounded-full border-white/10 animate-spin-slow">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
             </div>
          </motion.div>
        </div>

        {/* =======================================================
             MOBILE VIEW: ACCORDION LAYOUT (Clean & UX Friendly)
        ======================================================= */}
        <div className="flex flex-col gap-4 md:hidden">
            {services.map((service) => {
                const isOpen = activeAccordion === service.id;

                return (
                    <motion.div 
                        key={service.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                            isOpen 
                            ? `bg-[#0f0f0f] ${service.border} shadow-lg` 
                            : 'bg-[#0a0a0a] border-white/10'
                        }`}
                    >
                        {/* Header (Clickable) */}
                        <button 
                            onClick={() => setActiveAccordion(isOpen ? null : service.id)}
                            className="flex items-center justify-between w-full p-5 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`text-xl ${isOpen ? service.textAccent : 'text-gray-500'}`}>
                                    {service.icon}
                                </div>
                                <span className={`text-lg font-bold ${isOpen ? 'text-white' : 'text-gray-400'}`}>
                                    {service.title}
                                </span>
                            </div>
                            
                            <motion.div 
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                className={`text-xl ${isOpen ? 'text-white' : 'text-gray-600'}`}
                            >
                                <FiChevronDown />
                            </motion.div>
                        </button>

                        {/* Dropdown Body */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-5 pt-0 pb-6 mt-2 border-t border-white/5">
                                        <p className="mt-4 mb-4 text-sm leading-relaxed text-gray-400">
                                            {service.desc}
                                        </p>
                                        <ul className="space-y-3">
                                            {service.points.map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                                    <FiCheck className={`mt-0.5 text-xs ${service.textAccent}`} />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>


        {/* =======================================================
             DESKTOP VIEW: YOUR ORIGINAL GRID
        ======================================================= */}
        <div 
          className="hidden grid-cols-1 gap-6 md:grid lg:grid-cols-3"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative group h-full rounded-3xl p-[1px] transition-all duration-500 ${
                   isDimmed ? "opacity-40 scale-95 blur-[1px]" : "opacity-100 scale-100"
                }`}
              >
                {/* A. Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                
                {/* B. Card Content */}
                <div className={`relative h-full bg-[#080808] rounded-3xl p-8 overflow-hidden border border-white/5 group-hover:border-transparent transition-colors ${service.bgGlow} shadow-xl`}>
                    
                    {/* Background Noise/Texture */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                    
                    {/* Floating Icon */}
                    <div className="relative flex items-start justify-between mb-8">
                        <div className={`p-[1px] rounded-2xl bg-gradient-to-br ${service.color}`}>
                            <div className="p-4 text-white rounded-2xl bg-black/80 backdrop-blur-sm">{service.icon}</div>
                        </div>
                        <span className="font-serif text-5xl font-black transition-colors text-white/5 group-hover:text-white/10">
                           0{service.id}
                        </span>
                    </div>

                    <h3 className="mb-4 text-xl font-bold text-white transition-transform group-hover:translate-x-1">
                        {service.title}
                    </h3>
                    
                    <p className="pb-6 mb-8 text-sm leading-relaxed text-gray-400 border-b border-white/5">
                        {service.desc}
                    </p>

                    <ul className="space-y-3">
                        {service.points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px] group-hover:bg-white/10 group-hover:text-white transition-colors`}>
                                   <FiCheck />
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    {/* Bottom Glow */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4. FOOTER CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
           {/* <a
            href="#contact"
            className="relative inline-flex items-center gap-3 px-8 py-4 font-bold text-black transition-all bg-white rounded-full group hover:bg-gray-200"
          >
            Start Your Project
            <div className="flex items-center justify-center w-8 h-8 text-white transition-transform bg-black rounded-full group-hover:rotate-45">
                <FiArrowRight />
            </div>
          </a> */}
          <p className="mt-4 text-xs tracking-widest text-gray-200 uppercase">
            Custom Solutions • No Templates
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;