import React from 'react';
import personallogo from '../assets/file.png';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 text-white">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={personallogo} alt="personallogo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tilakpatell" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600 transition duration-300" />
        </a>
        <a href="https://github.com/tilakpatell" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600 transition duration-300" />
        </a>
        <a href="https://www.instagram.com/tilakpatell" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-600 transition duration-300" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
