// src/components/HeroBackground.jsx

import React, { useEffect } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValue 
} from "framer-motion";

const HeroBackground = () => {
  const { scrollY } = useScroll();

  // --- 1. MOUSE PHYSICS (Smooth & Elastic) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100 }; // Thoda loose spring for floating feel
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x * 50); 
      mouseY.set(y * 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // --- 2. PARALLAX LAYERS ---

  // Layer 1: Grid Floor (Scrolls down, slightly tilts with mouse)
  const yGrid = useTransform(scrollY, [0, 500], [0, 150]);
  const rotateGrid = useTransform(smoothY, [-25, 25], [65, 55]); // Dynamic tilt

  // Layer 2: Background Glows (Move opposite to mouse slowly)
  const xGlow = useTransform(smoothX, [-25, 25], [20, -20]);
  const yGlow = useTransform(smoothY, [-25, 25], [20, -20]);

  // Layer 3: Tech Shapes (Move fast opposite to mouse)
  const xShapes = useTransform(smoothX, [-25, 25], [60, -60]);
  const yShapes = useTransform(smoothY, [-25, 25], [40, -40]);
  const yShapesScroll = useTransform(scrollY, [0, 1000], [0, -400]);

  // Layer 4: Foreground Blur (Very fast movement for depth)
  const xBlur = useTransform(smoothX, [-25, 25], [100, -100]);
  const yBlurScroll = useTransform(scrollY, [0, 1000], [0, -800]);

  return (
    <div className="absolute inset-0 z-0 w-full h-full bg-[#030014] overflow-hidden perspective-1000">
      
      {/* 1. CINEMATIC NOISE TEXTURE (For that raw, premium feel) */}
      <div className="absolute inset-0 opacity-[0.05] z-[50] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 2. BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#050505] to-[#1a1a2e]" />

      {/* 3. THE CYBER GRID (Floor) */}
      <motion.div 
        style={{ y: yGrid, rotateX: rotateGrid }} // Mouse se floor tilt hoga!
        className="absolute -bottom-[20%] -left-[50%] w-[200%] h-[150%] opacity-30 origin-bottom"
      >
         <div className="w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      </motion.div>


      {/* 4. ATMOSPHERIC GLOWS (Breathing) */}
      <motion.div style={{ x: xGlow, y: yGlow }} className="absolute inset-0">
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" />
      </motion.div>


      {/* 5. FLOATING TECH SYMBOLS & SHAPES (The Main Effect) */}
      <motion.div 
        style={{ x: xShapes, y: yShapes, translateY: yShapesScroll }} 
        className="absolute inset-0 z-10"
      >
          {/* Code Symbol: </> */}
          <div className="absolute top-[20%] right-[15%] text-purple-500/20 text-6xl font-black font-mono rotate-12 blur-[1px]">
             &lt;/&gt;
          </div>

          {/* Code Symbol: { } */}
          <div className="absolute top-[50%] left-[10%] text-cyan-500/10 text-8xl font-black font-mono -rotate-12">
             {`{ }`}
          </div>

          {/* Wireframe Cube */}
          <div className="absolute bottom-[20%] left-[20%] w-24 h-24 border border-purple-500/20 rotate-45 animate-spin-slow"></div>
          
          {/* Wireframe Circle */}
          <div className="absolute top-[15%] left-[30%] w-16 h-16 border border-cyan-400/20 rounded-full"></div>

          {/* Random Binary Data Effect */}
          <div className="absolute top-[40%] right-[25%] text-xs text-green-500/20 font-mono flex flex-col gap-1">
             <span>0100101</span>
             <span>1101000</span>
          </div>

          {/* Shooting Beams (Meteor Shower) */}
          <motion.div 
             animate={{ x: [0, 1000], y: [0, 1000], opacity: [0, 1, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute top-[0%] left-[20%] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent -rotate-45"
          />
      </motion.div>

      {/* 6. FOREGROUND BLUR PARTICLES (Depth Perception) */}
      <motion.div 
        style={{ x: xBlur, translateY: yBlurScroll }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
          <div className="absolute bottom-[10%] left-[5%] w-4 h-4 bg-purple-500 rounded-full blur-[4px] opacity-40"></div>
          <div className="absolute top-[40%] right-[5%] w-6 h-6 bg-cyan-400 rounded-full blur-[6px] opacity-30"></div>
          <div className="absolute bottom-[30%] right-[40%] w-2 h-2 bg-white rounded-full blur-[2px] opacity-50"></div>
      </motion.div>

      {/* 7. VIGNETTE OVERLAY (Spotlight on Content) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] z-30" />
      
    </div>
  );
};

export default HeroBackground;