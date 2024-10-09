import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myPhoto from '../images/myPhoto.JPG';

// Animation variants for the reveal effect
const revealVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: 'easeInOut', delay },
  }),
};

const revealUpVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: 'easeInOut', delay },
  }),
};

// Timeline data for education
const educationTimeline = [
  {
    year: 'January 2023 - April 2025',
    degree: 'Diploma in Software Development',
    institution: 'Bow Valley College',
    location: 'Calgary, AB, CANADA',
    link: 'https://bowvalleycollege.ca/',
  },
  {
    year: 'September 2021 - December 2021',
    degree: 'IT Analyst Program, Bootcamp/Certificate',
    institution: 'NPower Canada',
    location: 'Calgary, AB, CANADA',
    link: 'https://npowercanada.ca/',
  },
];

// Timeline data for work experience
const workTimeline = [
  {
    year: 'December 2023 - PRESENT',
    field: 'Application Support Analyst',
    institution: 'YouVersion',
    location: 'Edmond, OK, USA | Remote',
    link: 'https://www.youversion.com/',
  },
];

// Main About Section
const About = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="min-h-screen flex flex-col items-center bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between my-15">
        
        <motion.div
          className="w-full flex flex-col md:flex-row items-start justify-between py-12"
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={revealVariants}
        >
          {/* Left Section for Photo */}
          <div className="w-full md:w-auto flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0">
            {/* Outer Yellow Gradient Border */}
            <div className="relative p-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg">
              {/* Inner Photo with Solid Border and Shadow */}
              <img
                src={myPhoto}
                alt="Professional Headshot"
                className="w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] object-cover border-4 border-gray-300 rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Section for About Content */}
          <div className="w-full md:w-2/3 flex flex-col justify-center text-left pl-0 md:pl-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              ABOUT <span className="text-orange-500">ME.</span>
            </h1>
            <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>  {/* Simple and elegant underline */}

            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              I am an entry-level software developer currently completing my studies at Bow Valley College in Calgary, AB. I thrive on solving technical challenges and am always eager to learn and grow in this constantly evolving field. My goal is to contribute my skills in a dynamic team environment, where I can collaborate and make a meaningful impact through technology.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              I have a deep passion for software development, with a particular interest in backend development. This has driven me to continuously improve my skills and take on challenging projects.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Outside of coding, I enjoy playing video games, watching sports, working out, and playing basketball. These hobbies help me stay motivated and balanced, fueling my creativity and problem-solving abilities in tech.
            </p>
          </div>
        </motion.div>

        {/* Education and Work Timeline */}
        <motion.div
          ref={timelineRef}
          initial="hidden"
          animate={timelineInView ? 'visible' : 'hidden'}
          variants={revealUpVariants}
        >
          <div className="container mx-auto p-4 sm:p-6 lg:p-10 md:mt-10 md:mb-10 md:ml-10">
            <div className="relative border-l border-gray-200 dark:border-gray-700">
              
              {/* Education Timeline */}
              <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading text-blue-500 whitespace-nowrap mb-6"
                style={{
                  textShadow: '3px 3px 0 #000, 6px 6px 0 #333',
                  fontWeight: '800',
                }}
              >
                EDUCATION
              </h3>
              {educationTimeline.map((item, index) => (
                <div key={index} className="mb-10 ml-6 sm:ml-8">
                  <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-900 shadow-lg shadow-blue-500/50 animate-glowBlue"></span>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h4 className="text-lg sm:text-xl font-semibold">{item.degree}</h4>
                    <p className="text-gray-500 mt-2 sm:mt-0 sm:ml-8">{item.year}</p>
                  </div>
                  <a href={item.link} target='_blank' rel='noopener noreferrer' className="relative text-gray-600 cursor-pointer inline-block after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-gray-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100"
                  >{item.institution}</a>
                  <p className="text-gray-600">{item.location}</p>
                </div>
              ))}
              
              {/* Work Experience Timeline */}
              <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading text-green-500 whitespace-nowrap mb-6"
                style={{
                  textShadow: '3px 3px 0 #000, 6px 6px 0 #333',
                  fontWeight: '800',
                }}
              >
                WORK EXPERIENCE
              </h3>
              {workTimeline.map((item, index) => (
                <div key={index} className="mb-10 ml-6 sm:ml-8">
                  <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-green-500 rounded-full ring-8 ring-white dark:ring-gray-900 shadow-lg shadow-green-500/50 animate-glowGreen"></span>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <h4 className="text-lg sm:text-xl font-semibold">{item.field}</h4>
                    <p className="text-gray-500 mt-2 sm:mt-0 sm:ml-8">{item.year}</p>
                  </div>
                  <a href={item.link} target='_blank' rel='noopener noreferrer' className="relative text-gray-600 cursor-pointer inline-block after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-gray-600 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
                    {item.institution}</a>
                  <p className="text-gray-600">{item.location}</p>              
                </div>
              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
