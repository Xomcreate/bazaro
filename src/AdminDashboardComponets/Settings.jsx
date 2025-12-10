import React, { useState } from 'react';
import { 
  FaCog, 
  FaGlobe, 
  FaLock, 
  FaBell, 
  FaSave, 
  FaUpload,
  FaCheckCircle
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

function Settings() {
  const [activeSection, setActiveSection] = useState("general");
  const [isSaving, setIsSaving] = useState(false);

  const settingsSections = [
    { key: "general", name: "General Settings", icon: FaGlobe },
    { key: "security", name: "Security & Access", icon: FaLock },
    { key: "notifications", name: "Notifications", icon: FaBell },
  ];

  // --- Mock Functions ---
  const handleSaveChanges = () => {
    setIsSaving(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsSaving(false);
      alert("Settings saved successfully! (Mock Action)");
    }, 1500);
  };

  // --- View Renderers ---

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4" style={{ color: ORANGERED }}>Platform Branding & Currency</h4>
      
      <SettingsField 
        label="Platform Name" 
        defaultValue="AdminPanel Pro" 
        placeholder="E.g., My E-commerce Platform" 
      />
      
      <SettingsField 
        label="Contact Email" 
        defaultValue="support@platform.com" 
        type="email" 
        placeholder="Primary contact for users" 
      />
      
      <SettingsSelect 
        label="Default Currency" 
        options={['USD', 'EUR', 'NGN (₦)']} 
        defaultValue="NGN (₦)" 
      />
      
      <SettingsFileUpload 
        label="Platform Logo" 
        placeholder="Upload new logo file (PNG/SVG)" 
      />
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4" style={{ color: ORANGERED }}>Access Control & Security</h4>

      <SettingsToggle 
        label="Require Two-Factor Authentication (2FA) for Admins" 
        description="Enforces an extra layer of security upon login."
        defaultChecked={true}
      />
      
      <SettingsField 
        label="Minimum Password Length" 
        defaultValue="12" 
        type="number" 
        placeholder="Minimum characters required"
      />
      
      <SettingsField 
        label="Admin Session Timeout (Minutes)" 
        defaultValue="60" 
        type="number" 
        description="Automatically logs out inactive users after this period." 
      />
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <h4 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4" style={{ color: ORANGERED }}>System Alerts & Emails</h4>

      <SettingsToggle 
        label="Email Alert on Failed Payment Transactions" 
        description="Receive an email when a payment fails."
        defaultChecked={true}
      />

      <SettingsToggle 
        label="Notify Admins on New Vendor Registration" 
        description="Alerts the team when a vendor is pending review."
        defaultChecked={false}
      />
      
      <SettingsToggle 
        label="System Maintenance Alerts" 
        description="Enable/Disable alerts for scheduled downtime."
        defaultChecked={true}
      />
      
      <div className="mt-8 pt-4 border-t border-gray-100">
        <motion.button
            onClick={() => alert("Redirecting to Email Template Editor...")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold shadow-md transition bg-black text-white hover:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <FaBell /> Edit Email Templates
        </motion.button>
      </div>
    </div>
  );
  
  // --- Reusable Setting Components ---

  const SettingsField = ({ label, defaultValue, type = 'text', placeholder, description = null }) => (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input 
        type={type} 
        defaultValue={defaultValue} 
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200"
        placeholder={placeholder}
      />
      {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
    </label>
  );

  const SettingsSelect = ({ label, options, defaultValue, description = null }) => (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <select 
        defaultValue={defaultValue}
        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200"
      >
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
    </label>
  );
  
  const SettingsFileUpload = ({ label, placeholder }) => (
    <div className="block">
        <span className="text-sm font-medium text-gray-700 mb-1 block">{label}</span>
        <div className="flex items-center space-x-4">
            <div className="shrink-0 h-16 w-16 bg-gray-200 rounded-lg flex items-center justify-center border border-dashed border-gray-400">
                {/* Mock current image placeholder */}
                <FaUpload className="text-gray-500" />
            </div>
            <label className="grow">
                <input type="file" className="sr-only" />
                <div className={`cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 transition`}>
                    Choose File
                </div>
                <p className="text-xs text-gray-500 mt-1">{placeholder}</p>
            </label>
        </div>
    </div>
  );

  const SettingsToggle = ({ label, description, defaultChecked }) => (
    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
        <div>
            <span className="text-sm font-medium text-gray-800 block">{label}</span>
            <p className="text-xs text-gray-500">{description}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
            <div 
                className={`w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#FF4500] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all`}
                style={{ backgroundColor: defaultChecked ? ORANGERED : '#9CA3AF' }} // Gray for off, Orangered for on
            />
        </label>
    </div>
  );


  return (
    <div className="bg-gray-50 min-h-full -m-6 -mt-8 md:-m-8">
      
      {/* --- Main Settings Container (White Card) --- */}
      <motion.div 
        className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex h-full min-h-[80vh]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        
        {/* --- 1. Sidebar Navigation (Left) --- */}
        <nav className="w-64 border-r border-gray-100 pr-6 space-y-2 shrink-0">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FaCog style={{ color: ORANGERED }} /> Configuration
          </h3>
          
          {settingsSections.map((item) => {
            const isActive = activeSection === item.key;
            const Icon = item.icon;
            return (
              <motion.button
                key={item.key}
                onClick={() => setActiveSection(item.key)}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 relative`}
                style={{ 
                    backgroundColor: isActive ? ORANGERED : 'transparent',
                    color: isActive ? 'white' : 'black',
                }}
                whileHover={{ x: isActive ? 0 : 5, scale: isActive ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon size={16} />
                {item.name}
              </motion.button>
            );
          })}
        </nav>

        {/* --- 2. Main Settings Panel (Right) --- */}
        <div className="grow pl-8 relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="pb-24" // Space for the floating save button
            >
              {activeSection === "general" && renderGeneralSettings()}
              {activeSection === "security" && renderSecuritySettings()}
              {activeSection === "notifications" && renderNotificationSettings()}
            </motion.div>
          </AnimatePresence>

          {/* --- 3. Floating Save Button (Always Visible) --- */}
          <motion.div 
            className="fixed bottom-0 right-0 w-full md:w-auto p-4 md:p-8 bg-white border-t border-gray-200 shadow-2xl z-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.button
              onClick={handleSaveChanges}
              disabled={isSaving}
              className={`flex items-center justify-center w-full md:w-auto gap-2 px-8 py-3 rounded-lg font-bold text-lg shadow-xl transition disabled:bg-gray-400 ${isSaving ? 'bg-gray-500' : ACCENT_CLASS}`}
              whileHover={{ scale: isSaving ? 1 : 1.03 }}
              whileTap={{ scale: isSaving ? 1 : 0.98 }}
            >
              {isSaving ? (
                  <>
                    <FaCog className="animate-spin" /> Saving...
                  </>
              ) : (
                  <>
                    <FaSave /> Save Changes
                  </>
              )}
            </motion.button>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}

export default Settings;