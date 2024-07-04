import React, { useState } from 'react';
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
    <div className="relative flex flex-col min-h-screen overflow-hidden" onClick={handleClickOutside}>
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="font-bold text-4xl sm:text-5xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent mb-3"
                  >
                    Tilak Patel <span style={{ color: '#fff' }}>🫠</span>
                  </motion.h1>
                </motion.a>
                <motion.span
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
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
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="max-w-xl py-3 font-bold tracking-tighter text-sm sm:text-base text-neutral-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <ParagraphEffect words={TILAK_DESC} />
                </motion.p>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-2/5 w-full flex justify-center lg:justify-end"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.1 }}
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