import React, { useState, useEffect, useRef } from 'react';
import { FaShareAlt, FaHashtag, FaPaintBrush, FaDesktop, FaVideo, FaMagic } from 'react-icons/fa';
import { SiMeta, SiGoogleanalytics, SiAdobepremierepro, SiCanva, SiAdobeaftereffects } from 'react-icons/si';
import '../styles/skills.css';

const BrandIcons = {
    MetaAds: <SiMeta size={24} />,
    SocialMedia: <FaShareAlt size={24} />,
    ContentMarketing: <FaHashtag size={24} />,
    Analytics: <SiGoogleanalytics size={24} />,
    GraphicDesign: <FaPaintBrush size={24} />,
    UIUX: <FaDesktop size={24} />,
    VideoProduction: <FaVideo size={24} />,
    MotionGraphics: <FaMagic size={24} />,
    AdobePremiere: <SiAdobepremierepro size={24} />,
    Canva: <SiCanva size={24} />,
    AdobeAE: <SiAdobeaftereffects size={24} />,
    GoogleAnalytics: <SiGoogleanalytics size={24} />,
};

/* ── Skill Data ── */

const baseCategories = [
    {
        id: "marketing",
        label: "Digital Marketing",
        emoji: "📣",
        color: "#0866FF",
        skills: [
            { label: "Meta Ads (FB & IG)", pct: 95, Icon: BrandIcons.MetaAds },
            { label: "Social Media Strategy", pct: 90, Icon: BrandIcons.SocialMedia },
            { label: "Content Marketing", pct: 85, Icon: BrandIcons.ContentMarketing },
            { label: "Performance Analysis", pct: 80, Icon: BrandIcons.Analytics },
        ],
    },
    {
        id: "design",
        label: "Design & Creative",
        emoji: "🎨",
        color: "#ec4899",
        skills: [
            { label: "Graphic Design", pct: 92, Icon: BrandIcons.GraphicDesign },
            { label: "UI/UX Design", pct: 88, Icon: BrandIcons.UIUX },
            { label: "Video Production", pct: 85, Icon: BrandIcons.VideoProduction },
            { label: "Motion Graphics", pct: 80, Icon: BrandIcons.MotionGraphics },
        ],
    },
    {
        id: "tools",
        label: "Tools & Frameworks",
        emoji: "🛠️",
        color: "#9999FF",
        skills: [
            { label: "Adobe Premiere Pro", pct: 95, Icon: BrandIcons.AdobePremiere },
            { label: "Canva", pct: 90, Icon: BrandIcons.Canva },
            { label: "Adobe After Effects", pct: 85, Icon: BrandIcons.AdobeAE },
            { label: "Google Analytics", pct: 75, Icon: BrandIcons.GoogleAnalytics },
        ],
    },
];
const categories = [
    {
        id: 'all',
        label: 'All Skills',
        emoji: '🌟',
        skills: baseCategories.flatMap(c => c.skills.map(skill => ({ ...skill, catColor: c.color }))),
    },
    ...baseCategories.map(c => ({
        ...c,
        skills: c.skills.map(skill => ({ ...skill, catColor: c.color }))
    }))
];

/* ── Proficiency Label ── */
const getLevel = (pct) => {
    if (pct >= 90) return { label: 'EXPERT', cls: 'lvl-expert' };
    if (pct >= 80) return { label: 'ADVANCED', cls: 'lvl-advanced' };
    if (pct >= 70) return { label: 'PROFICIENT', cls: 'lvl-proficient' };
    return { label: 'INTERMEDIATE', cls: 'lvl-intermediate' };
};

/* ── Animated Ring SVG ── */
const Ring = ({ pct, size = 36, stroke = 3 }) => {
    const r = (size - stroke * 2) / 2;
    const circ = 2 * Math.PI * r;
    const dash = (pct / 100) * circ;

    return (
        <svg width={size} height={size} className="sk-ring">
            <circle cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke="rgba(184,150,46,0.15)" strokeWidth={stroke} />
            <circle cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke="var(--gold)" strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circ}`}
                strokeDashoffset="0"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                className="sk-ring-fill"
            />
        </svg>
    );
};

/* ── Individual Skill Card ── */
const SkillCard = ({ skill, visible }) => {
    const level = getLevel(skill.pct);
    return (
        <div className={`sk-card${visible ? ' sk-visible' : ''}`}>
            <div className="sk-card-top">
                <span className="sk-icon" style={{ color: skill.catColor || 'var(--gold)' }}>
                    {skill.icon || skill.Icon}
                </span>
                <span className="sk-pct">
                    {skill.pct}<sup>%</sup>
                </span>
            </div>

            <p className="sk-label">{skill.label}</p>

            <div className="sk-bar-row">
                <Ring pct={skill.pct} />
                <div className="sk-bar-track">
                    <div
                        className="sk-bar-fill"
                        style={{ width: visible ? `${skill.pct}%` : '0%' }}
                    />
                </div>
            </div>

            <div className="sk-proficiency">
                PROFICIENCY —&nbsp;
                <span className={`sk-level ${level.cls}`}>{level.label}</span>
            </div>
        </div>
    );
};

/* ── Stats Strip ── */
const StatsStrip = ({ cat }) => {
    const avg = Math.round(cat.skills.reduce((a, s) => a + s.pct, 0) / cat.skills.length);
    const top = Math.max(...cat.skills.map(s => s.pct));

    return (
        <div className="sk-stats">
            <div className="sk-stat">
                <span className="sk-stat-val">{avg}<span className="sk-stat-unit">%</span></span>
                <span className="sk-stat-key">AVG. SCORE</span>
            </div>
            <div className="sk-stat-sep" />
            <div className="sk-stat">
                <span className="sk-stat-val">{top}<span className="sk-stat-unit">%</span></span>
                <span className="sk-stat-key">TOP SKILL</span>
            </div>
        </div>
    );
};

/* ── Main Skills Section ── */
const Skills = () => {
    const [active, setActive] = useState(0);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    /* Reveal on scroll */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    /* Reset bar animation on tab change */
    const handleTab = (i) => {
        setVisible(false);
        setActive(i);
        setTimeout(() => setVisible(true), 80);
    };

    const cat = categories[active];

    return (
        <section className="skills" id="skills" ref={sectionRef}>
            <div className="skills-container">

                {/* Header */}
                <div className="section-header">
                    <span className="section-eyebrow">Service Pillars</span>
                    <h2 className="section-title">Core <i>Expertise</i></h2>
                </div>

                {/* Category Tabs */}
                <div className="sk-tabs">
                    {categories.map((c, i) => (
                        <button
                            key={c.id}
                            className={`sk-tab${active === i ? ' sk-tab-active' : ''}`}
                            onClick={() => handleTab(i)}
                        >
                            <span className="sk-tab-emoji">{c.emoji}</span>
                            {c.label}
                        </button>
                    ))}
                </div>

                {/* Card Grid */}
                <div className="sk-grid">
                    {cat.skills.map((skill, i) => (
                        <SkillCard key={`${active}-${i}`} skill={skill} visible={visible} />
                    ))}
                </div>

                {/* Stats Strip */}
                <StatsStrip cat={cat} />

            </div>
        </section>
    );
};

export default Skills;
