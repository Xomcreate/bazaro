import React from 'react';

// --- Shop Card Component ---
const ShopCard = ({ shop }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer group">
      
      {/* Shop Logo / Avatar */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-orange-100 rounded-full border-4 border-white shadow-md mb-3 overflow-hidden">
        <div className="w-full h-full grid place-items-center bg-gray-200 text-gray-500 text-xs font-semibold">
          {shop.logoInitial}
        </div>

        {shop.isVerified && (
          <div 
            title="Verified Vendor"
            className="absolute bottom-0 right-0 p-1 bg-green-500 rounded-full text-white text-xs transform translate-x-1 translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {/* Shop Name */}
      <h3 className="text-lg font-extrabold text-gray-900 mt-1 mb-1">{shop.name}</h3>
      
      {/* Shop Tagline */}
      <p className="text-xs text-gray-500 h-8 overflow-hidden">{shop.tagline}</p>

      {/* Stats/Metrics */}
      <div className="flex justify-center gap-4 text-xs font-medium text-gray-600 my-3">
        <span>⭐ {shop.rating.toFixed(1)}</span>
        <span>|</span>
        <span>{shop.products} Products</span>
      </div>

      {/* CTA Button */}
      <button className="w-full bg-orange-600 text-white font-semibold py-2 rounded-lg text-sm hover:bg-orange-700 transition duration-150 shadow-md group-hover:shadow-xl">
        Visit Shop
      </button>
    </div>
  );
};

// --- Main Featured Shops Component ---
export default function HomeF() {
  const featuredShops = [
    { name: "Gadgets Hub NG", logoInitial: "GH", tagline: "Top quality electronics & appliances with warranty.", rating: 4.8, products: 120, isVerified: true },
    { name: "Ankara Trends", logoInitial: "AT", tagline: "Latest fashion fabrics and custom made styles.", rating: 4.5, products: 55, isVerified: true },
    { name: "Mama's Pantry", logoInitial: "MP", tagline: "Best deals on groceries and bulk food items.", rating: 4.9, products: 80, isVerified: true },
    { name: "Pro Tools & Safety", logoInitial: "PT", tagline: "Industrial and DIY tools for professionals.", rating: 4.7, products: 90, isVerified: false },
    { name: "Kiddies Corner", logoInitial: "KC", tagline: "Affordable and durable toys and baby gear.", rating: 4.6, products: 150, isVerified: true },
    { name: "Smart Home Tech", logoInitial: "SHT", tagline: "Automation and security solutions for homes.", rating: 4.4, products: 40, isVerified: false },
  ];

  return (
    <section className="w-full flex justify-center my-8 pb-8">
      <div className="w-[95%] md:w-[90%]">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-2 border-orange-200">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            🏆 Featured & Verified Vendors
          </h2>
          <a 
            href="/vendors" 
            className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition"
          >
            View All Vendors &gt;
          </a>
        </div>

        {/* Shop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredShops.map((shop, index) => (
            <ShopCard key={index} shop={shop} />
          ))}
        </div>

      </div>
    </section>
  );
}
