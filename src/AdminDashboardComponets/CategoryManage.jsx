import React, { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaChevronDown,
  FaChevronRight,
  FaListUl,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ---------------------------------------------------------
// CONSTANTS
// ---------------------------------------------------------
const ORANGERED = "#FF4500";
const ACCENT_CLASS = `bg-[${ORANGERED}] hover:bg-red-700 text-white`;

// ---------------------------------------------------------
// MOCK CATEGORY DATA
// ---------------------------------------------------------
const initialCategories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    isVisible: true,
    subCategories: [
      { id: 11, name: "Smartphones", slug: "smartphones", isVisible: true, subCategories: [] },
      { id: 12, name: "Laptops", slug: "laptops", isVisible: true, subCategories: [] }
    ]
  },
  {
    id: 2,
    name: "Fashion",
    slug: "fashion",
    isVisible: true,
    subCategories: [
      { id: 21, name: "Men Clothing", slug: "men", isVisible: true, subCategories: [] }
    ]
  }
];

// ---------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------
function CategoryManage() {
  const [categories, setCategories] = useState(initialCategories);
  const [editingCategory, setEditingCategory] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [expandedIds, setExpandedIds] = useState(new Set());

  // ---------------------------------------------------------
  // HELPERS
  // ---------------------------------------------------------

  const toggleExpand = (id) => {
    setExpandedIds(prev => {
      const set = new Set(prev);
      set.has(id) ? set.delete(id) : set.add(id);
      return set;
    });
  };

  const handleEdit = (cat, parentId = null) => {
    setEditingCategory({ ...cat, parentId, isNew: false });
    setIsFormOpen(true);
  };

  const handleAdd = (parentId = null) => {
    setEditingCategory({
      id: Date.now(),
      name: "",
      slug: "",
      parentId,
      isVisible: true,
      isNew: true
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id, parentId) => {
    if (!window.confirm("Delete this category?")) return;

    if (!parentId) {
      setCategories(prev => prev.filter(c => c.id !== id));
    } else {
      setCategories(prev =>
        prev.map(c =>
          c.id === parentId
            ? { ...c, subCategories: c.subCategories.filter(s => s.id !== id) }
            : c
        )
      );
    }
  };

  // ---------------------------------------------------------
  // RENDER ROW COMPONENT
  // ---------------------------------------------------------
  const CategoryRow = ({ category, level = 0, parentId = null }) => {
    const isExpanded = expandedIds.has(category.id);
    const hasSub = category.subCategories?.length > 0;

    return (
      <>
        <motion.tr
          className="hover:bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <td className="px-4 py-3 flex items-center gap-2"
              style={{ paddingLeft: `${level * 20}px` }}
          >
            {hasSub ? (
              <button onClick={() => toggleExpand(category.id)}>
                {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
              </button>
            ) : (
              <div style={{ width: 14 }} />
            )}

            <FaListUl />
            {category.name}
          </td>

          <td>{category.slug}</td>

          <td>
            {category.isVisible ? (
              <span className="text-green-600 flex items-center gap-1"><FaEye/> Visible</span>
            ) : (
              <span className="text-gray-600 flex items-center gap-1"><FaEyeSlash/> Hidden</span>
            )}
          </td>

          <td className="space-x-2">

            <button
              onClick={() => handleAdd(category.id)}
              className="p-2 rounded-full text-white"
              style={{ background: ORANGERED }}
            >
              <FaPlus />
            </button>

            <button
              onClick={() => handleEdit(category,parentId)}
              className="p-2 rounded-full bg-black text-white"
            >
              <FaEdit />
            </button>

            <button
              onClick={() => handleDelete(category.id,parentId)}
              className="p-2 rounded-full bg-gray-300"
            >
              <FaTrash />
            </button>

          </td>
        </motion.tr>

        {isExpanded && hasSub &&
          category.subCategories.map(sub => (
            <CategoryRow key={sub.id} category={sub} level={level+1} parentId={category.id}/>
          ))
        }
      </>
    );
  };

  // ---------------------------------------------------------
  // FORM SLIDE PANEL (NO BLACK BACKGROUND)
  // ---------------------------------------------------------
  const CategoryForm = () => (
    <motion.div
      onClick={() => setIsFormOpen(false)}
      className="fixed inset-0 flex justify-end z-50 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={e => e.stopPropagation()}
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: 400 }}
        className="w-full max-w-lg bg-white h-full shadow-xl p-6"
      >
        <h2 className="text-xl font-bold mb-5" style={{color: ORANGERED}}>
          {editingCategory?.isNew ? "Add Category" : "Edit Category"}
        </h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Category name"
          defaultValue={editingCategory?.name}
        />

        <input
          className="border p-2 w-full mb-3"
          placeholder="Slug"
          defaultValue={editingCategory?.slug}
        />

        <div className="mt-4 flex justify-end gap-2">

          <button
            onClick={() => setIsFormOpen(false)}
            className="px-4 py-2 bg-gray-300 rounded"
          >Cancel</button>

          <button
            className="px-4 py-2 rounded text-white"
            style={{ background: ORANGERED }}
          >
            Save
          </button>

        </div>
      </motion.div>
    </motion.div>
  );

  // ---------------------------------------------------------
  // MAIN RETURN
  // ---------------------------------------------------------
  return (
    <div className="p-6">

      <button
        onClick={() => handleAdd(null)}
        className="px-4 py-2 rounded text-white mb-6"
        style={{ background: ORANGERED }}
      >
        <FaPlus/> Add Category
      </button>

      <table className="w-full border">
        <tbody>
          <AnimatePresence>
            {categories.map(cat => (
              <CategoryRow key={cat.id} category={cat} />
            ))}
          </AnimatePresence>
        </tbody>
      </table>

      <AnimatePresence>
        {isFormOpen && <CategoryForm/>}
      </AnimatePresence>

    </div>
  );
}

export default CategoryManage;
