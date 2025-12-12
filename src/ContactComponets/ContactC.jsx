// Unique and fully updated version — all 'Bazaro' changed to 'ErrandBox'
// ContactC Component (ErrandBox Insider Signup)

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- Added Link

// --- Constants ---
const BRAND_COLOR = "#FF4500";
const ACCENT_BTN = "bg-[#FF4500] text-white hover:bg-[#CC4000] transition duration-300";

// --- Reusable Icon Wrapper ---
const FeatureIcon = ({ children }) => (
  <div
    className="p-2 rounded-full text-white shrink-0 shadow-md"
    style={{ backgroundColor: BRAND_COLOR }}
  >
    {children}
  </div>
);

// --- Icons ---
const IconTag = () => (
  <FeatureIcon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z" />
      <path d="M7 7h.01" />
    </svg>
  </FeatureIcon>
);

const IconPackage = () => (
  <FeatureIcon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.89 3a2 2 0 0 0-3.78 0l-.33 1h4.44l-.33-1z" />
      <path d="M19 19H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z" />
      <path d="M12 2v4" />
      <path d="M12 22v-4" />
    </svg>
  </FeatureIcon>
);

const IconUsers = () => (
  <FeatureIcon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </FeatureIcon>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { x: -12, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// --- Main Component ---
export default function ContactC() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) return setError("Please enter a valid email address.");
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

  const inputClass =
    "flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4500] w-full sm:w-auto shadow-inner transition";

  return (
    <section className="bg-gray-50 py-16 md:py-24" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch"
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col justify-between"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.2 } } }}
          >
            <div>
              {/* Header with Logo */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="/Images/pom1.png"
                  alt="ErrandBox Logo"
                  className="w-10 h-10 rounded-xl object-cover shadow-lg"
                />

                <h3 className="text-3xl font-extrabold text-gray-900 whitespace-nowrap">
                  ErrandBox Insider
                </h3>
              </div>

              <p className="mt-2 text-lg text-gray-600 max-w-md">
                Be the first to get exclusive offers, curated picks, behind-the-scenes vendor stories
                and weekly marketplace insights — straight to your inbox.
              </p>

              <motion.ul className="mt-8 space-y-4" variants={containerVariants}>
                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <IconTag />
                  <div>
                    <div className="font-semibold text-gray-800">Exclusive deals</div>
                    <div className="text-sm text-gray-500">Unlock discounts only Insiders receive.</div>
                  </div>
                </motion.li>

                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <IconPackage />
                  <div>
                    <div className="font-semibold text-gray-800">Handpicked selections</div>
                    <div className="text-sm text-gray-500">Weekly curated items from verified vendors.</div>
                  </div>
                </motion.li>

                <motion.li className="flex items-start gap-3" variants={itemVariants}>
                  <IconUsers />
                  <div>
                    <div className="font-semibold text-gray-800">Vendor spotlights</div>
                    <div className="text-sm text-gray-500">Meet the creators behind your favorite finds.</div>
                  </div>
                </motion.li>
              </motion.ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-sm text-gray-500">
              <strong className="text-gray-700">Tip:</strong> Add
              <span className="font-medium text-gray-800"> hello@errandbox.com </span>
              to your contacts so updates don't land in spam.
            </div>
          </motion.div>

          {/* Right Section — Form */}
          <motion.div
            className="lg:col-span-2 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-md flex flex-col justify-center"
            style={{ backgroundColor: BRAND_COLOR, color: "white" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-2xl font-bold mb-5">Become an Insider Today</h4>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>

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
                  disabled={!validateEmail(email) || !agreed || status === "loading"}
                  className="px-6 py-3 rounded-xl font-bold uppercase tracking-wider shadow-lg transform transition disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#202020" }}
                  whileHover={{ scale: 1.03, backgroundColor: "#3b3b3b" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === "loading" ? "Processing..." : "Join Now"}
                </motion.button>
              </div>

              {/* Checkbox */}
              <label className="inline-flex items-center gap-2 mt-4 text-sm text-white">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed((v) => !v)}
                  disabled={status === "loading"}
                  className="w-4 h-4 rounded border-gray-300 checked:bg-white checked:border-white focus:ring-0 transition"
                  style={{ color: BRAND_COLOR }}
                />
                I agree to ErrandBox's{" "}
                <Link
                  to="/privacy"
                  className="underline font-semibold hover:text-gray-200"
                >
                  Privacy & Cookie Policy
                </Link>
                .
              </label>

              {/* Error Message */}
              {error && (
                <p className="mt-3 text-sm text-white bg-red-600/20 p-2 rounded-md font-medium">{error}</p>
              )}

              {/* Success or Failure */}
              <div aria-live="polite" className="mt-4">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-md p-3 bg-white text-gray-900 font-medium border border-gray-200"
                  >
                    You're officially an ErrandBox Insider! Check your inbox for a welcome message.
                  </motion.div>
                )}

                {status === "error" && (
                  <div className="text-sm text-white">An error occurred — please try again.</div>
                )}
              </div>

              <div className="mt-5 text-xs text-white/80">
                You can unsubscribe at any time. Your privacy is respected.
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
