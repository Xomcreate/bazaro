import React from 'react';
import { FaGlobe, FaHandshake, FaTags, FaStore, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const primaryOrange = "text-orange-600";
  const primaryBlack = "text-gray-900";
  const iconBoxClass = "p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-2xl hover:scale-[1.02]";

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans pt-12 pb-16">
      
      {/* --- Hero Section: Title and Mission --- */}
      <section className="text-center px-4 md:px-8 py-12 bg-white shadow-inner">
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-3 ${primaryBlack}`}>
          Welcome to <span className={primaryOrange}>Bazaro</span>: Your Marketplace
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Bazaro is built on the vision of connecting local vendors with a global audience, making commerce accessible, fair, and exciting for everyone.
        </p>
      </section>

      {/* --- Core Values Section --- */}
      <section className="px-4 md:px-12 py-16">
        <h2 className={`text-3xl font-bold text-center mb-12 ${primaryBlack}`}>
          Our Commitment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          {/* Value 1: Community */}
          <div className={iconBoxClass}>
            <FaHandshake size={40} className={`mb-4 ${primaryOrange}`} />
            <h3 className={`text-xl font-semibold mb-2 ${primaryBlack}`}>Empowering Vendors</h3>
            <p className="text-sm text-gray-600">
              We provide independent sellers and small businesses with the tools they need to grow their brand and reach millions of customers.
            </p>
          </div>

          {/* Value 2: Value */}
          <div className={iconBoxClass}>
            <FaTags size={40} className={`mb-4 ${primaryOrange}`} />
            <h3 className={`text-xl font-semibold mb-2 ${primaryBlack}`}>Fair Pricing</h3>
            <p className="text-sm text-gray-600">
              Our platform ensures competitive prices and transparent deals, guaranteeing customers get the best value for their money.
            </p>
          </div>

          {/* Value 3: Global Reach */}
          <div className={iconBoxClass}>
            <FaGlobe size={40} className={`mb-4 ${primaryOrange}`} />
            <h3 className={`text-xl font-semibold mb-2 ${primaryBlack}`}>Seamless Experience</h3>
            <p className="text-sm text-gray-600">
              A smooth, secure, and user-friendly experience, from browsing unique products to fast and reliable checkout.
            </p>
          </div>

          {/* Value 4: Reliability */}
          <div className={iconBoxClass}>
            <FaTruck size={40} className={`mb-4 ${primaryOrange}`} />
            <h3 className={`text-xl font-semibold mb-2 ${primaryBlack}`}>Trusted Delivery</h3>
            <p className="text-sm text-gray-600">
              We partner with top logistics providers to ensure your purchases arrive safely and on time, every single time.
            </p>
          </div>

        </div>
      </section>

      {/* --- Marketplace Highlights Section --- */}
      <section className="px-4 md:px-12 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          
          {/* Image Placeholder (Mimicking Navbar's logo style) */}
          <div className="lg:w-1/3 w-full p-8 bg-white rounded-xl shadow-2xl flex justify-center items-center shrink-0 min-h-64">
            <FaStore size={80} className={`${primaryOrange} opacity-80`} />
          </div>

          {/* Text Content */}
          <div className="lg:w-2/3">
            <h2 className={`text-3xl font-bold mb-4 ${primaryBlack}`}>
              How We're Different
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Unlike traditional marketplaces, Bazaro focuses heavily on **curated local content** and **sustainable commerce**. We believe technology should serve community growth.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className={`mr-2 font-bold ${primaryOrange}`}>&#10003;</span> 
                **Vendor-First Platform:** Low fees and powerful tools for sellers.
              </li>
              <li className="flex items-start">
                <span className={`mr-2 font-bold ${primaryOrange}`}>&#10003;</span>
                **Diverse Product Range:** From handmade crafts to cutting-edge electronics, supporting a variety of niches.
              </li>
              <li className="flex items-start">
                <span className={`mr-2 font-bold ${primaryOrange}`}>&#10003;</span>
                **Dedicated Support:** Human support available 24/7 for both buyers and sellers.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Call to Action Footer --- */}
      <section className="text-center px-4 md:px-8 pt-16">
        <h2 className={`text-3xl font-bold mb-4 ${primaryBlack}`}>
          Ready to join the Bazaro community?
        </h2>
        <p className="text-gray-700 mb-8">
          Whether you're looking to shop for unique items or start your own successful online business, Bazaro is the place to be.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/register" 
            className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-black transition duration-300 transform hover:scale-105"
          >
            Start Selling Today
          </Link>
          <Link 
            to="/categories" 
            className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-full hover:bg-orange-50 transition duration-300 transform hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </section>

    </div>
  )
}