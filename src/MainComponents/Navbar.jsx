import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(2);
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [dropdowns, setDropdowns] = useState({
    categories: false,
    services: false,
    sell: false,
    account: false,
    shop: false, // new Shop dropdown
  });

  const headerRef = useRef(null);
  const hoverTimeoutRef = useRef({});

  const clearAllHoverTimeouts = () => {
    Object.keys(hoverTimeoutRef.current).forEach((k) =>
      clearTimeout(hoverTimeoutRef.current[k])
    );
    hoverTimeoutRef.current = {};
  };

  useEffect(() => {
    function onDocClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        clearAllHoverTimeouts();
        setDropdowns({
          categories: false,
          services: false,
          sell: false,
          account: false,
          shop: false,
        });
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const handleToggle = (name) => {
    clearAllHoverTimeouts();
    setDropdowns((prev) => {
      const next = Object.keys(prev).reduce((acc, k) => {
        acc[k] = false;
        return acc;
      }, {});
      next[name] = !prev[name];
      return next;
    });
  };

  const closeAll = () => {
    clearAllHoverTimeouts();
    setDropdowns({
      categories: false,
      services: false,
      sell: false,
      account: false,
      shop: false,
    });
  };

  // Menu items
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
    "Services",
  ];

  const services = ["Delivery", "Installation", "Warranty Services"];
  const sell = ["How to Sell", "Seller Dashboard", "Pricing Plans"];
  const shopItems = ["All Shops", "Featured Shops", "New Shops", "Top Rated Shops"];

  return (
    <header ref={headerRef} className="w-full shadow-md">
      {/* Main Navbar */}
      <div className="bg-orange-600 text-white px-6 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 ml-16 md:ml-28">
          <img
            src="/Images/logo.jpeg"
            alt="Bazaro Logo"
            className="h-10 w-10 object-cover rounded"
          />
          <span className="font-bold text-2xl md:text-3xl text-white">Bazaro</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-white relative mx-auto">
          <Link to="/" className="hover:text-black transition">Home</Link>

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearAllHoverTimeouts();
              setDropdowns((prev) => ({ ...prev, categories: true }));
            }}
            onMouseLeave={() => {
              hoverTimeoutRef.current.categories = setTimeout(() => {
                setDropdowns((prev) => ({ ...prev, categories: false }));
                delete hoverTimeoutRef.current.categories;
              }, 150);
            }}
          >
            <button
              className="hover:text-black transition"
              onClick={() => handleToggle("categories")}
              aria-expanded={dropdowns.categories}
            >
              All Categories ▼
            </button>
            {dropdowns.categories && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-56 z-50 text-center">
                {categories.map((item, i) => (
                  <Link
                    key={i}
                    to={`/categories/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={closeAll}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Marketplace link */}
          <Link to="/marketplace" className="hover:text-black transition">Marketplace</Link>

          {/* Shop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearAllHoverTimeouts();
              setDropdowns((prev) => ({ ...prev, shop: true }));
            }}
            onMouseLeave={() => {
              hoverTimeoutRef.current.shop = setTimeout(() => {
                setDropdowns((prev) => ({ ...prev, shop: false }));
                delete hoverTimeoutRef.current.shop;
              }, 150);
            }}
          >
            <button
              className="hover:text-black transition"
              onClick={() => handleToggle("shop")}
              aria-expanded={dropdowns.shop}
            >
              Shop ▼
            </button>
            {dropdowns.shop && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-56 z-50 text-center">
                {shopItems.map((item, i) => (
                  <Link
                    key={i}
                    to={`/shop/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={closeAll}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearAllHoverTimeouts();
              setDropdowns((prev) => ({ ...prev, services: true }));
            }}
            onMouseLeave={() => {
              hoverTimeoutRef.current.services = setTimeout(() => {
                setDropdowns((prev) => ({ ...prev, services: false }));
                delete hoverTimeoutRef.current.services;
              }, 150);
            }}
          >
            <button
              className="hover:text-black transition"
              onClick={() => handleToggle("services")}
              aria-expanded={dropdowns.services}
            >
              Services ▼
            </button>
            {dropdowns.services && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-56 z-50 text-center">
                {services.map((item, i) => (
                  <Link
                    key={i}
                    to={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={closeAll}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sell Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              clearAllHoverTimeouts();
              setDropdowns((prev) => ({ ...prev, sell: true }));
            }}
            onMouseLeave={() => {
              hoverTimeoutRef.current.sell = setTimeout(() => {
                setDropdowns((prev) => ({ ...prev, sell: false }));
                delete hoverTimeoutRef.current.sell;
              }, 150);
            }}
          >
            <button
              className="hover:text-black transition"
              onClick={() => handleToggle("sell")}
              aria-expanded={dropdowns.sell}
            >
              Sell on Bazaro ▼
            </button>
            {dropdowns.sell && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-56 z-50 text-center">
                {sell.map((item, i) => (
                  <Link
                    key={i}
                    to={`/sell/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={closeAll}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
            <button
              className="px-4 flex items-center justify-center text-white"
              style={{ background: "linear-gradient(to right, #000000, #1f1f1f)" }}
            >
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
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={closeAll}>Login</Link>
                <Link to="/register" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={closeAll}>Register</Link>
                <hr />
                <Link to="/account" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={closeAll}>My Account</Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={closeAll}>My Orders</Link>
                <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={closeAll}>Saved Items</Link>
                <Link to="/track-order" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={closeAll}>Track Order</Link>
                <hr />
                <button className="w-full text-center px-4 py-2 text-red-600 hover:bg-gray-100 transition">Logout</button>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => {
            setMobileMenuOpen((s) => !s);
            clearAllHoverTimeouts();
            setDropdowns({
              categories: false,
              services: false,
              sell: false,
              account: false,
              shop: false,
            });
          }}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-orange-600 text-white transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col gap-2 mt-16 w-full px-4 items-center text-center">
          <Link to="/" className="hover:text-black transition w-full text-center" onClick={() => setMobileMenuOpen(false)}>Home</Link>

          {/* Categories */}
          <div className="relative w-full">
            <button
              onClick={() => handleToggle("categories")}
              className="w-full text-center hover:text-black transition px-4 py-2"
              aria-expanded={dropdowns.categories}
            >
              All Categories ▼
            </button>
            {dropdowns.categories && (
              <div className="absolute left-0 top-full bg-white text-black rounded shadow-lg w-full z-50 text-center">
                {categories.map((it, i) => (
                  <Link
                    key={i}
                    to={`/categories/${it.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {it}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Marketplace */}
          <Link to="/marketplace" className="hover:text-black transition w-full text-center" onClick={() => setMobileMenuOpen(false)}>Marketplace</Link>

          {/* Shop */}
          <div className="relative w-full">
            <button
              onClick={() => handleToggle("shop")}
              className="w-full text-center hover:text-black transition px-4 py-2"
              aria-expanded={dropdowns.shop}
            >
              Shop ▼
            </button>
            {dropdowns.shop && (
              <div className="absolute left-0 top-full bg-white text-black rounded shadow-lg w-full z-50 text-center">
                {shopItems.map((it, i) => (
                  <Link
                    key={i}
                    to={`/shop/${it.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {it}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative w-full">
            <button
              onClick={() => handleToggle("services")}
              className="w-full text-center hover:text-black transition px-4 py-2"
              aria-expanded={dropdowns.services}
            >
              Services ▼
            </button>
            {dropdowns.services && (
              <div className="absolute left-0 top-full bg-white text-black rounded shadow-lg w-full z-50 text-center">
                {services.map((it, i) => (
                  <Link
                    key={i}
                    to={`/services/${it.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {it}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Sell */}
          <div className="relative w-full">
            <button
              onClick={() => handleToggle("sell")}
              className="w-full text-center hover:text-black transition px-4 py-2"
              aria-expanded={dropdowns.sell}
            >
              Sell on Bazaro ▼
            </button>
            {dropdowns.sell && (
              <div className="absolute left-0 top-full bg-white text-black rounded shadow-lg w-full z-50 text-center">
                {sell.map((it, i) => (
                  <Link
                    key={i}
                    to={`/sell/${it.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 transition text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {it}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-black transition w-full mt-2 text-center" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

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
