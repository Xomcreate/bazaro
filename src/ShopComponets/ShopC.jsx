import React from "react";

const COLOR_ORANGERED = "#FF4500";
const COLOR_BLACK = "#1F2937";

const products = [
  {
    id: 1,
    name: "Luxury White Sneakers",
    price: "₦29,999",
    oldPrice: "₦45,000",
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfzzhh05YH-sF69yVVJg82RFnCpLryoI4KImCOLRs9aLNeFaIsaLI7qT3SraINk-zo_BUmQd6gfMeaGN-OmclTnyPZ7DtDqairt1pf3rk1&usqp=CAc",
    tag: "HOT DEAL",
  },
  {
    id: 2,
    name: "Premium Bluetooth Headset",
    price: "₦12,499",
    oldPrice: "₦18,999",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarONvDTx5HhaI9lh0UUpYYpZ55l9sAPm-0A&usqp=CAU",
    tag: "TOP SELLER",
  },
  {
    id: 3,
    name: "Smart Fitness Wristband",
    price: "₦7,850",
    oldPrice: "₦10,000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjbn8jD1yHZoSn8DDk8b0zHf4HgLq2w2vMg&usqp=CAU",
    tag: "NEW",
  },
  {
    id: 4,
    name: "Designer Leather Wristwatch",
    price: "₦17,999",
    oldPrice: "₦25,000",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzHCtCMRzbkljJ6dhE4CfvzKdb7IhaHVXWQ&usqp=CAU",
    tag: "LIMITED",
  },
];

export default function ShopC() {
  return (
    <div
      className="w-full bg-gray-50 py-16"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* HEADER TEXT */}
        <div className="mb-10">
          <h2
            className="text-4xl font-extrabold mb-3"
            style={{ color: COLOR_BLACK }}
          >
            Featured Products & Promotions
          </h2>
          <p className="text-gray-600 text-lg">
            Top deals, best sellers, and new imports—updated daily.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="
                bg-white p-4 rounded-2xl shadow-md hover:shadow-xl 
                transition-all duration-300 cursor-pointer relative text-center
              "
            >
              
              {/* Badge */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded-full"
                style={{ backgroundColor: COLOR_ORANGERED, color: "white" }}
              >
                {item.tag}
              </div>

              {/* Image */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4 mx-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Name */}
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {item.name}
              </h3>

              {/* Prices */}
              <div className="mb-4">
                <p
                  className="text-xl font-bold"
                  style={{ color: COLOR_ORANGERED }}
                >
                  {item.price}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  {item.oldPrice}
                </p>
              </div>

              {/* Button */}
              <button
                className="
                  w-full py-2 font-semibold rounded-xl transition
                  hover:scale-105 shadow-md
                "
                style={{ backgroundColor: COLOR_ORANGERED, color: "white" }}
              >
                View Deal
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
