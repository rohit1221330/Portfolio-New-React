  // // src/sections/Hero.jsx

  // import React from 'react';
  // import { motion } from 'framer-motion';
  // import { TypeAnimation } from 'react-type-animation';
  // import LightRays from '../React-bits/LightRays';
  // import useWindowSize from '../hooks/useWindowSize';

  // const Hero = () => {
  //   const { width } = useWindowSize();

  //   // Animation Variants
  //   const headingContainerVariants = {
  //     hidden: { opacity: 0 },
  //     visible: {
  //       opacity: 1,
  //       transition: { staggerChildren: 0.08 },
  //     },
  //   };

  //   const letterVariants = {
  //     hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  //     visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  //   };

  //   const headingText = "Hi, I'm Rohit Dhyani";

  //   return (
  //     <section className="relative w-full h-screen mx-auto">
  //       {/* Background Light Rays */}
  //       {/* <div className="absolute inset-0 z-0">
  //         <LightRays
  //           raysOrigin="top-center"
  //           raysColor="#9333ea"
  //           raysSpeed={1.5}
  //           lightSpread={0.8}
  //           rayLength={1.2}
  //           followMouse={true}
  //           mouseInfluence={0.1}
  //           noiseAmount={0.1}
  //           distortion={0.05}
  //           className="custom-rays"
  //         />
  //       </div> */}

  //       {/* Content Wrapper */}
  //       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center lg:flex-row lg:text-left lg:justify-between lg:px-20">

  //         {/* === Left Side: Text === */}
  //         <div className="flex flex-col items-center lg:items-start">
  //           <motion.h1
  //             variants={headingContainerVariants}
  //             initial="hidden"
  //             animate="visible"
  //             className="text-4xl font-black text-white xs:text-5xl sm:text-6xl lg:text-7xl font-poppins"
  //           >
  //             {headingText.split("").map((char, index) => (
  //               <motion.span
  //                 key={index}
  //                 variants={letterVariants}
  //                 className={index >= 8 ? "text-purple-500" : ""}
  //                 style={{ display: 'inline-block' }}
  //               >
  //                 {char === " " ? "\u00A0" : char}
  //               </motion.span>
  //             ))}
  //           </motion.h1>

  //           <motion.p
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             transition={{ duration: 0.8, delay: 2 }}
  //             className="max-w-2xl mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl font-jetbrains"
  //           >
  //             I am a{' '}
  //             <TypeAnimation
  //               sequence={[
  //                 'Frontend Developer', 2000,
  //                 'Full Stack Developer', 2000,
  //                 'Creative Thinker', 2000,
  //                 'Problem Solver', 2000,
  //               ]}
  //               wrapper="span"
  //               speed={50}
  //               className="font-bold text-purple-400"
  //               repeat={Infinity}
  //             />
  //             , creating beautiful <br className="hidden sm:block" /> and functional web experiences.
  //           </motion.p>


  //           {/* Buttons */}
  //           <motion.div
  //             initial={{ opacity: 0, scale: 0.5 }}
  //             animate={{ opacity: 1, scale: 1 }}
  //             transition={{ duration: 0.5, delay: 3.5 }}
  //             className="flex flex-col justify-center gap-4 mt-8 sm:flex-row"
  //           >
  //             <a
  //               href="#contact"
  //               className="px-8 py-3 font-semibold text-white transition-colors duration-300 bg-purple-600 rounded-xl hover:bg-purple-700"
  //             >
  //               Hire Me
  //             </a>
  //             <a
  //               href="/assets/Resume.pdf"
  //               download
  //               className="px-8 py-3 font-semibold text-purple-600 transition-colors duration-300 border border-purple-600 dark:text-white rounded-xl hover:bg-purple-600 hover:text-white"
  //             >
  //               Download Resume
  //             </a>
  //           </motion.div>
  //         </div>

  //         {/* === Right Side: Profile Image === */}
  //         <motion.div
  //           initial={{ opacity: 0, scale: 0.8, y: 50 }}
  //           animate={{ opacity: 1, scale: 1, y: 0 }}
  //           transition={{ duration: 1, delay: 2 }}
  //           className="flex justify-center mt-10 lg:mt-0 lg:ml-12"
  //         >
  //           <div className="relative w-56 h-56 overflow-hidden border-4 border-purple-500 rounded-full shadow-lg sm:w-72 sm:h-72 lg:w-96 lg:h-96">
  //             <img
  //               src="/public/profile-pic.png" // <-- apni image ka path yaha dalna
  //               alt="Rohit Dhyani"
  //               className="object-cover w-full h-full"
  //             />
  //             {/* Glow Effect */}
  //             <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl"></div>
  //           </div>
  //         </motion.div>
  //       </div>
  //     </section>
  //   );
  // };

  // export default Hero;


  // src/sections/Hero.jsx

// src/sections/Hero.jsx

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  };
  
  // Parallax transformations for background elements ONLY
  const blobX = useTransform(mouseX, (v) => v / -15);
  const blobY = useTransform(mouseY, (v) => v / -15);

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-[#000000] font-sans"
    >
      {/* Layered dynamic backgrounds with parallax */}
      <motion.div style={{ x: blobX, y: blobY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#232038] via-[#171928] to-[#25212f] opacity-90" />
        <motion.div 
          className="absolute left-10 top-1/3 w-[340px] h-[340px] rounded-full bg-gradient-to-br from-fuchsia-600/20 via-indigo-500/30 to-transparent blur-[120px] opacity-60"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute right-0 bottom-10 w-64 h-64 rounded-full bg-gradient-to-tl from-purple-800/50 to-transparent blur-[120px] opacity-40"
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="relative z-10 flex flex-col-reverse items-center justify-between w-full max-w-6xl px-6 md:flex-row gap-14 sm:px-10">
        
        {/* Left :: Content (Now Static) */}
        <div className="flex flex-col items-center flex-1 gap-3 text-center md:items-start md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="px-3 py-1 mb-2 text-xs font-bold tracking-widest uppercase text-[#a855f7] bg-fuchsia-900/20 rounded-2xl"
          >
            Frontend & Creative Development
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl drop-shadow-xl"
          >
            Hi, I'm <span className="text-[#a855f7]">Rohit Dhyani</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 mt-2 text-lg font-semibold sm:text-2xl"
          >
            <span className="text-gray-300">I craft</span>
            <TypeAnimation
              sequence={[
                "digital solutions.", 2100,
                "innovative UI/UX.", 2100,
                "scalable applications.", 2100,
              ]}
              wrapper="span"
              speed={44}
              className="text-[#a855f7]"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
            className="max-w-xl mt-5 mb-8 text-base font-medium text-gray-400 sm:text-lg"
          >
            Bringing practical design and robust engineering together to deliver impactful, future-ready products and user experiences.
          </motion.p>

          {/* === Buttons Restored === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, ease: "easeOut" }}
            className="flex gap-5"
          >
            <a href="#contact" className="py-3 text-base font-bold text-white transition-all rounded-full shadow-lg px-7 bg-gradient-to-r from-fuchsia-600 to-indigo-600 hover:shadow-fuchsia-500/50 hover:scale-105">
              Hire Me
            </a>
            <a href="/assets/Resume.pdf" download className="py-3 font-semibold transition-all border rounded-full px-7 text-[#a855f7] bg-white/5 border-fuchsia-600/50 hover:bg-fuchsia-600/10">
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right :: Image (Now Static) */}
        <div className="flex justify-center flex-1 md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="absolute transition-all scale-100 rounded-full pointer-events-none opacity-55 -inset-8 bg-gradient-to-tr from-fuchsia-600/40 to-indigo-500/20 blur-3xl group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full pointer-events-none ring-2 ring-fuchsia-400/30 animate-pulse" />
            <img
              src="/profile-pic.png"
              alt="Rohit Dhyani"
              className="object-cover w-56 h-56 border-2 rounded-full shadow-2xl sm:w-[20rem] sm:h-[20rem] border-[#a855f7]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
