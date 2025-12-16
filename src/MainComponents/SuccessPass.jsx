import React from 'react';
import { Link } from 'react-router-dom';

// --- Mock Data for the Success Page ---
// NOTE: In a live app, this data would be fetched based on a transaction ID 
// or passed from the checkout process (e.g., via props or URL params).
const transactionData = {
    passId: 'T-2025-00123',
    serviceTitle: 'Bespoke Garment Alteration & Custom Fitting',
    serviceProvider: 'Master Tailor & Clothier',
    passCost: '₦2,000',
    deductible: true, // Fee is deducted from the final service bill
    contact: {
        name: 'Master Tailor John Doe',
        phone: '+234 81 555-TALY',
        whatsapp: '23481555TALY',
        email: 'tailor@mastercraft.com'
    }
};

function SuccessPass() {
  const handleWhatsApp = () => {
    // Pre-populates a message with the required Pass ID
    const message = encodeURIComponent(`Hello ${transactionData.contact.name}, I have secured Consultation Pass ID: ${transactionData.passId} and would like to schedule my fitting.`);
    window.open(`https://wa.me/${transactionData.contact.whatsapp}?text=${message}`, '_blank');
  }

  const handlePhoneCall = () => {
    window.location.href = `tel:${transactionData.contact.phone}`;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Style Definitions: Orangered Theme and WhatsApp Green */}
      <style>{`
        .bg-orangered { background-color: orangered; }
        .text-orangered { color: orangered; }
        .btn-orangered { background: orangered; }
        .btn-orangered:hover { filter: brightness(0.95); }
        .whatsapp-green { background-color: #25D366; }
        .whatsapp-green:hover { background-color: #128C7E; }
      `}</style>

      <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center border-t-8 border-orangered">
          
          {/* Success Header */}
          <div className="flex justify-center mb-6">
            {/* Success Icon */}
            <svg className="w-16 h-16 text-orangered" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Success! Consultation Pass Secured.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your payment for the **{transactionData.serviceTitle}** service is confirmed.
          </p>

          {/* Pass ID & Summary */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8 border border-gray-200">
            <p className="text-sm uppercase tracking-wider text-gray-500">Your Unique Pass ID:</p>
            <p className="text-4xl font-extrabold text-orangered my-2">{transactionData.passId}</p>
            <p className="text-sm text-gray-700 font-medium">
                Service Provider: {transactionData.serviceProvider}
            </p>
            {transactionData.deductible && (
                <p className="text-sm text-green-600 mt-2 font-semibold">
                    *The {transactionData.passCost} fee is fully deducted from your final bill.*
                </p>
            )}
          </div>
          
          {/* 3. Contact Reveal Card (The Payoff) */}
          <div className="bg-white border-2 border-orangered p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Tailor's Direct Contact:
            </h2>
            <p className="text-xl font-semibold text-black mb-4">{transactionData.contact.name}</p>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <button
                  onClick={handleWhatsApp}
                  className={`w-full py-3 text-lg font-bold text-white rounded-lg shadow-md transition duration-200 ease-in-out whatsapp-green flex items-center justify-center gap-2`}
              >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M12.001 2c-5.523 0-10 4.478-10 10 0 1.777.464 3.447 1.282 4.908l-1.282 4.092 4.225-1.268c1.393.766 2.97 1.205 4.775 1.205 5.523 0 10-4.478 10-10s-4.477-10-10-10zm0 18.2c-1.63 0-3.14-.492-4.408-1.353l-.317-.206-3.235 1.036 1.036-3.235-.206-.317c-.861-1.268-1.353-2.778-1.353-4.408 0-4.566 3.702-8.268 8.268-8.268s8.268 3.702 8.268 8.268-3.702 8.268-8.268 8.268zm3.626-5.835c-.179-.092-.816-.403-.941-.45-.125-.046-.216-.068-.306.068-.092.137-.354.45-.433.541-.079.091-.16.102-.296.068-.135-.034-.567-.208-1.077-.665-.398-.354-.666-.793-.746-.929-.079-.136 0-.21-.068-.278-.069-.069-.17-.16-.258-.278-.088-.118-.016-.204.053-.339.068-.135.068-.254.102-.339.034-.085.17-.068.258-.034.088.034.195.068.274.137.08.069.102.153.18.278.079.125.263.424.321.516.059.091.059.186.012.308-.046.12-.296.091-.687.354-.378.254-.516.321-.806.666-.29.345-.452.689-.544.825-.09.136-.022.285.086.377.098.087.27.12.449.12.18 0 .428-.068.618-.231.191-.162.597-.478.722-.57.125-.091.319-.118.498-.068.179.05.77.262 1.036.377.265.114.45.153.516.153.068 0 .416-.068.76-.398.345-.339.544-.825.613-1.029.068-.204.068-.38-.034-.533z"/></svg>
                  Chat on WhatsApp
              </button>

              <button
                  onClick={handlePhoneCall}
                  className={`w-full py-3 text-lg font-bold text-white rounded-lg shadow-md transition duration-200 ease-in-out bg-black hover:btn-orangered flex items-center justify-center gap-2`}
              >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Call: {transactionData.contact.phone}
              </button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
                **ACTION REQUIRED:** Be sure to provide your **Pass ID: {transactionData.passId}** when contacting the tailor.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SuccessPass;