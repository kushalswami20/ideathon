import React from 'react';
import './css/Team.css'
import Navneet from "../assets/Navneet.jpeg"
import Nitesh from "../assets/Nitesh.jpeg"
import Ashwini from "../assets/Ashwini.jpeg"
import name1 from "../assets/name1.jpeg"
import kshitij from "../assets/kshitij.jpeg"
import vikash from "../assets/vikash.jpeg"
const Team = () => {
    const teamMembers = [
        {
            name: "Navneet Singh",
            role: "President",
            image: Navneet
        },
        {
            name: "Nitesh Jha",
            role: "Vice President",
            image: Nitesh
        },
        {
            name: "Ashwini Kumar",
            role: "Coordinator",
            image: Ashwini
        },
        {
            name: "Pratyush",
            role: "Vice President",
            image: name1
        },
        {
            name: "Kshitij Kumar Ojha",
            role: "Treasurer",
            image: kshitij
        },
        {
            name: "vikas",
            role: "Director Of Research",
            image: vikash
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