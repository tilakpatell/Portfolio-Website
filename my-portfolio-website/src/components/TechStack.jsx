import React from 'react';
import { motion } from 'framer-motion';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from 'react-icons/di';

function TechStack() {
  const techStack = [
    { Icon: DiJavascript1, color: '#f0db4f' },
    { Icon: DiNodejs, color: '#3C873A' },
    { Icon: DiReact, color: '#61DBFB' },
    { Icon: DiGit, color: '#F1502F' },
    { Icon: DiPython, color: '#3776AB' },
    { Icon: DiJava, color: '#007396' }
  ];

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-40"
    >
      <div 
        className="relative flex justify-center items-center my-16"
      >
        {/* Ensure the z-index of the background box is lower than the text */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute w-full max-w-3xl h-20 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 rounded-lg z-0"
        ></motion.div>
        <motion.h2
          variants={variants}
          className='text-6xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold z-10 relative'
        >
          Experiences
        </motion.h2>
      </div>
      <div className="flex justify-center flex-wrap gap-8 p-10">
        {techStack.map(({ Icon, color }, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center"
            style={{ width: '80px', height: '80px', color }}
          >
            <Icon size="3em" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default TechStack;
