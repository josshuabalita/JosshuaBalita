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
  switch (index % 3) {
    case 0:
      return 'animate-floatSlow';
    case 1:
      return 'animate-floatMedium';
    default:
      return 'animate-floatFast';
  }
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
    <div id="skills" className="flex flex-wrap min-h-screen bg-black py-5">
      {/* Centered Skills Title */}
      <motion.div
        ref={skillsTitleRef} 
        initial={{ opacity: 0, x: -100 }} 
        animate={skillsTitleInView ? { opacity: 1, x: 0 } : {}} 
        transition={{ duration: 0.7, ease: 'easeOut' }} 
        className="w-full text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          SKILLS
        </h1>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Left Section */}
      <motion.div 
        ref={leftRef}
        initial="hidden"
        animate={leftInView ? "visible" : "hidden"}
        variants={revealVariants}
        className="w-full md:w-1/2 p-6 text-white space-y-8"
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

      {/* Right Section */}
      <div ref={rightRef} className="w-full md:w-1/2 p-6 text-white">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
        >
          {filledGridItems.map((item, index) => (
            <motion.div 
              key={item.name || `placeholder-${index}`}
              custom={index}
              variants={itemVariants}
              className={`flex flex-col items-center justify-center min-h-[220px] space-y-4 p-6 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-xl ${animationClassByIndex(index)} ${
                !item.name ? 'invisible' : '' /* Hide placeholders */}`}
            >
              <i className={`${item.icon} text-5xl text-blue-400`}></i>
              <span className="text-2xl font-semibold text-white text-center">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Languages;



