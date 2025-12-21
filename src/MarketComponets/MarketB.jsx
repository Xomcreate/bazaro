import React from "react";
import { ShoppingBag, ArrowRight, Star } from "react-feather";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // so View Shop can link

export default function MarketB() {
  const shops = [
    { id: 0, name: "Gourmet Goods", category: "Food & Drink" },
    { id: 1, name: "Artisan Crafts", category: "Handmade" },
    { id: 2, name: "Urban Threads", category: "Clothing" },
    { id: 3, name: "Home Haven", category: "Home & Living" },
    { id: 4, name: "Tech Burst", category: "Electronics" },
    { id: 5, name: "Sportify", category: "Sports" },
    { id: 6, name: "Page & Pen", category: "Books" },
    { id: 7, name: "Glow Beauty", category: "Beauty" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 250, damping: 25 },
    },
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="inline-block text-2xl md:text-3xl font-extrabold text-black border-b-4 border-[#FF4500] pb-2">
            ✨ Featured Shops
          </h2>
          <p className="text-gray-600 mt-3">
            Hand-picked shops our customers love — curated and ready.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {shops.map((shop) => (
            <motion.article
              key={shop.id}
              variants={card}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 12px 22px rgba(0,0,0,0.15)",
              }}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#FF4500]"
            >
              {/* circular animation */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10 bg-[#FF4500]"
                animate={{ scale: [0.9, 1.2, 0.9] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16 h-16 rounded-lg flex items-center justify-center bg-[#FF4500]">
                  <ShoppingBag size={26} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black">
                    {shop.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{shop.category}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1">
                      <Stars count={4} />
                      <span className="text-sm text-gray-500">(120)</span>
                    </div>

                    <span className="text-xs px-2 py-1 rounded-full bg-[#FF4500] text-white font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link
                  to={`/shop/${shop.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500] hover:text-white hover:bg-[#FF4500] border border-[#FF4500] px-3 py-2 rounded-lg transition-colors"
                >
                  View Shop <ArrowRight size={14} />
                </Link>

                <div className="text-sm text-gray-500">From ₦1,500</div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white border border-[#FF4500] px-4 py-2 rounded-lg shadow-sm hover:bg-[#FF4500] hover:text-white transition"
          >
            See all shops <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}
