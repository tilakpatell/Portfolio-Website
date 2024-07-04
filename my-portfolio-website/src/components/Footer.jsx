import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-20 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="text-2xl font-bold text-gray-300 mb-4">
            <Typewriter
              words={['Created by Tilak', 'Designed with passion', 'Built with React', 'Powered by creativity']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="text-sm text-gray-400"
          >
            © {currentYear} Tilak Patel. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 h-1 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400"
      />
    </motion.footer>
  );
}

export default Footer;