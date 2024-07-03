import personallogo from "../assets/file.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import React from 'react'

function Navbar() {
  return (
    <nav className="bg-blue-900 mbar-20 flex items-center justify-between py-6">
        <div className= "flex flex-shrink-0 items-center">
            <img src={personallogo} alt="personallogo"></img>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
        </div> 
    </nav>
  )
}

export default Navbar