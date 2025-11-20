import React from 'react';

// Helper function to format Naira currency
const formatNaira = (price) => `₦${price.toLocaleString('en-NG')}`;

// --- Star Rating Component ---
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) stars.push(<span key={i} className="text-yellow-400">★</span>);
  if (hasHalfStar) stars.push(<span key="half" className="text-yellow-400">½</span>);
  while (stars.length < 5) stars.push(<span key={stars.length} className="text-gray-300">★</span>);

  return (
    <div className="flex items-center text-xs">
      {stars} <span className="ml-1 text-gray-500">({rating.toFixed(1)})</span>
    </div>
  );
};

// --- Standard Product Card Component ---
const StandardProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer overflow-hidden">
    {/* Image Area */}
    <div className="h-48 bg-gray-50 overflow-hidden grid place-items-center relative">
      {product.image ? (
        <img src={product.image} alt={product.name} className="w-full h-full object-contain" loading="lazy" />
      ) : (
        <div className="w-full h-full object-contain grid place-items-center bg-gray-200 text-gray-500 text-sm font-semibold p-2 text-center">
          [Image Placeholder]
        </div>
      )}
      {product.isTrending && (
        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
          🔥 TRENDING
        </div>
      )}
    </div>

    <div className="p-3 flex flex-col grow">
      <p className="text-sm font-medium text-gray-800 h-10 overflow-hidden mb-1 leading-tight">{product.name}</p>
      <div className="mb-2">
        <span className="text-xl font-bold text-orange-600">{formatNaira(product.price)}</span>
        {product.oldPrice && (
          <span className="text-xs text-gray-400 line-through ml-2">{formatNaira(product.oldPrice)}</span>
        )}
      </div>
      <StarRating rating={product.rating} />
      <p className="text-xs text-gray-500 mt-2">Ships from {product.location}</p>
    </div>
  </div>
);

// --- Main Component: HomeE ---
export default function HomeE() {
  const trendingProducts = [
    { name: "Bluetooth Headset with Deep Bass & Mic", price: 12500, oldPrice: 15000, rating: 4.5, location: "Lagos", isTrending: true },
    { name: "3-in-1 Multifunctional Electric Blender", price: 34900, rating: 4.8, location: "Abuja", isTrending: false },
    { name: "Stylish Women's Crossbody Handbag", price: 8990, rating: 4.3, location: "Lagos", isTrending: true },
    { name: "Non-stick Frying Pan Set - 3 Pieces", price: 19900, oldPrice: 22000, rating: 4.7, location: "Portharcourt", isTrending: false },
    { name: "Android Smartphone 6GB RAM - Budget Pick", price: 78000, rating: 4.1, location: "Lagos", isTrending: true },
    { name: "Fitness Resistance Band Set (5 Levels)", price: 5500, rating: 4.9, location: "Ibadan", isTrending: false },
    { name: "1.7L Electric Kettle - Fast Boil", price: 9500, rating: 4.6, location: "Lagos", isTrending: false },
    { name: "Men's Luxury Leather Wallet", price: 14500, oldPrice: 16000, rating: 4.2, location: "Kano", isTrending: true },
    { name: "Portable USB Desk Fan", price: 7900, rating: 4.4, location: "Lagos", isTrending: false },
    { name: "Smartwatch Fitness Tracker", price: 28000, oldPrice: 35000, rating: 4.5, location: "Abuja", isTrending: true },
  ];

  return (
    <section className="w-full flex justify-center my-8 px-4">
      {/* Match HomeC width */}
      <div className="w-[95%] md:w-[90%]">

        {/* Header */}
        <div className="flex items-center justify-between mb-3 bg-linear-to-r from-orange-500 to-orange-400 text-white px-4 py-3 rounded-t-xl shadow-md">
          <span className="text-2xl md:text-3xl font-extrabold">⭐ Recommended & Trending</span>
          <a href="/recommended" className="text-sm md:text-base font-semibold text-white/90 hover:underline">
            Shop All →
          </a>
        </div>

        {/* Grid: 2 rows × 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 bg-white p-4 rounded-b-xl border border-t-0 border-gray-200">
          {trendingProducts.map((product, index) => (
            <StandardProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
