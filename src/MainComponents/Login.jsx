import React, { useState } from "react";
import { User, Store, Mail, Lock, ShoppingCart, DollarSign } from "lucide-react";

// --- Illustration Component (reused) ---
const BazaroIllustration = ({ role }) => {
  const mainOrangered = "#FF4500";
  const blackAccent = "#000000";
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
        <path d="M50 50 L 450 50 M50 150 L 450 150 M50 250 L 450 250" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="5 5" />
        <path d="M50 50 L 50 250 M150 50 L 150 250 M350 50 L 350 250 M450 50 L 450 250" stroke="#f0f0f0" strokeWidth="1" strokeDasharray="5 5" />

        <g transform="translate(250, 150)">
          {role === 'vendor' ? (
            <g>
              <circle cx="0" cy="0" r="40" fill={mainOrangered} />
              <text x="0" y="10" textAnchor="middle" fontSize="30" fontWeight="700" fill={whiteBackground}>$</text>
            </g>
          ) : (
            <g>
              <rect x="-40" y="-20" width="80" height="40" rx="5" fill={mainOrangered} />
              <Lock className="w-10 h-10 text-black" x="-15" y="-15" fill={blackAccent} />
            </g>
          )}
        </g>

        <text x="250" y="270" textAnchor="middle" fontSize="22" fontWeight="700" fill={mainOrangered} className="font-sans">
          {role === 'vendor' ? "Access Your Store Dashboard" : "Continue Your Shopping Journey"}
        </text>
      </svg>
    </div>
  );
};

export default function Login() {
  const [role, setRole] = useState("buyer");
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(s => ({ ...s, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Login submitted:", { role, ...form });
    setError("Login submitted! (Check console)");
    setForm({ email: "", password: "" });
  };

  const inputClass = "w-full p-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-150 shadow-inner pr-10 bg-white text-gray-800 placeholder-gray-500";
  const submitButtonClass = "w-full bg-[#FF4500] hover:bg-red-700 text-white font-extrabold py-3 rounded-xl border-b-4 border-red-800 transition duration-200 mt-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.01] active:border-b-0 active:translate-y-0.5";

  const RoleButton = ({ targetRole, Icon, label }) => {
    const isActive = role === targetRole;
    const activeClasses = "bg-[#FF4500] text-white shadow-xl border-2 border-red-700";
    const inactiveClasses = "bg-white text-black border-2 border-gray-300 hover:bg-gray-100 hover:border-red-500";

    return (
      <button
        type="button"
        onClick={() => { setRole(targetRole); setError(""); }}
        aria-pressed={isActive}
        className={`flex-1 p-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 text-sm md:text-base leading-none focus:outline-none focus:ring-4 focus:ring-red-200 ${isActive ? activeClasses : inactiveClasses}`}
      >
        <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-black"}`} />
        <span className={isActive ? "font-extrabold" : "font-semibold"}>{label}</span>
      </button>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4 md:p-8 font-inter">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-[0_30px_60px_rgba(255,69,0,0.4)] flex flex-col md:flex-row gap-0 h-auto md:h-[700px] overflow-hidden">
        
        {/* Left Illustration */}
        <div className="md:w-1/2 bg-white flex justify-center items-center overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-4 md:p-8 min-h-[300px]">
          <BazaroIllustration role={role} />
        </div>

        {/* Right Login Form */}
        <div className="md:w-1/2 flex flex-col h-full justify-between p-6 md:p-12 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-1 leading-tight">
              {role === "vendor" ? "Welcome Back, Seller!" : "Welcome Back, Shopper!"}
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              {role === "vendor" ? "Log in to manage your store and track sales." : "Sign in to continue shopping seamlessly."}
            </p>
          </div>

          <div className="flex gap-3 mb-6">
            <RoleButton targetRole="buyer" Icon={ShoppingCart} label="Buyer" />
            <RoleButton targetRole="vendor" Icon={DollarSign} label="Vendor" />
          </div>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
            <div className="space-y-4 overflow-y-auto pr-2">
              <div className="relative">
                <label className="sr-only" htmlFor="email">Email</label>
                <input id="email" name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email Address" className={inputClass} required />
                <Mail className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>

              <div className="relative">
                <label className="sr-only" htmlFor="password">Password</label>
                <input id="password" name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" className={inputClass} required />
                <Lock className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
              </div>

              {error && <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>}
            </div>

            <button type="submit" className={submitButtonClass}>
              Log In
            </button>

            <p className="text-center mt-6 text-sm text-gray-700">
              Don't have an account?{" "}
              <button type="button" className="text-[#FF4500] font-bold hover:text-red-700 transition duration-150">
                Register Here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
