// File: src/CategoryComponets/Beauty.jsx
import React, { useState, useEffect, useRef } from "react";

// --- Beauty & Health Products ---
const beautyProducts = [
  { id: 1, name: "Vitamin C Serum 50ml - Brightening Formula", price: "₦5,500", oldPrice: "₦6,500", brand: "The Ordinary", imageUrl: "/Images/beauty-1.jpg" },
  { id: 2, name: "Organic Argan Oil Shampoo 400ml", price: "₦4,200", oldPrice: "₦5,000", brand: "L'Oreal", imageUrl: "/Images/beauty-2.jpg" },
  { id: 3, name: "Hydro Boost Facial Moisturizer w/ SPF 30", price: "₦6,000", oldPrice: "₦7,000", brand: "Neutrogena", imageUrl: "/Images/beauty-3.jpg" },
  { id: 4, name: "Professional Keratin Hair Straightener", price: "₦12,500", oldPrice: "₦14,000", brand: "Remington", imageUrl: "/Images/beauty-4.jpg" },
  { id: 5, name: "Body Lotion 200ml - Shea Butter", price: "₦3,800", oldPrice: "₦4,500", brand: "Nivea", imageUrl: "/Images/beauty-5.jpg" },
  { id: 6, name: "Regenerist Retinol Night Cream", price: "₦8,900", oldPrice: "₦10,000", brand: "Olay", imageUrl: "/Images/beauty-6.jpg" },
  { id: 7, name: "Tea Tree Anti-Acne Face Wash", price: "₦3,100", oldPrice: "₦3,500", brand: "Garnier", imageUrl: "/Images/beauty-7.jpg" },
  { id: 8, name: "Repair Deep Conditioning Masque", price: "₦5,900", oldPrice: "₦6,500", brand: "Herbal Essences", imageUrl: "/Images/beauty-8.jpg" },
  { id: 9, name: "Multi-Molecular Hyaluronic Acid Serum", price: "₦7,200", oldPrice: "₦8,000", brand: "The Ordinary", imageUrl: "/Images/beauty-9.jpg" },
  { id: 10, name: "Volume & Thickness Extreme Hairspray", price: "₦2,900", oldPrice: "₦3,300", brand: "L'Oreal", imageUrl: "/Images/beauty-10.jpg" },
  { id: 11, name: "Rapid Clear Acne Spot Treatment", price: "₦4,900", oldPrice: "₦5,500", brand: "Neutrogena", imageUrl: "/Images/beauty-11.jpg" },
  { id: 12, name: "Ultimate Anti-Aging Eye Cream", price: "₦11,500", oldPrice: "₦13,000", brand: "Olay", imageUrl: "/Images/beauty-12.jpg" },
  { id: 13, name: "Pure Active Micellar Cleansing Water", price: "₦2,500", oldPrice: "₦3,000", brand: "Garnier", imageUrl: "/Images/beauty-13.jpg" },
  { id: 14, name: "Moroccan Argan Oil Hair Serum", price: "₦4,000", oldPrice: "₦4,800", brand: "Herbal Essences", imageUrl: "/Images/beauty-14.jpg" },
  { id: 15, name: "Makeup Remover Wipes (100ct) - Fragrance Free", price: "₦1,900", oldPrice: "₦2,200", brand: "Neutrogena", imageUrl: "/Images/beauty-15.jpg" },
  { id: 16, name: "Intense Healing Nourishing Hand Cream", price: "₦1,500", oldPrice: "₦1,800", brand: "Nivea", imageUrl: "/Images/beauty-16.jpg" },
  { id: 17, name: "Infallible Foundation SPF 15 - Medium Beige", price: "₦6,800", oldPrice: "₦7,500", brand: "L'Oreal", imageUrl: "/Images/beauty-17.jpg" },
  { id: 18, name: "AHA 30% + BHA 2% Peeling Solution", price: "₦9,500", oldPrice: "₦10,500", brand: "The Ordinary", imageUrl: "/Images/beauty-18.jpg" },
  { id: 19, name: "Refresh Body Wash - Ocean Fresh", price: "₦3,200", oldPrice: "₦3,700", brand: "Nivea", imageUrl: "/Images/beauty-19.jpg" },
  { id: 20, name: "Invisible Dry Shampoo - Volumizing", price: "₦4,100", oldPrice: "₦4,600", brand: "Garnier", imageUrl: "/Images/beauty-20.jpg" },
];

const brands = [...new Set(beautyProducts.map(p => p.brand))].sort();

// --- Animated Product Card ---
const AnimatedProductCard = ({ product, handleAddToCart, addingToCartId, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
  }, []);

  const animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';
  const delayStyle = isVisible ? { transitionDelay: `${index * 50}ms` } : {};

  return (
    <div 
      ref={cardRef} 
      style={delayStyle} 
      className={`group bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden flex flex-col ${animationClasses}`}
    >
      <div className="w-full h-36 sm:h-40 md:h-48 overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover p-2 group-hover:scale-[1.03] transition duration-300" />
      </div>
      <div className="p-3 flex flex-col grow">
        <h3 className="text-sm font-medium text-black mb-1 grow">
          {product.name.length > 60 ? product.name.substring(0, 60) + '...' : product.name}
        </h3>
        <div className="my-2">
          <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>
          <p className="text-xl font-extrabold text-orangered">{product.price}</p>
        </div>
        <button
          onClick={() => handleAddToCart(product.id)}
          className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2
            ${addingToCartId === product.id ? 'btn-orangered animate-pulse' : 'bg-black hover:btn-orangered'}`}
          aria-pressed={addingToCartId === product.id}
        >
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

// --- Brand Filter Component ---
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
            {brand} <span className="text-xs text-gray-400">({beautyProducts.filter(p => p.brand === brand).length})</span>
          </span>
        </label>
      ))}
    </div>
  </div>
);

function Beauty() {
  const [addingToCartId, setAddingToCartId] = useState(null);

  const handleAddToCart = (productId) => {
    setAddingToCartId(productId);
    setTimeout(() => console.log(`Product ${productId} added to cart.`), 200);
    setTimeout(() => setAddingToCartId(null), 500);
  };

  return (
    <div className="bg-white min-h-screen">
      <style>{`
        .bg-orangered { background-color: orangered; }
        .text-orangered { color: orangered; }
        .ring-orangered:focus { box-shadow: 0 0 0 4px rgba(255,69,0,0.15); outline: none; }
        .btn-orangered { background: orangered; }
        .btn-orangered:hover { filter: brightness(0.95); }
        .decor-accent { background: linear-gradient(90deg, rgba(255,69,0,0.08), rgba(255,140,0,0.04)); border-left: 4px solid orangered; }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.8} }
        .animate-pulse { animation: pulse 0.5s cubic-bezier(0.4,0,0.6,1) infinite; }
      `}</style>

      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <header className="mb-8 pb-4 relative border-b border-gray-200">
          <div className="flex items-start gap-4">
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-md shrink-0">
              BEAUTY & HEALTH
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Glow Up with <span className="text-orangered">Quality Care</span>
              </h1>
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded-lg">
                Discover premium skincare, hair products, and wellness essentials. Invest in your well-being with products trusted by experts.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <strong className="text-black">{beautyProducts.length}</strong> products
                </span>
                <span className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-orangered opacity-70"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/></svg>
                  Premium Care Products
                </span>
              </div>
            </div>
          </div>

          {/* Brand filter like Electronics */}
          <div className="mt-6 border-t pt-4">
            <BrandFilter brands={brands} />
          </div>
        </header>

        {/* Product Grid */}
        <main className="w-full">
          <h2 className="text-2xl font-bold text-black mb-4 border-b pb-2">
            All Beauty & Health Products
          </h2>
          <div className="mb-4 text-gray-600">
            Showing 1 - {beautyProducts.length} of {beautyProducts.length} results
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {beautyProducts.map((product, index) => (
              <AnimatedProductCard 
                key={product.id} 
                product={product} 
                handleAddToCart={handleAddToCart} 
                addingToCartId={addingToCartId} 
                index={index} 
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Beauty;
