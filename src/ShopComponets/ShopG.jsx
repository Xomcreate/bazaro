import React from "react";

const COLOR_ORANGERED = "#FF4500";
const COLOR_BLACK = "#1F2937";

// Example recommended products/shops
const recommended = [
  {
    name: "Techie Gadgets",
    image: "https://via.placeholder.com/150",
    rating: 5,
    price: "₦25,000",
  },
  {
    name: "Smart Home Store",
    image: "https://via.placeholder.com/150",
    rating: 4,
    price: "₦15,500",
  },
  {
    name: "Mega Deals Electronics",
    image: "https://via.placeholder.com/150",
    rating: 4,
    price: "₦18,200",
  },
  {
    name: "Bazaro Accessories",
    image: "https://via.placeholder.com/150",
    rating: 5,
    price: "₦5,500",
  },
];

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-${i <= rating ? "yellow-400" : "gray-300"} text-sm`}
      >
        ★
      </span>
    );
  }
  return stars;
}

export default function ShopG() {
  return (
    <div className="w-full bg-gray-50 py-16" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3" style={{ color: COLOR_BLACK }}>
            Recommended Shops & Products
          </h2>
          <p className="text-gray-600 text-lg">
            Explore similar shops or products you might be interested in.
          </p>
        </div>

        {/* RECOMMENDED GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recommended.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-1" style={{ color: COLOR_BLACK }}>
                {item.name}
              </h3>
              <div className="flex items-center mb-2">{renderStars(item.rating)}</div>
              <p className="text-orange-600 font-bold">{item.price}</p>
              <button
                className="mt-3 w-full py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
              >
                View Shop
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
