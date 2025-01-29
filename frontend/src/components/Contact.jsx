import React, { useState } from 'react';
import { Send, Mail, Phone, Clock } from 'lucide-react';
import './css/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="contact-header-overlay"></div>
        <div className="contact-header-content">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">Have questions about the event? We're here to help! Reach out to us through any of the channels below.</p>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <Mail className="info-icon" />
            <h3>Email Us</h3>
            <p>contact@paryavarnam.org</p>
            <p>support@paryavarnam.org</p>
          </div>

          <div className="contact-info-card">
            <Phone className="info-icon" />
            <h3>Call Us</h3>
            <p>+91 123 456 7890</p>
            <p>+91 098 765 4321</p>
          </div>

          <div className="contact-info-card">
            <Clock className="info-icon" />
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>

        <div className="form-container">
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send className="send-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;