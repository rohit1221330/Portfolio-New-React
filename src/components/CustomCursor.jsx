// src/components/CustomCursor.jsx

import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Softer spring settings for a smoother, more fluid motion
  const cursorX = useSpring(-100, { stiffness: 300, damping: 30 });
  const cursorY = useSpring(-100, { stiffness: 300, damping: 30 });
  
  const trailerX = useSpring(-100, { stiffness: 150, damping: 20 });
  const trailerY = useSpring(-100, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      trailerX.set(e.clientX - 8);
      trailerY.set(e.clientY - 8);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) setIsHovering(true);
    };
    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) setIsHovering(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, trailerX, trailerY]);

  const size = isHovering ? 60 : 32;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none gooey-container">
      {/* Trailing Dot with blend mode */}
      <motion.div
        style={{
          width: 16,
          height: 16,
          x: trailerX,
          y: trailerY,
        }}
        // ADDED MIX-BLEND-DIFFERENCE
        className="absolute bg-white rounded-full mix-blend-difference"
      />
      {/* Main Cursor Dot with blend mode */}
      <motion.div
        style={{
          width: size,
          height: size,
          x: cursorX,
          y: cursorY,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        // ADDED MIX-BLEND-DIFFERENCE
        className="absolute bg-white rounded-full mix-blend-difference"
      />
    </div>
  );
};

export default CustomCursor;