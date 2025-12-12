import React, { useState, useEffect } from 'react';

// Reusable SVG Icon Wrapper
const FeatureIcon = ({ children }) => (
  <div
    style={{
      color: 'orangered',
      marginBottom: '10px',
      border: '2px solid orangered',
      borderRadius: '8px',
      padding: '8px',
      display: 'inline-flex',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
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

// Icon components
const ImageIcon = () => (<FeatureIcon><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></FeatureIcon>);
const StockIcon = () => (<FeatureIcon><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></FeatureIcon>);
const EditorIcon = () => (<FeatureIcon><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></FeatureIcon>);
const ShippingIcon = () => (<FeatureIcon><path d="M10.5 4h8.5v6H10.5z"></path><path d="M2.5 18h18v4H2.5z"></path><path d="M7 10v8"></path><path d="M16 10v8"></path><circle cx="7" cy="18" r="2"></circle><circle cx="16" cy="18" r="2"></circle></FeatureIcon>);
const DiscountIcon = () => (<FeatureIcon><path d="M20.5 12l-5.7 5.7L12 14l-5.7 5.7L3 12V3h9z"></path><line x1="7" y1="7" x2="7" y2="7"></line></FeatureIcon>);

function SellD() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    { title: "Upload Multiple Images", description: "Showcase your products perfectly with high-resolution, multi-angle picture uploads.", Icon: ImageIcon },
    { title: "Manage Pricing & Stock", description: "Instantly set price, track inventory levels, and assign product categories.", Icon: StockIcon },
    { title: "Product Description Editor", description: "Use our rich text editor to craft compelling, SEO-friendly product details.", Icon: EditorIcon },
    { title: "Flexible Shipping Options", description: "Define your own shipping rates, zones, and delivery timeframes easily.", Icon: ShippingIcon },
    { title: "Discounts and Promotions", description: "Create limited-time sales, coupon codes, and special offers to drive urgency.", Icon: DiscountIcon },
    { title: "Performance Analytics", description: "Track sales data, conversion rates, and visitor insights directly from your dashboard.", Icon: StockIcon },
  ];

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', color: 'black' }}>
        Powerful <span style={{ color: 'orangered' }}>Listing Tools</span> Included
      </h2>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto', color: '#555' }}>
        Everything you need to create attractive listings and manage your shop efficiently.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          justifyItems: isMobile ? 'center' : 'stretch', // CENTER content on mobile
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              border: '1px solid #ffefe8',
              textAlign: isMobile ? 'center' : 'left', // CENTER text on mobile
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => {
              if (!isMobile) e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <feature.Icon />
            <h3 style={{ fontSize: '1.25em', fontWeight: 'bold', color: 'black', marginBottom: '8px' }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: '1em', color: '#666', lineHeight: '1.5' }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellD;
