import React from 'react';
import './css/Resources.css'
import pdf2021 from "../assets/Paryavarnam2021.pdf"
import pdf2022 from "../assets/Paryavaranam2022.pdf"
import annualreport24 from "../assets/annualreport2024.pdf"

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
                    <h2>Paryavarnam Magazines</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <h3>Paryavarnam Magazine 2021 </h3>
                            <p>Explore Paryavarnam Magazine 2021—Inspiring a sustainable future, one page at a time!</p>
                            <a href={pdf2021} className="resource-link">Pdf Link →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3>Paryavarnam Magazine 2022</h3>
                            <p>Explore Paryavarnam Magazine 2021—Inspiring a sustainable future, one page at a time!</p>
                            <a href={pdf2022} className="resource-link">Pdf link →</a>
                        </div>

                        {/* <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <h3>Past Winners Showcase</h3>
                            <p>Learn from previous winning projects and understand what makes a great submission.</p>
                            <a href="#" className="resource-link">View Projects →</a>
                        </div> */}
                    </div>
                </section>

                <section className="resources-section">
                    <h2>Research Papers</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon">
                                <i className="fas fa-tools"></i>
                            </div>
                            <h3>Annual Report 2024</h3>
                            <p>Access to Annual Report 2024 of Paryavarnam.</p>
                            <a href={annualreport24} className="resource-link">Get Access →</a>
                        </div>

                        {/* <div className="resource-card">
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
                        </div> */}
                    </div>
                </section>

                {/* <section className="resources-section">
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
                </section> */}

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