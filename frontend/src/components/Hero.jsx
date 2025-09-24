import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaRocket, FaRobot, FaBullhorn } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <motion.div 
          className="gradient-orb orb-1"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="gradient-orb orb-3"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -80, 0],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform Your Marketing with{' '}
              <span className="gradient-text">AI-Powered Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We empower ambitious businesses to scale exponentially through cutting-edge AI technology. 
              From precision content creation to advanced ad optimization using Claude, GPT-4, and Jasper, 
              JusDote delivers measurable results that traditional agencies simply cannot achieve.
            </motion.p>

            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="stat">
                <motion.span 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  2-3x
                </motion.span>
                <span className="stat-label">Average ROI Improvement</span>
              </div>
              <div className="stat">
                <motion.span 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  15+
                </motion.span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <motion.span 
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  24/7
                </motion.span>
                <span className="stat-label">AI-Powered Support</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button 
                className="btn btn-primary"
                onClick={scrollToContact}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket className="btn-icon" />
                Start Your AI Journey
              </motion.button>
              <motion.button 
                className="btn btn-secondary"
                onClick={scrollToServices}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChartLine className="btn-icon" />
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="ai-visualization">
              <motion.div 
                className="ai-node node-1"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaBrain />
              </motion.div>
              <motion.div 
                className="ai-node node-2"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <FaChartLine />
              </motion.div>
              <motion.div 
                className="ai-node node-3"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaRobot />
              </motion.div>
              <motion.div 
                className="ai-node node-4"
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, -360]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <FaBullhorn />
              </motion.div>
              
              <motion.div 
                className="connection-line line-1"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 2, delay: 2 }}
              />
              <motion.div 
                className="connection-line line-2"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 2, delay: 2.3 }}
              />
              <motion.div 
                className="connection-line line-3"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 2, delay: 2.6 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
