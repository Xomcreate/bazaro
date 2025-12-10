import React, { useState } from "react";
import {
  FaLink,
  FaDollarSign,
  FaUsers,
  FaUserPlus,
  FaCheckCircle,
  FaClock,
  FaSearch,
  FaFilter,
  FaTag,
  FaGift
} from "react-icons/fa";
import { motion } from "framer-motion";

// ---------------------------------------------------------
// CONSTANTS
// ---------------------------------------------------------
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// ---------------------------------------------------------
// MOCK DATA
// ---------------------------------------------------------
const mockReferralKpis = [
  { title: "Total Referred Users", value: 1250, icon: FaUsers, color: '#3B82F6' },
  { title: "Successful Conversions", value: 890, icon: FaCheckCircle, color: '#10B981' },
  { title: "Pending Payouts", value: 4500, unit: '₦', icon: FaClock, color: '#F59E0B' },
  { title: "Total Referral Revenue", value: 520000, unit: '₦', icon: FaDollarSign, color: ORANGERED },
];

const mockReferralActivity = [
  { id: 101, referrer: "Alice Johnson", referee: "Bob Smith", status: "Converted", reward: 50, date: "2025-12-08" },
  { id: 102, referrer: "Charlie Brown", referee: "David Lee", status: "Pending Payout", reward: 100, date: "2025-12-07" },
  { id: 103, referrer: "Alice Johnson", referee: "Eve Adams", status: "Clicked", reward: 0, date: "2025-12-06" },
  { id: 104, referrer: "Mark Vender", referee: "Laura K.", status: "Converted", reward: 75, date: "2025-12-05" },
];

const STATUS_COLORS = {
  'Converted': 'bg-green-100 text-green-700',
  'Pending Payout': 'bg-yellow-100 text-yellow-700',
  'Clicked': 'bg-gray-100 text-gray-700',
};

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
function Refermanage() {
  const [activity, setActivity] = useState(mockReferralActivity);
  const [searchTerm, setSearchTerm] = useState("");

  // --- Utility Components ---
  const StatCard = ({ title, value, unit = '', icon: Icon, color }) => (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg border-l-4"
      style={{ borderColor: color }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">
            {unit}{value.toLocaleString()}
          </p>
        </div>
        <Icon className="text-3xl opacity-50" style={{ color: color }} />
      </div>
    </motion.div>
  );

  const ActivityRow = ({ item }) => {
    const statusClass = STATUS_COLORS[item.status] || STATUS_COLORS['Clicked'];
    
    return (
      <motion.tr
        className="border-b border-gray-200 transition-colors duration-150 hover:bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.referrer}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.referee}</td>
        
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}>
            {item.status}
          </span>
        </td>
        
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-semibold">
            <div className="flex items-center gap-2">
                <FaGift className="text-yellow-500" size={12}/> ₦{item.reward.toLocaleString()}
            </div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
        
        <td className="px-6 py-4 whitespace-nowrap">
            {item.status === 'Pending Payout' && (
                <motion.button 
                    onClick={() => alert(`Processing payout for ID ${item.id}`)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold shadow-sm ${ACCENT_CLASS}`}
                    whileHover={{ scale: 1.05 }}
                >
                    Process Payout
                </motion.button>
            )}
        </td>
      </motion.tr>
    );
  };
  
  // --- Filtered Data ---
  const filteredActivity = activity.filter(item =>
    item.referrer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.referee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---------------------------------------------------------
  // MAIN RETURN
  // ---------------------------------------------------------
  return (
    <div className="bg-gray-50 min-h-full p-8">
      
      {/* Header and Program Link */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-4 md:mb-0">
            <FaLink style={{ color: ORANGERED }} /> Referral Program Management
        </h2>
        <motion.button
          onClick={() => alert("Redirecting to Referral Settings...")}
          className={`px-5 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md bg-black text-white hover:bg-gray-800`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaUserPlus size={12}/> Edit Program Rules
        </motion.button>
      </div>

      {/* 1. Key Performance Indicators (KPIs) Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {mockReferralKpis.map((kpi, index) => (
          <StatCard key={index} {...kpi} />
        ))}
      </div>

      {/* 2. Referral Activity Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-x-auto border border-gray-100">
        
        {/* Table Header/Controls */}
        <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">Recent Referral Activity Log</h3>
            <div className="relative w-full md:w-1/3">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search Referrer or Referee..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200 text-sm"
                />
            </div>
        </div>
        
        {/* Table Body */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {['Referrer Name', 'Referee Name', 'Status', 'Reward Value', 'Date', 'Actions'].map(header => (
                <th key={header} className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredActivity.length > 0 ? (
                filteredActivity.map(item => (
                    <ActivityRow key={item.id} item={item} />
                ))
            ) : (
                <tr>
                    <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                      No referral activity found.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Refermanage;