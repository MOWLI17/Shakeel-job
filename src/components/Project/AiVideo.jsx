import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const AiVideo = () => {
  const navigate = useNavigate()
  const iframeRefs = useRef([])

  useEffect(() => {
    const handleBlur = () => {
      const activeEl = document.activeElement;
      if (activeEl && activeEl.tagName === 'IFRAME') {
        const index = iframeRefs.current.indexOf(activeEl);
        if (index !== -1) {
          iframeRefs.current.forEach((iframe, i) => {
            if (i !== index && iframe) {
              const currentSrc = iframe.src;
              // Reset the src to stop the video from playing
              iframe.src = currentSrc;
            }
          });
        }
      }
    };

    window.addEventListener('blur', handleBlur);
    return () => {
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  // ADD YOUR IMAGE OR VIDEO LINKS HERE
  // For images: Just paste the image URL
  // For videos: Use Vimeo embed link: https://player.vimeo.com/video/VIDEO_ID
  // Or YouTube embed: https://www.youtube.com/embed/VIDEO_ID
  const projectImages = [
    "https://drive.google.com/file/d/1TDrj4Ij1xXaYPc_qAXpzmcZQyJu9jlFb/view?usp=drive_link,",  // Replace with your image or video embed URL
    "https://drive.google.com/file/d/1jUA1oQ8tx1YPWrkeKGoMgQJtkN7HwiaI/view?usp=drive_link,",  // Replace with your image or video embed URL
    "https://drive.google.com/file/d/1hBz1WZ8KG5Po0oFrEiKNByYy_fL8yEoh/view?usp=drive_link,",  // Replace with your image or video embed URL
    "https://drive.google.com/file/d/1sWRMWTVfwRDEn0MVNRtylaIDDiA0qb8E/view?usp=drive_link,",  // Replace with your image or video embed URL
    "https://drive.google.com/file/d/1bd0riG15ftHWiWNqTYkAApp6e-Py2Q25/view?usp=drive_link",  // Replace with your image or video embed URL
    "https://drive.google.com/file/d/17KFWkCmsSXgwIyDRG_xJJIUJrmG5EOZc/view?usp=drive_link,",
    "https://drive.google.com/file/d/1Zv7cHEFDUUISGXwLUH_-BDkwGnfrVuGz/view?usp=drive_link,",
  ]

  return (
    <section style={{ background: '#131313', minHeight: '100vh', padding: '120px 5%' }}>
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
            // Clean up accidental trailing commas
            const cleanUrl = imageUrl.replace(/,$/, '');

            // Determine if it's a video/embed link (Google Drive, Vimeo, YouTube)
            const isEmbed = cleanUrl.includes('drive.google.com') || cleanUrl.includes('vimeo.com') || cleanUrl.includes('youtube.com');
            const isDrive = cleanUrl.includes('drive.google.com');

            let embedUrl = cleanUrl;
            // Convert Google Drive links for iframe preview
            if (isDrive) {
              const match = cleanUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
              if (match && match[1]) {
                embedUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
              }
            } else if (cleanUrl.includes('youtube.com') || cleanUrl.includes('vimeo.com')) {
              // Normal embed for vimeo / youtube if added
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
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.borderColor = '#C9F31D'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                }}
              >
                {isDrive || isEmbed ? (
                  <iframe
                    ref={(el) => iframeRefs.current[index] = el}
                    src={embedUrl}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`AI Video ${index + 1}`}
                  />
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