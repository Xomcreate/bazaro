import React, { useState } from "react";

// --- Enhanced Product Detail Data (Define outside the component for clarity) ---
const detailedProduct = {
    id: 1,
    name: "Premium Slim-Fit Denim Casual Shirt",
    brand: "Levi's",
    price: "₦8,500",
    oldPrice: "₦10,000",
    discount: "15%",
    imageUrl: "/Images/fashion-1.jpg",
    description: "Experience effortless style with this slim-fit casual shirt. Made from a breathable, high-quality denim blend, it features a classic button-down collar, single chest pocket, and adjustable cuffs. Perfect for a smart-casual look all year round.",
    rating: 4.5,
    reviewCount: 452,
    inventory: 120,
    colors: [
        { name: "Indigo Blue", hex: "#4B6D9D", image: "/Images/fashion-1-blue.jpg" },
        { name: "Stone Grey", hex: "#A8A8A8", image: "/Images/fashion-1-grey.jpg" },
        { name: "Olive Green", hex: "#7B8869", image: "/Images/fashion-1-olive.jpg" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
};

// Component using the 'orangered' fashion coloring
function ProductDetailPage() {
    // Correctly initialize state variables using the detailedProduct data
    const [selectedSize, setSelectedSize] = useState(detailedProduct.sizes[1]); 
    const [selectedColor, setSelectedColor] = useState(detailedProduct.colors[0]);
    const [quantity, setQuantity] = useState(1);

    // Placeholder functions
    const handleAddToCart = () => {
        alert(`Added ${quantity} of ${detailedProduct.name} (${selectedColor.name}, Size ${selectedSize}) to cart!`);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* INLINE STYLES FOR CONSISTENCY WITH YOUR FASHION.JSX FILE */}
            <style>{`
                .bg-orangered { background-color: orangered; }
                .text-orangered { color: orangered; }
                .ring-orangered:focus { box-shadow: 0 0 0 4px rgba(255,69,0,0.15); outline: none; }
                .btn-orangered { background: orangered; }
                .btn-orangered:hover { filter: brightness(0.95); }
                .decor-accent { background: linear-gradient(90deg, rgba(255,69,0,0.08), rgba(255,140,0,0.04)); border-left: 4px solid rgba(255,69,0,0.12); }
            `}</style>
            
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="mb-6 text-sm text-gray-500">
                    <a href="/fashion" className="hover:text-orangered">Fashion</a> / 
                    <a href={`/brand/${detailedProduct.brand}`} className="hover:text-orangered"> {detailedProduct.brand}</a> / 
                    <span className="font-medium text-black"> {detailedProduct.name}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 md:p-10 rounded-xl shadow-2xl">
                    
                    {/* --- 1. Product Image Gallery --- */}
                    <div className="lg:w-1/2 w-full shrink-0">
                        <div className="relative bg-gray-100 rounded-lg overflow-hidden p-4">
                             {/* Primary Image */}
                            <img 
                                src={selectedColor.image || detailedProduct.imageUrl} 
                                alt={detailedProduct.name} 
                                className="w-full h-auto object-cover rounded-lg"
                            />
                            {/* Discount Tag */}
                            <div className="absolute top-4 left-4 bg-orangered text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
                                {detailedProduct.discount} OFF
                            </div>
                        </div>
                        {/* Thumbnail Selector (Simulated) */}
                        <div className="flex space-x-2 mt-4 overflow-x-auto">
                            {detailedProduct.colors.map(color => (
                                <img 
                                    key={color.name}
                                    src={color.image || detailedProduct.imageUrl} 
                                    alt={color.name}
                                    className={`w-16 h-16 object-cover border-2 rounded cursor-pointer transition ${selectedColor.name === color.name ? 'border-orangered shadow-md' : 'border-gray-200 hover:border-orangered'}`}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                            {/* Add more thumbnails here if available */}
                        </div>
                    </div>

                    {/* --- 2. Product Details and Options --- */}
                    <div className="lg:w-1/2 w-full space-y-6">
                        <p className="text-sm font-semibold text-orangered">{detailedProduct.brand}</p>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-black">
                            {detailedProduct.name}
                        </h1>

                        {/* Rating and Reviews */}
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center text-orangered">
                                {/* Simple Star Display */}
                                {'★'.repeat(Math.floor(detailedProduct.rating))}
                                {'☆'.repeat(5 - Math.floor(detailedProduct.rating))}
                            </div>
                            <span className="text-gray-600 font-medium">{detailedProduct.rating} / 5</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-600 hover:text-orangered cursor-pointer">{detailedProduct.reviewCount} Reviews</span>
                        </div>

                        {/* Price Block */}
                        <div className="py-4 border-y border-gray-100">
                            <div className="flex items-end gap-3">
                                <span className="text-4xl font-extrabold text-orangered">{detailedProduct.price}</span>
                                <span className="text-lg line-through text-gray-400">{detailedProduct.oldPrice}</span>
                                <span className="text-sm text-red-600 font-bold">({detailedProduct.discount} Savings)</span>
                            </div>
                            <p className="text-xs mt-1 text-gray-500">
                                Inclusive of VAT. In stock: {detailedProduct.inventory} items.
                            </p>
                        </div>

                        {/* Color Selector */}
                        <div>
                            <p className="text-sm font-semibold mb-2 text-black">Color: <span className="font-normal text-gray-600">{selectedColor.name}</span></p>
                            <div className="flex space-x-3">
                                {detailedProduct.colors.map(color => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        aria-label={`Select color ${color.name}`}
                                        className={`w-8 h-8 rounded-full border-2 transition duration-200 focus:outline-none`}
                                        style={{ backgroundColor: color.hex, borderColor: selectedColor.name === color.name ? 'orangered' : color.hex }}
                                    >
                                        {selectedColor.name === color.name && (
                                            <span className="flex items-center justify-center w-full h-full text-white" style={{textShadow: '0 0 2px rgba(0,0,0,0.5)'}}>✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div>
                            <p className="text-sm font-semibold mb-2 text-black">Size: <span className="font-normal text-gray-600">{selectedSize}</span></p>
                            <div className="flex flex-wrap gap-2">
                                {detailedProduct.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 text-sm font-medium rounded-lg transition duration-150 border ${selectedSize === size 
                                            ? 'bg-orangered text-white border-orangered shadow-md' 
                                            : 'bg-white text-gray-800 border-gray-300 hover:border-orangered hover:text-orangered'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <a href="/size-guide" className="text-xs text-orangered mt-2 inline-block hover:underline">View Size Guide</a>
                        </div>
                        
                        {/* Quantity and CTA */}
                        <div className="flex items-center gap-4 pt-4">
                            <input
                                type="number"
                                min="1"
                                max={detailedProduct.inventory}
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-20 text-center p-3 border border-gray-300 rounded-lg focus:border-orangered focus:ring-orangered transition"
                            />
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 text-white py-3 text-lg font-bold rounded-lg transition duration-200 ease-in-out shadow-xl bg-black hover:btn-orangered"
                            >
                                ADD TO CART
                            </button>
                            <button
                                className="p-3 border border-gray-300 rounded-lg text-black hover:text-orangered transition"
                                title="Add to Wishlist"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- 3. Product Description and Info Tabs --- */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b border-orangered text-orangered">
                        Product Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <div className="md:col-span-2">
                            <p className="text-gray-700 leading-relaxed">
                                {detailedProduct.description}
                            </p>
                            <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                                <li>Material: 95% Cotton, 5% Spandex</li>
                                <li>Care Instructions: Machine wash cold, tumble dry low</li>
                                <li>Fit: Slim-Fit (For a regular fit, order one size up)</li>
                                <li>Closure: Button-front</li>
                            </ul>
                        </div>
                        <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-lg border-t-4 border-orangered">
                            <h3 className="text-lg font-bold mb-3 text-black">Delivery & Returns</h3>
                            <p className="text-sm text-gray-600">
                                **Standard Shipping:** Delivered within 3-7 business days.
                                **Express Shipping:** Delivered within 1-2 business days.
                            </p>
                            <p className="text-sm mt-3 text-gray-600">
                                Enjoy a 30-day free return policy. Item must be unworn and in original packaging.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;