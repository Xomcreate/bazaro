import React, { useState } from 'react';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to send reset email
    console.log(`Sending password reset link to: ${email}`);
    setIsSubmitted(true);
  };

  return (
    // Main container: Centered content on a clean, white background (bg-white or light gray)
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      
      {/* Forgot Password Card */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-xl rounded-2xl border border-gray-200">
        
        {/* Header Section */}
        <div className="text-center">
          {/* Black heading text */}
          <h2 className="text-3xl font-extrabold text-black">
            Forgot Your Password?
          </h2>
          {/* Gray description text */}
          <p className="mt-2 text-sm text-gray-600">
            {isSubmitted 
                ? "Check your inbox for the reset link."
                : "Enter your email address to receive a password reset link."
            }
          </p>
        </div>

        {/* Form / Success Message Section */}
        {isSubmitted ? (
          // --- SUCCESS MESSAGE ---
          // Using a light background with black text for the confirmation box
          <div className="space-y-4 text-center p-6 bg-gray-100 rounded-lg border border-[orangered]">
            {/* Icon colored in Orangered (red-600) */}
            <svg className="mx-auto h-12 w-12 text-[orangered]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <p className="text-lg font-medium text-black">
                Email Sent!
            </p>
            <p className="text-sm text-gray-700">
                If an account with **{email}** exists, we've sent instructions to reset your password.
                Please check your spam folder as well.
            </p>
            {/* Secondary button using a subtle style */}
            <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 w-full justify-center py-2 px-4 border border-[orangered] rounded-lg shadow-sm text-sm font-medium text-[orangered] bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
            >
                Try a Different Email
            </button>
          </div>
        ) : (
          // --- EMAIL REQUEST FORM ---
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                // Input border and focus ring uses black and orangered
                className="appearance-none relative block w-full px-3 py-3 border border-black placeholder-gray-500 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[orangered] focus:border-[orangered] sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                // Primary action button in Orangered (red-600) with white text
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        )}
        
        {/* Footer Link */}
        <div className="text-sm text-center">
          <a
            href="/login" // Replace with your actual login route
            // Link text in Orangered (red-600)
            className="font-medium text-[orangered] hover:text-[orangered]"
          >
            Remembered your password? Go back to Sign In
          </a>
        </div>

      </div>
    </div>
  );
}

export default ForgetPassword;