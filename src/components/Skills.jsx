import React, { useState, useEffect, useRef } from 'react';
import '../styles/skills.css';

/* ── Skill Data ── */
const baseCategories = [
    {
        id: 'marketing',
        label: 'Digital Marketing',
        emoji: '📣',
        skills: [
            { label: 'Meta Ads (FB & IG)', pct: 95, icon: '📊' },
            { label: 'Social Media Strategy', pct: 90, icon: '📱' },
            { label: 'Content Marketing', pct: 85, icon: '🐇' },
            { label: 'Performance Analysis', pct: 80, icon: '📈' },
        ],
    },
    {
        id: 'design',
        label: 'Design & Creative',
        emoji: '🎨',
        skills: [
            { label: 'Graphic Design', pct: 92, icon: '🖌️' },
            { label: 'UI/UX Design', pct: 88, icon: '🖥️' },
            { label: 'Video Production', pct: 85, icon: '🎬' },
            { label: 'Motion Graphics', pct: 80, icon: '✨' },
        ],
    },
    {
        id: 'tools',
        label: 'Tools & Frameworks',
        emoji: '🛠️',
        skills: [
            { label: 'Adobe Premiere Pro', pct: 95, icon: '🎞️' },
            { label: 'Canva', pct: 90, icon: '🖼️' },
            { label: 'Adobe After Effects', pct: 85, icon: '🌀' },
            { label: 'Google Analytics', pct: 75, icon: '📉' },
        ],
    },
];

const categories = [
    {
        id: 'all',
        label: 'All Skills',
        emoji: '🌟',
        skills: baseCategories.flatMap(c => c.skills),
    },
    ...baseCategories
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
                <span className="sk-icon">{skill.icon}</span>
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
