import React, { useState } from 'react';

// --- Mock Data for the Checkout Item ---
// This data would typically be passed via props or state from the Service Detail Page
const passItem = {
    id: 'TAILOR-BESPOKE-1',
    name: 'Consultation Pass: Bespoke Fitting',
    price: 2000, // Price in Naira (₦)
    serviceProvider: 'Master Tailor & Clothier',
    deductible: true, // Fee is deducted from the final service bill
};

function BookPay() {
    const [billingInfo, setBillingInfo] = useState({});
    const [paymentInfo, setPaymentInfo] = useState({});

    // Simulates the successful payment and redirects
    const handlePayment = (e) => {
        e.preventDefault();
        
        // --- 1. Processing Logic ---
        console.log("Processing payment for Consultation Pass...");
        console.log("Billing Info:", billingInfo);
        
        // --- 2. Commission Secured & Redirect ---
        // In a real application, a successful payment API response triggers the redirect.
        alert(`Payment of ₦${passItem.price.toLocaleString()} processed successfully! Redirecting to contact details.`);
        
        // Redirect to the SuccessPass (Contact Reveal) page
        // window.location.href = `/consultation-pass-success?passId=T-2025-00123`; 
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Style Definitions: Orangered Theme */}
            <style>{`
                .bg-orangered { background-color: orangered; }
                .text-orangered { color: orangered; }
                .border-orangered { border-color: orangered; }
                .focus-orangered:focus { border-color: orangered; box-shadow: 0 0 0 3px rgba(255, 69, 0, 0.25); outline: none; }
                .btn-orangered { background: orangered; }
                .btn-orangered:hover { filter: brightness(0.95); }
            `}</style>

            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 pb-2">
                    Checkout: Secure Your Consultation Pass
                </h1>
                

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Payment Form (2/3 width) */}
                    <main className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
                        <form onSubmit={handlePayment} className="space-y-6">
                            
                            {/* Billing Information */}
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 pl-3 border-orangered">
                                    1. Contact & Billing Information
                                </h2>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input type="text" placeholder="Full Name" required 
                                           className="p-3 border border-gray-300 rounded-lg focus-orangered" 
                                           onChange={(e) => setBillingInfo({...billingInfo, name: e.target.value})} />
                                    <input type="email" placeholder="Email Address" required 
                                           className="p-3 border border-gray-300 rounded-lg focus-orangered" 
                                           onChange={(e) => setBillingInfo({...billingInfo, email: e.target.value})} />
                                    <input type="tel" placeholder="Phone Number" required 
                                           className="p-3 border border-gray-300 rounded-lg focus-orangered sm:col-span-2" 
                                           onChange={(e) => setBillingInfo({...billingInfo, phone: e.target.value})} />
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 pl-3 border-orangered">
                                    2. Payment Details
                                </h2>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Card Number" required 
                                           className="w-full p-3 border border-gray-300 rounded-lg focus-orangered" 
                                           maxLength="19" />
                                    <div className="grid grid-cols-3 gap-4">
                                        <input type="text" placeholder="MM/YY" required 
                                               className="p-3 border border-gray-300 rounded-lg focus-orangered" 
                                               maxLength="5" />
                                        <input type="text" placeholder="CVC" required 
                                               className="p-3 border border-gray-300 rounded-lg focus-orangered" 
                                               maxLength="4" />
                                        <input type="text" placeholder="ZIP/Postal Code" required 
                                               className="p-3 border border-gray-300 rounded-lg focus-orangered" />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Final Pay Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className={`w-full py-4 text-xl font-bold text-white rounded-lg shadow-xl transition duration-200 ease-in-out bg-black hover:btn-orangered`}
                                >
                                    Pay Now: ₦{passItem.price.toLocaleString()}
                                </button>
                                <p className="text-xs text-gray-500 mt-2 text-center">
                                    Secure payment powered by your preferred gateway.
                                </p>
                            </div>

                        </form>
                    </main>

                    {/* Right Column: Order Summary (1/3 width) */}
                    <aside className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orangered">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                            
                            <div className="flex justify-between border-b pb-2 mb-2">
                                <span className="text-gray-600 font-medium">{passItem.name}</span>
                                <span className="font-semibold text-gray-800">₦{passItem.price.toLocaleString()}</span>
                            </div>
                            
                            <div className="flex justify-between mb-4">
                                <span className="text-gray-600">Service Fee / Tax</span>
                                <span className="text-gray-800">₦0</span>
                            </div>

                            <div className="flex justify-between pt-4 border-t-2 border-dashed border-gray-200">
                                <span className="text-xl font-bold text-gray-900">Total Due</span>
                                <span className="text-2xl font-extrabold text-orangered">₦{passItem.price.toLocaleString()}</span>
                            </div>

                            {passItem.deductible && (
                                <p className="text-sm text-green-600 mt-4 font-semibold text-center bg-green-50 p-2 rounded">
                                    *This fee will be deducted from your final tailoring service bill.
                                </p>
                            )}
                        </div>
                        
                        <div className="text-center text-sm text-gray-500">
                            <p>You are paying to **{passItem.serviceProvider}** through the platform.</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default BookPay;