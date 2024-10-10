import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import moviePic from '../images/movieStreams.png';  

const revealVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const ProjectShowcase = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-black py-5">
        
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={revealVariants}
            className="w-full text-center mb-12 relative"
        >
            <h1 className="text-3xl md:text-4xl font-bold uppercase mt-12">
                My <span className="text-orange-500">Projects</span>.
            </h1>
            {/* Custom Underline */}
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

      {/* Project Showcase Section */}
      <motion.div
          className="w-full flex justify-center items-center px-5 md:px-0 mb-12"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={revealVariants}
      >
          <div className="flex flex-col md:flex-row items-center p-6 rounded-lg shadow-lg max-w-6xl">
              
              {/* Image with Gradient Gray Background */}
              <motion.div
                  className="md:w-3/5 w-full flex justify-center mb-6 md:mb-0 bg-gradient-to-r from-gray-300 to-gray-100 p-4 rounded-lg"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={revealVariants}
              >
                  <img
                  src={moviePic}
                  alt="Project showcase"
                  className="rounded-lg w-full h-auto max-h-[600px] object-contain"
                  />
              </motion.div>

              {/* Text and tools used on the right */}
              <motion.div
                  className="md:w-2/5 w-full flex flex-col items-start md:ml-8"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={revealVariants}
              >
                  <h2 className="text-2xl font-bold mb-4">Movie Streams</h2>
                  <p className="text-gray-600 mb-6">
                    App built with WinForms that allows users to browse top movies, add favorites, 
                    create a watchlist, and search for movies. The backend integrates with a movie data API for dynamic content retrieval.
                  </p>
                  <div className="text-gray-600 flex items-center">
                      <strong>C#, WinForms, Visual Studio, Movies API</strong>
                      {/* Circular Button with Zoom-in on Hover for External Link */}
                      <a 
                      href="https://github.com/josshuabalita/MovieApplication" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
                      aria-label="GitHub Repository"
                      title="Movie Application Repository"
                      >
                      <i className="fas fa-external-link-alt text-gray-700"></i>  
                      </a>
                  </div>
              </motion.div>
          </div>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
