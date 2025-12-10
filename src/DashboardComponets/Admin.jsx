import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaStore,
  FaList,
  FaBox,
  FaShoppingCart,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
  FaEnvelope
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Components
import PlatformOverview from "../AdminDashboardComponets/PlatformOverview";
import UserManageMent from "../AdminDashboardComponets/UserManageMent";
import CategoryManage from "../AdminDashboardComponets/CategoryManage";
import ProductManage from "../AdminDashboardComponets/ProductManage";
import OrdersManage from "../AdminDashboardComponets/OrdersManage";
import PaymentManage from "../AdminDashboardComponets/PaymentManage";
import Reports from "../AdminDashboardComponets/Reports";
import Settings from "../AdminDashboardComponets/Settings";
import VendorManage from "../AdminDashboardComponets/VendorManage";
import ContactManage from "../AdminDashboardComponets/ContactManage";
import Refermanage from "../AdminDashboardComponets/Refermanage";

// COLORS
const ORANGERED = "#FF4500";

// MENU ITEMS
const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, key: "dashboard" },
  { name: "Users", icon: <FaUsers />, key: "users" },
  { name: "Vendors", icon: <FaStore />, key: "vendors" },
  { name: "Categories", icon: <FaList />, key: "categories" },
  { name: "Products", icon: <FaBox />, key: "products" },
  { name: "Orders", icon: <FaShoppingCart />, key: "orders" },
  { name: "Payments", icon: <FaMoneyBillWave />, key: "payments" },
  { name: "Reports", icon: <FaChartBar />, key: "reports" },
  { name: "Contact", icon: <FaEnvelope />, key: "contact" },
  { name: "Referrals", icon: <FaUsers />, key: "referrals" },
  { name: "Settings", icon: <FaCog />, key: "settings" }
];

export default function Admin() {
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
            <div className="w-2 h-8 rounded-full" style={{ background: ORANGERED }} />
            <h1 className="text-2xl font-bold">
              Admin<span style={{ color: ORANGERED }}>Panel</span>
            </h1>
          </div>

          <ul className="flex flex-wrap gap-2">

            {menuItems.map(item => {
              const active = activeTab === item.key;

              return (
                <motion.li
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`
                    cursor-pointer relative flex flex-col 
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
                      style={{ background: ORANGERED, zIndex: -1 }}
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

      {/* CONTENT */}
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
                <span className="text-2xl" style={{ color: ORANGERED }}>
                  {menuItems.find(i => i.key === activeTab)?.icon}
                </span>
                <h2 className="text-2xl font-bold">
                  {menuItems.find(i => i.key === activeTab)?.name} Management
                </h2>
              </div>

              {activeTab === "dashboard" && <PlatformOverview />}
              {activeTab === "users" && <UserManageMent />}
              {activeTab === "vendors" && <VendorManage />}
              {activeTab === "categories" && <CategoryManage />}
              {activeTab === "products" && <ProductManage />}
              {activeTab === "orders" && <OrdersManage />}
              {activeTab === "payments" && <PaymentManage />}
              {activeTab === "reports" && <Reports />}
              {activeTab === "contact" && <ContactManage />}
              {activeTab === "referrals" && <Refermanage />}
              {activeTab === "settings" && <Settings />}

            </motion.div>

          </AnimatePresence>

        </div>
      </main>
    </div>
  );
}
