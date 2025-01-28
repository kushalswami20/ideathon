import React, { useEffect } from 'react';
import './css/Home.css';
import Poster from "../assets/Paryavarnam.jpeg";
import VirinaHome from "../assets/Paryavarnam.jpeg";

import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  // Handle scroll when component mounts or location changes
  useEffect(() => {
    // Check if we have a scrollTo state from navigation
    if (location.state?.scrollTo) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'  // Align the top of the element with the top of the viewport
          });
          
          // Optional: Clear the location state after scrolling
          window.history.replaceState({}, document.title);
        }
      }, 100);
    } else {
      // If no scroll location specified, scroll to top when component mounts
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div>
      <div className="poster-section">
        <img src={Poster} className='poster-image'></img>
      </div>
      <section className="about-section bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left column - Text content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Paryavarnam</h2>
            <p className="text-gray-700 leading-relaxed">
              The Virina Foundation is dedicated to empowering women by focusing on health, 
              awareness/education, and employment. Our impactful initiatives have reached 
              thousands of women, making significant strides in areas such as menstrual 
              hygiene promotion, skill development, and comprehensive health initiatives 
              including TB and cancer awareness. By providing essential resources and training, 
              we enhance health and education, create economic opportunities, and enable women 
              to lead healthier, more independent, and dignified lives. Through our continued 
              efforts, we strive to create a world where every woman can realize her full potential 
              and lead a life of dignity and independence. Join us in our mission to transform 
              lives and make a difference.
            </p>
          </div>
          
          {/* Right column - Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square relative">
              <img 
                src={VirinaHome} 
                alt="Virina Foundation Poster" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* <!-- About Ideathon Section --> */}
      <section class="ideathon-section">
        <div class="container">
          <h2 class="section-title-ideathon">About the Events</h2>
          <div class="ideathon-grid">
            {/* <!-- Left Content --> */}
            <div class="ideathon-info">
              <h3>Overview of the Event </h3>
              <p>The Cancer Awareness and Women’s Menstrual Health Initiative 2024 is a two-day event aimed at spreading awareness about cancer prevention, early diagnosis, and addressing myths and taboos related to menstrual health. Organized at DTU, this initiative seeks to educate students, professionals, and the community on vital health issues while empowering them to take informed actions for their well-being. </p>
              <div class="stats-grid">
                <div class="stat-card">
                  <h4>$10,000</h4>
                  <p>Prize Pool</p>
                </div>
                <div class="stat-card">
                  <h4>48 Hours</h4>
                  <p>of Innovation</p>
                </div>
              </div>
            </div>
            {/* <!-- Right Content --> */}
            <div class="features-grid">
              <div class="feature-card">
                <h4>Mentorship</h4>
                <p>Get guidance from industry experts</p>
              </div>
              <div class="feature-card">
                <h4>Networking</h4>
                <p>Connect with like-minded innovators</p>
              </div>
              <div class="feature-card">
                <h4>Workshops</h4>
                <p>Learn new skills and technologies</p>
              </div>
              <div class="feature-card">
                <h4>Resources</h4>
                <p>Access to tools and platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Sponsors Section --> */}
      <section id="why-sponsored">
        
        <div class="container">
          <h2 class="section-title-ideathon">Why Sponsored</h2>
          <div class="feature-card">
                <h4>Support a Meaningful Cause</h4>
                <p>Contribute to raising awareness about critical health issues. </p>
              </div>
              <div class="feature-card">
                <h4>Reach a Diverse Audience</h4>
                <p>Engage with over 300 attendees, including students, faculty, and medical professionals. </p>
              </div>
              <div class="feature-card">
                <h4>Enhance Brand Reputation</h4>
                <p>Be recognized as a socially responsible organization committed to community health. </p>
              </div>
              <div class="feature-card">
                <h4>Expand Visibility</h4>
                <p>Showcase your brand through prominent placements in event materials and social media outreach. </p>
              </div>
        </div>
      </section>
    </div>
  );
};

export default Home;