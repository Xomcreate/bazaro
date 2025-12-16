// File: src/CategoryComponets/Phone.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// --- Phone & Tablet Product Data ---
const phoneProducts = [
  { id: 1, name: 'iPhone 15 Pro Max, 256GB', price: '₦950,000', oldPrice: '₦1,050,000', brand: 'Apple', imageUrl: '/Images/phone-1.jpg' },
  { id: 2, name: 'Samsung Galaxy S23 Ultra', price: '₦850,000', oldPrice: '₦920,000', brand: 'Samsung', imageUrl: '/Images/phone-2.jpg' },
  { id: 3, name: 'iPad Pro 12.9"', price: '₦1,200,000', oldPrice: '₦1,300,000', brand: 'Apple', imageUrl: '/Images/phone-3.jpg' },
  { id: 4, name: 'Samsung Galaxy Tab S8', price: '₦650,000', oldPrice: '₦700,000', brand: 'Samsung', imageUrl: '/Images/phone-4.jpg' },
  { id: 5, name: 'Xiaomi 13 Ultra', price: '₦450,000', oldPrice: '₦500,000', brand: 'Xiaomi', imageUrl: '/Images/phone-5.jpg' },
];

export const phoneItems = phoneProducts; // optional export

const brands = [...new Set(phoneProducts.map(p => p.brand))].sort();

// --- Animated Product Card ---
const AnimatedProductCard = ({ product, handleAddToCart, addingToCartId, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  const animationClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";
  const delayStyle = isVisible ? { transitionDelay: `${index * 50}ms`, transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' } : {};

  return (
    <Link
      to={`/product-detail/${product.id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div ref={cardRef} style={delayStyle} className={`group bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden flex flex-col ${animationClasses}`}>
        <div className="w-full h-36 sm:h-40 md:h-48 overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover p-2 group-hover:scale-[1.03] transition duration-300" />
        </div>
        <div className="p-3 flex flex-col grow">
          <h3 className="text-sm font-medium text-black mb-1 grow">{product.name.length > 60 ? product.name.substring(0, 60) + "..." : product.name}</h3>
          <div className="my-2">
            {product.oldPrice && <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>}
            <p className="text-xl font-extrabold text-orangered">{product.price}</p>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); handleAddToCart(product.id); }}
            className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2 ${addingToCartId === product.id ? "btn-orangered animate-pulse" : "bg-black hover:btn-orangered"}`}
            aria-pressed={addingToCartId === product.id}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </Link>
  );
};

// --- Phone Component ---
function Phone() {
  const [addingToCartId, setAddingToCartId] = useState(null);

  const handleAddToCart = (productId) => {
    setAddingToCartId(productId);
    setTimeout(() => console.log(`Product ${productId} added to cart.`), 200);
    setTimeout(() => setAddingToCartId(null), 500);
  };

  const BrandFilter = ({ brands }) => (
    <div className="py-2 px-4 sm:px-6 lg:px-8">
      <h3 className="text-lg font-bold mb-3 text-black">Filter by Brand:</h3>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center cursor-pointer hover:text-orangered transition">
            <input type="checkbox" className="h-4 w-4 text-orangered border-gray-300 rounded focus:ring-orangered" />
            <span className="ml-2 text-sm font-medium text-gray-700 hover:text-black">
              {brand} <span className="text-xs text-gray-400">({phoneProducts.filter(p => p.brand === brand).length})</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <style>{`
        .bg-orangered { background-color: orangered; }
        .text-orangered { color: orangered; }
        .ring-orangered:focus { box-shadow: 0 0 0 4px rgba(255,69,0,0.15); outline: none; }
        .btn-orangered { background: orangered; }
        .btn-orangered:hover { filter: brightness(0.95); }
        .decor-accent { background: linear-gradient(90deg, rgba(255,69,0,0.08), rgba(255,140,0,0.04)); border-left: 4px solid rgba(255,69,0,0.12); }
      `}</style>

      <div className="py-8">
        <header className="mb-8 pb-4 relative border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <svg className="absolute right-4 top-0 opacity-10 w-40 h-40 pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="20" r="30" fill="orangered" />
            </svg>
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm shrink-0">
                PHONES & TABLETS
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                  Discover Top <span className="text-orangered">Phones & Tablets</span>
                </h1>
                <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded">
                  Explore smartphones, tablets, and accessories — curated for performance, style, and value.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <strong className="text-black">{phoneProducts.length}</strong> products
                  </span>
                  <span className="flex items-center gap-2">Free shipping on select items</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <BrandFilter brands={brands} />
          </div>
        </header>

        <main className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-4 border-b pb-2">
            Featured Phones & Tablets
          </h2>
          <div className="mb-4 text-gray-600">
            Showing 1 - {phoneProducts.length} of {phoneProducts.length} results
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {phoneProducts.map((product, index) => (
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

export default Phone;
