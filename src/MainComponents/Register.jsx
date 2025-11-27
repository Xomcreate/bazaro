import React, { useState } from "react";
import { User, Store, Mail, Lock, Phone, MapPin, DollarSign, ShoppingCart } from "lucide-react";

// --- Illustration Component ---
const BazaroIllustration = ({ role }) => {
  const mainOrangered = "#FF4500"; // Vibrant Orangered
  const blackAccent = "#000000"; // Pure Black
  const whiteBackground = "#FFFFFF"; 

  return (
    <div className="p-8 w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-80"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Base Grid/Network */}
        <path d="M50 50 L 450 50 M50 150 L 450 150 M50 250 L 450 250" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="5 5" />
        <path d="M50 50 L 50 250 M150 50 L 150 250 M350 50 L 350 250 M450 50 L 450 250" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="5 5" />

        {/* Dynamic Main Icon based on role */}
        <g transform="translate(250, 150)">
          {role === 'vendor' ? (
            <g>
              <path d="M-100 -50 C -50 -100, 50 -100, 100 -50" stroke={mainOrangered} strokeWidth="3" opacity="0.6" fill="none" />
              <Store className="w-20 h-20 text-black" x="-100" y="50" fill={blackAccent} stroke={blackAccent} strokeWidth="0" />
              <circle cx="0" cy="0" r="40" fill={mainOrangered} />
              <text x="0" y="10" textAnchor="middle" fontSize="30" fontWeight="700" fill={whiteBackground}>$</text>
              <rect x="50" y="-70" width="30" height="30" rx="5" fill={mainOrangered} opacity="0.8" />
            </g>
          ) : (
            <g>
              <path d="M-60 0 H 60 L 50 50 H -50 Z" fill={mainOrangered} stroke={blackAccent} strokeWidth="3" />
              <circle cx="-30" cy="55" r="7" fill={blackAccent} />
              <circle cx="30" cy="55" r="7" fill={blackAccent} />
              <Lock className="w-10 h-10 text-black" x="-15" y="-40" fill={blackAccent} stroke={blackAccent} strokeWidth="0" />
              <path d="M-30 -20 H 30 V 0 H -30 Z" fill={blackAccent} />
              <rect x="-40" y="-10" width="80" height="20" fill={whiteBackground} opacity="0.4" />
            </g>
          )}
        </g>

        {/* Dynamic Callout */}
        <text x="250" y="270" textAnchor="middle" fontSize="22" fontWeight="700" fill={mainOrangered} className="font-sans">
          {role === 'vendor' ? "Scale Your Business, Maximize Sales!" : "Shop Smart, Secure Transactions!"}
        </text>

        {/* Small accents */}
        <circle cx="50" cy="30" r="10" fill={blackAccent} opacity="0.3" />
        <rect x="420" y="200" width="30" height="30" rx="5" fill={mainOrangered} opacity="0.15" />
      </svg>
    </div>
  );
};

export default function RegistrationForm() {
  const [role, setRole] = useState("buyer");
  const [form, setForm] = useState({
    name: "",
    storeName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (name === 'confirmPassword' || name === 'password') setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');

    if (form.password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      showCustomMessage("Password must be at least 8 characters.");
      return;
    }

    if (role === "buyer" && form.password !== form.confirmPassword) {
      setPasswordError("Passwords do not match.");
      showCustomMessage("Passwords do not match.");
      return;
    }

    console.log("Submit data:", { role, ...form });
    showCustomMessage(`Registration for ${role} submitted successfully! (Check console for data)`);

    setForm({
      name: "",
      storeName: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  const showCustomMessage = (message) => {
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    messageText.textContent = message;
    messageBox.classList.remove('hidden');
  };

  const closeMessage = () => {
    document.getElementById('messageBox').classList.add('hidden');
  };

  const inputClass = (isError = false) =>
    `w-full p-3 rounded-lg border focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-150 shadow-inner pr-10 bg-white text-gray-800 placeholder-gray-500 ${isError ? 'border-red-500' : 'border-gray-400'}`;

  const submitButtonClass =
    "w-full bg-[#FF4500] hover:bg-red-700 text-white font-extrabold py-3 rounded-xl border-b-4 border-red-800 transition duration-200 mt-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.01] active:border-b-0 active:translate-y-0.5";

  const RoleButton = ({ targetRole, Icon, label }) => {
    const isActive = role === targetRole;
    const activeClasses = "bg-[#FF4500] text-white shadow-xl border-2 border-red-700";
    const inactiveClasses = "bg-white text-black border-2 border-gray-300 hover:bg-gray-100 hover:border-red-500";
    return (
      <button
        type="button"
        onClick={() => { setRole(targetRole); setPasswordError(''); }}
        aria-pressed={isActive}
        className={`flex-1 p-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 text-sm md:text-base leading-none focus:outline-none focus:ring-4 focus:ring-red-200 ${isActive ? activeClasses : inactiveClasses}`}
      >
        <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-black"}`} />
        <span className={isActive ? "font-extrabold" : "font-semibold"}>{label}</span>
      </button>
    );
  };

  const getCatchyHeader = () => {
    if (role === 'vendor') {
      return {
        title: "Launch & Thrive",
        subtitle: "The Marketplace is Waiting! Register your store and start selling."
      };
    } else {
      return {
        title: "Shop, Save & Enjoy",
        subtitle: "Join the community to unlock exclusive deals and a seamless shopping experience."
      };
    }
  };

  const header = getCatchyHeader();

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4 md:p-8 font-inter">
      {/* Custom Message Modal */}
      <div id="messageBox" className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center">
          <h3 className="text-xl font-bold text-[#FF4500] mb-3">System Notice</h3>
          <p id="messageText" className="text-gray-700 mb-4"></p>
          <button onClick={closeMessage} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Got It</button>
        </div>
      </div>

      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-[0_30px_60px_rgba(255,69,0,0.4)] flex flex-col md:flex-row gap-0 h-auto md:h-[750px] overflow-hidden">
        {/* Left Illustration */}
        <div className="md:w-1/2 bg-white flex justify-center items-center overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-4 md:p-8 min-h-[300px]">
          <BazaroIllustration role={role} />
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 flex flex-col h-full justify-between p-6 md:p-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-1 leading-tight text-center md:text-left">
              {header.title} Account
            </h2>
            <p className="text-gray-600 text-sm mb-6 text-center md:text-left">
              {header.subtitle}
            </p>
          </div>

          <div className="flex gap-3 mb-6">
            <RoleButton targetRole="buyer" Icon={ShoppingCart} label="Join as Buyer" />
            <RoleButton targetRole="vendor" Icon={DollarSign} label="Join as Vendor" />
          </div>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
            <div className="space-y-4 overflow-y-auto pr-2">
              <div className="relative">
                <label className="sr-only" htmlFor="name">Full name</label>
                <input id="name" name="name" value={form.name} onChange={handleChange} type="text" placeholder="Full Name" className={inputClass()} required />
                <User className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>

              {role === "vendor" && (
                <div className="relative">
                  <label className="sr-only" htmlFor="storeName">Store name</label>
                  <input id="storeName" name="storeName" value={form.storeName} onChange={handleChange} type="text" placeholder="Store Name (Required for Vendors)" className={inputClass()} required />
                  <Store className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
              )}

              <div className="relative">
                <label className="sr-only" htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} type="email" placeholder={role === "buyer" ? "Email Address" : "Business Email"} className={inputClass()} required />
                <Mail className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>

              <div className="relative">
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className={inputClass()} required />
                <Phone className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>

              {role === "vendor" && (
                <div className="relative">
                  <label className="sr-only" htmlFor="address">Address</label>
                  <input id="address" name="address" value={form.address} onChange={handleChange} type="text" placeholder="Store Address / Location" className={inputClass()} required />
                  <MapPin className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
              )}

              <div className="relative">
                <label className="sr-only" htmlFor="password">Password</label>
                <input id="password" name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password (Min. 8 characters)" className={inputClass(passwordError && form.password.length > 0)} required />
                <Lock className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>

              {role === "buyer" && (
                <div className="relative">
                  <label className="sr-only" htmlFor="confirmPassword">Confirm Password</label>
                  <input id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" placeholder="Confirm Password" className={inputClass(passwordError && form.confirmPassword.length > 0)} required />
                  <Lock className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
              )}

              {passwordError && (
                <p className="text-red-500 text-sm mt-1 font-medium">{passwordError}</p>
              )}
            </div>

            <button type="submit" className={submitButtonClass}>
              {role === "buyer" ? "Create Buyer Account" : "Register as Vendor"}
            </button>

            <p className="text-center mt-6 text-sm text-gray-700">
              Already have an account?{" "}
              <button type="button" className="text-[#FF4500] font-bold hover:text-red-700 transition duration-150">
                Log In Here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
