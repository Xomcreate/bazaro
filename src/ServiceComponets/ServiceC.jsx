import React from 'react';

function ServiceC() {
  const brandColor = 'orangered';
  const darkText = '#333';
  const lightGrey = '#f7f7f7';

  const differentiators = [
    {
      metric: '40%+',
      title: 'Faster Sales',
      description: 'Over 40% of new vendors make their first sale within 72 hours thanks to our active buyer base.',
      icon: '⚡',
    },
    {
      metric: 'Low Fees',
      title: 'Lower Commission',
      description: 'Reduce vendor costs with one of the market\'s lowest commission rates, maximizing your profit margin.',
      icon: '💸',
    },
    {
      metric: '10K+',
      title: 'Trusted by Thousands',
      description: 'Join a thriving community of over 10,000 successful vendors and trusted brands.',
      icon: '🤝',
    },
    {
      metric: 'Free',
      title: 'Tools for Small Businesses',
      description: 'Access powerful free tools for inventory management, product tracking, and effective marketing.',
      icon: '🛠️',
    },
  ];

  const featureCardStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    border: `1px solid ${lightGrey}`,
    textAlign: 'center',
    flex: '1 1 250px', // Allows cards to shrink/grow and wrap
    minWidth: '250px', // Minimum width for responsiveness
    transition: 'border-color 0.3s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const metricStyle = {
    fontSize: '2.2em',
    fontWeight: '900',
    color: brandColor,
    marginBottom: '5px',
    lineHeight: 1,
  };

  const titleStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: darkText,
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '0.95em',
    color: '#666',
  };

  const iconStyle = {
    fontSize: '2em',
    marginBottom: '15px',
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '80px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <h2 style={{ fontSize: '2.2em', fontWeight: '800', color: darkText, textAlign: 'center', marginBottom: '15px' }}>
          Your Partner for Online Success
        </h2>
        <p style={{ fontSize: '1.1em', color: '#777', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          We’ve built ErrandBox to solve the toughest challenges for vendors in the marketplace.
        </p>

        {/* Feature Cards Container */}
        <div
          style={{
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap',
            justifyContent: 'center', // Center aligns cards on smaller screens
          }}
        >
          {differentiators.map((feature, index) => (
            <div key={index} style={featureCardStyle}>
              <span style={iconStyle}>{feature.icon}</span>
              <div style={metricStyle}>{feature.metric}</div>
              <h3 style={titleStyle}>{feature.title}</h3>
              <p style={descriptionStyle}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceC;
