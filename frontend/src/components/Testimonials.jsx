import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      text: "JusDote's AI-powered ad management increased our ROAS by 400% in just 3 months. The precision and sophistication of their optimization using Claude and GPT-4 is absolutely extraordinary.",
      author: "Sarah Chen",
      role: "CEO, TechStartup Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b665?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "JusDote's marketing automation architecture has transformed our operations—saving 20 hours weekly while generating 3x more qualified leads. Exceptional professionalism and results.",
      author: "Michael Rodriguez",
      role: "Marketing Director, GrowthCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "JusDote's AI content creation using Jasper and GPT-4 delivers premium quality that surpasses traditional copywriting while operating at unprecedented speed. Blog traffic increased 250%.",
      author: "Emily Thompson",
      role: "Founder, Digital Ventures",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "The AI chatbot they built for us qualifies leads 24/7 and has increased our conversion rate by 180%. It's like having a sales team that never sleeps.",
      author: "David Park",
      role: "VP Sales, InnovateTech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "Working with them transformed our entire marketing strategy. Their AI-driven approach to Facebook and Google ads delivered results we never thought possible.",
      author: "Lisa Wang",
      role: "CMO, ScaleUp Solutions",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "The ROI from their marketing automation setup paid for itself in 2 months. Now we're scaling faster than ever with their AI-powered lead nurturing.",
      author: "James Foster",
      role: "CEO, GrowthAccelerator",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            See how we've helped businesses transform their marketing with AI-powered solutions.
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="quote-icon"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft />
              </motion.div>

              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true }}
                  >
                    <FaStar className="star-icon" />
                  </motion.div>
                ))}
              </div>

              <motion.p 
                className="testimonial-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                "{testimonial.text}"
              </motion.p>

              <motion.div 
                className="testimonial-author"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="author-avatar"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </motion.div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
