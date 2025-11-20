import React from 'react';

// Helper function to format Naira currency
const formatNaira = (price) => `₦${price.toLocaleString('en-NG')}`;

// --- Deal Card Component ---
const DealCard = ({ deal }) => {
  const percentageSold = Math.min(100, (deal.sold / deal.stock) * 100);
  const discountPercentage = Math.round((deal.oldPrice - deal.newPrice) / deal.oldPrice * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-48 md:h-56 bg-gray-50 overflow-hidden grid place-items-center">
        {deal.image ? (
          <img
            src={deal.image}
            alt={deal.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full object-cover grid place-items-center bg-gray-200 text-gray-500 text-sm font-semibold">
            [Image Placeholder]
          </div>
        )}

        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
            -{discountPercentage}%
          </div>
        )}

        {/* Hover Button */}
        <div className="absolute bottom-0 w-full transform translate-y-full group-hover:translate-y-0 transition duration-300">
          <button className="w-full bg-orange-600 text-white font-bold py-2 text-sm hover:bg-orange-700">
            VIEW DEAL
          </button>
        </div>
      </div>

      <div className="p-3 flex flex-col grow">
        <p className="text-sm md:text-base font-semibold text-gray-800 h-12 overflow-hidden mb-2">{deal.name}</p>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-lg md:text-xl font-extrabold text-orange-600">
            {formatNaira(deal.newPrice)}
          </span>
          <span className="text-xs md:text-sm text-gray-400 line-through">
            {formatNaira(deal.oldPrice)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-1 relative">
          <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${percentageSold}%` }} />
        </div>
        <p className="text-xs md:text-sm text-gray-600 text-center mt-1">
          {Math.max(0, deal.stock - deal.sold)} left • {percentageSold}% sold
        </p>
      </div>
    </div>
  );
};

// --- Main Deals of the Day Component ---
function HomeD() {
  const dealsOfTheDay = [
    { name: "Samsung 65\" UHD Smart TV", newPrice: 850000, oldPrice: 1050000, sold: 15, stock: 20, image: "/images/tv.jpeg" },
    { name: "LG 55\" 4K Smart TV", newPrice: 385000, oldPrice: 450000, sold: 75, stock: 100, image: "/images/tv2.jpeg" },
    { name: "Tecno Phantom X2 Pro 5G", newPrice: 420000, oldPrice: 500000, sold: 50, stock: 60, image: "/images/phone.jpeg" },
    { name: "Sumec Firman SPG 2900 Generator", newPrice: 155000, oldPrice: 195000, sold: 40, stock: 50, image: "/images/generator.jpeg" },
    { name: "Maxi 600L Double Door Refrigerator", newPrice: 520000, oldPrice: 650000, sold: 45, stock: 70, image: "/images/fridge.jpeg" },
    { name: "Qasa 5.5L Heavy Duty Stand Mixer", newPrice: 89900, oldPrice: 120000, sold: 60, stock: 90, image: "/images/mixer.jpeg" },
    { name: "Oraimo BassBoost Wireless Speaker", newPrice: 18500, oldPrice: 24900, sold: 95, stock: 110, image: "/images/speaker.jpeg" },
    { name: "Mama Pride 10kg Parboiled Rice", newPrice: 28500, oldPrice: 32000, sold: 120, stock: 150, image: "/images/rice.jpeg" },
    { name: "Assorted Ankara Fabric - 6 Yards", newPrice: 11900, oldPrice: 15000, sold: 80, stock: 100, image: "/images/ankara.jpeg" },
    { name: "Universal Fast Charger Adapter 65W GaN", newPrice: 24999, oldPrice: 50000, sold: 60, stock: 80, image: "/images/charger.jpeg" },
    { name: "Portable LED Desk Lamp with USB Charging", newPrice: 12990, oldPrice: 25990, sold: 30, stock: 50, image: "/images/lamp.jpeg" },
    { name: "Original 1.5 HP Inverter Split AC Unit", newPrice: 310000, oldPrice: 400000, sold: 25, stock: 35, image: "/images/ac.jpeg" },
  ];

  return (
    <section className="w-full flex justify-center my-8 px-4">
      {/* Inner container width matches HomeC */}
      <div className="w-[95%] md:w-[90%]">

        {/* Header like HomeC Flash Sales */}
        <div className="flex items-center justify-between mb-3 bg-linear-to-r from-orange-500 to-orange-400 text-white px-4 py-3 rounded-t-xl shadow-md">
          <span className="text-2xl md:text-3xl font-extrabold">🔥 Deals of the Day</span>
          <a href="/deals-of-the-day" className="text-sm md:text-base font-semibold text-white/90 hover:underline">
            View More →
          </a>
        </div>

        {/* Deal Grid: 4 columns × 3 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 rounded-b-xl border border-t-0 border-gray-200">
          {dealsOfTheDay.map((deal, index) => (
            <DealCard key={index} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeD;
