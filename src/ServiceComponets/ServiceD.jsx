import React from 'react';

function ServiceD() {
  const brandColor = 'orangered';
  const darkText = '#333';
  const lightGrey = '#eee';

  const steps = [
    { title: 'Sign Up', details: 'Create an account as a buyer or seller to start your journey.', icon: '✍️' },
    { title: 'List or Shop', details: 'Sellers list their inventory; buyers browse and search for products.', icon: '🔎' },
    { title: 'Secure Checkout', details: 'Payments are processed securely, protected by our escrow system.', icon: '💳' },
    { title: 'Delivery or Pickup', details: 'Products are shipped nationwide or arranged for local pickup.', icon: '📍' },
    { title: 'Rate & Review', details: 'Provide feedback to sellers and help build a trustworthy community.', icon: '⭐' },
  ];

  const stepContainerStyle = {
    flex: '1 1 180px', // Allow shrinking/growing for responsiveness
    minWidth: '220px',
    textAlign: 'center',
    position: 'relative',
    padding: '20px 10px',
    marginBottom: '40px', // Space for wrapping on mobile
  };

  const numberCircleStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: brandColor,
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: '0 auto 15px auto',
    boxShadow: '0 4px 10px rgba(255, 69, 0, 0.3)',
    zIndex: 2,
    position: 'relative',
  };

  const titleStyle = {
    fontSize: '1.1em',
    fontWeight: 'bold',
    color: darkText,
    marginBottom: '10px',
  };

  const detailsStyle = {
    fontSize: '0.9em',
    color: '#666',
  };

  const connectorLineStyle = (isLastStep = false) => ({
    position: 'absolute',
    top: '25px',
    left: '50%',
    height: '2px',
    width: isLastStep ? '0' : '100%', // Hide line for last step
    backgroundColor: lightGrey,
    zIndex: 1,
    transform: 'translateX(0%)',
  });

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <h2 style={{ fontSize: '2.2em', fontWeight: '800', color: darkText, textAlign: 'center', marginBottom: '15px' }}>
          Simple Steps to Buy or Sell
        </h2>
        <p style={{ fontSize: '1.1em', color: '#777', textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          Getting started on ErrandBox is quick, easy, and secure for everyone.
        </p>

        {/* Steps Container */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {steps.map((step, index) => (
            <div key={index} style={stepContainerStyle}>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div style={connectorLineStyle(false)} className="connector-line"></div>
              )}

              {/* Step Number */}
              <div style={numberCircleStyle}>{index + 1}</div>

              {/* Step Icon */}
              <div style={{ fontSize: '2em', marginBottom: '10px' }}>{step.icon}</div>

              {/* Step Title & Details */}
              <h3 style={titleStyle}>{step.title}</h3>
              <p style={detailsStyle}>{step.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Adjustment */}
      <style>
        {`
          @media (max-width: 768px) {
            .connector-line {
              display: none; /* Hide horizontal lines on mobile */
            }
          }
        `}
      </style>
    </div>
  );
}

export default ServiceD;
