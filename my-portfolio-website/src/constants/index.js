import picture1 from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/picture1.jpeg';
import website from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/website.png';
import pytorch from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/pytorch.png';
import empowerregLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/empower.png';
import neuLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/neulogo.png';
import greentreeLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/greentreelogo.jpeg';
import akdmLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/logoakdm.jpg';
import javaLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/javalogo.png';
import pythonLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/pythonlogo.png';
import jsLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/jslogo.png';
import reactLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/react.webp';
import githubLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/githublogo.png';
import gitLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/gitlogo.png';
import cppLogo from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/cpp_logo.png';

export const ABOUT_TEXT = `I'm Tilak Patel, a passionate Computer Science major at Northeastern University with minors in Computer Engineering and Robotics. My technical skills include Java, Python, JavaScript, SQL, and React, and I have experience in developing web applications, optimizing data management systems, and conducting research on privacy concerns with voice assistants. I've worked as a Network and Software Engineer Intern at GreenTree Capital, enhancing application efficiency and user experience. My projects include a Co-Op search web app, a FloodIt game, and a Portfolio website, showcasing my proficiency in full-stack development and automation.

Beyond my professional pursuits, I'm a tech enthusiast with a love for pop culture, especially Star Wars, Marvel, and The Boys. I'm an avid gamer and food lover, with a special affinity for pizza. In my spare time, I enjoy exploring new technologies, contributing to open-source projects, and immersing myself in the latest movies and TV shows.`;

export const EXPERIENCES = [
  {
    logo: empowerregLogo,
    year: "July 2024 – Present",
    role: "Generative AI Intern",
    company: "Empowerreg AI",
    description: `Engineered visualizations for the Risk Annotation Matrix Product, enhancing data interpretation. Integrated and parsed Generative AI model data with Pandas, Seaborn, and React.js. Created a Risk Assessment Matrix graph with Material UI to facilitate real-time data analysis for clients. Collaborated with senior machine learning engineers to refine visual data and ensure accuracy.`,
    technologies: ["Pandas", "Seaborn", "React.js", "Material UI", "Generative AI"],
  },
  {
    logo: neuLogo,
    year: "January 2024 – Present",
    role: "Undergraduate Research Assistant",
    company: "Mon(IoT)r Lab, Northeastern University",
    description: `Automated data collection for privacy research with Python scripts. Improved data gathering efficiency via RESTful API integration. Increased processing speed with multithreading for requests. Led voice assistant experiments (Google Assistant, Amazon Alexa), focusing on privacy and user interaction analysis.`,
    technologies: ["Python", "RESTful API", "Multithreading", "Voice Assistants"],
  },
  {
    logo: greentreeLogo,
    year: "June 2024 – July 2024",
    role: "Software Engineer Intern",
    company: "GreenTree Capital and Asset Management",
    description: `Implemented Auth0, enhancing security and user access. Optimized React.js applications for user engagement, contributing as a volunteer. Ensured robust APIs with Postman documentation and testing. Collaborated with various interns to troubleshoot and build authentication for a React website.`,
    technologies: ["Auth0", "React.js", "Postman", "API Testing"],
  },
  {
    logo: akdmLogo,
    year: "June 2023 - Sept. 2023",
    role: "IT and PR Intern",
    company: "BAPS Swaminarayan Akshardham",
    description: `Developed Python scripts for operational reporting, reducing process times by 15%. Optimized internal workflows using Microsoft 365 and Power Automate, decreasing administrative overhead by 20%. Created centralized knowledge base, reducing inquiry response time by 50%. Drove an increase in online engagement through social media strategy development.`,
    technologies: ["Python", "Microsoft 365", "Power Automate", "Social Media Strategy"],
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Co-OpSearcher Web App",
    shortDescription: "Automated internship search application",
    image: picture1,
    link: "https://github.com/shreyaanpathak/co-opsearcher",
    description: "A full-stack application that automates the internship search process, leveraging Flask API and React.js for a seamless user experience.",
    technologies: ["Python", "Flask", "React", "Vite", "Selenium", "ChatGPT API", "Tailwind CSS", "Framer Motion"],
    features: [
      "Full-stack architecture with Flask backend and React frontend",
      "AI-powered job matching using ChatGPT API",
      "Efficient web scraping with Selenium",
      "Enhanced UX with Framer Motion animations"
    ]
  },
  {
    id: 2,
    title: "Smart Summarization Tool",
    shortDescription: "NLP-based text summarization using BERT",
    image: pytorch,
    link: "https://github.com/tilakpatell/smart-summarizer-bert",
    description: "An advanced NLP tool that utilizes BERT for efficient and accurate text summarization, optimized for performance and scalability.",
    technologies: ["Python", "PyTorch", "BERT", "Transformers", "Google Colab", "Seaborn", "Matplotlib"],
    features: [
      "BERT-based model for high-quality summarization",
      "Optimized data pipeline processing 287,113 samples",
      "Mixed precision training and gradient accumulation",
      "Fine-tuned using Hugging Face Transformers library"
    ]
  },
  {
    id: 3,
    title: "Personal Portfolio",
    shortDescription: "Responsive showcase of skills and projects",
    image: website,
    link: "https://github.com/tilakpatell/Portfolio-Website",
    description: "A modern, responsive portfolio website built to showcase my projects and skills, emphasizing performance and user experience.",
    technologies: ["React", "Vite", "Framer Motion", "Tailwind CSS", "Git"],
    features: [
      "Optimized performance with React and Vite",
      "Engaging animations using Framer Motion",
      "Sleek, responsive design with Tailwind CSS",
      "Version control and CI practices with Git"
    ]
  }
];

export const CONTACT = {
  address: "Boston, MA",
  phoneNo: "315-720-8202",
  email: "tilakny@gmail.com",
};

export const TECH_STACK = [
  { icon: pythonLogo, name: 'Python'},
  { icon: javaLogo ,name: 'Java'},
  { icon: jsLogo, name: 'JavaScript' },
  { icon: reactLogo, name: 'React' },
  { icon: githubLogo, name: 'GitHub' },
  { icon: gitLogo, name: 'Git' },
  { icon: cppLogo, name: 'C++' },
];
