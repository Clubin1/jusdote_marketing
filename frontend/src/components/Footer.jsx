import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import logo from '../assets/jusdote_logo.png';

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
              <img src={logo} alt="JusDote" className="logo-image" />
            </div>
            <p className="footer-description">
              Transforming businesses through cutting-edge AI-powered marketing solutions using Claude, GPT-4, and Jasper with unmatched professionalism and results.
            </p>
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
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    AI Content Creation
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Email Marketing
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    PPC & Paid Search
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    SEO & Keyword Optimization
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    B2B Marketing
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Social Media Management
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Google Ads Management
                  </motion.button>
                </li>
                <li>
                  <motion.button 
                    onClick={() => scrollToSection('services')}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Content Management
                  </motion.button>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
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
          <p>&copy; 2025 JusDote. All rights reserved.</p>
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
