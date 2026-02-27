import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    Shakeel <i>Arafath</i>
                </div>
                <div className="footer-cr">
                    © {new Date().getFullYear()} — All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
