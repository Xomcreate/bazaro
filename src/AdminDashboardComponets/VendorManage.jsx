import React, { useState } from 'react';
import { 
  FaStore, 
  FaUserCheck, 
  FaClock, 
  FaChartLine, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaMoneyBillWave, 
  FaUserMinus,
  FaFileAlt
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// --- Mock Data ---
const initialPendingVendors = [
  { id: 101, storeName: "Tech Hub", owner: "James K.", email: "james@tech.com", registrationDate: "2025-12-01", status: "Pending" },
  { id: 102, storeName: "Organic Market", owner: "Maria L.", email: "maria@org.com", registrationDate: "2025-12-05", status: "Pending" },
];

const initialActiveVendors = [
  { id: 201, storeName: "Fashion Forward", owner: "Alice G.", email: "alice@fashion.com", isVerified: true, status: "Active", rating: 4.8, balance: 125000 },
  { id: 202, storeName: "Book Worm", owner: "Bob S.", email: "bob@books.com", isVerified: false, status: "Active", rating: 3.5, balance: 45000 },
  { id: 203, storeName: "Gloves & Gear", owner: "Chris R.", email: "chris@gear.com", isVerified: true, status: "Suspended", rating: 4.1, balance: 0 },
];

function VendorManage() {
  const [pendingVendors, setPendingVendors] = useState(initialPendingVendors);
  const [activeVendors, setActiveVendors] = useState(initialActiveVendors);
  const [activeView, setActiveView] = useState("pending"); // 'pending' or 'active'

  // --- Utility Components ---

  const StatCard = ({ title, value, icon, color }) => (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md border-t-4"
      style={{ borderColor: color }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
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

  const StatusBadge = ({ status }) => {
    let style = {};
    let Icon = FaClock;
    
    if (status === 'Active') {
      style = { backgroundColor: '#D1FAE5', color: '#10B981' };
      Icon = FaCheckCircle;
    } else if (status === 'Pending') {
      style = { backgroundColor: '#FEF3C7', color: ORANGERED };
      Icon = FaClock;
    } else if (status === 'Suspended') {
      style = { backgroundColor: '#FEE2E2', color: '#EF4444' };
      Icon = FaUserMinus;
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

  const handleApprove = (vendorId) => {
    const vendor = pendingVendors.find(v => v.id === vendorId);
    if (vendor) {
        setPendingVendors(pendingVendors.filter(v => v.id !== vendorId));
        // Simulate adding to active vendors (defaulting to unverified but active)
        setActiveVendors([...activeVendors, { ...vendor, isVerified: false, status: "Active", rating: 0, balance: 0 }]);
        alert(`Vendor ${vendor.storeName} approved!`);
    }
  };

  const handleDecline = (vendorId) => {
    setPendingVendors(pendingVendors.filter(v => v.id !== vendorId));
    alert(`Vendor registration declined for ID: ${vendorId}`);
  };

  const handleToggleSuspend = (vendorId) => {
    setActiveVendors(activeVendors.map(vendor => 
      vendor.id === vendorId 
        ? { ...vendor, status: vendor.status === "Active" ? "Suspended" : "Active" }
        : vendor
    ));
  };
  
  const handleVerifyIdentity = (vendorId) => {
    setActiveVendors(activeVendors.map(vendor => 
      vendor.id === vendorId 
        ? { ...vendor, isVerified: !vendor.isVerified }
        : vendor
    ));
  };
  
  const handlePayout = (vendorId, amount) => {
      alert(`Processing payout of ₦${amount.toLocaleString()} for vendor ID: ${vendorId}`);
      // In a real app, this would trigger an API call and update the balance.
  };


  // --- Vendor View Rendering ---

  const renderPendingVendors = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Store Name', 'Owner', 'Email', 'Registered', 'Actions'].map(header => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <AnimatePresence>
            {pendingVendors.length > 0 ? (
              pendingVendors.map((vendor) => (
                <motion.tr 
                  key={vendor.id} 
                  className="hover:bg-gray-50 transition duration-150"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vendor.storeName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vendor.owner}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vendor.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{vendor.registrationDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {/* Approve Button (Primary - Orangered) */}
                    <motion.button
                      onClick={() => handleApprove(vendor.id)}
                      className={`px-3 py-1 rounded-md text-white transition-colors duration-200 text-xs font-semibold ${ACCENT_CLASS}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaCheckCircle className="inline-block mr-1" /> Approve
                    </motion.button>

                    {/* Decline Button (Secondary - Black) */}
                    <motion.button
                      onClick={() => handleDecline(vendor.id)}
                      className="px-3 py-1 rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-200 text-xs font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaTimesCircle className="inline-block mr-1" /> Decline
                    </motion.button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                  🎉 All new vendor registrations have been reviewed.
                </td>
              </tr>
            )}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );

  const renderActiveVendors = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Store Name', 'Status', 'Verified', 'Balance (₦)', 'Actions'].map(header => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
           <AnimatePresence>
            {activeVendors.map((vendor) => {
              const isSuspended = vendor.status === 'Suspended';
              const verifyColor = vendor.isVerified ? 'text-green-600' : `text-[${ORANGERED}]`;

              return (
                <motion.tr 
                  key={vendor.id} 
                  className="hover:bg-gray-50 transition duration-150"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vendor.storeName}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={vendor.status} /></td>
                  
                  {/* Identity Verification Status */}
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${verifyColor}`}>
                    {vendor.isVerified ? 'ID Verified' : 'Unverified'}
                    <motion.button
                      onClick={() => handleVerifyIdentity(vendor.id)}
                      className={`ml-2 text-xs font-semibold p-1 rounded-full ${vendor.isVerified ? 'bg-green-50 hover:bg-green-100' : `bg-red-50 hover:bg-red-100`}`}
                      style={{ color: vendor.isVerified ? '#065F46' : ORANGERED }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaFileAlt />
                    </motion.button>
                  </td>

                  {/* Payout Management */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                    ₦{vendor.balance.toLocaleString()}
                    <motion.button
                        onClick={() => handlePayout(vendor.id, vendor.balance)}
                        disabled={vendor.balance <= 0 || isSuspended}
                        className={`ml-3 px-3 py-1 rounded-md text-white text-xs font-semibold transition ${vendor.balance > 0 && !isSuspended ? ACCENT_CLASS : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                      <FaMoneyBillWave className="inline-block mr-1" /> Payout
                    </motion.button>
                  </td>

                  {/* Suspension Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <motion.button
                      onClick={() => handleToggleSuspend(vendor.id)}
                      className={`px-3 py-1 rounded-md text-white transition-colors duration-200 text-xs font-semibold shadow-md`}
                      style={{ backgroundColor: isSuspended ? '#10B981' : '#333' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaUserMinus className="inline-block mr-1" /> 
                      {isSuspended ? 'Activate' : 'Suspend'}
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Vendors" value={activeVendors.length} icon={<FaStore />} color="#1a1a1a" />
        <StatCard title="Pending Review" value={pendingVendors.length} icon={<FaClock />} color={ORANGERED} />
        <StatCard title="Verified Identity" value={activeVendors.filter(v => v.isVerified).length} icon={<FaUserCheck />} color="#10B981" />
        <StatCard title="Total Payouts" value={"₦5.3M"} icon={<FaChartLine />} color="#3B82F6" />
      </div>

      {/* 2. Vendor Management Container (White Card) */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">
          Vendor Account Management
        </h3>
        
        {/* Tab Navigation (Orangered Accent) */}
        <div className="flex border-b border-gray-200 mb-6">
          <motion.button
            onClick={() => setActiveView("pending")}
            className={`py-2 px-6 text-sm font-semibold transition-colors duration-300 relative`}
          >
            New Registrations ({pendingVendors.length})
            {activeView === "pending" && (
                <motion.div
                    layoutId="vendorTabIndicator"
                    className="absolute bottom-0 left-0 w-full h-[3px] rounded-t-lg"
                    style={{ backgroundColor: ORANGERED }}
                />
            )}
          </motion.button>

          <motion.button
            onClick={() => setActiveView("active")}
            className={`py-2 px-6 text-sm font-semibold transition-colors duration-300 relative`}
          >
            Active Vendors ({activeVendors.length})
             {activeView === "active" && (
                <motion.div
                    layoutId="vendorTabIndicator"
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
              {activeView === "pending" && renderPendingVendors()}
              {activeView === "active" && renderActiveVendors()}
            </motion.div>
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

export default VendorManage;