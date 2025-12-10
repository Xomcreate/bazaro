import React, { useState } from 'react';
import { 
  FaBox, 
  FaClock, 
  FaCheckCircle, 
  FaStar, 
  FaTimesCircle, 
  FaSearch, 
  FaFileImage,
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaTrash
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// --- Mock Data ---
const initialProducts = [
  { id: 1, name: "Noise Cancelling Headphones", vendor: "AudioGear Inc.", status: "Pending", isFeatured: false, category: "Electronics", reason: null },
  { id: 2, name: "Organic Face Wash (Unverified)", vendor: "EcoBeauty Co.", status: "Pending", isFeatured: false, category: "Health & Beauty", reason: null },
  { id: 3, name: "Premium Leather Wallet", vendor: "Craftsmen Ltd.", status: "Approved", isFeatured: true, category: "Fashion", reason: null },
  { id: 4, name: "Digital Drawing Tablet", vendor: "ArtTech Solutions", status: "Approved", isFeatured: false, category: "Electronics", reason: null },
  { id: 5, name: "Knives Set (Policy Violation)", vendor: "Sharp Tools", status: "Rejected", isFeatured: false, category: "Home & Kitchen", reason: "Prohibited Item" },
];

function ProductManage() {
  const [products, setProducts] = useState(initialProducts);
  const [activeView, setActiveView] = useState("review"); // 'review' or 'live'
  
  const pendingProducts = products.filter(p => p.status === 'Pending');
  const liveProducts = products.filter(p => p.status === 'Approved');

  // --- Utility Components ---

  const StatCard = ({ title, value, icon, color }) => (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md border-t-4"
      style={{ borderColor: color }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className="text-3xl opacity-50" style={{ color: color }}>{icon}</div>
      </div>
    </motion.div>
  );

  const ProductStatusBadge = ({ status }) => {
    let style = {};
    let Icon = FaClock;
    
    if (status === 'Approved') {
      style = { backgroundColor: '#D1FAE5', color: '#10B981' };
      Icon = FaCheckCircle;
    } else if (status === 'Pending') {
      style = { backgroundColor: '#FEF3C7', color: ORANGERED };
      Icon = FaClock;
    } else if (status === 'Rejected') {
      style = { backgroundColor: '#FEE2E2', color: '#EF4444' };
      Icon = FaTimesCircle;
    }

    return (
      <span 
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold`} 
        style={style}
      >
        <Icon className="mr-1 h-3 w-3" />
        {status}
      </span>
    );
  };
  
  // --- Mock Functions ---
  
  const handleReviewAction = (id, newStatus, reason = null) => {
    setProducts(products.map(p => 
      p.id === id 
        ? { ...p, status: newStatus, reason: reason }
        : p
    ));
    if (newStatus === 'Approved') {
        alert(`Product ID ${id} approved and is now live.`);
    } else if (newStatus === 'Rejected') {
        alert(`Product ID ${id} rejected. Reason: ${reason || 'N/A'}`);
    }
  };

  const handleToggleFeatured = (id) => {
    setProducts(products.map(p => 
      p.id === id 
        ? { ...p, isFeatured: !p.isFeatured }
        : p
    ));
  };
  
  const handleRemoveProduct = (id) => {
      if (window.confirm("Are you sure you want to permanently remove this product?")) {
           setProducts(products.filter(p => p.id !== id));
           alert(`Product ID ${id} removed.`);
      }
  };

  // --- View Renderers ---

  const renderProductReview = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Product', 'Vendor', 'Category', 'Status', 'Actions'].map(header => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <AnimatePresence>
            {pendingProducts.length > 0 ? (
              pendingProducts.map((product) => (
                <motion.tr 
                  key={product.id} 
                  className="hover:bg-gray-50 transition duration-150"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-3">
                    <FaFileImage className="text-gray-400" size={24} />
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.vendor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><ProductStatusBadge status={product.status} /></td>
                  
                  {/* Review Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    
                    {/* Approve Button (Green/Orangered) */}
                    <motion.button
                      onClick={() => handleReviewAction(product.id, 'Approved')}
                      className={`px-3 py-1 rounded-md text-white transition-colors duration-200 text-xs font-semibold`}
                      style={{ backgroundColor: '#10B981' }} // Green for approval
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaCheckCircle className="inline-block mr-1" /> Approve
                    </motion.button>

                    {/* Reject Button (Secondary - Black/Red) */}
                    <motion.button
                      onClick={() => handleReviewAction(product.id, 'Rejected', prompt("Enter reason for rejection:"))}
                      className="px-3 py-1 rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-200 text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaTimesCircle className="inline-block mr-1" /> Reject
                    </motion.button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                  🎉 No products are currently awaiting review!
                </td>
              </tr>
            )}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );

  const renderLiveProducts = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Product', 'Vendor', 'Category', 'Featured', 'Actions'].map(header => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <AnimatePresence>
            {liveProducts.map((product) => {
              const isFeatured = product.isFeatured;
              return (
                <motion.tr 
                  key={product.id} 
                  className="hover:bg-gray-50 transition duration-150"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-3">
                     <FaFileImage className="text-gray-400" size={24} />
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.vendor}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.category}</td>
                  
                  {/* Featured Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${isFeatured ? 'bg-[#FF4500] text-white' : 'bg-gray-200 text-gray-700'}`}>
                      <FaStar className="mr-1 h-3 w-3" />
                      {isFeatured ? 'Featured' : 'Standard'}
                    </span>
                  </td>
                  
                  {/* Management Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    
                    {/* Toggle Featured (Orangered/Black) */}
                    <motion.button
                      onClick={() => handleToggleFeatured(product.id)}
                      className={`px-3 py-1 rounded-md text-white transition-colors duration-200 text-xs font-semibold shadow-sm`}
                      style={{ backgroundColor: isFeatured ? '#333' : ORANGERED }} 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isFeatured ? <FaArrowCircleDown className="inline-block mr-1" /> : <FaArrowCircleUp className="inline-block mr-1" />}
                      {isFeatured ? 'Unfeature' : 'Feature'}
                    </motion.button>

                    {/* Remove/Delete (Red Accent) */}
                    <motion.button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition text-xs shadow-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTrash size={10} />
                    </motion.button>
                  </td>
                </motion.tr>
              );
            })}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );


  return (
    <div className="bg-gray-50 min-h-full -m-6 -mt-8 md:-m-8">
      
      {/* 1. Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Pending Review" value={pendingProducts.length} icon={<FaClock />} color={ORANGERED} />
        <StatCard title="Live Products" value={liveProducts.length} icon={<FaCheckCircle />} color="#10B981" />
        <StatCard title="Featured Products" value={liveProducts.filter(p => p.isFeatured).length} icon={<FaStar />} color="#3B82F6" />
      </div>

      {/* 2. Product Management Container (White Card) */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">
          Product Moderation & Promotion
        </h3>
        
        {/* Tab Navigation (Orangered Accent) */}
        <div className="flex border-b border-gray-200 mb-6">
          <motion.button
            onClick={() => setActiveView("review")}
            className={`py-2 px-6 text-sm font-semibold transition-colors duration-300 relative`}
          >
            Product Review Queue ({pendingProducts.length})
            {activeView === "review" && (
                <motion.div
                    layoutId="productTabIndicator"
                    className="absolute bottom-0 left-0 w-full h-[3px] rounded-t-lg"
                    style={{ backgroundColor: ORANGERED }}
                />
            )}
          </motion.button>

          <motion.button
            onClick={() => setActiveView("live")}
            className={`py-2 px-6 text-sm font-semibold transition-colors duration-300 relative`}
          >
            Live Products Management ({liveProducts.length})
             {activeView === "live" && (
                <motion.div
                    layoutId="productTabIndicator"
                    className="absolute bottom-0 left-0 w-full h-[3px] rounded-t-lg"
                    style={{ backgroundColor: ORANGERED }}
                />
            )}
          </motion.button>
        </div>
        
        {/* Content Area */}
        <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeView === "review" && renderProductReview()}
              {activeView === "live" && renderLiveProducts()}
            </motion.div>
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

export default ProductManage;