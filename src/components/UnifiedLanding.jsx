// src/components/UnifiedLanding.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code2, Database, ArrowRight } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize'; // <-- Tumhara hook import kiya

const UnifiedLanding = () => {
  const [stage, setStage] = useState('welcome'); 
  const [hoveredSide, setHoveredSide] = useState(null); 
  const navigate = useNavigate();
  
  // Mobile detect karne ke liye
  const { width } = useWindowSize();
  const isMobile = width < 768; 

  // Animation sequence
  useEffect(() => {
    const timer1 = setTimeout(() => setStage('choice'), 2000);
    const timer2 = setTimeout(() => setStage('split'), 4500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  // --- LOGIC: Mobile pe hamesha Active rahega, Desktop pe Hover pe Active hoga ---
  const isWebActive = hoveredSide === 'web' || isMobile;
  const isDataActive = hoveredSide === 'data' || isMobile;

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans bg-black">
      
      {/* ==============================================
          INTRO OVERLAY (Welcome Text)
      ============================================== */}
      <AnimatePresence>
        {stage !== 'split' && (
          <motion.div 
            className="absolute inset-0 z-50 flex flex-col items-center justify-center px-4 text-center text-white bg-black"
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            {stage === 'welcome' && (
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-4xl font-bold text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
              >
                Welcome to My Universe
              </motion.h1>
            )}

            {stage === 'choice' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="mb-4 text-2xl font-light text-gray-300 md:text-4xl">
                  How would you like to explore?
                </h2>
                <div className="flex justify-center gap-4 font-mono text-sm text-gray-500 md:text-lg">
                  <span className="text-cyan-400"> &lt; Web Developer /&gt;</span>
                  <span> or </span>
                  <span className="text-purple-400"> {`{ Data Analyst }`} </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>


      {/* ==============================================
          SPLIT SCREEN (Main Content)
      ============================================== */}
      <div className="flex flex-col w-full h-full md:flex-row">
        
        {/* --- WEB DEVELOPER ZONE --- */}
        <motion.div 
          className="relative flex flex-col items-center justify-center flex-1 w-full border-b border-gray-800 cursor-pointer md:h-full md:border-b-0 md:border-r"
          onMouseEnter={() => setHoveredSide('web')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => handleNavigate('/web-dev')}
          animate={{ 
            // Mobile pe size fix (flex: 1), Desktop pe hover effect
            flex: isMobile ? 1 : (hoveredSide === 'web' ? 2 : hoveredSide === 'data' ? 0.5 : 1),
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          {/* Background Layer */}
          <div className={`absolute inset-0 bg-slate-900 transition-opacity duration-500 ${isWebActive ? 'opacity-100' : 'opacity-40'}`}>
             {/* Pattern Overlay: Mobile pe hamesha dikhega */}
             {isWebActive && (
               <div className="absolute inset-0 opacity-20" 
                    style={{ backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
               </div>
             )}
          </div>

          {/* Content */}
          <div className="relative z-10 p-4 text-center">
            <Code2 size={isMobile ? 40 : 60} className={`mx-auto mb-4 transition-all duration-300 ${isWebActive ? 'text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]' : 'text-gray-500'}`} />
            
            <h2 className={`font-bold uppercase tracking-tighter transition-colors duration-300 ${isWebActive ? 'text-white' : 'text-gray-600'} ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              Web Dev
            </h2>
            
            {/* Button: Mobile pe hamesha visible */}
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isWebActive ? 1 : 0, y: isWebActive ? 0 : 10 }}
            >
              <button className="px-6 py-2 rounded-full border border-cyan-500 text-cyan-400 text-sm font-bold flex items-center gap-2 mx-auto hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                View Portfolio <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </motion.div>


        {/* --- DATA ANALYST ZONE --- */}
        <motion.div 
          className="relative flex flex-col items-center justify-center flex-1 w-full border-t border-gray-800 cursor-pointer md:h-full md:border-t-0 md:border-l"
          onMouseEnter={() => setHoveredSide('data')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => handleNavigate('/data-analyst')}
          animate={{ 
            // Mobile pe size fix (flex: 1), Desktop pe hover effect
            flex: isMobile ? 1 : (hoveredSide === 'data' ? 2 : hoveredSide === 'web' ? 0.5 : 1),
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          {/* Background Layer */}
          <div className={`absolute inset-0 bg-[#0f0726] transition-opacity duration-500 ${isDataActive ? 'opacity-100' : 'opacity-40'}`}>
             {/* Pattern Overlay: Mobile pe hamesha dikhega */}
             {isDataActive && (
               <div className="absolute inset-0 opacity-20" 
                    style={{ backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
               </div>
             )}
          </div>

          {/* Content */}
          <div className="relative z-10 p-4 text-center">
            <Database size={isMobile ? 40 : 60} className={`mx-auto mb-4 transition-all duration-300 ${isDataActive ? 'text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]' : 'text-gray-500'}`} />
            
            <h2 className={`font-bold uppercase tracking-tighter transition-colors duration-300 ${isDataActive ? 'text-white' : 'text-gray-600'} ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
              Data Analyst
            </h2>
            
            {/* Button: Mobile pe hamesha visible */}
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isDataActive ? 1 : 0, y: isDataActive ? 0 : 10 }}
            >
              <button className="px-6 py-2 rounded-full border border-purple-500 text-purple-400 text-sm font-bold flex items-center gap-2 mx-auto hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                View Analysis <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default UnifiedLanding;