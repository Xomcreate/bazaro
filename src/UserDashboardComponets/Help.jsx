import React, { useState } from 'react';

// Custom color variables for cleaner use:
const orangeredBg = 'bg-[#FF4500] hover:bg-[#E63E00]';
const orangeredText = 'text-[#FF4500] hover:text-[#E63E00]';

function HelpAndSettings() {
  const [activeSection, setActiveSection] = useState('faq'); // Start with the main FAQ page

  // --- Navigation Item Definitions ---
  
  // 1. Help & Support Items
  const helpNavItems = [
    { id: 'faq', name: 'FAQ & Knowledge Base', icon: '❓', category: 'Help' },
    { id: 'tickets', name: 'My Support Tickets', icon: '🎫', category: 'Help' },
    { id: 'contact', name: 'Contact Us', icon: '✉️', category: 'Help' },
    { id: 'guidelines', name: 'Seller Guidelines', icon: '📚', category: 'Help' },
  ];

  // 2. Settings Items (Pulling from UserProfile structure)
  const settingsNavItems = [
    { id: 'account', name: 'Account Details', icon: '📝', category: 'Settings' },
    { id: 'addresses', name: 'Shipping Addresses', icon: '🏠', category: 'Settings' },
    { id: 'payments', name: 'Payment Methods', icon: '💳', category: 'Settings' },
    { id: 'security', name: 'Security & Login', icon: '🔒', category: 'Settings' },
    { id: 'notifications', name: 'Notification Preferences', icon: '🔔', category: 'Settings' },
  ];

  const allNavItems = [...helpNavItems, ...settingsNavItems];

  // --- Content Rendering Logic ---

  // Content for the initial Help/FAQ view
  const renderHelpContent = () => {
    return (
      <>
        {/* Search Bar */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            What do you need help with?
          </h2>
          <div className="flex">
            <input
              type="search"
              placeholder="Search for articles, orders, or topics..."
              className="grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#FF4500]"
            />
            <button
              className={`p-3 text-white font-semibold rounded-r-lg transition duration-150 ease-in-out ${orangeredBg}`}
            >
              Search
            </button>
          </div>
        </div>

        {/* Popular Topics Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-black mb-4">
            🔥 Popular Topics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {['Order Tracking', 'Returns & Refunds', 'Account Security', 'Payment Issues'].map((topic, index) => (
              <a
                key={index}
                href="#"
                className="block bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition duration-200 ease-in-out"
              >
                <p className={`text-lg font-semibold ${orangeredText}`}>
                  {topic}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  View related articles & solutions
                </p>
              </a>
            ))}
          </div>
        </section>
      </>
    );
  };

  // Simplified Content for the Settings view
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'faq':
        return renderHelpContent();
      case 'tickets':
      case 'contact':
      case 'guidelines':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-4">
              {allNavItems.find(item => item.id === activeSection).name}
            </h2>
            <p className="text-lg text-gray-600">
              Content for the **{activeSection}** page.
            </p>
            {activeSection === 'contact' && (
                <button
                    className={`mt-6 py-2 px-6 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out ${orangeredBg}`}
                >
                    Open Support Form
                </button>
            )}
          </div>
        );
      case 'account':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-6">Account Details</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md" />
                <input type="email" placeholder="Email Address" disabled className="w-full p-3 border border-gray-200 bg-gray-50 rounded-md cursor-not-allowed" />
                <button type="submit" className={`py-2 px-6 text-white font-semibold rounded-lg ${orangeredBg}`}>
                    Update Profile
                </button>
            </form>
          </div>
        );
      case 'security':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-6">Security & Login</h2>
            <p className="text-gray-700 mb-4">Change your password and set up two-factor authentication.</p>
            <button className={`py-2 px-6 text-white font-semibold rounded-lg bg-black hover:bg-gray-800`}>
                Manage Security Settings
            </button>
          </div>
        );
      case 'notifications':
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold text-black mb-6">Notification Preferences</h2>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border-b">
                        <label className="text-gray-700">Email updates on orders</label>
                        <input type="checkbox" defaultChecked className={`w-5 h-5 accent-[#FF4500]`} />
                    </div>
                    <div className="flex items-center justify-between p-3 border-b">
                        <label className="text-gray-700">Promotional marketing</label>
                        <input type="checkbox" className={`w-5 h-5 accent-[#FF4500]`} />
                    </div>
                </div>
            </div>
        );
      case 'addresses':
        return <div className="p-8 text-xl">Manage Shipping Addresses...</div>;
      case 'payments':
        return <div className="p-8 text-xl">Manage Payment Methods...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-black">
            Support & Settings Hub
          </h1>
          <p className="text-lg text-gray-600">
            Access help articles or manage your account preferences.
          </p>
        </header>

        {/* Main Dashboard Layout (Two Columns) */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 1. Sidebar Navigation */}
          <aside className="lg:w-1/4 bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-fit">
            
            {/* Help Section */}
            <h2 className="text-xl font-bold mb-4 text-black border-b pb-2 border-gray-100">
              Help & Support
            </h2>
            <nav className="mb-6">
              {helpNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center w-full text-left p-3 rounded-lg mb-1 transition duration-150 ease-in-out ${
                    activeSection === item.id
                      ? `${orangeredBg} text-white font-semibold shadow-md`
                      : 'text-black hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>
            
            {/* Settings Section */}
            <h2 className="text-xl font-bold mb-4 text-black border-b pb-2 border-gray-100 pt-4 mt-4 border-t">
              Account Settings
            </h2>
            <nav>
              {settingsNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center w-full text-left p-3 rounded-lg mb-1 transition duration-150 ease-in-out ${
                    activeSection === item.id
                      ? `${orangeredBg} text-white font-semibold shadow-md`
                      : 'text-black hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* 2. Main Content Area */}
          <main className="lg:w-3/4">
            {renderSectionContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default HelpAndSettings;