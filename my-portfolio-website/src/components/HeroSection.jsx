import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profilePicture from '../assets/pic.jpg';
import TypingEffect from './TypingEffect';
import EmojiEffect from './EmojiEffect';
import ParagraphEffect from './ParagraphEffect';

function HeroSection() {
  const TILAK_DESC = ["I'm Tilak Patel, a Computer Science major at Northeastern University with minors in Computer Engineering and Robotics. I have strong skills in Java, Python, JavaScript, and React, and experience in developing web applications, optimizing data management systems, and conducting research on privacy concerns with voice assistants. I've worked as a Network and Software Engineer Intern at GreenTree Capital, enhancing application efficiency and user experience. My projects include a Co-Op search web app, a FloodIt game, and a Portfolio website, showcasing my proficiency in full-stack development and automation."];

  const professionalWords = ["Software Engineer", "Full Stack Developer", "Tech Enthusiast", "Star Wars Nerd", "Avid Pizza Lover"];
  const emojiWords = ["💻", "👨‍💻", "📱", "🍿", "🍕"];

  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center border-b border-neutral-900"
      style={{ minHeight: 'calc(100vh - 64px)', marginTop: '0px' }}
    >
      <div className="w-full flex flex-wrap items-center justify-center lg:justify-between">
        <motion.div 
          className="w-full lg:w-1/2"
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
                className="font-bold text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent"
              >
                Tilak Patel <span style={{ color: '#000' }}>🫠</span>
              </motion.h1>
            </motion.a>
            <motion.span
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-bold text-4xl bg-clip-text tracking-tight bg-gradient-to-l from-blue-400 via-slate-400 to-violet-300 text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <TypingEffect 
                words={professionalWords} 
                onWordChange={() => setCurrentEmojiIndex((prev) => (prev + 1) % emojiWords.length)}
              /> 
              <span style={{ color: '#000' }}> 
                <EmojiEffect words={emojiWords} currentIndex={currentEmojiIndex} /> 
              </span>
            </motion.span>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="my-2 max-w-xl py-6 font-bold tracking-tighter text-white-299"
              whileHover={{ scale: 1.05 }}
            >
              <ParagraphEffect words={TILAK_DESC} />
            </motion.p>
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2 w-full flex justify-center lg:justify-end lg:p-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            className="rounded-lg border-2 border-gray-300 shadow-md"
            src={profilePicture}
            alt="profile picture of Tilak Patel"
            style={{ width: '500px', height: '500px', objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;