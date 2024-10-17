import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import moviePic from '../images/movieStreams.png';  
import portalPic from '../images/studentPortal.png';
import game from '../images/game.png'

const revealVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const ProjectShowcase = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const projectRefs = [
    useInView({ triggerOnce: true, threshold: 0.1 }),
    useInView({ triggerOnce: true, threshold: 0.1 }),
    useInView({ triggerOnce: true, threshold: 0.1 }),
    useInView({ triggerOnce: true, threshold: 0.1 }),
  ];

  const projects = [
    {
      title: 'Movie Streams',
      description: 'App built with WinForms that allows users to browse top movies, add favorites, create a watchlist, and search for movies.',
      technologies: 'C# | WinForms | Visual Studio | Movies API',
      image: moviePic,
      link: 'https://github.com/josshuabalita/MovieApplication'
    },
    {
      title: 'School Portal Website',
      description: 'The School Portal is a user-friendly platform that allows students to register, drop, or exchange courses and contact the administration for support.',
      technologies: 'React JS | Express JS | VS Code | MongoDB | API',
      image: portalPic,
      link: 'https://github.com/josshuabalita/SchoolPortalWebsite'
    },
    {
      title: 'UE Game Development Project',
      description: 'A game created using Unreal Engine, where I utilized tools like Blueprint scripting, physics, and visual effects. The game showcases immersive environments, dynamic lighting, and AI-driven characters, all developed with a focus on gameplay and quality graphics.',
      technologies: 'Unreal Engine | Blueprint Visual Scripting | Unreal Editor',
      image: game,
      link: 'https://drive.google.com/file/d/1e8p7JgRl6XdkA7WCIjpRX1ybDSqPOTcY/view?usp=drive_link'
    },
    {
      title: 'Stock Market/ Budgeting Website',
      description: 'The Stock Market/Budgeting Website is a platform that provides users with financial tools to track their expenses and view stock market information. It includes features such as budget planning, transaction tracking, and stock market analysis.',
      technologies: 'Angular JS | Spring Boot | VS Code | SQL | Docker | Jenkins',
      customContent: (
        <div className="w-full h-[400px] bg-gradient-to-r from-gray-300 to-gray-100 p-4 rounded-lg flex items-center justify-center">
          <div className="w-full h-full bg-black rounded-lg p-6 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Website in Progress...</h3>
            <div className="w-3/4 bg-lightGray rounded-full h-4 overflow-hidden">
              <div className="bg-accent h-full animate-progress-bar"></div>
            </div>
          </div>
          <style>{`
            @keyframes progress-bar {
              0% { width: 0%; }
              50% { width: 75%; }
              100% { width: 0%; }
            }
            .animate-progress-bar {
              animation: progress-bar 3s linear infinite;
            }
          `}</style>
        </div>
      ),
      link: 'https://github.com/josshuabalita/StockMarketBudgetingWebsite'
    }
  ];

  return (
    <div id="projects" className="flex flex-col items-center min-h-screen bg-black py-5 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={revealVariants}
        className="w-full text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold uppercase mt-12">
          My <span className="text-orange-500">Projects</span>.
        </h1>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="w-full flex flex-col md:flex-row justify-center items-center px-5 md:px-0 mb-12"
          ref={projectRefs[index][0]}
          initial="hidden"
          animate={projectRefs[index][1] ? "visible" : "hidden"}
          variants={revealVariants}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 items-center p-6 rounded-lg shadow-lg max-w-6xl w-full">
            {/* Image or Custom Content */}
            <motion.div className="w-full md:w-3/5 flex justify-center mb-6 md:mb-0 bg-gradient-to-r from-gray-300 to-gray-100 p-4 rounded-lg">
              {project.customContent || <img src={project.image} alt="Project showcase" className="rounded-lg w-full h-auto max-h-[400px] object-contain" />}
            </motion.div>
            {/* Text */}
            <motion.div className="w-full md:w-2/5 flex flex-col items-start">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              <div className="text-gray-600 flex items-center">
                <strong>{project.technologies}</strong>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-4 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110" aria-label="GitHub Repository" title={`${project.title} Repository`}>
                    <i className="fas fa-external-link-alt text-gray-700"></i>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectShowcase;