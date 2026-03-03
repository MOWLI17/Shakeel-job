import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-logo">
                        Shakeel <i>Arafath</i>
                    </div>
                    <div className="footer-nav">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#works">Works</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-socials">
                        <a href="https://linkedin.com/in/shakeel-arafath-0b012a340" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/shakeelarafath/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-cr">
                        © {new Date().getFullYear()} — Designed & Developed with passion in Chennai
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
