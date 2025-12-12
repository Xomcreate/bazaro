import React, { useState, useEffect } from 'react';

// Reusable SVG Icons
const StepIcon = ({ children, color, backgroundColor }) => (
  <div
    style={{
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '15px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </div>
);

const AccountIcon = (props) => (
  <StepIcon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
  </StepIcon>
);

const UploadIcon = (props) => (
  <StepIcon {...props}>
    <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.8-3.1-4.8-5.9-4.8-.7 0-1.4.1-2 .4-2.4-2.1-5.7-2.9-8.7-2-2.3.7-4 2.4-4.6 4.6"></path>
    <path d="M12 17v-8"></path>
    <path d="M8 13l4 4 4-4"></path>
  </StepIcon>
);

const OrderIcon = (props) => (
  <StepIcon {...props}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <path d="M15 2H9a1 1 0 0 0-1 1v1h8V3a1 1 0 0 0-1-1z"></path>
    <path d="M12 9h4"></path>
    <path d="M12 13h4"></path>
    <path d="M12 17h4"></path>
  </StepIcon>
);

const PaymentIcon = (props) => (
  <StepIcon {...props}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
    <path d="M12 14v4"></path>
    <path d="M14 16h-4"></path>
  </StepIcon>
);

function SellB() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stepData = [
    { title: "Create a Seller Account", description: "Sign up quickly and set up your vendor profile on ErrandBox.", Icon: AccountIcon },
    { title: "Upload Your Products", description: "List your inventory with professional photos and detailed descriptions.", Icon: UploadIcon },
    { title: "Manage Orders & Inventory", description: "Track new orders, update stock levels, and coordinate shipping.", Icon: OrderIcon },
    { title: "Receive Secure Payments", description: "Get paid reliably and securely through our protected payment gateway.", Icon: PaymentIcon },
  ];

  const arrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ margin: '0 15px', opacity: 0.3 }}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', color: 'black' }}>
        How <span style={{ color: 'orangered' }}>Selling</span> Works
      </h2>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto', color: '#555' }}>
        Follow these four simple steps to launch your successful shop on our marketplace.
      </p>

      {/* Steps Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: isMobile ? '30px' : '10px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {stepData.map((step, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                flex: 1,
                padding: '25px',
                borderRadius: '12px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
                borderTop: '5px solid orangered',
                minHeight: '220px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
              }}
            >
              <step.Icon color="orangered" backgroundColor="#ffede8" />
              <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', color: 'orangered', marginBottom: '8px' }}>
                Step {index + 1}
              </h3>
              <h4 style={{ fontSize: '1.1em', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>
                {step.title}
              </h4>
              <p style={{ fontSize: '0.9em', color: '#666' }}>
                {step.description}
              </p>
            </div>

            {/* Separator Arrow */}
            {!isMobile && index < stepData.length - 1 && (
              <div style={{ alignSelf: 'center', paddingTop: '40px' }}>
                {arrowSVG}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SellB;
