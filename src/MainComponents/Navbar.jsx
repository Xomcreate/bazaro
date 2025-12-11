import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Cart from "./Cart";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(2);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop dropdown
  const [dropdowns, setDropdowns] = useState({ account: false });

  // Mobile dropdown
  const [mobileAccountOpen, setMobileAccountOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setDropdowns({ account: false });
        setMobileAccountOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleDesktopAccountToggle = () =>
    setDropdowns((prev) => ({ account: !prev.account }));

  const handleMobileAccountToggle = () =>
    setMobileAccountOpen((prev) => !prev);

  return (
    <>
      <header ref={headerRef} className="w-full shadow-md">
        <div className="bg-orange-600 text-white px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 ml-6 md:ml-16">
            <img
              src="/Images/pom1.png"
              alt="ErrandBox Logo"
              className="h-10 w-10 object-cover rounded"
            />
            <span className="font-bold text-2xl md:text-3xl">ErrandBox</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 font-medium mx-auto">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/categories" className="hover:text-black">Categories</Link>
            <Link to="/marketplace" className="hover:text-black">Marketplace</Link>
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <Link to="/service" className="hover:text-black">Services</Link>
            <Link to="/sell" className="hover:text-black">Sell on ErrandBox</Link>
            <Link to="/contact" className="hover:text-black">Contact</Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <div
              className="flex items-center rounded-full overflow-hidden shadow-md"
              style={{ width: "300px" }}
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 text-sm text-black outline-none"
              />

              <button
                className="px-4 flex items-center justify-center text-white"
                style={{ background: "linear-gradient(to right, #000, #1f1f1f)" }}
              >
                <FaSearch size={18} />
              </button>
            </div>

            {/* ❤️ Wishlist */}
            <Link to="/wishlist" className="hover:text-black">
              <FaHeart size={18} />
            </Link>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative hover:text-black"
            >
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Desktop Account */}
            <div className="relative">
              <button
                onClick={handleDesktopAccountToggle}
                className="flex items-center gap-1 px-3 py-1 border border-white rounded hover:bg-white hover:text-orange-600 text-sm"
              >
                <FaUser size={14} /> Account ▼
              </button>

              {/* Desktop Dropdown */}
              {dropdowns.account && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-48 z-50 text-center">
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                  <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
                  <hr />

                  <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
                  <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100">Saved Items</Link>
                  <Link to="/track-order" className="block px-4 py-2 hover:bg-gray-100">Track Order</Link>
                  <hr />

                  {/* CENTERED LOGOUT */}
                  <button
                    className="w-full text-center px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE DRAWER */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-orange-600 text-white transform ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
        >
          <div className="flex flex-col gap-2 mt-16 px-4 text-center">

            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Home</Link>
            <Link to="/categories" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Categories</Link>
            <Link to="/marketplace" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Marketplace</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Shop</Link>
            <Link to="/service" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Services</Link>
            <Link to="/sell" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Sell on ErrandBox</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-black">Contact</Link>

            {/* Mobile Search */}
            <div className="flex items-center rounded-full overflow-hidden shadow-md w-full mt-4">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-2 text-sm text-black outline-none"
              />
              <button
                className="px-4 flex items-center justify-center text-white"
                style={{ background: "linear-gradient(to right, #000, #1f1f1f)" }}
              >
                <FaSearch size={18} />
              </button>
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center gap-4 mt-4 justify-center">
              <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)}>
                <FaHeart size={20} />
              </Link>

              <button
                onClick={() => setCartOpen(true)}
                className="relative"
              >
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Account Toggle */}
              <button
                onClick={handleMobileAccountToggle}
                className="px-3 py-1 border border-white rounded hover:bg-white hover:text-orange-600 text-sm flex items-center gap-1"
              >
                <FaUser size={16} /> Account ▼
              </button>
            </div>

            {/* Mobile Account Dropdown */}
            {mobileAccountOpen && (
              <div className="bg-white text-black rounded px-3 py-2 mt-2 shadow-inner">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 hover:bg-gray-100"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 hover:bg-gray-100"
                >
                  Register
                </Link>

                <hr />

                <Link
                  to="/orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 hover:bg-gray-100"
                >
                  My Orders
                </Link>

                <Link
                  to="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 hover:bg-gray-100"
                >
                  Saved Items
                </Link>

                <Link
                  to="/track-order"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 hover:bg-gray-100"
                >
                  Track Order
                </Link>

                <hr />

                {/* CENTERED LOGOUT */}
                <button
                  className="w-full text-center py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* CART PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        } z-999`}
      >
        <button
          onClick={() => setCartOpen(false)}
          className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full"
        >
          <FaTimes size={20} />
        </button>

        <div className="h-full overflow-y-auto p-4 mt-10">
          <Cart />
        </div>
      </div>
    </>
  );
}
