import React, { useState } from "react";
import { Star, TrendingUp, Award, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Colors
const COLOR_ORANGERED = "#FF4500";
const COLOR_BLACK = "#1F2937";

// Vendor Data
const topVendors = [
  {
    id: 101,
    name: "TechNova Electronics",
    rating: 4.9,
    orders: 18500,
    focus: "Smart Devices",
    featuredProduct: {
      name: "Pro Headset X9",
      price: 129.0,
      imageUrl: "https://placehold.co/400x200/FF4500/FFFFFF?text=Headset",
    },
  },
  {
    id: 102,
    name: "Luxe Home Goods",
    rating: 5.0,
    orders: 9200,
    focus: "Home Decor",
    featuredProduct: {
      name: "Velvet Throw Blanket",
      price: 65.5,
      imageUrl: "https://placehold.co/400x200/1F2937/FFFFFF?text=Blanket",
    },
  },
  {
    id: 103,
    name: "GreenThreads Apparel",
    rating: 4.7,
    orders: 25000,
    focus: "Sustainable Fashion",
    featuredProduct: {
      name: "Organic Cotton Tee",
      price: 35.0,
      imageUrl: "https://placehold.co/400x200/f3f4f6/1F2937?text=T-Shirt",
    },
  },
  {
    id: 104,
    name: "Artisan Coffee Roasters",
    rating: 4.8,
    orders: 11000,
    focus: "Specialty Foods",
    featuredProduct: {
      name: "Ethiopian Yirgacheffe (500g)",
      price: 19.99,
      imageUrl: "https://placehold.co/400x200/FF4500/FFFFFF?text=Coffee",
    },
  },
];

// Helper
const formatNumber = (num) =>
  num >= 1000 ? (num / 1000).toFixed(1) + "K+" : num.toString();

// Vendor Card
const VendorCard = ({ vendor, onExploreClick }) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-100 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex flex-col">
    {/* Header */}
    <div
      className="p-4 flex items-center border-b border-gray-100"
      style={{ backgroundColor: COLOR_BLACK, color: "white" }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-full mr-3 border-2 border-white"
        style={{ backgroundColor: COLOR_ORANGERED }}
      >
        <ShieldCheck className="w-5 h-5" />
      </div>
      <div className="truncate">
        <h3 className="text-lg font-extrabold tracking-wide truncate">
          {vendor.name}
        </h3>
        <p className="text-xs font-medium opacity-80">{vendor.focus}</p>
      </div>
    </div>

    {/* Stats */}
    <div className="flex justify-around items-center py-3 bg-gray-50 border-b border-gray-200">
      <div className="text-center">
        <p
          className="text-lg font-extrabold flex items-center justify-center"
          style={{ color: COLOR_ORANGERED }}
        >
          <Star className="w-5 h-5 mr-1 fill-current" /> {vendor.rating.toFixed(1)}
        </p>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
          Top Rated
        </p>
      </div>
      <div className="text-center border-l border-gray-200 pl-4">
        <p
          className="text-lg font-extrabold flex items-center justify-center"
          style={{ color: COLOR_BLACK }}
        >
          <TrendingUp className="w-5 h-5 mr-1" /> {formatNumber(vendor.orders)}
        </p>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
          Total Orders
        </p>
      </div>
    </div>

    {/* Featured Product */}
    <div className="p-4 flex flex-col justify-between grow">
      <h4 className="text-sm font-bold mb-3 text-gray-600">Featured Product:</h4>
      <div className="flex items-center">
        <div className="h-16 w-16 mr-3 rounded-lg overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
          <img
            src={vendor.featuredProduct.imageUrl}
            alt={vendor.featuredProduct.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="truncate">
          <p
            className="text-base font-semibold truncate"
            style={{ color: COLOR_BLACK }}
          >
            {vendor.featuredProduct.name}
          </p>
          <p
            className="text-lg font-extrabold"
            style={{ color: COLOR_ORANGERED }}
          >
            ${vendor.featuredProduct.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>

    {/* Explore Button */}
    <button
      onClick={onExploreClick}
      className="w-full py-3 text-sm font-bold uppercase tracking-wider text-white transition duration-300 hover:opacity-90"
      style={{ backgroundColor: COLOR_ORANGERED }}
    >
      Explore {vendor.focus} Shop
    </button>
  </div>
);

// MarketD Component
export default function MarketD() {
  const navigate = useNavigate();
  const [showScorecard, setShowScorecard] = useState(false);

  const handleExploreVendor = (vendor) => {
    // Navigate to MarketB-style shop detail page
    navigate(`/shop/${vendor.id}`, { state: { vendor } });
  };

  return (
    <div className="w-full bg-gray-50 flex justify-center py-20 px-4 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF4500] opacity-5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#1F2937] opacity-5 transform rotate-45 filter blur-2xl" />

      <div className="max-w-7xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight" style={{ color: COLOR_BLACK }}>
            <Award className="w-8 h-8 inline-block mr-2" style={{ color: COLOR_ORANGERED }} />
            <span className="text-gray-500 font-light">Popular &</span>{" "}
            <span style={{ color: COLOR_ORANGERED }}>Highly Rated Vendors</span>
          </h2>
          <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
            These partners combine exceptional quality with high demand, ensuring you get the best products trusted by thousands of customers.
          </p>

          <button
            onClick={() => setShowScorecard(true)}
            className="mt-6 px-8 py-3 text-base font-bold rounded-full text-white transition duration-200 shadow-xl hover:shadow-2xl transform hover:translate-y-0.5 tracking-wider"
            style={{ backgroundColor: COLOR_ORANGERED }}
          >
            View Our Vendor Scorecard
          </button>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {topVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              onExploreClick={() => handleExploreVendor(vendor)}
            />
          ))}
        </div>
      </div>

      {/* Scorecard Modal */}
      {showScorecard && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-20 z-50">
          <div className="bg-white p-8 rounded-xl max-w-5xl w-full relative shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: COLOR_BLACK }}>
              Vendor Scorecard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topVendors.map((vendor) => (
                <div key={vendor.id} className="border p-4 rounded-lg flex items-center space-x-4">
                  <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-gray-200">
                    <img src={vendor.featuredProduct.imageUrl} alt={vendor.featuredProduct.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: COLOR_BLACK }}>{vendor.name}</h3>
                    <p className="text-sm text-gray-500">{vendor.focus}</p>
                    <p className="text-sm font-semibold" style={{ color: COLOR_ORANGERED }}>Rating: {vendor.rating.toFixed(1)}</p>
                    <p className="text-sm font-semibold" style={{ color: COLOR_BLACK }}>Orders: {formatNumber(vendor.orders)}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowScorecard(false)}
              className="absolute top-4 right-4 text-red-500 font-bold text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
