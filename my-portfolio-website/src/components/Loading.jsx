import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'; 

function LoadingComponent() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <img src={logo} alt="Loading" className="w-16 h-16" />
      </motion.div>
    </div>
  );
}

export default LoadingComponent;
