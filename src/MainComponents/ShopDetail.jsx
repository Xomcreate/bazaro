import React, { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MapPin, Phone, ArrowLeft } from "react-feather";
import shopData from "./ShopData";

/**
 * Custom hook to handle shop logic and side effects
 */
const useShopDetail = (shopId) => {
  const shop = useMemo(() => {
    return shopData.find((s) => s.id === Number(shopId));
  }, [shopId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [shopId]);

  return shop;
};

export default function ShopDetail() {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const shop = useShopDetail(shopId);

  // Guard Clause for missing shop
  if (!shop) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Shop not found</h2>
        <p className="text-gray-500 mb-6">The shop you're looking for doesn't exist or has been moved.</p>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Navigation Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b p-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back to Shops</span>
        </button>
      </div>

      {/* Hero Banner */}
      <div
        className="w-full h-64 md:h-80 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${shop.banner})` }}
      />

      {/* Shop Info Card */}
      <main className="max-w-5xl mx-auto px-4">
        <header className="relative bg-white p-8 -mt-16 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider rounded-full">
                {shop.category}
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 mt-2 italic">
                {shop.name}
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                {shop.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-3 text-sm text-gray-500 border-l pl-4 border-gray-100">
              <div className="flex items-center gap-2 hover:text-orange-600 transition cursor-default">
                <MapPin size={18} className="text-orange-500" />
                {shop.location}
              </div>
              <div className="flex items-center gap-2 hover:text-orange-600 transition cursor-default">
                <Phone size={18} className="text-orange-500" />
                {shop.contact}
              </div>
            </div>
          </div>
        </header>

        {/* Product Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Products
            </h2>
            <span className="text-gray-400 font-medium">
              {shop.products.length} Items
            </span>
          </div>

          {shop.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shop.products.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-gray-400 border-2 border-dashed rounded-2xl">
              No products available in this shop yet.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

/**
 * Sub-component for better readability and performance
 */
function ProductCard({ product }) {
  return (
    <Link
      to={`/product-detail/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        <p className="font-bold text-xl text-orange-600 mt-1">{product.price}</p>
      </div>
    </Link>
  );
}