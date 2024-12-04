import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import Hero from '../assets/images/Hero.png';

const heroContent = {
  "Inference Services": {
    title: "Inference Services",
    text: "Experience cutting-edge inference services optimized for real-time applications.",
  },
  "Machine Learning": {
    title: "Artificial Learning, Machine Intelligent",
    text: "Dive deep into interactive environments, unravel the science behind Mars' exploration, and feel the thrill of discovery as you navigate this extraordinary extraterrestrial world. The future of space exploration is at your fingertips!",
  },
  "Data Security": {
    title: "Data Security",
    text: "Protect and secure your data with our state-of-the-art encryption technologies.",
  },
  "VFX & Rendering": {
    title: "VFX & Rendering",
    text: "Bring your visions to life with our high-performance rendering and visual effects solutions.",
  },
};

function HeroSection() {
  const [currentTopic, setCurrentTopic] = useState("Machine Learning");

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${Hero})` }}>
      {/* Hero Content */}
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <div className="text-container">
          <div className="vertical-line"></div>
          <div className="text-content">
            <h1>{heroContent[currentTopic].title}</h1>
            <p>{heroContent[currentTopic].text}</p>
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="hero-button"
>
<div class="svg-button">
  <span>Get Started</span>
</div>
</motion.button>

          </div>
        </div>
      </motion.div>

      {/* Hero Tabs */}
      <div className="hero-tabs">
        {Object.keys(heroContent).map((topic) => (
          <motion.button
            key={topic}
            onClick={() => setCurrentTopic(topic)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={topic === currentTopic ? "tab-button active" : "tab-button"}
          >
            {topic}
          </motion.button>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
