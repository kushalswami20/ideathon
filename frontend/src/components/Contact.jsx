import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User } from 'lucide-react';
import './css/Contact.css';

const Contact = () => {
    const [activeQuestion, setActiveQuestion] = useState('submit');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    const faqData = [
        {
            id: 'submit',
            question: 'How To Submit Your Idea?',
            answer: (
                <>
                    <p>To submit your idea for the competition, please follow these steps:</p>
                    <ol>
                        <li>
                            <strong>Complete the Submission Form:</strong> Navigate to the Idea Submission Page. Fill out the submission form with the necessary information about your idea. This includes the basic details about your idea that how impactful it is.
                        </li>
                        <li>
                            <strong>Review and Submit:</strong> Double-check all the details you have entered to ensure accuracy. Once you are satisfied, click the "Submit" button to submit your idea.
                        </li>
                    </ol>
                </>
            )
        },
        {
            id: 'register',
            question: 'How to Register Your School?',
            answer: 'Registration process information...'
        },
        {
            id: 'award',
            question: 'How to Apply for the Principle of Innovation Award?',
            answer: 'Award application process information...'
        }
    ];

    return (
        <div className="contact-page">
            <header className="contact-header">
                <div className="header-container">
                    <h1 className="page-title">YI24: Organiser Contact</h1>
                    
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="section-title">REACH US THROUGH</h2>
                            
                            <div className="contact-person">
                                <h3 className="contact-role">
                                    <User size={20} />
                                    <span>Program Director</span>
                                </h3>
                                <p className="person-name">Sanjeeva Shivesh</p>
                                <div className="contact-details">
                                    <p>Email: info@youthideathon.in</p>
                                    <p>Contact Number: 0124-4239588 | 8130596780</p>
                                </div>
                            </div>

                            <div className="contact-person">
                                <h3 className="contact-role">
                                    <User size={20} />
                                    <span>Org. Comm. Lead</span>
                                </h3>
                                <p className="person-name">Vandana Ahluwalia</p>
                                <div className="contact-details">
                                    <p>Email: vandana@thinkstartup.in</p>
                                    <p>Contact Number: 8130062682 | 9873474756</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h2 className="section-title">Send Us a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Your name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Your email</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Your message (optional)</label>
                                    <textarea
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    />
                                </div>
                                <button type="submit" className="submit-button">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            <section className="faq-section">
                <h2 className="faq-title">Frequently Asked Question:</h2>
                <div className="faq-container">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="faq-item">
                            <button
                                className={`faq-question ${activeQuestion === faq.id ? 'active' : ''}`}
                                onClick={() => setActiveQuestion(activeQuestion === faq.id ? null : faq.id)}
                            >
                                <span className="question-text">{faq.question}</span>
                                {activeQuestion === faq.id ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            {activeQuestion === faq.id && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Contact;