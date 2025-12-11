import React from 'react';

// Define the color palette for easy reference
const colors = {
  primary: 'orangered', // Highlight color for buttons, active states
  secondary: 'black',   // Text, borders, main structure
  background: 'white',  // Page and card background
  text: 'black',        // General text
  lightText: 'white',   // Text on orangered background
};

// Define styles for a clean, modern look
const styles = {
  container: {
    padding: '20px',
    backgroundColor: colors.background,
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    borderBottom: `2px solid ${colors.secondary}`,
    paddingBottom: '10px',
  },
  title: {
    color: colors.secondary,
    margin: 0,
    fontSize: '24px',
  },
  addButton: {
    backgroundColor: colors.primary,
    color: colors.lightText,
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  tabsContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  tab: (isActive) => ({
    padding: '10px 15px',
    marginRight: '10px',
    cursor: 'pointer',
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? colors.lightText : colors.secondary,
    backgroundColor: isActive ? colors.primary : colors.background,
    border: `1px solid ${colors.secondary}`,
    borderRadius: '5px',
    transition: 'all 0.3s',
  }),
  orderList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  orderCard: {
    border: `1px solid ${colors.secondary}`,
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: colors.background,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    borderBottom: `1px solid ${colors.secondary}`,
    paddingBottom: '5px',
  },
  orderId: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  status: (status) => {
    let backgroundColor = colors.background;
    if (status === 'New') backgroundColor = colors.primary;
    if (status === 'Processing') backgroundColor = 'yellow'; // Use a neutral color for secondary status
    if (status === 'Shipped') backgroundColor = 'green'; // Use a neutral color for secondary status
    if (status === 'Delivered') backgroundColor = colors.secondary; // Use black for a final status

    return {
      padding: '5px 10px',
      borderRadius: '3px',
      fontSize: '12px',
      fontWeight: 'bold',
      color: status === 'New' ? colors.lightText : (status === 'Delivered' ? colors.lightText : colors.text),
      backgroundColor: status === 'New' ? colors.primary : (status === 'Delivered' ? colors.secondary : 'lightgray'),
    };
  },
  cardBody: {
    fontSize: '14px',
    lineHeight: '1.5',
  },
  actionButton: {
    marginTop: '15px',
    backgroundColor: colors.secondary,
    color: colors.lightText,
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginRight: '10px',
  },
  primaryActionButton: {
    backgroundColor: colors.primary,
    color: colors.lightText,
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }
};

// Dummy Data
const dummyOrders = [
  { id: 'ORD-001', customer: 'Alice Johnson', total: 150.00, date: '2025-12-10', status: 'New', tab: 'New' },
  { id: 'ORD-002', customer: 'Bob Smith', total: 29.50, date: '2025-12-09', status: 'Processing', tab: 'In-Progress' },
  { id: 'ORD-003', customer: 'Charlie Brown', total: 499.99, date: '2025-12-08', status: 'Shipped', tab: 'Completed' },
  { id: 'ORD-004', customer: 'Diana Prince', total: 75.00, date: '2025-12-07', status: 'Delivered', tab: 'Completed' },
];

function OrdersManage() {
  const [activeTab, setActiveTab] = React.useState('New');

  const filteredOrders = dummyOrders.filter(order => order.tab === activeTab);

  const tabs = ['New', 'In-Progress', 'Completed'];

  const OrderCard = ({ order }) => (
    <div style={styles.orderCard}>
      <div style={styles.cardHeader}>
        <span style={styles.orderId}>Order #{order.id}</span>
        <span style={styles.status(order.status)}>{order.status}</span>
      </div>
      <div style={styles.cardBody}>
        <p><strong>Customer:</strong> {order.customer}</p>
        <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
        <p><strong>Date:</strong> {order.date}</p>
      </div>
      <div>
        <button style={styles.actionButton}>View Details</button>
        {order.status === 'New' && (
          <button style={styles.primaryActionButton}>Accept Order</button>
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Vendor Order Management</h1>
        <button style={styles.addButton} onClick={() => alert('New Order action')}>
          + New Order
        </button>
      </header>

      <div style={styles.tabsContainer}>
        {tabs.map(tab => (
          <div
            key={tab}
            style={styles.tab(activeTab === tab)}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <main style={styles.orderList}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))
        ) : (
          <p style={{ color: colors.secondary }}>No {activeTab.toLowerCase()} orders found.</p>
        )}
      </main>
    </div>
  );
}

export default OrdersManage;