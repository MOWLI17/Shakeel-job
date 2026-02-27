import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import pd1 from '../../image/Printdesing/128.jpg'
import pd2 from '../../image/Printdesing/551.jpg'
import pd3 from '../../image/Printdesing/874537_O7DD7Z1.jpg'
import pd4 from '../../image/Printdesing/fees.jpg'

const PrintDesing = () => {
  const navigate = useNavigate()

  // ADD YOUR PRINT DESIGN IMAGE LINKS HERE
  const printImages = [pd1, pd2, pd3, pd4]

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
          Print Design
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.65)',
          marginBottom: '60px',
          maxWidth: '600px'
        }}>
          Professional print materials designed to make a lasting impression on your audience
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {printImages.map((imageUrl, index) => (
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
                alt={`Print Design ${index + 1}`}
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
                          Print ${index + 1}
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


export default PrintDesing