import React, { useState } from 'react';

// Custom color variables for cleaner use:
const orangeredBg = 'bg-[#FF4500] hover:bg-[#E63E00]';
const orangeredText = 'text-[#FF4500]';

function Shopping() {
  // Mock Data
  const products = [
    { id: 1, name: 'Premium Wireless Headphones', price: 199.99, rating: 4.5, image: '🎧', inStock: true },
    { id: 2, name: 'Minimalist Leather Backpack', price: 75.50, rating: 4.8, image: '🎒', inStock: true },
    { id: 3, name: 'Smart Home LED Bulb Set', price: 35.00, rating: 4.2, image: '💡', inStock: true },
    { id: 4, name: 'Stainless Steel Travel Mug', price: 22.99, rating: 4.9, image: '☕', inStock: true },
    { id: 5, name: 'Ergonomic Desk Chair', price: 250.00, rating: 4.0, image: '🪑', inStock: false },
    { id: 6, name: 'Vintage Polaroid Camera', price: 120.00, rating: 4.7, image: '📸', inStock: true },
  ];

  const categories = ['Electronics', 'Fashion', 'Home Goods', 'Sports', 'Books'];
  const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D'];
  
  // State for responsive filter toggle
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header and Search */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-black">
            Featured Products
          </h1>
          <p className="text-lg text-gray-600">
            Browse our latest and most popular items.
          </p>
        </header>

        {/* Filter Toggle for Mobile */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`py-2 px-4 rounded-lg font-semibold text-white ${orangeredBg} flex items-center`}
          >
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            <span className="ml-2">{isFilterOpen ? '▲' : '▼'}</span>
          </button>
        </div>

        {/* Main Layout (Filters and Products) */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. Sidebar Filters */}
          <aside className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block bg-gray-50 p-6 rounded-lg shadow-inner h-fit`}>
            <h2 className="text-xl font-bold text-black mb-4 border-b pb-2">
              Filter By
            </h2>

            {/* Price Range Filter (Example) */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-2">Price Range</h3>
              <input type="range" min="0" max="500" className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${orangeredBg}`} />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>$0</span>
                <span>$500+</span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-2 border-t pt-4">Categories</h3>
              {categories.map((cat, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input type="checkbox" id={`cat-${index}`} className={`mr-2 w-4 h-4 ${orangeredText.replace('text', 'accent')} rounded`} />
                  <label htmlFor={`cat-${index}`} className="text-sm text-gray-700 hover:text-black cursor-pointer">
                    {cat}
                  </label>
                </div>
              ))}
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-2 border-t pt-4">Brands</h3>
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input type="checkbox" id={`brand-${index}`} className={`mr-2 w-4 h-4 ${orangeredText.replace('text', 'accent')} rounded`} />
                  <label htmlFor={`brand-${index}`} className="text-sm text-gray-700 hover:text-black cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </aside>

          {/* 2. Main Product Grid */}
          <main className="lg:w-3/4">
            
            {/* Sorting and Results Count */}
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-200">
                <p className="text-gray-600">Showing **6** of 1,245 results</p>
                <select className="p-2 border border-gray-300 rounded-lg text-sm focus:ring-1 focus:ring-[#FF4500]">
                    <option>Sort by: Popularity</option>
                    <option>Sort by: Price (Low to High)</option>
                    <option>Sort by: Price (High to Low)</option>
                    <option>Sort by: Newest</option>
                </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl"
                >
                  
                  {/* Image/Emoji Area */}
                  <div className={`flex justify-center items-center h-48 ${product.inStock ? 'bg-gray-100' : 'bg-red-50'}`}>
                    <span className="text-6xl">{product.image}</span>
                  </div>
                  
                  {/* Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black truncate mb-1" title={product.name}>
                      {product.name}
                    </h3>
                    <div className="flex items-center mb-3">
                        <span className={`text-sm font-bold mr-2 ${orangeredText}`}>★ {product.rating.toFixed(1)}</span>
                        <span className="text-xs text-gray-500">(120 reviews)</span>
                    </div>

                    <p className={`text-2xl font-bold mb-4 ${orangeredText}`}>
                      ${product.price.toFixed(2)}
                    </p>

                    {/* Action Button */}
                    {product.inStock ? (
                        <button
                          className={`w-full py-2 text-white font-bold rounded-lg transition duration-200 ease-in-out ${orangeredBg}`}
                        >
                          Add to Cart
                        </button>
                    ) : (
                        <button
                          className="w-full py-2 bg-gray-300 text-gray-600 font-bold rounded-lg cursor-not-allowed"
                          disabled
                        >
                          Out of Stock
                        </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center space-x-2">
                <a href="#" className="py-2 px-4 border border-gray-300 rounded-lg text-black hover:bg-gray-100">
                    &larr; Previous
                </a>
                <a href="#" className={`py-2 px-4 rounded-lg font-bold text-white ${orangeredBg}`}>
                    1
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 rounded-lg text-black hover:bg-gray-100">
                    2
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 rounded-lg text-black hover:bg-gray-100">
                    3
                </a>
                <a href="#" className="py-2 px-4 border border-gray-300 rounded-lg text-black hover:bg-gray-100">
                    Next &rarr;
                </a>
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
}

export default Shopping;