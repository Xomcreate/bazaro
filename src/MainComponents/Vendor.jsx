import React, { useState } from "react";
import { FaStore, FaStar, FaCheckCircle, FaArrowRight, FaSearch, FaFire, FaBuilding, FaChevronRight } from "react-icons/fa";

function Vendor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Shops");

  // Your specific categories
  const categories = [
    "All Shops", "Electronics", "Phones and Computer", "Beauty", 
    "Automobile", "Fashion", "Services", "Food", 
    "Groceries", "Homeappliance", "Sports", "Stationery"
  ];

  // Mock Data for All Vendors
  const allVendors = [
    {
      id: 1,
      name: "Tech Giants",
      category: "Phones and Computer",
      rating: 4.9,
      sales: "15k+",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
      logo: "TG",
      isVerified: true,
      status: "Official Store"
    },
    {
      id: 2,
      name: "Auto Prime",
      category: "Automobile",
      rating: 4.6,
      sales: "800+",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400",
      logo: "AP",
      isVerified: true,
      status: "Verified"
    },
    {
      id: 3,
      name: "Glamour Fix",
      category: "Beauty",
      rating: 4.7,
      sales: "12k+",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400",
      logo: "GF",
      isVerified: false,
      status: "Trending"
    },
    {
      id: 4,
      name: "Fresh Mart",
      category: "Groceries",
      rating: 4.8,
      sales: "30k+",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
      logo: "FM",
      isVerified: true,
      status: "Top Seller"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans">
      
      {/* --- FLASHY HERO SECTION --- */}
      <div className="bg-black text-white pt-16 pb-28 px-4 relative overflow-hidden">
        {/* Orangered background glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF4500] opacity-20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FF4500] px-4 py-1 rounded-full mb-6 animate-pulse">
            <FaFire className="text-white" />
            <span className="text-xs font-black uppercase tracking-widest">Marketplace Live</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-4">
            Shop <span className="text-[#FF4500]">Vendors</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg font-medium mb-10">
            Discover verified sellers across all categories. Get the best deals directly from the source.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF4500] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by brand, service, or product..."
              className="w-full bg-white text-black py-5 pl-16 pr-8 rounded-2xl font-bold shadow-[0_0_40px_rgba(255,69,0,0.2)] focus:outline-none focus:ring-4 focus:ring-[#FF4500] transition-all text-lg"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* --- CATEGORY NAVIGATION --- */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white p-3 rounded-2xl shadow-2xl flex items-center gap-2 overflow-x-auto no-scrollbar border border-gray-100">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-[#FF4500] text-white shadow-lg shadow-[#FF4500]/40 translate-y-0.5" 
                : "bg-gray-50 text-black hover:bg-black hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- VENDOR GRID SECTION --- */}
      <div className="container mx-auto px-4 mt-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-black uppercase italic text-black leading-none">Featured Stores</h2>
            <div className="h-2 w-24 bg-[#FF4500] mt-2"></div>
          </div>
          <button className="hidden md:flex items-center gap-2 font-black uppercase text-sm tracking-widest hover:text-[#FF4500] transition-colors">
            See All Vendors <FaChevronRight />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allVendors.map((vendor) => (
            <div key={vendor.id} className="group relative bg-white border-2 border-gray-100 rounded-4xl overflow-hidden hover:border-[#FF4500] transition-all duration-500 hover:shadow-2xl">
              
              {/* Header Image */}
              <div className="h-44 overflow-hidden relative">
                <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Sale Status */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF4500] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase">
                    {vendor.status}
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6 pt-0 relative">
                {/* Logo Circle */}
                <div className="w-20 h-20 bg-black border-4 border-white rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl absolute -top-10 left-6 group-hover:bg-[#FF4500] transition-colors duration-300">
                  {vendor.logo}
                </div>

                <div className="mt-14">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-black uppercase text-black tracking-tighter">{vendor.name}</h3>
                    {vendor.isVerified && <FaCheckCircle className="text-[#FF4500]" size={18} />}
                  </div>
                  
                  <p className="text-[#FF4500] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    {vendor.category}
                  </p>

                  <div className="flex items-center justify-between py-4 border-y border-gray-100 mb-6">
                    <div className="text-center">
                      <p className="text-xs font-bold text-gray-400 uppercase">Rating</p>
                      <p className="font-black text-black flex items-center gap-1 justify-center">
                        {vendor.rating} <FaStar className="text-[#FF4500] text-[10px]" />
                      </p>
                    </div>
                    <div className="w-px h-8 bg-gray-100"></div>
                    <div className="text-center">
                      <p className="text-xs font-bold text-gray-400 uppercase">Sales</p>
                      <p className="font-black text-black">{vendor.sales}</p>
                    </div>
                  </div>

                  <button className="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs group-hover:bg-[#FF4500] transition-all duration-300 transform active:scale-95 shadow-lg">
                    Enter Store
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOOTER CTA --- */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-[#FF4500] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(255,69,0,0.4)]">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">Want to sell here?</h2>
              <p className="text-white/80 font-bold mb-10 max-w-lg mx-auto uppercase tracking-wide">Join thousands of vendors and start growing your business today.</p>
              <button className="bg-black text-white px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-white hover:text-[#FF4500] transition-all text-lg">
                Register Your Shop
              </button>
           </div>
           {/* Decorative big icon */}
           <FaStore className="absolute -bottom-10 -right-10 text-white/10 rotate-12" size={300} />
        </div>
      </div>
    </div>
  );
}

export default Vendor;