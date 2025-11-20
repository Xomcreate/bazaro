// File: src/CategoryComponets/Fashion.jsx
import React from "react";

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

function Fashion() {
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
            <span className="ml-auto text-xs text-gray-400">({fashionProducts.filter(p => p.brand === brand).length})</span>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-10 pb-6 relative">
          <svg className="absolute right-4 top-0 opacity-10 w-40 h-40 pointer-events-none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="20" r="30" fill="orangered" />
          </svg>

          <div className="flex items-start gap-4">
            <div className="px-3 py-1 rounded-full bg-orangered text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z" fill="white" />
              </svg>
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
                <span className="flex items-center gap-2">
                  <strong className="text-black">{fashionProducts.length}</strong> products
                </span>
                <span className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-70"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/></svg>
                  Free shipping on select items
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t pt-4">
            <span className="inline-block px-3 py-1 text-xs font-medium text-orangered border border-orangered rounded">New Arrivals</span>
            <span className="ml-3 text-sm text-gray-500">Hand-picked fashion items for men and women.</span>
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
              Featured Fashion
            </h2>

            <div className="mb-4 text-gray-600">
              Showing 1 - {fashionProducts.length} of {fashionProducts.length} results
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {fashionProducts.map((product) => (
                <div key={product.id} className="group bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col">
                  <div className="w-full h-36 sm:h-40 md:h-48 flex items-center justify-center bg-gray-50 overflow-hidden">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover p-2 group-hover:scale-[1.03] transition duration-300"/>
                  </div>
                  <div className="p-3 flex flex-col grow">
                    <h3 className="text-sm font-medium text-black mb-1 grow">
                      {product.name.length > 60 ? product.name.substring(0,60)+'...' : product.name}
                    </h3>
                    <div className="my-2">
                      {product.oldPrice && <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>}
                      <p className="text-xl font-extrabold text-orangered">{product.price}</p>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className={`mt-auto w-full text-white py-2 text-sm font-bold rounded transition duration-200 ease-in-out shadow-md flex items-center justify-center gap-2
                        ${addingToCartId === product.id ? 'btn-orangered animate-pulse' : 'bg-black hover:btn-orangered'}`}
                      aria-pressed={addingToCartId === product.id}
                    >
                      ADD TO CART
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

export default Fashion;
