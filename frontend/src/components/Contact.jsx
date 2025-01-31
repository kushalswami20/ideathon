import React, { useState } from 'react';
import { Send, Mail, Phone, Clock } from 'lucide-react';
import './css/Contact.css'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try{
      const response = await axios.post('http://localhost:5001/user/contact', formData,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      if (response.data.success) {
        toast.success('Contact successful!');
        navigate('/');  // Redirect to home page
      } else {
        toast.error(response.data.message || 'Contact failed');
      }
    } catch (error) {
      console.error('Contact error:', error);
      const errorMessage = error.response?.data?.message || 'Contact failed. Please try again.';
      toast.error(errorMessage);
    }finally {
      setLoading(false);
    }
    
    
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
      <div className="gallery-header-background"></div>
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
                <label htmlFor="subject">phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
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

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : (
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