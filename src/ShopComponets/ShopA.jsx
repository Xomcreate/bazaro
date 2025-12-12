import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const COLOR_ORANGERED = '#FF4500';
const COLOR_BLACK = '#1F2937';
const COLOR_WHITE = '#FFFFFF';

const FeaturedDealCard = () => (
  <div className="p-6 rounded-3xl bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] transition duration-500 hover:shadow-[0_12px_35px_rgba(255,69,0,0.35)]">
    <div className="inline-block px-3 py-1 text-sm font-bold rounded-full mb-3" style={{ backgroundColor: COLOR_ORANGERED, color: COLOR_WHITE }}>
      HOT DEAL
    </div>
    <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
      <img
        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfzzhh05YH-sF69yVVJg82RFnCpLryoI4KImCOLRs9aLNeFaIsaLI7qT3SraINk-zo_BUmQd6gfMeaGN-OmclTnyPZ7DtDqairt1pf3rk1&usqp=CAc"
        alt="Promo Item"
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Imported Sneakers</h3>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-2xl font-extrabold" style={{ color: COLOR_ORANGERED }}>₦29,999</p>
        <p className="text-sm line-through text-gray-400">₦45,000</p>
      </div>
      <button className="px-5 py-2 text-sm font-semibold rounded-full shadow-md transition hover:scale-105" style={{ backgroundColor: COLOR_ORANGERED, color: COLOR_BLACK }}>
        View Deal
      </button>
    </div>
  </div>
);

export default function ShopA() {
  const navigate = useNavigate();

  // Mock login state (replace with actual auth check)
  const isLoggedIn = false;

  const handleRoute = (path) => {
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to login if not logged in
    } else {
      navigate(path); // Otherwise go to intended page
    }
  };

  return (
    <div className="w-full bg-white flex justify-center py-14 md:py-20" style={{ minHeight: '50vh', fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE TEXT */}
        <div className="flex flex-col text-center lg:text-left">
          <span className="inline-flex items-center justify-center lg:justify-start text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: COLOR_ORANGERED }}>
            <Star className="w-4 h-4 mr-2" fill={COLOR_ORANGERED} /> Ready to Ship
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight tracking-tight" style={{ color: COLOR_BLACK }}>
            Find Your Next <span style={{ color: COLOR_ORANGERED }}>Must-Have</span> Import.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-lg mx-auto lg:mx-0">
            Premium imported items, fast delivery, and unbeatable prices — refreshed daily.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Browse Categories */}
            <button
              onClick={() => handleRoute('/categories')}
              className="group flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition hover:scale-[1.03]"
              style={{ backgroundColor: COLOR_ORANGERED, color: COLOR_BLACK }}
            >
              Browse All Categories
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            {/* New Arrivals */}
            <button
              onClick={() => handleRoute('/new-arrivals')}
              className="flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition hover:bg-gray-50"
              style={{ color: COLOR_BLACK, border: `2px solid ${COLOR_BLACK}` }}
            >
              See New Arrivals
            </button>
          </div>
        </div>

        {/* RIGHT SIDE DEAL CARD */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm lg:max-w-md">
            <FeaturedDealCard />
          </div>
        </div>
      </div>
    </div>
  );
}
