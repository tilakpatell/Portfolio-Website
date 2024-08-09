import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import CodingJourneyTimeline from './components/Journey';
import LoadingComponent from './components/Loading';
import FloatingParticles from './components/FloatingParticle';
import CustomCursor from './components/CustomCursor';

import backgroundImage from '/Users/tilakpatel/Desktop/Portfolio-Website/my-portfolio-website/src/assets/waves-purple-3840x2400-11757.png';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Router>
      <div className="relative min-h-screen custom-cursor">
        <FloatingParticles />
        <CustomCursor />
        <div 
          className="fixed inset-0 bg-cover bg-center animate-pan-background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '200% 100%',
            zIndex: -2,
          }}
        />
        
        <div 
          className="fixed inset-0 bg-black opacity-70"
          style={{ zIndex: -1 }}
        />

        <Navbar />
        <main className="relative z-10 text-gray-100">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/journey" element={<CodingJourneyTimeline />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
