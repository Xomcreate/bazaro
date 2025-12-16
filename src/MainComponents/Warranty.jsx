import React from 'react';
import { FaShieldAlt, FaCalendarAlt, FaTools, FaWrench, FaExclamationTriangle, FaClipboardCheck } from 'react-icons/fa';

function Warranty() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="pt-16 pb-12 border-b border-black/10 bg-white shadow-md">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-extrabold text-black mb-4 flex items-center justify-center gap-4">
                        <FaShieldAlt className="text-orange-600"/> Product Warranty Policy
                    </h1>
                    <p className="text-xl text-black/70 max-w-4xl mx-auto">
                        Shop with confidence. Learn about the product protection offered on items purchased on ErrandBox.
                    </p>
                </div>
            </div>

            {/* Core Protection Highlights */}
            <div className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-extrabold text-orange-600 mb-10 text-center">
                        Your Protection, Our Priority
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black/80">
                        {/* Highlight 1: Duration */}
                        <div className="text-center p-6 border border-black/10 rounded-xl shadow-lg hover:shadow-orange-300 transition duration-300">
                            <FaCalendarAlt className="w-10 h-10 text-orange-600 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold text-black mb-2">Variable Duration</h3>
                            <p className="text-sm">
                                Duration is fixed by sellers or manufacturers, typically ranging from 6-24 months depending on the product category. Check individual product pages.
                            </p>
                        </div>
                        {/* Highlight 2: Service */}
                        <div className="text-center p-6 border border-black/10 rounded-xl shadow-lg hover:shadow-orange-300 transition duration-300">
                            <FaWrench className="w-10 h-10 text-orange-600 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold text-black mb-2">Honored by Vendor or Service Center</h3>
                            <p className="text-sm">
                                Warranties are honored by the original manufacturer, the selling vendor, or authorized third-party service centers.
                            </p>
                        </div>
                        {/* Highlight 3: Claim Process */}
                        <div className="text-center p-6 border border-black/10 rounded-xl shadow-lg hover:shadow-orange-300 transition duration-300">
                            <FaClipboardCheck className="w-10 h-10 text-orange-600 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold text-black mb-2">Easy Claim Process</h3>
                            <p className="text-sm">
                                Initiate your claim directly through your ErrandBox order page to get immediate contact with the responsible party.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Types of Coverage */}
            <div className="bg-black/5 py-16 border-t border-b border-black/10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-extrabold text-black mb-8 text-center">
                        Types of Coverage
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black/80">
                        {/* Manufacturer's Warranty */}
                        <div className="p-6 border-l-4 border-orange-600 bg-white shadow-lg">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                                <FaTools className="text-orange-600"/> Manufacturer's Warranty
                            </h3>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                                <li>Covers defects in materials and workmanship.</li>
                                <li>Valid globally or regionally.</li>
                                <li>Claim routed through official, authorized service centers.</li>
                            </ul>
                        </div>
                        {/* Seller/Vendor Warranty */}
                        <div className="p-6 border-l-4 border-orange-600 bg-white shadow-lg">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                                <FaShieldAlt className="text-orange-600"/> Seller/Vendor Warranty
                            </h3>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                                <li>Offered by independent vendors for refurbished or imported items.</li>
                                <li>Usually covers dead-on-arrival (DOA) or initial functionality issues.</li>
                                <li>Claim routed directly through the vendor via ErrandBox chat support.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exclusions and Claim Process */}
            <div className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-extrabold text-black mb-8 text-center">
                        Exclusions and Claim Process
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black/80">
                        
                        {/* Exclusions */}
                        <div className="p-6 rounded-xl border border-black/10 bg-black/5">
                            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                                <FaExclamationTriangle className="text-orange-600"/> What Voids Your Warranty?
                            </h3>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                                <li>Physical damage (e.g., impact damage, liquid spills).</li>
                                <li>Accidental misuse and incorrect installation by the customer.</li>
                                <li>Normal wear and tear (e.g., battery degradation, faded filters).</li>
                                <li>Unauthorized modifications or repairs performed outside of approved service centers.</li>
                                <li>Lack of original packaging or the warranty card/invoice.</li>
                            </ul>
                        </div>

                        {/* Claim Process */}
                        <div className="p-6 rounded-xl border border-black/10 bg-black/5">
                            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                                <FaClipboardCheck className="text-orange-600"/> How to Make a Warranty Claim
                            </h3>
                            <ol className="list-decimal list-inside ml-4 space-y-3 text-sm font-semibold">
                                <li>**Contact Support:** Reach out to ErrandBox Customer Service via chat or phone.</li>
                                <li>**Provide Proof:** Submit your order number, invoice, and a detailed description of the defect.</li>
                                <li>**Assessment:** ErrandBox assesses if the claim falls under Manufacturer or Vendor coverage.</li>
                                <li>**Resolution:** You will be directed to the appropriate service center or vendor for repair, replacement, or refund.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Warranty;