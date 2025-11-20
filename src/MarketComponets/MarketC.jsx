import React from 'react';
import { ShoppingCart, Heart, Zap, Plus } from 'lucide-react';

// Define core colors
const COLOR_ORANGERED = '#FF4500';
const COLOR_BLACK = '#1F2937';
const COLOR_WHITE = '#FFFFFF';

// --- Placeholder Data for 10 New Arrivals ---
const newArrivals = [
  { 
    id: 1, 
    name: "Aura Smartwatch Pro", 
    category: "Electronics", 
    price: 199.99, 
    isNew: true,
    imageUrl: "https://placehold.co/400x400/FF4500/FFFFFF?text=Smartwatch"
  },
  { 
    id: 2, 
    name: "Linen Summer Dress", 
    category: "Fashion", 
    price: 49.50, 
    isNew: true,
    imageUrl: "https://placehold.co/400x400/1F2937/FFFFFF?text=Dress" 
  },
  { 
    id: 3, 
    name: "Ceramic Coffee Set (4pcs)", 
    category: "Home & Kitchen", 
    price: 75.00, 
    isNew: false,
    imageUrl: "https://placehold.co/400x400/f3f4f6/1F2937?text=Coffee+Set" 
  },
  { 
    id: 4, 
    name: "Glow Serum 24H Hydration", 
    category: "Beauty", 
    price: 29.99, 
    isNew: true,
    imageUrl: "https://placehold.co/400x400/FF4500/FFFFFF?text=Serum" 
  },
  { 
    id: 5, 
    name: "Portable Bluetooth Speaker", 
    category: "Electronics", 
    price: 89.90, 
    isNew: false,
    imageUrl: "https://placehold.co/400x400/1F2937/FFFFFF?text=Speaker" 
  },
  { 
    id: 6, 
    name: "Classic Leather Wallet", 
    category: "Fashion", 
    price: 65.00, 
    isNew: true,
    imageUrl: "https://placehold.co/400x400/f3f4f6/1F2937?text=Wallet" 
  },
  { 
    id: 7, 
    name: "Yoga Mat Pro", 
    category: "Sports", 
    price: 39.99, 
    isNew: false,
    imageUrl: "https://placehold.co/400x400/FF4500/FFFFFF?text=Yoga+Mat" 
  },
  { 
    id: 8, 
    name: "Noise-Cancelling Headphones", 
    category: "Electronics", 
    price: 149.99, 
    isNew: true,
    imageUrl: "https://placehold.co/400x400/1F2937/FFFFFF?text=Headphones" 
  },
  { 
    id: 9, 
    name: "Classic Notebook Set", 
    category: "Stationery", 
    price: 19.99, 
    isNew: true,
    imageUrl: "https://placehold.co/400x400/f3f4f6/1F2937?text=Notebook" 
  },
  { 
    id: 10, 
    name: "Wireless Mouse", 
    category: "Electronics", 
    price: 25.50, 
    isNew: false,
    imageUrl: "https://placehold.co/400x400/FF4500/FFFFFF?text=Mouse" 
  },
];

// --- Product Card Component ---
const NewProductCard = ({ product }) => (
    // Card structure: Slightly stronger shadow, more dynamic hover motion
    <div 
        className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 ease-out transform hover:scale-[1.03] hover:shadow-2xl relative group"
    >
        
        {/* Product Image Container: Zoom on hover */}
        <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
            <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="object-cover w-full h-full transition duration-500 transform group-hover:scale-110"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/e5e7eb/6b7280?text=Product"; }}
            />
            
            {/* Wishlist Button (Always visible now, but subtle) */}
            <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-gray-400 transition duration-300 hover:text-[#FF4500] hover:shadow-lg">
                <Heart className="w-4 h-4" />
            </button>
            
            {/* "NEW" Badge (More impactful tab shape) */}
            {product.isNew && (
                <div 
                    className="absolute top-0 left-0 px-4 py-1 text-xs font-bold uppercase text-white shadow-md rounded-br-lg"
                    style={{ backgroundColor: COLOR_ORANGERED }}
                >
                    Fresh!
                </div>
            )}
        </div>

        {/* Product Details and CTA Bar */}
        <div className="p-4 pb-0 flex flex-col items-start">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">{product.category}</p>
            <h3 className="text-base font-bold text-[#1F2937] truncate w-full mb-1">{product.name}</h3>
        </div>

        {/* Price and Add to Cart Bar (Bold Contrast) */}
        <div className="flex justify-between items-center w-full mt-3">
            {/* Price (Larger, Orangered Accent) */}
            <p className="text-2xl font-extrabold px-4" style={{ color: COLOR_ORANGERED }}>
                ${product.price.toFixed(2)}
            </p>

            {/* Add to Cart Button (Highly visible, full-width accent) */}
            <button 
                className="flex items-center justify-center gap-1 bg-[#1F2937] text-white font-semibold py-3 px-4 shadow-inner transition duration-300 transform hover:bg-[#FF4500] hover:shadow-2xl rounded-tl-xl"
            >
                <Plus className="w-4 h-4" />
                <ShoppingCart className="w-4 h-4" />
            </button>
        </div>
    </div>
);

// --- Main New Arrivals Component ---
function MarketC() {
    return (
        // Added decorative background element for visual depth
        <div className="w-full bg-white flex justify-center py-20 px-4 relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
            
            {/* Decorative Background Shape 1 (Soft orangered large circle) */}
            <div 
                className="absolute top-0 right-0 w-96 h-96 bg-[#FF4500] opacity-5 rounded-full filter blur-3xl" 
                aria-hidden="true"
            ></div>
            {/* Decorative Background Shape 2 (Small black square) */}
            <div 
                className="absolute bottom-1/4 left-0 w-32 h-32 bg-[#1F2937] opacity-5 transform rotate-45 filter blur-2xl" 
                aria-hidden="true"
            ></div>

            <div className="max-w-7xl w-full relative z-10">
                
                {/* --- Section Header (More subtext and stronger CTA contrast) --- */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold tracking-tight" style={{ color: COLOR_BLACK }}>
                        <Zap className="w-8 h-8 inline-block mr-2 text-[#FF4500]" />
                        <span className="text-gray-500 font-light">New In:</span> <span style={{ color: COLOR_ORANGERED }}>Today's Drops</span>
                    </h2>
                    <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
                        We're constantly updating our catalog. Discover the limited edition electronics, sustainable fashion, and premium beauty products added in the last 24 hours.
                    </p>
                    <button 
                        className="mt-6 px-8 py-3 text-base font-bold rounded-full text-white transition duration-200 shadow-xl hover:shadow-2xl transform hover:translate-y-0.5 tracking-wider"
                        style={{ backgroundColor: COLOR_BLACK }}
                    >
                        Explore the Full Collection
                    </button>
                </div>

                {/* --- Product Grid --- */}
                {/* Grid now perfectly fits the 10 products in 2 rows on large screens */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                    {newArrivals.map((product) => (
                        <NewProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default MarketC;