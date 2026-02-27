import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import '../styles/contact-popup.css';

const SITE_CONFIG = {
    email: 'shakeelmcsa@gmail.com',
    phone: '+91 93630 58614',
    whatsapp: '91 93630 58614',
    social: {
        github: '#',
        linkedin: 'https://linkedin.com/in/shakeel-arafath-0b012a340',
    }
};


const validateContactForm = ({ name, email, message, phone }) => {
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email is required';
    if (!message.trim()) errors.message = 'Message is required';

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

const sanitizeInput = (str) => {
    if (!str) return '';
    return str.replace(/[<>]/g, '').trim();
};

const ContactPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', number: '', message: '' });
    const [statusMessage, setStatusMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});




    useEffect(() => {
        if (statusMessage) {
            const timer = setTimeout(() => {
                setStatusMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [statusMessage]);



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = sanitizeInput(formData.name);
        const email = sanitizeInput(formData.email);
        const number = sanitizeInput(formData.number);
        const message = sanitizeInput(formData.message);

        const validationResult = validateContactForm({ name, email, message, phone: number });

        if (!validationResult.isValid) {
            setErrors(validationResult.errors);
            const firstError = Object.values(validationResult.errors)[0];
            setStatusMessage(`⚠️ ${firstError}`);
            return;
        }

        setLoading(true);
        setStatusMessage('');
        setErrors({});

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone: number,
                    message,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || `Server Error: ${response.status}`);
            }

            setStatusMessage('✅ Message sent successfully! I will reply soon.');
            setFormData({ name: '', email: '', number: '', message: '' });

            setTimeout(() => {
                const text = `Hi, I'm ${name}. Message: ${message}`;
                window.open(`https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsapp}&text=${encodeURIComponent(text)}`, '_blank');
            }, 1500);

        } catch (error) {
            console.error('Contact Form Error:', error);
            setStatusMessage(`❌ Failed to send message. Please try again.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-modal-overlay">
            <div className="contact-modal-container">
                <button className="contact-modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={28} />
                </button>

                <section className="contact-popup-section">


                    <div className="popup-contact-container">
                        <div className="popup-header-perfect">
                            <span className="popup-label-perfect">Get In Touch</span>
                            <h2 className="popup-title-perfect">Let's Work Together</h2>
                            <p className="popup-description">Have a project in mind? Let's build something great together.</p>
                        </div>

                        <div className="popup-content">
                            {/* Left Column: Form */}
                            <div className="popup-form">
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="popup-form-group">
                                        <input
                                            type="text" name="name" placeholder="Your Name *"
                                            value={formData.name} onChange={handleChange} required
                                            className={errors.name ? 'error' : ''}
                                        />
                                    </div>
                                    <div className="popup-form-group">
                                        <input
                                            type="email" name="email" placeholder="Your Email *"
                                            value={formData.email} onChange={handleChange} required
                                            className={errors.email ? 'error' : ''}
                                        />
                                    </div>
                                    <div className="popup-form-group">
                                        <input
                                            type="tel" name="number" placeholder="Your Phone"
                                            value={formData.number} onChange={handleChange}
                                            className={errors.number ? 'error' : ''}
                                        />
                                    </div>
                                    <div className="popup-form-group">
                                        <textarea
                                            name="message" placeholder="Your Message *"
                                            value={formData.message} onChange={handleChange} required
                                            className={errors.message ? 'error' : ''}
                                        />
                                    </div>
                                    <button type="submit" className="popup-submit-btn" disabled={loading}>
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>

                                {statusMessage && (
                                    <div className={`popup-status-message ${statusMessage.startsWith('❌') ? 'error' : 'success'}`}>
                                        {statusMessage}
                                    </div>
                                )}
                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPopup;
