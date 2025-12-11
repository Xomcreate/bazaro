import React from 'react';

// Define the consistent color palette
const colors = {
  primary: 'orangered',   // Highlight color for main actions and upgrade prompt
  secondary: 'black',     // Text, borders, main structure
  background: 'white',    // Page background
  lightText: 'white',     // Text on primary/secondary background
  disabled: '#ccc',       // Light grey for inactive/upgrade necessary elements
  warning: '#ffc107',     // Yellow/Gold for optional/upgrade prompt (neutral addition)
};

// Define styles for the Promotions Management page
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
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  // --- Upgrade Banner Section ---
  upgradeBanner: {
    backgroundColor: '#fffbe6', // Very light yellow/orange background
    border: `2px solid ${colors.warning}`,
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  bannerTitle: {
    color: colors.secondary,
    fontSize: '22px',
    marginBottom: '10px',
  },
  bannerText: {
    color: colors.secondary,
    marginBottom: '20px',
  },
  upgradeButton: {
    backgroundColor: colors.primary,
    color: colors.lightText,
    border: 'none',
    padding: '12px 35px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '18px',
    boxShadow: `0 4px 8px rgba(255, 69, 0, 0.4)`,
    transition: 'background-color 0.3s',
  },

  // --- Core Actions Section (Disabled/Preview) ---
  actionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },
  actionCard: {
    padding: '20px',
    border: `1px solid ${colors.disabled}`,
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: colors.background,
    opacity: 0.6, // Dimmed appearance since it's an upgrade
    transition: 'opacity 0.3s',
  },
  cardIcon: {
    fontSize: '36px',
    color: colors.disabled,
    marginBottom: '10px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: '15px',
  },
  cardDescription: {
    fontSize: '14px',
    color: colors.secondary,
    marginBottom: '20px',
  },
  cardButton: {
    backgroundColor: colors.disabled,
    color: colors.secondary,
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'not-allowed',
  },
  
  // Optional: Style for the "Ads Performance" card specifically if it's passive
  performanceCard: {
    // If we assume performance is viewable even without a paid upgrade, we could make it active:
    // opacity: 1, 
    // border: `1px solid ${colors.secondary}`,
  },
  
  // Active state styles (if we were to show them active)
  activeCardButton: {
    backgroundColor: colors.primary,
    color: colors.lightText,
    cursor: 'pointer',
  }
};

function Promotion() {
    // We assume the vendor is currently NOT subscribed to the promotion feature
    const isSubscribed = false; 

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <h1 style={styles.title}>
                    🚀 Ads / Promotions 
                    {/* Optional Tag to indicate status */}
                    <span style={{ fontSize: '14px', padding: '4px 8px', borderRadius: '4px', backgroundColor: colors.warning, color: colors.secondary, fontWeight: 'normal' }}>
                        {isSubscribed ? 'Active' : 'Upgrade Required'}
                    </span>
                </h1>
            </header>

            {/* Upgrade Required Banner */}
            {!isSubscribed && (
                <div style={styles.upgradeBanner}>
                    <h2 style={styles.bannerTitle}>Unlock Growth with Vendor Promotions!</h2>
                    <p style={styles.bannerText}>
                        This feature allows you to significantly boost your product visibility and store traffic. Upgrade now to start your campaigns.
                    </p>
                    <button 
                        style={styles.upgradeButton}
                        onClick={() => alert('Navigate to Upgrade/Subscription Page')}
                    >
                        Upgrade Promotion Package
                    </button>
                </div>
            )}

            {/* Core Actions (Disabled/Preview State) */}
            <div style={styles.actionsContainer}>
                {/* Promote Product Card */}
                <div style={styles.actionCard}>
                    <div style={styles.cardIcon}>✨</div>
                    <h3 style={styles.cardTitle}>Promote Product</h3>
                    <p style={styles.cardDescription}>
                        Run targeted ads to increase sales for specific items in your catalog.
                    </p>
                    <button style={styles.cardButton} disabled>
                        Promote (Upgrade)
                    </button>
                </div>

                {/* Boost Store Card */}
                <div style={styles.actionCard}>
                    <div style={styles.cardIcon}>📈</div>
                    <h3 style={styles.cardTitle}>Boost Store</h3>
                    <p style={styles.cardDescription}>
                        Drive high-level traffic directly to your storefront homepage and brand.
                    </p>
                    <button style={styles.cardButton} disabled>
                        Boost (Upgrade)
                    </button>
                </div>

                {/* Ads Performance Card */}
                <div style={styles.actionCard}>
                    <div style={styles.cardIcon}>📊</div>
                    <h3 style={styles.cardTitle}>Ads Performance</h3>
                    <p style={styles.cardDescription}>
                        View detailed metrics, analytics, and ROI for all your running campaigns.
                    </p>
                    <button 
                        style={styles.cardButton} 
                        // If it's a paid feature, keep it disabled
                        disabled 
                        // If it were active: style={styles.activeCardButton}
                    >
                        View Performance (Upgrade)
                    </button>
                </div>
            </div>

            {isSubscribed && (
                <p style={{marginTop: '30px', textAlign: 'center', color: colors.secondary}}>
                    *Your promotion package is currently active.
                </p>
            )}
        </div>
    );
}

export default Promotion;