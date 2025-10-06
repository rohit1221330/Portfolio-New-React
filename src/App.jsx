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
import useSmoothScroll from './hooks/useSmoothScroll';

const App = () => {
  useSmoothScroll();
  // State to control the visibility of the entry animation
  const [showEntry, setShowEntry] = useState(true);

  const handleEnter = () => {
    setShowEntry(false);
  };

  return (
    <div className="relative z-0 bg-gray-100 dark:bg-black cursor-none">
      <CustomCursor />
      <AnimatePresence>
        {showEntry && <EntryAnimation onEnter={handleEnter} />}
      </AnimatePresence>

      {!showEntry && (
        // Main content fades in after entry
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <div>
            <Navbar />
            <Hero />
          </div>
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