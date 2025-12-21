import React from "react";
import { useParams } from "react-router-dom";

const COLOR_ORANGERED = "#FF4500";
const COLOR_BLACK = "#1F2937";

// Example sellers data
const sellers = [
  {
    id: 1,
    name: "Bazaro Shop",
    location: "Lagos, Nigeria",
    verified: true,
    avatar: "https://via.placeholder.com/150",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    responseRate: "Typically replies within 24 hours",
    shippingInfo: "Ships to all major cities in Nigeria. Standard and express delivery.",
    products: [
      { id: 101, name: "White Sneakers", price: "₦29,999", img: "https://via.placeholder.com/200" },
      { id: 102, name: "Leather Wallet", price: "₦7,500", img: "https://via.placeholder.com/200" },
    ],
  },
  // ... other sellers
];

export default function SellerDetailPage() {
  const { id } = useParams();
  const seller = sellers.find((s) => s.id === parseInt(id));

  if (!seller) return <p className="text-center mt-10">Seller not found</p>;

  return (
    <div className="w-full bg-gray-50 py-16" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Seller Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <img src={seller.avatar} alt={seller.name} className="w-32 h-32 rounded-full object-cover" />
          <h1 className="text-4xl font-bold" style={{ color: COLOR_BLACK }}>{seller.name}</h1>
          {seller.verified && (
            <span className="px-3 py-1 text-sm font-bold rounded-full text-white" style={{ backgroundColor: COLOR_ORANGERED }}>
              Verified
            </span>
          )}
          <p className="text-gray-600">{seller.location}</p>
          <p className="text-gray-600">{seller.responseRate}</p>
        </div>

        {/* Products Grid */}
        <h2 className="text-2xl font-bold mb-6" style={{ color: COLOR_BLACK }}>Products by {seller.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {seller.products.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded-2xl shadow-md text-center">
              <div className="w-full h-48 overflow-hidden rounded-lg mb-3">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-orangered font-bold">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
