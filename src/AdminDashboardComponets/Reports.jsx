import React, { useState } from 'react';
import { 
  FaChartLine, 
  FaDollarSign, 
  FaUsers, 
  FaChartBar, 
  FaBox, 
  FaStore, 
  FaCalendarAlt,
  FaFilter,
  FaChevronDown,
  FaArrowUp,
  FaStar
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// --- Mock Data ---
const mockSalesData = [
    { day: "Mon", sales: 520, traffic: 1200 },
    { day: "Tue", sales: 850, traffic: 1550 },
    { day: "Wed", sales: 710, traffic: 1400 },
];

const mockTopProducts = [
    { name: "Premium Smartwatch", sales: 150, revenue: 12500, change: 12 },
    { name: "Organic Coffee Blend", sales: 98, revenue: 4900, change: 5 },
    { name: "Wireless Charging Pad", sales: 85, revenue: 3400, change: -2 },
];

const mockTopVendors = [
    { name: "ElectroMax Global", revenue: 55000, orders: 450, rating: 4.8 },
    { name: "Fashion Nova LTD", revenue: 32000, orders: 610, rating: 4.5 },
    { name: "Home Goods Pro", revenue: 21000, orders: 280, rating: 4.9 },
];

function Reports() {
  const [timePeriod, setTimePeriod] = useState("Weekly"); // Daily, Weekly, Monthly, Custom

  // --- Utility Components ---

  const StatCard = ({ title, value, icon, color, trend = null, unit = '' }) => {
    const isPositive = trend > 0;
    const trendColor = isPositive ? 'text-green-600' : 'text-red-600';

    return (
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-md border-l-4"
        style={{ borderColor: color }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div className="flex items-end justify-between mt-1">
          <p className="text-3xl font-bold text-gray-900">{unit}{value.toLocaleString()}</p>
          {trend !== null && (
            <div className={`flex items-center text-xs font-semibold ${trendColor}`}>
              <FaArrowUp className={`mr-1 transform ${isPositive ? '' : 'rotate-180'}`} size={10} />
              {Math.abs(trend)}%
            </div>
          )}
        </div>
      </motion.div>
    );
  };
  
  const ChartPlaceholder = ({ title, data, primaryColor, secondaryColor, chartType }) => (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 h-96">
      <h4 className="text-lg font-bold text-gray-800 mb-4">{title}</h4>
      <div className="flex flex-col items-center justify-center h-[calc(100%-40px)] bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <FaChartLine size={36} className="mb-2" style={{ color: primaryColor }} />
        <p className="text-sm text-gray-500">
          {chartType} Visualization Placeholder ({data.length} data points)
        </p>
        <p className="text-xs text-gray-400">
          (Integration for Chart.js/Recharts goes here)
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-full -m-6 -mt-8 md:-m-8">
      
      {/* --- 1. Time Period Filter Bar --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 p-4 bg-white rounded-xl shadow-md border-t-4" style={{ borderColor: ORANGERED }}>
        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-xl" style={{ color: ORANGERED }} />
          <h3 className="text-xl font-bold text-gray-900">Performance Overview</h3>
        </div>
        
        <div className="flex gap-2">
          {['Daily', 'Weekly', 'Monthly', 'Custom'].map(period => (
            <motion.button
              key={period}
              onClick={() => setTimePeriod(period)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                timePeriod === period 
                  ? ACCENT_CLASS 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {period}
              {period === 'Custom' && <FaChevronDown className="inline-block ml-2" size={10} />}
            </motion.button>
          ))}
        </div>
      </div>

      <hr className="my-6" />

      {/* --- 2. Key Performance Indicators (KPIs) --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value={548000} unit="₦" icon={<FaDollarSign />} color="#10B981" trend={15.2} />
        <StatCard title="Total Orders" value={2105} unit="" icon={<FaChartBar />} color="#3B82F6" trend={8.1} />
        <StatCard title="Total Users/Sessions" value={98500} unit="" icon={<FaUsers />} color="#F59E0B" trend={-3.5} />
        <StatCard title="Conversion Rate" value={2.1} unit="%" icon={<FaChartLine />} color={ORANGERED} trend={0.5} />
      </div>

      <hr className="my-6" />

      {/* --- 3. Charts and Visualizations (Sales & Traffic) --- */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Performance Charts</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* Sales Performance Chart (Orangered) */}
        <ChartPlaceholder 
          title={`Sales Volume & Revenue (${timePeriod})`}
          data={mockSalesData}
          primaryColor={ORANGERED}
          secondaryColor="#10B981"
          chartType="Bar/Line Chart"
        />
        
        {/* Traffic Performance Chart (Black/Blue) */}
        <ChartPlaceholder 
          title={`Website Traffic & Engagement (${timePeriod})`}
          data={mockSalesData}
          primaryColor="#333"
          secondaryColor="#3B82F6"
          chartType="Area Chart"
        />
      </div>

      <hr className="my-6" />

      {/* --- 4. Top Performers Tables --- */}
      <h3 className="text-xl font-bold text-gray-900 mb-4">Top Sellers & Products</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Top Products */}
        <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaBox style={{ color: ORANGERED }} /> Top Selling Products
            </h4>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {['Product', 'Sales Qty', 'Revenue', 'Change'].map(header => (
                            <th key={header} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {mockTopProducts.map((p, index) => (
                        <motion.tr key={p.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                            <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{p.name}</td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">{p.sales}</td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold">₦{p.revenue.toLocaleString()}</td>
                            <td className={`px-3 py-3 whitespace-nowrap text-sm font-semibold ${p.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                <FaArrowUp size={8} className={`inline-block mr-1 transform ${p.change > 0 ? '' : 'rotate-180'}`} /> {Math.abs(p.change)}%
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Top Vendors */}
        <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaStore style={{ color: ORANGERED }} /> Top Performing Vendors
            </h4>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {['Vendor', 'Revenue', 'Orders', 'Rating'].map(header => (
                            <th key={header} className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {mockTopVendors.map((v, index) => (
                        <motion.tr key={v.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}>
                            <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{v.name}</td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm font-semibold">₦{v.revenue.toLocaleString()}</td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-600">{v.orders}</td>
                            <td className="px-3 py-3 whitespace-nowrap text-sm text-yellow-500 font-semibold">{v.rating} <FaStar size={10} className="inline-block" /></td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;