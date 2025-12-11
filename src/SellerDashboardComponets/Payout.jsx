import React from 'react';

// Define the consistent color palette
const colors = {
  primary: 'orangered',   // Highlight color for main actions (Withdraw)
  secondary: 'black',     // Text, borders, main structure
  background: 'white',    // Page and card background
  lightText: 'white',     // Text on primary/secondary background
  border: '#ddd',         // Light border for financial blocks
  success: '#28a745',     // Green for success/ready states (neutral addition)
};

// Dummy Data
const dummyPayout = {
  currentBalance: 4520.75,
  pendingWithdrawals: 500.00,
  lastWithdrawalDate: '2025-12-05',
  bankAccount: {
    bankName: 'First Global Bank',
    lastFour: '7890',
    status: 'Verified',
  },
};

// Define styles for the Payout Management page
const styles = {
  container: {
    padding: '25px',
    backgroundColor: colors.background,
    minHeight: '100vh',
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  header: {
    marginBottom: '30px',
    borderBottom: `2px solid ${colors.border}`,
    paddingBottom: '10px',
  },
  title: {
    color: colors.secondary,
    margin: 0,
    fontSize: '28px',
    fontWeight: '700',
  },
  // --- Financial Overview Section ---
  balanceCardContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
  },
  balanceCard: {
    flex: 1,
    padding: '20px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    backgroundColor: '#fafafa', // Slight off-white background
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    fontSize: '16px',
    color: colors.secondary,
    marginBottom: '10px',
    borderBottom: `1px dashed ${colors.border}`,
    paddingBottom: '5px',
  },
  cardValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: colors.primary, // Highlight the actual balance with orangered
  },

  // --- Main Actions Section ---
  actionSection: {
    marginBottom: '40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two columns for main actions
    gap: '30px',
  },
  actionBlock: {
    padding: '25px',
    border: `1px solid ${colors.secondary}`, // Strong black border
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: '15px',
  },
  primaryButton: {
    backgroundColor: colors.primary,
    color: colors.lightText,
    border: 'none',
    padding: '12px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    color: colors.lightText,
    border: 'none',
    padding: '12px 30px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  
  // --- Bank Account Section ---
  bankAccountSection: {
    padding: '20px',
    border: `1px dashed ${colors.primary}`, // Orangered dashed border to indicate linking
    borderRadius: '8px',
    marginBottom: '30px',
    backgroundColor: '#fff7f5', // Very light orangered background
  },
  accountInfo: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: colors.secondary,
  },
  statusVerified: {
    color: colors.success,
    fontWeight: 'bold',
  },

  // --- History Link ---
  historyLink: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: colors.primary,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 0',
    borderBottom: `2px solid ${colors.primary}`,
  }
};

function Payout() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>💰 Payout / Withdrawals</h1>
      </header>

      {/* 1. Financial Overview */}
      <div style={styles.balanceCardContainer}>
        <div style={styles.balanceCard}>
          <p style={styles.cardTitle}>Current Available Earnings</p>
          <p style={styles.cardValue}>${dummyPayout.currentBalance.toFixed(2)}</p>
        </div>
        <div style={styles.balanceCard}>
          <p style={styles.cardTitle}>Pending Withdrawals</p>
          <p style={{ ...styles.cardValue, color: colors.secondary }}>${dummyPayout.pendingWithdrawals.toFixed(2)}</p>
          <small style={{ color: colors.secondary }}>Last payout: {dummyPayout.lastWithdrawalDate}</small>
        </div>
      </div>

      {/* 2. Main Actions */}
      <div style={styles.actionSection}>
        {/* Withdraw Earnings */}
        <div style={styles.actionBlock}>
          <h2 style={styles.actionTitle}>Withdraw Earnings</h2>
          <p style={{ color: colors.secondary }}>Initiate a transfer of your available balance to your linked bank account.</p>
          <button 
            style={styles.primaryButton}
            onClick={() => alert('Open Withdrawal Form')}
          >
            Withdraw Now
          </button>
        </div>

        {/* Bank Account Management */}
        <div style={styles.actionBlock}>
          <h2 style={styles.actionTitle}>Manage Bank Account</h2>
          <p style={{ color: colors.secondary }}>Add or update the account where your payments will be sent.</p>
          <button 
            style={styles.secondaryButton}
            onClick={() => alert('Open Bank Account Settings')}
          >
            Add/Edit Account
          </button>
        </div>
      </div>
      
      {/* 3. Linked Bank Account Status */}
      <div style={styles.bankAccountSection}>
          <h3 style={styles.actionTitle}>Linked Account</h3>
          <div style={styles.accountInfo}>
              <p><strong>Bank:</strong> {dummyPayout.bankAccount.bankName}</p>
              <p><strong>Account ending in:</strong> **** {dummyPayout.bankAccount.lastFour}</p>
              <p><strong>Status:</strong> <span style={styles.statusVerified}>{dummyPayout.bankAccount.status}</span></p>
          </div>
      </div>


      {/* 4. Withdrawal History Link */}
      <a 
        href="#" 
        style={styles.historyLink}
        onClick={(e) => { e.preventDefault(); alert('Navigate to Withdrawal History'); }}
      >
        View Withdrawal History →
      </a>
    </div>
  );
}

export default Payout;