import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaRedo, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

// Define the content for the collapsible sections (FAQs style)
const returnPolicyData = [
    {
        title: "1. Return Eligibility Window",
        icon: FaRedo,
        content: (
            <div className="text-black/80 space-y-3">
                <p>Most items purchased on ErrandBox are eligible for return within **7 to 14 days** from the date of delivery, depending on the product category and the vendor's specific policy. Always check the individual product listing for the exact return window.</p>
                <ul className="list-disc list-inside ml-4 text-sm">
                    <li>**14 Days:** Electronics, Apparel, and General Merchandise sold by official ErrandBox partners.</li>
                    <li>**7 Days:** Products from independent third-party vendors or specialized items (e.g., specific fashion accessories, custom items).</li>
                    <li>**Non-Returnable:** Digital goods, sealed beauty products (if opened), personal hygiene items, and perishable goods.</li>
                </ul>
            </div>
        ),
    },
    {
        title: "2. Conditions for a Valid Return",
        icon: FaShieldAlt,
        content: (
            <div className="text-black/80 space-y-3">
                <p>For a return to be accepted, the item must meet the following conditions:</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li className='font-semibold'>**Original Condition:** The item must be unused, unworn, unwashed, and in the same condition that you received it.</li>
                    <li>**Original Packaging:** The item must be returned in its original box/packaging, including all tags, manuals, and accessories.</li>
                    <li>**Proof of Purchase:** A valid receipt, invoice, or order confirmation number is required.</li>
                    <li className='text-orange-600'>**Faulty/Damaged Items:** If the item is faulty, damaged, or incorrect upon delivery, the return window still applies, and we will cover the return shipping costs.</li>
                </ul>
            </div>
        ),
    },
    {
        title: "3. Refund Options and Timelines",
        icon: FaMoneyBillWave,
        content: (
            <div className="text-black/80 space-y-3">
                <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>**Refund Method:** Refunds are typically processed back to the original payment method (Bank Transfer, Card, Wallet).</li>
                    <li className='font-semibold'>**Processing Time:** Expect 3–5 business days for the refund to be approved and initiated after the returned item arrives at the vendor's warehouse.</li>
                    <li>**Bank Processing:** It may take an additional 5–10 business days for the funds to reflect in your bank or card account, depending on your bank's policies.</li>
                </ul>
            </div>
        ),
    },
    {
        title: "4. Initiating a Return (Step-by-Step)",
        icon: FaRedo,
        content: (
            <ol className="list-decimal list-inside ml-4 space-y-3 text-black/80">
                <li>**Login:** Access your ErrandBox account and navigate to the "Order History" section.</li>
                <li>**Select Order:** Find the order containing the item(s) you wish to return.</li>
                <li>**Request Return:** Click the "Initiate Return" button and fill out the required form, specifying the reason for the return.</li>
                <li>**Wait for Approval:** The vendor will review the request (usually within 24 hours) and provide return shipping instructions/labels.</li>
                <li>**Ship Item:** Package the item securely and ship it back using the provided instructions.</li>
                <li className='text-orange-600'>**Track Refund:** Use the tracking number provided to monitor the return until the refund process begins.</li>
            </ol>
        ),
    },
];

// Utility component for the accordion item
const AccordionItem = ({ title, content, icon: Icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-black/10">
            <button
                className="flex justify-between items-center w-full p-5 text-left font-bold text-black hover:bg-black/5 transition duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="flex items-center gap-4 text-lg">
                    <Icon className="w-5 h-5 text-orange-600" />
                    {title}
                </span>
                {isOpen ? <FaChevronUp className="w-4 h-4 text-orange-600" /> : <FaChevronDown className="w-4 h-4 text-black/70" />}
            </button>
            {isOpen && (
                <div className="px-5 pb-5 pt-2 bg-white/90">
                    {content}
                </div>
            )}
        </div>
    );
};


function Return() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="pt-16 pb-12 border-b border-black/10 bg-white shadow-md">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-extrabold text-black mb-4">
                        Returns & Refunds Policy
                    </h1>
                    <p className="text-xl text-black/70 max-w-4xl mx-auto">
                        Your satisfaction is our priority. We offer a transparent policy for eligible items to ensure a seamless shopping experience.
                    </p>
                </div>
            </div>

            {/* Core Policy Content */}
            <div className="py-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white border border-black/10 rounded-xl shadow-2xl overflow-hidden">
                        {returnPolicyData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                content={item.content}
                            />
                        ))}
                    </div>

                    {/* Important Note */}
                    <div className="mt-12 p-6 border-2 border-orange-600 bg-orange-600/5 rounded-lg">
                        <h3 className="flex items-center gap-3 text-2xl font-bold text-orange-600 mb-3">
                            <FaShieldAlt className="w-6 h-6"/> Important Note on Vendor Items
                        </h3>
                        <p className="text-black/80">
                            Please remember that ErrandBox is a marketplace. While we enforce strict return standards, your item is being returned to the **individual vendor/seller**. This may affect processing speed slightly. Always communicate through the ErrandBox platform for documented support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Return;