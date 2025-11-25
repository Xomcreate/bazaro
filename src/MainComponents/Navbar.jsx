import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(2);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({ account: false });

  const headerRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setDropdowns({ account: false });
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleToggle = (name) => {
    setDropdowns((prev) => ({ account: !prev.account }));
  };

  return (
    <header ref={headerRef} className="w-full shadow-md">
      <div className="bg-orange-600 text-white px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 ml-16 md:ml-28">
          <img src="/Images/logo.jpeg" alt="Bazaro Logo" className="h-10 w-10 object-cover rounded" />
          <span className="font-bold text-2xl md:text-3xl text-white">Bazaro</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-white relative mx-auto">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/categories" className="hover:text-black transition">Categories</Link>
          <Link to="/marketplace" className="hover:text-black transition">Marketplace</Link>
          <Link to="/shop" className="hover:text-black transition">Shop</Link>
          <Link to="/services" className="hover:text-black transition">Services</Link>
          <Link to="/sell" className="hover:text-black transition">Sell on Bazaro</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center rounded-full overflow-hidden shadow-md" style={{ width: "300px" }}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button className="px-4 flex items-center justify-center text-white" style={{ background: "linear-gradient(to right, #000000, #1f1f1f)" }}>
              <FaSearch size={18} />
            </button>
          </div>

          <button className="relative hover:text-black transition"><FaHeart size={18} /></button>

          <button className="relative hover:text-black transition">
            <FaShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>
            )}
          </button>

          {/* Account Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 px-3 py-1 border border-white rounded hover:bg-white hover:text-orange-600 transition text-sm"
              onClick={() => handleToggle("account")}
              aria-expanded={dropdowns.account}
            >
              <FaUser size={14} /> Account ▼
            </button>
            {dropdowns.account && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-48 z-50 text-center">
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 transition">Login</Link>
                <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 transition">Register</Link>
                <hr />
                <Link to="/account" className="block px-4 py-2 hover:bg-gray-100 transition">My Account</Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100 transition">My Orders</Link>
                <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100 transition">Saved Items</Link>
                <Link to="/track-order" className="block px-4 py-2 hover:bg-gray-100 transition">Track Order</Link>
                <hr />
                <button className="w-full text-center px-4 py-2 text-red-600 hover:bg-gray-100 transition">Logout</button>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileMenuOpen((s) => !s)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-orange-600 text-white transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50`}>
        <div className="flex flex-col gap-2 mt-16 w-full px-4 items-center text-center">
          <Link to="/" className="hover:text-black transition w-full text-center" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/categories" className="hover:text-black transition w-full text-center" onClick={() => setMobileMenuOpen(false)}>Categories</Link>
          <Link to="/marketplace" className="hover:text-black transition w-full text-center" onClick={() => setMobileMenuOpen(false)}>Marketplace</Link>
          <Link to="/shop" className="hover:text-black transition w-full text-center" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
          <Link to="/services" className="hover:text-black transition w-full text-center" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/sell" className="hover:text-black transition w-full text-center" onClick={() => setMobileMenuOpen(false)}>Sell on Bazaro</Link>
          <Link to="/contact" className="hover:text-black transition w-full text-center mt-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

          {/* Mobile Search */}
          <div className="flex items-center rounded-full overflow-hidden shadow-md w-full mt-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products, brands, and more..."
              className="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button className="px-4 flex items-center justify-center text-white" style={{ background: "linear-gradient(to right, #000000, #1f1f1f)" }}>
              <FaSearch size={18} />
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 mt-4 justify-center w-full">
            <FaHeart size={20} />
            <div className="relative">
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartCount}</span>
              )}
            </div>
            <button
              className="flex items-center gap-1 px-3 py-1 border border-white rounded hover:bg-white hover:text-orange-600 transition text-sm"
              onClick={() => handleToggle("account")}
              aria-expanded={dropdowns.account}
            >
              <FaUser size={16} /> Account ▼
            </button>
          </div>

          {/* Mobile Account Dropdown */}
          {dropdowns.account && (
            <div className="absolute left-0 right-0 mx-4 top-[60%] bg-white text-black rounded shadow-lg w-[calc(100%-2rem)] z-50 text-center">
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 transition text-center" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 transition text-center" onClick={() => setMobileMenuOpen(false)}>Register</Link>
              <hr />
              <Link to="/account" className="block px-4 py-2 hover:bg-gray-100 transition text-center" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
              <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100 transition text-center" onClick={() => setMobileMenuOpen(false)}>My Orders</Link>
              <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100 transition text-center" onClick={() => setMobileMenuOpen(false)}>Saved Items</Link>
              <Link to="/track-order" className="block px-4 py-2 hover:bg-gray-100 transition text-center" onClick={() => setMobileMenuOpen(false)}>Track Order</Link>
              <hr />
              <button className="w-full text-center px-4 py-2 text-red-600 hover:bg-gray-100 transition">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
