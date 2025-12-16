import React, { useState, useEffect, useRef } from "react";

const stationeryProducts = [
  { id: 1, name: "A4 Notebook 200 Pages", price: "₦1,200", oldPrice: "₦1,500", brand: "PaperMate", imageUrl: "/Images/stationery-1.jpg" },
  { id: 2, name: "Ballpoint Pen Pack", price: "₦800", oldPrice: "₦1,000", brand: "Bic", imageUrl: "/Images/stationery-2.jpg" },
  { id: 3, name: "Stapler & Staples Set", price: "₦2,500", oldPrice: "₦3,000", brand: "Fellowes", imageUrl: "/Images/stationery-3.jpg" },
  { id: 4, name: "Desk Organizer", price: "₦4,000", oldPrice: "₦4,500", brand: "Ikea", imageUrl: "/Images/stationery-4.jpg" },
  { id: 5, name: "Highlighter Pack", price: "₦1,500", oldPrice: "₦1,800", brand: "Stabilo", imageUrl: "/Images/stationery-5.jpg" },
  { id: 6, name: "Drawing Pencils Set", price: "₦1,800", oldPrice: "₦2,200", brand: "Faber-Castell", imageUrl: "/Images/stationery-6.jpg" },
  { id: 7, name: "Whiteboard Markers", price: "₦2,000", oldPrice: "₦2,400", brand: "Expo", imageUrl: "/Images/stationery-7.jpg" },
  { id: 8, name: "Paper Clips Set", price: "₦500", oldPrice: "₦700", brand: "Bic", imageUrl: "/Images/stationery-8.jpg" },
  { id: 9, name: "Planner 2025", price: "₦3,500", oldPrice: "₦4,000", brand: "Moleskine", imageUrl: "/Images/stationery-9.jpg" },
  { id: 10, name: "Sticky Notes Pack", price: "₦900", oldPrice: "₦1,200", brand: "Post-it", imageUrl: "/Images/stationery-10.jpg" },
  { id: 11, name: "Eraser & Sharpener Set", price: "₦600", oldPrice: "₦800", brand: "Faber-Castell", imageUrl: "/Images/stationery-11.jpg" },
  { id: 12, name: "Ring Binder A4", price: "₦2,200", oldPrice: "₦2,500", brand: "Staples", imageUrl: "/Images/stationery-12.jpg" },
  { id: 13, name: "Desk Lamp", price: "₦6,500", oldPrice: "₦7,500", brand: "Ikea", imageUrl: "/Images/stationery-13.jpg" },
  { id: 14, name: "Graph Paper Pad", price: "₦1,300", oldPrice: "₦1,500", brand: "PaperMate", imageUrl: "/Images/stationery-14.jpg" },
  { id: 15, name: "Calculator", price: "₦4,000", oldPrice: "₦4,500", brand: "Casio", imageUrl: "/Images/stationery-15.jpg" },
  { id: 16, name: "Marker Pens Set", price: "₦2,500", oldPrice: "₦3,000", brand: "Sharpie", imageUrl: "/Images/stationery-16.jpg" },
  { id: 17, name: "Notebook Set (5pcs)", price: "₦3,200", oldPrice: "₦3,800", brand: "PaperMate", imageUrl: "/Images/stationery-17.jpg" },
  { id: 18, name: "Desk Calendar 2025", price: "₦1,500", oldPrice: "₦1,800", brand: "Moleskine", imageUrl: "/Images/stationery-18.jpg" },
  { id: 19, name: "Filing Cabinet", price: "₦25,000", oldPrice: "₦28,000", brand: "Ikea", imageUrl: "/Images/stationery-19.jpg" },
  { id: 20, name: "Clipboard Set", price: "₦1,700", oldPrice: "₦2,000", brand: "Staples", imageUrl: "/Images/stationery-20.jpg" },
];

const brands = [...new Set(stationeryProducts.map(p => p.brand))].sort();

// Animated Stationery Card Component
const AnimatedStationeryCard = ({ product, handleAddToCart, addingToCartId, index }) => {
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
          onClick={() => handleAddToCart(product.id)}
          className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2 ${addingToCartId === product.id ? 'btn-orangered animate-pulse' : 'bg-black hover:btn-orangered'}`}
        >
          {addingToCartId === product.id ? 'ADDING...' : 'ADD TO CART'}
        </button>
      </div>
    </div>
  )
};

function Stationery() {
  const [addingToCartId, setAddingToCartId] = useState(null);

  const handleAddToCart = (id) => {
    setAddingToCartId(id);
    setTimeout(() => setAddingToCartId(null), 500);
    setTimeout(() => console.log(`Product ${id} added to cart.`), 200);
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
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z" fill="white" />
              </svg>
              STATIONERY
            </div>

            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Explore <span className="text-orangered">Stationery</span>
              </h1>
              <p className="text-gray-700 mt-3 max-w-3xl decor-accent p-4 rounded-lg">
                Essential stationery and office supplies for home, school, and workplace organization.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span><strong className="text-black">{stationeryProducts.length}</strong> products</span>
                <span className="flex items-center gap-1 text-orangered">Free shipping on select items</span>
              </div>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mt-4 py-4 border-t border-gray-200 flex flex-wrap gap-4">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center cursor-pointer hover:text-orangered transition">
                <input type="checkbox" className="h-4 w-4 text-orangered border-gray-300 rounded focus:ring-orangered" />
                <span className="ml-2 text-sm font-medium text-gray-700 hover:text-black">{brand} <span className="text-xs text-gray-400">({stationeryProducts.filter(p => p.brand === brand).length})</span></span>
              </label>
            ))}
          </div>
        </header>

        {/* Product Grid */}
        <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {stationeryProducts.map((p, i) => (
            <AnimatedStationeryCard key={p.id} product={p} handleAddToCart={handleAddToCart} addingToCartId={addingToCartId} index={i} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default Stationery;
