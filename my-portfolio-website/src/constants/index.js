import picture1 from '../assets/picture1.jpeg';
import website from '../assets/website.png';
import floodit from '../assets/floodit.jpeg';


export const ABOUT_TEXT = `I am Tilak Patel, a dedicated and versatile Computer Science major at Northeastern University with minors in Computer Engineering and Robotics. My technical skills include Java, Python, JavaScript, and React, and I have a proven track record in developing web applications, optimizing data management systems, and conducting research on privacy concerns related to voice assistants. My professional experience includes working as a Network and Software Engineer Intern at GreenTree Capital, where I enhanced application efficiency and user experience. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. 
Beyond my professional pursuits, I am passionate about pop culture, especially Star Wars, Marvel, and The Boys. I'm a videogame nerd and an avid foodie with a special love for pizza. In my spare time, I enjoy exploring new technologies, contributing to open-source projects, and immersing myself in the latest movies and TV shows.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Network and Software Engineer Intern",
    company: "GreenTree Capital and Asset Management",
    description: `Used Power Automate to handle API calls, improving application efficiency. Optimized CRM, Microsoft SharePoint, Teams, and Office 365 systems, enhancing data management. Developed React.js applications for the corporate website, significantly improving user experience and functionality. Designed and implemented remote management and backup solutions, managed virtual machines and Azure directories, and automated database processes using Python and Linux.`,
    technologies: ["JavaScript", "React.js", "Python", "Power Automate", "Azure"],
  },
  {
    year: "May 2024 - Present",
    role: "Undergraduate Research Assistant",
    company: "Mon(IoT)r Lab, Northeastern University",
    description: `Conduct research on privacy concerns related to voice assistants, focusing on user interactions and profiling activities. Perform risk assessments associated with profiling and evaluate the transparency of privacy policy disclosures using data-driven approaches. Design and implement user profiles to simulate diverse interactions; develop automated scripts in Selenium, Python, and Bash to collect and analyze data. Collaborate with interdisciplinary teams to advance research methodologies.`,
    technologies: ["Python", "Selenium", "Bash", "Data Analysis"],
  },
  {
    year: "June 2023 - September 2023",
    role: "IT and PR Volunteer",
    company: "BAPS Swaminarayan Akshardham",
    description: `Spearheaded guest services and guided tours at Swaminarayan Akshardham, blending technical proficiency with interpersonal skills. Authored and edited comprehensive reports, leveraging Python scripting to streamline operations and enhance efficiency. Utilized Microsoft tools, including Power Automate and Microsoft 365, to optimize workflow and enhance organizational communication.`,
    technologies: ["Python", "Power Automate", "Microsoft 365"],
  },
];


export const PROJECTS = [
  {
    title: "Co-OpSearcher Website",
    image: picture1,
    link: "https://github.com/shreyaanpathak/co-opsearcher",
    description: `Collaborating on the development of a full-stack Co-Op/Internship web scraper and web application using Flask to serve a REST API with React as the frontend.`,
    technologies: ["Python", "Flask", "React", "Selenium", "ChatGPT API"],
  },
  {
    title: "FloodIt Game",
    image: floodit,
    link: "https://github.com/tilakpatell/FloodItGame",
    description: `Recreated the game FloodIt in Java. Enhanced gameplay mechanics and user interface by implementing scoreboard and fun gimmicks.`,
    technologies: ["Java"],
  },
  {
    title: "Tilak's Portfolio",
    image: website,
    link: "https://github.com/tilakpatell/Portfolio-Website",
    description: `Developed a Portfolio Website. Enhanced user interaction with dynamic and responsive design.`,
    technologies: ["React", "Framer", "TailWind CSS", "JavaScript", "HTML", "Git"],
  }
];


export const CONTACT = {
  address: "Syracuse, NY",
  phoneNo: "315-720-8202",
  email: "tilakny@gmail.com",
};
