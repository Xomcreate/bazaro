import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";

// --- Illustration Component (Refined) ---
const BazaroIllustration = () => {
  const mainOrangered = "#FF4500";

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-orange-50/50 p-12">
      {/* Decorative blurred circles behind */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <svg
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl transform transition-transform duration-700 hover:scale-105"
      >
        <rect x="20" y="20" width="460" height="260" rx="20" fill="white" />
        {/* Header Bar */}
        <path d="M20 40 C20 28.9543 28.9543 20 40 20 H460 C471.046 20 480 28.9543 480 40 V 60 H 20 V 40 Z" fill="#FFF5F0" />
        <circle cx="50" cy="40" r="5" fill="#FF4500" fillOpacity="0.3" />
        <circle cx="70" cy="40" r="5" fill="#FF4500" fillOpacity="0.3" />
        
        {/* Content Lines */}
        <rect x="60" y="100" width="100" height="80" rx="8" fill="#F3F4F6" />
        <rect x="180" y="100" width="260" height="20" rx="4" fill="#F3F4F6" />
        <rect x="180" y="130" width="180" height="15" rx="4" fill="#F9FAFB" />
        <rect x="180" y="155" width="140" height="15" rx="4" fill="#F9FAFB" />

        <rect x="60" y="200" width="380" height="40" rx="8" fill="#FFF5F0" stroke="#FF4500" strokeWidth="1" strokeDasharray="6 6" />

        {/* Central Lock Icon Badge */}
        <g transform="translate(250, 150)">
          <circle cx="0" cy="0" r="40" fill={mainOrangered} className="animate-pulse" />
          <Lock size={35} color="white" x="-17.5" y="-17.5" strokeWidth={2.5} />
        </g>
      </svg>
      
      <div className="mt-8 text-center z-10">
        <h3 className="text-2xl font-bold text-gray-800">Secure Access</h3>
        <p className="text-gray-500 mt-2 text-sm">Manage your orders and sales with confidence.</p>
      </div>
    </div>
  );
};

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Refined input styling
  const inputContainerClass = "relative group";
  const inputClass = `
    w-full pl-11 pr-12 py-3.5 
    rounded-xl border border-gray-200 bg-gray-50 
    text-gray-900 placeholder-gray-400 
    focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-[#FF4500] 
    transition-all duration-300 ease-out outline-none
  `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill in both Email and Password.");
      return;
    }

    setIsLoading(true);

    // Simulate network delay for better UX
    setTimeout(() => {
      const fakeBackendResponse = {
        success: true,
        role: form.email.includes("sell") ? "vendor" : "buyer",
      };

      if (fakeBackendResponse.success) {
        setIsLoading(false);
        const role = fakeBackendResponse.role;
        // In a real app, use router.push
        console.log(`Redirecting to ${role} dashboard...`);
        alert(`Login Successful! Redirecting to ${role} dashboard.`); 
      }
    }, 1500);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f9fa] flex items-center justify-center p-4 font-sans selection:bg-orange-100">
      
      {/* Main Card Container */}
      <div className="w-full max-w-5xl bg-white rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100">

        {/* Left Side: Illustration */}
        <div className="hidden md:block md:w-1/2 bg-white relative">
          <BazaroIllustration />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
          
          <div className="max-w-md mx-auto w-full">
            <div className="mb-10">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-3">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-lg">
                Please enter your details to sign in.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Input */}
              <div className={inputContainerClass}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF4500] transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={onChange}
                  className={inputClass}
                />
              </div>

              {/* Password Input */}
              <div className={inputContainerClass}>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF4500] transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={onChange}
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Forgot Password & Error */}
              <div className="flex items-center justify-between text-sm">
                 {error ? (
                    <p className="text-red-500 font-medium animate-pulse">{error}</p>
                 ) : (
                    <div className="flex-1"></div> /* Spacer if no error */
                 )}
                 <a href="#" className="font-semibold text-gray-500 hover:text-[#FF4500] transition-colors">
                   Forgot Password?
                 </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`
                  w-full py-4 rounded-xl font-bold text-white text-lg
                  shadow-lg shadow-orange-500/30
                  transition-all duration-200 transform
                  flex items-center justify-center gap-2
                  ${isLoading 
                    ? "bg-gray-300 cursor-not-allowed shadow-none scale-[0.99]" 
                    : "bg-[#FF4500] hover:bg-[#e03e00] hover:scale-[1.01] active:scale-[0.98]"
                  }
                `}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={24} />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <span>Log In</span>
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
         <p className="text-gray-600">
  Don’t have an account?{" "}
  <Link
    to="/register"
    className="text-[#FF4500] font-bold hover:text-red-700 transition duration-150"
  >
    Register Here
  </Link>
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}