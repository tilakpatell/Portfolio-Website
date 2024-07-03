import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <div className= "antialiased selection:bg-blue-300 selection:text-cyan-900 overflow-x-hidden text-neutral-300">
      <div className="h-full w-full fixed top-0 -z-10 "></div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="container mx-auto px-8">
      <Navbar/>
      <HeroSection/>
      </div>
  </div>
  )
}

export default App
