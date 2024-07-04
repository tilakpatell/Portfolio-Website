import React, { useState, useEffect, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import personallogo from '../assets/file.png';
import { FaGithub, FaLinkedin, FaInstagram, FaBars } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const greetings = ['Hi!', 'Hello!', 'Hola!', 'Bonjour!', 'Swagatam!', 'Namaste!', "Jai Shri Krishna!", "Jai Swaminarayan!", "What's good!"];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const dragControls = useDragControls();
  const buttonRef = useRef(null);
  const [buttonPosition, setButtonPosition] = useState(() => {
    const saved = localStorage.getItem('sidebarButtonPosition');
    return saved ? JSON.parse(saved) : { y: window.innerHeight / 2 };
  });

  const navItems = [
    { name: 'Intro', emoji: '👋' },
    { name: 'About', emoji: '👨‍💻' },
    { name: 'Experiences', emoji: '🚀' },
    { name: 'Projects', emoji: '🌟' },
    { name: 'Resume', emoji: '📄' },
    { name: 'Contact', emoji: '📬' }
  ];

  useEffect(() => {
    const typeWriter = (text, i = 0) => {
      if (i < text.length) {
        setTypewriterText(text.substring(0, i + 1));
        setTimeout(() => typeWriter(text, i + 1), 100);
      } else {
        setTimeout(() => {
          setTypewriterText('');
          setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        }, 4000);
      }
    };

    typeWriter(greetings[currentGreetingIndex]);
  }, [currentGreetingIndex]);

  useEffect(() => {
    localStorage.setItem('sidebarButtonPosition', JSON.stringify(buttonPosition));
  }, [buttonPosition]);

  useEffect(() => {
    const handleResize = () => {
      if (buttonRef.current) {
        const buttonHeight = buttonRef.current.offsetHeight;
        const maxY = window.innerHeight - buttonHeight;
        setButtonPosition(prev => ({
          y: Math.min(Math.max(prev.y, 0), maxY)
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragEnd = (event, info) => {
    if (buttonRef.current) {
      const buttonHeight = buttonRef.current.offsetHeight;
      const maxY = window.innerHeight - buttonHeight;
      const newY = Math.min(Math.max(info.point.y, 0), maxY);
      setButtonPosition({ y: newY });
    }
  };

  return (
    <>
      <motion.button
        ref={buttonRef}
        drag="y"
        dragControls={dragControls}
        dragMomentum={false}
        dragConstraints={{
          top: 0,
          bottom: buttonRef.current ? window.innerHeight - buttonRef.current.offsetHeight : window.innerHeight
        }}
        onDragEnd={handleDragEnd}
        initial={buttonPosition}
        animate={buttonPosition}
        style={{ position: 'fixed', left: 0 }}
        className="z-50 bg-gray-800 text-white p-2 rounded-r-lg cursor-ns-resize"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </motion.button>

      <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-6 z-40 overflow-y-auto"
      >
        <div className="flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-8"
          >
            <img className="mr-2 w-12 filter hue-rotate-180" src={personallogo} alt="personallogo" />
            <h1 className="text-xl bg-gradient-to-l bg-clip-text from-blue-400 via-slate-400 to-violet-300 text-transparent">
              <a href="https://www.tilakpatell.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                tilakpatell.com
              </a>
            </h1>
          </motion.div>

          <div className="flex-grow">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </div>

          <div className="mt-auto">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
              {typewriterText}
              <span className="animate-blink">|</span>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

function NavItem({ item }) {
  return (
    <motion.a
      href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
      className="text-base font-bold relative group block py-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        {item.name} {item.emoji}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all group-hover:w-full"></span>
    </motion.a>
  );
}

function TopBar() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-16 flex items-center justify-center z-30"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="flex space-x-8"
      >
        <SocialIcon href="https://www.linkedin.com/in/tilakpatell" icon={FaLinkedin} color="text-blue-200" />
        <SocialIcon href="https://github.com/tilakpatell" icon={FaGithub} color="text-gray-200" />
        <SocialIcon href="https://www.instagram.com/tilakpatell" icon={FaInstagram} color="text-pink-200" />
      </motion.div>
    </motion.div>
  );
}

function SocialIcon({ href, icon: Icon, color }) {
  return (
    <motion.a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className={`text-4xl ${color} transition duration-300 hover:text-white`} />
    </motion.a>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </>
  );
}