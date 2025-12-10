import React, { useRef } from 'react';
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
            Last Updated: December 4, 2025. Please read these terms carefully before using Bazaro.
          </p>
        </div>
      </section>

      {/* --- Main Content Layout --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-10 py-12 px-4 md:px-12">
        
        {/* --- Sticky Sidebar Navigation (Table of Contents) --- */}
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

        {/* --- Terms Content --- */}
        <article className="lg:pr-8">

          {/* 1. Introduction */}
          <SectionHeader id="introduction" title="1. Introduction and Acceptance" Icon={FaGavel} ref={sections.introduction} />
          <p className="mb-4 text-gray-700">
            Welcome to Bazaro. These Terms and Conditions ("Terms") govern your use of the Bazaro website, mobile applications, and services ("Platform"). By accessing or using the Platform, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, then you may not access the Platform.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Eligibility:</strong> You must be at least 18 years old to use the Platform.</li>
            <li><strong>Scope:</strong> These Terms apply to all users, including buyers and vendors.</li>
          </ul>

          {/* 2. User Accounts */}
          <SectionHeader id="account" title="2. User Accounts and Security" Icon={FaLock} ref={sections.account} />
          <p className="mb-4 text-gray-700">
            When you create an account, you must provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account password.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Responsibility:</strong> You are responsible for all activities that occur under your account.</li>
            <li><strong>Termination:</strong> Bazaro reserves the right to terminate or suspend accounts that violate these Terms or are deemed inactive.</li>
          </ul>

          {/* 3. Buying and Orders */}
          <SectionHeader id="purchases" title="3. Purchasing and Order Fulfillment" Icon={FaShoppingCart} ref={sections.purchases} />
          <p className="mb-4 text-gray-700">
            When purchasing an item, you agree to comply with the vendor's stated policies regarding payment, shipping, and returns, in addition to Bazaro's general buyer policies.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Payment:</strong> All prices are final at checkout. We use third-party payment processors for secure transactions.</li>
            <li><strong>Shipping & Returns:</strong> Shipping times and fees are estimated by the vendor. Disputes regarding product quality or returns must first be directed to the vendor, followed by Bazaro's resolution process.</li>
          </ul>

          {/* 4. Vendor Obligations */}
          <SectionHeader id="vendor" title="4. Vendor Obligations and Listing" Icon={FaStore} ref={sections.vendor} />
          <p className="mb-4 text-gray-700">
            Vendors using the Platform must adhere to strict guidelines concerning product authenticity, intellectual property, and transparency.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>Product Integrity:</strong> All listings must accurately describe the item's condition, features, and pricing.</li>
            <li><strong>Fees:</strong> Vendors agree to pay Bazaro the agreed-upon commission or fees for sales processed through the Platform.</li>
            <li><strong>Compliance:</strong> Vendors must comply with all applicable local and international trade laws.</li>
          </ul>

          {/* 5. Disclaimers and Limitation of Liability */}
          <SectionHeader id="liability" title="5. Disclaimers and Limitation of Liability" Icon={FaLock} ref={sections.liability} />
          <p className="mb-4 text-gray-700">
            The Platform is provided on an "as is" and "as available" basis. Bazaro makes no representations or warranties of any kind, express or implied.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><strong>No Warranty:</strong> Bazaro does not warrant that the service will be uninterrupted, timely, secure, or error-free.</li>
            <li><strong>Liability Cap:</strong> In no event shall Bazaro, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.</li>
          </ul>

          {/* 6. Amendments */}
          <SectionHeader id="changes" title="6. Amendments to These Terms" Icon={FaGavel} ref={sections.changes} />
          <p className="mb-4 text-gray-700">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
          <p className="text-gray-700 italic">
            Your continued use of the Platform after those revisions become effective means you agree to be bound by the revised terms.
          </p>
        </article>
      </div>
      
      {/* --- Footer CTA (Consistent Bazaro Style) --- */}
      <section className={`py-12 px-4 md:px-12 mt-12 bg-black text-white`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-3">
            Questions Regarding Our Terms?
          </h2>
          <p className="text-lg font-light text-gray-300 mb-6">
            If you need clarification or assistance, please reach out to our legal department.
          </p>
          <a 
            href="mailto:legal@bazaro.com" 
            className={`px-8 py-3 ${mainColor.replace('text-', 'bg-')} text-white font-bold rounded-full hover:bg-red-700 transition duration-300 shadow-md`}
          >
            Contact Legal Support
          </a>
        </div>
      </section>

    </div>
  )
}