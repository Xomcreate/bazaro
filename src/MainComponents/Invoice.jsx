import React from "react";
import { FaPrint, FaDownload, FaStore, FaCheckCircle, FaBoxOpen } from "react-icons/fa";

function Invoice() {
  // Mock Data: Simulating a cart with mixed items (Direct + Vendor)
  const invoiceData = {
    orderId: "EB-908821",
    date: "Dec 13, 2025",
    paymentMethod: "Credit Card (**** 4242)",
    status: "PAID",
    customer: {
      name: "Chioma Adebayo",
      email: "chioma.ad@example.com",
      phone: "+234 800 123 4567",
      address: "Plot 4, Admiralty Way, Lekki Phase 1, Lagos",
    },
    // Marketplace Logic: Items can be sold by "ErrandBox" (Direct) or a "Vendor"
    items: [
      { 
        id: 1, 
        name: "iPhone 15 Pro Max", 
        seller: "ErrandBox Official", // DIRECT SALE
        type: "official",
        price: 1200000, 
        qty: 1 
      },
      { 
        id: 2, 
        name: "Handmade Ankara Tote", 
        seller: "Mama Africa Styles", // VENDOR SALE
        type: "vendor",
        price: 15000, 
        qty: 2 
      },
      { 
        id: 3, 
        name: "Logitech Mouse", 
        seller: "TechDepot Lagos", // VENDOR SALE
        type: "vendor",
        price: 25000, 
        qty: 1 
      },
    ],
    summary: {
      subtotal: 1255000,
      shipping: 3500,
      tax: 94125, // 7.5%
      total: 1352625,
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start font-sans">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* --- HEADER (Matches Navbar Color) --- */}
        <div className="bg-orange-600 text-white p-8 flex flex-col md:flex-row justify-between items-center relative">
          
          {/* Watermark/Background decoration */}
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <FaBoxOpen size={150} />
          </div>

          <div className="z-10 flex items-center gap-3">
            {/* Logo Placeholder - Matches Navbar */}
            <img
              src="/Images/pom1.png"
              alt="ErrandBox"
              className="h-14 w-14 object-cover rounded bg-white p-1"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">ErrandBox</h1>
              <p className="text-orange-100 text-sm opacity-90">Marketplace & Logistics</p>
            </div>
          </div>

          <div className="z-10 mt-6 md:mt-0 text-center md:text-right">
            <h2 className="text-xl font-semibold uppercase tracking-widest">Order Receipt</h2>
            <p className="text-2xl font-bold mt-1">#{invoiceData.orderId}</p>
            <div className="mt-2 flex items-center justify-center md:justify-end gap-2 text-orange-600 bg-white px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
              <FaCheckCircle /> {invoiceData.status}
            </div>
          </div>
        </div>

        {/* --- INFO BAR --- */}
        <div className="bg-gray-50 border-b border-gray-200 p-6 flex flex-col md:flex-row justify-between gap-6 text-sm">
          <div>
            <span className="text-gray-500 block uppercase text-xs font-bold">Billed To</span>
            <p className="font-bold text-gray-800 text-lg">{invoiceData.customer.name}</p>
            <p className="text-gray-600">{invoiceData.customer.address}</p>
            <p className="text-gray-600">{invoiceData.customer.phone}</p>
          </div>
          <div className="md:text-right">
            <div className="mb-2">
              <span className="text-gray-500 uppercase text-xs font-bold">Order Date</span>
              <p className="font-semibold text-gray-800">{invoiceData.date}</p>
            </div>
            <div>
              <span className="text-gray-500 uppercase text-xs font-bold">Payment Method</span>
              <p className="font-semibold text-gray-800">{invoiceData.paymentMethod}</p>
            </div>
          </div>
        </div>

        {/* --- ITEMS TABLE (Marketplace Logic) --- */}
        <div className="p-8">
          <div className="overflow-x-auto rounded-lg border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-orange-50 text-gray-700 text-sm uppercase tracking-wide border-b border-orange-100">
                  <th className="py-4 px-4 font-bold">Product Details</th>
                  <th className="py-4 px-4 font-bold">Sold By</th>
                  <th className="py-4 px-4 font-bold text-center">Qty</th>
                  <th className="py-4 px-4 font-bold text-right">Unit Price</th>
                  <th className="py-4 px-4 font-bold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {invoiceData.items.map((item, index) => (
                  <tr key={index} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-900">
                      {item.name}
                    </td>
                    
                    {/* SELLER COLUMN: Handles both Direct and Vendor logic */}
                    <td className="py-4 px-4">
                      {item.type === 'official' ? (
                        <span className="flex items-center gap-1 text-orange-600 font-bold text-xs bg-orange-50 px-2 py-1 rounded-full w-fit">
                          <FaCheckCircle size={10} /> ErrandBox Retail
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-gray-600 font-medium text-xs bg-gray-100 px-2 py-1 rounded-full w-fit">
                          <FaStore size={10} /> {item.seller}
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 text-center">{item.qty}</td>
                    <td className="py-4 px-4 text-right">₦{item.price.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-bold">
                      ₦{(item.price * item.qty).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- SUMMARY SECTION --- */}
          <div className="mt-8 flex flex-col items-end">
            <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between mb-3 text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">₦{invoiceData.summary.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-3 text-gray-600">
                <span>Shipping</span>
                <span className="font-medium">₦{invoiceData.summary.shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600">
                <span>VAT (7.5%)</span>
                <span className="font-medium">₦{invoiceData.summary.tax.toLocaleString()}</span>
              </div>
              <div className="border-t-2 border-dashed border-gray-300 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">Total Paid</span>
                <span className="text-2xl font-bold text-orange-600">
                  ₦{invoiceData.summary.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* --- FOOTER & DISCLAIMER --- */}
          <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-500">
            <p>
              This receipt is generated by the ErrandBox Platform. 
              Items marked as "Sold by Vendors" are fulfilled by third-party sellers. 
              Items marked as "ErrandBox Retail" are sold directly by ErrandBox.
            </p>
            <p className="mt-2">
              Questions? Contact us at <a href="mailto:help@errandbox.com" className="text-orange-600 underline">help@errandbox.com</a>
            </p>
          </div>

          {/* --- ACTION BUTTONS (Matching Navbar) --- */}
          <div className="mt-8 flex justify-center gap-4 pb-4">
            {/* Dark Button (Navbar Search style) */}
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-3 text-white rounded-full shadow-lg hover:opacity-90 transition-transform transform active:scale-95"
              style={{ background: "linear-gradient(to right, #000, #1f1f1f)" }}
            >
              <FaPrint /> Print Receipt
            </button>
            
            {/* Orange Button (Navbar Brand style) */}
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-transform transform active:scale-95"
            >
              <FaDownload /> Download PDF
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Invoice;