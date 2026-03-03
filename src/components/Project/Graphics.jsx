import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, PlayCircle } from 'lucide-react'
import SEO from '../SEO'

import './CssPage/Graphics.css'

const mediaItems = [
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/1PPgztd7GpVwV_DARoo9BZZ8sy7HcPzq2/preview',
    title: 'Cinematic Intro',
  },
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/1Oc8M4Fe7XGMPA_HqvCvnyaFNSa1ZXBkp/preview',
    title: 'Promo Reel 1',
  },
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/1u57GylGpBsLX4iYvtBZ0VtyGwkeEfmem/preview',
    title: 'Promo Reel 2',
  },
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/1ogj4sPFHuptsw0FCPzrscnll_h2knx3X/preview',
    title: 'Brand Showcase',
  },
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/1_0p-i66RqzVN14vUKKXLW9PYQ78anO40/preview',
    title: 'TikTok Viral Edit',
  },
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/13z7jGIpDcPwdTUnyl_1Cfqvk-LUC1XsT/preview',
    title: 'Product Teaser',
  },
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/1sM5rgPkBipfB53sogC8Ui2NEdPb9ebGr/preview',
    title: 'Corporate Story',
  },
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/145fLIAZIbhjp1MZSMu44pVYprM-JIuUX/preview',
    title: 'Event Highlight',
  },
  {
    type: 'video',
    url: 'https://drive.google.com/file/d/1b1vJvEBYB4sPBoZUSZF1GfEu6Ewjgmse/preview',
    title: 'Motion Typography',
  },
]


const Graphics = () => {
  const navigate = useNavigate()
  const iframeRefs = useRef([])
  const [activeVideoIndex, setActiveVideoIndex] = useState(null)

  // Use a ref for the active index to use inside the blur handler without stale closure issues
  const activeVideoIndexRef = useRef(null)

  useEffect(() => {
    const handleBlur = () => {
      setTimeout(() => {
        const active = document.activeElement;
        // Check if the newly focused element is one of our iframes
        if (active && active.tagName === 'IFRAME' && active.id && active.id.startsWith('graphics-iframe-')) {
          const clickedIndex = parseInt(active.id.replace('graphics-iframe-', ''), 10);

          // Only refresh if the user switched to a DIFFERENT video
          if (activeVideoIndexRef.current !== clickedIndex) {
            if (activeVideoIndexRef.current !== null) {
              // Reload ONLY the previously playing iframe to stop it
              const prevIframe = iframeRefs.current[activeVideoIndexRef.current];
              if (prevIframe) {
                const currentSrc = prevIframe.src;
                prevIframe.src = currentSrc;
              }
            }
            // Update the currently playing video index
            activeVideoIndexRef.current = clickedIndex;
            setActiveVideoIndex(clickedIndex);
          }
        }
      }, 100);
    };

    window.addEventListener('blur', handleBlur);
    return () => window.removeEventListener('blur', handleBlur);
  }, []);

  return (
    <section className="graphics-section">
      <SEO
        title="Motion Graphics & Video Edits"
        description="View professional motion graphics, cinematic intros, and video edits by Shakeel Arafath. High-engagement visual content for brands."
        keywords="motion graphics, video editing, cinematic intros, promo reels, Shakeel Arafath"
        url="https://shakeelarafath.in/project/graphics"
        breadcrumb={[
          { name: "Portfolio", url: "https://shakeelarafath.in/#works" },
          { name: "Motion Graphics", url: "https://shakeelarafath.in/project/graphics" }
        ]}
      />
      {/* Ambient glow background */}
      <div className="graphics-ambient" />

      <div className="graphics-container">

        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="graphics-back-btn"
          aria-label="Back to Portfolio"
        >
          <ArrowLeft size={15} />
          Back to Portfolio
        </button>

        {/* Header */}
        <header className="graphics-header">
          <span className="graphics-eyebrow">Visual Case Studies</span>
          <h1 className="graphics-title">
            Motion Graphics &<br /><i>Video Edits</i>
          </h1>
          <p className="graphics-subtitle">
            Dynamic video content creation, professional cut-downs, and
            trend-setting motion graphics engineered for high engagement.
          </p>
        </header>

        {/* Bento Grid */}
        <div className="video-bento-grid">
          {mediaItems.map((item, index) => {
            const driveMatch = item.url.match(/\/d\/([a-zA-Z0-9_-]+)/);
            const iframeSrc = driveMatch
              ? `https://drive.google.com/file/d/${driveMatch[1]}/preview`
              : item.url;

            return (
              <div
                key={index}
                className="bento-card bento-standard"
                onMouseEnter={() => window.focus()}
              >
                {/* Video Iframe */}
                <div className="video-wrapper">
                  <iframe
                    id={`graphics-iframe-${index}`}
                    ref={(el) => iframeRefs.current[index] = el}
                    src={iframeSrc}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ border: 'none', width: '100%', height: '100%', backgroundColor: '#000', position: 'relative', zIndex: 1 }}
                    title={item.title}
                  />

                  {/* Play Overlay - Only visible when not active */}
                  {activeVideoIndex !== index && (
                    <div style={{
                      position: 'absolute',
                      inset: '10px',
                      background: 'rgba(0,0,0,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                      pointerEvents: 'none',
                      borderRadius: '13px',
                      transition: 'opacity 0.3s ease'
                    }}>
                      <div className="graphics-play-badge">
                        <PlayCircle size={48} color="#B8962E" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Index number badge */}
                <span className="bento-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Title pill on hover */}
                <span className="bento-title">
                  <span className="bento-title-dot" />
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom accent line */}
        <div className="graphics-divider" />

      </div>
    </section>
  )
}

export default Graphics
