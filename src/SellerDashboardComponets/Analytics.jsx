import React, { useState } from 'react';

// Define the consistent color palette
const colors = {
  primary: 'orangered',   // Highlight color for key performance indicators (KPIs) and charts
  secondary: 'black',     // Text, borders, main structure
  background: 'white',    // Page background
  lightText: 'white',     // Text on primary/secondary background
  border: '#ddd',         // Light border for cards
  neutralMetric: '#6c757d', // Grey for secondary metrics
};

// Dummy Data
const dummyAnalytics = {
  totalEarnings: 15500.50,
  totalOrders: 678,
  totalViews: 45200,
  earningsChange: '+12.5%', // Positive change
  ordersChange: '-3.1%',    // Negative change
};

const dummyProducts = [
  { rank: 1, name: 'Premium Espresso Beans', sales: 1500, units: 120 },
  { rank: 2, name: 'Stainless Steel French Press', sales: 950, units: 35 },
  { rank: 3, name: 'Electric Burr Grinder', sales: 880, units: 8 },
];

// Define styles for the Analytics Page
const styles = {
  container: {
    padding: '25px',
    backgroundColor: colors.background,
    minHeight: '100vh',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  header: {
    marginBottom: '30px',
    borderBottom: `2px solid ${colors.secondary}`,
    paddingBottom: '10px',
  },
  title: {
    color: colors.secondary,
    margin: 0,
    fontSize: '28px',
    fontWeight: '700',
  },
  // --- KPI Cards Section ---
  kpiContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '40px',
  },
  kpiCard: {
    padding: '20px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    backgroundColor: '#fafafa', // Slight off-white background
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
  },
  kpiTitle: {
    fontSize: '14px',
    color: colors.neutralMetric,
    marginBottom: '8px',
    textTransform: 'uppercase',
  },
  kpiValue: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: colors.secondary,
  },
  kpiChange: (isPositive) => ({
    fontSize: '14px',
    fontWeight: 'bold',
    color: isPositive ? colors.primary : colors.neutralMetric, // Use orangered for positive lift
    marginTop: '5px',
  }),

  // --- Chart and Table Sections ---
  sectionTitle: {
    color: colors.secondary,
    fontSize: '22px',
    borderLeft: `5px solid ${colors.primary}`, // Orangered highlight bar
    paddingLeft: '10px',
    marginBottom: '20px',
    marginTop: '30px',
  },

  // Placeholder for Charts (Graph will be simulated)
  chartPlaceholder: {
    height: '250px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    color: colors.neutralMetric,
    marginBottom: '40px',
    fontWeight: 'bold',
    // Simulate chart style using orangered
    backgroundImage: `repeating-linear-gradient(90deg, ${colors.primary} 0 5px, transparent 5px 15px)`,
    backgroundSize: '100% 150px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    opacity: 0.7,
  },

  // --- Best Performing Products Table ---
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    backgroundColor: colors.background,
    marginBottom: '40px',
  },
  th: {
    padding: '12px 15px',
    backgroundColor: colors.secondary,
    color: colors.lightText,
    textAlign: 'left',
    fontSize: '14px',
    textTransform: 'uppercase',
  },
  td: {
    padding: '12px 15px',
    borderBottom: `1px solid ${colors.border}`,
    color: colors.secondary,
    fontSize: '14px',
  },
  rankCell: {
    fontWeight: 'bold',
    color: colors.primary, // Highlight rank with orangered
  },
};

function Analytics() {
  const isEarningsPositive = dummyAnalytics.earningsChange.startsWith('+');
  const isOrdersPositive = dummyAnalytics.ordersChange.startsWith('+'); // Used for example

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>📊 Analytics Dashboard</h1>
      </header>

      {/* 1. Overview KPIs: Earnings, Orders, Views */}
      <h2 style={styles.sectionTitle}>Overview: Last 30 Days</h2>
      <div style={styles.kpiContainer}>
        {/* Total Earnings */}
        <div style={styles.kpiCard}>
          <p style={styles.kpiTitle}>Total Earnings</p>
          <p style={{ ...styles.kpiValue, color: colors.primary }}>${dummyAnalytics.totalEarnings.toLocaleString()}</p>
          <p style={styles.kpiChange(isEarningsPositive)}>{dummyAnalytics.earningsChange} vs. previous period</p>
        </div>

        {/* Total Orders */}
        <div style={styles.kpiCard}>
          <p style={styles.kpiTitle}>Total Orders</p>
          <p style={styles.kpiValue}>{dummyAnalytics.totalOrders.toLocaleString()}</p>
          <p style={styles.kpiChange(isOrdersPositive)}>{dummyAnalytics.ordersChange} vs. previous period</p>
        </div>

        {/* Total Views */}
        <div style={styles.kpiCard}>
          <p style={styles.kpiTitle}>Store/Product Views</p>
          <p style={styles.kpiValue}>{dummyAnalytics.totalViews.toLocaleString()}</p>
          <p style={styles.kpiChange(true)}>+5.4% vs. previous period</p>
        </div>
      </div>

      {/* 2. Traffic Insights (Simulated Chart) */}
      <h2 style={styles.sectionTitle}>Traffic Insights (Views Over Time)</h2>
      <div style={styles.chartPlaceholder}>
        [Placeholder for Interactive Line Chart - Views]
      </div>

      {/* 3. Best Performing Products */}
      <h2 style={styles.sectionTitle}>Best Performing Products</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Rank</th>
            <th style={styles.th}>Product Name</th>
            <th style={styles.th}>Total Sales ($)</th>
            <th style={styles.th}>Units Sold</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map(product => (
            <tr key={product.rank}>
              <td style={{ ...styles.td, ...styles.rankCell }}>#{product.rank}</td>
              <td style={styles.td}>{product.name}</td>
              <td style={styles.td}>${product.sales.toLocaleString()}</td>
              <td style={styles.td}>{product.units.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* 4. Optional: Earnings History (Simulated Chart) */}
      <h2 style={styles.sectionTitle}>Earnings History</h2>
      <div style={styles.chartPlaceholder}>
        [Placeholder for Interactive Bar Chart - Earnings]
      </div>
    </div>
  );
}

export default Analytics;