import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Placeholder animation variants
const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeInOut', staggerChildren: 0.2 } },
};

const revealTitleFromLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeInOut' } },
};

// Blank component with overlay and animation preserved
const BlankComponent = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    const debounceResize = debounce(handleResize, 100);
    window.addEventListener('resize', debounceResize);
    return () => window.removeEventListener('resize', debounceResize);
  }, []);

  useEffect(() => {
    if (isMobile && activeSection) {
      setShowOverlay(true);
    }
  }, [activeSection, isMobile]);

  const toggleSection = useCallback(
    (section) => {
      if (isMobile) {
        setActiveSection(section);
        setShowOverlay(true);
      } else {
        setActiveSection((prev) => (prev === section ? null : section));
      }
    },
    [isMobile]
  );

  const closeOverlay = () => {
    setShowOverlay(false);
    setActiveSection(null);
  };

  const sectionBgColors = {
    'Section 1': 'bg-white text-black',
    'Section 2': 'bg-white text-black',
    'Section 3': 'bg-white text-black',
    'Section 4': 'bg-white text-black',
  };

  return (
    <section className="w-full bg-black">
      <motion.h2
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
        variants={revealTitleFromLeftVariants}
        className="text-center text-3xl font-heading font-bold text-white py-10"
      >
      </motion.h2>

      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-white z-50">
          <button
            className="absolute top-5 right-5 text-2xl font-bold"
            onClick={closeOverlay}
            aria-label="Close overlay"
          >
            &times;
          </button>
          <h3 className="text-3xl mb-6">{activeSection}</h3>
          <div className="grid grid-cols-2 gap-6 p-4">
            {/* Overlay content can be added here */}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row h-[70vh] w-full">
        {Object.keys(sectionBgColors).map((section) => (
          <div
            key={section}
            onClick={() => toggleSection(section)}
            className={`relative cursor-pointer ${!isMobile ? 'transition-all duration-700 ease-in-out' : ''} 
              ${activeSection === section && !isMobile ? 'md:flex-[4] flex-[1] w-full' : 'md:flex-1 w-full'} 
              flex flex-col justify-center items-center ${sectionBgColors[section]} border border-gray-800 h-full 
              ${activeSection !== section && 'hover:opacity-40'} 
              ${activeSection === section && !isMobile ? 'bg-opacity-5' : ''}`}
            role="button"
            aria-expanded={activeSection === section}
          >
            <motion.h3
              ref={sectionRef}
              initial="hidden"
              animate={sectionInView ? 'visible' : 'hidden'}
              variants={revealVariants}
              className="text-2xl font-heading font-bold px-6 py-3 rounded-md text-center will-change-transform"
            >
              {!activeSection && section}
            </motion.h3>

            {activeSection === section && !isMobile && (
              <motion.div
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
                variants={revealVariants}
                className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 transition-opacity duration-500 overflow-auto will-change-transform"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                  {/* Section content can be added here */}
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Utility function for debouncing
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default BlankComponent;
