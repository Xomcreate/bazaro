// src/MainComponents/CategoryPage.js
import React from "react";
import { useParams } from "react-router-dom";
import CatA from "../CategoryComponets/CatA"; // corrected folder name

// Full category components
import Electronics from "../CategoryComponets/Electronics";
import Phone from "../CategoryComponets/Phone";
import Computer from "../CategoryComponets/Computer";
import Automobile from "../CategoryComponets/Automobile";
import Fashion from "../CategoryComponets/Fashion";
import Services from "../CategoryComponets/Services";
import Stationery from "../CategoryComponets/Stationery";
import Beauty from "../CategoryComponets/Beauty";
import Appliances from "../CategoryComponets/Appliances";
import Sports from "../CategoryComponets/Sports";

const categoryComponentsMap = {
  electronics: Electronics,
  phone: Phone,
  computer: Computer,
  automobile: Automobile,
  fashion: Fashion,
  services: Services,
  stationery: Stationery,
  beauty: Beauty,
  appliances: Appliances,
  sports: Sports,
};

function normalizeSlug(raw) {
  if (!raw) return "";
  // lowercase, trim, replace spaces/underscores with dashes, remove invalid characters
  return raw
    .toLowerCase()
    .trim()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function CategoryPage() {
  const params = useParams();
  // find a slug param robustly
  const rawSlug = params.slug ?? params.category ?? Object.values(params)[0] ?? "";
  const slug = normalizeSlug(rawSlug);

  // match component from map
  let Component = categoryComponentsMap[slug];

  // fallback fuzzy matching
  if (!Component) {
    if (slug.includes("phone") || slug.includes("tablet")) Component = Phone;
    else if (slug.includes("electro")) Component = Electronics;
    else if (slug.includes("computer") || slug.includes("laptop")) Component = Computer;
    else if (slug.includes("appliance")) Component = Appliances;
     else if (slug.includes("fashion") || slug.includes("fashio")) Component = Fashion;
    else if (slug.includes("sports")) Component = Sports;
     else if (slug.includes("beauty")) Component = Beauty;
      else if (slug.includes("services")) Component = Services;
       else if (slug.includes("stationery")) Component = Stationery;
  }

  console.info("CategoryPage | rawSlug:", rawSlug, "normalized:", slug, "matched:", !!Component);

  return (
    <div className="min-h-screen bg-gray-100">
      <CatA />

      {Component ? (
        <Component />
      ) : (
        <div className="text-center text-gray-600 text-lg mt-8">
          <p>No products available in this category.</p>
          <p className="text-sm text-gray-400 mt-2">
            Debug: slug="{rawSlug}" normalized="{slug}"
          </p>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
