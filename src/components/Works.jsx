import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Play, Hexagon, FileText, Video, Layers, ArrowRight } from 'lucide-react';
import '../styles/works.css';

import bg1 from '../image/background/1.jpg.jpeg';
import bg2 from '../image/background/2.jpg.jpeg';
import bg3 from '../image/background/3.jpg.jpeg';
import bg4 from '../image/background/4.jpg.jpeg';
import bg5 from '../image/background/5.jpg.jpeg';
import pmImage from '../image/product manupulation/Gemini_Generated_Image_gvczcogvczcogvcz.png';

const Works = () => {
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

    const navigate = useNavigate();

    const worksData = [
        { icon: <Smartphone size={24} color="#B8962E" />, title: 'Social Media Posters', image: bg1, link: '/project/social-media' },
        { icon: <Play size={24} color="#B8962E" />, title: 'Motion Graphics &\nVideo Edits', image: bg2, link: '/project/graphics' },
        { icon: <Hexagon size={24} color="#B8962E" />, title: 'Logo Design', image: bg3, link: '/project/logo' },
        { icon: <FileText size={24} color="#B8962E" />, title: 'Print Design', image: bg4, link: '/project/print-design' },
        { icon: <Video size={24} color="#B8962E" />, title: 'AI Video Creation', image: bg5, link: '/project/ai-video' },
        { icon: <Layers size={24} color="#B8962E" />, title: 'Product Manipulation', image: pmImage, link: '/project/product-manipulation' },
    ];

    return (
        <section className="works" id="works">
            <div className="works-container">
                <div className="section-header reveal">
                    <span className="section-eyebrow">Portfolio</span>
                    <h2 className="section-title">Visual <i>Case Studies</i></h2>
                </div>

                <div className="works-grid">
                    {worksData.map((work, i) => (
                        <div
                            key={i}
                            className="work-card reveal"
                            onClick={() => work.link && navigate(work.link)}
                        >
                            <div
                                className="work-placeholder"
                                style={
                                    work.image
                                        ? { backgroundImage: `url(${work.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                                        : { backgroundColor: '#111' }
                                }
                            >
                                <div className="work-overlay-static">
                                    <div className="work-icon-box">
                                        {work.icon}
                                    </div>
                                    <h3 className="work-title">
                                        {work.title.split('\n').map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}<br />
                                            </React.Fragment>
                                        ))}
                                    </h3>
                                    <button className="work-explore-btn">
                                        EXPLORE WORK <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
