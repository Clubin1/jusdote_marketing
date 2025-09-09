import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPenNib, FaBullseye, FaCogs, FaRobot, FaCheck, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: "content-creation",
      icon: FaPenNib,
      title: "AI Content Creation",
      subtitle: "Strategic Content That Converts",
      description: "Transform your content strategy with our advanced AI orchestration using Claude, GPT-4, and Jasper. We create premium content ecosystems that drive engagement, build authority, and convert prospects into customers at enterprise scale.",
      features: [
        "SEO-optimized blog posts that rank on page 1",
        "High-converting social media content across all platforms",
        "Automated email sequences with 40%+ open rates",
        "Multi-platform content distribution strategy",
        "Brand voice consistency across all channels",
        "Performance analytics and optimization"
      ],
      pricing: "$2,000 - $5,000 per month",
      gradient: "gradient-blue"
    },
    {
      id: "ad-management",
      icon: FaBullseye,
      title: "AI-Powered Ads",
      subtitle: "Advertising That Actually Works",
      description: "Revolutionary advertising orchestration across Facebook, Google, and emerging platforms. Our proprietary AI algorithms analyze thousands of data points in real-time to deliver superior ROAS and performance metrics that traditional PPC simply cannot match.",
      features: [
        "AI-driven bidding optimization with 300%+ ROAS improvement",
        "Cross-platform campaign management and coordination",
        "Real-time audience testing and refinement",
        "Advanced attribution modeling and analytics",
        "Creative testing and optimization automation",
        "Dedicated performance reporting dashboard"
      ],
      pricing: "$3,000 - $8,000 per month + ad spend",
      gradient: "gradient-pink"
    },
    {
      id: "marketing-automation",
      icon: FaCogs,
      title: "Marketing Automation",
      subtitle: "Systems That Scale Your Business",
      description: "Enterprise-grade automation architectures designed for sophisticated lead nurturing and customer lifecycle management. We build seamless integrations that scale with your business growth while maintaining personal touchpoints that convert.",
      features: [
        "Complete lead nurturing automation systems",
        "Advanced email marketing workflows and sequences",
        "CRM integration and data synchronization",
        "Customer journey mapping and optimization",
        "Analytics dashboard with actionable insights",
        "Ongoing optimization and performance monitoring"
      ],
      pricing: "$5,000 - $15,000 setup + $1,000 - $3,000 monthly",
      gradient: "gradient-green"
    },
    {
      id: "ai-chatbots",
      icon: FaRobot,
      title: "AI Chatbots",
      subtitle: "24/7 Sales That Never Sleep",
      description: "Intelligent conversational systems powered by advanced natural language processing. Our premium chatbots qualify leads, answer questions, and guide prospects through your sales funnel with human-like precision, operating seamlessly around the clock.",
      features: [
        "24/7 intelligent lead qualification and scoring",
        "Multi-language support for global markets",
        "Seamless CRM integration and data capture",
        "Advanced conversation flow optimization",
        "Real-time performance analytics and insights",
        "Custom training on your products and services"
      ],
      pricing: "$2,000 - $5,000 setup + $500 - $2,000 monthly",
      gradient: "gradient-purple"
    }
  ];

  const [activeService, setActiveService] = useState(0);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-tabbed" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services-tabbed-header"
        >
          <h2 className="section-title">AI-Powered Marketing Services</h2>
          <p className="section-subtitle">
            Choose your path to exponential growth with our premium AI marketing solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="services-tabbed-container"
        >
          {/* Service Tabs */}
          <div className="service-tabs">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                className={`service-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="service-tab-icon">
                  <service.icon />
                </div>
                <span className="service-tab-title">{service.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Service Content */}
          <div className="service-content-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="service-content"
              >
                <div className="service-content-main">
                  <div className="service-content-text">
                    <div className="service-content-header">
                      <motion.div 
                        className="service-content-icon"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
{React.createElement(services[activeService].icon)}
                      </motion.div>
                      <div>
                        <h3 className="service-content-title">{services[activeService].title}</h3>
                        <h4 className="service-content-subtitle">{services[activeService].subtitle}</h4>
                      </div>
                    </div>
                    
                    <p className="service-content-description">
                      {services[activeService].description}
                    </p>
                    
                    <div className="service-content-features">
                      {services[activeService].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="service-feature"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <FaCheck className="feature-check" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="service-content-bottom">
                      <div className="service-pricing">
                        <span className="pricing-label">Investment:</span>
                        <span className="pricing-value">{services[activeService].pricing}</span>
                      </div>
                      
                      <motion.button
                        className="btn btn-primary service-cta-button"
                        onClick={scrollToContact}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Started Today
                        <FaArrowRight className="btn-icon" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="service-content-visual">
                    <motion.div
                      className={`service-visual ${services[activeService].gradient}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <motion.div 
                        className="service-visual-icon"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
{React.createElement(services[activeService].icon)}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;