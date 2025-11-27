import React from 'react';

function ServiceB() {
  const brandColor = 'orangered';
  const darkText = '#333';
  const lightGrey = '#f7f7f7';

  // Array of services with icons (emojis for simplicity)
  const services = [
    { icon: '🛍️', title: 'Product Listings', description: 'Showcase your products to thousands of eager buyers instantly.' },
    { icon: '🏪', title: 'Shop Creation', description: 'Vendors receive a dedicated, customizable online store page.' },
    { icon: '💬', title: 'Direct Chat with Sellers', description: 'Direct messaging system for seamless communication and negotiation.' },
    { icon: '🔒', title: 'Safe & Secure Payments', description: 'Payment protection ensures funds are held until delivery confirmation.' },
    { icon: '✅', title: 'Verified Sellers', description: 'Trust badges and identity verification build buyer confidence.' },
    { icon: '🚚', title: 'Fast Nationwide Delivery', description: 'Integrated logistics for quick and reliable delivery across the country.' },
    { icon: '🚀', title: 'Promotional Tools', description: 'Boosted posts, sponsored ads, and featured listings to increase visibility.' },
    { icon: '📊', title: 'Product Analytics', description: 'Dashboard access to views, clicks, and conversion performance stats.' },
    { icon: '⚖️', title: 'Dispute Resolution', description: 'Fair and efficient conflict management between buyers and sellers.' },
    { icon: '❤️', title: 'Wishlist & Saved Items', description: 'Users can easily save and organize their favorite products for later purchase.' },
    { icon: '🛡️', title: 'Buyer Protection Policy', description: 'Comprehensive guarantee ensuring safe and risk-free transactions.' },
    { icon: '📞', title: 'Vendor Support Team', description: 'Access to 24/7 dedicated customer care for all vendor needs.' },
  ];

  // Inline styles for the grid items
  const serviceCardStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    borderTop: `4px solid ${brandColor}`, // Highlighted top border
    textAlign: 'left',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const iconStyle = {
    fontSize: '2.5em',
    marginBottom: '15px',
    color: brandColor, // Use brand color for icons
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
    flexGrow: 1, // Ensures description pushes the card to full height
  };

  return (
    <div
      style={{
        backgroundColor: lightGrey, // Slight off-white background to differentiate from Hero
        padding: '80px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div 
        style={{
          maxWidth: '1200px', 
          margin: '0 auto',
        }}
      >
        {/* === Section Header === */}
        <h2 
          style={{
            fontSize: '2.2em',
            fontWeight: '800',
            color: darkText,
            textAlign: 'center',
            marginBottom: '15px',
          }}
        >
          A Complete Marketplace Platform
        </h2>
        <p 
          style={{
            fontSize: '1.1em',
            color: '#777',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 60px auto',
          }}
        >
          From listing to delivery, we provide the tools to run your business with confidence.
        </p>

        {/* === Services Grid Container (CSS Grid Emulation) === */}
        <div
          style={{
            display: 'grid',
            // Responsive Grid: 4 columns for desktop, 2 for tablet, 1 for mobile (simple grid approach)
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}
        >
          {services.map((service, index) => (
            <div key={index} style={serviceCardStyle}>
              <span style={iconStyle}>{service.icon}</span>
              <h3 style={titleStyle}>{service.title}</h3>
              <p style={descriptionStyle}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceB;