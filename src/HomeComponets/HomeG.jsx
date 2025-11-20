// HomeG.jsx
import React from "react";
import { FaBox, FaMobileAlt } from "react-icons/fa";

/**
 * AdBlock - small reusable ad card
 */
const AdBlock = ({ ad }) => {
  const {
    title = "Promotion",
    type = "Sponsored",
    cta = "Learn more",
    icon = <FaBox className="w-8 h-8" aria-hidden="true" />,
    href = "#",
    bgColor = "bg-gradient-to-br from-indigo-600 to-violet-600",
  } = ad;

  return (
    <a
      href={href}
      className={`relative overflow-hidden rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-orange-300 transition-transform transform hover:-translate-y-1 ${bgColor}`}
      aria-label={`${title} - ${type}`}
    >
      <div className="flex items-center justify-between p-4 md:p-6 h-32 md:h-36">
        <div className="z-10 text-white w-2/3">
          <p className="text-xs font-semibold uppercase opacity-90 mb-1">{type}</p>
          <h3 className="text-lg md:text-xl font-extrabold leading-tight">{title}</h3>
          <div className="mt-2">
            <span className="inline-block text-[13px] md:text-sm font-medium underline decoration-white/70">
              {cta}
            </span>
          </div>
        </div>

        <div className="z-10 w-1/3 flex items-center justify-end">
          <div className="text-3xl md:text-5xl opacity-90" aria-hidden="true">
            {icon}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-10" />
    </a>
  );
};

/**
 * HomeG - Sponsored banner + ad blocks
 * Fully aligned with HomeC + HomeF width
 */
export default function HomeG() {
  const sponsoredAds = [
    {
      title: "Pay Less, Get More!",
      type: "Sponsored by Temu",
      cta: "Explore Wholesale",
      icon: <FaBox />,
      href: "/temu",
      bgColor: "bg-gradient-to-r from-purple-600 to-indigo-600",
    },
    {
      title: "New Phones Just Arrived",
      type: "Jumia Partner Offer",
      cta: "Shop Now",
      icon: <FaMobileAlt />,
      href: "/phones",
      bgColor: "bg-gradient-to-r from-blue-600 to-cyan-600",
    },
  ];

  return (
    <section className="w-full flex justify-center my-8">
      {/* Perfect alignment with HomeC & HomeF */}
      <div className="w-[95%] md:w-[90%] space-y-6">

        {/* Main promotion banner */}
        <a
          href="/promotions/clearance"
          className="relative block rounded-xl overflow-hidden bg-orange-500 shadow-xl group hover:bg-orange-600 transition"
          aria-label="Massive Clearance Sale - up to 60% off"
        >
          <div className="flex items-center p-6 md:p-8 h-40 md:h-56">
            <div className="z-10 text-white w-2/3 md:w-1/2">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2">
                Massive Clearance Sale!
              </h2>
              <p className="text-sm md:text-lg font-medium opacity-95 mb-4">
                Up to 60% off everything in electronics and home goods.
              </p>

              <div className="flex gap-3">
                <button
                  className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-4 py-2 rounded-full shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white/60 transition"
                  aria-label="Claim vouchers"
                >
                  CLAIM VOUCHERS
                </button>

                <a
                  href="/flash-sales"
                  className="hidden md:inline-block text-sm font-semibold text-white/90 hover:underline self-center"
                >
                  View All →
                </a>
              </div>
            </div>

            <div className="absolute right-0 top-0 h-full w-1/3 bg-orange-400/30 transform -skew-x-12 origin-top-right pointer-events-none" />
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/20 text-[5.5rem] md:text-[7.5rem] pointer-events-none select-none">
              %
            </div>
          </div>
        </a>

        {/* Sponsored Ads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sponsoredAds.map((ad, i) => (
            <AdBlock key={i} ad={ad} />
          ))}
        </div>
      </div>
    </section>
  );
}
