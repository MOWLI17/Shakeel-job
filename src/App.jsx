import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Cursor from './components/Cursor.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Works from './components/Works.jsx';
import Tools from './components/Tools.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

import ProductManipulation from './components/Project/ProductManipulation';
import SocialMedia from './components/Project/SocialMedia';
import Graphics from './components/Project/Graphics';
import Logo from './components/Project/Logo';
import PrintDesign from './components/Project/PrintDesign';
import AiVideo from './components/Project/AiVideo';
import SEO from './components/SEO';

function App() {
    return (
        <div className="app-container">
            <Cursor />
            <WhatsAppButton />
            <Routes>
                <Route path="/" element={
                    <>
                        <SEO
                            description="Shakeel Arafath — Digital Marketer, Motion Graphic Designer & Content Creator based in Chennai. Specializing in Meta Ads, social media strategy, and high-impact visual content."
                            keywords="Shakeel Arafath, digital marketer Chennai, motion graphic designer, Meta Ads specialist, social media marketing, performance marketing"
                        />
                        <Nav />
                        <Hero />
                        <Marquee />
                        <About />
                        <Skills />
                        <Experience />
                        <Works />
                        <Tools />
                        <CTA />
                        <Footer />
                    </>
                } />
                <Route path="/project/product-manipulation" element={<ProductManipulation />} />
                <Route path="/project/social-media" element={<SocialMedia />} />
                <Route path="/project/graphics" element={<Graphics />} />
                <Route path="/project/logo" element={<Logo />} />
                <Route path="/project/print-design" element={<PrintDesign />} />
                <Route path="/project/ai-video" element={<AiVideo />} />
            </Routes>
        </div>
    );
}

export default App;
