import React from 'react';
import './css/Resources.css'

const Resources = () => {
    return (
        <div className='resources'>
            <header className="header header-with-bg">
                {/* Parallax background for header only */}
                <div className="header-background"></div>
                <div className="header-content">
                    <h1>Resource Hub</h1>
                    <p className="subtitle">Everything you need to succeed in the Ideathon. Access tutorials, tools, templates, and more.</p>
                </div>
            </header>

            <div className="container">
                <section className="resources-section">
                    <h2>Learning Materials</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <h3>Getting Started Guide</h3>
                            <p>New to hackathons? Start here for a comprehensive introduction to ideation, prototyping, and presentation.</p>
                            <a href="#" className="resource-link">Learn More →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3>Technical Workshops</h3>
                            <p>Access recorded workshop sessions on web development, AI/ML, cloud computing, and more.</p>
                            <a href="#" className="resource-link">Access Workshops →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3>Past Winners Showcase</h3>
                            <p>Learn from previous winning projects and understand what makes a great submission.</p>
                            <a href="#" className="resource-link">View Projects →</a>
                        </div>
                    </div>
                </section>

                <section className="resources-section">
                    <h2>Tools & Software</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3>Development Tools</h3>
                            <p>Access to premium development tools and environments, including cloud credits and API keys.</p>
                            <a href="#" className="resource-link">Get Access →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-palette"></i>
                            </div>
                            <h3>Design Resources</h3>
                            <p>Free access to design tools, UI kits, and stock assets for your project.</p>
                            <a href="#" className="resource-link">Browse Resources →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-download"></i>
                            </div>
                            <h3>Software Downloads</h3>
                            <p>Curated list of recommended software and tools for different project types.</p>
                            <a href="#" className="resource-link">Download Now →</a>
                        </div>
                    </div>
                </section>

                <section className="resources-section">
                    <h2>Templates & Guides</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-file-alt"></i>
                            </div>
                            <h3>Project Documentation</h3>
                            <p>Templates for project documentation, including technical specifications and user guides.</p>
                            <a href="#" className="resource-link">Get Templates →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-presentation"></i>
                            </div>
                            <h3>Presentation Templates</h3>
                            <p>Professional slide templates for your final project presentation.</p>
                            <a href="#" className="resource-link">Download Templates →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3>Business Plan Templates</h3>
                            <p>Templates to help you develop the business aspect of your innovation.</p>
                            <a href="#" className="resource-link">Access Templates →</a>
                        </div>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="contact-content">
                        <h2>Need Additional Resources?</h2>
                        <p>Can't find what you're looking for? Our team is here to help you succeed.</p>
                        <button className="contact-button">Contact Support</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resources;