import React, { useState, useRef, useEffect } from "react";

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  const [language, setLanguage] = useState({
    label: "English",
    flag: "🇬🇧",
  });

  const headerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setLangOpen(false);
        setCurrencyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={headerRef}
      className="w-full bg-white text-black text-sm px-4 py-2 hidden md:flex items-center justify-between"
    >
      {/* Left Message */}
      <p className="font-bold text-black/80">
        Welcome to <span className="text-orange-600 font-bold">ErrandBox</span>! Enjoy weekend offers — Code:{" "}
        <span className="text-orange-600 font-extrabold">HAPPY2018</span>
      </p>

      {/* Right Options */}
      <div className="flex items-center gap-4">
        {/* Currency */}
        <div className="relative">
          <button
            onClick={() => setCurrencyOpen(!currencyOpen)}
            className="flex items-center gap-1 cursor-pointer text-black/80 hover:text-black transition text-sm"
          >
            <span>🇳🇬</span> ₦ Naira <span>▼</span>
          </button>
          {currencyOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-36 py-2 z-50">
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100">🇳🇬 ₦ Naira</button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100">🇺🇸 $ Dollar</button>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-100">🇬🇧 £ Pound</button>
            </div>
          )}
        </div>

        <span className="text-black/40">|</span>

        {/* Language */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 cursor-pointer text-black/80 hover:text-black transition text-sm"
          >
            <span>{language.flag}</span> {language.label} <span>▼</span>
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg w-36 py-2 z-50">
              <button
                onClick={() => {
                  setLanguage({ label: "English", flag: "🇬🇧" });
                  setLangOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => {
                  setLanguage({ label: "Français", flag: "🇫🇷" });
                  setLangOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                🇫🇷 Français
              </button>
              <button
                onClick={() => {
                  setLanguage({ label: "Español", flag: "🇪🇸" });
                  setLangOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                🇪🇸 Español
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
