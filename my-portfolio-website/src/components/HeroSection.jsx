import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profilePicture from '../assets/pic.jpg';

function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-top justify-center px-4 py-12 overflow-hidden particle-bg spotlight">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative max-w-5xl w-full mx-auto text-center z-10"
      >
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-light text-purple-300 mb-4 gradient-text">
          Hello, I'm
        </motion.h2>
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 neon-glow">
          Tilak Patel
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={profilePicture}
            alt="Tilak Patel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 opacity-30" />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {['Software Engineer', 'Full Stack Developer', 'AI Enthusiast'].map((title, index) => (
            <span key={index} className="px-4 py-2 bg-purple-800 bg-opacity-30 rounded-full text-purple-200 text-sm md:text-base glitch" data-text={title}>
              {title}
            </span>
          ))}
        </motion.div>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Computer Science major at Northeastern University, passionate about machine learning and artificial intelligence.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex justify-center gap-6">
          <a 
            href="/about" 
            className="px-8 py-3 bg-purple-600 bg-opacity-80 text-white rounded-full font-semibold hover:bg-opacity-100 transition duration-300"
          >
            About Me
          </a>
          <a 
            href="/projects" 
            className="px-8 py-3 border-2 border-purple-600 text-purple-300 rounded-full font-semibold hover:bg-purple-600 hover:bg-opacity-30 hover:text-white transition duration-300"
          >
            My Projects
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
