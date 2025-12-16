import React from 'react'

// --- Mock Tailoring Service Data (Defined here for clarity) ---
const tailoringServiceData = {
    title: "Bespoke Garment Alteration & Custom Fitting",
    tagline: "Achieve the perfect fit for your wardrobe. Expert tailoring services, from minor adjustments to complete garment remodels.",
    overview: "Our experienced tailor provides precision alterations for suits, dresses, coats, and formal wear. We focus on enhancing comfort, style, and durability, ensuring every piece fits your body and reflects your personal style.",
    provider: "Master Tailor & Clothier",
    duration: "1 - 3 Weeks (Service Dependent)",
    deliverables: [
        "One-on-one consultation and body measurement session.",
        "Precision stitching and finishing using high-quality threads.",
        "Steam pressing and ready-to-wear packaging.",
        "Client fitting session and minor post-fitting adjustments (included).",
        "Lifetime guarantee on all major seams and stitching."
    ],
    processSteps: [
        { id: 1, name: "Consultation & Pinning", icon: "📐", description: "Detailed discussion on fit goals, style preferences, and initial pinning of the garment." },
        { id: 2, name: "Deconstruction & Tailoring", icon: "✂️", description: "Garment is carefully taken apart, adjusted according to markings, and meticulously sewn." },
        { id: 3, name: "Mid-Process Fitting (Optional)", icon: "👕", description: "Check fit adjustments before final finishing for complex jobs like suit re-cuts." },
        { id: 4, name: "Final Fitting & Collection", icon: "✨", description: "Client inspects and approves the final fit, followed by payment and collection." }
    ],
    pricingTiers: [
        { name: "Minor Alterations", price: "₦3,000+", features: ["Hems/Cuffs", "Simple Waist Adjustments", "Buttons"] },
        { name: "Complex Adjustments", price: "₦12,000+", features: ["Jacket Sleeves/Shoulders", "Dress Resizing", "Lining Repair"] },
        { name: "Bespoke Projects", price: "Quote Only", features: ["Custom Suit/Dress Making", "Complete Re-cuts", "Material Sourcing"] }
    ],
    trustPoints: [
        { stat: "30+ Years", label: "Experience" },
        { stat: "3 Days", label: "Rush Service Available" },
        { stat: "100%", label: "Fit Guarantee" }
    ],
    // Data for the Commission Lock feature
    consultationPass: {
        cost: '₦2,000',
        deductible: true, // Fee is taken off the final service bill
        serviceId: 'TAILOR-BESPOKE-1' 
    }
};

function ServiceDetail() {
  const lightAccentBg = 'rgba(255, 69, 0, 0.05)'; 

  // --- INTEGRATION POINT: Connects to the BookPay Checkout Page ---
  const handleBuyPass = () => {
    // In a real application, you would use a navigation library (like react-router's useNavigate hook)
    // to direct the user to the checkout route, often passing the service ID.
    
    // Example using a simulated redirect:
    const checkoutURL = `/checkout/pass/${tailoringServiceData.consultationPass.serviceId}`;

    alert(
        `Initiating checkout for the Consultation Pass (${tailoringServiceData.consultationPass.cost}).\n` +
        `This action redirects to the BookPay page for payment confirmation.\n` +
        `Simulated Redirect to: ${checkoutURL}`
    );
    
    // For a live application, this would be: 
    // navigate(checkoutURL); 
  };
  // -----------------------------------------------------------------


  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Style Definitions: Orangered Theme */}
      <style>{`
        .bg-orangered { background-color: orangered; }
        .text-orangered { color: orangered; }
        .ring-orangered:focus { box-shadow: 0 0 0 4px rgba(255,69,0,0.15); outline: none; }
        .btn-orangered { background: orangered; }
        .btn-orangered:hover { filter: brightness(0.95); }
      `}</style>

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. Header & Value Proposition --- */}
        <header className={`bg-white rounded-xl shadow-2xl p-6 md:p-10 mb-10 border-t-8 border-orangered`}>
          <p className={`text-sm font-semibold uppercase tracking-wider text-orangered`}>
            Artisan Service by {tailoringServiceData.provider}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
            {tailoringServiceData.title}
          </h1>
          <p className="text-xl text-gray-600 mt-4 max-w-4xl">
            {tailoringServiceData.tagline}
          </p>
          
          {/* Trust Points / Key Stats */}
          <div className="mt-6 flex flex-wrap gap-8 pt-4 border-t border-gray-100">
            {tailoringServiceData.trustPoints.map((point) => (
              <div key={point.label}>
                <p className={`text-3xl font-bold text-orangered`}>{point.stat}</p>
                <p className="text-sm text-gray-500">{point.label}</p>
              </div>
            ))}
          </div>
        </header>

        {/* --- 2. Main Content Layout (Details & CTA) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details (2/3 width on large screens) */}
          <main className="lg:col-span-2 space-y-10">
            {/* Service Overview, Deliverables, and Process Steps... (content hidden for brevity) */}
            
            {/* Service Overview */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className={`text-2xl font-bold text-gray-900 mb-4 border-l-4 pl-3 border-orangered`}>The Art of the Perfect Fit</h2>
              <p className="text-gray-700 leading-relaxed">{tailoringServiceData.overview}</p>
            </section>
            
            {/* Deliverables */}
            <section className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className={`text-2xl font-bold text-gray-900 mb-4 border-l-4 pl-3 border-orangered`}>Our Commitment & Deliverables</h2>
              <ul className="space-y-3">
                {tailoringServiceData.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <svg className={`shrink-0 w-6 h-6 text-orangered mr-3 mt-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Process Steps (Customization Focus) */}
            <section className={`p-6 rounded-xl shadow-inner`} style={{backgroundColor: lightAccentBg}}>
              <h2 className={`text-2xl font-bold text-gray-900 mb-6`}>The Customization Process</h2>
              <div className="relative">
                <div className={`absolute left-4 top-0 bottom-0 w-0.5 bg-orangered opacity-30 hidden sm:block`}></div>
                {tailoringServiceData.processSteps.map((step) => (
                  <div key={step.id} className="relative flex items-start mb-8">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-orangered text-white font-bold text-sm shrink-0 z-10 shadow-lg`}>{step.id}</div>
                    <div className="ml-5 pt-0.5">
                      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">{step.icon} {step.name}</h3>
                      <p className="mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Right Column: CTA & Pricing (1/3 width on large screens) */}
          <aside className="lg:col-span-1 space-y-8">
            
            {/* Primary CTA Box: COMMISSION LOCK (The trigger for BookPay) */}
            <div className={`sticky top-8 bg-white p-6 rounded-xl shadow-2xl border-t-8 border-orangered space-y-4`}>
                <h3 className="text-2xl font-bold text-gray-900">
                    Unlock Direct Consultation
                </h3>
                <p className="text-gray-600">
                    Secure your consultation pass to instantly receive the Master Tailor's direct contact details and prioritize your fitting.
                </p>
                
                {/* Main Action Button - Calls handleBuyPass, which links to BookPay */}
                <button
                    onClick={handleBuyPass}
                    className={`w-full py-3 text-lg font-bold text-white rounded-lg shadow-xl transition duration-200 ease-in-out bg-black hover:btn-orangered`}
                >
                    BUY CONSULTATION PASS ({tailoringServiceData.consultationPass.cost})
                </button>
                
                {/* Trust Messaging */}
                <div className="pt-2 border-t border-gray-100 text-sm text-center">
                    {tailoringServiceData.consultationPass.deductible ? (
                        <p className="font-semibold text-orangered">
                            *This fee is fully deducted from your final tailoring bill.
                        </p>
                    ) : (
                        <p className="text-gray-500">
                            *This fee secures your commitment and goes towards platform maintenance.
                        </p>
                    )}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500 pt-2 border-t border-gray-100">
                    <span>Estimated Completion:</span>
                    <span className="font-semibold text-gray-800">{tailoringServiceData.duration}</span>
                </div>
            </div>

            {/* Pricing Tiers (Secondary CTA) */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing Guide</h3>
                {tailoringServiceData.pricingTiers.map((tier) => (
                    <div key={tier.name} className="border-b last:border-b-0 py-3">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-800">{tier.name}</span>
                            <span className={`text-xl font-extrabold text-orangered`}>{tier.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                            Common requests: {tier.features.join(', ')}
                        </p>
                        {tier.price === "Quote Only" && (
                             <button className={`mt-2 w-full py-1.5 text-sm font-semibold text-orangered border border-orangered rounded-lg hover:bg-red-50`}>
                                Request Custom Quote
                            </button>
                        )}
                    </div>
                ))}
            </div>
            
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail