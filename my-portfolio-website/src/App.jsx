import React from 'react';
import Layout from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="antialiased selection:bg-blue-300 selection:text-cyan-900 overflow-hidden text-neutral-300">
      <div className="h-full w-full fixed top-0 -z-10"></div>
      <div className="fixed inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-8">
          <Layout />
          <div id="intro" className="pt-16">
            <HeroSection />
          </div>
          <div id="about" className="pt-16">
            <AboutMe />
          </div>
          <div id="experiences" className="pt-16">
            <Experience />
          </div>
          <div id="projects" className="pt-16">
            <Projects />
          </div>
          <div id="resume" className="pt-16">
            <Resume />
          </div>
          <div id="contact" className="pt-16">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
