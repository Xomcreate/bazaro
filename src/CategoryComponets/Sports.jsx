import React from "react";

const sportsProducts = [
  { id: 1, name: "Football Nike Pro", price: "₦12,500", oldPrice: "₦15,000", brand: "Nike", imageUrl: "/Images/sports-1.jpg" },
  { id: 2, name: "Yoga Mat", price: "₦6,500", oldPrice: "₦8,000", brand: "Reebok", imageUrl: "/Images/sports-2.jpg" },
  { id: 3, name: "Dumbbell Set 20kg", price: "₦25,000", oldPrice: "₦28,000", brand: "PowerMax", imageUrl: "/Images/sports-3.jpg" },
  { id: 4, name: "Tennis Racket", price: "₦18,500", oldPrice: "₦21,000", brand: "Wilson", imageUrl: "/Images/sports-4.jpg" },
  { id: 5, name: "Running Shoes - Velocity X", price: "₦35,000", oldPrice: "₦40,000", brand: "Adidas", imageUrl: "/Images/sports-5.jpg" },
  { id: 6, name: "Water Bottle - Insulated", price: "₦4,500", oldPrice: "₦5,500", brand: "HydroFlask", imageUrl: "/Images/sports-6.jpg" },
];

const brands = [...new Set(sportsProducts.map(p => p.brand))].sort();

function Sports() {
  const [addingToCartId, setAddingToCartId] = React.useState(null);

  const handleAddToCart = (productId) => {
    setAddingToCartId(productId);
    setTimeout(() => console.log(`Product ${productId} added to cart.`), 200);
    setTimeout(() => setAddingToCartId(null), 500);
  };

  const BrandFilter = ({ brands }) => (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4 border-b pb-2 text-black">Brand</h3>
      <div className="space-y-3 h-96 overflow-y-auto pr-2">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded transition">
            <input type="checkbox" className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-600" />
            <span className="ml-3 text-sm font-medium text-gray-700">{brand}</span>
            <span className="ml-auto text-xs text-gray-400">({sportsProducts.filter(p => p.brand === brand).length})</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Custom styles for orangered colors and effects (Copied from Phone.jsx) */}
      <style>{`
        /* Define orangered color for reusability */
        .bg-orangered { background-color: orangered; }
        .text-orangered { color: orangered; }
        .ring-orangered:focus { box-shadow: 0 0 0 4px rgba(255,69,0,0.15); outline: none; }
        .btn-orangered { background: orangered; }
        .btn-orangered:hover { filter: brightness(0.95); }
        .decor-accent { background: linear-gradient(90deg, rgba(255,69,0,0.08), rgba(255,140,0,0.04)); border-left: 4px solid orangered; }
        
        /* Keyframes for simple pulse effect used on button click */
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-10 pb-6 relative">
          {/* Decorative element (Orangered circle) */}
          <svg className="absolute right-4 top-0 opacity-10 w-40 h-40 pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="20" r="30" fill="orangered" />
          </svg>

          <div className="flex items-start gap-4">
            {/* Category Tag (Icon changed to a flame/energy icon) */}
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-md shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M13 18.5C13 19.3284 12.3284 20 11.5 20C10.6716 20 10 19.3284 10 18.5C10 17.6716 10.6716 17 11.5 17C12.3284 17 13 17.6716 13 18.5Z" fill="white"/>
                    <path d="M12 2C12.6373 2.82522 13.149 3.65044 13.535 4.5085C13.921 5.36657 14.1812 6.25759 14.3155 7.1815C14.4498 8.10541 14.4578 9.06214 14.3396 10.049C14.2215 11.0359 13.9772 12.0494 13.6067 13.088C13.2363 14.1266 12.7441 15.1742 12.1302 16.2307L12 16.5L11.8698 16.2307C11.2559 15.1742 10.7637 14.1266 10.3933 13.088C10.0228 12.0494 9.77852 11.0359 9.66041 10.049C9.54229 9.06214 9.55025 8.10541 9.68452 7.1815C9.8188 6.25759 10.079 5.36657 10.465 4.5085C10.851 3.65044 11.3627 2.82522 12 2Z" fill="white" stroke="white" strokeWidth="0.5"/>
                </svg>
              SPORTS & FITNESS
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Gear Up for <span className="text-orangered">Victory</span>
              </h1>
              {/* Description Writeup with Accent */}
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded-lg">
                Find the highest quality sports equipment, athletic wear, and fitness essentials. Whether you're hitting the gym, the field, or the yoga mat, we have the gear to elevate your performance.
              </p>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <strong className="text-black">{sportsProducts.length}</strong> products listed
                </span>
                <span className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-orangered opacity-70"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Performance Certified
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <span className="inline-block px-3 py-1 text-xs font-medium text-orangered border border-orangered rounded-full">Pro Grade</span>
            <span className="ml-3 text-sm text-gray-500">Equip yourself with gear trusted by professionals.</span>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 sticky top-4 self-start">
            <BrandFilter brands={brands} />
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm mt-6">
              <h3 className="text-xl font-bold mb-4 text-black">Price Range</h3>
              <div className="h-10 bg-gray-100 flex items-center justify-center text-gray-500 rounded">Price Filter Tool</div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-full lg:w-3/4">
            <h2 className="text-2xl font-bold text-black mb-4 border-b pb-2">
              All Sports & Fitness Gear
            </h2>

            <div className="mb-4 text-gray-600">
              Showing 1 - {sportsProducts.length} of {sportsProducts.length} results
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sportsProducts.map((product) => (
                <div 
                  key={product.id} 
                  // Applied hover animation and design from Phone.jsx
                  className="group bg-white border border-gray-100 rounded-xl shadow-lg 
                             hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 
                             overflow-hidden flex flex-col cursor-pointer"
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
                      {/* Price color set to orangered */}
                      <p className="text-xl font-extrabold text-orangered">{product.price}</p>
                    </div>
                    
                    {/* Add to Cart button with animated state */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handleAddToCart(product.id); }}
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
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Sports;