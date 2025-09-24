import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: "ai-content",
      title: "AI Content Creation",
      subtitle: "Daily & Weekly Content That Converts",
      description: "Transform your content strategy with AI-powered content creation delivered daily or weekly. We create premium content ecosystems using advanced AI tools that drive engagement, build authority, and convert prospects into customers.",
      features: [
        "Daily or weekly AI-generated blog posts and articles",
        "SEO-optimized content that ranks on page 1",
        "Social media content across all platforms",
        "Email marketing content and sequences",
        "Brand voice consistency across all channels",
        "Performance analytics and optimization"
      ],
      pricing: "$750 - $2,000 per month",
      gradient: "gradient-blue"
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      subtitle: "Automated Campaigns That Drive Sales",
      description: "Professional email marketing campaigns that nurture leads and drive conversions. We create automated sequences, newsletters, and promotional campaigns that build relationships and boost your bottom line.",
      features: [
        "Automated email sequences with high open rates",
        "Newsletter design and content creation",
        "Segmented campaigns for targeted messaging",
        "A/B testing and performance optimization",
        "CRM integration and lead nurturing",
        "Detailed analytics and reporting"
      ],
      pricing: "$500 - $1,500 per month",
      gradient: "gradient-green"
    },
    {
      id: "ppc-ads",
      title: "PPC & Paid Search",
      subtitle: "High-Converting Ad Campaigns",
      description: "Strategic pay-per-click advertising across Google, Facebook, and other platforms. Our data-driven approach maximizes your ad spend efficiency and delivers measurable ROI through optimized campaigns.",
      features: [
        "Google Ads campaign management and optimization",
        "Facebook and Instagram advertising",
        "Keyword research and bid optimization",
        "Landing page optimization for conversions",
        "Real-time performance monitoring",
        "Detailed ROI reporting and analysis"
      ],
      pricing: "$1,000 - $3,000 per month + ad spend",
      gradient: "gradient-pink"
    },
    {
      id: "seo-optimization",
      title: "SEO & Keyword Optimization",
      subtitle: "Organic Growth That Lasts",
      description: "Comprehensive search engine optimization that improves your organic visibility and drives qualified traffic. We focus on technical SEO, content optimization, and keyword strategies that deliver long-term results.",
      features: [
        "Keyword research and competitive analysis",
        "On-page and technical SEO optimization",
        "Content optimization for search rankings",
        "Local SEO for geographic targeting",
        "Link building and authority development",
        "Monthly performance reports and insights"
      ],
      pricing: "$750 - $2,000 per month",
      gradient: "gradient-purple"
    },
    {
      id: "b2b-marketing",
      title: "B2B Marketing",
      subtitle: "Enterprise-Grade Lead Generation",
      description: "Specialized B2B marketing strategies designed for complex sales cycles and enterprise clients. We create targeted campaigns that generate high-quality leads and nurture them through your sales funnel.",
      features: [
        "B2B lead generation and qualification",
        "Account-based marketing strategies",
        "LinkedIn advertising and outreach",
        "Sales enablement content creation",
        "CRM integration and lead scoring",
        "ROI tracking and performance metrics"
      ],
      pricing: "$1,250 - $3,500 per month",
      gradient: "gradient-orange"
    },
    {
      id: "social-media",
      title: "Social Media Management",
      subtitle: "Engaging Content & Strategic Ads",
      description: "Complete social media management including content creation, community engagement, and strategic advertising. We build your brand presence across all major platforms while driving measurable business results.",
      features: [
        "Content creation and posting schedule",
        "Social media advertising campaigns",
        "Community management and engagement",
        "Influencer partnerships and collaborations",
        "Social listening and reputation management",
        "Performance analytics and growth tracking"
      ],
      pricing: "$600 - $1,750 per month",
      gradient: "gradient-teal"
    },
    {
      id: "google-ads",
      title: "Google Ads Management",
      subtitle: "Maximize Your Search Presence",
      description: "Specialized Google Ads management that optimizes your search, display, and shopping campaigns. We focus on maximizing your ad spend efficiency and driving qualified traffic to your website.",
      features: [
        "Search campaign optimization and management",
        "Display and remarketing campaigns",
        "Shopping ads for e-commerce",
        "YouTube advertising strategies",
        "Conversion tracking and optimization",
        "Monthly performance reviews and adjustments"
      ],
      pricing: "$900 - $2,500 per month + ad spend",
      gradient: "gradient-red"
    },
    {
      id: "content-management",
      title: "Content Management",
      subtitle: "Strategic Content Planning & Execution",
      description: "Comprehensive content management services that plan, create, and distribute content across all your marketing channels. We ensure consistent messaging and optimal performance across your entire content ecosystem.",
      features: [
        "Content strategy and editorial planning",
        "Multi-channel content creation",
        "Content calendar management",
        "Brand voice and messaging consistency",
        "Content performance analysis",
        "Ongoing optimization and updates"
      ],
      pricing: "$500 - $1,500 per month",
      gradient: "gradient-indigo"
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
          <h2 className="section-title">Comprehensive Marketing Services</h2>
          <p className="section-subtitle">
            From AI content creation to PPC management - we've got all your marketing needs covered
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
                      <h3 className="service-content-title">{services[activeService].title}</h3>
                      <h4 className="service-content-subtitle">{services[activeService].subtitle}</h4>
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
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;