import React from 'react';
import { FaGlobe, FaHandshake, FaTags, FaStore, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const primaryOrange = "text-orange-600";
  const primaryBlack = "text-gray-900";
  const iconBoxClass =
    "p-6 bg-white rounded-xl shadow-lg flex flex-col items-center text-center transition duration-300 hover:shadow-2xl hover:scale-[1.02]";

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans pt-12 pb-16">

      {/* Hero Section */}
      <section className="text-center px-4 md:px-8 py-12 bg-white shadow-inner">
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-3 ${primaryBlack}`}>
          Welcome to <span className={primaryOrange}>Errandbox</span>: Your Marketplace
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Errandbox is built on the vision of connecting local vendors with a global audience,
          making commerce accessible, fair, and exciting for everyone.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="px-4 md:px-12 py-16">
        <h2 className={`text-3xl font-bold text-center mb-12 ${primaryBlack}`}>
          Our Commitment
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div className={iconBoxClass}>
            <FaHandshake size={40} className={`mb-4 ${primaryOrange}`} />
            <h3 className={`text-xl font-semibold mb-2 ${primaryBlack}`}>Empowering Vendors</h3>
            <p className="text-sm text-gray-600">
              We provide independent sellers and small businesses with tools to grow
              their brand and reach millions of customers.
            </p>
          </div>

          <div className={iconBoxClass}>
            <FaTags size={40} className={`mb-4 ${primaryOrange}`} />
            <h3 className={`text-xl font-semibold mb-2 ${primaryBlack}`}>Fair Pricing</h3>
            <p className="text-sm text-gray-600">
              Competitive prices and transparent deals ensure buyers get the best value.
            </p>
          </div>

          <div className={iconBoxClass}>
            <FaGlobe size={40} className={`mb-4 ${primaryOrange}`} />
            <h3 className={`text-xl font-semibold mb-2 ${primaryBlack}`}>Seamless Experience</h3>
            <p className="text-sm text-gray-600">
              Enjoy a smooth, secure, and user-friendly shopping journey.
            </p>
          </div>

          <div className={iconBoxClass}>
            <FaTruck size={40} className={`mb-4 ${primaryOrange}`} />
            <h3 className={`text-xl font-semibold mb-2 ${primaryBlack}`}>Trusted Delivery</h3>
            <p className="text-sm text-gray-600">
              We partner with reliable logistics to ensure safe and timely delivery.
            </p>
          </div>

        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-4 md:px-12 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">

          <div className="lg:w-1/3 w-full p-8 bg-white rounded-xl shadow-2xl flex justify-center items-center min-h-64">
            <FaStore size={80} className={`${primaryOrange} opacity-80`} />
          </div>

          <div className="lg:w-2/3">
            <h2 className={`text-3xl font-bold mb-4 ${primaryBlack}`}>
              How We're Different
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              Unlike traditional marketplaces, Errandbox focuses on
              <b> curated local products </b> and <b>sustainable commerce</b>.
              We believe technology should help communities grow.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className={`mr-2 font-bold ${primaryOrange}`}>&#10003;</span>
                <b>Vendor-First Platform:</b> Low fees and powerful tools.
              </li>
              <li className="flex items-start">
                <span className={`mr-2 font-bold ${primaryOrange}`}>&#10003;</span>
                <b>Diverse Products:</b> Handmade crafts to electronics.
              </li>
              <li className="flex items-start">
                <span className={`mr-2 font-bold ${primaryOrange}`}>&#10003;</span>
                <b>Dedicated Support:</b> Available 24/7.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center px-4 md:px-8 pt-16">
        <h2 className={`text-3xl font-bold mb-4 ${primaryBlack}`}>
          Ready to join the Errandbox community?
        </h2>

        <p className="text-gray-700 mb-8">
          Whether you're shopping or selling, Errandbox is the place to be.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg hover:bg-black transition transform hover:scale-105"
          >
            Start Selling Today
          </Link>

          <Link
            to="/categories"
            className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-full hover:bg-orange-50 transition transform hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </section>

    </div>
  );
}
