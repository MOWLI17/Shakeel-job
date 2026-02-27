import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import l1 from '../../image/Logo/ideogram-v3.0_Create_a_premium_3D_metallic_logo_for_a_digital_marketing_agency_named_Elevate_D-0.jpg.jpeg'
import l2 from '../../image/Logo/ideogram-v3.0_Design_a_stylish_3D_logo_for_a_modern_cafe_brand_named_Urban_Roast_._Warm_bronze-0.jpg.jpeg'
import l3 from '../../image/Logo/lucid-origin_Design_a_futuristic_3D_logo_for_a_tech_startup_named_Nexora_Labs_._Sleek_modern_-0.jpg.jpeg'

const Logo = () => {
  const navigate = useNavigate()

  // ADD YOUR LOGO IMAGE LINKS HERE
  const logoImages = [l1, l2, l3]

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
          Logo Design
        </h1>

        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.65)',
          marginBottom: '60px',
          maxWidth: '600px'
        }}>
          Brand identity and professional logo designs that define your company's visual presence
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {logoImages.map((imageUrl, index) => (
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
                alt={`Logo ${index + 1}`}
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
                        Logo ${index + 1}
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


export default Logo