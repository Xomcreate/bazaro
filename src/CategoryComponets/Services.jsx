import React, { useState, useEffect, useRef } from "react";

const serviceProducts = [
  { id: 1, name: "Home Cleaning Service", price: "₦12,000", oldPrice: "", brand: "CleanCo", imageUrl: "/Images/service-1.jpg" },
  { id: 2, name: "Plumbing Service", price: "₦20,000", oldPrice: "", brand: "PipeFix", imageUrl: "/Images/service-2.jpg" },
  { id: 3, name: "Electrical Installation", price: "₦15,000", oldPrice: "", brand: "ElectroPro", imageUrl: "/Images/service-3.jpg" },
  { id: 4, name: "Babysitting Service", price: "₦8,000", oldPrice: "", brand: "SafeKids", imageUrl: "/Images/service-4.jpg" },
  { id: 5, name: "Car Wash Service", price: "₦5,000", oldPrice: "", brand: "AutoClean", imageUrl: "/Images/service-5.jpg" },
  { id: 6, name: "Gardening Service", price: "₦10,000", oldPrice: "", brand: "GreenThumb", imageUrl: "/Images/service-6.jpg" },
  { id: 7, name: "IT Support Service", price: "₦18,000", oldPrice: "", brand: "TechAssist", imageUrl: "/Images/service-7.jpg" },
  { id: 8, name: "Painting & Decor", price: "₦25,000", oldPrice: "", brand: "DecorPlus", imageUrl: "/Images/service-8.jpg" },
  { id: 9, name: "Laundry & Dry Cleaning", price: "₦7,500", oldPrice: "", brand: "CleanIt", imageUrl: "/Images/service-9.jpg" },
  { id: 10, name: "Pest Control Service", price: "₦12,000", oldPrice: "", brand: "BugAway", imageUrl: "/Images/service-10.jpg" },
  { id: 11, name: "Fitness Trainer Service", price: "₦20,000", oldPrice: "", brand: "FitPro", imageUrl: "/Images/service-11.jpg" },
  { id: 12, name: "Photography Service", price: "₦30,000", oldPrice: "", brand: "SnapShot", imageUrl: "/Images/service-12.jpg" },
  { id: 13, name: "Event Planning Service", price: "₦50,000", oldPrice: "", brand: "PartyTime", imageUrl: "/Images/service-13.jpg" },
  { id: 14, name: "Security Guard Service", price: "₦40,000", oldPrice: "", brand: "SafeGuard", imageUrl: "/Images/service-14.jpg" },
  { id: 15, name: "Courier Delivery Service", price: "₦5,000", oldPrice: "", brand: "QuickShip", imageUrl: "/Images/service-15.jpg" },
  { id: 16, name: "Interior Design Service", price: "₦35,000", oldPrice: "", brand: "DesignHub", imageUrl: "/Images/service-16.jpg" },
  { id: 17, name: "Car Mechanic Service", price: "₦25,000", oldPrice: "", brand: "AutoFix", imageUrl: "/Images/service-17.jpg" },
  { id: 18, name: "Home Appliance Repair", price: "₦15,000", oldPrice: "", brand: "FixItHome", imageUrl: "/Images/service-18.jpg" },
  { id: 19, name: "Tutoring Service", price: "₦12,000", oldPrice: "", brand: "LearnPro", imageUrl: "/Images/service-19.jpg" },
  { id: 20, name: "Pet Grooming Service", price: "₦10,000", oldPrice: "", brand: "FurCare", imageUrl: "/Images/service-20.jpg" },
];

const brands = [...new Set(serviceProducts.map(p => p.brand))].sort();

// Animated Service Card Component
const AnimatedServiceCard = ({ product, handleBookService, bookingId, index }) => {
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
      <div className="w-full h-36 sm:h-40 md:h-48 flex items-center justify-center bg-gray-50 overflow-hidden">
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
          {product.oldPrice && <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>}
          <p className="text-xl font-extrabold text-orangered">{product.price}</p>
        </div>
        <button 
          onClick={()=>handleBookService(product.id)}
          className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2 ${bookingId===product.id?'btn-orangered animate-pulse':'bg-black hover:btn-orangered'}`}
        >
          {bookingId===product.id?'BOOKING...':'BOOK SERVICE'}
        </button>
      </div>
    </div>
  )
};

function Services() {
  const [bookingId, setBookingId] = useState(null);

  const handleBookService = (id)=>{
    setBookingId(id);
    setTimeout(()=>setBookingId(null), 500);
    setTimeout(()=>console.log(`Service ${id} booked.`), 200);
  };

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

      <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 pb-4 border-b border-gray-200 relative">
          <div className="flex items-start gap-4">
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z" fill="white" />
              </svg>
              SERVICES
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Discover Top <span className="text-orangered">Services</span>
              </h1>
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded-lg">
                Explore a wide range of professional services — hand-picked for quality, reliability, and convenience.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span><strong className="text-black">{serviceProducts.length}</strong> services</span>
                <span className="flex items-center gap-1 text-orangered">Reliable booking & support</span>
              </div>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mt-4 py-4 border-t border-gray-200 flex flex-wrap gap-4">
            {brands.map((brand)=>(
              <label key={brand} className="flex items-center cursor-pointer hover:text-orangered transition">
                <input type="checkbox" className="h-4 w-4 text-orangered border-gray-300 rounded focus:ring-orangered"/>
                <span className="ml-2 text-sm font-medium text-gray-700 hover:text-black">{brand} <span className="text-xs text-gray-400">({serviceProducts.filter(p=>p.brand===brand).length})</span></span>
              </label>
            ))}
          </div>
        </header>

        {/* Product Grid */}
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {serviceProducts.map((p,i)=>(
            <AnimatedServiceCard key={p.id} product={p} handleBookService={handleBookService} bookingId={bookingId} index={i}/>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Services;
