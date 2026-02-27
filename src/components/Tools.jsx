import React, { useEffect } from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiAdobepremierepro, SiCanva, SiMeta, SiNotion, SiOpenai } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import '../styles/tools.css';

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
        { icon: <FaTiktok size={36} color="#000000" />, name: 'CapCut', category: 'Mobile Video' },
        { icon: <SiOpenai size={36} color="#10a37f" />, name: 'ChatGPT', category: 'Copywriting' },
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
