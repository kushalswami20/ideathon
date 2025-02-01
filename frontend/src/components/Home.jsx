import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Poster from "../assets/Paryavarnam.jpeg";
import VirinaHome from "../assets/photo.jpeg";
import team from "../assets/Team.jpeg"
import "./css/Home.css"

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          window.history.replaceState({}, document.title);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="home-container">
      <section className="poster-section">
        <img 
          src={Poster} 
          alt="Paryavarnam Event Poster"
          className="poster-image"
        />
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>About Paryavarnam</h2>
              <p>
              Welcome to Paryavarnam Society at DTU's Environmental Engineering
Department. Committed to environmental stewardship, innovation,
and sustainability, we catalyze collaboration, education, and action.
Our society unites students and faculty with a common goal:
addressing environmental challenges through practical solutions.
Diverse activities and initiatives drive our commitment to
interdisciplinary approaches. Join our vibrant community dedicated to
making a positive impact
              </p>
              <p>
              We equip students for environmental
engineering careers through
foundational principles, fostering an
inclusive environment, and driving
innovations to address diverse
environmental challenges. Our goal is
to be a recognized leader in creating
knowledge and innovative solutions
for environmental engineering
              </p>
            </div>
            <div className="about-image">
              <img 
                src={VirinaHome} 
                alt="Virina Foundation Activities"
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <h2 className="sec-title">Upcoming Events</h2>
          <div className="home-events-grid">
            <div className="events-info">
              <h3>Pich-a-thon 2025</h3>
              <p>
              A "Pitch-a-Thon" is an event where individuals or teams present their innovative ideas or projects to a panel of judges, typically comprising industry experts, investors, or executives. These events are designed to provide a platform for creators, entrepreneurs, and professionals to showcase their concepts, receive feedback, and potentially secure funding or support to bring their ideas to fruition.
              </p>
              <div className="stats-container">
                <div className="stat-card">
                  <h4>Febraury 14, 2025</h4>
                  <p>Event Dates</p>
                </div>
                <div className="stat-card">
                  <h4>200+</h4>
                  <p>Expected Attendees</p>
                </div>
              </div>
            </div>

            <div className="features-grid">
              {[
                { 
                  title: "Pich-a-thon", 
                  date: "Febraury 14, 2025",
                  desc: "A Better Idea " 
                },
                { 
                  title: "Health Camp", 
                  date: "April 5, 2025",
                  desc: "Free health checkups and consultations" 
                },
                { 
                  title: "Awareness Workshop", 
                  date: "April 20, 2025",
                  desc: "Interactive session on women's health" 
                },
                { 
                  title: "Community Drive", 
                  date: "May 1, 2025",
                  desc: "Distribution of health and hygiene kits" 
                },
                { 
                  title: "Medical Conference", 
                  date: "May 15, 2025",
                  desc: "Expert panel on women's healthcare" 
                }
              ].map((event) => (
                <div key={event.title} className="feature-card">
                  <Calendar className="feature-icon" />
                  <div>
                    <h4>{event.title}</h4>
                    <p className="event-date">{event.date}</p>
                    <p>{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;