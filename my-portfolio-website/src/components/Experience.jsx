import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCES, TECH_STACK } from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/constants/index.js';
import { FaCalendar, FaBriefcase, FaCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const TechStack = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap justify-center gap-4 my-12"
    >
      {TECH_STACK.map(({ icon, name }, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-800 bg-opacity-20 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl hover:bg-opacity-30 w-24 h-24"
        >
          <img src={icon} alt={name} className="w-10 h-10 mb-2 object-contain" />
          <span className="text-white text-xs font-medium text-center">{name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-purple-900 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden w-full max-w-2xl mx-auto mb-8 hover:bg-opacity-30 transition-all duration-300"
    >
      <motion.div layout className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden mr-4">
              <img src={experience.logo} alt={experience.company} className="w-12 h-12 object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
              <h4 className="text-lg text-purple-300">{experience.role}</h4>
            </div>
          </div>
          <div className="flex items-center text-gray-300">
            <FaCalendar className="mr-2" />
            <span>{experience.year}</span>
          </div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-700 bg-opacity-50 text-purple-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-300"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          {isExpanded ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const sortedExperiences = EXPERIENCES.sort((a, b) => {
    const getEndYear = (year) => {
      const years = year.split('-');
      return parseInt(years[years.length - 1]);
    };

    const aYear = getEndYear(a.year);
    const bYear = getEndYear(b.year);
    return bYear - aYear;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-purple-500">&lt;/Experience</span> <span className="text-white">and Skills</span><span className="text-purple-500">&gt;</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Dive into my professional journey and technical expertise
          </p>
          <div className="h-1 w-60 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 mx-auto m-2 rounded-full "></div>
        </motion.div>

        <TechStack />
        
        <div className="mt-16 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center mb-8"
          >
            <FaBriefcase className="text-4xl text-purple-400 mr-4" />
            <h3 className="text-3xl font-semibold text-white">Work Experience</h3>
          </motion.div>

          {sortedExperiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <FaCode className="text-5xl text-purple-400 mx-auto mb-4" />
          <p className="text-xl text-gray-300">
            Always learning, always coding. Check out my latest projects to see these skills in action!
          </p>
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
