import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaTrash, FaStore, FaArrowRight } from 'react-icons/fa';

// Mock data to demonstrate the layout
const initialWishlistItems = [
  {
    id: 1,
    name: "Wireless Noise Cancelling Headphones",
    price: 299.99,
    vendor: "AudioTech World",
    image: "https://via.placeholder.com/300",
    inStock: true,
  },
  {
    id: 2,
    name: "Ergonomic Office Chair - Mesh",
    price: 149.50,
    vendor: "Home Office Depot",
    image: "https://via.placeholder.com/300",
    inStock: true,
  },
  {
    id: 3,
    name: "Mechanical Gaming Keyboard RGB",
    price: 89.99,
    vendor: "GamerGear",
    image: "https://via.placeholder.com/300",
    inStock: false, // Example of out of stock
  },
  {
    id: 4,
    name: "4K Monitor 27-inch Display",
    price: 340.00,
    vendor: "Visionary Tech",
    image: "https://via.placeholder.com/300",
    inStock: true,
  },
];

function Wishlist() {
  const [items, setItems] = useState(initialWishlistItems);

  // Styles derived from your Terms.js
  const mainColorText = "text-[#FF4500]"; 
  const mainColorBg = "bg-[#FF4500]";
  const textDark = "text-gray-900";

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAddToCart = (id) => {
    console.log(`Added item ${id} to cart`);
    // Add logic to move to cart
  };

  // --- Empty State Component ---
  if (items.length === 0) {
    return (
      <div className="w-full min-h-screen bg-white font-sans flex flex-col items-center justify-center p-4">
        <div className="bg-gray-50 p-10 rounded-2xl text-center max-w-lg shadow-sm border border-gray-100">
          <FaHeart className={`mx-auto mb-6 text-gray-300`} size={80} />
          <h2 className={`text-3xl font-bold mb-3 ${textDark}`}>Your wishlist is empty</h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything to your wishlist yet. Explore our marketplace to find items you love.
          </p>
          <button className={`px-8 py-3 ${mainColorBg} text-white font-bold rounded-full hover:bg-red-700 transition duration-300 shadow-md flex items-center gap-2 mx-auto`}>
            Start Shopping <FaArrowRight />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* --- Header Banner (Matches Terms.js) --- */}
      <section className="bg-gray-100 py-12 px-4 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-black mb-2 ${textDark} flex items-center gap-4`}>
            <FaHeart className={mainColorText} size={40} />
            My Wishlist
          </h1>
          <p className="text-lg text-gray-600">
            {items.length} {items.length === 1 ? 'item' : 'items'} saved for later.
          </p>
        </div>
      </section>

      {/* --- Wishlist Grid Layout --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {items.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              
              {/* Product Image Area */}
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                 {/* Image placeholder */}
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                 
                 {/* Remove Button (Absolute top right) */}
                 <button 
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-600 transition"
                    title="Remove from wishlist"
                 >
                   <FaTrash size={14} />
                 </button>
              </div>

              {/* Content Area */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Vendor Name */}
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                  <FaStore /> {item.vendor}
                </div>

                {/* Product Title */}
                <h3 className={`text-lg font-bold ${textDark} mb-2 leading-tight line-clamp-2`}>
                  {item.name}
                </h3>

                {/* Price */}
                <div className={`text-2xl font-black ${mainColorText} mb-4`}>
                  ${item.price.toFixed(2)}
                </div>

                {/* Spacer to push buttons to bottom */}
                <div className="flex-grow"></div>

                {/* Stock Status & Actions */}
                <div className="pt-4 border-t border-gray-100">
                  {item.inStock ? (
                    <button 
                      onClick={() => handleAddToCart(item.id)}
                      className={`w-full py-3 rounded-lg font-bold text-white shadow-md transition duration-200 flex items-center justify-center gap-2
                        ${mainColorBg} hover:bg-red-700`}
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                  ) : (
                    <button 
                      disabled
                      className="w-full py-3 bg-gray-200 text-gray-500 rounded-lg font-bold cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Wishlist