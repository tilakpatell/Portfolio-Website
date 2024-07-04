import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FaLocationArrow } from 'react-icons/fa';
import GitHubCalendar from "react-github-calendar";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="mt-40"
    >
      <div className="relative flex justify-center items-center my-16">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute w-full max-w-3xl h-20 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 rounded-lg z-0"
        ></motion.div>
        <motion.h2
          variants={itemVariants}
          className='text-6xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold z-10 relative'
        >
          Projects
        </motion.h2>
      </div>

      <motion.div
        className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10"
        variants={containerVariants}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-between sm:w-96 w-[80vw] bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300"
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <h2 className="font-bold lg:text-2xl md:text-xl text-base mb-2 text-white text-center">
              {project.title}
            </h2>

            <p className="lg:text-xl lg:font-normal font-light text-sm mb-4 text-gray-300 text-center">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                  whileHover={{ scale: 1.1, backgroundColor: "#4A5568" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.a 
              href={project.link}
              className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <span className="mr-2">View Project</span>
              <FaLocationArrow />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* GitHub Calendar Section */}
      <motion.div
        className="mt-20"
        variants={containerVariants}
      >
        <h2 className="text-4xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold mb-10">
          Days I <strong className="text-purple-500">Code</strong>
        </h2>
        <div className="flex justify-center">
          <GitHubCalendar
            username="tilakpatell"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;