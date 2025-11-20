import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Constants ---
const ORANGERED = "#FF4500";
const ACCENT_CLASS = "bg-[#FF4500] text-white hover:bg-[#CC4000] transition duration-300";

// --- Custom Icon Components ---
const FeatureIcon = ({ children }) => (
  <div className="p-2 rounded-full text-white shrink-0" style={{ backgroundColor: ORANGERED }}>
    {children}
  </div>
);

const IconTag = () => (
  <FeatureIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z"/><path d="M7 7h.01"/></svg>
  </FeatureIcon>
);

const IconPackage = () => (
  <FeatureIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.89 3a2 2 0 0 0-3.78 0l-.33 1h4.44l-.33-1z"/><path d="M19 19H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z"/><path d="M12 2v4"/><path d="M12 22v-4"/></svg>
  </FeatureIcon>
);

const IconUsers = () => (
  <FeatureIcon>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  </FeatureIcon>
);

// --- Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// --- Main Component ---
export default function ContactC() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("idle"); 
  const [error, setError] = useState("");

  const emailIsValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!emailIsValid(email)) return setError("Please enter a valid email address.");
    if (!agreed) return setError("Please agree to our Privacy & Cookie Policy.");

    try {
      setStatus("loading");
      await new Promise((res) => setTimeout(res, 700));
      setStatus("success");
      setEmail("");
      setAgreed(false);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  const inputClass = "flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4500] w-full sm:w-auto shadow-inner transition";

  return (
    <section className="bg-gray-50 py-16 md:py-24" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Adjusted container width */}
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
          className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch"
        >
          
          {/* Left content */}
          <motion.div 
            className="flex flex-col justify-between"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2 } } }}
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg" style={{ backgroundColor: ORANGERED }}>
                    B
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900">
                  Bazaro Insider
                </h3>
              </div>
              
              <p className="mt-2 text-lg text-gray-600 max-w-md">
                Get early access to sales, handpicked deals, vendor stories and more — delivered weekly, straight to your inbox.
              </p>

              <motion.ul className="mt-8 space-y-4" variants={containerVariants}>
                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <IconTag />
                  <div>
                    <div className="font-semibold text-gray-800">Exclusive discounts</div>
                    <div className="text-sm text-gray-500">Member-only coupons and early-bird prices.</div>
                  </div>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <IconPackage />
                  <div>
                    <div className="font-semibold text-gray-800">Curated picks</div>
                    <div className="text-sm text-gray-500">Weekly favorites from trusted vendors.</div>
                  </div>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <IconUsers />
                  <div>
                    <div className="font-semibold text-gray-800">Vendor stories</div>
                    <div className="text-sm text-gray-500">Meet sellers behind our best finds and discover their craft.</div>
                  </div>
                </motion.li>
              </motion.ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <strong className="text-gray-700">Tip:</strong> Add <span className="font-medium text-gray-800">hello@bazaro.com</span> to your contacts so our updates never land in spam.
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div 
            className="lg:col-span-2 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md flex flex-col justify-center"
            style={{ backgroundColor: ORANGERED, color: 'white' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-2xl font-bold mb-5">Sign Up for Instant Access</h4>
            <form onSubmit={handleSubmit}>
              
              <label htmlFor="email" className="sr-only">Email address</label>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  disabled={status === "loading"}
                  className={`${inputClass} bg-white text-gray-900 placeholder:text-gray-500 border-transparent`}
                />

                <motion.button
                  type="submit"
                  disabled={!emailIsValid(email) || !agreed || status === "loading"}
                  className={`px-6 py-3 rounded-xl font-bold uppercase tracking-wider shadow-lg transform transition disabled:opacity-50 disabled:cursor-not-allowed`}
                  style={{ backgroundColor: '#202020', color: 'white' }}
                  whileHover={{ scale: 1.02, backgroundColor: '#404040' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "loading" ? "Subscribing..." : "Join Now"}
                </motion.button>
              </div>

              <label className="inline-flex items-center gap-2 mt-4 text-sm text-white">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed((s) => !s)}
                  disabled={status === "loading"}
                  className="w-4 h-4 rounded border-gray-300 checked:bg-white checked:border-white focus:ring-0 transition"
                  style={{ '--tw-ring-color': 'white', color: ORANGERED }}
                />
                I agree to Bazaro's <a href="#" className="underline font-semibold hover:text-gray-200">Privacy & Cookie Policy</a>.
              </label>

              {error && <p className="mt-3 text-sm text-white bg-red-600/20 p-2 rounded-md font-medium">{error}</p>}

              <div aria-live="polite" className="mt-4">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-md p-3 bg-white text-gray-900 font-medium border border-gray-200"
                  >
                    Thank you! You're an Insider. Check your inbox for the welcome update.
                  </motion.div>
                )}
                {status === "error" && <div className="text-sm text-white">Something went wrong — please try again.</div>}
              </div>

              <div className="mt-5 text-xs text-white/80">You can unsubscribe at any time. We respect your privacy.</div>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
