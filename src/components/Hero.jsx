import React, { useEffect } from 'react';
import '../styles/hero.css';

const Hero = () => {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.1 }
        );
        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="hero">
            <div className="hero-left">
                <div className="hero-content">
                    <span className="hero-eyebrow reveal">Digital Marketing Specialist</span>
                    <h1 className="hero-name reveal">
                        <div className="first-name">Shakeel</div>
                        <div className="last-name">Arafath</div>
                    </h1>
                    <div className="hero-description reveal">
                        <span className="desc-item">Specializing in ROI</span>
                        <span className="desc-sep">•</span>
                        <span className="desc-item">Brand Growth</span>
                        <span className="desc-sep">•</span>
                        <span className="desc-item">Based in Chennai</span>
                    </div>
                </div>
                <div className="scroll-hint reveal">
                    <div className="scroll-line"></div>
                </div>
            </div>
            <div className="hero-right">
                <div className="big-letter">S</div>
                <div className="hero-right-content">
                    <p className="hero-tagline reveal">
                        Crafting <i>luxury marketing</i> strategies that resonate with high-intent audiences.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item reveal">
                            <span className="stat-num">80+</span>
                            <span className="stat-label">Clients Helped</span>
                        </div>
                        <div className="stat-item reveal">
                            <span className="stat-num">300%</span>
                            <span className="stat-label">Avg. Growth</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
