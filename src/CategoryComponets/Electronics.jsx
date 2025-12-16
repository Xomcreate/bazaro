import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// --- Electronics Products ---
const products = [
  { id: 1, name: 'HP Laptop 14-ep0196nia, 14", Intel Core i3, 13th gen', price: '₦465,148', oldPrice: '₦514,193', brand: 'HP', imageUrl: '/Images/logo.jpeg' },
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
  { id: 19, name: 'HP Laptop 14-ep0195nia, N-series (N100)', price: '₦357,465', oldPrice: '₦400,000', brand: 'HP', imageUrl: '/Images/product-placeholder-19.jpg' },
  { id: 20, name: 'Tablet 10.2" Wi-Fi', price: '₦190,000', oldPrice: '₦210,000', brand: 'Apple', imageUrl: '/Images/product-placeholder-20.jpg' },
];

const brands = [...new Set(products.map(p => p.brand))].sort();

// --- Animated Product Card ---
const AnimatedProductCard = ({ product, handleAddToCart, addingToCartId, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
  }, []);

  const delayStyle = isVisible ? { transitionDelay: `${index * 50}ms` } : {};
  const animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';

  return (
    <Link
      to={`/product-detail/${product.id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div
        ref={cardRef}
        style={delayStyle}
        className={`group bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden flex flex-col ${animationClasses}`}
      >
        <div className="w-full h-36 sm:h-40 md:h-48 overflow-hidden shrink-0 bg-gray-50 flex items-center justify-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover p-2 group-hover:scale-[1.03] transition duration-300"
            onError={(e)=>{ e.target.onerror=null; e.target.src="https://placehold.co/400x300/f3f4f6/9ca3af?text=Image+Missing"; }}
          />
        </div>
        <div className="p-3 flex flex-col grow">
          <h3 className="text-sm font-medium text-black mb-1 grow">{product.name.length>60 ? product.name.substring(0,60)+'...' : product.name}</h3>
          <div className="my-2">
            <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>
            <p className="text-xl font-extrabold text-orangered">{product.price}</p>
          </div>
          <button
            onClick={(e)=>{ e.preventDefault(); handleAddToCart(product.id); }}
            className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2 ${addingToCartId===product.id?'btn-orangered animate-pulse':'bg-black hover:btn-orangered'}`}
          >
            {addingToCartId===product.id ? 'ADDING...' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </Link>
  );
};

// --- Brand Filter ---
const BrandFilter = ({ brands }) => (
  <div className="py-2 px-4 sm:px-6 lg:px-8">
    <h3 className="text-lg font-bold mb-3 text-black">Filter by Brand:</h3>
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {brands.map((brand) => (
        <label key={brand} className="flex items-center cursor-pointer hover:text-orangered transition">
          <input type="checkbox" className="h-4 w-4 text-orangered border-gray-300 rounded focus:ring-orangered"/>
          <span className="ml-2 text-sm font-medium text-gray-700 hover:text-black">
            {brand} <span className="text-xs text-gray-400">({products.filter(p => p.brand===brand).length})</span>
          </span>
        </label>
      ))}
    </div>
  </div>
);

// --- Electronics Page ---
function Electronics() {
  const [addingToCartId, setAddingToCartId] = useState(null);

  const handleAddToCart = (id) => {
    setAddingToCartId(id);
    setTimeout(() => console.log(`Product ${id} added to cart.`), 200);
    setTimeout(() => setAddingToCartId(null), 500);
  };

  return (
    <div className="bg-white min-h-screen">
      <style>{`
        .bg-orangered{background-color:orangered;}
        .text-orangered{color:orangered;}
        .ring-orangered:focus{box-shadow:0 0 0 4px rgba(255,69,0,0.15);outline:none;}
        .btn-orangered{background:orangered;}
        .btn-orangered:hover{filter:brightness(0.95);}
        .decor-accent{background:linear-gradient(90deg, rgba(255,69,0,0.08), rgba(255,140,0,0.04)); border-left:4px solid rgba(255,69,0,0.12);}
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.8} }
        .animate-pulse { animation: pulse 0.5s cubic-bezier(0.4,0,0.6,1) infinite; }
      `}</style>

      <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
        <header className="mb-8 pb-4 border-b border-gray-200 relative">
          <div className="flex items-start gap-4">
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2">
              ELECTRONICS
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Discover <span className="text-orangered">Electronics & Gadgets</span>
              </h1>
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded-lg">
                Explore laptops, TVs, audio gear, smart-home devices and accessories — all tested for performance and value.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span><strong className="text-black">{products.length}</strong> products listed</span>
                <span className="flex items-center gap-1 text-orangered">Free shipping on select items</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <BrandFilter brands={brands} />
          </div>
        </header>

        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-8">
          {products.map((p,i)=>(
            <AnimatedProductCard
              key={p.id}
              product={p}
              handleAddToCart={handleAddToCart}
              addingToCartId={addingToCartId}
              index={i}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default Electronics;
