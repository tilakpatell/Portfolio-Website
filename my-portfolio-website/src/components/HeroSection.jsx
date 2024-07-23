import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePicture from '../assets/pic.jpg';
import surprisePicture from '../assets/surprisePicture.jpg'; 
import TypingEffect from './TypingEffect';
import EmojiEffect from './EmojiEffect';
import ParagraphEffect from './ParagraphEffect';

function HeroSection() {
  const TILAK_DESC = ["I'm Tilak Patel, a Computer Science major at Northeastern University with minors in Computer Engineering and Robotics. I have strong skills in Java, Python, JavaScript, and React, and experience in developing web applications, optimizing data management systems, and conducting research on privacy concerns with voice assistants. I've worked as a Network and Software Engineer Intern at GreenTree Capital, enhancing application efficiency and user experience. My projects include a Co-Op search web app, a FloodIt game, and a Portfolio website, showcasing my proficiency in full-stack development and automation."];

  const professionalWords = ["Software Engineer", "Full Stack Developer", "Tech Enthusiast", "Star Wars Nerd", "Avid Pizza Lover"];
  const emojiWords = ["💻", "👨‍💻", "📱", "🍿", "🍕"];

  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDoubleClick = () => {
    setIsFlipped(true);
  };

  const handleClickOutside = () => {
    if (isFlipped) {
      setIsFlipped(false);
    }
  };

  const WelcomeText = () => (
    <motion.div
      className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-center mb-8 sm:mb-16 pt-8 sm:pt-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {['<','/','W', 'e', 'l', 'c', 'o', 'm', 'e','>'].map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black p-4 sm:p-8 rounded-3xl" onClick={handleClickOutside}>
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-grow flex flex-col items-center justify-start z-10 pt-4 sm:pt-8 pb-8 sm:pb-16"
      >
        <WelcomeText />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-8">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            <motion.div 
              className="w-full lg:w-3/5 mb-8 lg:mb-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex flex-col items-center lg:items-start">
                <motion.a 
                  href="https://letmegooglethat.com/?q=Why+did+I+click+on+Tilak+Patel%3F+Am+I+a+idiot%3F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.h1
                    className="font-bold text-4xl sm:text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    Tilak Patel <span style={{ color: '#fff' }}>🫠</span>
                  </motion.h1>
                </motion.a>
                <motion.span
                  className="font-bold text-xl sm:text-2xl lg:text-4xl bg-clip-text tracking-tight bg-gradient-to-l from-blue-400 via-slate-400 to-violet-300 text-transparent mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <TypingEffect 
                    words={professionalWords} 
                    onWordChange={() => setCurrentEmojiIndex((prev) => (prev + 1) % emojiWords.length)}
                  /> 
                  <span style={{ color: '#fff' }}> 
                    <EmojiEffect words={emojiWords} currentIndex={currentEmojiIndex} /> 
                  </span>
                </motion.span>
                <motion.p
                  className="max-w-xl py-3 font-bold tracking-tighter text-sm sm:text-base text-neutral-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {TILAK_DESC[0]}
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-2/5 w-full flex justify-center lg:justify-end"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <AnimatePresence>
                <motion.div
                  key={isFlipped ? 'back' : 'front'}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  exit={{ rotateY: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    width: '500px',
                    height: '500px'
                  }}
                  onDoubleClick={handleDoubleClick}
                  className="cursor-pointer relative"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg border-2 border-gray-300 shadow-md absolute w-full h-full object-cover"
                    src={profilePicture}
                    alt="profile picture of Tilak Patel"
                    style={{ 
                      backfaceVisibility: 'hidden'
                    }}
                  />
                  <motion.div
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <img
                      src={surprisePicture}
                      alt="Surprise!"
                      className="rounded-lg border-2 border-gray-300 shadow-md w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">SURPRISE!</h2>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
