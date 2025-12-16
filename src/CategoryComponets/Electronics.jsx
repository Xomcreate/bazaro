// File: src/CategoryComponets/Electronics.jsx
import React, { useState, useEffect, useRef } from "react"; 

// --- Product Data (Same as before) ---
const products = [
  { id: 1, name: 'HP Laptop 14-ep0196nia, 14", Intel Core i3, 13th gen...', price: '₦465,148', oldPrice: '₦514,193', brand: 'HP', imageUrl: '/Images/logo.jpeg' },
  { id: 2, name: 'Ultra HD Smart TV 65"', price: '₦350,000', oldPrice: '₦380,000', brand: 'Samsung', imageUrl: '/Images/product-placeholder-2.jpg' },
  { id: 3, name: 'Noise Cancelling Headphones', price: '₦55,000', oldPrice: '₦62,500', brand: 'Sony', imageUrl: '/Images/product-placeholder-3.jpg' },
  { id: 4, name: 'HP 201A Magenta Original Toner Cartridge', price: '₦110,450', oldPrice: '₦157,000', brand: 'HP', imageUrl: '/Images/product-placeholder-4.jpg' },
  { id: 5, name: 'Wireless Gaming Mouse Pro', price: '₦18,500', oldPrice: '₦21,000', brand: 'Logitech', imageUrl: '/Images/product-placeholder-5.jpg' },
  { id: 6, name: '4K Action Camera', price: '₦72,000', oldPrice: '₦85,000', brand: 'GoPro', imageUrl: '/Images/product-placeholder-6.jpg' },
  { id: 7, name: 'Smartwatch with Heart Rate', price: '₦40,000', oldPrice: '₦45,000', brand: 'Apple', imageUrl: '/Images/product-placeholder-7.jpg' },
  { id: 8, name: 'External SSD 1TB USB-C', price: '₦68,000', oldPrice: '₦75,000', brand: 'SanDisk', imageUrl: '/Images/product-placeholder-8.jpg' },
  { id: 9, name: 'Robot Vacuum Cleaner', price: '₦95,000', oldPrice: '₦110,000', brand: 'iRobot', imageUrl: '/Images/product-placeholder-9.jpg' },
  { id: 10, name: 'Power Bank 20000mAh', price: '₦12,000', oldPrice: '₦14,500', brand: 'Oraimo', imageUrl: '/Images/product-placeholder-10.jpg' },
  { id: 11, name: 'Ergonomic Office Monitor 27"', price: '₦80,000', oldPrice: '₦90,000', brand: 'Samsung', imageUrl: '/Images/product-placeholder-11.jpg' },
  { id: 12, name: 'Professional DSLR Camera', price: '₦450,000', oldPrice: '₦500,000', brand: 'Sony', imageUrl: '/Images/product-placeholder-12.jpg' },
  { id: 13, name: 'Smart Home Hub', price: '₦30,000', oldPrice: '₦35,000', brand: 'Google', imageUrl: '/Images/product-placeholder-13.jpg' },
  { id: 14, name: 'Wireless Charging Pad', price: '₦9,500', oldPrice: '₦11,000', brand: 'GNLD', imageUrl: '/Images/product-placeholder-14.jpg' },
  { id: 15, name: 'Portable Projector Mini', price: '₦60,000', oldPrice: '₦65,000', brand: 'Epson', imageUrl: '/Images/product-placeholder-15.jpg' },
  { id: 16, name: 'Gaming Laptop 15"', price: '₦780,000', oldPrice: '₦850,000', brand: 'HP', imageUrl: '/Images/product-placeholder-16.jpg' },
  { id: 17, name: 'Smart Refrigerator', price: '₦920,000', oldPrice: '₦990,000', brand: 'Samsung', imageUrl: '/Images/product-placeholder-17.jpg' },
  { id: 18, name: 'Premium Soundbar', price: '₦150,000', oldPrice: '₦170,000', brand: 'Sony', imageUrl: '/Images/product-placeholder-18.jpg' },
  { id: 19, name: 'HP Laptop 14-ep0195nia, N-series (N100)...', price: '₦357,465', oldPrice: '₦400,000', brand: 'HP', imageUrl: '/Images/product-placeholder-19.jpg' },
  { id: 20, name: 'Tablet 10.2" Wi-Fi', price: '₦190,000', oldPrice: '₦210,000', brand: 'Apple', imageUrl: '/Images/product-placeholder-20.jpg' },
];

const brands = [...new Set(products.map(p => p.brand))].sort();

export const electronicsProducts = products;

// --- REVISED ANIMATION COMPONENT FOR REPEATING ANIMATION ---
const AnimatedProductCard = ({ product, handleAddToCart, addingToCartId, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    // Use Intersection Observer to detect when the card enters/leaves the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // IMPORTANT CHANGE: Set isVisible based on intersection state.
                // If it's intersecting (visible), set to true (animate in).
                // If it's NOT intersecting (scrolled out), set to false (reset state for next animation).
                setIsVisible(entry.isIntersecting);
                
                // *** We no longer use observer.unobserve(entry.target); ***
                // This allows the element to be observed perpetually for re-entry.
            },
            {
                root: null, 
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% of the item is visible
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // Animation classes for a subtle slide-up/fade-in effect
    const animationClasses = isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-6'; // Reset state when out of view

    // Calculate a stagger delay based on the index (Stagger is applied only when appearing)
    const delayStyle = isVisible ? {
        transitionDelay: `${index * 50}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    } : {};


    return (
        <div 
          ref={cardRef} 
          key={product.id} 
          style={delayStyle} 
          className={`group bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden flex flex-col ${animationClasses}`} 
        >
          {/* Product Image Area */}
          <div className="w-full h-36 sm:h-40 md:h-48 overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover p-2 group-hover:scale-[1.03] transition duration-300" 
            />
          </div>

          {/* Product Info Area */}
          <div className="p-3 flex flex-col grow">
            <h3 className="text-sm font-medium text-black mb-1 grow">
              {product.name.length > 60 
                ? product.name.substring(0, 60) + '...' 
                : product.name}
            </h3>
            
            {/* Price Block */}
            <div className="my-2">
              <p className="text-xs text-gray-500 line-through">
                  {product.oldPrice}
              </p>
              {/* ORANGERED PRICE */}
              <p className="text-xl font-extrabold text-orangered">
                  {product.price}
              </p>
            </div>

            {/* ADD TO CART BUTTON */}
            <button
              onClick={(e) => {
                  e.stopPropagation(); 
                  handleAddToCart(product.id);
              }}
              className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2
                ${addingToCartId === product.id ? 'btn-orangered animate-pulse' : 'bg-black hover:btn-orangered'}
              `}
              aria-pressed={addingToCartId === product.id}
            >
              {/* small cart icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="20" r="1" fill="white"/>
                <circle cx="18" cy="20" r="1" fill="white"/>
              </svg>

              {addingToCartId === product.id ? 'ADDING...' : 'ADD TO CART'}
            </button>
          </div>
        </div>
    );
};
// --- END REVISED ANIMATION COMPONENT ---


function Electronics() {
  const [addingToCartId, setAddingToCartId] = React.useState(null);

  const handleAddToCart = (productId) => {
    setAddingToCartId(productId);

    setTimeout(() => {
      console.log(`Product ${productId} added to cart.`);
    }, 200);

    setTimeout(() => {
      setAddingToCartId(null);
    }, 500);
  };

  const BrandFilter = ({ brands }) => (
    <div className="py-2 px-4 sm:px-6 lg:px-8"> 
      <h3 className="text-lg font-bold mb-3 text-black">Filter by Brand:</h3>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center cursor-pointer hover:text-orangered transition">
            <input 
              type="checkbox" 
              className="h-4 w-4 text-orangered border-gray-300 rounded focus:ring-orangered" 
            />
            <span className="ml-2 text-sm font-medium text-gray-700 hover:text-black">
              {brand} <span className="text-xs text-gray-400">({products.filter(p => p.brand === brand).length})</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Inline CSS for 'orangered' accents so we get the exact color */}
      <style>{`
        .bg-orangered { background-color: orangered; }
        .text-orangered { color: orangered; }
        .ring-orangered:focus { box-shadow: 0 0 0 4px rgba(255,69,0,0.15); outline: none; }
        .btn-orangered { background: orangered; }
        .btn-orangered:hover { filter: brightness(0.95); }
        .decor-accent { background: linear-gradient(90deg, rgba(255,69,0,0.08), rgba(255,140,0,0.04)); border-left: 4px solid rgba(255,69,0,0.12); }
      `}</style>

      {/* --- Main Content Area (Full width) --- */}
      <div className="py-8">
        
        {/* 1. Header/Writeup */}
        <header className="mb-8 pb-4 relative border-b border-gray-200">
          
          <div className="px-4 sm:px-6 lg:px-8"> 
            {/* Decorative floating SVG behind header (subtle) */}
            <svg className="absolute right-4 top-0 opacity-10 w-40 h-40 pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="20" r="30" fill="orangered" />
            </svg>

            <div className="flex items-start gap-4">
              {/* Ribbon badge */}
              <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z" fill="white" />
                </svg>
                ELECTRONICS
              </div>

              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                  Discover Top-Rated <span className="text-orangered">Electronics & Gadgets</span>
                </h1>
                <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded">
                  Explore laptops, TVs, audio gear, smart-home devices and accessories — all tested for performance and value.
                  Shop with confidence: curated picks, competitive prices, and secure checkout. Upgrade your life with the
                  latest tech — from everyday essentials to high-performance gear.
                </p>

                {/* small meta row */}
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <strong className="text-black">{products.length}</strong> products
                  </span>
                  <span className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-70"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/></svg>
                    Free shipping on select items
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* BRAND FILTER */}
          <div className="mt-6 border-t pt-4">
            <BrandFilter brands={brands} />
          </div>
        </header>

        {/* --- Product Grid --- */}
        <main className="w-full">
          
          {/* Subheading and results count container (with padding) */}
          <div className="px-4 sm:px-6 lg:px-8"> 
            <h2 className="text-2xl font-bold text-black mb-4 border-b pb-2">
              Featured Electronics & Gadgets
            </h2>

            <div className="mb-4 text-gray-600">
              Showing 1 - {products.length} of {products.length} results
            </div>
          </div>

          {/* Product Grid Container */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((product, index) => (
                 // RENDER THE NEW ANIMATED COMPONENT HERE
                <AnimatedProductCard 
                  key={product.id}
                  product={product}
                  handleAddToCart={handleAddToCart}
                  addingToCartId={addingToCartId}
                  index={index} 
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Electronics;