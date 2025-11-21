import React from 'react';
import { Star, TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';

// Define core colors from Market C
const COLOR_ORANGERED = '#FF4500'; // Primary Accent Color
const COLOR_BLACK = '#1F2937';     // Secondary Accent / Text Color
const COLOR_WHITE = '#FFFFFF';

// --- Updated Placeholder Data for Top/Popular Vendors ---
const topVendors = [
  {
    id: 101,
    name: "TechNova Electronics",
    rating: 4.9,
    orders: 18500, // Used 'orders' for popularity metric
    focus: "Smart Devices",
    featuredProduct: { name: "Pro Headset X9", price: 129.00, imageUrl: "https://placehold.co/400x200/FF4500/FFFFFF?text=Headset" }
  },
  {
    id: 102,
    name: "Luxe Home Goods",
    rating: 5.0,
    orders: 9200,
    focus: "Home Decor",
    featuredProduct: { name: "Velvet Throw Blanket", price: 65.50, imageUrl: "https://placehold.co/400x200/1F2937/FFFFFF?text=Blanket" }
  },
  {
    id: 103,
    name: "GreenThreads Apparel",
    rating: 4.7,
    orders: 25000,
    focus: "Sustainable Fashion",
    featuredProduct: { name: "Organic Cotton Tee", price: 35.00, imageUrl: "https://placehold.co/400x200/f3f4f6/1F2937?text=T-Shirt" }
  },
  {
    id: 104,
    name: "Artisan Coffee Roasters",
    rating: 4.8,
    orders: 11000,
    focus: "Specialty Foods",
    featuredProduct: { name: "Ethiopian Yirgacheffe (500g)", price: 19.99, imageUrl: "https://placehold.co/400x200/FF4500/FFFFFF?text=Coffee" }
  },
];

// Helper function to format large numbers
const formatNumber = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toString();
};

// --- Vendor Card Component (Updated for Dual Metrics) ---
const VendorCard = ({ vendor }) => (
    <div 
        className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-100 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl flex flex-col"
    >
        {/* Vendor Header */}
        <div className="p-4 flex items-center border-b border-gray-100" style={{ backgroundColor: COLOR_BLACK, color: COLOR_WHITE }}>
            <div className="w-10 h-10 flex items-center justify-center rounded-full mr-3 border-2 border-white" style={{ backgroundColor: COLOR_ORANGERED }}>
                <ShieldCheck className="w-5 h-5" />
            </div>
            <div className='truncate'>
                <h3 className="text-lg font-extrabold tracking-wide truncate">{vendor.name}</h3>
                <p className="text-xs font-medium opacity-80">{vendor.focus}</p>
            </div>
        </div>

        {/* Vendor Stats: Emphasizing Rating (Orangered) and Popularity (Black) */}
        <div className="flex justify-around items-center py-3 bg-gray-50 border-b border-gray-200">
            {/* Top Rating Metric */}
            <div className="text-center">
                <p className="text-lg font-extrabold flex items-center justify-center" style={{ color: COLOR_ORANGERED }}>
                    <Star className="w-5 h-5 mr-1 fill-current" /> {vendor.rating.toFixed(1)}
                </p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Top Rated</p>
            </div>
            
            {/* Popularity Metric */}
            <div className="text-center border-l border-gray-200 pl-4">
                <p className="text-lg font-extrabold flex items-center justify-center" style={{ color: COLOR_BLACK }}>
                    <TrendingUp className="w-5 h-5 mr-1" /> {formatNumber(vendor.orders)}
                </p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Total Orders</p>
            </div>
        </div>

        {/* Featured Product Display */}
        <div className="p-4 flex flex-col justify-between grow">
            <h4 className="text-sm font-bold mb-3 text-gray-600">Featured Product:</h4>
            
            <div className="flex items-center">
                <div className="h-16 w-16 mr-3 rounded-lg overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                    <img src={vendor.featuredProduct.imageUrl} alt={vendor.featuredProduct.name} className="object-cover w-full h-full" />
                </div>
                <div className='truncate'>
                    <p className="text-base font-semibold truncate" style={{ color: COLOR_BLACK }}>
                        {vendor.featuredProduct.name}
                    </p>
                    <p className="text-lg font-extrabold" style={{ color: COLOR_ORANGERED }}>
                        ${vendor.featuredProduct.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>

        {/* CTA Button */}
        <button
            className="w-full py-3 text-sm font-bold uppercase tracking-wider text-white transition duration-300 hover:opacity-90"
            style={{ backgroundColor: COLOR_ORANGERED }}
        >
            Explore {vendor.focus} Shop
        </button>
    </div>
);


// --- Main MarketD Component ---
function MarketD() {
  return (
    // Component Container: Uses a light background, similar to Market C
    <div className="w-full bg-gray-50 flex justify-center py-20 px-4 relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
        
        {/* Decorative Background Shapes */}
        <div 
            className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF4500] opacity-5 rounded-full filter blur-3xl" 
            aria-hidden="true"
        ></div>
        <div 
            className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#1F2937] opacity-5 transform rotate-45 filter blur-2xl" 
            aria-hidden="true"
        ></div>

        <div className="max-w-7xl w-full relative z-10">
            
            {/* --- Section Header (Title reflects both metrics) --- */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-extrabold tracking-tight" style={{ color: COLOR_BLACK }}>
                    <Award className="w-8 h-8 inline-block mr-2" style={{ color: COLOR_ORANGERED }} />
                    <span className="text-gray-500 font-light">Popular &</span> <span style={{ color: COLOR_ORANGERED }}>Highly Rated Vendors</span>
                </h2>
                <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
                    These partners combine exceptional quality with high demand, ensuring you get the best products trusted by thousands of customers.
                </p>
                <button 
                    className="mt-6 px-8 py-3 text-base font-bold rounded-full text-white transition duration-200 shadow-xl hover:shadow-2xl transform hover:translate-y-0.5 tracking-wider"
                    style={{ backgroundColor: COLOR_ORANGERED }}
                >
                    View Our Vendor Scorecard
                </button>
            </div>

            {/* --- Vendor Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {topVendors.map((vendor) => (
                    <VendorCard key={vendor.id} vendor={vendor} />
                ))}
            </div>

        </div>
    </div>
  );
}

export default MarketD;