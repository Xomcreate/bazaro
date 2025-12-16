// File: src/CategoryComponets/Automobile.jsx
import React, { useState, useEffect, useRef } from "react";

// --- Automobile Products ---
const automobileProducts = [
  { id: 1, name: "Car Air Freshener Pack", price: "₦1,500", oldPrice: "₦2,000", brand: "AutoZone", imageUrl: "/Images/auto-1.jpg" },
  { id: 2, name: "Car Seat Covers", price: "₦15,000", oldPrice: "₦18,000", brand: "ComfortRide", imageUrl: "/Images/auto-2.jpg" },
  { id: 3, name: "Motor Oil 5W-30", price: "₦5,000", oldPrice: "₦6,000", brand: "Castrol", imageUrl: "/Images/auto-3.jpg" },
  { id: 4, name: "Car Dashboard Camera", price: "₦25,000", oldPrice: "₦28,000", brand: "Xiaomi", imageUrl: "/Images/auto-4.jpg" },
  { id: 5, name: "Steering Wheel Cover", price: "₦7,500", oldPrice: "₦9,000", brand: "AutoZone", imageUrl: "/Images/auto-5.jpg" },
  { id: 6, name: "Car Vacuum Cleaner", price: "₦12,000", oldPrice: "₦15,000", brand: "CleanRide", imageUrl: "/Images/auto-6.jpg" },
  { id: 7, name: "Jump Starter 12V", price: "₦20,000", oldPrice: "₦23,000", brand: "BoostMax", imageUrl: "/Images/auto-7.jpg" },
  { id: 8, name: "Car Phone Holder", price: "₦3,500", oldPrice: "₦4,500", brand: "SmartGrip", imageUrl: "/Images/auto-8.jpg" },
  { id: 9, name: "LED Headlights Set", price: "₦18,000", oldPrice: "₦22,000", brand: "BrightAuto", imageUrl: "/Images/auto-9.jpg" },
  { id: 10, name: "Car Battery 12V", price: "₦45,000", oldPrice: "₦50,000", brand: "PowerRide", imageUrl: "/Images/auto-10.jpg" },
  { id: 11, name: "Alloy Wheel Rims", price: "₦85,000", oldPrice: "₦95,000", brand: "Speedster", imageUrl: "/Images/auto-11.jpg" },
  { id: 12, name: "Windshield Sun Shade", price: "₦5,500", oldPrice: "₦6,500", brand: "ShadePro", imageUrl: "/Images/auto-12.jpg" },
  { id: 13, name: "Car Polishing Kit", price: "₦12,500", oldPrice: "₦15,000", brand: "ShineMaster", imageUrl: "/Images/auto-13.jpg" },
  { id: 14, name: "Roof Rack Carrier", price: "₦40,000", oldPrice: "₦45,000", brand: "CarryAll", imageUrl: "/Images/auto-14.jpg" },
  { id: 15, name: "Car Jack & Toolkit", price: "₦18,500", oldPrice: "₦22,000", brand: "FixIt", imageUrl: "/Images/auto-15.jpg" },
  { id: 16, name: "Rearview Camera", price: "₦28,000", oldPrice: "₦32,000", brand: "Xiaomi", imageUrl: "/Images/auto-16.jpg" },
  { id: 17, name: "Car Alarm System", price: "₦32,000", oldPrice: "₦36,000", brand: "SafeRide", imageUrl: "/Images/auto-17.jpg" },
  { id: 18, name: "Car Floor Mats", price: "₦7,500", oldPrice: "₦9,000", brand: "ComfortRide", imageUrl: "/Images/auto-18.jpg" },
  { id: 19, name: "Tire Inflator Pump", price: "₦10,500", oldPrice: "₦12,500", brand: "AirMax", imageUrl: "/Images/auto-19.jpg" },
  { id: 20, name: "Windshield Wipers Set", price: "₦6,500", oldPrice: "₦8,000", brand: "BrightAuto", imageUrl: "/Images/auto-20.jpg" },
];

const brands = [...new Set(automobileProducts.map(p => p.brand))].sort();

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
        <h3 className="text-sm font-medium text-black mb-1 grow">{product.name.length>60?product.name.substring(0,60)+'...':product.name}</h3>
        <div className="my-2">
          <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>
          <p className="text-xl font-extrabold text-orangered">{product.price}</p>
        </div>
        <button 
          onClick={()=>handleAddToCart(product.id)}
          className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2 ${addingToCartId===product.id?'btn-orangered animate-pulse':'bg-black hover:btn-orangered'}`}
        >
          {addingToCartId===product.id?'ADDING...':'ADD TO CART'}
        </button>
      </div>
    </div>
  )
};

// --- Brand Filter Component ---
const BrandFilter = ({ brands }) => (
  <div className="py-2 px-4 sm:px-6 lg:px-8"> 
    <h3 className="text-lg font-bold mb-3 text-black">Filter by Brand:</h3>
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {brands.map((brand) => (
        <label key={brand} className="flex items-center cursor-pointer hover:text-orangered transition">
          <input type="checkbox" className="h-4 w-4 text-orangered border-gray-300 rounded focus:ring-orangered"/>
          <span className="ml-2 text-sm font-medium text-gray-700 hover:text-black">{brand} <span className="text-xs text-gray-400">({automobileProducts.filter(p => p.brand===brand).length})</span></span>
        </label>
      ))}
    </div>
  </div>
);

function Automobile() {
  const [addingToCartId, setAddingToCartId] = useState(null);

  const handleAddToCart = (id)=>{
    setAddingToCartId(id);
    setTimeout(()=>setAddingToCartId(null), 500);
    setTimeout(()=>console.log(`Product ${id} added to cart.`), 200);
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

      {/* Header */}
      <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
        <header className="mb-8 pb-4 border-b border-gray-200 relative">
          <div className="flex items-start gap-4">
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2">
              AUTOMOBILE
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Explore <span className="text-orangered">Automobile Products</span>
              </h1>
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded-lg">
                Essential car accessories and auto products to enhance comfort, safety, and performance.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span><strong className="text-black">{automobileProducts.length}</strong> products listed</span>
                <span className="flex items-center gap-1 text-orangered">Free shipping on select items</span>
              </div>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mt-6 border-t pt-4">
            <BrandFilter brands={brands} />
          </div>
        </header>

        {/* Product Grid */}
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 sm:px-6 lg:px-8">
          {automobileProducts.map((p,i)=>(
            <AnimatedProductCard key={p.id} product={p} handleAddToCart={handleAddToCart} addingToCartId={addingToCartId} index={i}/>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Automobile;
