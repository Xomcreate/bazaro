import React, { useState } from 'react';
import { FaFlag, FaExclamationTriangle, FaCheckCircle, FaTrash, FaClipboardCheck } from 'react-icons/fa';

function Report() {
    const [reportStatus, setReportStatus] = useState(null); // null, 'submitting', 'success', 'error'
    const [formData, setFormData] = useState({
        productLink: '',
        reportReason: '',
        details: '',
        contactEmail: ''
    });

    const reasons = [
        "Counterfeit or Fake Product",
        "Illegal or Prohibited Item (e.g., weapons, drugs)",
        "Misleading Description or Photos",
        "Offensive, Hate Speech, or Inappropriate Content",
        "Price Gouging or Scam Attempt",
        "Other (Please Specify in Details)"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReportStatus('submitting');
        
        // --- Simulate API call / Submission ---
        setTimeout(() => {
            // In a real application, you would send formData to your backend here.
            console.log("Report Submitted:", formData);

            // Assuming successful submission for this example
            setReportStatus('success');
            setFormData({
                productLink: '',
                reportReason: '',
                details: '',
                contactEmail: ''
            });

            // Reset status after a few seconds
            setTimeout(() => setReportStatus(null), 5000);
            
        }, 1500);
        // -------------------------------------
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="pt-16 pb-12 border-b border-black/10 bg-white shadow-md">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-extrabold text-black mb-4 flex items-center justify-center gap-4">
                        <FaFlag className="text-orange-600"/> Report a Product
                    </h1>
                    <p className="text-xl text-black/70 max-w-4xl mx-auto">
                        Help us keep ErrandBox safe and trustworthy. Use this form to report any product listings that violate our policies or appear suspicious.
                    </p>
                </div>
            </div>

            {/* Reporting Form and Policy Summary */}
            <div className="py-16">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl">
                    
                    {/* Left Column: Form */}
                    <div className="lg:col-span-2 bg-white p-8 border border-black/10 rounded-xl shadow-2xl">
                        <h2 className="text-3xl font-bold text-orange-600 mb-6">Submit Your Report</h2>

                        {/* Submission Status Message */}
                        {reportStatus === 'success' && (
                            <div className="flex items-center gap-3 p-4 mb-6 bg-orange-600/10 border border-orange-600 text-black font-semibold rounded">
                                <FaCheckCircle className="text-orange-600 w-6 h-6"/> 
                                Thank you! Your report has been successfully submitted and will be reviewed within 24 hours.
                            </div>
                        )}
                        {reportStatus === 'submitting' && (
                            <div className="flex items-center gap-3 p-4 mb-6 bg-black/5 border border-black/10 text-black rounded">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                Processing report...
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Product Link */}
                            <div>
                                <label htmlFor="productLink" className="block text-sm font-medium text-black mb-2">
                                    Product URL or Listing ID <span className="text-orange-600">*</span>
                                </label>
                                <input
                                    type="url"
                                    id="productLink"
                                    name="productLink"
                                    value={formData.productLink}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g., https://errandbox.com/item/12345"
                                    className="w-full p-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
                                />
                            </div>

                            {/* Reason Dropdown */}
                            <div>
                                <label htmlFor="reportReason" className="block text-sm font-medium text-black mb-2">
                                    Primary Reason for Reporting <span className="text-orange-600">*</span>
                                </label>
                                <select
                                    id="reportReason"
                                    name="reportReason"
                                    value={formData.reportReason}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition bg-white"
                                >
                                    <option value="" disabled>Select a reason</option>
                                    {reasons.map((reason) => (
                                        <option key={reason} value={reason}>{reason}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Detailed Explanation */}
                            <div>
                                <label htmlFor="details" className="block text-sm font-medium text-black mb-2">
                                    Detailed Explanation (Provide evidence/context) <span className="text-orange-600">*</span>
                                </label>
                                <textarea
                                    id="details"
                                    name="details"
                                    rows="4"
                                    value={formData.details}
                                    onChange={handleChange}
                                    required
                                    placeholder="Explain why this listing violates our policies. Be specific."
                                    className="w-full p-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
                                />
                            </div>
                            
                            {/* Contact Email (Optional for follow-up) */}
                            <div>
                                <label htmlFor="contactEmail" className="block text-sm font-medium text-black mb-2">
                                    Your Email (Optional, for follow-up questions)
                                </label>
                                <input
                                    type="email"
                                    id="contactEmail"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    className="w-full p-3 border border-black/20 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600 transition"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={reportStatus === 'submitting'}
                                className={`w-full py-3 rounded-lg font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 
                                    ${reportStatus === 'submitting' 
                                        ? 'bg-black/50 cursor-not-allowed' 
                                        : 'bg-orange-600 hover:bg-orange-700 shadow-orange-400/50'
                                    }`}
                            >
                                {reportStatus === 'submitting' ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <FaClipboardCheck /> Submit Report
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Policy Summary */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-black/5 p-6 rounded-xl border border-black/10">
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-black mb-3">
                                <FaExclamationTriangle className="text-orange-600"/> Zero Tolerance Policy
                            </h3>
                            <p className="text-black/80 text-sm">
                                ErrandBox strictly prohibits the sale of illegal goods, counterfeit items, and offensive material. Reports are handled with the highest priority by our Trust & Safety team.
                            </p>
                        </div>
                        
                        <div className="bg-black/5 p-6 rounded-xl border border-black/10">
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-black mb-3">
                                <FaTrash className="text-orange-600"/> What Happens Next?
                            </h3>
                            <ol className="list-decimal list-inside ml-4 space-y-2 text-sm text-black/80">
                                <li>**Review:** Our team reviews the report and evidence within 24 hours.</li>
                                <li>**Action:** If the violation is confirmed, the listing is immediately removed.</li>
                                <li>**Vendor Sanctions:** Repeat or serious offenders face permanent suspension from the ErrandBox platform.</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Report;