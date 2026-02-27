import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/nav.css';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileOpen(!isMobileOpen);
        if (!isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const handleLinkClick = () => {
        setIsMobileOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
                Shakeel <span className="logo-italic">Arafath</span>
            </div>

            <ul className={`nav-links ${isMobileOpen ? 'mobile-open' : ''}`}>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
                <li><a href="#works" onClick={handleLinkClick}>Works</a></li>

                {/* Contact logic inside menu for mobile view */}
                <li className="mobile-only-link" style={isMobileOpen ? { display: 'block', marginTop: '20px' } : { display: 'none' }}>
                    <a href="#contact" className="gold-link" onClick={handleLinkClick}>Get in Touch</a>
                </li>
            </ul>

            <div className="nav-cta">
                <a href="#contact" className="gold-link">Get in Touch</a>
            </div>

            <button
                className={`mobile-menu-btn ${isMobileOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
            >
                {isMobileOpen ? <X size={28} color="#fff" /> : <Menu size={28} color={scrolled ? "#1a1a1a" : "#fff"} />}
            </button>
        </nav>
    );
};

export default Nav;
