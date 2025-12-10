import React, { useState } from "react";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";

export default function Cart() {
  // --- Mock Data (In a real app, this comes from Context or Redux) ---
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      category: "Electronics",
      price: 299.00,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
      quantity: 1,
    },
    {
      id: 2,
      name: "Ergonomic Mechanical Keyboard",
      category: "Accessories",
      price: 145.50,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?w=500&auto=format&fit=crop&q=60",
      quantity: 2,
    },
    {
      id: 3,
      name: "Minimalist Desk Lamp",
      category: "Home Office",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1507473888900-52e1ad14592d?w=500&auto=format&fit=crop&q=60",
      quantity: 1,
    },
  ]);

  // --- Logic ---
  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // --- Calculations ---
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 15.00; // Free shipping over $500
  const tax = subtotal * 0.08; // 8% Tax
  const total = subtotal + shipping + tax;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  // --- Empty State View ---
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full border border-gray-100">
          <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-[#FF4500]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <button className="w-full bg-[#FF4500] hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg shadow-orange-500/30">
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  // --- Main Cart View ---
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="flex items-center mb-8 gap-2">
           <ShoppingBag className="text-[#FF4500]" size={28} />
           <h1 className="text-3xl font-extrabold text-gray-900">Shopping Cart</h1>
           <span className="ml-2 bg-orange-100 text-[#FF4500] text-sm font-bold px-3 py-1 rounded-full">
             {cartItems.length} Items
           </span>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT: Cart Items List */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-6 sm:flex sm:items-center sm:justify-between hover:bg-gray-50 transition-colors duration-200">
                    
                    {/* Product Image & Info */}
                    <div className="flex items-center gap-6 sm:w-1/2">
                      <div className="shrink-0 w-24 h-24 bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-[#FF4500] font-semibold tracking-wide uppercase">{item.category}</p>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight mt-1">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">In Stock</p>
                      </div>
                    </div>

                    {/* Quantity Controls & Price */}
                    <div className="mt-4 sm:mt-0 flex items-center justify-between sm:w-1/2 sm:pl-8">
                      
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-2 hover:bg-gray-100 text-gray-600 rounded-l-lg disabled:opacity-50 transition"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 text-sm font-semibold text-gray-900 min-w-12 text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 hover:bg-gray-100 text-gray-600 rounded-r-lg transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right ml-6">
                        <p className="text-lg font-bold text-gray-900">{formatCurrency(item.price * item.quantity)}</p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-gray-400">{formatCurrency(item.price)} each</p>
                        )}
                      </div>

                      <button 
                        onClick={() => removeItem(item.id)}
                        className="ml-6 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                        title="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>

                    </div>
                  </li>
                ))}
              </ul>
              
              {/* Continue Shopping Link */}
              <div className="bg-gray-50 p-6 border-t border-gray-100 flex items-center">
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#FF4500] transition-colors">
                  <ArrowLeft size={16} />
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-6">
              <h2 className="text-lg font-extrabold text-gray-900 mb-6">Order Summary</h2>

              <dl className="space-y-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="font-medium text-gray-900">{formatCurrency(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="flex items-center gap-1">
                    Shipping Estimate
                  </dt>
                  <dd className="font-medium text-gray-900">
                    {shipping === 0 ? <span className="text-green-600">Free</span> : formatCurrency(shipping)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Tax Estimate (8%)</dt>
                  <dd className="font-medium text-gray-900">{formatCurrency(tax)}</dd>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <dt className="text-base font-bold text-gray-900">Order Total</dt>
                  <dd className="text-2xl font-extrabold text-[#FF4500]">{formatCurrency(total)}</dd>
                </div>
              </dl>

              <button className="w-full mt-6 bg-[#FF4500] hover:bg-[#e03e00] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2">
                Checkout Now
                <ArrowRight size={20} />
              </button>

              {/* Trust Badges */}
              <div className="mt-6 flex flex-col items-center gap-2 text-center">
                 <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={16} className="text-green-500"/>
                    <span>Secure Encrypted Checkout</span>
                 </div>
                 <p className="text-[10px] text-gray-400">
                   30-Day Money-Back Guarantee
                 </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}