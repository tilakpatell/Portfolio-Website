import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resumePdf from "../assets/Resume.pdf";
import resumePreview from "../assets/ResumePreview.png"; 

function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      className="mt-40"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center my-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute w-full max-w-3xl h-20 bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 rounded-lg z-0"
          ></motion.div>
          <motion.h2
            className="text-6xl text-center bg-clip-text bg-gradient-to-r from-purple-500 via-blue-300 to-blue-400 text-transparent font-bold z-10 relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            My Resume
          </motion.h2>
        </div>

        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.p
            className="text-xl text-gray-300 text-center max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I'm passionate about creating innovative solutions and continuously learning new technologies. 
            Download my resume to see my full qualifications and experience.
          </motion.p>

          <motion.a
            href={resumePdf}
            download="Tilak_Patel_Resume.pdf"
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            variants={buttonVariants}
            whileHover="hover"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.a>

          
          <motion.div
            className="mt-8 w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <img 
              src={resumePreview} 
              alt="Resume Preview" 
              className="w-full h-auto shadow-lg rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;