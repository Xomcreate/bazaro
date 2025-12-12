import React, { useState, useEffect } from 'react';

// Reusable SVG Icon Wrapper
const BenefitIcon = ({ children }) => (
  <div
    style={{
      color: 'orangered',
      marginBottom: '15px',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </div>
);

const BuyersIcon = () => (
  <BenefitIcon>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </BenefitIcon>
);
const LowFeesIcon = () => (
  <BenefitIcon>
    <path d="M20.5 13.5l-2.6 2.6c-.7.7-1.7.7-2.4 0L12 14V4c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v10.5z"></path>
    <line x1="12" y1="20" x2="16" y2="20"></line>
    <line x1="12" y1="23" x2="16" y2="23"></line>
    <circle cx="7" cy="7" r="2"></circle>
  </BenefitIcon>
);
const PaymentsIcon = () => (
  <BenefitIcon>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </BenefitIcon>
);
const MarketingIcon = () => (
  <BenefitIcon>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </BenefitIcon>
);
const InventoryIcon = () => (
  <BenefitIcon>
    <path d="M12.67 19.33L5 12 12.67 4.67 20.33 12z"></path>
    <path d="M17.33 15L12 9.67 6.67 15"></path>
  </BenefitIcon>
);

function SellC() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const benefits = [
    { title: "Access Thousands of Buyers", description: "Instantly expose your products to our large, active user base.", Icon: BuyersIcon },
    { title: "Low Commission Fees", description: "Keep more of your revenue with our highly competitive and transparent fee structure.", Icon: LowFeesIcon },
    { title: "Secure Payment Processing", description: "All transactions are handled securely, ensuring reliable and protected payouts.", Icon: PaymentsIcon },
    { title: "Marketing & Promotion Opportunities", description: "Benefit from marketplace campaigns and tools to boost your visibility.", Icon: MarketingIcon },
    { title: "Easy Inventory Management", description: "Intuitive dashboards let you track stock, update listings, and manage bulk inventory efficiently.", Icon: InventoryIcon },
    { title: "Dedicated Seller Support", description: "Get fast, helpful assistance from our team whenever you need it.", Icon: MarketingIcon },
  ];

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '80px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', color: 'black' }}>
        Why <span style={{ color: 'orangered' }}>Sell</span> on ErrandBox?
      </h2>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto', color: '#555' }}>
        We provide the tools and audience you need to grow your business online.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {benefits.map((benefit, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
              border: '1px solid #eee',
              textAlign: isMobile ? 'center' : 'left', // CENTER text on mobile
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.08)';
            }}
          >
            <benefit.Icon />
            <h3 style={{ fontSize: '1.25em', fontWeight: 'bold', color: 'black', marginBottom: '8px' }}>
              {benefit.title}
            </h3>
            <p style={{ fontSize: '1em', color: '#666', lineHeight: '1.5' }}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellC;
