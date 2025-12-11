import React, { useEffect } from 'react';

// --- Reusable CSS Keyframes ---
const MotionStyles = () => (
  <style>
    {`
      @keyframes pulse-subtle {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.02); opacity: 0.98; }
      }
      @keyframes float-gentle {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-3px) rotate(0.5deg); }
      }
      @keyframes sway {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        50% { transform: translateX(5px) rotate(1deg); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes flash-light {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
    `}
  </style>
);

// --- SVG Components ---
// 1. DiscountShape
const DiscountShape = ({ color1, color2, percentage, text }) => (
  <svg className="absolute inset-0 w-full h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="0" width="100" height="100" fill="none"/>
    <path 
      d="M10 0 L90 0 C95 0 100 5 100 10 L100 90 C100 95 95 100 L10 100 C5 100 0 95 0 90 L0 10 Z" 
      fill={color1} 
      style={{ animation: 'pulse-subtle 3s infinite ease-in-out' }} 
    />
    <text x="50" y="45" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill={color2} textAnchor="middle" alignmentBaseline="middle">{percentage}</text>
    <text x="50" y="70" fontFamily="Arial, sans-serif" fontSize="12" fill={color2} textAnchor="middle" alignmentBaseline="middle">{text}</text>
  </svg>
);

// 2. StarBurst
const StarBurst = ({ color1, color2 }) => (
  <svg className="absolute inset-0 w-full h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <rect x="0" y="0" width="100" height="100" fill="none"/>
    <circle cx="50" cy="50" r="40" fill={color1} opacity="0.8" style={{ animation: 'pulse-subtle 4s infinite ease-in-out' }}/>
    <g style={{ transformOrigin: '50% 50%', animation: 'spin-slow 15s linear infinite' }}>
      {[...Array(12)].map((_, i) => (
        <line 
          key={i}
          x1="50" y1="50" 
          x2={50 + Math.cos(i * Math.PI / 6) * 45} 
          y2={50 + Math.sin(i * Math.PI / 6) * 45} 
          stroke={color2} 
          strokeWidth="2" 
          opacity="0.7"
        />
      ))}
    </g>
    <circle cx="50" cy="50" r="20" fill={color2} opacity="0.9" style={{ animation: 'pulse-subtle 2s infinite ease-in-out reverse' }}/>
  </svg>
);

// 3. PriceTag
const PriceTag = ({ color1, color2, percentage }) => (
  <svg className="absolute right-0 top-0 w-3/5 h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <path d="M100 0 L20 0 L0 50 L20 100 L100 100 Z" fill={color1} style={{ transformOrigin: '20% 50%', animation: 'sway 4s infinite ease-in-out' }}/>
    <circle cx="25" cy="50" r="8" fill={color2} style={{ animation: 'float-gentle 3s infinite ease-in-out' }}/>
    <text x="60" y="55" fontFamily="Arial, sans-serif" fontSize="25" fontWeight="bold" fill={color2} textAnchor="middle" alignmentBaseline="middle">{percentage}</text>
  </svg>
);

// 4. DeliveryTruck
const DeliveryTruck = ({ color }) => (
  <svg className="absolute right-4 bottom-4 w-2/5 h-2/5 md:w-1/3 md:h-1/3 p-2" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <g style={{ animation: 'float-gentle 4s infinite ease-in-out' }}>
      <rect x="10" y="40" width="70" height="30" rx="5" ry="5" fill={color} />
      <rect x="60" y="25" width="20" height="15" rx="3" ry="3" fill={color} />
      <circle cx="25" cy="75" r="8" fill="currentColor" className="text-gray-900" />
      <circle cx="65" cy="75" r="8" fill="currentColor" className="text-gray-900" />
      <path d="M80 40 L90 45 L90 70 L80 70 Z" fill={color} />
    </g>
  </svg>
);

// 5. InterlockingCircles
const InterlockingCircles = ({ color1, color2, text1, text2 }) => (
  <svg className="absolute inset-0 w-full h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <circle cx="35" cy="50" r="30" fill={color1} opacity="0.8" style={{ animation: 'pulse-subtle 3s infinite ease-in-out' }}/>
    <circle cx="65" cy="50" r="30" fill={color2} opacity="0.8" style={{ animation: 'pulse-subtle 3s infinite ease-in-out reverse' }}/>
    <text x="35" y="50" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" alignmentBaseline="middle">{text1}</text>
    <text x="65" y="50" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle" alignmentBaseline="middle">{text2}</text>
  </svg>
);

// 6. AbstractFlow
const AbstractFlow = ({ color }) => (
  <svg className="absolute inset-0 w-full h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <path d="M20 50 C30 30 70 30 80 50 C70 70 30 70 20 50 Z" fill={color} opacity="0.6" style={{ animation: 'sway 5s infinite ease-in-out reverse' }}/>
    <circle cx="50" cy="50" r="15" fill={color} style={{ animation: 'pulse-subtle 2s infinite ease-in-out' }}/>
    <path d="M50 30 L50 70 L65 50 Z" fill="white" />
  </svg>
);

// 7. DynamicPercent
const DynamicPercent = ({ color1, color2, percentage }) => (
  <svg className="absolute inset-0 w-full h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <circle cx="30" cy="30" r="15" fill={color1} style={{ animation: 'float-gentle 4s infinite ease-in-out' }}/>
    <circle cx="70" cy="70" r="15" fill={color1} style={{ animation: 'float-gentle 4s infinite ease-in-out reverse' }}/>
    <line x1="20" y1="80" x2="80" y2="20" stroke={color2} strokeWidth="5" />
    <text x="50" y="50" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill={color2} textAnchor="middle" alignmentBaseline="middle">%{percentage}</text>
  </svg>
);

// 8. GameController
const GameController = ({ color }) => (
  <svg className="absolute right-4 bottom-4 w-2/5 h-2/5 md:w-1/3 md:h-1/3 p-2" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <g style={{ animation: 'float-gentle 5s infinite ease-in-out' }}>
      <rect x="10" y="30" width="80" height="40" rx="15" ry="15" fill={color} />
      <circle cx="30" cy="50" r="8" fill="rgba(0,0,0,0.3)" style={{ animation: 'pulse-subtle 1.5s infinite ease-in-out' }}/>
      <circle cx="45" cy="50" r="8" fill="rgba(0,0,0,0.3)" />
      <circle cx="55" cy="50" r="8" fill="rgba(0,0,0,0.3)" />
      <circle cx="70" cy="50" r="8" fill="rgba(0,0,0,0.3)" style={{ animation: 'pulse-subtle 2s infinite ease-in-out reverse' }}/>
      <rect x="20" y="45" width="5" height="10" fill="white" />
      <rect x="22.5" y="42.5" width="5" height="10" transform="rotate(90 25 47.5)" fill="white" />
    </g>
  </svg>
);

// 9. LightningBolt
const LightningBolt = ({ color }) => (
  <svg className="absolute inset-0 w-full h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <path 
      d="M50 0 L25 50 L45 50 L40 100 L75 50 L55 50 Z" 
      fill={color} 
      style={{ animation: 'flash-light 0.8s infinite step-end' }} 
    />
  </svg>
);

// 10. NewArrivalsIcon
const NewArrivalsIcon = ({ color }) => (
  <svg className="absolute right-4 bottom-4 w-2/5 h-2/5 md:w-1/3 md:h-1/3 p-2" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <rect x="10" y="30" width="60" height="40" rx="5" ry="5" fill={color} opacity="0.8" style={{ animation: 'float-gentle 4s infinite ease-in-out reverse' }}/>
    <path d="M70 40 L90 50 L70 60 Z" fill={color} style={{ animation: 'pulse-subtle 2s infinite ease-in-out' }}/>
    <line x1="40" y1="50" x2="85" y2="50" stroke={color} strokeWidth="5" />
  </svg>
);

// 11. SunIcon
const SunIcon = ({ color }) => (
  <svg className="absolute inset-0 w-full h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <circle cx="50" cy="50" r="30" fill={color} style={{ animation: 'pulse-subtle 3.5s infinite ease-in-out' }}/>
    <g style={{ transformOrigin: '50% 50%', animation: 'spin-slow 20s linear infinite' }}>
      {[...Array(8)].map((_, i) => (
        <line 
          key={i}
          x1="50" y1="50" 
          x2={50 + Math.cos(i * Math.PI / 4) * 45} 
          y2={50 + Math.sin(i * Math.PI / 4) * 45} 
          stroke={color} 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      ))}
    </g>
  </svg>
);

// 12. WarningTriangle
const WarningTriangle = ({ color }) => (
  <svg className="absolute inset-0 w-full h-full p-4 md:p-6" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <polygon points="50,10 90,90 10,90" fill={color} opacity="0.8" style={{ animation: 'pulse-subtle 2.5s infinite ease-in-out' }}/>
    <text x="50" y="65" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="white" textAnchor="middle" style={{ animation: 'pulse-subtle 1.5s infinite ease-in-out 0.5s' }}>!</text>
  </svg>
);

// --- BannerItem Component ---
const BannerItem = ({ banner, index }) => {
  const { title, subtitle, style, slug, graphic: GraphicComponent } = banner;

  return (
    <div 
      data-index={index}
      className="banner-item relative min-w-[280px] md:min-w-[320px] lg:min-w-[360px] aspect-video md:aspect-5/3 rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-out 
                 opacity-0 translate-y-4 cursor-pointer group hover:scale-[1.02] hover:shadow-2xl hover:translate-y-0.5"
      style={{ 
        backgroundColor: style.bgColor,
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <a href={`/deals/${slug}`} className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-10">
        <div className="absolute inset-0">
          {GraphicComponent && <GraphicComponent />}
        </div>
        <div className="relative z-20">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-black leading-tight drop-shadow-md" style={{ color: style.titleColor }}>
            {title}
          </h3>
          <p className="text-xs md:text-sm font-medium mt-1 drop-shadow-sm" style={{ color: style.subtitleColor }}>
            {subtitle}
          </p>
        </div>
      </a>
    </div>
  );
};

// --- Main BannerCarousel ---
function BannerCarousel() {
  useEffect(() => {
    const items = document.querySelectorAll('.banner-item');
    requestAnimationFrame(() => {
      items.forEach(item => {
        item.classList.remove('opacity-0', 'translate-y-4');
        item.classList.add('opacity-100', 'translate-y-0');
      });
    });
  }, []);

  const promotionBanners = [
    { title: "Do Pass Yourself", subtitle: "WITH UP TO 60% OFF!", slug: "do-pass-yourself-sale", style: { bgColor: "#1A202C", titleColor: "#F7FAFC", subtitleColor: "#CBD5E0" }, graphic: () => <DiscountShape color1="#3182CE" color2="#F7FAFC" percentage="60%" text="OFF" /> },
    { title: "Deal of the Month", subtitle: "Don't Miss Out - Huge Savings!", slug: "deal-of-the-month", style: { bgColor: "#ED64A6", titleColor: "#FFFFFF", subtitleColor: "#FED7E2" }, graphic: () => <StarBurst color1="#F687B3" color2="#FFE0F0" /> },
    { title: "Clearance Sales", subtitle: "Up to 80% Off Everything!", slug: "clearance-sales", style: { bgColor: "#F6AD55", titleColor: "#FFFFFF", subtitleColor: "#FFFBEB" }, graphic: () => <PriceTag color1="#FBD38D" color2="#FFFFFF" percentage="80%" /> },
    { title: "ErrandBox Delivery", subtitle: "Fast & Free Shipping on Orders!", slug: "baz-delivery", style: { bgColor: "#38A169", titleColor: "#FFFFFF", subtitleColor: "#C6F6D5" }, graphic: () => <DeliveryTruck color="#81C784" /> },
    { title: "Buy 2 Get N1,000 Off", subtitle: "Mix & Match Your Favorites!", slug: "buy2-get1k-off", style: { bgColor: "#667EEA", titleColor: "#FFFFFF", subtitleColor: "#EBF4FF" }, graphic: () => <InterlockingCircles color1="#8DA4F7" color2="#B3C5FF" text1="2" text2="OFF" /> },
    { title: "ErrandBox Force", subtitle: "Join Today & Unlock Exclusive Perks!", slug: "ErrandBox-force", style: { bgColor: "#D53F8C", titleColor: "#FFFFFF", subtitleColor: "#FBB6CE" }, graphic: () => <AbstractFlow color="#F6AD55" /> },
    { title: "Extra 10% At Checkout", subtitle: "Limited Time Offer - Shop Now!", slug: "extra-10-checkout", style: { bgColor: "#C53030", titleColor: "#FFFFFF", subtitleColor: "#FED7D7" }, graphic: () => <DynamicPercent color1="#E53E3E" color2="#FFFFFF" percentage="10" /> },
    { title: "Deals Reloaded", subtitle: "Gaming Gear & Electronics!", slug: "deals-reloaded", style: { bgColor: "#2B6CB0", titleColor: "#FFFFFF", subtitleColor: "#E0F2F7" }, graphic: () => <GameController color="#63B3ED" /> },
    { title: "Flash Sale", subtitle: "Ending Soon - Grab It Fast!", slug: "flash-sale", style: { bgColor: "#ECC94B", titleColor: "#A0522D", subtitleColor: "#6B46C1" }, graphic: () => <LightningBolt color="#F6E05E" /> },
    { title: "New Arrivals", subtitle: "Discover What's Fresh!", slug: "new-arrivals", style: { bgColor: "#6B46C1", titleColor: "#FFFFFF", subtitleColor: "#E9D8FD" }, graphic: () => <NewArrivalsIcon color="#9F7AEA" /> },
    { title: "Weekend Vibes", subtitle: "Shop & Relax All Weekend!", slug: "weekend-vibes", style: { bgColor: "#805AD5", titleColor: "#FFFFFF", subtitleColor: "#EDE9FE" }, graphic: () => <SunIcon color="#D6BCFA" /> },
    { title: "Limited Stock", subtitle: "Hurry Before They're Gone!", slug: "limited-stock", style: { bgColor: "#DD6B20", titleColor: "#FFFFFF", subtitleColor: "#FEEBCF" }, graphic: () => <WarningTriangle color="#F6AD55" /> },
  ];

  return (
    <>
      <MotionStyles />
      <div className="w-full flex justify-center my-8">
        <div className="w-[95%] md:w-[90%]">
          <div className="mb-4 flex justify-between items-center pb-2 border-b border-gray-200">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              ✨ Bazaro Hot Deals & Promotions
            </h2>
            <a href="/deals" className="text-sm font-semibold text-gray-500 hover:text-orange-600 transition">
              View All Deals
            </a>
          </div>
          <div className="flex overflow-x-auto gap-4 py-2 custom-scrollbar">
            {promotionBanners.map((banner, index) => (
              <BannerItem key={index} banner={banner} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerCarousel;
