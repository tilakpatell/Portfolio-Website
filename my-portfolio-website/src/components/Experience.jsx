import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { EXPERIENCES } from 'C:/Users/tilak/Documents/Python/Portfolio Website/my-portfolio-website/src/constants/index.js';
import { FaBriefcase, FaCalendar, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';

const ExperienceCard = ({ experience, index, moveCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const dragControls = useDragControls();

  const handleDoubleClick = () => {
    setIsFullScreen(true);
    setShowGif(true);
  };

  const handleClose = () => {
    setIsFullScreen(false);
    setShowGif(false);
  };

  return (
    <motion.div
      layout
      drag
      dragControls={dragControls}
      onDragStart={() => moveCard(index)}
      dragSnapToOrigin
      className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg shadow-lg overflow-hidden mb-8 cursor-move"
      onDoubleClick={handleDoubleClick}
    >
      <motion.div 
        className="p-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FaBriefcase className="text-blue-300 mr-2" />
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FaChevronUp className="text-blue-300" /> : <FaChevronDown className="text-blue-300" />}
          </motion.div>
        </div>
        <h4 className="text-lg font-semibold text-blue-300 mb-2">{experience.company}</h4>
        <div className="flex items-center mb-4 text-gray-300">
          <FaCalendar className="mr-2" />
          <span>{experience.year}</span>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <p className="text-gray-300 mb-4">{experience.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-800 text-blue-200 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          >
            <motion.div
              className="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-lg shadow-2xl w-full max-w-4xl relative"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              >
                <FaTimes size={24} />
              </button>
              <div className="transform rotate-y-180">
                {showGif ? (
                  <img
                    src={experience.gif || "https://example.com/default-experience.gif"}
                    alt={`${experience.company} GIF`}
                    className="w-full rounded-lg shadow-lg"
                  />
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-white mb-4">{experience.role} at {experience.company}</h2>
                    <p className="text-gray-300 mb-6">{experience.description}</p>
                  </>
                )}
              </div>
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
    gif: "https://example.com/brighton-liquors.gif",
  };

  const [experiences, setExperiences] = useState([
    ...EXPERIENCES.filter(exp => exp.company === "GreenTree Capital and Asset Management"),
    ...EXPERIENCES.filter(exp => exp.company !== "GreenTree Capital and Asset Management"),
    brightonLiquorsExp
  ]);

  const moveCard = (dragIndex) => {
    setExperiences((prevExperiences) => {
      const draggedCard = prevExperiences[dragIndex];
      const newExperiences = prevExperiences.filter((_, index) => index !== dragIndex);
      newExperiences.splice(dragIndex, 0, draggedCard);
      return newExperiences;
    });
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={index} 
            experience={experience} 
            index={index}
            moveCard={moveCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;