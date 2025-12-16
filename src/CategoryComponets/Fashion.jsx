import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// --- Fashion Product Data (20 items) ---
const fashionProducts = [
  { id: 1, name: "Men's Casual Shirt", price: "₦8,500", oldPrice: "₦10,000", brand: "Levi's", imageUrl: "/Images/fashion-1.jpg" },
  { id: 2, name: "Women's Maxi Dress", price: "₦12,000", oldPrice: "₦14,500", brand: "Zara", imageUrl: "/Images/fashion-2.jpg" },
  { id: 3, name: "Leather Handbag", price: "₦25,000", oldPrice: "₦30,000", brand: "Gucci", imageUrl: "/Images/fashion-3.jpg" },
  { id: 4, name: "Men's Sneakers", price: "₦18,500", oldPrice: "₦21,000", brand: "Nike", imageUrl: "/Images/fashion-4.jpg" },
  { id: 5, name: "Women's Sandals", price: "₦9,500", oldPrice: "₦11,000", brand: "H&M", imageUrl: "/Images/fashion-5.jpg" },
  { id: 6, name: "Denim Jacket", price: "₦15,000", oldPrice: "₦18,000", brand: "Levi's", imageUrl: "/Images/fashion-6.jpg" },
  { id: 7, name: "Sports Cap", price: "₦4,500", oldPrice: "₦5,000", brand: "Nike", imageUrl: "/Images/fashion-7.jpg" },
  { id: 8, name: "Women's Blouse", price: "₦7,500", oldPrice: "₦9,000", brand: "Zara", imageUrl: "/Images/fashion-8.jpg" },
  { id: 9, name: "Men's Trousers", price: "₦10,500", oldPrice: "₦12,500", brand: "H&M", imageUrl: "/Images/fashion-9.jpg" },
  { id: 10, name: "Evening Gown", price: "₦40,000", oldPrice: "₦45,000", brand: "Gucci", imageUrl: "/Images/fashion-10.jpg" },
  { id: 11, name: "Sneakers for Women", price: "₦18,000", oldPrice: "₦20,000", brand: "Adidas", imageUrl: "/Images/fashion-11.jpg" },
  { id: 12, name: "Men's Formal Shoes", price: "₦22,000", oldPrice: "₦25,000", brand: "Clarks", imageUrl: "/Images/fashion-12.jpg" },
  { id: 13, name: "Summer Hat", price: "₦6,500", oldPrice: "₦7,500", brand: "H&M", imageUrl: "/Images/fashion-13.jpg" },
  { id: 14, name: "Leather Belt", price: "₦5,500", oldPrice: "₦6,500", brand: "Gucci", imageUrl: "/Images/fashion-14.jpg" },
  { id: 15, name: "Women's Boots", price: "₦30,000", oldPrice: "₦35,000", brand: "Zara", imageUrl: "/Images/fashion-15.jpg" },
  { id: 16, name: "Men's Hoodie", price: "₦12,500", oldPrice: "₦15,000", brand: "Nike", imageUrl: "/Images/fashion-16.jpg" },
  { id: 17, name: "Backpack Bag", price: "₦10,000", oldPrice: "₦12,000", brand: "Levi's", imageUrl: "/Images/fashion-17.jpg" },
  { id: 18, name: "Women's Scarf", price: "₦3,500", oldPrice: "₦4,000", brand: "H&M", imageUrl: "/Images/fashion-18.jpg" },
  { id: 19, name: "Sunglasses", price: "₦15,000", oldPrice: "₦18,000", brand: "Gucci", imageUrl: "/Images/fashion-19.jpg" },
  { id: 20, name: "Sports Jacket", price: "₦20,000", oldPrice: "₦23,000", brand: "Adidas", imageUrl: "/Images/fashion-20.jpg" },
];

const brands = [...new Set(fashionProducts.map(p => p.brand))].sort();

// --- Animated Product Card ---
const AnimatedProductCard = ({ product, handleAddToCart, addingToCartId, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
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
          >
            {addingToCartId === product.id ? "ADDING..." : "ADD TO CART"}
          </button>
        </div>
      </div>
    </Link>
  );
};

// --- Fashion Component ---
function Fashion() {
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
              {brand} <span className="text-xs text-gray-400">({fashionProducts.filter(p => p.brand === brand).length})</span>
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
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.8} }
        .animate-pulse { animation: pulse 0.5s cubic-bezier(0.4,0,0.6,1) infinite; }
      `}</style>

      <div className="py-8">
        <header className="mb-8 pb-4 relative border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm shrink-0">
                FASHION
              </div>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                  Explore <span className="text-orangered">Fashion</span>
                </h1>
                <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded">
                  Trendy clothing, footwear, and accessories curated for style, comfort, and affordability.
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                  <span><strong className="text-black">{fashionProducts.length}</strong> products</span>
                  <span className="flex items-center gap-1 text-orangered">Free shipping on select items</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <BrandFilter brands={brands} />
          </div>
        </header>

        <main className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {fashionProducts.map((product, index) => (
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

export default Fashion;
