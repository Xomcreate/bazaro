import React, { useState } from "react";
import {
  FaEnvelope,
  FaSearch,
  FaFilter,
  FaReply,
  FaCheckCircle,
  FaExclamationTriangle,
  FaQuestionCircle,
  FaTag,
  FaTimes
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------------
// CONSTANTS
// ---------------------------------------------------------
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// ---------------------------------------------------------
// MOCK DATA
// ---------------------------------------------------------
const initialContacts = [
  { id: 1, subject: "Issue with my recent order #1005", name: "Sarah Lee", email: "sarah@example.com", category: "Order", status: "New", date: "2025-12-09 14:30" },
  { id: 2, subject: "Vendor application request", name: "Mark Vender", email: "mark@venderco.com", category: "Vendor", status: "New", date: "2025-12-09 11:15" },
  { id: 3, subject: "Feedback on website design", name: "Anonymous User", email: "anon@mail.com", category: "General", status: "Completed", date: "2025-12-08 10:00" },
  { id: 4, subject: "Payment gateway error", name: "John Smith", email: "john@mail.com", category: "Technical", status: "In Progress", date: "2025-12-07 16:45" },
];

const STATUS_COLORS = {
  'New': { bg: 'bg-red-100', text: 'text-red-600', icon: FaExclamationTriangle },
  'In Progress': { bg: 'bg-yellow-100', text: 'text-yellow-600', icon: FaQuestionCircle },
  'Completed': { bg: 'bg-green-100', text: 'text-green-600', icon: FaCheckCircle },
};

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
function ContactManage() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // --- Filtered Data ---
  const filteredContacts = contacts.filter(contact =>
    (filterStatus === "All" || contact.status === filterStatus) &&
    (contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
     contact.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // --- Handlers ---
  const handleOpenContact = (contact) => {
    setSelectedContact(contact);
  };
  
  const handleCloseContact = () => {
    setSelectedContact(null);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
    if (selectedContact && selectedContact.id === id) {
        setSelectedContact(prev => ({ ...prev, status: newStatus }));
    }
  };

  // ---------------------------------------------------------
  // RENDER ROW COMPONENT
  // ---------------------------------------------------------
  const ContactRow = ({ contact }) => {
    const statusInfo = STATUS_COLORS[contact.status] || STATUS_COLORS['New'];
    
    return (
      <motion.tr
        className={`border-b border-gray-200 transition-colors duration-150 cursor-pointer ${contact.status === 'New' ? 'bg-red-50 hover:bg-red-100' : 'bg-white hover:bg-gray-50'}`}
        onClick={() => handleOpenContact(contact)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          <div className="flex items-center gap-2">
             <FaEnvelope size={14} className="text-gray-500" /> {contact.subject}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{contact.name}</td>
        
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.bg} ${statusInfo.text}`}>
            <statusInfo.icon size={10} className="mr-1" /> {contact.status}
          </span>
        </td>
        
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <span className="inline-flex items-center gap-1 p-1 rounded-md bg-gray-100 text-gray-600">
            <FaTag size={10} /> {contact.category}
          </span>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(contact.date).toLocaleDateString()}</td>
      </motion.tr>
    );
  };

  // ---------------------------------------------------------
  // SLIDE-OUT DETAIL PANEL
  // ---------------------------------------------------------
  const ContactDetailPanel = () => {
    if (!selectedContact) return null;
    const contact = selectedContact;
    const statusInfo = STATUS_COLORS[contact.status] || STATUS_COLORS['New'];
    
    return (
      <motion.div
        className="fixed inset-0 flex justify-end z-50 bg-black bg-opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleCloseContact}
      >
        <motion.div
          onClick={e => e.stopPropagation()}
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: 500 }}
          className="w-full max-w-2xl bg-white h-full shadow-2xl p-8 flex flex-col"
        >
          <div className="flex justify-between items-start border-b pb-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pr-10">{contact.subject}</h2>
            <motion.button
              type="button"
              onClick={handleCloseContact}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100"
              whileHover={{ rotate: 90 }}
            >
              <FaTimes size={20} />
            </motion.button>
          </div>

          {/* Contact Header Details */}
          <div className="mb-6 p-4 border rounded-lg bg-gray-50">
            <p className="text-sm font-semibold text-gray-700">From: <span className="font-normal text-black">{contact.name}</span></p>
            <p className="text-sm font-semibold text-gray-700">Email: <span className="font-normal text-black">{contact.email}</span></p>
            <p className="text-sm font-semibold text-gray-700">Received: <span className="font-normal text-black">{contact.date}</span></p>
            
            <div className="mt-2 flex items-center gap-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.bg} ${statusInfo.text}`}>
                <statusInfo.icon size={10} className="mr-1" /> Status: {contact.status}
              </span>
              <span className="inline-flex items-center gap-1 p-1 rounded-md bg-gray-200 text-gray-800 text-xs">
                <FaTag size={10} /> {contact.category}
              </span>
            </div>
          </div>
          
          {/* Mock Message Body */}
          <div className="grow space-y-4 overflow-y-auto pr-2 mb-6">
            <h3 className="text-lg font-bold text-gray-800" style={{ color: ORANGERED }}>Message Content:</h3>
            <p className="text-gray-700 leading-relaxed p-4 bg-white border border-gray-200 rounded-lg shadow-inner">
              {/* Placeholder for the full message content */}
              Dear Admin, I am writing to report a crucial bug with the checkout process for order **#{contact.id}**. When attempting to finalize the purchase, the system freezes after entering the shipping address. I tried clearing my cache but the issue persists. Please look into this urgently. Thank you!
            </p>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
            
            <div className="flex gap-2">
                <motion.button 
                    onClick={() => handleUpdateStatus(contact.id, 'Completed')}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition"
                    whileHover={{ scale: 1.05 }}
                    disabled={contact.status === 'Completed'}
                >
                    <FaCheckCircle className="inline-block mr-2" /> Mark Completed
                </motion.button>
                <motion.button 
                    onClick={() => handleUpdateStatus(contact.id, 'In Progress')}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600 transition"
                    whileHover={{ scale: 1.05 }}
                    disabled={contact.status === 'In Progress'}
                >
                    <FaQuestionCircle className="inline-block mr-2" /> Set In Progress
                </motion.button>
            </div>

            <motion.button
              className={`px-6 py-2 rounded-lg font-semibold shadow-md flex items-center gap-2 ${ACCENT_CLASS}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert(`Simulating Reply to ${contact.email}`)}
            >
              <FaReply size={14}/> Send Reply
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // ---------------------------------------------------------
  // MAIN RETURN
  // ---------------------------------------------------------
  return (
    <div className="bg-gray-50 min-h-full p-8">
      
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-4 md:mb-0">
            <FaEnvelope style={{ color: ORANGERED }} /> Contact Inbox ({filteredContacts.length})
        </h2>
        
        {/* Search and Filter */}
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative grow">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Subject or Sender..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200"
            />
          </div>
          
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none pr-8 pl-4 py-2 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200 text-sm font-medium"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>


      {/* Contact Inbox Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-x-auto border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {['Subject', 'Sender', 'Status', 'Category', 'Received Date'].map(header => (
                <th key={header} className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredContacts.length > 0 ? (
                filteredContacts.map(contact => (
                    <ContactRow key={contact.id} contact={contact} />
                ))
            ) : (
                <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-gray-500">
                      No contact messages found matching your criteria.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Slide-out Detail Panel */}
      <AnimatePresence>
        {selectedContact && <ContactDetailPanel/>}
      </AnimatePresence>

    </div>
  );
}

export default ContactManage;