import React from 'react';
import { FaWrench, FaTools, FaCheckCircle, FaCalendarAlt, FaCreditCard } from 'react-icons/fa';

function Install() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="pt-16 pb-12 border-b border-black/10 bg-white shadow-md">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-extrabold text-black mb-4 flex items-center justify-center gap-4">
                        <FaWrench className="text-orange-600"/> Installation Services
                    </h1>
                    <p className="text-xl text-black/70 max-w-4xl mx-auto">
                        Get your new appliances, electronics, and furniture set up correctly by certified ErrandBox technicians.
                    </p>
                </div>
            </div>

            {/* Service Highlights and Eligibility */}
            <div className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">Why Choose Our Installation?</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Highlight 1 */}
                        <div className="text-center p-6 border border-black/10 rounded-xl shadow-lg">
                            <FaTools className="w-10 h-10 text-orange-600 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold text-black mb-2">Certified Technicians</h3>
                            <p className="text-sm text-black/80">
                                Our partners are highly trained and adhere to strict safety and quality standards.
                            </p>
                        </div>
                        {/* Highlight 2 */}
                        <div className="text-center p-6 border border-black/10 rounded-xl shadow-lg">
                            <FaCheckCircle className="w-10 h-10 text-orange-600 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold text-black mb-2">Warranty Assurance</h3>
                            <p className="text-sm text-black/80">
                                Proper installation ensures your product warranty remains valid and protected.
                            </p>
                        </div>
                        {/* Highlight 3 */}
                        <div className="text-center p-6 border border-black/10 rounded-xl shadow-lg">
                            <FaCalendarAlt className="w-10 h-10 text-orange-600 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold text-black mb-2">Flexible Scheduling</h3>
                            <p className="text-sm text-black/80">
                                Book the service directly at checkout or schedule it afterward at your convenience.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-black mb-6 mt-12 border-b border-orange-600 pb-2">Service Eligibility & Categories</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black/80">
                        {/* Eligible Items */}
                        <div className="p-4 border-l-4 border-orange-600 bg-black/5">
                            <h3 className="text-xl font-bold text-black mb-3">Eligible Products</h3>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                                <li>Major Home Appliances (A/C units, Washing Machines, Dishwashers).</li>
                                <li>Complex Electronics (Home Theater Systems, Projectors, Wall-Mounted TVs).</li>
                                <li>Select Furniture (Built-in cabinets, complicated assemblies).</li>
                                <li>Kitchen Fittings (Cooker hoods, certain ovens).</li>
                            </ul>
                        </div>
                        {/* Exclusions */}
                        <div className="p-4 border-l-4 border-black/50 bg-black/5">
                            <h3 className="text-xl font-bold text-black mb-3">Service Exclusions</h3>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                                <li>Basic assembly (Simple chairs, small tables).</li>
                                <li>Any service requiring major construction, plumbing, or significant electrical rewiring.</li>
                                <li>Products marked as 'Casual Seller' or 'Vendor Direct' without specific installation offers.</li>
                                <li>Service outside our designated service zones.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-black/5 py-16 border-t border-black/10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-extrabold text-black mb-10 text-center">How to Book Installation</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center p-6 rounded-xl border border-black/10 bg-white shadow-lg">
                            <div className="text-4xl font-extrabold text-orange-600 mb-2">1</div>
                            <h3 className="text-xl font-bold text-black mb-3">Add to Cart</h3>
                            <p className="text-sm text-black/80">
                                Select the "Installation Service" option on the product page before adding the item to your cart.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="text-center p-6 rounded-xl border border-black/10 bg-white shadow-lg">
                            <div className="text-4xl font-extrabold text-orange-600 mb-2">2</div>
                            <h3 className="text-xl font-bold text-black mb-3">Checkout & Pay</h3>
                            <p className="text-sm text-black/80">
                                Pay the standard installation fee upfront with your product. 
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="text-center p-6 rounded-xl border border-black/10 bg-white shadow-lg">
                            <div className="text-4xl font-extrabold text-orange-600 mb-2">3</div>
                            <h3 className="text-xl font-bold text-black mb-3">Schedule</h3>
                            <p className="text-sm text-black/80">
                                After delivery is confirmed, our scheduling team will contact you within 24 hours to arrange a convenient installation time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Install;