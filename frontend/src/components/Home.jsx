import React from 'react';
import './css/Home.css';
import Poster from "../assets/poster.png";

const Home = () => {
  return (
    <div>
      <div className="poster-section">
        <img src={Poster} className='poster-image'></img>
      </div>
      {/* <!-- About Ideathon Section --> */}
      <section class="ideathon-section">
        <div class="container">
          <h2 class="section-title">About the Ideathon</h2>
          <div class="ideathon-grid">
            {/* <!-- Left Content --> */}
            <div class="ideathon-info">
              <h3>Transform Your Ideas Into Reality</h3>
              <p>Join us for an exciting journey of innovation and creativity. Our ideathon brings together brilliant minds to solve real-world challenges through technological solutions.</p>
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
      <section class="sponsors-section">
        <div class="container">
          <h2 class="section-title">Our Sponsors</h2>
          <div class="sponsors-grid">
            <div class="sponsor-card">
              <img src="sponsor1.png" alt="Sponsor 1"/>
            </div>
            <div class="sponsor-card">
              <img src="sponsor2.png" alt="Sponsor 2"/>
            </div>
            <div class="sponsor-card">
              <img src="sponsor3.png" alt="Sponsor 3"/>
            </div>
            <div class="sponsor-card">
              <img src="sponsor4.png" alt="Sponsor 4"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;