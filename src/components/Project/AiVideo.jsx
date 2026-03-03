import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, PlayCircle } from 'lucide-react'
import SEO from '../SEO'

const AiVideo = () => {
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
        if (active && active.tagName === 'IFRAME' && active.id && active.id.startsWith('drive-iframe-')) {
          const clickedIndex = parseInt(active.id.replace('drive-iframe-', ''), 10);

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

  // ADD YOUR IMAGE OR VIDEO LINKS HERE
  const projectImages = [
    "https://drive.google.com/file/d/1TDrj4Ij1xXaYPc_qAXpzmcZQyJu9jlFb/view?usp=drive_link,",
    "https://drive.google.com/file/d/1jUA1oQ8tx1YPWrkeKGoMgQJtkN7HwiaI/view?usp=drive_link,",
    "https://drive.google.com/file/d/1hBz1WZ8KG5Po0oFrEiKNByYy_fL8yEoh/view?usp=drive_link,",
    "https://drive.google.com/file/d/1sWRMWTVfwRDEn0MVNRtylaIDDiA0qb8E/view?usp=drive_link,",
    "https://drive.google.com/file/d/1bd0riG15ftHWiWNqTYkAApp6e-Py2Q25/view?usp=drive_link",
    "https://drive.google.com/file/d/17KFWkCmsSXgwIyDRG_xJJIUJrmG5EOZc/view?usp=drive_link,",
    "https://drive.google.com/file/d/1Zv7cHEFDUUISGXwLUH_-BDkwGnfrVuGz/view?usp=drive_link,",
  ]

  return (
    <section style={{ background: '#131313', minHeight: '100vh', padding: '120px 5%' }}>
      <SEO
        title="AI Video Creation"
        description="Explore cutting-edge AI-powered video creation and generation by Shakeel Arafath. Modern marketing campaigns driven by artificial intelligence."
        keywords="AI video creation, AI video generator, marketing automation, AI content, Shakeel Arafath"
        url="https://shakeelarafath.in/project/ai-video"
        breadcrumb={[
          { name: "Portfolio", url: "https://shakeelarafath.in/#works" },
          { name: "AI Video", url: "https://shakeelarafath.in/project/ai-video" }
        ]}
      />
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'transparent',
            border: 'none',
            color: '#C9F31D',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '40px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
        >
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '60px',
          fontWeight: '800',
          color: '#FFFFFF',
          marginBottom: '20px'
        }}>
          AI Video Creation
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.65)',
          marginBottom: '60px',
          maxWidth: '600px'
        }}>
          Cutting-edge AI-powered video creation and generation for modern marketing campaigns
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {projectImages.map((imageUrl, index) => {
            const cleanUrl = imageUrl.replace(/,$/, '');
            const isEmbed = cleanUrl.includes('drive.google.com') || cleanUrl.includes('vimeo.com') || cleanUrl.includes('youtube.com');

            let embedUrl = cleanUrl;
            if (cleanUrl.includes('drive.google.com')) {
              const match = cleanUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
              if (match && match[1]) {
                embedUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
              }
            }

            return (
              <div
                key={index}
                style={{
                  background: '#1a1a1a',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  aspectRatio: '1',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  window.focus();
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.borderColor = '#C9F31D'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                }}
              >
                {isEmbed ? (
                  <>
                    <iframe
                      id={`drive-iframe-${index}`}
                      ref={(el) => iframeRefs.current[index] = el}
                      src={embedUrl}
                      style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1
                      }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={`AI Video ${index + 1}`}
                    ></iframe>

                    {/* Play Overlay - Only visible when not active */}
                    {activeVideoIndex !== index && (
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        pointerEvents: 'none', // Let clicks pass through to iframe
                        transition: 'opacity 0.3s ease'
                      }}>
                        <div style={{
                          background: 'rgba(201, 243, 29, 0.2)',
                          borderRadius: '50%',
                          padding: '15px',
                          border: '2px solid #C9F31D',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 0 30px rgba(201, 243, 29, 0.3)'
                        }}>
                          <PlayCircle size={40} color="#C9F31D" />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <img
                    src={embedUrl}
                    alt={`AI Video ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                      <div style="
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                      ">
                        <p style="color: #C9F31D; fontSize: 18px; fontWeight: 600;">
                          AI Video ${index + 1}
                        </p>
                      </div>
                    `
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AiVideo
