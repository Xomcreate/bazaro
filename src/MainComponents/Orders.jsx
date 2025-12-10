import React, { useState } from 'react';
import { Package, Search, Calendar, DollarSign, ChevronRight, RefreshCw, Eye, XCircle } from 'lucide-react';

// --- Mock Data ---
const mockOrders = [
  {
    id: 'BZR-20250915-001',
    date: 'Dec 1, 2025',
    total: 394.00,
    status: 'Delivered',
    itemsCount: 4,
    itemsPreview: "Headphones, Keyboard + 2 others",
  },
  {
    id: 'BZR-20250912-002',
    date: 'Nov 28, 2025',
    total: 145.50,
    status: 'Shipped',
    itemsCount: 1,
    itemsPreview: "Minimalist Desk Lamp",
  },
  {
    id: 'BZR-20250801-003',
    date: 'Oct 15, 2025',
    total: 620.99,
    status: 'Processing',
    itemsCount: 5,
    itemsPreview: "Monitor, Laptop Stand + 3 others",
  },
  {
    id: 'BZR-20250720-004',
    date: 'Aug 5, 2025',
    total: 89.99,
    status: 'Cancelled',
    itemsCount: 1,
    itemsPreview: "Ergonomic Mouse",
  },
];

// --- Utility Functions for Status Coloring ---
const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' };
    case 'Shipped':
      return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' };
    case 'Processing':
      return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300' };
    case 'Cancelled':
      return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' };
  }
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};

export default function Orders() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // --- Filtering Logic ---
  const filteredOrders = mockOrders.filter(order => {
    const statusMatch = filter === 'All' || order.status === filter;
    const searchMatch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        order.itemsPreview.toLowerCase().includes(searchTerm.toLowerCase());
    return statusMatch && searchMatch;
  });

  // --- Orders Header/Filter Component ---
  const FilterBar = () => (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-4 mb-8 border border-gray-100">
      
      {/* Search Bar */}
      <div className="relative grow">
        <input
          type="text"
          placeholder="Search by Order ID or Product Name..."
          className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FF4500]/30 transition-all outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Status Filter */}
      <select
        className="p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-[#FF4500]/30 transition-all outline-none md:w-56"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All Orders</option>
        <option value="Delivered">Delivered</option>
        <option value="Shipped">Shipped</option>
        <option value="Processing">Processing</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </div>
  );

  // --- Empty State View for Orders ---
  if (mockOrders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full border-t-4 border-[#FF4500]">
          <div className="w-20 h-20 bg-orange-100/50 rounded-full flex items-center justify-center mx-auto mb-6 transform scale-110">
            <Package size={40} className="text-[#FF4500]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Orders Found</h2>
          <p className="text-gray-500 mb-8">It looks like you haven't placed any orders yet. Time to shop!</p>
          <button className="w-full bg-[#FF4500] hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg shadow-orange-500/40">
            Start Shopping
          </button>
        </div>
      </div>
    );
  }
  
  // --- Main Orders View ---
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="flex items-center mb-8 gap-3 border-b border-gray-200 pb-4">
           <Package className="text-[#FF4500]" size={32} strokeWidth={2.5} />
           <h1 className="text-4xl font-black text-gray-900 tracking-tight">Order History</h1>
        </div>

        <FilterBar />

        {/* List of Orders */}
        <div className="space-y-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => {
              const status = getStatusColor(order.status);

              return (
                <div key={order.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-orange-200">
                  
                  {/* Order Header */}
                  <div className={`p-4 flex items-center justify-between border-b ${status.border} ${status.bg} bg-opacity-50`}>
                    <p className="text-sm font-semibold text-gray-600">
                      Order ID: <span className="text-gray-900 font-extrabold ml-1">{order.id}</span>
                    </p>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${status.border} ${status.text} bg-white`}>
                      {order.status}
                    </span>
                  </div>

                  {/* Order Body Details */}
                  <div className="p-6 grid grid-cols-2 lg:grid-cols-5 gap-y-4 items-center">
                    
                    {/* Date */}
                    <div className="flex items-center col-span-1">
                      <Calendar size={20} className="text-gray-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Order Date</p>
                        <p className="font-semibold text-gray-900">{order.date}</p>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex items-center col-span-1">
                      <DollarSign size={20} className="text-gray-400 mr-2" />
                      <div>
                        <p className="text-xs text-gray-500">Order Total</p>
                        <p className="font-extrabold text-xl text-[#FF4500]">{formatCurrency(order.total)}</p>
                      </div>
                    </div>

                    {/* Items Preview */}
                    <div className="col-span-2 lg:col-span-1">
                      <p className="text-xs text-gray-500">Items ({order.itemsCount})</p>
                      <p className="font-medium text-gray-700 truncate">{order.itemsPreview}</p>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2 lg:col-span-2 flex justify-end gap-3">
                      {order.status === 'Shipped' && (
                        <button className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                          Track <ChevronRight size={16} className="ml-1" />
                        </button>
                      )}
                      {order.status !== 'Cancelled' && (
                          <button className="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors border border-gray-300 px-3 py-2 rounded-lg">
                            <RefreshCw size={16} className="mr-2" />
                            Re-order
                          </button>
                      )}
                      <button className="flex items-center bg-[#FF4500] hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-lg shadow-md shadow-orange-500/20 transition-all duration-200">
                        <Eye size={18} className="mr-2" />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
             <div className="bg-white p-10 rounded-2xl shadow-xl text-center border-t-4 border-gray-300">
                <XCircle size={40} className="text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-gray-700">No matching orders found.</h2>
                <p className="text-gray-500">Try adjusting your filters or clearing the search term.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}