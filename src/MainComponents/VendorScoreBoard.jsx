import React from 'react';
import { Star, TrendingUp, ShieldCheck } from 'lucide-react';

// Colors
const COLOR_ORANGERED = '#FF4500';
const COLOR_BLACK = '#1F2937';
const COLOR_WHITE = '#FFFFFF';

// Placeholder Data (same as MarketD)
const topVendors = [
  {
    id: 101,
    name: "TechNova Electronics",
    rating: 4.9,
    orders: 18500,
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

// Format large numbers
const formatNumber = (num) => (num >= 1000 ? (num / 1000).toFixed(1) + 'K+' : num.toString());

// Vendor Card Component
const VendorCard = ({ vendor }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col">
    {/* Header */}
    <div className="p-4 flex items-center border-b border-gray-100" style={{ backgroundColor: COLOR_BLACK, color: COLOR_WHITE }}>
      <div className="w-10 h-10 flex items-center justify-center rounded-full mr-3 border-2 border-white" style={{ backgroundColor: COLOR_ORANGERED }}>
        <ShieldCheck className="w-5 h-5" />
      </div>
      <div className='truncate'>
        <h3 className="text-lg font-extrabold truncate">{vendor.name}</h3>
        <p className="text-xs font-medium opacity-80">{vendor.focus}</p>
      </div>
    </div>

    {/* Stats */}
    <div className="flex justify-around items-center py-3 bg-gray-50 border-b border-gray-200">
      <div className="text-center">
        <p className="text-lg font-extrabold flex items-center justify-center" style={{ color: COLOR_ORANGERED }}>
          <Star className="w-5 h-5 mr-1 fill-current" /> {vendor.rating.toFixed(1)}
        </p>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Top Rated</p>
      </div>
      <div className="text-center border-l border-gray-200 pl-4">
        <p className="text-lg font-extrabold flex items-center justify-center" style={{ color: COLOR_BLACK }}>
          <TrendingUp className="w-5 h-5 mr-1" /> {formatNumber(vendor.orders)}
        </p>
        <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Total Orders</p>
      </div>
    </div>

    {/* Featured Product */}
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
  </div>
);

// Vendor Scoreboard Page
function VendorScoreBoard() {
  return (
    <div className="w-full bg-gray-50 flex flex-col items-center py-20 px-4 min-h-screen">
      {/* Page Header */}
      <div className="text-center mb-16 max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight" style={{ color: COLOR_BLACK }}>
          Vendor <span style={{ color: COLOR_ORANGERED }}>Scoreboard</span>
        </h1>
        <p className="text-xl text-gray-700 mt-4">
          Check out our top vendors ranked by ratings and total orders. Discover their featured products and explore their shops.
        </p>
      </div>

      {/* Vendor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl">
        {topVendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}

export default VendorScoreBoard;
