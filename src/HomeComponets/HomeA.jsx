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
  { url: "/Images/xom1.png", title: "Big Tech Sale", subtitle: "Up to 50% off Laptops & Phones" },
  { url: "/Images/xom2.png", title: "Weekend Awoof Deals", subtitle: "Limited time flash sales, don't miss out!" },
  { url: "/Images/xom3.png", title: "Fashion Trends", subtitle: "New arrivals in Ankara and Lace styles" },
];

const BEST_SELLERS = [
  { id: 1, name: "Powerful Inverter Generator", price: "₦185,000", oldPrice: "₦220,000", imageUrl: "data:image/webp;base64,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" },
  { id: 2, name: "Android Smartphone (128GB)", price: "₦95,000", oldPrice: "₦110,000", imageUrl: "https://images.unsplash.com/photo-1521939094609-93aba1af40d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5kcm9pZHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, name: "10kg Washing Machine", price: "₦78,000", oldPrice: "₦95,000", imageUrl: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D" },
  { id: 4, name: "Quality Ankara Fabric (5 yards)", price: "₦12,500", oldPrice: "₦15,000", imageUrl: "https://media.istockphoto.com/id/2214934348/photo/small-business-owner-of-an-african-print-ankara-fabric-shop-proudly-displaying-different.webp?a=1&b=1&s=612x612&w=0&k=20&c=qOtjeAJVjbC_odEE5B2RQBYS-JnHz-jW0XTz1qKfQR4=" },
  { id: 5, name: "Semi-Automatic Blender/Grinder", price: "₦25,000", oldPrice: "₦32,000", imageUrl: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 6, name: "25L Water Dispenser", price: "₦18,000", oldPrice: "₦24,000", imageUrl: "https://images.unsplash.com/photo-1544198841-10f34f31f8dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXIlMjBkaXNwZW5zZXJ8ZW58MHx8MHx8fDA%3D" },
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
    <a  className="bg-white rounded-lg shadow-md p-3 flex items-center gap-3 hover:shadow-lg transition-shadow">
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
