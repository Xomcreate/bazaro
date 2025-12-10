import React, { useState } from 'react';
import { 
  FaCreditCard, 
  FaDollarSign, 
  FaUndo, 
  FaTimesCircle, 
  FaCheckCircle, 
  FaSearch, 
  FaCog,
  FaRedo
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// --- Mock Data ---
const initialTransactions = [
  { id: 5001, orderId: 1001, type: "Sale", amount: 150.00, status: "Success", date: "2025-12-09 10:30" },
  { id: 5002, orderId: 1002, type: "Sale", amount: 45.50, status: "Failed", date: "2025-12-09 11:00" },
  { id: 5003, orderId: 1003, type: "Sale", amount: 300.99, status: "Success", date: "2025-12-08 15:45" },
  { id: 5004, orderId: 1003, type: "Refund", amount: -50.00, status: "Success", date: "2025-12-08 16:00" },
  { id: 5005, orderId: 1005, type: "Sale", amount: 50.00, status: "Success", date: "2025-12-07 09:10" },
];

function PaymentManage() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [activeView, setActiveView] = useState("transactions"); // 'transactions' or 'config'
  const [searchTerm, setSearchTerm] = useState("");
  
  // --- Computed Stats ---
  const successfulSales = transactions.filter(t => t.type === 'Sale' && t.status === 'Success');
  const totalRevenue = successfulSales.reduce((sum, t) => sum + t.amount, 0);
  const totalRefunds = transactions.filter(t => t.type === 'Refund' && t.status === 'Success').reduce((sum, t) => sum - t.amount, 0);
  const failedCount = transactions.filter(t => t.status === 'Failed').length;

  const filteredTransactions = transactions.filter(t => 
    t.orderId.toString().includes(searchTerm) || 
    t.id.toString().includes(searchTerm) ||
    t.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // --- Mock Functions ---

  const handleInitiateRefund = () => {
    const orderId = prompt("Enter the Order ID to refund:");
    if (orderId) {
      const amount = parseFloat(prompt(`Enter the refund amount for Order #${orderId}:`));
      if (amount > 0) {
        // Mock successful refund
        const newTransaction = {
          id: Date.now(),
          orderId: parseInt(orderId),
          type: "Refund",
          amount: -amount,
          status: "Success",
          date: new Date().toLocaleString()
        };
        setTransactions([newTransaction, ...transactions]);
        alert(`Refund of $${amount.toFixed(2)} processed for Order #${orderId}.`);
      } else {
        alert("Invalid amount.");
      }
    }
  };

  const handleUpdateGateway = () => {
      alert("Payment gateway settings saved successfully! (Mock Action)");
  };

  // --- Utility Components ---

  const StatCard = ({ title, value, icon, color, isCurrency = true }) => (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md border-t-4"
      style={{ borderColor: color }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">
            {isCurrency ? `$${value.toFixed(2).toLocaleString()}` : value}
          </p>
        </div>
        <div className="text-3xl opacity-50" style={{ color: color }}>{icon}</div>
      </div>
    </motion.div>
  );

  const TransactionBadge = ({ type, status }) => {
    let style = {};
    let Icon = FaCreditCard;
    
    if (status === 'Success') {
      style = { backgroundColor: '#D1FAE5', color: '#10B981' };
      Icon = FaCheckCircle;
    } else if (status === 'Failed') {
      style = { backgroundColor: '#FEE2E2', color: '#EF4444' };
      Icon = FaTimesCircle;
    } 
    
    if (type === 'Refund' && status === 'Success') {
      style = { backgroundColor: `rgba(255, 69, 0, 0.1)`, color: ORANGERED };
      Icon = FaUndo;
    }

    return (
      <span 
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold`} 
        style={style}
      >
        <Icon className="mr-1 h-3 w-3" />
        {type} ({status})
      </span>
    );
  };
  
  // --- View Renderers ---

  const renderTransactionHistory = () => (
    <>
        <div className="flex justify-between items-center mb-6">
            {/* Search */}
            <div className="relative grow md:w-1/3">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by Order ID or Transaction ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200"
              />
            </div>
            
            {/* Initiate Refund Button (Orangered Primary) */}
            <motion.button
              onClick={handleInitiateRefund}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold shadow-md transition ${ACCENT_CLASS}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUndo /> Initiate Refund
            </motion.button>
        </div>

        {/* Transaction Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Trans ID', 'Order ID', 'Type/Status', 'Amount', 'Date/Time'].map(header => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <AnimatePresence>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((t) => {
                    const isRefund = t.type === 'Refund';
                    const isFailed = t.status === 'Failed';
                    const amountColor = isRefund ? ORANGERED : isFailed ? '#EF4444' : '#10B981';

                    return (
                      <motion.tr 
                        key={t.id} 
                        className={`hover:bg-gray-50 transition duration-150 ${isFailed ? 'bg-red-50' : isRefund ? 'bg-orange-50' : ''}`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          #{t.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          #{t.orderId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <TransactionBadge type={t.type} status={t.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold" style={{ color: amountColor }}>
                          {isRefund ? '-' : ''}${Math.abs(t.amount).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {t.date}
                        </td>
                      </motion.tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                      No transactions found matching your criteria.
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
    </>
  );

  const renderGatewayConfiguration = () => (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
      <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800" style={{ color: ORANGERED }}>
        <FaCog /> Global Payment Settings
      </h4>
      <p className="text-sm text-gray-600 mb-6">
        Configure API keys, webhooks, and default currency settings for your active payment gateways.
      </p>
      
      <div className="space-y-6">
        {/* Gateway 1: Stripe Mock */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h5 className="font-semibold text-lg mb-2">Stripe Integration</h5>
          <label className="block mb-2">
            <span className="text-xs font-medium text-gray-600">Publishable Key</span>
            <input type="text" defaultValue="pk_live_******************" className="mt-1 w-full px-3 py-2 border rounded-md" />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-gray-600">Secret Key</span>
            <input type="password" defaultValue="sk_live_******************" className="mt-1 w-full px-3 py-2 border rounded-md" />
          </label>
          <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-medium text-green-600 flex items-center gap-1"><FaCheckCircle/> Status: Active</span>
              <button className="text-sm text-red-600 hover:underline">Deactivate</button>
          </div>
        </div>

        {/* Gateway 2: Local Gateway Mock (Paystack/Flutterwave) */}
        <div className="p-4 border border-gray-300 rounded-lg">
          <h5 className="font-semibold text-lg mb-2">Local Gateway (e.g., Paystack)</h5>
          <label className="block mb-2">
            <span className="text-xs font-medium text-gray-600">API Key</span>
            <input type="text" defaultValue="api_key_local_********" className="mt-1 w-full px-3 py-2 border rounded-md" />
          </label>
          <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-medium text-yellow-600 flex items-center gap-1"><FaClock/> Status: Needs update</span>
              <button className="text-sm text-blue-600 hover:underline">Test Connection</button>
          </div>
        </div>
      </div>
      
      <motion.button
        onClick={handleUpdateGateway}
        className={`mt-6 w-full py-2 rounded-lg font-semibold shadow-md transition ${ACCENT_CLASS}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <FaRedo className="inline-block mr-2" /> Save Configuration Changes
      </motion.button>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-full -m-6 -mt-8 md:-m-8">
      
      {/* 1. Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Revenue (Success)" value={totalRevenue} icon={<FaDollarSign />} color="#10B981" />
        <StatCard title="Total Refunds" value={totalRefunds} icon={<FaUndo />} color={ORANGERED} />
        <StatCard title="Failed Transactions" value={failedCount} icon={<FaTimesCircle />} color="#EF4444" isCurrency={false} />
      </div>

      {/* 2. Payment Management Container (White Card) */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">
          Financial Operations
        </h3>
        
        {/* Tab Navigation (Orangered Accent) */}
        <div className="flex border-b border-gray-200 mb-6">
          <motion.button
            onClick={() => setActiveView("transactions")}
            className={`py-2 px-6 text-sm font-semibold transition-colors duration-300 relative`}
          >
            Transaction History ({transactions.length})
            {activeView === "transactions" && (
                <motion.div
                    layoutId="paymentTabIndicator"
                    className="absolute bottom-0 left-0 w-full h-[3px] rounded-t-lg"
                    style={{ backgroundColor: ORANGERED }}
                />
            )}
          </motion.button>

          <motion.button
            onClick={() => setActiveView("config")}
            className={`py-2 px-6 text-sm font-semibold transition-colors duration-300 relative`}
          >
            Gateway Configuration
             {activeView === "config" && (
                <motion.div
                    layoutId="paymentTabIndicator"
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
              {activeView === "transactions" && renderTransactionHistory()}
              {activeView === "config" && renderGatewayConfiguration()}
            </motion.div>
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

export default PaymentManage;