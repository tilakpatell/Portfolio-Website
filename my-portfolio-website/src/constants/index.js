import picture1 from '../assets/picture1.jpeg';
import website from '../assets/website.png';
import floodit from '../assets/floodit.jpeg';

export const ABOUT_TEXT = `I'm Tilak Patel, a passionate Computer Science major at Northeastern University with minors in Computer Engineering and Robotics. My technical skills include Java, Python, JavaScript, SQL, and React, and I have experience in developing web applications, optimizing data management systems, and conducting research on privacy concerns with voice assistants. I've worked as a Network and Software Engineer Intern at GreenTree Capital, enhancing application efficiency and user experience. My projects include a Co-Op search web app, a FloodIt game, and a Portfolio website, showcasing my proficiency in full-stack development and automation.

Beyond my professional pursuits, I'm a tech enthusiast with a love for pop culture, especially Star Wars, Marvel, and The Boys. I'm an avid gamer and food lover, with a special affinity for pizza. In my spare time, I enjoy exploring new technologies, contributing to open-source projects, and immersing myself in the latest movies and TV shows.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Network and Software Engineer Intern",
    company: "GreenTree Capital and Asset Management",
    description: `Implemented Auth0, enhancing security and streamlining user access. Optimized React.js applications, increasing user engagement by 20%. Utilized Postman for API documentation and automated testing of endpoints. Collaborated in fast-paced development, improving code quality through peer reviews. Conducted cross-functional testing, enhancing application stability.`,
    technologies: ["React.js", "Auth0", "Postman", "API Testing"],
  },
  {
    year: "Jan. 2024 - Present",
    role: "Undergraduate Research Assistant",
    company: "Mon(IoT)r Lab, Northeastern University",
    description: `Engineered Python scripts automating data collection for privacy research. Implemented RESTful API integration, improving data gathering efficiency by 20%. Developed robust audio file processing system using OS operations. Designed rate limiting and error handling solutions for web scraping. Utilized multithreading for concurrent API requests and file operations.`,
    technologies: ["Python", "RESTful API", "Web Scraping", "Multithreading"],
  },
  {
    year: "June 2023 - Sept. 2023",
    role: "IT and PR Intern",
    company: "BAPS Swaminarayan Akshardham",
    description: `Developed Python scripts for operational reporting, reducing process times by 15%. Optimized internal workflows using Microsoft 365 and Power Automate, decreasing administrative overhead by 20%. Created centralized knowledge base, reducing inquiry response time by 50%. Drove an increase in online engagement through social media strategy development.`,
    technologies: ["Python", "Microsoft 365", "Power Automate", "Social Media Strategy"],
  },
];

export const PROJECTS = [
  {
    title: "Co-OpSearcher Web App",
    image: picture1,
    link: "https://github.com/shreyaanpathak/co-opsearcher",
    description: `A full-stack application that automates internship search using Flask API and React frontend. Features intelligent job matching with ChatGPT API integration.`,
    technologies: ["Python", "Flask", "React", "Vite", "Selenium", "ChatGPT API", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "FloodIt Game",
    image: floodit,
    link: "https://github.com/tilakpatell/FloodItGame",
    description: `A Java-based implementation of the FloodIt game, featuring efficient board-handling algorithms and a custom flood-fill algorithm for optimized game state management.`,
    technologies: ["Java", "OOP", "Algorithm Design"],
  },
  {
    title: "Personal Portfolio",
    image: website,
    link: "https://github.com/tilakpatell/Portfolio-Website",
    description: `A responsive personal portfolio website built with React and Vite, showcasing projects and skills with modern UI design and smooth animations.`,
    technologies: ["React", "Vite", "Framer Motion", "Tailwind CSS", "Git"],
  }
];

export const CONTACT = {
  address: "Boston, MA",
  phoneNo: "315-720-8202",
  email: "tilakny@gmail.com",
};