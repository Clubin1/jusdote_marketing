import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaClock, FaShieldAlt, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoResponseTemplateId = import.meta.env.VITE_EMAILJS_AUTO_RESPONSE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Prepare email template parameters for notification to you
      const notificationParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        to_email: 'JusdoteInquiry@gmail.com'
      };

      // Prepare auto-response parameters for client
      const autoResponseParams = {
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        to_email: formData.email
      };

      // Send notification email to you
      await emailjs.send(serviceId, templateId, notificationParams, publicKey);
      
      // Send auto-response to client
      await emailjs.send(serviceId, autoResponseTemplateId, autoResponseParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const features = [
    {
      icon: FaCalendarCheck,
      text: "Free strategy consultation"
    },
    {
      icon: FaClock,
      text: "24-48 hour response time"
    },
    {
      icon: FaShieldAlt,
      text: "No long-term contracts"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="contact-title">Ready to Transform Your Marketing?</h2>
            <p className="contact-description">
              Let's explore how JusDote's premium AI solutions can revolutionize your marketing strategy 
              and deliver unprecedented growth through our sophisticated Claude, GPT-4, and Jasper integrations.
            </p>
            
            <div className="contact-features">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="contact-feature"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="feature-icon" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <motion.input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={errors.company ? 'error' : ''}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.company && <span className="error-message">{errors.company}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <motion.select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={errors.service ? 'error' : ''}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <option value="">Select a service</option>
                    <option value="ai-content">AI Content Creation</option>
                    <option value="email-marketing">Email Marketing</option>
                    <option value="ppc-ads">PPC & Paid Search</option>
                    <option value="seo-optimization">SEO & Keyword Optimization</option>
                    <option value="b2b-marketing">B2B Marketing</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="google-ads">Google Ads Management</option>
                    <option value="content-management">Content Management</option>
                    <option value="multiple">Multiple Services</option>
                  </motion.select>
                  {errors.service && <span className="error-message">{errors.service}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Monthly Budget</label>
                <motion.select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={errors.budget ? 'error' : ''}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5k</option>
                  <option value="5k-10k">$5k - $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-plus">$25k+</option>
                </motion.select>
                {errors.budget && <span className="error-message">{errors.budget}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current marketing challenges and goals..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <motion.button 
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="spinner"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Your Free Consultation
                    <FaPaperPlane className="btn-icon" />
                  </>
                )}
              </motion.button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  className="status-message success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="status-icon" />
                  <span>Thank you! We'll be in touch within 24 hours.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="status-message error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaExclamationTriangle className="status-icon" />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
