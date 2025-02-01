import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Leaf } from 'lucide-react';
import "../css/Footer.css"

const Footer = () => {
    const location = useLocation();
    
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content two-columns">
                <div className="footer-section">
                    <h3>
                        <Leaf className="inline-block mr-2 text-emerald-300" size={20} />
                        Quick Links
                    </h3>
                    <ul className="two-column-list">
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/registration" onClick={handleLinkClick}>Join Us</Link></li>
                        <li><Link to="/resources" onClick={handleLinkClick}>Resources</Link></li>
                        <li><Link to="/team" onClick={handleLinkClick}>Our Team</Link></li>
                        <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-links">
                        {/* <a 
                            href="#" 
                            aria-label="Facebook" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <Facebook size={20} />
                        </a>
                        <a 
                            href="#" 
                            aria-label="Twitter" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <Twitter size={20} />
                        </a> */}
                        <a 
                            href="https://www.linkedin.com/company/paryavaranam/" 
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="social-link"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a 
                            href="https://www.instagram.com/paryavarnam_dtu?igsh=MW1icGUzYW9qd3JmZA==" 
                            aria-label="Instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                    <div className="contact-info">
                        <p className="hover:text-emerald-300">
                            <Mail size={16} />
                            <span>contact@ecosociety.org</span>
                        </p>
                        <p className="hover:text-emerald-300">
                            <Phone size={16} />
                            <span>+91 85953 45252</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bottom-bar">
                <p>Making a greener future together</p>
                <p>&copy; {new Date().getFullYear()} Paryavarnam Society. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;