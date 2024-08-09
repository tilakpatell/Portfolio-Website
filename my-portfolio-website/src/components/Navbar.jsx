import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import personallogo from '../assets/logo.png';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaFileAlt, FaRocket, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { name: 'Home', icon: FaHome, path: '/' },
  { name: 'About', icon: FaUser, path: '/about' },
  { name: 'Experience', icon: FaBriefcase, path: '/experience' },
  { name: 'Projects', icon: FaProjectDiagram, path: '/projects' },
  { name: 'Resume', icon: FaFileAlt, path: '/resume' },
  { name: 'Journey', icon: FaRocket, path: '/journey' }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollPosition / fullHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 bg-black bg-opacity-30 backdrop-blur-sm h-16 flex items-center justify-between px-4 z-50"
      >
        <Link to="/" className="flex items-center">
          <img className="w-10 h-10 mr-2 filter invert rounded-lg" src={personallogo} alt="personallogo" />
          <span className="text-xl font-bold text-white">Tilak Patel</span>
        </Link>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <NavItem key={index} item={item} isActive={location.pathname === item.path} />
          ))}
        </div>

        <div className="flex md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed right-0 top-16 h-full w-64 bg-black bg-opacity-90 backdrop-blur-md flex flex-col z-40 p-4 md:hidden"
          >
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} isActive={location.pathname === item.path} onClick={() => setIsMenuOpen(false)} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed right-0 top-16 h-[calc(100%-4rem)] w-1 bg-white bg-opacity-20">
        <motion.div 
          className="w-full bg-white"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
}

function NavItem({ item, isActive, onClick }) {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={item.path}
        className={`flex items-center py-2 px-3 rounded-full ${isActive ? 'bg-white bg-opacity-20' : 'hover:bg-white hover:bg-opacity-10'}`}
        onClick={onClick}
        title={item.name}
      >
        <Icon className={`text-2xl ${isActive ? 'text-white' : 'text-gray-300'}`} />
        <span className="ml-2 md:hidden">{item.name}</span>
      </Link>
    </motion.div>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
    </>
  );
}
