import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
  FaEnvelope,
} from 'react-icons/fa';

function Footer() {
  const categories = [
    "Electronics",
    "Phones & Tablets",
    "Computers & Laptops",
    "Home Appliances",
    "Fashion",
    "Beauty & Health",
    "Sports & Outdoors",
    "Automobile",
    "Books & Stationery",
  ];

  const services = ["Delivery", "Installation", "Warranty Services"];
  const sell = ["How to Sell", "Seller Dashboard", "Pricing Plans"];

  const aboutBazaroLinks = [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Flash Sales", path: "/flash-sales" },
  ];

  const customerServiceLinks = [
    { name: "Help Center", path: "/help" },
    { name: "Contact Us", path: "/contact" },
    { name: "How to Buy", path: "/how-to-buy" },
    { name: "Returns & Refunds", path: "/returns" },
    { name: "Report a Product", path: "/report-product" },
  ];

  const mobileAppLinks = [
    { name: "Android App", icon: FaGooglePlay, path: "/app/android" },
    { name: "iOS App", icon: FaApple, path: "/app/ios" },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-10 pb-4 shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Top Section: Logo, Newsletter, Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-200 pb-8 mb-8">
          
          {/* Logo and Slogan */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="/Images/logo.jpeg"
                alt="Bazaro Logo"
                className="h-12 w-12 object-cover rounded"
              />
              <span className="font-bold text-3xl text-orange-600">Bazaro</span>
            </div>
            <p className="text-gray-600 text-center md:text-left text-sm mt-2">
              Your Ultimate Online Marketplace.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-auto max-w-sm">
            <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-gray-800">
              Join Our Newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4 text-center md:text-left">
              Get updates on new products and offers!
            </p>
            <form className="w-full flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md border border-gray-300 text-gray-800 grow focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-md sm:rounded-md flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg"
              >
                <FaEnvelope /> Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/bazaro" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com/bazaro" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/bazaro" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com/company/bazaro" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-600 transition">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Links (multi-column) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8 text-center sm:text-left">
          
          {/* Column 1: Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Categories</h4>
            <ul className="space-y-2">
              {categories.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/categories/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: About Bazaro */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-600">About Bazaro</h4>
            <ul className="space-y-2">
              {aboutBazaroLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Customer Service</h4>
            <ul className="space-y-2">
              {customerServiceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {services.map((item, i) => (
                <li key={`svc-${i}`}>
                  <Link
                    to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Sell on Bazaro */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Sell on Bazaro</h4>
            <ul className="space-y-2">
              {sell.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/sell/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Mobile App */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-600">Mobile App</h4>
            <p className="text-gray-600 text-sm mb-4">Download our app for the best experience!</p>
            <div className="flex flex-col space-y-3 items-center sm:items-start">
              {mobileAppLinks.map((app, i) => (
                <a
                  key={i}
                  href={app.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md transition-colors gap-2 border border-gray-300"
                >
                  <app.icon size={20} />
                  <span>{app.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Payment, Delivery & Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6 flex flex-col items-center justify-between text-gray-600 text-sm space-y-4 md:flex-row md:space-y-0">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Bazaro. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="/Images/visa-logo.png" alt="Visa" className="h-6" />
            <img src="/Images/mastercard-logo.png" alt="Mastercard" className="h-6" />
            <img src="/Images/verve-logo.png" alt="Verve" className="h-6" />
            <img src="/Images/paypal-logo.png" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
