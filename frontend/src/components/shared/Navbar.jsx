import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../../assets/Logo.jpeg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleWhySponsored = (e) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'why-sponsored' } });
    } else {
      const element = document.getElementById('why-sponsored');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/registration', label: 'Registration' },
    { path: '/resources', label: 'Resources' },
    { path: '/team', label: 'Team' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
    { path: '/#why-sponsored', label: 'Why Sponsored', onClick: handleWhySponsored }
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo"/>
        </Link>
      </div>
      <nav className="skew-menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={link.onClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;