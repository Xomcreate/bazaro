import React from "react";
import { FaPlus, FaEdit, FaTrash, FaToggleOn, FaBox } from "react-icons/fa";

const ORANGE = "#FF4500";

export default function Productmanage() {
  return (
    <div className="text-black">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold" style={{ color: ORANGE }}>
          Product Management
        </h1>
        <p className="text-gray-600 mt-1">
          Manage all products in your store.
        </p>
      </div>

      {/* ACTION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* ADD PRODUCT */}
        <div className="p-6 rounded-xl shadow border bg-white hover:shadow-xl transition">
          <FaPlus size={30} style={{ color: ORANGE }} />
          <h2 className="text-xl font-bold mt-3">Add New Product</h2>
          <p className="text-sm text-gray-600 mt-1">
            Upload product details and images.
          </p>
          <button
            className="mt-4 px-4 py-2 rounded text-white"
            style={{ background: ORANGE }}
          >
            Add Product
          </button>
        </div>

        {/* EDIT PRODUCT */}
        <div className="p-6 rounded-xl shadow border bg-white hover:shadow-xl transition">
          <FaEdit size={30} style={{ color: ORANGE }} />
          <h2 className="text-xl font-bold mt-3">Edit Product</h2>
          <p className="text-sm text-gray-600 mt-1">
            Update product information anytime.
          </p>
          <button
            className="mt-4 px-4 py-2 rounded text-white"
            style={{ background: "black" }}
          >
            Edit
          </button>
        </div>

        {/* DELETE PRODUCT */}
        <div className="p-6 rounded-xl shadow border bg-white hover:shadow-xl transition">
          <FaTrash size={30} style={{ color: ORANGE }} />
          <h2 className="text-xl font-bold mt-3">Delete Product</h2>
          <p className="text-sm text-gray-600 mt-1">
            Remove product from store.
          </p>
          <button
            className="mt-4 px-4 py-2 rounded text-white"
            style={{ background: "black" }}
          >
            Delete
          </button>
        </div>

        {/* STOCK MANAGEMENT */}
        <div className="p-6 rounded-xl shadow border bg-white hover:shadow-xl transition">
          <FaBox size={30} style={{ color: ORANGE }} />
          <h2 className="text-xl font-bold mt-3">Manage Stock</h2>
          <p className="text-sm text-gray-600 mt-1">
            Update stock quantities.
          </p>
          <button
            className="mt-4 px-4 py-2 rounded text-white"
            style={{ background: ORANGE }}
          >
            Manage
          </button>
        </div>

        {/* VISIBILITY TOGGLE */}
        <div className="p-6 rounded-xl shadow border bg-white hover:shadow-xl transition">
          <FaToggleOn size={30} style={{ color: ORANGE }} />
          <h2 className="text-xl font-bold mt-3">Visibility</h2>
          <p className="text-sm text-gray-600 mt-1">
            Toggle product active/inactive.
          </p>
          <button
            className="mt-4 px-4 py-2 rounded text-white"
            style={{ background: "black" }}
          >
            Toggle
          </button>
        </div>

      </div>

    </div>
  );
}
