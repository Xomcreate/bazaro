import React, { useState, useEffect, useRef } from "react";

const sportsProducts = [
  { id: 1, name: "Football Nike Pro", price: "₦12,500", oldPrice: "₦15,000", brand: "Nike", imageUrl: "/Images/sports-1.jpg" },
  { id: 2, name: "Yoga Mat", price: "₦6,500", oldPrice: "₦8,000", brand: "Reebok", imageUrl: "/Images/sports-2.jpg" },
  { id: 3, name: "Dumbbell Set 20kg", price: "₦25,000", oldPrice: "₦28,000", brand: "PowerMax", imageUrl: "/Images/sports-3.jpg" },
  { id: 4, name: "Tennis Racket", price: "₦18,500", oldPrice: "₦21,000", brand: "Wilson", imageUrl: "/Images/sports-4.jpg" },
  { id: 5, name: "Running Shoes - Velocity X", price: "₦35,000", oldPrice: "₦40,000", brand: "Adidas", imageUrl: "/Images/sports-5.jpg" },
  { id: 6, name: "Water Bottle - Insulated", price: "₦4,500", oldPrice: "₦5,500", brand: "HydroFlask", imageUrl: "/Images/sports-6.jpg" },
];

const brands = [...new Set(sportsProducts.map(p => p.brand))].sort();

// Animated Product Card Component
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

function Sports() {
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
      `}</style>

      {/* Header */}
      <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
        <header className="mb-8 pb-4 border-b border-gray-200 relative">
          <div className="flex items-start gap-4">
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M13 18.5C13 19.3284 12.3284 20 11.5 20C10.6716 20 10 19.3284 10 18.5C10 17.6716 10.6716 17 11.5 17C12.3284 17 13 17.6716 13 18.5Z" fill="white"/><path d="M12 2C12.6373 2.82522 13.149 3.65044 13.535 4.5085C13.921 5.36657 14.1812 6.25759 14.3155 7.1815C14.4498 8.10541 14.4578 9.06214 14.3396 10.049C14.2215 11.0359 13.9772 12.0494 13.6067 13.088C13.2363 14.1266 12.7441 15.1742 12.1302 16.2307L12 16.5L11.8698 16.2307C11.2559 15.1742 10.7637 14.1266 10.3933 13.088C10.0228 12.0494 9.77852 11.0359 9.66041 10.049C9.54229 9.06214 9.55025 8.10541 9.68452 7.1815C9.8188 6.25759 10.079 5.36657 10.465 4.5085C10.851 3.65044 11.3627 2.82522 12 2Z" fill="white" stroke="white" strokeWidth="0.5"/></svg>
              SPORTS & FITNESS
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Gear Up for <span className="text-orangered">Victory</span>
              </h1>
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded-lg">
                Find the highest quality sports equipment, athletic wear, and fitness essentials. Whether you're hitting the gym, the field, or the yoga mat, we have the gear to elevate your performance.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span><strong className="text-black">{sportsProducts.length}</strong> products listed</span>
                <span className="flex items-center gap-1 text-orangered">Performance Certified</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 flex items-center gap-3">
            <span className="inline-block px-3 py-1 text-xs font-medium text-orangered border border-orangered rounded-full">Pro Grade</span>
            <span className="text-sm text-gray-500">Equip yourself with gear trusted by professionals.</span>
          </div>

          {/* Brand Filter */}
          <div className="mt-4 py-4 border-t border-gray-200 flex flex-wrap gap-4">
            {brands.map((brand)=>(
              <label key={brand} className="flex items-center cursor-pointer hover:text-orangered transition">
                <input type="checkbox" className="h-4 w-4 text-orangered border-gray-300 rounded focus:ring-orangered"/>
                <span className="ml-2 text-sm font-medium text-gray-700 hover:text-black">{brand} <span className="text-xs text-gray-400">({sportsProducts.filter(p=>p.brand===brand).length})</span></span>
              </label>
            ))}
          </div>
        </header>

        {/* Product Grid */}
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {sportsProducts.map((p,i)=>(
            <AnimatedProductCard key={p.id} product={p} handleAddToCart={handleAddToCart} addingToCartId={addingToCartId} index={i}/>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Sports;
