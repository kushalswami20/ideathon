import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Poster from "../assets/Paryavarnam.jpeg";
import VirinaHome from "../assets/Paryavarnam.jpeg";
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
                The Virina Foundation is dedicated to empowering women by focusing on health, 
                awareness/education, and employment. Our impactful initiatives have reached 
                thousands of women, making significant strides in areas such as menstrual 
                hygiene promotion, skill development, and comprehensive health initiatives.
              </p>
              <p>
                Through our continued efforts, we strive to create a world where every woman 
                can realize her full potential and lead a life of dignity and independence. 
                Join us in our mission to transform lives and make a difference.
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
              <h3>Cancer Awareness and Women's Health Initiative 2024</h3>
              <p>
                Join us for our flagship two-day event focused on cancer prevention, 
                early diagnosis, and women's health education. Features expert speakers,
                health checkups, and interactive workshops.
              </p>
              <div className="stats-container">
                <div className="stat-card">
                  <h4>March 15-16</h4>
                  <p>Event Dates</p>
                </div>
                <div className="stat-card">
                  <h4>300+</h4>
                  <p>Expected Attendees</p>
                </div>
              </div>
            </div>

            <div className="features-grid">
              {[
                { 
                  title: "Health Camp", 
                  date: "April 5, 2024",
                  desc: "Free health checkups and consultations" 
                },
                { 
                  title: "Awareness Workshop", 
                  date: "April 20, 2024",
                  desc: "Interactive session on women's health" 
                },
                { 
                  title: "Community Drive", 
                  date: "May 1, 2024",
                  desc: "Distribution of health and hygiene kits" 
                },
                { 
                  title: "Medical Conference", 
                  date: "May 15, 2024",
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