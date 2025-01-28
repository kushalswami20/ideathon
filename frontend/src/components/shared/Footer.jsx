import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import '../css/Footer.css'

const Footer = () => {
    const location = useLocation();
    
    const handleLinkClick = (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content two-columns">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="two-column-list">
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/registration" onClick={handleLinkClick}>Registration</Link></li>
                        <li><Link to="/resources" onClick={handleLinkClick}>Resources</Link></li>
                        <li><Link to="/team" onClick={handleLinkClick}>Team</Link></li>
                        <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                            <Facebook size={20} />
                        </a>
                        <a href="#" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
                            <Twitter size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>
                            <Linkedin size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                            <Instagram size={20} />
                        </a>
                    </div>
                    <div className="contact-info">
                        <p>
                            <Mail size={16} />
                            <span>contact@example.com</span>
                        </p>
                        <p>
                            <Phone size={16} />
                            <span>(555) 123-4567</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bottom-bar">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;