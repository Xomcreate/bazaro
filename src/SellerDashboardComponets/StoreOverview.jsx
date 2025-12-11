import React from 'react';

// Define the consistent color palette
const colors = {
  primary: 'orangered',   // Highlight color for main financial KPIs (Earnings, Sales)
  secondary: 'black',     // Text, borders, main structure
  background: 'white',    // Page background
  lightText: 'white',     // Text on primary/secondary background
  border: '#ddd',         // Light border for cards
  warning: '#ffc107',     // Yellow/Gold for alerts/pending items (neutral addition)
};

// Dummy Data
const dummyOverview = {
  totalSales: 25500.75,
  totalOrders: 980,
  pendingOrders: 15,
  totalEarnings: 18500.50,
};

// Define styles for the Store Overview Dashboard
const styles = {
  container: {
    padding: '25px',
    backgroundColor: colors.background,
    minHeight: '100vh',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  header: {
    marginBottom: '30px',
    borderBottom: `2px solid ${colors.primary}`, // Use orangered underline for the main title
    paddingBottom: '10px',
  },
  title: {
    color: colors.secondary,
    margin: 0,
    fontSize: '32px',
    fontWeight: '700',
  },
  greeting: {
    color: colors.secondary,
    fontSize: '18px',
    marginTop: '5px',
  },
  // --- KPI Cards Section ---
  kpiContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Four columns for the four main metrics
    gap: '25px',
    marginBottom: '40px',
  },
  kpiCard: {
    padding: '20px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    backgroundColor: '#fafafa', // Slight off-white background for all cards
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
  },
  kpiTitle: {
    fontSize: '14px',
    color: colors.secondary,
    marginBottom: '10px',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  kpiValue: (isFinancial, isPending) => ({
    fontSize: isFinancial ? '36px' : '40px',
    fontWeight: 'bold',
    // Highlight Earnings and Sales in orangered
    color: isFinancial ? colors.primary : (isPending ? colors.warning : colors.secondary),
  }),
  actionButton: {
    backgroundColor: colors.secondary,
    color: colors.lightText,
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.3s',
  },
  pendingLink: {
    fontWeight: 'bold',
    color: colors.primary,
    textDecoration: 'none',
    display: 'block',
    marginTop: '10px',
  }
};

function StoreOverview() {
    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <h1 style={styles.title}>Welcome, Vendor!</h1>
                <p style={styles.greeting}>Here is your real-time store performance summary.</p>
            </header>

            {/* KPI Cards: Total Sales, Total Orders, Pending Orders, Total Earnings */}
            <div style={styles.kpiContainer}>

                {/* KPI 1: Total Sales (Financial, Highlighted) */}
                <div style={styles.kpiCard}>
                    <p style={styles.kpiTitle}>Total Sales (All Time)</p>
                    <p style={styles.kpiValue(true, false)}>
                        ${dummyOverview.totalSales.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                    <button 
                        style={styles.actionButton}
                        onClick={() => alert('View Sales History')}
                    >
                        View Sales History
                    </button>
                </div>

                {/* KPI 2: Total Orders */}
                <div style={styles.kpiCard}>
                    <p style={styles.kpiTitle}>Total Orders (All Time)</p>
                    <p style={styles.kpiValue(false, false)}>
                        {dummyOverview.totalOrders.toLocaleString()}
                    </p>
                    <button 
                        style={styles.actionButton}
                        onClick={() => alert('View All Orders')}
                    >
                        View All Orders
                    </button>
                </div>
                
                {/* KPI 3: Pending Orders (Warning/Action Required) */}
                <div style={{...styles.kpiCard, border: `2px solid ${colors.warning}`}}>
                    <p style={{...styles.kpiTitle, color: colors.secondary}}>
                        🚨 Orders Awaiting Action
                    </p>
                    <p style={styles.kpiValue(false, true)}>
                        {dummyOverview.pendingOrders}
                    </p>
                    <a 
                        href="#" 
                        style={styles.pendingLink}
                        onClick={(e) => { e.preventDefault(); alert('Go to Pending Orders'); }}
                    >
                        Go to Orders Manage →
                    </a>
                </div>

                {/* KPI 4: Total Earnings (Financial, Highlighted) */}
                <div style={styles.kpiCard}>
                    <p style={styles.kpiTitle}>Total Lifetime Earnings</p>
                    <p style={styles.kpiValue(true, false)}>
                        ${dummyOverview.totalEarnings.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                    <button 
                        style={{...styles.actionButton, backgroundColor: colors.primary}}
                        onClick={() => alert('View Payout Details')}
                    >
                        View Payout Details
                    </button>
                </div>
                
            </div>
            
            <p style={{textAlign: 'center', color: colors.secondary, marginTop: '20px'}}>
                *Metrics updated in real-time.
            </p>
        </div>
    );
}

export default StoreOverview;