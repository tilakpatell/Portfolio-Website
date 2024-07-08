import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES } from 'C:/Users/tilak/Documents/Python/Portfolio Website/my-portfolio-website/src/constants/index.js';
import { FaBriefcase, FaCalendar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from 'react-icons/di';

const TechStack = () => {
  const techStack = [
    { Icon: DiJavascript1, color: '#f0db4f' },
    { Icon: DiNodejs, color: '#3C873A' },
    { Icon: DiReact, color: '#61DBFB' },
    { Icon: DiGit, color: '#F1502F' },
    { Icon: DiPython, color: '#3776AB' },
    { Icon: DiJava, color: '#007396' }
  ];

  return (
    <div className="flex justify-center flex-wrap gap-8 p-10">
      {techStack.map(({ Icon, color }, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.1 }}
          className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center"
          style={{ width: '80px', height: '80px', color }}
        >
          <Icon size="3em" />
        </motion.div>
      ))}
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardVariants = {
    closed: { height: 'auto' },
    open: { height: 'auto' }
  };

  const contentVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } }
  };

  return (
    <motion.div
      layout
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={cardVariants}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg shadow-lg overflow-hidden mb-8"
    >
      <motion.div 
        className="p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex items-center mb-2">
            <FaBriefcase className="text-blue-300 mr-2" />
            <h3 className="text-xl font-bold text-white text-center">{experience.role}</h3>
          </div>
          <h4 className="text-lg font-semibold text-blue-300 text-center">{experience.company}</h4>
        </div>
        <div className="flex items-center justify-center mb-4 text-gray-300">
          <FaCalendar className="mr-2" />
          <span>{experience.year}</span>
        </div>
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown className="text-blue-300" />
          </motion.div>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={contentVariants}
            className="px-6 pb-6"
          >
            <p className="text-gray-300 mb-4 text-center">{experience.description}</p>
            <motion.div 
              className="flex flex-wrap gap-2 mb-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-blue-800 text-blue-200 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Experience = () => {
  const brightonLiquorsExp = {
    year: "Feb 2023 - Jun 2023",
    role: "Sales & IT Associate",
    company: "Brighton Liquors",
    description: "As an employee of a liquor store, I gained valuable experience in customer service and sales in a fast-paced retail environment. I also maintained POS and computer systems and installed security software. I developed strong communication skills as I interacted with a diverse customer base, including those with different preferences and needs.",
    technologies: ["Customer Service", "Inventory Management", "POS Systems", "Microsoft Office", "Python"],
  };

  const experiences = [
    ...EXPERIENCES.filter(exp => exp.company === "GreenTree Capital and Asset Management"),
    ...EXPERIENCES.filter(exp => exp.company !== "GreenTree Capital and Asset Management"),
    brightonLiquorsExp
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-8 sm:mt-16"
    >
      <div className="relative flex justify-center items-center my-8 sm:my-16">
        <div className="absolute w-full max-w-3xl h-16 sm:h-20 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 rounded-lg opacity-20"></div>
        <h2 className='text-4xl sm:text-6xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold z-10 relative px-4'>
          Experiences
        </h2>
      </div>
      <TechStack />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8 px-4 sm:px-0">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            experience={experience} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;