import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, List, Flame, CreditCard, Truck, Gift, Search } from 'lucide-react';

// --- Data ---
const CATEGORIES = [
  "Gifts & Toys",
  "Fashion & Accessories",
  "Electronics",
  "Health & Beauty",
  "Smartphones & Tablets",
  "Home & Kitchen",
  "Generators & Power",
  "Groceries & Foodstuffs",
  "Baby Products",
  "More Categories",
];

const SLIDES = [
  { url: "/Images/lol2.jpeg", title: "Big Tech Sale", subtitle: "Up to 50% off Laptops & Phones" },
  { url: "/Images/lol1.jpeg", title: "Weekend Awoof Deals", subtitle: "Limited time flash sales, don't miss out!" },
  { url: "/Images/lol3.jpeg", title: "Fashion Trends", subtitle: "New arrivals in Ankara and Lace styles" },
];

const BEST_SELLERS = [
  { id: 1, name: "Powerful Inverter Generator", price: "₦185,000", oldPrice: "₦220,000", imageUrl: "/images/pro1.jpeg" },
  { id: 2, name: "Android Smartphone (128GB)", price: "₦95,000", oldPrice: "₦110,000", imageUrl: "/images/pro2.jpeg" },
  { id: 3, name: "10kg Washing Machine", price: "₦78,000", oldPrice: "₦95,000", imageUrl: "/images/pro3.jpeg" },
  { id: 4, name: "Quality Ankara Fabric (5 yards)", price: "₦12,500", oldPrice: "₦15,000", imageUrl: "/images/pro4.jpeg" },
  { id: 5, name: "Semi-Automatic Blender/Grinder", price: "₦25,000", oldPrice: "₦32,000", imageUrl: "/images/pro5.jpeg" },
  { id: 6, name: "25L Water Dispenser", price: "₦18,000", oldPrice: "₦24,000", imageUrl: "/images/pro6.jpeg" },
];

// --- Sub-Components ---
const CategoryListAside = () => (
  <aside className="col-span-12 lg:col-span-3 bg-white rounded-xl shadow p-4 hidden lg:block border border-gray-100">
    <h3 className="font-bold text-gray-800 mb-4 text-xl flex items-center gap-2">
      <List className="h-5 w-5 text-indigo-600" /> Browse Categories
    </h3>
    <ul className="divide-y divide-gray-100">
      {CATEGORIES.map((cat, i) => (
        <li
          key={i}
          className="py-3 flex items-center justify-between hover:bg-orange-50 px-2 rounded-md cursor-pointer transition-colors"
          role="button"
          tabIndex={0}
          aria-label={`Open ${cat}`}
        >
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-indigo-50 grid place-items-center text-sm text-indigo-600 font-semibold">{cat.charAt(0)}</span>
            <span className="text-gray-700 font-medium">{cat}</span>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </li>
      ))}
    </ul>
  </aside>
);

const BestSellersAside = () => (
  <aside className="col-span-12 lg:col-span-3 bg-white rounded-xl shadow p-4 hidden lg:block border border-gray-100">
    <h3 className="font-bold text-gray-800 mb-4 flex items-center justify-between text-xl">
      🇳🇬 Top 6 Best Sellers
      <span className="h-4 w-4 bg-orange-500 rounded-full animate-pulse" title="Live sales indicator" />
    </h3>
    <div className="space-y-4">
      {BEST_SELLERS.map((item) => (
        <div key={item.id} className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer group">
          <div className="w-20 h-20 rounded-lg bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate" title={item.name}>{item.name}</p>
            <p className="text-lg text-orange-600 font-bold mt-1">{item.price}</p>
            <p className="text-xs text-gray-400 line-through">{item.oldPrice}</p>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => setCurrent(c => (c === SLIDES.length - 1 ? 0 : c + 1)), 4000);
    return () => clearInterval(t);
  }, [isPaused]);

  const goNext = () => setCurrent(c => (c === SLIDES.length - 1 ? 0 : c + 1));
  const goPrev = () => setCurrent(c => (c === 0 ? SLIDES.length - 1 : c - 1));

  const onTouchStart = e => touchStartX.current = e.touches[0].clientX;
  const onTouchMove = e => touchEndX.current = e.touches[0].clientX;
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const MiniPromoTile = ({ icon: Icon, title, subtitle, colorClass }) => (
    <a href="#" className="bg-white rounded-lg shadow-md p-3 flex items-center gap-3 hover:shadow-lg transition-shadow">
      <div className={`h-12 w-12 rounded-md ${colorClass} grid place-items-center text-white`}><Icon className="h-6 w-6" /></div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-bold text-gray-800">{subtitle}</p>
      </div>
    </a>
  );

  return (
    <div className="col-span-12 lg:col-span-6">
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative bg-white rounded-xl shadow-lg overflow-hidden h-[420px] md:h-[520px] border border-gray-100"
      >
        {/* Slider track */}
        <div className="flex h-full transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
          {SLIDES.map((slide, i) => (
            <div key={i} className="w-full shrink-0 relative flex items-center justify-center">
              <img src={slide.url} alt={slide.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute left-8 bottom-16 text-white max-w-sm p-4 bg-black/40 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">{slide.title}</h2>
                <p className="mt-2 text-md md:text-lg drop-shadow">{slide.subtitle}</p>
                <button className="mt-4 px-6 py-2 bg-orange-500 rounded-lg font-bold shadow-xl hover:bg-orange-600 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 z-30 transition-colors hidden sm:block">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 z-30 transition-colors hidden sm:block">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Mini Promo Tiles */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <MiniPromoTile icon={Flame} title="Flash Sales" subtitle="Up to 70% off" colorClass="bg-red-500" />
        <MiniPromoTile icon={CreditCard} title="Pay Later" subtitle="Installments" colorClass="bg-blue-500" />
        <MiniPromoTile icon={Truck} title="Fast Delivery" subtitle="Selected areas" colorClass="bg-green-500" />
        <MiniPromoTile icon={Gift} title="Vouchers" subtitle="Save more" colorClass="bg-yellow-500" />
      </div>
    </div>
  );
};

// --- Main HomeA Component ---
export default function HomeA() {
  return (
    <section className="w-full mt-6 flex justify-center bg-gray-50 pb-8">
      <div className="w-[95%] md:w-[90%] grid grid-cols-12 gap-4 items-start">
        <CategoryListAside />
        <HeroSlider />
        <BestSellersAside />
      </div>
    </section>
  );
}
