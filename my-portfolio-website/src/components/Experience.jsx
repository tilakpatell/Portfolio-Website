import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg shadow-lg overflow-hidden mb-8"
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaBriefcase className="text-blue-300 mr-2" />
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
          </div>
          {isOpen ? <FaChevronUp className="text-blue-300" /> : <FaChevronDown className="text-blue-300" />}
        </div>
        <h4 className="text-lg font-semibold text-blue-300 mb-2">{experience.company}</h4>
        <div className="flex items-center mb-4 text-gray-300">
          <FaCalendar className="mr-2" />
          <span>{experience.year}</span>
        </div>
      </div>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-300 mb-4">{experience.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.technologies.map((tech, index) => (
              <span key={index} className="bg-blue-800 text-blue-200 px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
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
    <div className="mt-16">
      <div className="relative flex justify-center items-center my-16">
        <div className="absolute w-full max-w-3xl h-20 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 rounded-lg opacity-20"></div>
        <h2 className='text-6xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold z-10 relative'>
          Experiences
        </h2>
      </div>
      <TechStack />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            experience={experience} 
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;