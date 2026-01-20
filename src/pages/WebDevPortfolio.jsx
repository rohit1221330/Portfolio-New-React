// src/pages/WebDevPortfolio.jsx
import React from 'react';
import useSmoothScroll from '../hooks/useSmoothScroll'; // <-- YE WAPAS AA GAYA
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import Workflow from '../sections/Workflow';
import Services from '../sections/Services';
import FinalCTA from '../sections/FinalCTA';

const WebDevPortfolio = () => {
  // Yahan call karo hook ko, taaki is page pe smooth scroll chale
  useSmoothScroll(); 

  return (
    <div className="text-white bg-gray-100 dark:bg-black">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Workflow />
      <Services />
      <FinalCTA />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default WebDevPortfolio;