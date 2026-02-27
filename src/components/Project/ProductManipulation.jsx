import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import img1 from '../../image/product manupulation/Gemini_Generated_Image_gvczcogvczcogvcz.png'
import img2 from '../../image/product manupulation/Lucid_Origin_Create_a_highimpact_product_manipulation_featurin_3.jpg.jpeg'
import img3 from '../../image/product manupulation/Lucid_Origin_Create_a_powerful_product_manipulation_featuring__0.jpg.jpeg'
import img4 from '../../image/product manupulation/Lucid_Origin_Create_a_vibrant_product_manipulation_featuring_a_0.jpg.jpeg'
import img5 from '../../image/product manupulation/ideogram-v3.0_Create_a_dynamic_product_manipulation_featuring_a_Nike_sneaker_floating_mid-air.-0.jpg.jpeg'
import img6 from '../../image/product manupulation/lucid-origin_Create_a_dramatic_product_manipulation_advertisement_for_a_Coca-Cola_bottle._Fro-0.jpg.jpeg'

const ProductManipulation = () => {
    const navigate = useNavigate()

    // ADD YOUR IMAGE OR VIDEO LINKS HERE
    // For images: Just paste the image URL
    const projectImages = [img1, img2, img3, img4, img5, img6]

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
                    Product Manipulation
                </h1>

                <p style={{
                    fontSize: '18px',
                    color: 'rgba(255, 255, 255, 0.65)',
                    marginBottom: '60px',
                    maxWidth: '600px'
                }}>
                    Creative product manipulation, photo retouching, and stunning composite imagery
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                    marginBottom: '80px'
                }}>
                    {projectImages.map((imageUrl, index) => (
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
                                alt={`Product Manipulation ${index + 1}`}
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
                        Product Manipulation ${index + 1}
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

export default ProductManipulation
