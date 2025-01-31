import React from 'react';
import './css/Team.css'

const Team = () => {
    const teamMembers = [
        {
            name: "Col. Anil K Pokhriyal",
            role: "CEO, MEPSC",
            image: "/api/placeholder/200/200"
        },
        {
            name: "Shivani Kapoor",
            role: "Founder, ThinkStartup",
            image: "/api/placeholder/200/200"
        },
        {
            name: "Sanjeeva Shivesh",
            role: "Program Director, YouthIdeathon",
            image: "/api/placeholder/200/200"
        },
        {
            name: "Santosh Saha",
            role: "Head (BD), MEPSC",
            image: "/api/placeholder/200/200"
        },
        {
            name: "Ruby Sinha",
            role: "Media Partner",
            image: "/api/placeholder/200/200"
        },
        {
            name: "Vandana Ahluwalia",
            role: "Org. Comm. Lead, YouthIdeathon",
            image: "/api/placeholder/200/200"
        }
    ];

    return (
        <div className="team-page">
            <header className="team-header">
                <div className="team-header-background"></div>
                <div className="team-header-overlay"></div>
                <div className="team-header-content">
                    <h1 className='team-header-title'>Team</h1>
                    <p className="team-header-description">
                        Meet our dedicated team of professionals working together to make this society a success
                    </p>
                </div>
                
            </header>

            <div className="team-container">
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member-card">
                            <div className="member-image-container">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="member-image"
                                />
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;