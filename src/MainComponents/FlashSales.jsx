import React, { useState, useEffect } from "react";
import { FaBolt, FaClock, FaShoppingCart, FaStar, FaFire } from "react-icons/fa";

function FlashSales() {
  // 1. COUNTDOWN TIMER LOGIC
  const calculateTimeLeft = () => {
    // Set target to 24 hours from now for demo purposes
    const difference = +new Date("2025-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 }); // Hardcoded start for demo visual

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simple decrement logic for visual demo
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearTimeout(timer);
  });

  // 2. MOCK DATA (Marketplace Mix)
  const flashItems = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Noise Canceling",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300",
      oldPrice: 450000,
      newPrice: 295000,
      discount: 34,
      sold: 85, // Percentage sold
      rating: 4.8,
      seller: "ErrandBox Retail",
      isOfficial: true,
    },
    {
      id: 2,
      name: "Nike Air Jordan 1 Retro",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300",
      oldPrice: 120000,
      newPrice: 60000,
      discount: 50,
      sold: 92,
      rating: 4.5,
      seller: "Kicks Lagos",
      isOfficial: false,
    },
    {
      id: 3,
      name: "MacBook Air M2 Chip",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=300",
      oldPrice: 1500000,
      newPrice: 1250000,
      discount: 17,
      sold: 45,
      rating: 5.0,
      seller: "TechDepot",
      isOfficial: false,
    },
    {
      id: 4,
      name: "Generic Smart Watch Series 8",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=300",
      oldPrice: 35000,
      newPrice: 15000,
      discount: 58,
      sold: 70,
      rating: 3.9,
      seller: "Gadget World",
      isOfficial: false,
    },
    {
      id: 5,
      name: "Canon DSLR Camera Kit",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300",
      oldPrice: 850000,
      newPrice: 650000,
      discount: 23,
      sold: 15,
      rating: 4.7,
      seller: "ErrandBox Retail",
      isOfficial: true,
    },
    {
      id: 6,
      name: "PS5 Console Disc Edition",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=300",
      oldPrice: 650000,
      newPrice: 580000,
      discount: 10,
      sold: 98,
      rating: 4.9,
      seller: "GameStation",
      isOfficial: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* --- HERO BANNER (Matches Navbar Orange) --- */}
      <div className="bg-orange-600 text-white pt-10 pb-20 px-4 relative overflow-hidden">
        {/* Decorative Background Icon */}
        <FaBolt className="absolute -right-10 -bottom-10 text-orange-500 opacity-30 rotate-12" size={300} />
        
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider animate-pulse">
                Live Now
              </span>
              <p className="text-orange-100 font-medium">Limited Time Offers</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-tighter uppercase">
              Flash <span className="text-black">Sales</span>
            </h1>
            <p className="mt-2 text-lg text-orange-100 max-w-md">
              Grab up to 80% off on Marketplace items. Deals refresh every 24 hours.
            </p>
          </div>

          {/* TIMER BOX */}
          <div className="flex gap-4">
            <TimerBox value={timeLeft.hours} label="Hours" />
            <span className="text-4xl font-bold mt-2">:</span>
            <TimerBox value={timeLeft.minutes} label="Mins" />
            <span className="text-4xl font-bold mt-2">:</span>
            <TimerBox value={timeLeft.seconds} label="Secs" />
          </div>
        </div>
      </div>

      {/* --- FILTER TABS (Optional) --- */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-md p-2 flex overflow-x-auto gap-2 no-scrollbar">
          {['All Deals', 'Smartphones', 'Fashion', 'Home & Office', 'Beauty'].map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-3 rounded-md text-sm font-bold whitespace-nowrap transition-colors ${
                idx === 0 ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <div className="container mx-auto px-4 mt-10">
        <div className="flex items-center gap-2 mb-6 text-gray-800">
          <FaFire className="text-orange-600" size={24} />
          <h2 className="text-2xl font-bold uppercase">Hot Deals Right Now</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flashItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100 relative">
              
              {/* Discount Badge */}
              <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                -{item.discount}%
              </div>

              {/* Vendor Badge (Marketplace Logic) */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-gray-600 shadow-sm z-10 uppercase tracking-wide">
                {item.isOfficial ? "ErrandBox Retail" : item.seller}
              </div>

              {/* Image */}
              <div className="h-56 overflow-hidden bg-gray-100 relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Quick Add Button (Hover) */}
                <button 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-6 py-2 text-white text-sm font-bold rounded-full shadow-lg"
                  style={{ background: "linear-gradient(to right, #ea580c, #c2410c)" }} // Orange Gradient
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 truncate mb-1" title={item.name}>{item.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <FaStar className="text-yellow-400 text-xs" />
                  <span className="text-xs text-gray-500">{item.rating} (120 sold)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-orange-600">₦{item.newPrice.toLocaleString()}</span>
                  <span className="text-sm text-gray-400 line-through">₦{item.oldPrice.toLocaleString()}</span>
                </div>

                {/* Stock Progress Bar (FOMO) */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div 
                    className={`h-2 rounded-full ${item.sold > 90 ? 'bg-red-600' : 'bg-orange-500'}`} 
                    style={{ width: `${item.sold}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase text-gray-500">
                  <span>{item.sold > 90 ? "Almost Gone!" : "Selling Fast"}</span>
                  <span>{item.sold}% Sold</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sub-component for the Timer Blocks
const TimerBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white text-orange-600 w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg flex items-center justify-center text-3xl md:text-4xl font-bold">
      {value < 10 ? `0${value}` : value}
    </div>
    <span className="text-xs md:text-sm font-medium mt-1 text-orange-100 uppercase">{label}</span>
  </div>
);

export default FlashSales;