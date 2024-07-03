import React from 'react';
import profilePicture from '../assets/pic.jpg';
import TypingEffect from './TypingEffect';
import EmojiEffect from './EmojiEffect';
import ParagraphEffect from './ParagraphEffect';

function HeroSection() {
  const TILAK_DESC = ["I'm Tilak Patel, a Computer Science major at Northeastern University with minors in Computer Engineering and Robotics. I have strong skills in Java, Python, JavaScript, and React, and experience in developing web applications, optimizing data management systems, and conducting research on privacy concerns with voice assistants. I've worked as a Network and Software Engineer Intern at GreenTree Capital, enhancing application efficiency and user experience. My projects include a Co-Op search web app, a FloodIt game, and a Portfolio website, showcasing my proficiency in full-stack development and automation."]

  const professionalWords = ["Software Engineer", "Full Stack Developer", "Tech Enthusiast", "Star Wars Nerd", "Avid Pizza Lover"];
  const emojiWords = ["💻", "👨‍💻", "📱", "🍿", "🍕"];

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
          <a href="https://letmegooglethat.com/?q=Why+did+I+click+on+Tilak+Patel%3F+Am+I+a+idiot%3F" target="_blank" rel="noopener noreferrer">
            <h1 className="font-bold text-6xl lg:mt-16 tracking-thin lg:text-8xl pb-16 bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent">
              Tilak Patel <span style={{ color: '#000' }}>🫠</span>
            </h1>
            </a>
            <span className="font-bold text-4xl bg-clip-text tracking-tight bg-gradient-to-l from-blue-400 via-slate-400 to-violet-300 text-transparent mb-6">
            <TypingEffect words={professionalWords} /> <span style={{ color: '#000' }}> <EmojiEffect words={emojiWords}/> </span>
            </span>
            <p className="my-2 max-w-xl py-6 font-bold tracking-tighter text-white-299">
            <ParagraphEffect words={TILAK_DESC} />
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end lg:p-8">
          <img
            className="rounded-lg border-2 border-gray-300 shadow-md"
            src={profilePicture}
            alt="profile picture of Tilak Patel"
            style={{ width: '500px', height: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
