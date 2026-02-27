import React from 'react';
import '../styles/marquee.css';

const Marquee = () => {
    return (
        <div className="scroll-container">
            <div className="scroll-text">
                <span>• Branding</span>
                <span>• Product Design</span>
                <span>• Digital Marketing</span>
                <span>• Social Media</span>
                <span>• Art Direction</span>
                <span>• Development</span>
                <span>• Motion Graphics</span>
                <span>• Strategy</span>
                <span>• Branding</span>
                <span>• Product Design</span>
                <span>• Digital Marketing</span>
                <span>• Social Media</span>
                <span>• Art Direction</span>
                <span>• Development</span>
                <span>• Motion Graphics</span>
                <span>• Strategy</span>
            </div>
            {/* Duplicate for seamless looping if the screen is wider than the content */}
            <div className="scroll-text">
                <span>• Branding</span>
                <span>• Product Design</span>
                <span>• Digital Marketing</span>
                <span>• Social Media</span>
                <span>• Art Direction</span>
                <span>• Development</span>
                <span>• Motion Graphics</span>
                <span>• Strategy</span>
                <span>• Branding</span>
                <span>• Product Design</span>
                <span>• Digital Marketing</span>
                <span>• Social Media</span>
                <span>• Art Direction</span>
                <span>• Development</span>
                <span>• Motion Graphics</span>
                <span>• Strategy</span>
            </div>
        </div>
    );
};

export default Marquee;
