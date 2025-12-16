import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaWarehouse, FaClock, FaTag, FaMoneyBillWave } from 'react-icons/fa';

function Delivery() {
    // Delivery options data, updated to include payment method
    const deliveryOptions = [
        {
            type: "Standard E-commerce Delivery (PBD)",
            icon: FaTruck,
            timeframe: "3 - 7 Business Days",
            cost: "Variable (Based on Weight/Distance)",
            payment: "Payment Before Delivery (PBD) Required",
            details: "Applies to most items shipped directly from ErrandBox warehouses or major Pro Merchants. Payment must be confirmed before dispatch."
        },
        {
            type: "Express Delivery (PBD)",
            icon: FaClock,
            timeframe: "1 - 2 Business Days",
            cost: "$15 Flat Rate (or higher)",
            payment: "Payment Before Delivery (PBD) Required",
            details: "Premium option available in major cities. Payment must be completed when the order is placed."
        },
        {
            type: "Vendor Direct/Local Pickup (Negotiable)",
            icon: FaMapMarkerAlt,
            timeframe: "Immediate or Same-Day (Arranged by Seller)",
            cost: "Free (or Seller-Defined Fee)",
            payment: "Payment Terms Arranged with Seller (May be PBD or CoD)",
            details: "Common for Casual Seller listings (Jiji-style). Buyers can negotiate payment terms (including Cash on Delivery) directly with the seller."
        },
        {
            type: "Heavy & Bulk Item Delivery (PBD)",
            icon: FaWarehouse,
            timeframe: "7 - 14 Business Days",
            cost: "Custom Quote Required",
            payment: "Payment Before Delivery (PBD) Required",
            details: "For large items like furniture. Full payment is required before delivery scheduling."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="pt-16 pb-12 border-b border-black/10 bg-white shadow-md">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-extrabold text-black mb-4 flex items-center justify-center gap-4">
                        <FaTruck className="text-orange-600"/> Delivery Information & Payment Policy
                    </h1>
                    <p className="text-xl text-black/70 max-w-4xl mx-auto">
                        We offer flexible and reliable shipping options. Please note our **Payment Before Delivery (PBD)** policy for official e-commerce shipments.
                    </p>
                </div>
            </div>

            {/* Delivery Options Table */}
            <div className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">Our Shipping Methods & Payment Terms</h2>
                    
                    <div className="overflow-x-auto shadow-2xl rounded-xl border border-black/10">
                        <table className="min-w-full divide-y divide-black/10">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-sm font-extrabold uppercase tracking-wider w-2/5">
                                        Type of Delivery
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-sm font-extrabold uppercase tracking-wider w-1/5">
                                        Expected Timeframe
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-sm font-extrabold uppercase tracking-wider w-1/5">
                                        Shipping Cost
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-sm font-extrabold uppercase tracking-wider w-1/5">
                                        Payment Rule
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-black/10">
                                {deliveryOptions.map((option, index) => (
                                    <tr key={index} className="hover:bg-black/5 transition duration-150">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <option.icon className="w-5 h-5 text-orange-600 mr-3 shrink-0" />
                                                <div className="text-base font-semibold text-black">
                                                    {option.type}
                                                </div>
                                            </div>
                                            <p className="text-sm text-black/70 mt-1 pl-8 max-w-xs">{option.details}</p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base text-black font-medium">
                                            {option.timeframe}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base font-bold">
                                            {option.cost === "Free (or Seller-Defined Fee)" ? (
                                                <span className="text-orange-600">{option.cost}</span>
                                            ) : (
                                                <span className="text-black">{option.cost}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-base font-bold">
                                            {option.payment.includes("PBD Required") ? (
                                                <span className="text-orange-600">{option.payment}</span>
                                            ) : (
                                                <span className="text-black/70 text-sm italic">{option.payment}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Tracking and Policy Section (PBD Emphasis) */}
            <div className="bg-black/5 py-12 border-t border-black/10">
                <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 text-black/80">
                    
                    {/* PBD Policy Explanation */}
                    <div className="p-4 border-l-4 border-orange-600">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-black mb-4">
                            <FaMoneyBillWave className="text-orange-600"/> Payment Before Delivery (PBD)
                        </h3>
                        <p className="mb-4 text-sm">
                            For all Standard, Express, and Heavy Item deliveries handled by ErrandBox logistics, **full payment is required during checkout**. This policy ensures seller protection and efficient dispatch from the warehouse.
                        </p>
                        <p className="text-sm font-semibold text-orange-600">
                            Your payment remains protected by ErrandBox until the order is successfully confirmed as delivered.
                        </p>
                    </div>

                    {/* Local Pickup Clarification */}
                    <div className="p-4 border-l-4 border-orange-600">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-black mb-4">
                            <FaMapMarkerAlt className="text-orange-600"/> Local Pickup (Jiji Style)
                        </h3>
                        <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                            <li>Local pickups offer flexibility in payment. You and the vendor must agree on terms (e.g., electronic transfer on meeting, or Cash on Delivery (CoD)).</li>
                            <li>If using CoD outside the platform, the transaction is **not covered** by the ErrandBox Buyer Protection Guarantee.</li>
                            <li>We recommend using the platform's secure chat to document all agreements.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Delivery;