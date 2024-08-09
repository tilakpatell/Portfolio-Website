import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const TimelineItem = ({ date, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="mb-12"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <div className="text-lg font-bold text-purple-400">{date}</div>
        </div>
        <div className="md:w-2/3">
          <div className="bg-white bg-opacity-5 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function CodingJourneyTimeline() {
  const journeyData = [
    { date: 'June 2023', title: 'First Line of Code', description: 'Wrote my first "Hello, World!" program during summer break, sparking my interest in coding.' },
    { date: 'August 2023', title: 'First Personal Project', description: 'Developed a simple calculator app using Python, applying my newly acquired skills.' },
    { date: 'September 2023', title: 'Started College', description: 'Began my journey as a Computer Science major at Northeastern University in Greece.' },
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-20 md:mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl sm:text-6xl font-bold">
          <span className="text-purple-500">&lt;/My Coding</span> <span className="text-white">Journey</span><span className="text-purple-500">&gt;</span>
          <div className="h-1 w-60 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 mx-auto m-4 rounded-full "></div>
        </h2>
      </motion.div>

      <div className="space-y-12">
        {journeyData.map((item, index) => (
          <TimelineItem 
            key={index} 
            {...item} 
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-16 flex justify-center space-x-6"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`text-3xl bg-gradient-to-r ${link.gradient} p-3 rounded-full text-white shadow-lg`}
          >
            <link.icon />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default CodingJourneyTimeline;
