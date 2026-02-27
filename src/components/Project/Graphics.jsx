import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
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
  const videoRefs = useRef([])

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause()
      }
    })
  }

  return (
    <section className="graphics-section">
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
            const videoSrc = driveMatch
              ? `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`
              : item.url;

            return (
              <div
                key={index}
                className="bento-card bento-standard"
              >
                {/* Video HTML5 */}
                <div className="video-wrapper">
                  <video
                    ref={(el) => videoRefs.current[index] = el}
                    src={videoSrc}
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    onPlay={() => handlePlay(index)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
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