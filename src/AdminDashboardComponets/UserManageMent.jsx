import React, { useState } from 'react';
import { 
  FaSearch, 
  FaUser, 
  FaLock, 
  FaToggleOn, 
  FaToggleOff, 
  FaTimesCircle, 
  FaCheckCircle, 
  FaFilter,
  FaEdit,
  FaTrash
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// --- Mock Data ---
const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice.j@example.com", role: "Customer", status: "Active", joined: "2023-01-15" },
  { id: 2, name: "Bob Smith", email: "bob.s@example.com", role: "Vendor", status: "Blocked", joined: "2022-11-01" },
  { id: 3, name: "Charlie Brown", email: "charlie.b@example.com", role: "Customer", status: "Active", joined: "2023-05-20" },
  { id: 4, name: "Diana Prince", email: "diana.p@example.com", role: "Vendor", status: "Active", joined: "2024-02-10" },
];

function UserManageMent() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  
  // --- Mock Functions ---

  const handleToggleStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
        : user
    ));
  };

  const handlePasswordReset = (userId) => {
    alert(`Password reset link sent to user ID: ${userId}`);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeCount = users.filter(u => u.status === 'Active').length;
  const blockedCount = users.filter(u => u.status === 'Blocked').length;

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

  // --- Status Badge Component ---
  const StatusBadge = ({ status }) => {
    const isBlocked = status === 'Blocked';
    const bgColor = isBlocked ? 'bg-red-100' : 'bg-green-100';
    const textColor = isBlocked ? 'text-[#FF4500]' : 'text-green-700';
    const Icon = isBlocked ? FaTimesCircle : FaCheckCircle;

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${bgColor} ${textColor}`}>
        <Icon className="mr-1 h-3 w-3" />
        {status}
      </span>
    );
  };
  
  return (
    <div className="bg-gray-50 min-h-full">
      
      {/* 1. Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Total Users" 
          value={users.length} 
          icon={<FaUser />} 
          color="#1a1a1a" // Black
        />
        <StatCard 
          title="Active Users" 
          value={activeCount} 
          icon={<FaCheckCircle />} 
          color="#34D399" // Green
        />
        <StatCard 
          title="Blocked Users" 
          value={blockedCount} 
          icon={<FaTimesCircle />} 
          color={ORANGERED} 
        />
      </div>

      {/* 2. User Table Container (White Card) */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">
          Registered Accounts
        </h3>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
          <div className="relative grow md:w-1/3">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            <FaFilter />
            Filter
          </button>
        </div>

        {/* User Data Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Name', 'Email', 'Role', 'Joined', 'Status', 'Actions'].map(header => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => {
                  const isBlocked = user.status === 'Blocked';
                  return (
                    <motion.tr 
                      key={user.id} 
                      className="hover:bg-gray-50 transition duration-150"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.joined}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={user.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        
                        {/* Block / Unblock Button (Orangered Accent) */}
                        <motion.button
                          onClick={() => handleToggleStatus(user.id)}
                          className={`px-3 py-1 rounded-md text-white transition-colors duration-200 text-xs font-semibold shadow-md`}
                          style={{ backgroundColor: isBlocked ? '#1a1a1a' : ORANGERED }} // Black to Unblock, Orangered to Block
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isBlocked ? <FaToggleOff className="inline-block mr-1" /> : <FaToggleOn className="inline-block mr-1" />}
                          {isBlocked ? 'Unblock' : 'Block'}
                        </motion.button>

                        {/* Reset Password Button (Secondary) */}
                        <motion.button
                          onClick={() => handlePasswordReset(user.id)}
                          className="px-3 py-1 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors duration-200 text-xs font-semibold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaLock className="inline-block mr-1" />
                          Reset
                        </motion.button>
                      </td>
                    </motion.tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
                    No users found matching "{searchTerm}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
      </motion.div>
    </div>
  );
}

export default UserManageMent;