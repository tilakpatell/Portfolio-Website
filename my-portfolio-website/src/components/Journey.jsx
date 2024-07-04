import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const TimelineItem = ({ date, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center mb-8`}
    >
      <div className="w-1/2 px-4">
        <div className={`p-4 rounded-lg shadow-lg ${index % 2 === 0 ? 'bg-purple-600' : 'bg-blue-600'}`}>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-white text-sm mt-2">{description}</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-4 h-4 bg-white rounded-full border-4 border-purple-500 z-10"></div>
      </div>
      <div className="w-1/2 px-4 flex justify-center">
        <div className="text-lg font-bold text-purple-400">{date}</div>
      </div>
    </motion.div>
  );
};

function CodingJourneyTimeline() {
  const journeyData = [
    { date: 'June 2023', title: 'First Line of Code', description: 'Wrote my first "Hello, World!" program during summer break, sparking my interest in coding.' },
    { date: 'August 2023', title: 'First Personal Project', description: 'Developed a simple calculator app using Python, applying my newly acquired skills.' },
    { date: 'September 2024', title: 'Started College', description: 'Began my journey as a Computer Science major at Northeastern University at Greece.' },
    { date: 'March 2024', title: 'First College Project', description: 'Completed my first major programming assignment in college, building on my pre-college experiences.' },
    { date: 'May 2024', title: 'Completed Freshman Year', description: 'Successfully finished my first year of college with a strong foundation in computer science.' },
    { date: 'July 2024', title: 'Looking Ahead', description: 'Preparing for my sophomore year, excited to tackle more advanced courses and new coding challenges.' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/tilakpatell', gradient: 'from-gray-400 to-gray-600' },
    { icon: FaInstagram, url: 'https://Instagram.com/tilakpatell', gradient: 'from-pink-400 to-red-600' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/tilakpatell', gradient: 'from-blue-400 to-blue-600' },
    { icon: FaEnvelope, url: 'mailto:tilaknyl@gmail.com', gradient: 'from-red-400 to-red-600' }
  ];

  const handleSocialClick = (url) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
    >
      <div className="relative flex justify-center items-center my-16">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full max-w-3xl h-20 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 rounded-lg z-0"
        ></motion.div>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-6xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold z-10 relative px-4 py-2"
        >
          My Coding Journey
        </motion.h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-300"></div>
        <div className="relative z-10">
          {journeyData.map((item, index) => (
            <TimelineItem 
              key={index} 
              {...item} 
              index={index}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-6 bg-purple-500 rounded-full border-4 border-white z-20 relative"></div>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 flex justify-center space-x-8"
      >
        {socialLinks.map((link, index) => (
          <motion.button
            key={index}
            onClick={() => handleSocialClick(link.url)}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`text-4xl bg-gradient-to-r ${link.gradient} p-3 rounded-full text-white shadow-lg`}
          >
            <link.icon />
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default CodingJourneyTimeline;