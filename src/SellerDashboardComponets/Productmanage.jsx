import React, { useState } from 'react';

// Define the consistent color palette
const colors = {
  primary: 'orangered',   // Highlight color for buttons, active states
  secondary: 'black',     // Text, borders, main structure
  background: 'white',    // Page and card background
  lightText: 'white',     // Text on primary/secondary background
  inputBorder: '#ccc',    // Light grey for subtle input borders
};

// Define styles for the Product Management page
const styles = {
  container: {
    padding: '25px',
    backgroundColor: colors.background,
    minHeight: '100vh',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  title: {
    color: colors.secondary,
    margin: 0,
    fontSize: '28px',
    fontWeight: '700',
  },
  topControls: {
    display: 'flex',
    gap: '15px',
    marginBottom: '25px',
    alignItems: 'center',
  },
  searchBar: {
    padding: '10px',
    border: `1px solid ${colors.inputBorder}`,
    borderRadius: '4px',
    width: '300px',
    fontSize: '16px',
    color: colors.secondary,
  },
  filterDropdown: {
    padding: '10px',
    border: `1px solid ${colors.inputBorder}`,
    borderRadius: '4px',
    backgroundColor: colors.background,
    color: colors.secondary,
    fontSize: '16px',
  },
  addButton: {
    backgroundColor: colors.primary,
    color: colors.lightText,
    border: 'none',
    padding: '12px 25px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s',
    boxShadow: '0 2px 5px rgba(255, 69, 0, 0.3)', // Subtle shadow for emphasis
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: colors.background,
  },
  tableHeader: {
    backgroundColor: colors.secondary,
    color: colors.lightText,
    textAlign: 'left',
  },
  th: {
    padding: '12px 15px',
    fontSize: '14px',
    textTransform: 'uppercase',
  },
  tr: {
    borderBottom: `1px solid #eee`,
  },
  td: {
    padding: '12px 15px',
    fontSize: '14px',
    color: colors.secondary,
  },
  actionButton: {
    backgroundColor: colors.primary,
    color: colors.lightText,
    border: 'none',
    padding: '8px 15px',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '8px',
    fontSize: '13px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  deleteButton: {
    backgroundColor: colors.secondary, // Use black for a secondary action (Delete)
    color: colors.lightText,
    border: 'none',
    padding: '8px 15px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '13px',
    transition: 'background-color 0.3s',
  },
  statusIndicator: (isPublished) => ({
    padding: '5px 10px',
    borderRadius: '15px',
    fontWeight: 'bold',
    fontSize: '12px',
    color: isPublished ? colors.lightText : colors.secondary,
    backgroundColor: isPublished ? colors.primary : '#ccc',
    textAlign: 'center',
    display: 'inline-block',
  }),
};

// Dummy Product Data
const dummyProducts = [
  { id: 101, name: 'Premium Espresso Beans', category: 'Coffee', stock: 150, price: 19.99, published: true },
  { id: 102, name: 'Stainless Steel French Press', category: 'Accessories', stock: 50, price: 34.50, published: true },
  { id: 103, name: 'Seasonal Blend Drip Bags', category: 'Coffee', stock: 0, price: 12.00, published: false },
  { id: 104, name: 'Electric Burr Grinder', category: 'Equipment', stock: 20, price: 129.99, published: true },
  { id: 105, name: 'Glass Travel Mug', category: 'Accessories', stock: 88, price: 15.75, published: false },
];

function ProductManage() {
  const [products, setProducts] = useState(dummyProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  // Simple filtering logic
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(dummyProducts.map(p => p.category))];

  return (
    <div style={styles.container}>
      {/* Header and Add Button */}
      <header style={styles.header}>
        <h1 style={styles.title}>Product Inventory</h1>
        <button 
          style={styles.addButton} 
          onClick={() => alert('Navigate to Add New Product Form')}
        >
          + Add New Product
        </button>
      </header>

      {/* Search and Filter Controls */}
      <div style={styles.topControls}>
        <input
          type="text"
          placeholder="Search by product name..."
          style={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          style={styles.filterDropdown}
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat} Category</option>
          ))}
        </select>
      </div>

      {/* Product Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Product Name</th>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Stock</th>
              <th style={styles.th}>Price</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id} style={styles.tr}>
                <td style={styles.td}>{product.id}</td>
                <td style={styles.td}>{product.name}</td>
                <td style={styles.td}>{product.category}</td>
                <td style={styles.td}>{product.stock > 0 ? product.stock : <span style={{ color: colors.primary, fontWeight: 'bold' }}>Out of Stock</span>}</td>
                <td style={styles.td}>${product.price.toFixed(2)}</td>
                <td style={styles.td}>
                  <span style={styles.statusIndicator(product.published)}>
                    {product.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td style={styles.td}>
                  <button 
                    style={styles.actionButton}
                    onClick={() => alert(`Edit Product ${product.id}`)}
                  >
                    Edit
                  </button>
                  <button 
                    style={styles.deleteButton}
                    onClick={() => alert(`Delete Product ${product.id}`)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <p style={{ marginTop: '20px', textAlign: 'center', color: colors.secondary }}>
          No products match your search or filter criteria.
        </p>
      )}
    </div>
  );
}

export default ProductManage;