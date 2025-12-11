import React, { useState } from 'react';

// Custom color variables for cleaner use:
const orangeredBg = 'bg-[#FF4500] hover:bg-[#E63E00]';
const orangeredText = 'text-[#FF4500]';

function UserProfile() {
  // Mock Data
  const [activeSection, setActiveSection] = useState('account');
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    memberSince: "May 2023",
    profilePic: '🧑‍💻', // Placeholder emoji for image
  };

  const navItems = [
    { id: 'account', label: 'Account Details', icon: '📝' },
    { id: 'orders', label: 'Order History', icon: '📦' },
    { id: 'addresses', label: 'Shipping Addresses', icon: '🏠' },
    { id: 'payments', label: 'Payment Methods', icon: '💳' },
    { id: 'security', label: 'Security & Login', icon: '🔒' },
    { id: 'notifications', label: 'Preferences', icon: '🔔' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-black mb-6">Edit Account Details</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={user.name}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#FF4500] focus:ring-[#FF4500]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  defaultValue={user.email}
                  readOnly // Often read-only or requires password confirmation to change
                  className="mt-1 block w-full p-3 border border-gray-200 bg-gray-50 rounded-md shadow-sm cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="(555) 123-4567"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-[#FF4500] focus:ring-[#FF4500]"
                />
              </div>
              
              <div className="flex justify-end pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  className={`py-2 px-6 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out ${orangeredBg}`}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        );
      case 'orders':
        return <div className="p-6 text-xl">Order History goes here... (Linked to Shopping page data)</div>;
      case 'security':
        return <div className="p-6 text-xl">Password change and 2FA settings...</div>;
      // Add other cases as needed
      default:
        return <div className="p-6 text-xl">Welcome to your Profile Dashboard. Select a section from the left.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-black">
            My Account Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage your personal information, orders, and settings.
          </p>
        </header>

        {/* Main Dashboard Layout (Two Columns) */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. Sidebar Navigation */}
          <aside className="lg:w-1/4">
            
            {/* User Info Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#FF4500] mb-6 text-center">
                <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center rounded-full bg-gray-100 text-4xl">
                    {user.profilePic}
                </div>
                <h3 className="text-xl font-bold text-black">{user.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Member Since: {user.memberSince}</p>
                <button 
                    className={`mt-3 text-sm font-semibold ${orangeredText} hover:underline`}
                >
                    Change Photo
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="bg-white p-2 rounded-xl shadow-lg border border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center w-full text-left p-3 rounded-lg transition duration-150 ease-in-out ${
                    activeSection === item.id
                      ? `${orangeredBg} text-white shadow-md font-semibold`
                      : 'text-black hover:bg-gray-100'
                  } mb-1`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* 2. Main Content Area */}
          <main className="lg:w-3/4">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;