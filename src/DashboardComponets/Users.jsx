import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaBox,
  FaEye,
  FaShoppingCart,
  FaStar,
  FaBullhorn,
  FaCog,
  FaChartLine,
  FaMoneyBillWave,
  FaEnvelope
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

// 👉 USER COMPONENTS ONLY
import Shopping from "../UserDashboardComponets/Shopping";
import Wishlist from "../MainComponents/Wishlist";
import Referal from "../UserDashboardComponets/Referal";
import Messages from "../UserDashboardComponets/Messages";
import Help from "../UserDashboardComponets/Help";
import Cartout from "../UserDashboardComponets/Cartout";
import Wallet from "../UserDashboardComponets/Wallet";
import Notify from "../UserDashboardComponets/Notify";
import UserProfile from "../UserDashboardComponets/UserProfile"; // added because you used it

// COLORS
const ORANGE = "#FF4500";

// MENU (User Dashboard)
const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, key: "dashboard" },
  { name: "Shopping", icon: <FaBox />, key: "shopping" },
  { name: "Wishlist", icon: <FaEye />, key: "wishlist" },
  { name: "Cart", icon: <FaShoppingCart />, key: "cart" },
  { name: "Reviews", icon: <FaStar />, key: "reviews" },
  { name: "Referrals", icon: <FaBullhorn />, key: "referrals" },
  { name: "Wallet", icon: <FaMoneyBillWave />, key: "wallet" },
  { name: "Messages", icon: <FaEnvelope />, key: "messages" },
  { name: "Settings", icon: <FaCog />, key: "settings" }
];

export default function Users() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">

      {/* NAVBAR */}
      <nav className="bg-black text-white px-6 py-4 shadow-lg sticky top-0">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex items-center gap-2 mb-3 md:mb-0">
            <div className="w-2 h-8 rounded-full" style={{ background: ORANGE }} />
            <h1 className="text-2xl font-bold">
              User<span style={{ color: ORANGE }}>Panel</span>
            </h1>
          </div>

          <ul className="flex flex-wrap gap-2">
            {menuItems.map(item => {
              const active = activeTab === item.key;

              return (
                <motion.li
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`cursor-pointer relative flex flex-col 
                    items-center justify-center text-center
                    px-4 py-2 rounded-xl text-sm gap-1
                    transition-all duration-150
                    ${active ? "text-white" : "text-gray-400 hover:text-white"}
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: .95 }}
                >
                  {active && (
                    <motion.span
                      layoutId="tabBg"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: ORANGE, zIndex: -1 }}
                    />
                  )}

                  <span className="text-lg">{item.icon}</span>
                  <span className="hidden md:block text-xs">{item.name}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl shadow-xl border p-6 md:p-8 min-h-[80vh]"
            >
              <div className="mb-6 flex items-center gap-3 border-b pb-3">
                <span className="text-2xl" style={{ color: ORANGE }}>
                  {menuItems.find(i => i.key === activeTab)?.icon}
                </span>
                <h2 className="text-2xl font-bold">
                  {menuItems.find(i => i.key === activeTab)?.name}
                </h2>
              </div>

              {/* CORRECT USER COMPONENT RENDERING */}
              {activeTab === "dashboard" && <UserProfile />}
              {activeTab === "shopping" && <Shopping />}
              {activeTab === "wishlist" && <Wishlist />}
              {activeTab === "cart" && <Cartout />}
              {activeTab === "reviews" && <Messages />}
              {activeTab === "referrals" && <Referal />}
              {activeTab === "wallet" && <Wallet />}
              {activeTab === "messages" && <Notify />}
              {activeTab === "settings" && <Help />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
