import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'


import p1 from '../../image/Posters/1.jpg'
import p2 from '../../image/Posters/2.jpg'
import p3 from '../../image/Posters/3.jpg'
import p4 from '../../image/Posters/4.jpg'
import p5 from '../../image/Posters/5.jpg'
import p6 from '../../image/Posters/6.jpg'
import p7 from '../../image/Posters/7.png'
import p8 from '../../image/Posters/8.jpg'
import p9 from '../../image/Posters/9.png'
import p10 from '../../image/Posters/10.png'
import p11 from '../../image/Posters/11.jpg'
import p12 from '../../image/Posters/12.jpg'
import p13 from '../../image/Posters/13.png'
import p14 from '../../image/Posters/14.jpg'
import p15 from '../../image/Posters/15.jpg'
import p16 from '../../image/Posters/16.jpg'
import p17 from '../../image/Posters/17.jpg'
import p18 from '../../image/Posters/18.jpg'
import p19 from '../../image/Posters/19.png'
import p20 from '../../image/Posters/20.png'


const SocialMedia = () => {
  const navigate = useNavigate()

  // Array of poster images mapped from local src
  const posters = [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
    p11, p12, p13, p14, p15, p16, p17, p18, p19, p20
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
          Social Media Posters
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.65)',
          marginBottom: '60px',
          maxWidth: '600px'
        }}>
          Eye-catching social media content designed to engage and convert your audience
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {posters.map((imageUrl, index) => (
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
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.borderColor = '#C9F31D'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <img
                src={imageUrl}
                alt={`Social Media Poster ${index + 1}`}
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
                      <p style="color: #C9F31D; fontSize: 18px; fontWeight: 600; text-align: center; padding: 0 10px;">
                        Social Media Poster ${index + 1}
                      </p>
                    </div>
                  `
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SocialMedia