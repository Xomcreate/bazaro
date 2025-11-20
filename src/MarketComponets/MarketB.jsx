import React from "react";
import { ShoppingBag, ArrowRight, Star } from "react-feather";
import { motion } from "framer-motion";

// MarketB component with white background and motion design (only circular background animates)
export default function MarketB() {
  const shops = [
    { name: "Gourmet Goods", category: "Food & Drink", accent: "#FF4500" },
    { name: "Artisan Crafts", category: "Handmade", accent: "#FF4500" },
    { name: "Urban Threads", category: "Clothing", accent: "#FF4500" },
    { name: "Home Haven", category: "Home & Living", accent: "#FF4500" },
    { name: "Tech Burst", category: "Electronics", accent: "#FF4500" },
    { name: "Sportify", category: "Sports", accent: "#FF4500" },
    { name: "Page & Pen", category: "Books", accent: "#FF4500" },
    { name: "Glow Beauty", category: "Beauty", accent: "#FF4500" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 250, damping: 25 } },
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="inline-block text-2xl md:text-3xl font-extrabold text-black border-b-4 border-[#FF4500] pb-2">
            ✨ Featured Shops
          </h2>
          <p className="text-gray-600 mt-3">Hand-picked shops our customers love — curated and ready.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {shops.map((s, i) => (
            <motion.article
              key={s.name}
              variants={card}
              whileHover={{ y: -6, scale: 1.02, boxShadow: '0 12px 22px rgba(0,0,0,0.15)' }}
              tabIndex={0}
              className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow focus:outline-none focus:ring-4 focus:ring-orange-100 border border-[#FF4500]"
              aria-label={`Featured shop ${s.name}`}
            >
              {/* Circular background with subtle animation */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-10 bg-[#FF4500]"
                animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.1, 0.15, 0.1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                aria-hidden
              />

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-white text-xl font-bold bg-[#FF4500]">
                  <ShoppingBag size={26} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black">{s.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.category}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1">
                      <Stars count={4} />
                      <span className="text-sm text-gray-500">(120)</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#FF4500] text-white font-semibold">Featured</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF4500] hover:text-white hover:bg-[#FF4500] border border-[#FF4500] px-3 py-2 rounded-lg transition-colors"
                  aria-label={`View ${s.name}`}
                >
                  View Shop <ArrowRight size={14} />
                </motion.button>

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
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={14} className={`${i < 4 ? "text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  );
}