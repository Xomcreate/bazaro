import React from "react";

// Subtle background pattern SVG (orangered diagonal lines)
const BackgroundPatternSVG = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      opacity: 0.05,
    }}
  >
    <defs>
      <pattern id="diagonalLinesWhite" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="orangered" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#diagonalLinesWhite)" />
  </svg>
);

// Vendor icon SVG (simple market/cart illustration)
const VendorIconSVG = () => (
  <svg
    width="180"
    height="180"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, margin: "0 20px" }}
  >
    {/* Cart outline */}
    <path
      d="M3 3H5L5.4 5M7 13H17L21 5H6.28M7 13L7.43 17.8C7.519 18.736 8.353 19.4 9.294 19.4H17.618C18.559 19.4 19.393 18.736 19.482 17.8L20.28 9M7 13L6.28 5"
      stroke="orangered"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Wheels */}
    <circle cx="10" cy="21" r="1.5" fill="black" stroke="orangered" strokeWidth="1.5" />
    <circle cx="19" cy="21" r="1.5" fill="black" stroke="orangered" strokeWidth="1.5" />

    {/* Money/Growth badge */}
    <circle cx="21" cy="5" r="3" fill="black" />
    <path d="M21 5L17 9" stroke="orangered" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

function SellA() {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "80px 40px",
          textAlign: "left",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid #eee",
        }}
      >
        <BackgroundPatternSVG />

        {/* Content wrapper */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: "1200px",
            width: "100%",
            zIndex: 1,
          }}
        >
          {/* Text area */}
          <div style={{ flex: 1, paddingRight: "40px" }}>
            {/* Headline */}
            <h1
              style={{
                fontSize: "3.5em",
                fontWeight: "900",
                marginBottom: "15px",
                lineHeight: "1.1",
              }}
            >
              Start Selling on <span style={{ color: "orangered" }}>ErrandBox</span> Today!
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: "1.25em",
                maxWidth: "500px",
                marginBottom: "35px",
                color: "black",
                lineHeight: "1.6",
                fontWeight: "300",
              }}
            >
              Reach thousands of buyers through our vibrant marketplace. Set up your
              shop, upload your products, and start earning in just a few minutes.
            </p>

            {/* CTA */}
            <button
              style={{
                backgroundColor: "orangered",
                color: "white",
                border: "2px solid orangered",
                padding: "16px 32px",
                fontSize: "1.1em",
                fontWeight: "bold",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "black";
                e.currentTarget.style.borderColor = "black";
                e.currentTarget.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "orangered";
                e.currentTarget.style.borderColor = "orangered";
                e.currentTarget.style.color = "white";
              }}
            >
              Register as a Seller →
            </button>
          </div>

          {/* Icon graphic */}
          <VendorIconSVG />
        </div>
      </div>
    </>
  );
}

export default SellA;
