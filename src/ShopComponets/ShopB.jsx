import React from "react";
import { Search, ChevronDown } from "lucide-react";

const COLOR_ORANGERED = "#FF4500";
const COLOR_BLACK = "#1F2937";

export default function ShopB() {
  return (
    <div
      className="w-full border-b bg-white px-6 py-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">

        {/* --- Categories Dropdown --- */}
        <div className="flex items-center justify-center lg:justify-start">
          <div className="relative group">
            <button
              className="flex items-center px-4 py-3 font-semibold text-white rounded-xl shadow-md"
              style={{ backgroundColor: COLOR_ORANGERED }}
            >
              Categories
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            {/* Dropdown menu */}
            <div
              className="
                absolute left-0 mt-2 w-52 bg-white shadow-xl rounded-xl p-3 
                opacity-0 group-hover:opacity-100 group-hover:translate-y-1 
                transition-all duration-200 pointer-events-none group-hover:pointer-events-auto
              "
            >
              <ul className="space-y-2 text-gray-700 font-medium text-sm">
                <li className="hover:text-black cursor-pointer">Electronics</li>
                <li className="hover:text-black cursor-pointer">Fashion</li>
                <li className="hover:text-black cursor-pointer">Home & Living</li>
                <li className="hover:text-black cursor-pointer">Vehicles</li>
                <li className="hover:text-black cursor-pointer">Beauty</li>
                <li className="hover:text-black cursor-pointer">More…</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Search Bar --- */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md relative">
            <input
              type="text"
              placeholder="Search products..."
              className="
                w-full py-3 pl-12 pr-4 rounded-xl border border-gray-300 
                focus:outline-none focus:ring-2 focus:ring-orange-400 
                text-gray-700 shadow-sm
              "
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>

        {/* --- Sort Filter --- */}
        <div className="flex items-center justify-center lg:justify-end">
          <select
            className="
              px-4 py-3 rounded-xl border border-gray-300 bg-white 
              text-gray-700 font-semibold shadow-sm cursor-pointer 
              focus:outline-none focus:ring-2 focus:ring-orange-400
            "
            style={{ color: COLOR_BLACK }}
          >
            <option value="popular">Sort: Popular</option>
            <option value="newest">Sort: Newest</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>

      </div>
    </div>
  );
}
