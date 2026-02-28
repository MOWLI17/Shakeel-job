import React, { useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { SiAdobepremierepro, SiCanva, SiMeta, SiNotion,  SiAdobephotoshop } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import '../styles/tools.css';

const CapcutIcon = ({ size = 36, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.998 12L2 16c0 1.886 0 2.328.586 2.914S4.114 19.5 6 19.5h8c1.886 0 2.828 0 3.414-.586S18 17.886 18 16m-8.002-4l11.998-6M9.998 12L2 8c0-1.386 0-2.328.586-2.914S4.114 4.5 6 4.5h8c1.886 0 2.828 0 3.414.586S18 6.614 18 8m-8.002 4l11.998 6" />
    </svg>
);

const Tools = () => {
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

    const toolsData = [
        { icon: <FaInstagram size={36} color="#E1306C" />, name: 'Instagram', category: 'Social Media' },
        { icon: <SiAdobepremierepro size={36} color="#9999FF" />, name: 'Premiere Pro', category: 'Video Edit' },
        { icon: <SiCanva size={36} color="#00C4CC" />, name: 'Canva', category: 'D. Design' },
        { icon: <SiMeta size={36} color="#0668E1" />, name: 'Meta Manager', category: 'Ads Admin' },
        { icon: <FcGoogle size={36} />, name: 'Google Search', category: 'SEM/SEO' },
        { icon: <SiNotion size={36} color="#000000" />, name: 'Notion', category: 'Planning' },
        { icon: <CapcutIcon size={36} color="#000000" />, name: 'CapCut', category: 'Mobile Video' },
        { icon: <SiAdobephotoshop size={36} color="#31A8FF" />, name: 'Photoshop', category: 'Photo Edit' },
    ];

    return (
        <section className="tools" id="tools">
            <div className="section-header reveal">
                <span className="section-eyebrow">Tech Stack</span>
                <h2 className="section-title">Essential <i>Instruments</i></h2>
            </div>
            <div className="tools-grid">
                {toolsData.map((tool, i) => (
                    <div className="tool-cell reveal" key={i}>
                        <span className="tool-icon">{tool.icon}</span>
                        <h3 className="tool-name">{tool.name}</h3>
                        <span className="tool-cat">{tool.category}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tools;
