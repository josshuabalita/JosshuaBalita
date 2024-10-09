import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import binaryVideo from '../images/Binary.mp4'; // Importing the video

const HeroSection = () => {
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  // New variant for the name reveal (from the left)
  const revealNameVariants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen from the left
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
  };

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center px-4 sm:px-8 font-sans py-12 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={binaryVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-1"></div>

      {/* Fade-to-Black Gradient */}
      <div
        className="absolute inset-0 z-2"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1))',
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-7xl space-y-8 md:space-y-0 z-10">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={revealVariants}
          className="text-center space-y-6"
        >
          <p className="text-md sm:text-lg md:text-xl text-white-400 mb-4">HELLO, I AM</p>

          {/* Name with left-side reveal animation */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide font-heading text-yellow-500 overflow-hidden border-r-4 border-yellow-500 whitespace-nowrap animate-typewriter mb-6"
            style={{
              textShadow: '3px 3px 0 #000, 6px 6px 0 #333',
              fontWeight: '800',
            }}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            variants={revealNameVariants}
          >
            JOSSHUA BALITA
          </motion.h1>

          <p className="text-md sm:text-lg md:text-xl text-white mb-6">A SOFTWARE DEVELOPER.</p>

          <div className="pt-10 flex space-x-4 justify-center items-center">
            {/* Download CV Button with Zoom-in on Hover */}
            <a
              href="/resume.pdf"
              download
              className="bg-yellow-500 text-black py-2 px-6 sm:py-3 sm:px-8 rounded-full text-md sm:text-lg transition duration-300 font-heading transform hover:scale-110"
              aria-label="Download CV"
              title="Download CV"
            >
              Download CV
            </a>

            {/* GitHub Icon with Zoom-in on Hover */}
            <a
              href="https://github.com/josshuabalita"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transition duration-300 flex items-center justify-center transform hover:scale-110"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </a>

            {/* LinkedIn Icon with Zoom-in on Hover */}
            <a
              href="https://linkedin.com/in/josshua-balita"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-2 sm:p-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full transition duration-300 flex items-center justify-center transform hover:scale-110"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
