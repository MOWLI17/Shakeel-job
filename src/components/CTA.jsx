import React, { useEffect, useState } from 'react';
import '../styles/cta.css';
import ContactPopup from './ContactPopup';

const CTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleOpenModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <section className="cta" id="contact">
            <div className="cta-bg-letters">SA</div>
            <div className="cta-content reveal">
                <span className="cta-label">Direct Line</span>
                <h2 className="cta-title">
                    Let’s create something <i>Extraordinary</i>
                </h2>
                <div className="cta-btn-wrap">
                    <button onClick={handleOpenModal} className="cta-btn" type="button">
                        Start a Conversation
                    </button>
                </div>
            </div>
            {isModalOpen && <ContactPopup onClose={() => setIsModalOpen(false)} />}
        </section>
    );
};

export default CTA;
