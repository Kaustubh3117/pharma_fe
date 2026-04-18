import React from 'react';

export const Footer = () => {
    const footerSections = [
        {
            title: "Products",
            items: [
                "Prescription Medicines",
                "Over-the-Counter Drugs",
                "Health Supplements",
                "Personal Care Products",
                "Baby & Mother Care"
            ]
        },
        {
            title: "Services",
            items: [
                "Online Consultation",
                "Home Delivery",
                "Health Check-ups",
                "Medicine Reminders",
                "Emergency Support"
            ]
        },
        {
            title: "Support",
            items: [
                "Contact Us",
                "FAQ",
                "Track Your Order",
                "Return Policy",
                "Customer Care"
            ]
        },
        {
            title: "About Us",
            items: [
                "Our Story",
                "Quality Assurance",
                "Privacy Policy",
                "Terms of Service",
                "Careers"
            ]
        }
    ];

    return (
        <footer style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            padding: '40px 20px 20px',
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px'
            }}>
                {footerSections.map((section, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h3 style={{
                            color: '#4CAF50',
                            marginBottom: '15px',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            borderBottom: '2px solid #4CAF50',
                            paddingBottom: '8px'
                        }}>
                            {section.title}
                        </h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} style={{
                                    marginBottom: '8px',
                                    padding: '4px 0',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#ccc',
                                            textDecoration: 'none',
                                            fontSize: '0.95rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            padding: 0,
                                            fontFamily: 'inherit',
                                            transition: 'color 0.3s ease',
                                            width: '100%',
                                            textAlign: 'left'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = '#4CAF50'}
                                        onMouseLeave={(e) => e.target.style.color = '#ccc'}
                                        onClick={() => console.log(`Clicked: ${item}`)}
                                    >
                                        <span style={{
                                            display: 'inline-block',
                                            width: '6px',
                                            height: '6px',
                                            backgroundColor: '#4CAF50',
                                            borderRadius: '50%',
                                            marginRight: '10px',
                                            flexShrink: 0
                                        }}></span>
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                marginTop: '30px',
                paddingTop: '20px',
                textAlign: 'center'
            }}>
                <p style={{
                    margin: 0,
                    color: '#888',
                    fontSize: '0.9rem'
                }}>
                    © 2026 PharmaCare. All rights reserved. |
                    <span style={{ margin: '0 10px' }}>Privacy Policy</span> |
                    <span style={{ margin: '0 10px' }}>Terms of Service</span> |
                    <span style={{ margin: '0 10px' }}>Contact Us</span>
                </p>
                <div style={{
                    marginTop: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px'
                }}>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#4CAF50',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            padding: '5px'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#66BB6A'}
                        onMouseLeave={(e) => e.target.style.color = '#4CAF50'}
                        onClick={() => console.log('Facebook clicked')}
                        aria-label="Facebook"
                    >
                        📘
                    </button>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#4CAF50',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            padding: '5px'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#66BB6A'}
                        onMouseLeave={(e) => e.target.style.color = '#4CAF50'}
                        onClick={() => console.log('Instagram clicked')}
                        aria-label="Instagram"
                    >
                        📷
                    </button>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#4CAF50',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            padding: '5px'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#4CAF50'}
                        onMouseLeave={(e) => e.target.style.color = '#4CAF50'}
                        onClick={() => console.log('Twitter clicked')}
                        aria-label="Twitter"
                    >
                        🐦
                    </button>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#4CAF50',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            padding: '5px'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#66BB6A'}
                        onMouseLeave={(e) => e.target.style.color = '#4CAF50'}
                        onClick={() => console.log('LinkedIn clicked')}
                        aria-label="LinkedIn"
                    >
                        💼
                    </button>
                </div>
            </div>
        </footer>
    );
};