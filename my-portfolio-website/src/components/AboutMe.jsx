import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTransition, animated } from '@react-spring/web';

import aboutImg1 from '../assets/aboutImg1.jpg';
import aboutImg2 from '../assets/aboutImg2.jpg';
import aboutImg3 from '../assets/aboutImg3.jpg';

function AboutMe() {
  const [index, setIndex] = useState(0);
  const images = [aboutImg1, aboutImg2, aboutImg3];
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const transitions = useTransition(images[index], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 }
  };

  return (
    <motion.div 
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5 }}
      className='border-b pb-10 border-neutral-900'
    >
      <motion.div 
        className="relative flex justify-center items-center my-16"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.2, width: '300px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute h-20 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 rounded-lg"
        ></motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-6xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold z-10'
        >
          About Me
        </motion.h2>
      </motion.div>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <motion.div 
          className='w-full lg:w-2/3 p-6'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className='items-center justify-center flex relative w-full' style={{ height: '80vh' }}>
            {transitions((style, item) => (
              <animated.img
                src={item}
                alt="About Me"
                style={{ ...style, position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className='w-full lg:w-1/3 p-4'
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className='text-xl leading-relaxed text-white'>
            <p className='mb-4'>
              Hey there! 👋 I'm Tilak Patel, a passionate Computer Science major at Northeastern University, with minors in Computer Engineering and Robotics. I'm all about that perfect blend of tech and fun! 🎮🍕🌟
            </p>
            <p className='mb-4'>When I'm not busy coding or tinkering with tech, you'll find me:</p>
            <ul className='list-disc list-inside mb-4 space-y-2'>
              <li>Geeking out over pop culture! 🎬 I'm a huge fan of Star Wars, Marvel, and The Boys. Always up for a movie marathon or a deep dive into fan theories!</li>
              <li>Food enthusiast extraordinaire! 🍕🍛 Pizza is my kryptonite, and I'm on a never-ending quest to find the best Indian food in town. Let's swap restaurant recommendations!</li>
              <li>Gaming till the wee hours! 🎮 Whether it's immersive RPGs, fast-paced FPS, or quirky indie gems, I'm always ready to level up and take on new challenges.</li>
            </ul>
            <p className='mb-4'>
            I've also had the amazing experience of volunteering at Swaminarayan Akshardham, which has deepened my cultural understanding and reinforced the importance of giving back to the community. 🌍❤️
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;