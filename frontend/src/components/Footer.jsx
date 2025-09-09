import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <FaBrain className="logo-icon" />
              <span>JusDote</span>
            </div>
            <p className="footer-description">
              Transforming businesses through cutting-edge AI-powered marketing solutions using Claude, GPT-4, and Jasper with unmatched professionalism and results.
            </p>
            <div className="social-links">
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="#" 
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('content-creation')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    AI Content Creation
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('ad-management')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Ad Management
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('marketing-automation')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Marketing Automation
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('ai-chatbots')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    AI Chatbots
                  </motion.button>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('testimonials')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Case Studies
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('contact')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Contact
                  </motion.button>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Privacy Policy
                  </motion.a>
                </li>
                <li>
                  <motion.a 
                    href="#"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Terms of Service
                  </motion.a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 JusDote. All rights reserved.</p>
          <motion.button 
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
