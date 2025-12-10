import React, { useState } from 'react';
import { 
  FaClipboardList, 
  FaShippingFast, 
  FaCheckCircle, 
  FaClock, 
  FaTimesCircle, 
  FaExclamationTriangle,
  FaSearch,
  FaEye,
  FaTruck,
  FaAngleDown
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// --- Mock Data ---
const initialOrders = [
  { id: 1001, customer: "Alice Johnson", date: "2025-12-09", total: 150.00, status: "Delivered", tracking: "TRK1001", carrier: "FedEx" },
  { id: 1002, customer: "Bob Smith", date: "2025-12-09", total: 45.50, status: "Issue", tracking: "TRK1002", carrier: "UPS", issueReason: "Lost in transit" },
  { id: 1003, customer: "Charlie Brown", date: "2025-12-08", total: 300.99, status: "Shipped", tracking: "TRK1003", carrier: "DHL" },
  { id: 1004, customer: "Diana Prince", date: "2025-12-08", total: 99.00, status: "Pending", tracking: null, carrier: null },
  { id: 1005, customer: "Evan Ross", date: "2025-12-07", total: 50.00, status: "Cancelled", tracking: null, carrier: null },
];

function OrdersManage() {
  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All"); // 'All', 'Pending', 'Shipped', 'Delivered', 'Issue', 'Cancelled'
  
  // --- Computed Stats ---
  const totalOrders = orders.length;
  const issueCount = orders.filter(o => o.status === 'Issue').length;
  const pendingCount = orders.filter(o => o.status === 'Pending').length;
  const deliveredCount = orders.filter(o => o.status === 'Delivered').length;

  // --- Filtering Logic ---
  const filteredOrders = orders
    .filter(order => filterStatus === 'All' || order.status === filterStatus)
    .filter(order => 
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
      order.id.toString().includes(searchTerm)
    );
  
  // --- Mock Functions ---

  const handleUpdateStatus = (id, newStatus) => {
    setOrders(orders.map(o => 
      o.id === id 
        ? { ...o, status: newStatus, issueReason: newStatus === 'Issue' ? 'Manual Flag' : null }
        : o
    ));
    alert(`Order ${id} status updated to: ${newStatus}`);
  };

  const handleViewDetails = (order) => {
    alert(`Viewing Details for Order #${order.id}\nCustomer: ${order.customer}\nTotal: $${order.total.toFixed(2)}\nStatus: ${order.status}`);
  };

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

  const OrderStatusBadge = ({ status }) => {
    let style = {};
    let Icon = FaClipboardList;
    
    if (status === 'Delivered') {
      style = { backgroundColor: '#D1FAE5', color: '#10B981' };
      Icon = FaCheckCircle;
    } else if (status === 'Shipped') {
      style = { backgroundColor: '#DBEAFE', color: '#3B82F6' };
      Icon = FaShippingFast;
    } else if (status === 'Pending') {
      style = { backgroundColor: '#FEF3C7', color: '#F59E0B' };
      Icon = FaClock;
    } else if (status === 'Issue') {
      style = { backgroundColor: '#FEE2E2', color: ORANGERED };
      Icon = FaExclamationTriangle;
    } else if (status === 'Cancelled') {
      style = { backgroundColor: '#E5E7EB', color: '#6B7280' };
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
  
  const StatusFilterButton = ({ status, count, color, icon: Icon }) => {
    const isActive = filterStatus === status;
    const isIssue = status === 'Issue';

    return (
      <motion.button
        onClick={() => setFilterStatus(status)}
        className={`flex items-center justify-center p-4 rounded-xl shadow-sm text-sm font-semibold transition-all duration-200 border-2 ${
          isActive 
            ? `border-[${ORANGERED}] text-white`
            : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50'
        }`}
        style={isActive ? { backgroundColor: isIssue ? ORANGERED : '#333' } : {}}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Icon className="mr-2 h-4 w-4" style={isActive ? { color: 'white' } : { color: color }} />
        {status} ({count})
      </motion.button>
    );
  };

  return (
    <div className="bg-gray-50 min-h-full -m-6 -mt-8 md:-m-8">
      
      {/* 1. Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Orders" value={totalOrders} icon={<FaClipboardList />} color="#1a1a1a" />
        <StatCard title="Issues" value={issueCount} icon={<FaExclamationTriangle />} color={ORANGERED} />
        <StatCard title="Pending Fulfillment" value={pendingCount} icon={<FaClock />} color="#F59E0B" />
        <StatCard title="Delivered" value={deliveredCount} icon={<FaCheckCircle />} color="#10B981" />
      </div>

      {/* 2. Order Management List (White Card) */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">
          Order Processing Queue
        </h3>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <div className="relative grow md:w-1/3">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Order ID or Customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
             <StatusFilterButton status="All" count={totalOrders} icon={FaClipboardList} color="#1a1a1a" />
             <StatusFilterButton status="Pending" count={pendingCount} icon={FaClock} color="#F59E0B" />
             <StatusFilterButton status="Shipped" count={orders.filter(o => o.status === 'Shipped').length} icon={FaShippingFast} color="#3B82F6" />
             <StatusFilterButton status="Delivered" count={deliveredCount} icon={FaCheckCircle} color="#10B981" />
             <StatusFilterButton status="Issue" count={issueCount} icon={FaExclamationTriangle} color={ORANGERED} />
          </div>
        </div>

        {/* Order Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Order ID', 'Customer', 'Date', 'Total', 'Status', 'Tracking', 'Actions'].map(header => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <AnimatePresence>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => {
                    const isIssue = order.status === 'Issue';
                    return (
                      <motion.tr 
                        key={order.id} 
                        className={`hover:bg-gray-50 transition duration-150 ${isIssue ? 'bg-red-50' : ''}`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{ color: isIssue ? ORANGERED : '#333' }}>
                          #{order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          ${order.total.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <OrderStatusBadge status={order.status} />
                          {isIssue && <p className="text-xs mt-1 text-red-500 italic">({order.issueReason || 'Review Needed'})</p>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                           {order.tracking || 'N/A'} ({order.carrier || 'Unassigned'})
                        </td>
                        
                        {/* Actions */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          
                          {/* View Details Button (Primary) */}
                          <motion.button
                            onClick={() => handleViewDetails(order)}
                            className={`px-3 py-1 rounded-md text-white transition-colors duration-200 text-xs font-semibold shadow-md ${ACCENT_CLASS}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaEye className="inline-block mr-1" /> View Details
                          </motion.button>

                          {/* Update Status Dropdown (Mocked) */}
                          <motion.button
                            className="px-3 py-1 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-200 text-xs font-semibold"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleUpdateStatus(order.id, prompt('Update status to: (Shipped/Delivered/Issue/Cancelled)', order.status))}
                          >
                            Update <FaAngleDown className="inline-block ml-1" size={10} />
                          </motion.button>
                        </td>
                      </motion.tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-10 text-center text-gray-500">
                      No orders found matching your criteria.
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
        
        {/* 3. Delivery Partner Management (Simplified) */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
            <motion.button
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold shadow-md transition bg-black text-white hover:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => alert("Opening Delivery Partner Configuration Interface...")}
            >
                <FaTruck /> Manage Delivery Partners
            </motion.button>
        </div>

      </motion.div>
    </div>
  );
}

export default OrdersManage;