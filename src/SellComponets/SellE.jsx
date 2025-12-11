import React, { useState } from 'react';

// --- Reusable Button Style ---
const navButtonStyle = (side) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  [side]: side === 'left' ? '-50px' : '-50px', 
  backgroundColor: 'rgba(255, 69, 0, 0.9)', 
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '45px',
  height: '45px',
  fontSize: '1.5em',
  fontWeight: 'bold',
  cursor: 'pointer',
  zIndex: 10,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s',
});

// --- NEW SVG Pattern for Background (Subtle Diagonal Lines) ---
// This SVG creates light, diagonal lines for a more distinct texture.
const svgBackground = `
  url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4H0v2h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v4h2v-4h2v4h4zm-36 0v2h2V34H0zm60 0v2h-2V34h2zM36 0v2h2V0h-2zM0 0v2h2V0H0zm60 0v2h-2V0h2zM36 60v-2h2v2h-2zM0 60v-2h2v2H0zm60 60v-2h-2v2h2zM30 0v2h2V0h-2zm0 60v-2h2v2h-2zM0 30h2v2H0v-2zm60 0h-2v2h2v-2zM30 30h2v2h-2v-2zm0 0h2v2h-2v-2zM30 30h2v2h-2v-2z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
`;


function SellE() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalStories = 8;
  const numVisible = 3; 
  const cardsVisible = Math.min(totalStories, numVisible);

  const stories = [
    { id: 1, name: "Alex J.", location: "San Francisco, CA", quote: "Since moving to ErrandBox, my monthly revenue has skyrocketed. The dedicated tools make inventory effortless.", metric: "$12,000+ Monthly Sales", photoUrl: "https://placehold.co/100x100/333333/FFFFFF?text=A.J." },
    { id: 2, name: "Maria S.", location: "Austin, TX", quote: "The low commission structure meant I could finally increase my margins without raising prices for my buyers.", metric: "500+ Happy Customers", photoUrl: "https://placehold.co/100x100/666666/FFFFFF?text=M.S." },
    { id: 3, name: "David K.", location: "New York, NY", quote: "Easy product upload and excellent promotional tools. I scaled my small business faster than I expected!", metric: "4.9/5 Seller Rating", photoUrl: "https://placehold.co/100x100/999999/FFFFFF?text=D.K.",},
    { id: 4, name: "Chloe P.", location: "Miami, FL", quote: "Secure payments and reliable customer support—ErrandBox handles the logistics so I can focus purely on product creation.", metric: "100% On-Time Payouts", photoUrl: "https://placehold.co/100x100/AAAAAA/FFFFFF?text=C.P.",},
    { id: 5, name: "Ben L.", location: "Seattle, WA", quote: "The interface is incredibly intuitive. I spent less time managing and more time selling right from day one.", metric: "750+ Products Listed", photoUrl: "https://placehold.co/100x100/CCCCCC/FFFFFF?text=B.L.",},
    { id: 6, name: "Yasmine O.", location: "Denver, CO", quote: "I truly appreciate the marketing opportunities provided. My holiday sales doubled thanks to their platform features.", metric: "$8,500 Holiday Earnings", photoUrl: "https://placehold.co/100x100/EEEEEE/333333?text=Y.O.",},
    { id: 7, name: "Javier M.", location: "Chicago, IL", quote: "Finding a platform that prioritizes both seller experience and buyer security was key. ErrandBox delivers both.", metric: "Top 10% Seller Status", photoUrl: "https://placehold.co/100x100/111111/FFFFFF?text=J.M.",},
    { id: 8, name: "Rachel T.", location: "Boston, MA", quote: "From inventory to payments, everything is streamlined. This is the simplest way I've found to run my online shop.", metric: "98% Repeat Buyer Rate", photoUrl: "https://placehold.co/100x100/222222/FFFFFF?text=R.T.",},
  ];

  const nextSlide = () => {
    if (currentIndex < totalStories - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  return (
    <div
      style={{
        backgroundColor: '#ffffff', 
        backgroundImage: svgBackground, // Using the new SVG pattern
        backgroundSize: 'auto', // Adjust as needed, 'cover' or specific px
        padding: '80px 20px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Section Header */}
      <h2 style={{ fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', color: '#333' }}>
        Success Stories 🚀
      </h2>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px auto', color: '#666' }}>
        Don't just take our word for it. Hear directly from our successful vendors.
      </p>

      {/* Carousel Container */}
      <div
        style={{
          maxWidth: '1200px', 
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
        }}
      >
        {/* Slides Track */}
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * (100 / totalStories)}%)`, 
            width: `${(totalStories / cardsVisible) * 100}%`,
          }}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              style={{
                flexShrink: 0,
                width: `${100 / totalStories}%`, 
                padding: '0 15px',
                boxSizing: 'border-box',
              }}
            >
              {/* Testimonial Card */}
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '40px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  minHeight: '350px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', 
                  border: '1px solid #eee', 
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Large Orangered Quote Mark */}
                <div style={{ color: 'orangered', opacity: 0.1, fontSize: '5em', position: 'absolute', top: '5px', left: '15px', lineHeight: 1 }}>
                  “
                </div>

                {/* Content Wrapper */}
                <div>
                  {/* Quote */}
                  <p style={{ fontSize: '1.1em', fontStyle: 'italic', color: '#333', marginBottom: '30px', margin: '0 auto 20px auto', position: 'relative', zIndex: 1 }}>
                    {story.quote}
                  </p>
                </div>
                
                {/* Bottom Section */}
                <div>
                    {/* Success Metric Banner */}
                    <div
                        style={{
                            backgroundColor: '#ff4500', 
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            display: 'inline-block',
                            marginBottom: '15px',
                            fontSize: '0.9em',
                            textTransform: 'uppercase',
                        }}
                    >
                        {story.metric}
                    </div>

                    {/* Seller Info */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                        <img
                            src={story.photoUrl}
                            alt={`${story.name} profile`}
                            style={{
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                marginRight: '15px',
                                border: '3px solid orangered',
                            }}
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/45x45/333333/FFFFFF?text=P" }}
                        />
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ fontWeight: 'bold', color: '#333', margin: 0 }}>{story.name}</p>
                            <p style={{ fontSize: '0.8em', color: '#666', margin: 0 }}>{story.location}</p>
                        </div>
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          style={{ ...navButtonStyle('left'), visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          style={{ ...navButtonStyle('right'), visibility: currentIndex >= totalStories - cardsVisible ? 'hidden' : 'visible' }}
        >
          &gt;
        </button>

      </div>
      
      {/* Dots Indicator */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        {stories.slice(0, totalStories - cardsVisible + 1).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              height: '10px',
              width: '10px',
              margin: '0 5px',
              backgroundColor: index === currentIndex ? 'orangered' : '#ccc', 
              borderRadius: '50%',
              display: 'inline-block',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SellE;