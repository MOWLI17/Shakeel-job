import React from 'react';
import '../styles/experience.css';

const ExperienceCard = ({ role, company, date1, date2, points, skills }) => {
    return (
        <div className="rez-card exp-card">
            <div className="rez-card-header">
                <div className="rez-title-group">
                    <h3 className="rez-role">{role}</h3>
                    <p className="rez-company">{company}</p>
                </div>
                <div className="rez-badges">
                    {date1 && <span className="rez-badge solid">{date1}</span>}
                    {date2 && <span className="rez-badge outline">{date2}</span>}
                    <button className="rez-toggle">–</button>
                </div>
            </div>

            <div className="rez-card-body">
                <ul className="rez-list">
                    {points.map((p, i) => (
                        <li key={i}><span>▹</span> {p}</li>
                    ))}
                </ul>

                {skills && (
                    <div className="rez-skills">
                        {skills.map((s, i) => (
                            <span key={i} className="rez-skill-chip">{s}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const EducationCard = ({ degree, school, date, color }) => {
    return (
        <div className={`rez-card edu-card ${color}`}>
            <div className="rez-card-header edu-header">
                <span className="rez-badge outline edu-date">{date}</span>
                <button className="rez-toggle">–</button>
            </div>
            <div className="rez-card-body edu-body">
                <h3 className="rez-role">{degree}</h3>
                <p className="rez-company">{school}</p>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <>
            <section className="resume-sec" id="resume">
                <div className="resume-container">

                    {/* Section Title */}
                    <div className="section-header">
                        <span className="section-eyebrow">Professional</span>
                        <h2 className="section-title">Career <i>Experience</i></h2>
                    </div>

                    {/* Work Experience Section */}
                    <div className="resume-section">
                        <div className="resume-title-row">
                            <h2 className="resume-main-title">Work Experience</h2>
                            <div className="resume-title-line"></div>
                        </div>

                        <ExperienceCard
                            role="Digital Marketer"
                            company="WORKFREAKS BUSINESS SERVICES PVT LTD"
                            date1="PRESENT"
                            date2="AUG 2023 – NOW"
                            points={[
                                "Planned, executed, and optimized Meta Ads campaigns to drive lead generation and brand awareness",
                                "Managed social media platforms — Instagram, Facebook, LinkedIn",
                                "Designed creative posters, banners, and digital flyers using Canva and Photoshop",
                                "Edited short-form videos and reels to boost reach and engagement",
                                "Monitored analytics & reporting to measure campaign success",
                                "Collaborated with the team to ensure brand consistency"
                            ]}
                            skills={["Meta Ads", "Canva", "Photoshop", "Social Media", "Video Editing", "Analytics"]}
                        />
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="resume-sec" id="education" style={{ paddingTop: '80px' }}>
                <div className="resume-container">

                    {/* Section Title */}
                    <div className="section-header">
                        <span className="section-eyebrow">Academic</span>
                        <h2 className="section-title">My <i>Education</i></h2>
                    </div>

                    <div className="resume-section">
                        <div className="resume-title-row">
                            <h2 className="resume-main-title">Education</h2>
                            <div className="resume-title-line"></div>
                        </div>

                        <div className="edu-grid">
                            <EducationCard
                                date="2025 – 2027"
                                degree="Master of Business Administration"
                                school="HINDUSTAN COLLEGE"
                                color="edu-green"
                            />
                            <EducationCard
                                date="2022 – 2025"
                                degree="Bachelor of Commerce"
                                school="LOYOLA COLLEGE"
                                color="edu-blue"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Experience;
