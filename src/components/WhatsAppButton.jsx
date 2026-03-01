import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/whatsapp-button.css';

const WhatsAppButton = () => {
    return (
        <div className="whatsapp-container">
            <div className="whatsapp-tooltip">Chat with me</div>
            <a
                href="https://wa.me/9193630 58614"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
            >
                <FaWhatsapp className="whatsapp-icon" />
            </a>
        </div>
    );
};

export default WhatsAppButton;
