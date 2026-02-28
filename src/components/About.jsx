import React, { useEffect } from 'react';
import '../styles/about.css';
import shakeelImg from '../image/shakeel.PNG';

const About = () => {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) e.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );
        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-left reveal left">
                    <img
                        src={shakeelImg}
                        alt="Shakeel Arafath"
                        className="portrait-image"
                        style={{ width: '100%', maxWidth: '400px', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
                <div className="about-right reveal right">
                    <h2 className="about-quote">
                        "Marketing is not about <i>finding</i> customers, it's about being <i>found</i> by the right hearts."
                    </h2>
                    <div className="about-body">
                        <p>
                            Shakeel Arafath is a digital presence architect based in Chennai, blending strategic growth marketing
                            with high-end editorial aesthetics. With over 8 years in the digital space, he has mastered
                            the art of distilling complex brand values into compelling visual narratives.
                        </p>
                        <p>
                            His approach is holistic: combining data-backed Meta Ad campaigns with human-centric design,
                            ensuring that every digital touchpoint feels like a choice, not an intrusion.
                        </p>
                    </div>
                    <div className="about-tags">
                        <span className="tag-pill">Strategy</span>
                        <span className="tag-pill">Ads Management</span>
                        <span className="tag-pill">Visual Storytelling</span>
                        <span className="tag-pill">ROI Focused</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
