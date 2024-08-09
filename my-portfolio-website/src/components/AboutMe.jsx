import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaReact, FaPython, FaJava, FaAws, FaLink } from 'react-icons/fa';
import { SiFlask, SiFastapi, SiPytorch, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';

import profilePicture from '../assets/pic.jpg'; 

function AboutMe() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const tabContents = [
    {
      title: "About Me",
      content: (
        <div className="space-y-4 text-gray-200">
          <p>
            Hello! I'm Tilak Patel, a Computer Science & AI major at Northeastern University, passionate about pushing the boundaries of technology. With minors in Computer Engineering and Robotics, I'm not just coding – I'm crafting the future, one algorithm at a time.
          </p>
          <p>
            As a Generative AI Intern at Empowerreg AI, I'm diving deep into the world of AI, working on cutting-edge projects that merge technology with real-world applications. My experience spans from developing production-ready visualizations to implementing advanced NLP tools.
          </p>
          <p>
            When I'm not immersed in code, you might find me experimenting with fusion cuisine, engaging in high-intensity interval training, or losing myself in the pages of the latest sci-fi novel. I'm always eager to learn and take on new challenges in the ever-evolving tech landscape.
          </p>
        </div>
      )
    },
    {
      title: "Projects",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Co-OpSearcher Web App</h3>
            <p className="text-gray-300 mb-2">A full-stack application to automate internship search using Flask API and React.js</p>
            <div className="flex space-x-2 mb-2">
              {[FaPython, FaReact, SiFlask, SiTailwindcss].map((Icon, index) => (
                <Icon key={index} className="text-2xl text-purple-400" />
              ))}
            </div>
            <SyntaxHighlighter language="python" style={dracula}>
              {`from flask import Flask, jsonify
from selenium import webdriver
import openai

app = Flask(__name__)

@app.route('/search_jobs')
def search_jobs():
    # Web scraping logic here
    jobs = scrape_jobs()
    
    # Use ChatGPT API for job matching
    matched_jobs = match_jobs_with_ai(jobs)
    
    return jsonify(matched_jobs)

if __name__ == '__main__':
    app.run(debug=True)`}
            </SyntaxHighlighter>
            <Link to="../projects/" className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
              View Project Details
            </Link>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Smart Summarization NLP & ML Tool</h3>
            <p className="text-gray-300 mb-2">Advanced NLP tool using BERT for efficient text summarization</p>
            <div className="flex space-x-2 mb-2">
              {[FaPython, SiPytorch].map((Icon, index) => (
                <Icon key={index} className="text-2xl text-purple-400" />
              ))}
            </div>
            <SyntaxHighlighter language="python" style={dracula}>
              {`import torch
from transformers import BertTokenizer, BertForSequenceClassification

model = BertForSequenceClassification.from_pretrained('bert-base-uncased')
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

def summarize_text(text):
    inputs = tokenizer(text, return_tensors="pt", max_length=512, truncation=True)
    outputs = model(**inputs)
    summary_ids = outputs.logits.argmax(-1)
    return tokenizer.decode(summary_ids[0], skip_special_tokens=True)

# Example usage
text = "Your long text here..."
summary = summarize_text(text)
print(summary)`}
            </SyntaxHighlighter>
            <Link to="../projects/" className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
              View Project Details
            </Link>
          </div>
        </div>
      )
    },
    {
      title: "Skills",
      content: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Python", icon: FaPython, level: "Fluent" },
            { name: "Java", icon: FaJava, level: "Fluent" },
            { name: "JavaScript", icon: SiJavascript, level: "Intermediate" },
            { name: "React", icon: FaReact, level: "Intermediate" },
            { name: "Flask", icon: SiFlask, level: "Intermediate" },
            { name: "FastAPI", icon: SiFastapi, level: "Intermediate" },
            { name: "AWS", icon: FaAws, level: "Familiar" },
            { name: "PyTorch", icon: SiPytorch, level: "Intermediate" },
            { name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermediate" },
          ].map((skill, index) => (
            <div key={index} className="bg-purple-800 bg-opacity-50 p-4 rounded-lg flex flex-col items-center">
              <skill.icon className="text-4xl mb-2 text-purple-400" />
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
              <p className="text-sm text-gray-300">{skill.level}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-5xl sm:text-6xl font-bold mb-12 text-center text-white">
          <span className='text-purple-700'>&lt;/About</span> Tilak&gt;
          <div className="h-1 w-60 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 mx-auto m-4 rounded-full "></div>
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <img src={profilePicture} alt="Tilak Patel" className="w-48 h-48 rounded-full object-cover shadow-lg" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <Tab.List className="flex space-x-1 rounded-xl bg-purple-900/20 p-1 mb-4">
              {tabContents.map((tab, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white
                    ${selected
                      ? 'bg-purple-600 shadow'
                      : 'hover:bg-white/[0.12] hover:text-white'
                    }`
                  }
                >
                  {tab.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <AnimatePresence mode="wait">
                {tabContents.map((tab, index) => (
                  <Tab.Panel
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl bg-purple-900/20 p-6 text-gray-200"
                  >
                    {tab.content}
                  </Tab.Panel>
                ))}
              </AnimatePresence>
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
