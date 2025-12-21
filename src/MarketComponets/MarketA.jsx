import React from 'react';
import { Search, ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const COLOR_ORANGERED = '#FF4500';
const COLOR_BLACK = '#1F2937';
const COLOR_WHITE = '#FFFFFF';

const MarketplaceHeroSVG = () => (
  <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 280 L380 280 L380 150 C380 70 300 20 200 20 C100 20 20 70 20 150 L20 280 Z" fill="#FF4500" fillOpacity="0.15"/>
    <rect x="150" y="50" width="100" height="100" rx="15" fill={COLOR_WHITE} stroke={COLOR_ORANGERED} strokeWidth="5" className="shadow-xl"/>
    <g style={{ transform: 'translate(195px, 95px)' }}>
      <Zap className="w-10 h-10" color={COLOR_ORANGERED} strokeWidth={2.5} />
    </g>
    <circle cx="100" cy="180" r="10" fill={COLOR_BLACK} />
    <circle cx="300" cy="200" r="10" fill={COLOR_BLACK} />
    <circle cx="150" cy="230" r="10" fill={COLOR_ORANGERED} />
    <line x1="20" y1="280" x2="380" y2="280" stroke={COLOR_BLACK} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

function MarketA() {
  const navigate = useNavigate(); // Initialize navigation

  const handleStartShopping = () => {
    // Route to login first
    navigate('/categories');
  };

  return (
    <div 
      className="w-full bg-white flex justify-center py-16 md:py-24"
      style={{ minHeight: '60vh', fontFamily: 'Inter, sans-serif' }}
    >
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content & CTAs */}
        <div className="flex flex-col text-center lg:text-left">
          <span 
            className="inline-flex items-center justify-center lg:justify-start text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: COLOR_ORANGERED }}
          >
            <Zap className="w-4 h-4 mr-1" />
            The Future of Retail
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight" style={{ color: COLOR_BLACK }}>
            Discover. Shop. <span style={{ color: COLOR_ORANGERED }}>Delight.</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            Your central hub for high-quality products across all categories—from fashion to appliances. Fast shipping, verified vendors.
          </p>

          {/* Search and CTA Block */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={handleStartShopping}
              className="flex items-center justify-center px-8 py-3 text-lg font-bold rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-xl"
              style={{ backgroundColor: COLOR_ORANGERED, color: COLOR_WHITE }}
            >
              Start Shopping Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <div className="relative w-full sm:w-auto">
              <input 
                type="text" 
                placeholder="Search 10k+ items..." 
                className="w-full sm:w-72 pl-12 pr-4 py-3 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-offset-2 focus:outline-none"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100 flex justify-center lg:justify-start gap-8">
            <div className="text-center lg:text-left">
              <p className="text-3xl font-extrabold" style={{ color: COLOR_BLACK }}>150K+</p>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl font-extrabold" style={{ color: COLOR_BLACK }}>4.9/5</p>
              <p className="text-sm text-gray-500">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Graphic */}
        <div className="flex justify-center items-center opacity-90">
          <div className="w-full max-w-md lg:max-w-full transform transition-transform duration-500 hover:scale-[1.02] rotate-3 hover:rotate-0">
            <MarketplaceHeroSVG />
          </div>
        </div>

      </div>
    </div>
  );
}

export default MarketA;
