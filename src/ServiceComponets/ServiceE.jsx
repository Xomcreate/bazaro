import React from 'react';

function ServiceE() {
  const brandColor = 'orangered';
  const darkText = '#333';
  const lightGrey = '#eee';

  // --- Button Styles ---
  const primaryButtonStyle = {
    backgroundColor: brandColor,
    color: 'white',
    padding: '12px 30px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    border: `2px solid ${brandColor}`,
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 4px 15px rgba(255, 69, 0, 0.4)',
    textDecoration: 'none', // Ensure it looks like a link if used as one
    display: 'inline-block',
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: brandColor,
    padding: '12px 30px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    border: `2px solid ${brandColor}`,
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '60px 20px', // Slightly less padding for a 'small' CTA
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px',
          backgroundColor: lightGrey, // Slight grey container to make the CTA pop
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* === Main Heading === */}
        <h2
          style={{
            fontSize: '2em',
            fontWeight: '800',
            color: darkText,
            marginBottom: '10px',
          }}
        >
          Ready to Start?
        </h2>

        {/* === Subtext === */}
        <p
          style={{
            fontSize: '1.1em',
            color: '#666',
            marginBottom: '40px',
          }}
        >
          Whether you're looking to launch a business or find your next great deal, ErrandBox is the place to be.
        </p>

        {/* === Dual Call to Action Buttons === */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* Primary CTA: Start Selling */}
          <a href="/sell" style={primaryButtonStyle}>
            Start Selling Today!
          </a>

          {/* Secondary CTA: Start Shopping */}
          <a href="/shop" style={secondaryButtonStyle}>
            Start Shopping Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceE;