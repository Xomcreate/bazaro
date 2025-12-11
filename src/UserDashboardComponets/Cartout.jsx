import React from "react";

const COLORS = {
  primary: "text-orange-500",
  bgPrimary: "bg-orange-500",
};

export default function Cartout() {
  const cartItems = [
    { id: 1, name: "Premium Leather Wallet", price: 45.99, qty: 1 },
    { id: 2, name: "Minimalist Black Backpack", price: 89.99, qty: 1 },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shippingFee = 9.99;
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen w-full bg-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* LEFT SECTION — CART ITEMS */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 pb-3 border-b-2 border-orange-500">
              Your Shopping Cart ({cartItems.length} Items)
            </h2>

            <div className="mt-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 pb-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-gray-100 border border-black rounded-md"></div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-gray-600 text-sm">Qty: {item.qty}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <button className="mt-1 text-orange-500 border border-orange-500 text-sm px-3 py-1 rounded-md hover:bg-orange-500 hover:text-white transition">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right mt-4">
              <a
                href="#"
                className="text-orange-500 font-semibold hover:underline"
              >
                ← Continue Shopping
              </a>
            </div>
          </div>

          {/* SHIPPING & PAYMENT */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 pb-3 border-b-2 border-orange-500">
              Shipping & Payment Details
            </h2>

            <div className="mt-4 space-y-5">
              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Shipping Address
                </label>
                <input
                  type="text"
                  placeholder="123 Market St, Black City"
                  className="w-full border border-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Payment Method
                </label>
                <select className="w-full border border-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
                  <option>Credit Card (ending 4242)</option>
                  <option>PayPal</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION — ORDER SUMMARY */}
        <div className="lg:col-span-1 bg-gray-100 p-6 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-bold text-gray-900 pb-3 border-b-2 border-black">
            Order Summary
          </h2>

          <div className="mt-4 space-y-3">
            <div className="flex justify-between text-gray-800">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Shipping</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg text-gray-900 border-t border-black pt-3 mt-3">
              <span>Order Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
