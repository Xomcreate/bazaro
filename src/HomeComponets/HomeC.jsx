import React, { useState, useEffect } from 'react';

// -------------------------
// Countdown Timer Component
// -------------------------
const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diff = tomorrow.getTime() - now.getTime();
    if (diff <= 0) return null;

    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const TimeSegment = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <span className="text-base md:text-lg font-extrabold bg-white text-orange-600 px-2 py-1 rounded-md shadow-inner min-w-9 text-center">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs font-medium uppercase text-white/90 mt-1 hidden sm:block">{label}</span>
    </div>
  );

  if (!timeLeft) return <span className="text-white font-bold">Sale Ended</span>;

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <TimeSegment value={timeLeft.hours} label="Hrs" />
      <span className="text-white font-bold">:</span>
      <TimeSegment value={timeLeft.minutes} label="Mins" />
      <span className="text-white font-bold">:</span>
      <TimeSegment value={timeLeft.seconds} label="Secs" />
    </div>
  );
};

// -------------------------
// Product Card Component
// -------------------------
const ProductCard = ({ product }) => {
  const stock = Math.max(0, product.stock || 0);
  const sold = Math.max(0, product.sold || 0);
  const percentageSold = stock === 0 ? 100 : Math.min(100, (sold / stock) * 100);
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100)
    : 0;
  const formatNaira = (n) => `₦${Number(n).toLocaleString('en-NG')}`;

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      window.location.href = product.href || '/product';
    }
  };

  return (
    <article
      role="link"
      tabIndex={0}
      onKeyDown={handleKey}
      onClick={() => (window.location.href = product.href || '/product')}
      className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-transform transform hover:-translate-y-1 cursor-pointer p-3"
      aria-label={`${product.name} - ${formatNaira(product.newPrice)}`}
    >
      <div className="relative mb-3 h-36 sm:h-40 rounded-md overflow-hidden bg-gray-50 grid place-items-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="text-sm text-gray-500 px-2 text-center">No image available</div>
        )}

        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
            -{discount}%
          </div>
        )}
      </div>

      <h3 className="text-sm font-semibold text-gray-800 h-12 leading-tight overflow-hidden mb-1">{product.name}</h3>

      <div className="flex flex-col gap-0.5 mb-2">
        <span className="text-lg font-extrabold text-orange-600">{formatNaira(product.newPrice)}</span>
        {product.oldPrice ? (
          <span className="text-xs text-gray-400 line-through">{formatNaira(product.oldPrice)}</span>
        ) : null}
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 relative">
        <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: `${percentageSold}%` }} />
        <span className="absolute -top-1 left-2 text-xs font-bold text-white bg-orange-700 px-1 rounded-full">🔥</span>
      </div>

      <p className="text-xs text-gray-600 text-center mt-auto">
        {Math.max(0, stock - sold)} left • {Math.round(percentageSold)}% sold
      </p>
    </article>
  );
};

// -------------------------
// Main Component: HomeC
// -------------------------
export default function HomeC() {
  const flashSaleProducts = [
    { name: 'LG 55" 4K Smart TV', newPrice: 385000, oldPrice: 450000, sold: 75, stock: 100, image: '/images/tv.jpeg', href: '/p/tv' },
    { name: 'Tecno Phantom X2 Pro 5G - 12GB/256GB', newPrice: 420000, oldPrice: 500000, sold: 50, stock: 60, image: '/images/phone.jpeg', href: '/p/phantom-x2' },
    { name: 'Sumec Firman SPG 2900 Generator', newPrice: 155000, oldPrice: 195000, sold: 40, stock: 50, image: '/images/generator.jpeg', href: '/p/generator' },
    { name: 'Maxi 600L Double Door Refrigerator', newPrice: 520000, oldPrice: 650000, sold: 45, stock: 70, image: '/images/fridge.jpeg', href: '/p/fridge' },
    { name: 'Qasa 5.5L Heavy Duty Stand Mixer', newPrice: 89900, oldPrice: 120000, sold: 60, stock: 90, image: '/images/mixer.jpeg', href: '/p/mixer' },
    { name: 'Oraimo BassBoost Wireless Speaker', newPrice: 18500, oldPrice: 24900, sold: 95, stock: 110, image: '/images/speaker.jpeg', href: '/p/speaker' },
    { name: 'Mama Pride 10kg Parboiled Rice', newPrice: 28500, oldPrice: 32000, sold: 120, stock: 150, image: '/images/rice.jpeg', href: '/p/rice' },
    { name: 'Assorted Ankara Fabric - 6 Yards', newPrice: 11900, oldPrice: 15000, sold: 80, stock: 100, image: '/images/ankara.jpeg', href: '/p/ankara' },
    { name: 'Universal Fast Charger Adapter 65W GaN', newPrice: 24999, oldPrice: 50000, sold: 60, stock: 80, image: '/images/charger.jpeg', href: '/p/charger' },
    { name: 'Portable LED Desk Lamp with USB Charging', newPrice: 12990, oldPrice: 25990, sold: 30, stock: 50, image: '/images/lamp.jpeg', href: '/p/lamp' },
  ];

  return (
    <section className="w-full flex justify-center my-8">
      <div className="w-[95%] md:w-[90%]">

        {/* Header with orange gradient */}
        <div className="flex items-center justify-between mb-0 bg-linear-to-r from-orange-500 to-orange-400 text-white px-4 py-3 rounded-t-xl shadow-md">
          <span className="text-2xl md:text-3xl font-extrabold">🔥 FLASH SALES</span>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm md:text-base font-medium">Ends In:</span>
            <CountdownTimer />
          </div>
          <a
            href="/flash-sales"
            className="text-sm md:text-base font-semibold text-white/90 hover:underline"
          >
            View All →
          </a>
        </div>

        {/* Grid: 2 rows x 5 columns, borders aligned with HomeD */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 bg-white p-4 border border-t-0 border-gray-200 rounded-b-xl">
          {flashSaleProducts.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-4 text-center sm:hidden">
          <a
            href="/flash-sales"
            className="text-base font-semibold text-orange-600 hover:underline px-4 py-2 border border-orange-600 rounded-lg inline-block"
          >
            See All Deals ({flashSaleProducts.length})
          </a>
        </div>
      </div>
    </section>
  );
}
