import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resumePdf from "../assets/Resume.pdf";
import resumePreview from "../assets/ResumePreview.png";

function Resume() {
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
          <span className="text-purple-500">&lt;/Check Out</span> <span className="text-white">My Resume</span><span className="text-purple-500">&gt;</span>
          <div className="h-1 w-60 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 mx-auto m-4 rounded-full "></div>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg text-gray-300 text-center mb-8"
      >
        I'm passionate about creating innovative solutions and continuously learning new technologies. 
        Download my resume to see my full qualifications and experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.a
          href={resumePdf}
          download="Tilak_Patel_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 shadow-lg"
        >
          <FaDownload className="mr-2" />
          Download Resume
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <img 
            src={resumePreview} 
            alt="Resume Preview" 
            className="w-full h-auto shadow-lg rounded-lg"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Resume;
