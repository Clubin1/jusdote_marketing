import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      text: "JusDote helped us get our Google Ads running properly. We were wasting money on campaigns that weren't working, but they fixed our targeting and we're finally seeing some decent leads coming through.",
      author: "Sarah Chen",
      role: "Owner, Local Dental Practice",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b665?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 4
    },
    {
      text: "We needed help with our email marketing and JusDote set up some automated sequences for us. It's been about 2 months and we're getting better open rates than before. They're responsive and easy to work with.",
      author: "Michael Rodriguez",
      role: "Marketing Manager, Small E-commerce",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "As a small business owner, I didn't know much about SEO. JusDote helped us optimize our website and we've seen our local search rankings improve. It's been a few months but we're getting more organic traffic now.",
      author: "Emily Thompson",
      role: "Founder, Boutique Fitness Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 4
    },
    {
      text: "We hired JusDote to help with our social media content. They've been creating posts for us and managing our accounts. It's nice not having to worry about posting regularly, and our engagement has definitely improved.",
      author: "David Park",
      role: "Owner, Family Restaurant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5
    },
    {
      text: "JusDote helped us set up some basic marketing automation. We're a small team so having automated follow-ups has been really helpful. The setup was straightforward and they explained everything clearly.",
      author: "Lisa Wang",
      role: "CEO, Consulting Firm",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 4
    },
    {
      text: "We needed help with our content strategy and JusDote has been creating blog posts for us. The quality is good and it's saved us a lot of time. They're professional and deliver on what they promise.",
      author: "James Foster",
      role: "Marketing Director, Tech Startup",
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
