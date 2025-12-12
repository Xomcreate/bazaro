import React from "react";

const COLOR_ORANGERED = "#FF4500";
const COLOR_BLACK = "#1F2937";

// Example sellers data
const sellers = [
  {
    name: "Bazaro Shop",
    location: "Lagos, Nigeria",
    verified: true,
    avatar: "https://via.placeholder.com/80",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    responseRate: "Typically replies within 24 hours",
    shippingInfo: "Ships to all major cities in Nigeria. Standard and express delivery.",
  },
  {
    name: "Jiji Electronics",
    location: "Abuja, Nigeria",
    verified: false,
    avatar: "https://via.placeholder.com/80",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM",
    responseRate: "Typically replies within 12 hours",
    shippingInfo: "Nationwide delivery with express available.",
  },
  {
    name: "Mega Deals Store",
    location: "Port Harcourt, Nigeria",
    verified: true,
    avatar: "https://via.placeholder.com/80",
    hours: "Mon - Fri: 8:00 AM - 5:00 PM",
    responseRate: "Typically replies within 24 hours",
    shippingInfo: "Ships to all Nigerian states, free delivery on orders above ₦50,000.",
  },
];

export default function ShopE() {
  return (
    <div className="w-full bg-gray-50 py-16" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3" style={{ color: COLOR_BLACK }}>
            Our Sellers
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our trusted sellers and their offerings.
          </p>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sellers.map((seller, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md space-y-6 text-center"
            >
              {/* Seller Info */}
              <div className="flex flex-col items-center gap-4">
                <img
                  src={seller.avatar}
                  alt={`${seller.name} Avatar`}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: COLOR_BLACK }}>
                    {seller.name}
                  </h3>
                  <p className="text-gray-600">Location: {seller.location}</p>
                  {seller.verified && (
                    <span
                      className="inline-block mt-1 px-2 py-1 text-xs font-bold rounded-full"
                      style={{ backgroundColor: COLOR_ORANGERED, color: "white" }}
                    >
                      Verified
                    </span>
                  )}
                </div>
              </div>

              {/* Business Info */}
              <div className="grid grid-cols-1 gap-4 text-center">
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: COLOR_BLACK }}>
                    Business Hours
                  </h4>
                  <p className="text-gray-600">{seller.hours}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: COLOR_BLACK }}>
                    Response Rate
                  </h4>
                  <p className="text-gray-600">{seller.responseRate}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg" style={{ color: COLOR_BLACK }}>
                    Shipping Info
                  </h4>
                  <p className="text-gray-600">{seller.shippingInfo}</p>
                </div>
              </div>

              {/* CTA */}
              <button
                className="mt-4 w-full py-3 font-semibold rounded-xl shadow-md transition hover:scale-105"
                style={{ backgroundColor: COLOR_ORANGERED, color: "white" }}
              >
                Contact Seller
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
