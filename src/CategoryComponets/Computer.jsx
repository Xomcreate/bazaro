import React, { useState, useEffect, useRef } from "react";

// Products specific to Computers/Tablets
const computerProducts = [
  { id: 1, name: 'HP Laptop 14-ep0196nia, 14", Intel Core i3', price: '₦465,148', oldPrice: '₦514,193', brand: 'HP', imageUrl: '/Images/computer-1.jpg' },
  { id: 2, name: 'Gaming Laptop 15", NVIDIA RTX 4060, Intel Core i7', price: '₦780,000', oldPrice: '₦850,000', brand: 'HP', imageUrl: '/Images/computer-2.jpg' },
  { id: 3, name: 'Apple iPad Air 10.9" Wi-Fi, 64GB', price: '₦390,000', oldPrice: '₦410,000', brand: 'Apple', imageUrl: '/Images/computer-3.jpg' },
  { id: 4, name: 'Dell Inspiron 15 Laptop, Core i5, 8GB RAM', price: '₦500,000', oldPrice: '₦550,000', brand: 'Dell', imageUrl: '/Images/computer-4.jpg' },
  { id: 5, name: 'Microsoft Surface Pro 9, 13" Touchscreen', price: '₦720,000', oldPrice: '₦800,000', brand: 'Microsoft', imageUrl: '/Images/computer-5.jpg' },
  { id: 6, name: 'Lenovo IdeaPad 3, 15.6", Ryzen 5', price: '₦345,000', oldPrice: '₦380,000', brand: 'Lenovo', imageUrl: '/Images/computer-6.jpg' },
  { id: 7, name: 'LG UltraGear Gaming Monitor 27", 144Hz', price: '₦215,000', oldPrice: '₦250,000', brand: 'LG', imageUrl: '/Images/computer-7.jpg' },
  { id: 8, name: 'Samsung Galaxy Tab S9 Ultra, 5G', price: '₦950,000', oldPrice: '₦1,050,000', brand: 'Samsung', imageUrl: '/Images/computer-8.jpg' },
  { id: 9, name: 'HP All-in-One Desktop 24"', price: '₦499,000', oldPrice: '₦540,000', brand: 'HP', imageUrl: '/Images/computer-9.jpg' },
  { id: 10, name: 'Apple MacBook Pro 14" M3 Chip, 1TB SSD', price: '₦1,950,000', oldPrice: '₦2,100,000', brand: 'Apple', imageUrl: '/Images/computer-10.jpg' },
  { id: 11, name: 'Dell XPS 13 Plus, Core i7, 32GB RAM', price: '₦1,200,000', oldPrice: '₦1,350,000', brand: 'Dell', imageUrl: '/Images/computer-11.jpg' },
  { id: 12, name: 'Logitech Wireless Keyboard and Mouse Combo', price: '₦35,000', oldPrice: '₦42,000', brand: 'Logitech', imageUrl: '/Images/computer-12.jpg' },
  { id: 13, name: 'Acer Aspire 5 Laptop, 12th Gen Core i5', price: '₦410,000', oldPrice: '₦450,000', brand: 'Acer', imageUrl: '/Images/computer-13.jpg' },
  { id: 14, name: 'Samsung 32" Curved QLED Monitor', price: '₦320,000', oldPrice: '₦360,000', brand: 'Samsung', imageUrl: '/Images/computer-14.jpg' },
  { id: 15, name: 'WD My Passport 2TB External Hard Drive', price: '₦55,000', oldPrice: '₦62,000', brand: 'WD', imageUrl: '/Images/computer-15.jpg' },
  { id: 16, name: 'Asus ROG Zephyrus G14 Gaming Laptop', price: '₦990,000', oldPrice: '₦1,100,000', brand: 'Asus', imageUrl: '/Images/computer-16.jpg' },
  { id: 17, name: 'Apple Studio Display 27"', price: '₦1,500,000', oldPrice: '₦1,650,000', brand: 'Apple', imageUrl: '/Images/computer-17.jpg' },
  { id: 18, name: 'Razer DeathAdder V2 Gaming Mouse', price: '₦22,000', oldPrice: '₦25,000', brand: 'Razer', imageUrl: '/Images/computer-18.jpg' },
  { id: 19, name: 'HP Pavilion Desktop PC - Core i5', price: '₦450,000', oldPrice: '₦490,000', brand: 'HP', imageUrl: '/Images/computer-19.jpg' },
  { id: 20, name: 'Chromebook Duet 5, 13.3" OLED', price: '₦250,000', oldPrice: '₦280,000', brand: 'Lenovo', imageUrl: '/Images/computer-20.jpg' },
];

const brands = [...new Set(computerProducts.map(p => p.brand))].sort();

// Animated Product Card like Electronics
const AnimatedProductCard = ({ product, handleAddToCart, addingToCartId, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
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

function Computer() {
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="3" width="20" height="15" rx="2" ry="2"></rect><line x1="1" y1="18" x2="23" y2="18"></line></svg>
              COMPUTERS & TECH
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                High-Performance <span className="text-orangered">Computing</span>
              </h1>
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded-lg">
                Browse our selection of laptops, desktop PCs, monitors, and accessories. Power your work, education, and gaming with the latest technology.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span><strong className="text-black">{computerProducts.length}</strong> products listed</span>
                <span className="flex items-center gap-1 text-orangered">Latest Generation CPUs</span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 flex items-center gap-3">
            <span className="inline-block px-3 py-1 text-xs font-medium text-orangered border border-orangered rounded-full">Pro Deals</span>
            <span className="text-sm text-gray-500">Savings on powerful machines for professionals and students.</span>
          </div>

          {/* Brand Filter */}
          <div className="mt-4 py-4 border-t border-gray-200 flex flex-wrap gap-4">
            {brands.map((brand)=>(
              <label key={brand} className="flex items-center cursor-pointer hover:text-orangered transition">
                <input type="checkbox" className="h-4 w-4 text-orangered border-gray-300 rounded focus:ring-orangered"/>
                <span className="ml-2 text-sm font-medium text-gray-700 hover:text-black">{brand} <span className="text-xs text-gray-400">({computerProducts.filter(p=>p.brand===brand).length})</span></span>
              </label>
            ))}
          </div>
        </header>

        {/* Product Grid */}
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {computerProducts.map((p,i)=>(
            <AnimatedProductCard key={p.id} product={p} handleAddToCart={handleAddToCart} addingToCartId={addingToCartId} index={i}/>
          ))}
        </main>
      </div>
    </div>
  )
}

export default Computer;
