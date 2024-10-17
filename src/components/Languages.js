import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const groupedLanguages = {
  'Front-End Languages': [
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React.js', icon: 'devicon-react-original colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'Bootstrap CSS', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' }, 
  ],
  'Back-End Languages': [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'ASP.NET', icon: 'devicon-dotnetcore-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'SQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'RESTful API', icon: 'fas fa-exchange-alt' }, 
  ],
  'Tools': [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' }, 
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Postman', icon: 'fas fa-envelope-open-text' }, 
  ],
  'Soft Skills': [
    { name: 'Communication', icon: 'fas fa-comments' }, 
    { name: 'Problem-Solving', icon: 'fas fa-lightbulb' }, 
    { name: 'Time Management', icon: 'fas fa-clock' }, 
    { name: 'Adaptability', icon: 'fas fa-sync-alt' }, 
    { name: 'Stress Management', icon: 'fas fa-heartbeat' },
    { name: 'Resourcefulness', icon: 'fas fa-tools' },
    { name: 'Openness to Criticism', icon: 'fas fa-comment-dots' }, 
  ],
};

const revealVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2, 
    },
  }),
};

const useCombinedInView = () => {
  const [leftRef, leftInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [rightRef, rightInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return { leftRef, rightRef, leftInView, rightInView };
};

const animationClassByIndex = (index) => {
  return 'animate-shimmer-outline'; 
};

const Languages = () => {
  const [selectedSection, setSelectedSection] = useState('Front-End Languages');
  const { leftRef, rightRef, leftInView, rightInView } = useCombinedInView();

  const gridItems = groupedLanguages[selectedSection];
  const filledGridItems = [...gridItems];

  while (filledGridItems.length < 9) {
    filledGridItems.push({ name: '', icon: '' });
  }

  const { ref: skillsTitleRef, inView: skillsTitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="skills" className="flex flex-wrap min-h-screen bg-black py-2">
      <motion.div
        ref={skillsTitleRef}
        initial={{ opacity: 0, x: -100 }}
        animate={skillsTitleInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full text-center mb-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">SKILLS</h1>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-2 rounded-full"></div>
      </motion.div>

      <motion.div
        ref={leftRef}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        variants={revealVariants}
        className="w-full md:w-1/2 p-4 sm:p-6 text-white space-y-4 sm:space-y-6"
      >
        {Object.keys(groupedLanguages).map((section) => (
          <div
            key={section}
            onClick={() => setSelectedSection(section)}
            className={`cursor-pointer border border-gray-600 p-6 rounded-lg transition-transform transform ${
              selectedSection === section
                ? "bg-blue-300 text-black shadow-xl"
                : "hover:bg-blue-300 hover:text-black hover:-translate-y-1 hover:shadow-xl"
            } duration-300 shadow-lg`}
          >
            <h3 className="text-xl font-bold text-center uppercase tracking-wide">{section}</h3>
          </div>
        ))}
      </motion.div>

      <div ref={rightRef} className="w-full md:w-1/2 p-4 sm:p-6 text-white">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12"
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
        >
          {filledGridItems.map((item, index) => (
            <motion.div
              key={item.name || `placeholder-${index}`}
              custom={index}
              variants={itemVariants}
              className={`relative flex flex-col items-center justify-center min-h-[140px] min-w-[140px] sm:min-h-[180px] sm:min-w-[180px] md:min-h-[200px] md:min-w-[200px] lg:min-h-[220px] lg:min-w-[220px] space-y-4 p-4 sm:p-6 md:p-8 rounded-[20px] shadow-lg transition-all duration-700 ease-in-out hover:scale-110 grid-item ${animationClassByIndex(index)} ${!item.name ? 'invisible' : ''}`}
              style={{
                background: 'linear-gradient(to right, #1e3a8a, #1e40af, #1e3a8a)', /* New gradient */
                padding: '8px',
                borderRadius: '20px',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 0 12px 6px rgba(59, 130, 246, 0.8)', 
                backgroundSize: '200% 200%',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                border: '1px solid rgba(255, 255, 255, 0.5)',
              }}
            >
              <i className={`${item.icon} text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white`} style={{ transform: 'translateZ(20px)' }}></i>
              <span className="text-sm sm:text-md md:text-lg lg:text-xl font-semibold text-white text-center break-words px-2" style={{ transform: 'translateZ(20px)' }}>{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Languages;
