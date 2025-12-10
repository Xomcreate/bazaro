import React, { useState } from 'react';
import { 
  FaDollarSign, 
  FaClipboardList, 
  FaUsers, 
  FaStore, 
  FaExclamationTriangle, 
  FaChartLine,
  FaClock,
  FaArrowUp,
  FaBell,
  FaCheckCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// --- Mock Data (Re-used) ---
const mockKpis = [
  { title: "Total Revenue (MoM)", value: 752400, unit: '₦', icon: FaDollarSign, color: '#10B981', trend: 15.2 },
  { title: "New Orders (Last 7 Days)", value: 450, unit: '', icon: FaClipboardList, color: '#3B82F6', trend: 8.1 },
  { title: "Active Vendors", value: 124, unit: '', icon: FaStore, color: '#F59E0B', trend: 3.5 },
  { title: "Shipping Issues (Pending)", value: 12, unit: '', icon: FaExclamationTriangle, color: ORANGERED, trend: -5.0 },
];

const mockActivity = [
    { type: 'order', id: '#1006', description: 'New order placed by Jane Doe.', time: '2 minutes ago', status: 'Pending', icon: FaClipboardList, color: '#3B82F6' },
    { type: 'issue', id: '#1002', description: 'Shipping issue logged (Lost in Transit).', time: '15 minutes ago', status: 'Action Needed', icon: FaExclamationTriangle, color: ORANGERED },
    { type: 'vendor', id: 'V-205', description: 'New vendor registration pending review.', time: '1 hour ago', status: 'Pending', icon: FaStore, color: '#F59E0B' },
    { type: 'payment', id: 'TRX-5008', description: 'Large refund processed.', time: '3 hours ago', status: 'Refunded', icon: FaDollarSign, color: ORANGERED },
    { type: 'user', id: 'U-310', description: 'New user signed up.', time: '5 hours ago', status: 'Success', icon: FaUsers, color: '#10B981' },
];

// --- Utility Components ---

const StatCard = ({ title, value, unit, icon: Icon, color, trend = null }) => {
  const isPositive = trend >= 0;
  const trendColor = isPositive ? 'text-green-600' : 'text-red-600';

  return (
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
      {trend !== null && (
        <div className={`mt-2 flex items-center text-sm font-semibold ${trendColor}`}>
          <FaArrowUp size={10} className={`mr-1 transform ${isPositive ? '' : 'rotate-180'}`} />
          {Math.abs(trend)}% vs Last Period
        </div>
      )}
    </motion.div>
  );
};

const ActivityItem = ({ item }) => (
    <div className="flex items-start py-3 border-b border-gray-100 hover:bg-gray-50 transition duration-150">
        <div className="shrink-0 pt-1">
            <item.icon size={16} style={{ color: item.color }} />
        </div>
        <div className="ml-3 grow">
            <p className="text-sm font-medium text-gray-900">
                <span className="font-bold mr-1" style={{ color: item.color }}>{item.status}:</span> {item.description}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
                {item.id} &bull; {item.time}
            </p>
        </div>
        <motion.button 
            className="text-xs text-gray-500 hover:text-black transition p-1 rounded-md"
            whileHover={{ scale: 1.1, backgroundColor: '#f3f4f6' }}
            title="View Details"
            onClick={() => console.log(`Viewing activity ${item.id}`)}
        >
            View
        </motion.button>
    </div>
);

const AlertItem = ({ icon: Icon, message, linkText, color, linkTo }) => (
    <div className="flex items-center p-3 rounded-lg border border-gray-200 bg-gray-50 transition hover:bg-white">
        <Icon size={20} className={`shrink-0 ${color}`} />
        <p className="text-sm ml-3 grow text-gray-700">{message}</p>
        <motion.a 
            href={linkTo} 
            className={`text-xs font-semibold whitespace-nowrap ml-4 transition`}
            style={{ color: ORANGERED }}
            whileHover={{ textDecoration: 'underline' }}
        >
            {linkText} &raquo;
        </motion.a>
    </div>
);

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
function PlatformOverview() {
  
  return (
    // Note: The Admin component provides the main padding/background, so this content fits nicely inside.
    <div className="min-h-full"> 
      
      {/* 1. Welcome Header and Quick Stats */}
      <motion.div 
        className="mb-8 p-6 bg-gray-100 rounded-xl shadow-inner border border-gray-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            Welcome back, Admin! 👋
        </h2>
        <p className="text-gray-600 mt-1">
            Here's a quick summary of your platform's performance.
        </p>
      </motion.div>

      {/* 2. Key Performance Indicators (KPIs) Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {mockKpis.map((kpi, index) => (
          <StatCard key={index} {...kpi} />
        ))}
      </div>

      {/* 3. Dual Panel: Charts (Left) & Activity/Alerts (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* --- Left Column: Charts and Quick Reports (2/3 width) --- */}
        <div className="lg:col-span-2 space-y-6">
            
            {/* Sales Trend Chart Placeholder (Orangered Highlight) */}
            <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-96"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <FaChartLine size={20} style={{ color: ORANGERED }} /> Sales Trend (Last 30 Days)
                </h3>
                <div className="h-[calc(100%-55px)] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <p className="text-gray-500 text-center p-4">
                        

[Image of Sales Trend Line Chart]

                        <br/>
                        **Visual Data Integration:** Detailed sales performance chart.
                    </p>
                </div>
            </motion.div>
            
            {/* Actionable Alerts Card */}
            <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border-t-4"
                style={{ borderColor: ORANGERED }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 pb-2 border-b border-gray-100">
                    <FaBell className="text-red-500" /> Action Required
                </h3>
                <div className="space-y-3">
                    <AlertItem 
                        icon={FaExclamationTriangle} 
                        message="3 Orders have been flagged with shipping issues. Requires manual review." 
                        linkText="Resolve Issues"
                        color="text-red-500"
                        linkTo="/orders/issues"
                    />
                     <AlertItem 
                        icon={FaClock} 
                        message="18 Pending Vendor registrations awaiting approval." 
                        linkText="Review Vendors"
                        color="text-yellow-600"
                        linkTo="/vendors/pending"
                    />
                    <AlertItem 
                        icon={FaUsers} 
                        message="New Contact messages received in the Inbox." 
                        linkText="View Inbox"
                        color="text-blue-600"
                        linkTo="/contact"
                    />
                </div>
            </motion.div>

        </div>
        
        {/* --- Right Column: Recent Activity (1/3 width) --- */}
        <motion.div 
            className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-3">
                <FaClock className="text-gray-600" /> Recent Activity Feed
            </h3>
            
            <div className="divide-y divide-gray-100">
                {mockActivity.map((item, index) => (
                    <ActivityItem key={index} item={item} />
                ))}
            </div>
            
            <motion.button
                className={`mt-6 w-full py-2 rounded-lg font-semibold text-sm transition shadow-md bg-black text-white hover:bg-gray-800`}
                whileHover={{ scale: 1.02 }}
                onClick={() => alert("Loading full activity logs...")}
            >
                View Full Activity Log
            </motion.button>

        </motion.div>
      </div>

    </div>
  );
}

export default PlatformOverview;