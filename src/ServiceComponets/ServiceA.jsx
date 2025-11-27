import React from 'react';

function ServiceA() {
  // Define the primary brand color for easy changes
  const brandColor = 'orangered'; 
  const lightGrey = '#f7f7f7';

  return (
    <div 
      style={{
        // 1. Primary container with white background
        backgroundColor: 'white',
        padding: '80px 20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        overflow: 'hidden', // Ensures elements don't spill out
      }}
    >
      <div 
        style={{
          maxWidth: '1200px', 
          margin: '0 auto',
        }}
      >
        {/* === Big Heading === */}
        <h1 
          style={{
            fontSize: '3.5em',
            fontWeight: '900',
            color: '#333', // Dark text for contrast on white background
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Our Services
        </h1>

        {/* === Subtext === */}
        <p 
          style={{
            fontSize: '1.4em',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto 40px auto',
            lineHeight: '1.5',
          }}
        >
          Everything you need to **buy, sell, and grow** your business on Bazaro.
        </p>
        
        {/* === Call to Action Button === */}
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
            // Hover/Active styles would be added using CSS or state in a real application
            // Example: onMouseOver/onMouseOut handlers
          }}
          // Placeholder onClick
          onClick={() => console.log('View Services Clicked')}
        >
          Explore How Bazaro Works
        </button>

        {/* --- --- */}

        {/* === Visual Illustration/Icons Area === */}
        <div 
          style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
          }}
        >
          {/* Example Icon Card 1: Marketplace/Buy */}
          <div style={iconCardStyle(lightGrey, brandColor)}>
            <span style={iconSpanStyle(brandColor)}>🛒</span>
            <p style={iconTextStyle}>Buy & Discover</p>
          </div>

          {/* Example Icon Card 2: Delivery/Sell */}
          <div style={iconCardStyle(lightGrey, brandColor)}>
            <span style={iconSpanStyle(brandColor)}>📦</span>
            <p style={iconTextStyle}>Sell & Ship</p>
          </div>

          {/* Example Icon Card 3: Tech/Grow */}
          <div style={iconCardStyle(lightGrey, brandColor)}>
            <span style={iconSpanStyle(brandColor)}>📈</span>
            <p style={iconTextStyle}>Tools for Growth</p>
          </div>

        </div>

      </div>
    </div>
  );
}

// Helper styles for the icon section
const iconCardStyle = (bgColor, borderColor) => ({
  flexBasis: '200px', // Fixed width for each card
  padding: '20px',
  backgroundColor: bgColor,
  borderRadius: '10px',
  border: `2px solid ${borderColor}`,
  textAlign: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  // You might add an onHover effect here in a real application
});

const iconSpanStyle = (color) => ({
  fontSize: '3em',
  display: 'block',
  marginBottom: '10px',
  color: color,
});

const iconTextStyle = {
  fontWeight: 'bold',
  color: '#333',
  margin: 0,
};

export default ServiceA;