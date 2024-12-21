import React from 'react';
import "../css/Footer.css";
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
const Footer = () => {
    const links = [
        { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: '#' },
        { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
        { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
        { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' }
      ];
    return (
        <footer className="foot">
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>About Us</h3>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Documentation</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Connect With Us</h3>
                        <div className="flex gap-5 items-center mb-6">
      {links.map(({ icon, label, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 
          text-white relative overflow-hidden group transition-all duration-300 ease-in-out
          hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
          before:absolute before:inset-0 before:bg-[#64ffda] before:scale-0 
          before:transition-transform before:duration-300 before:ease-in-out before:rounded-full
          hover:before:scale-100 before:z-0"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#a61724]">
            {icon}
          </span>
        </a>
      ))}
    </div>
                        <div class="contact-info">
                            <p>Email: contact@example.com</p>
                            <p>Phone: (555) 123-4567</p>
                        </div>
                    </div>
                </div>

                <div class="bottom-bar">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;