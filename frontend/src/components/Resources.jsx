import React from 'react';
import './css/Resources.css';
import pdf2021 from "../assets/Paryavarnam2021.pdf";
import pdf2022 from "../assets/Paryavaranam2022.pdf";
import annualreport24 from "../assets/annualreport2024.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLeaf,
  faSeedling,
  faChartLine,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Resources = () => {
    return (
        <div className='resources'>
            <header className="resources-header header-with-bg">
                <div className="resources-header-background"></div>
                <div className="resources-header-overlay"></div>
                <div className="resources-header-content">
                    <h1 className="resources-header-content-title">Resource Hub</h1>
                    <p className=".resources-header-content-description">Everything you need to succeed in the Ideathon. Access tutorials, tools, templates, and more.</p>
                </div>
            </header>
            <div className="container">
                <section className="resources-section">
                    <h2>Paryavarnam Magazines</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon magazine-icon">
                                <FontAwesomeIcon icon={faLeaf} />
                            </div>
                            <h3>Paryavarnam Magazine 2021</h3>
                            <p>Explore Paryavarnam Magazine 2021—Inspiring a sustainable future, one page at a time!</p>
                            <a href={pdf2021} className="resource-link">Pdf Link →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon magazine-icon">
                                <FontAwesomeIcon icon={faSeedling} />
                            </div>
                            <h3>Paryavarnam Magazine 2022</h3>
                            <p>Explore Paryavarnam Magazine 2022—Inspiring a sustainable future, one page at a time!</p>
                            <a href={pdf2022} className="resource-link">Pdf link →</a>
                        </div>
                    </div>
                </section>

                <section className="resources-section">
                    <h2>Research Papers</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon report-icon">
                                <FontAwesomeIcon icon={faChartLine} />
                            </div>
                            <h3>Annual Report 2024</h3>
                            <p>Access to Annual Report 2024 of Paryavarnam.</p>
                            <a href={annualreport24} className="resource-link">Get Access →</a>
                        </div>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="contact-content">
                        <h2>Need Additional Resources?</h2>
                        <p>Can't find what you're looking for? Our team is here to help you succeed.</p>
                        <form action="/contact">
                            <button className="contact-button">
                                <FontAwesomeIcon icon={faEnvelope} />
                                Contact Support
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resources;