// src/App.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all your components and sections
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
// import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import EntryAnimation from './components/EntryAnimation';
import CustomCursor from './components/CustomCursor';

// Import our hooks
import useSmoothScroll from './hooks/useSmoothScroll';
import useWindowSize from './hooks/useWindowSize'; // <-- 1. IMPORT THIS

const App = () => {
  useSmoothScroll();
  const { width } = useWindowSize(); // <-- 2. GET THE SCREEN WIDTH
  const [showEntry, setShowEntry] = useState(true);

  // Determine if we are on a mobile device
  const isMobile = width < 768; // 768px is a standard tablet breakpoint

  const handleEnter = () => {
    setShowEntry(false);
  };

  return (
    // 3. Conditionally apply 'cursor-none'
    <div className={`relative z-0 bg-gray-100 dark:bg-black ${!isMobile ? 'cursor-none' : ''}`}>
      
      {/* 4. Conditionally render the CustomCursor */}
      {!isMobile && <CustomCursor />}
      
      <AnimatePresence>
        {showEntry && <EntryAnimation onEnter={handleEnter} />}
      </AnimatePresence>

      {!showEntry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          {/* <Testimonials /> */}
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default App;