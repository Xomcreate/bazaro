import React, { useState } from "react";
import { motion } from "framer-motion";

// --- Custom Icon SVGs (Using lucide-react style inline SVGs) ---

// The IconWrapper is now filled with the accent color and uses white icons for contrast
const IconWrapper = ({ children }) => (
  <div className="p-3 bg-[#FF4500] border border-[#FF4500] rounded-full text-white shrink-0 shadow-lg">
    {children}
  </div>
);

const MapPin = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20 10c0 6-8 15-8 15s-8-9-8-15a8 8 0 0 1 16 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  </IconWrapper>
);

const Phone = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.94-3.52A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 2.18c-.45 1.54-.9 3.1-1.27 4.64-.26.96-.28 2.11.23 3.03l3.5 3.5a2 2 0 0 0 2.15.45c1.02-.63 2.15-1.12 3.32-1.46.99-.29 2-.26 3.02.32.32.2.62.43.91.68Z"></path>
    </svg>
  </IconWrapper>
);

const Mail = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  </IconWrapper>
);

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// --- Main Component ---
export default function ContactB() {
  const ORANGERED = "#FF4500";
  const ACCENT_CLASS = "text-white bg-[#FF4500] hover:bg-[#CC4000] transition duration-300";

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Please enter a valid email";
    if (!form.message.trim()) e.message = "Please enter a message";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) {
      setTimeout(() => {
        setSent(true);
        // In a real application, you would send the form data here.
        // setForm({ name: "", email: "", subject: "", message: "" }); // Optionally clear form
      }, 600);
    }
  }

  // Common input styling updated for light theme
  const inputClass = "mt-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#FF4500] focus:border-[#FF4500] transition duration-200 shadow-sm";
  const labelClass = "text-sm font-medium text-gray-700 mb-1";
  
  return (
    <section id="contactb" className="bg-gray-50 text-gray-900 py-16 md:py-24" style={{ minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Title Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900" style={{ color: ORANGERED }}>
            Connect with ErrandBox Support
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            Our team is ready to assist you with orders, vendor inquiries, or technical support. Use the form below or reach out directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information Column */}
          <motion.div 
            className="flex flex-col gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Headquarters Card */}
            <motion.article 
              // Changed background and border to light colors
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl transition transform hover:shadow-orangered/20 hover:border-[#FF4500]"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin />
                <h3 className="text-xl font-bold text-gray-900">Headquarters</h3>
              </div>
              <p className="text-gray-600">123 ErrandBox Street, Suite 400</p>
              <p className="text-gray-600">Ikeja, Lagos, Nigeria</p>
              <p className="text-gray-600">100001</p>
            </motion.article>

            {/* Phone Card */}
            <motion.article 
              // Changed background and border to light colors
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl transition transform hover:shadow-orangered/20 hover:border-[#FF4500]"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <Phone />
                <h3 className="text-xl font-bold text-gray-900">Direct Lines</h3>
              </div>
              {/* Changed link text color to dark gray */}
              <a href="tel:+2348012345678" className="block text-gray-800 font-medium hover:text-[#FF4500] transition">Customer Care: +234 801 234 5678</a>
              <a href="tel:+2348023456789" className="block text-gray-800 font-medium hover:text-[#FF4500] transition mt-1">Vendor Support: +234 802 345 6789</a>
            </motion.article>

            {/* Email & Social Card */}
            <motion.article 
              // Changed background and border to light colors
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-xl transition transform hover:shadow-orangered/20 hover:border-[#FF4500]"
              variants={itemVariants}
            >
              <div className="flex items-center gap-4 mb-4">
                <Mail />
                <h3 className="text-xl font-bold text-gray-900">Email & Social</h3>
              </div>
              {/* Changed link text color to dark gray */}
              <a href="mailto:support@errandbox.com" className="block text-gray-800 font-medium hover:text-[#FF4500] transition">errandbox001@gmail.com</a>
              <a href="mailto:vendors@errandbox.com" className="block text-gray-800 font-medium hover:text-[#FF4500] transition mt-1">errandbox001@gmail.com</a>

              <div className="flex items-center gap-6 mt-6">
                {/* Changed social link text color to dark gray */}
                <a href="https://www.facebook.com/profile.php?id=61584912363128" className="text-gray-700 hover:text-[#FF4500] transition text-lg font-semibold">Facebook</a>
                <a href="" className="text-gray-700 hover:text-[#FF4500] transition text-lg font-semibold">Twitter</a>
                <a href="https://www.instagram.com/errandbox001?igsh=MXZndW84MXczcXZkdQ==" className="text-gray-700 hover:text-[#FF4500] transition text-lg font-semibold">Instagram</a>
              </div>
            </motion.article>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            // Changed background and border to light colors
            className="lg:col-span-2 bg-white border border-gray-200 p-8 md:p-12 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} noValidate>
              
              {/* Name and Email fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex flex-col">
                  <span className={labelClass}>Name</span>
                  {/* inputClass updated */}
                  <input name="name" value={form.name} onChange={handleChange} className={inputClass} placeholder="Your full name" />
                  {errors.name && <small className="text-red-600 mt-1">{errors.name}</small>}
                </label>

                <label className="flex flex-col">
                  <span className={labelClass}>Email</span>
                  {/* inputClass updated */}
                  <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
                  {errors.email && <small className="text-red-600 mt-1">{errors.email}</small>}
                </label>
              </div>

              {/* Subject field */}
              <div className="mt-6">
                <label className="flex flex-col">
                  <span className={labelClass}>Subject (Optional)</span>
                  {/* inputClass updated */}
                  <input name="subject" value={form.subject} onChange={handleChange} className={inputClass} placeholder="Topic of inquiry" />
                </label>
              </div>

              {/* Message field */}
              <div className="mt-6">
                <label className="flex flex-col">
                  <span className={labelClass}>Message</span>
                  {/* inputClass updated */}
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} className={`${inputClass} resize-none`} placeholder="Tell us more about your request" />
                  {errors.message && <small className="text-red-600 mt-1">{errors.message}</small>}
                </label>
              </div>

              {/* Submission Button */}
              <div className="mt-8">
                <motion.button 
                  type="submit" 
                  className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider shadow-lg transform hover:scale-[1.02] ${ACCENT_CLASS}`}
                  whileHover={{ scale: 1.05, boxShadow: `0 8px 25px -8px ${ORANGERED}` }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sent ? 'Sent Successfully!' : 'Send Message'}
                </motion.button>
                {/* Changed success text color to dark green for better visibility */}
                {sent && <p className="text-green-600 mt-3 text-sm font-medium">Thank you — your message has been received.</p>}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}