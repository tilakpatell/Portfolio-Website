import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { PROJECTS } from '../constants';
import { FaArrowRight } from 'react-icons/fa';

function Projects() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const ProjectSection = ({ project, index }) => {
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    };

    const handleMouseLeave = () => {
      imageRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    return (
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="mb-32 bg-white bg-opacity-5 rounded-xl p-8 backdrop-filter backdrop-blur-lg"
      >
        <h3 className="text-4xl font-bold text-white mb-2">{project.title} </h3>
        <p className="text-lg text-purple-300 mb-6">{project.shortDescription}</p>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div 
            className="w-full lg:w-1/2" 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave}
          >
            <img 
              ref={imageRef}
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-200 ease-out"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-xl text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-purple-800 bg-opacity-50 text-purple-200 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="text-purple-500">&lt;/Personal</span> <span className="text-white">Projects&gt;</span>
            <div className="h-1 w-60 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 mx-auto m-4 rounded-full "></div>
          </h2>
        </motion.div>

        {PROJECTS.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
