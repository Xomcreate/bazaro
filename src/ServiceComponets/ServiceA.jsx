import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Import this

function ServiceA() {
  const navigate = useNavigate(); // <-- Hook to programmatically navigate

  const brandColor = 'orangered'; 
  const lightGrey = '#f7f7f7';

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 20px', fontFamily: 'Arial, sans-serif', textAlign: 'center', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5em', fontWeight: '900', color: '#333', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Our Services
        </h1>
        <p style={{ fontSize: '1.4em', color: '#666', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: '1.5' }}>
          Everything you need to buy, sell, and grow your business on ErrandBox.
        </p>
        
        {/* === Updated Button === */}
        <button
          style={{
            backgroundColor: brandColor,
            color: 'white',
            padding: '12px 30px',
            fontSize: '1.1em',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.2s',
            boxShadow: '0 4px 15px rgba(255, 69, 0, 0.4)',
          }}
          onClick={() => navigate('/login')} // <-- Navigate to login page
        >
          Explore How ErrandBox Works
        </button>

        {/* === Illustration/Icons Section === */}
        <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={iconCardStyle(lightGrey, brandColor)}>
            <span style={iconSpanStyle(brandColor)}>🛒</span>
            <p style={iconTextStyle}>Buy & Discover</p>
          </div>
          <div style={iconCardStyle(lightGrey, brandColor)}>
            <span style={iconSpanStyle(brandColor)}>📦</span>
            <p style={iconTextStyle}>Sell & Ship</p>
          </div>
          <div style={iconCardStyle(lightGrey, brandColor)}>
            <span style={iconSpanStyle(brandColor)}>📈</span>
            <p style={iconTextStyle}>Tools for Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper styles
const iconCardStyle = (bgColor, borderColor) => ({
  flexBasis: '200px',
  padding: '20px',
  backgroundColor: bgColor,
  borderRadius: '10px',
  border: `2px solid ${borderColor}`,
  textAlign: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
});
const iconSpanStyle = (color) => ({ fontSize: '3em', display: 'block', marginBottom: '10px', color });
const iconTextStyle = { fontWeight: 'bold', color: '#333', margin: 0 };

export default ServiceA;
