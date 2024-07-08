import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTransition, animated } from '@react-spring/web';

import aboutImg1 from '../assets/aboutImg1.jpg';
import aboutImg2 from '../assets/aboutImg2.jpg';
import aboutImg3 from '../assets/aboutImg3.jpg';
import aboutImg4 from '../assets/aboutImg4.jpg';

function AboutMe() {
  const [index, setIndex] = useState(0);
  const images = [aboutImg1, aboutImg2, aboutImg3, aboutImg4];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(images[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="mt-20 md:mt-40 mb-20">
      <div className="relative flex justify-center items-center my-8 md:my-16">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full max-w-3xl h-16 md:h-20 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 rounded-lg z-0"
        ></motion.div>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-6xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold z-10 relative px-4 py-2"
        >
          About Me
        </motion.h2>
      </div>

      <div className="relative overflow-hidden bg-black p-4 sm:p-8 rounded-3xl">
        {/* Rounded purple background */}
        <div className="absolute inset-4 sm:inset-8 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 opacity-20"></div>
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              backgroundSize: ['100% 100%', '200% 200%'],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 20,
            }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%239C92AC" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div 
            className='w-full lg:w-3/5 p-6'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className='items-center justify-center flex relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl'>
              {transitions((style, item) => (
                <animated.img
                  src={item}
                  alt="About Me"
                  style={{ ...style, position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            className='w-full lg:w-2/5 p-6'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className='text-lg leading-relaxed text-gray-300 bg-opacity-80 bg-purple-900 p-8 rounded-lg shadow-2xl'>
              <p className='mb-4'>
                Hey there! 👋 I'm Tilak Patel, a passionate Computer Science major at Northeastern University, with minors in Computer Engineering and Robotics. 🎮🍕🌟
              </p>
              <p className='mb-4'>When I'm not busy coding or tinkering with tech, you'll find me:</p>
              <ul className='list-disc list-inside mb-4 space-y-2'>
                <li>Geeking out over pop culture! 🎬 I'm a huge fan of Star Wars, Marvel, and The Boys. </li>
                <li>Gaming till the wee hours! 🎮, I'm always ready to level up and take on new challenges.</li>
              </ul>
              <p className='mb-4'>
                I've also had the amazing experience of volunteering at Swaminarayan Akshardham, which has deepened my cultural understanding and reinforced the importance of giving back to the community. 🌍❤️
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;