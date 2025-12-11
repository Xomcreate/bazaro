import React from 'react';
import { useRef } from 'react';
import { FaGavel, FaShoppingCart, FaStore, FaLock } from 'react-icons/fa';

export default function Terms() {
  const mainColor = "text-[#FF4500]"; // Orangered
  const textDark = "text-gray-900";
  
  // References for sections to enable smooth scrolling navigation
  const sections = {
    introduction: useRef(null),
    account: useRef(null),
    purchases: useRef(null),
    vendor: useRef(null),
    liability: useRef(null),
    changes: useRef(null),
  };

  const scrollToSection = (key) => {
    sections[key].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const NavItem = ({ sectionKey, title }) => (
    <button
      onClick={() => scrollToSection(sectionKey)}
      className="block w-full text-left py-2 px-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition duration-150"
    >
      {title}
    </button>
  );

  const SectionHeader = ({ id, title, Icon, ref }) => (
    <h2 
      id={id} 
      ref={ref}
      className={`text-3xl md:text-4xl font-extrabold mb-6 pt-10 border-b pb-2 flex items-center gap-3 ${textDark}`}
    >
      <Icon size={30} className={mainColor} />
      {title}
    </h2>
  );

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      {/* --- Header Banner --- */}
      <section className="bg-gray-100 py-12 px-4 md:px-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-black mb-2 ${textDark} flex items-center gap-4`}>
            <FaGavel className={mainColor} size={40} />
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: December 4, 2025. Please read these terms carefully before using Errandbox.
          </p>
        </div>
      </section>

      {/* --- Main Content Layout --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 py-12 px-4 md:px-12">
        
        {/* Sidebar Navigation */}
        <nav className="hidden lg:block">
          <div className="sticky top-20 p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-md">
            <h3 className="text-lg font-bold mb-3 border-b pb-2">Table of Contents</h3>
            <div className="space-y-1">
              <NavItem sectionKey="introduction" title="1. Introduction" />
              <NavItem sectionKey="account" title="2. User Accounts" />
              <NavItem sectionKey="purchases" title="3. Buying and Orders" />
              <NavItem sectionKey="vendor" title="4. Vendor Obligations" />
              <NavItem sectionKey="liability" title="5. Disclaimers & Liability" />
              <NavItem sectionKey="changes" title="6. Amendments" />
            </div>
          </div>
        </nav>

        {/* Terms Content */}
        <article className="lg:pr-8">

          {/* 1. Introduction */}
          <SectionHeader id="introduction" title="1. Introduction and Acceptance" Icon={FaGavel} ref={sections.introduction} />
          <p className="mb-4 text-gray-700">
            Welcome to Errandbox. These Terms and Conditions ("Terms") govern your use of the Errandbox website, mobile applications, and services ("Platform"). By accessing or using the Platform, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Eligibility:</strong> You must be at least 18 years old to use the Platform.</li>
            <li><strong>Scope:</strong> These Terms apply to all users, including buyers and vendors.</li>
          </ul>

          {/* 2. User Accounts */}
          <SectionHeader id="account" title="2. User Accounts and Security" Icon={FaLock} ref={sections.account} />
          <p className="mb-4 text-gray-700">
            When you create an account, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Responsibility:</strong> You are responsible for activities under your account.</li>
            <li><strong>Termination:</strong> Errandbox may suspend or terminate accounts that violate these Terms.</li>
          </ul>

          {/* 3. Buying & Orders */}
          <SectionHeader id="purchases" title="3. Purchasing and Order Fulfillment" Icon={FaShoppingCart} ref={sections.purchases} />
          <p className="mb-4 text-gray-700">
            When purchasing, you agree to follow the vendor’s policies and Errandbox buyer guidelines.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Payment:</strong> Prices are final at checkout with secure processors.</li>
            <li><strong>Shipping & Returns:</strong> Vendor policies apply primarily.</li>
          </ul>

          {/* 4. Vendor Obligations */}
          <SectionHeader id="vendor" title="4. Vendor Obligations and Listing" Icon={FaStore} ref={sections.vendor} />
          <p className="mb-4 text-gray-700">
            Vendors must ensure product authenticity, transparency, and compliance with laws.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Product Integrity:</strong> Accurate descriptions required.</li>
            <li><strong>Fees:</strong> Vendors pay agreed fees to Errandbox.</li>
            <li><strong>Compliance:</strong> Must follow trade regulations.</li>
          </ul>

          {/* 5. Liability */}
          <SectionHeader id="liability" title="5. Disclaimers and Liability" Icon={FaLock} ref={sections.liability} />
          <p className="mb-4 text-gray-700">
            The Platform is provided “as is”. Errandbox makes no warranties.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>No Warranty:</strong> Service may not always be uninterrupted.</li>
            <li><strong>Liability Cap:</strong> Errandbox is not liable for indirect damages.</li>
          </ul>

          {/* 6. Amendments */}
          <SectionHeader id="changes" title="6. Amendments to These Terms" Icon={FaGavel} ref={sections.changes} />
          <p className="mb-4 text-gray-700">
            Errandbox reserves the right to modify these Terms at any time.
          </p>
          <p className="text-gray-700 italic">
            Continued use of the Platform means you accept the changes.
          </p>
        </article>
      </div>
      
      {/* Footer CTA */}
      <section className="py-12 px-4 md:px-12 mt-12 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-3">
            Questions Regarding Our Terms?
          </h2>
          <p className="text-lg font-light text-gray-300 mb-6">
            You can always reach out for clarification.
          </p>
          <a 
            href="mailto:legal@errandbox.com" 
            className={`px-8 py-3 bg-[#FF4500] text-white font-bold rounded-full hover:bg-red-700 transition duration-300 shadow-md`}
          >
            Contact Legal Support
          </a>
        </div>
      </section>

    </div>
  )
}
