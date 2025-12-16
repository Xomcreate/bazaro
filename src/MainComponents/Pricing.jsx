import React from 'react';
import { FaCheckCircle, FaMinusCircle, FaTags, FaStore, FaChartLine, FaEnvelope, FaTachometerAlt, FaRegStar } from 'react-icons/fa';

const pricingPlans = [
    {
        name: "Casual Seller",
        tagline: "Start selling locally, effortlessly.",
        price: "Free",
        isPopular: false,
        buttonText: "Start Selling Free",
        commission: "10%",
        ctaColor: "bg-black hover:bg-gray-800 text-white",
        features: [
            { text: "Up to 5 Active Classified Listings", icon: FaTags, included: true },
            { text: "10% Standard Commission Fee", icon: FaChartLine, included: true },
            { text: "Basic Product Page", icon: FaStore, included: true },
            { text: "No Dedicated Storefront", icon: FaMinusCircle, included: false },
            { text: "Email Support Only", icon: FaEnvelope, included: true },
            { text: "Pay-Per-Use Listing Boosts", icon: FaTachometerAlt, included: true },
        ]
    },
    {
        name: "Pro Merchant",
        tagline: "Scale your e-commerce and local sales.",
        price: "$49",
        per: "/month",
        isPopular: true,
        buttonText: "Upgrade Now",
        commission: "5%",
        ctaColor: "bg-orange-600 hover:bg-orange-700 text-white",
        features: [
            { text: "Unlimited Active Listings", icon: FaTags, included: true },
            { text: "5% Standard Commission Fee", icon: FaChartLine, included: true, highlight: true },
            { text: "Dedicated Seller Storefront", icon: FaStore, included: true },
            { text: "Priority Chat & Email Support", icon: FaEnvelope, included: true },
            { text: "5 FREE Monthly Listing Boosts", icon: FaTachometerAlt, included: true, highlight: true },
            { text: "Advanced Sales Analytics", icon: FaChartLine, included: true },
        ]
    },
    {
        name: "Premium Store",
        tagline: "Maximum visibility for high-volume brands.",
        price: "$199",
        per: "/month",
        isPopular: false,
        buttonText: "Contact Sales",
        commission: "2.5%",
        ctaColor: "bg-black hover:bg-gray-800 text-white",
        features: [
            { text: "Unlimited Active Listings & Categories", icon: FaTags, included: true, highlight: true },
            { text: "2.5% Standard Commission Fee", icon: FaChartLine, included: true, highlight: true },
            { text: "Premium Storefront Customization", icon: FaStore, included: true },
            { text: "Dedicated Account Manager", icon: FaEnvelope, included: true, highlight: true },
            { text: "15 FREE Monthly Listing Boosts", icon: FaTachometerAlt, included: true, highlight: true },
            { text: "API Integration & Real-time Reports", icon: FaChartLine, included: true },
        ]
    }
];

function Pricing() {
    const FeatureItem = ({ text, included, highlight }) => (
        <li className={`flex items-center justify-center space-x-2 py-2 ${highlight ? 'font-semibold text-orange-600' : 'text-black'}`}>
            {included ? (
                <FaCheckCircle className="w-5 h-5 text-orange-600" />
            ) : (
                <FaMinusCircle className="w-5 h-5 text-black/50" />
            )}
            <span className="text-sm text-center">{text}</span>
        </li>
    );

    return (
        <div className="bg-white min-h-screen text-center">
            {/* Header Section */}
            <div className="pt-16 pb-10 border-b border-black/10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-extrabold text-black mb-4">Vendor Pricing Plans</h1>
                    <p className="text-xl text-black/70 max-w-3xl mx-auto">Choose the right plan to maximize your visibility and profit margin on ErrandBox.</p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <span className="text-black/70 font-medium">Monthly Billing</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-black/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-600/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-black/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                        </label>
                        <span className="text-black/70 font-medium">Annual Billing <span className="font-bold text-orange-600">(-20% Discount)</span></span>
                    </div>
                </div>
            </div>

            {/* Pricing Cards Section */}
            <div className="py-16">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.name}
                            className={`relative flex flex-col items-center rounded-xl shadow-xl p-8 transition-all duration-300 ${
                                plan.isPopular 
                                    ? 'bg-white border-4 border-orange-600 scale-[1.02] shadow-orange-600/30' 
                                    : 'bg-white border border-black/10'
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1 bg-orange-600 text-white text-sm font-bold uppercase tracking-wider rounded-full flex items-center gap-2 shadow-lg">
                                    <FaRegStar className="w-4 h-4"/> Best Value
                                </div>
                            )}
                            <h2 className="text-3xl font-bold text-black mb-2">{plan.name}</h2>
                            <p className="text-black/70 text-sm mb-6">{plan.tagline}</p>

                            {/* Price */}
                            <div className="flex flex-col items-center mb-2">
                                <span className={`text-5xl font-extrabold ${plan.isPopular ? 'text-orange-600' : 'text-black'}`}>
                                    {plan.price === "Free" ? plan.price : plan.price.replace('$', '$ ')}
                                </span>
                                {plan.price !== "Free" && <span className="text-xl font-medium text-black/70">{plan.per}</span>}
                            </div>

                            {/* Commission */}
                            <p className="text-lg font-bold text-black mb-6">
                                <span className="text-2xl font-extrabold text-orange-600">{plan.commission}</span> Commission on Sales
                            </p>

                            {/* Button */}
                            <a
                                href={plan.price === "Free" ? "/register/seller" : "/checkout/pro"}
                                className={`block w-full text-center py-3 rounded-lg font-bold transition-all shadow-lg ${plan.ctaColor} ${
                                    plan.isPopular ? 'shadow-orange-400/50' : 'shadow-black/20'
                                }`}
                            >
                                {plan.buttonText}
                            </a>

                            {/* Features List */}
                            <ul className="flex-1 flex flex-col items-center space-y-2 mt-6 border-t pt-6 border-black/10">
                                {plan.features.map((feature, index) => (
                                    <FeatureItem 
                                        key={index}
                                        text={feature.text} 
                                        included={feature.included}
                                        highlight={feature.highlight}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pricing;
