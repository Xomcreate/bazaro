import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// --- Home Appliances Product Data ---
const applianceProducts = [
  { id: 1, name: 'Smart Refrigerator Samsung 320L', price: '₦920,000', oldPrice: '₦990,000', brand: 'Samsung', imageUrl: '/Images/product-placeholder-17.jpg' },
  { id: 2, name: 'Robot Vacuum Cleaner', price: '₦95,000', oldPrice: '₦110,000', brand: 'iRobot', imageUrl: '/Images/product-placeholder-9.jpg' },
  { id: 3, name: 'Premium Soundbar', price: '₦150,000', oldPrice: '₦170,000', brand: 'Sony', imageUrl: '/Images/product-placeholder-18.jpg' },
  { id: 4, name: 'Smart Home Hub', price: '₦30,000', oldPrice: '₦35,000', brand: 'Google', imageUrl: '/Images/product-placeholder-13.jpg' },
  { id: 5, name: 'Microwave Oven 25L', price: '₦60,000', oldPrice: '₦70,000', brand: 'LG', imageUrl: '/Images/product-placeholder-19.jpg' },
  { id: 6, name: 'Air Conditioner 1.5HP', price: '₦250,000', oldPrice: '₦270,000', brand: 'Samsung', imageUrl: '/Images/product-placeholder-20.jpg' },
  { id: 7, name: 'Electric Kettle', price: '₦8,500', oldPrice: '₦10,000', brand: 'Philips', imageUrl: '/Images/product-placeholder-21.jpg' },
  { id: 8, name: 'Blender & Juicer Set', price: '₦20,000', oldPrice: '₦25,000', brand: 'Kenwood', imageUrl: '/Images/product-placeholder-22.jpg' },
  { id: 9, name: 'Rice Cooker 1.8L', price: '₦15,000', oldPrice: '₦18,000', brand: 'Panasonic', imageUrl: '/Images/product-placeholder-23.jpg' },
  { id: 10, name: 'Dishwasher', price: '₦320,000', oldPrice: '₦350,000', brand: 'Bosch', imageUrl: '/Images/product-placeholder-24.jpg' },
  { id: 11, name: 'Coffee Maker', price: '₦18,500', oldPrice: '₦22,000', brand: 'Breville', imageUrl: '/Images/product-placeholder-25.jpg' },
  { id: 12, name: 'Electric Grill', price: '₦12,000', oldPrice: '₦15,000', brand: 'Tefal', imageUrl: '/Images/product-placeholder-26.jpg' },
  { id: 13, name: 'Water Purifier', price: '₦85,000', oldPrice: '₦95,000', brand: 'LG', imageUrl: '/Images/product-placeholder-27.jpg' },
  { id: 14, name: 'Hair Dryer', price: '₦6,500', oldPrice: '₦8,000', brand: 'Philips', imageUrl: '/Images/product-placeholder-28.jpg' },
  { id: 15, name: 'Portable Heater', price: '₦10,500', oldPrice: '₦12,000', brand: 'DeLonghi', imageUrl: '/Images/product-placeholder-29.jpg' },
  { id: 16, name: 'Induction Cooker', price: '₦25,000', oldPrice: '₦28,000', brand: 'Philips', imageUrl: '/Images/product-placeholder-30.jpg' },
  { id: 17, name: 'Ceiling Fan', price: '₦35,000', oldPrice: '₦40,000', brand: 'LG', imageUrl: '/Images/product-placeholder-31.jpg' },
  { id: 18, name: 'Smart LED TV 55"', price: '₦480,000', oldPrice: '₦520,000', brand: 'Samsung', imageUrl: '/Images/product-placeholder-32.jpg' },
  { id: 19, name: 'Washing Machine Front Load', price: '₦220,000', oldPrice: '₦250,000', brand: 'LG', imageUrl: '/Images/product-placeholder-33.jpg' },
  { id: 20, name: 'Dehumidifier', price: '₦65,000', oldPrice: '₦70,000', brand: 'Sharp', imageUrl: '/Images/product-placeholder-34.jpg' },
];

const brands = [...new Set(applianceProducts.map(p => p.brand))].sort();

// --- Animated Appliance Card ---
const AnimatedApplianceCard = ({ product, handleAddToCart, addingToCartId, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  const animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6';
  const delayStyle = isVisible ? { transitionDelay: `${index * 50}ms` } : {};

  return (
    <Link
      to={`/product-detail/${product.id}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div
        ref={ref}
        style={delayStyle}
        className={`group bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 overflow-hidden flex flex-col ${animationClasses}`}
      >
        <div className="w-full h-36 sm:h-40 md:h-48 flex items-center justify-center bg-gray-50 overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover p-2 group-hover:scale-[1.03] transition duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/f3f4f6/9ca3af?text=Image+Missing"; }}
          />
        </div>
        <div className="p-3 flex flex-col grow">
          <h3 className="text-sm font-medium text-black mb-1 grow">{product.name.length > 60 ? product.name.substring(0, 60) + '...' : product.name}</h3>
          <div className="my-2">
            {product.oldPrice && <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>}
            <p className="text-xl font-extrabold text-orangered">{product.price}</p>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); handleAddToCart(product.id); }}
            className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2 ${addingToCartId === product.id ? 'btn-orangered animate-pulse' : 'bg-black hover:btn-orangered'}`}
          >
            {addingToCartId === product.id ? 'ADDING...' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </Link>
  );
};

// --- Appliances Page Full Width ---
function Appliances() {
  const [addingToCartId, setAddingToCartId] = useState(null);

  const handleAddToCart = (id) => {
    setAddingToCartId(id);
    setTimeout(() => console.log(`Product ${id} added to cart.`), 200);
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
              {brand} <span className="text-xs text-gray-400">({applianceProducts.filter(p => p.brand === brand).length})</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen w-full">
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

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 pb-4 border-b border-gray-200 relative">
          <div className="flex items-start gap-4">
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm shrink-0">
              HOME APPLIANCES
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Discover <span className="text-orangered">Home Appliances</span>
              </h1>
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded">
                High-quality home appliances to simplify everyday life and elevate your home experience.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span><strong className="text-black">{applianceProducts.length}</strong> products</span>
                <span className="flex items-center gap-1 text-orangered">Smart & Efficient</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <BrandFilter brands={brands} />
          </div>
        </header>

        <main className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {applianceProducts.map((product, index) => (
              <AnimatedApplianceCard 
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

export default Appliances;
