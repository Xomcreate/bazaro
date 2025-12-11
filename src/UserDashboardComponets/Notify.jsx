import React from 'react';
// Assuming you have an icon library like react-icons or equivalent
// For simplicity, we'll use placeholder text/emoji for icons

// --- Define Colors & Styles ---
const COLORS = {
  primary: '#007bff', // Standard Blue for links and badges
  background: '#f4f7f9', // Light Gray background
  card: '#ffffff', // White card background
  text: '#333333', // Dark Gray text
  unreadHighlight: '#e6f2ff', // Very light blue for unread background
  border: '#dddddd', // Light border
};

function Notify() {
  // Placeholder Data for Notifications
  const notifications = [
    { 
      id: 1, 
      type: 'Order', 
      message: 'Your order #12345 has been shipped!', 
      time: '2 hours ago', 
      isRead: false,
      icon: '📦', 
      link: '/orders/12345'
    },
    { 
      id: 2, 
      type: 'Promotion', 
      message: 'Exclusive 20% off coupon just for you!', 
      time: '1 day ago', 
      isRead: false,
      icon: '🏷️', 
      link: '/promotions'
    },
    { 
      id: 3, 
      type: 'System', 
      message: 'Security update: Please verify your account details.', 
      time: '2 days ago', 
      isRead: true,
      icon: '🛡️', 
      link: '/settings/security'
    },
    { 
      id: 4, 
      type: 'Message', 
      message: 'New response from seller on your inquiry.', 
      time: '3 days ago', 
      isRead: true,
      icon: '💬', 
      link: '/messages/456'
    },
  ];

  // --- Style Objects ---
  const styles = {
    // Main Layout Container
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: COLORS.background,
      fontFamily: 'Roboto, Arial, sans-serif',
      padding: '40px',
      gap: '20px',
    },
    // Notification List Area
    mainContent: {
      flex: 3,
      padding: '20px',
      backgroundColor: COLORS.card,
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    // Sidebar for Categories/Filters
    sidebar: {
      flex: 1,
      minWidth: '250px',
      padding: '20px 0',
      backgroundColor: COLORS.card,
      borderRadius: '8px',
      height: 'fit-content', // Only takes up needed space
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    // Main Notification Header
    header: {
      fontSize: '2rem',
      color: COLORS.text,
      marginBottom: '25px',
      padding: '0 20px',
    },
    // Notification List Item (Card)
    notificationItem: (isRead) => ({
      display: 'flex',
      alignItems: 'center',
      padding: '15px 20px',
      marginBottom: '10px',
      borderBottom: `1px solid ${COLORS.border}`,
      cursor: 'pointer',
      backgroundColor: isRead ? COLORS.card : COLORS.unreadHighlight,
      transition: 'background-color 0.2s',
      // Hover effect:
      ':hover': {
        backgroundColor: COLORS.border,
      },
    }),
    // Icon Area
    iconContainer: {
      fontSize: '1.5rem',
      marginRight: '15px',
    },
    // Text Content Area
    textContent: {
      flexGrow: 1,
      color: COLORS.text,
    },
    // Unread Indicator Dot
    unreadDot: {
      width: '8px',
      height: '8px',
      backgroundColor: COLORS.primary,
      borderRadius: '50%',
      marginRight: '15px',
      flexShrink: 0, // Prevents it from shrinking
    },
    // Sidebar Filter Button
    filterButton: (isActive) => ({
      display: 'block',
      width: '100%',
      padding: '12px 20px',
      textAlign: 'left',
      backgroundColor: isActive ? COLORS.unreadHighlight : 'transparent',
      color: isActive ? COLORS.primary : COLORS.text,
      border: 'none',
      fontWeight: isActive ? 'bold' : 'normal',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      // Hover effect:
      ':hover': {
        backgroundColor: COLORS.unreadHighlight,
      },
    }),
  };

  return (
    <div style={styles.container}>
      
      {/* --- LEFT SIDEBAR: Filters/Categories --- */}
      <div style={styles.sidebar}>
        <h3 style={{ padding: '0 20px', color: COLORS.text, marginBottom: '15px', borderBottom: `1px solid ${COLORS.border}`, paddingBottom: '10px' }}>
          Filters
        </h3>
        {/* Placeholder for filtering buttons/links */}
        <button style={styles.filterButton(true)}>All Notifications</button>
        <button style={styles.filterButton(false)}>Unread Only</button>
        <button style={styles.filterButton(false)}>Orders</button>
        <button style={styles.filterButton(false)}>Promotions</button>
        <button style={styles.filterButton(false)}>System</button>
      </div>

      {/* --- MAIN CONTENT: Notification List --- */}
      <div style={styles.mainContent}>
        <h1 style={styles.header}>Notifications</h1>
        
        {notifications.map((notif) => (
          // Applying dynamic styling based on the read status
          <a key={notif.id} href={notif.link} style={{ textDecoration: 'none', display: 'block' }}>
            <div 
              // Using object spreading to apply dynamic styles. In a real app, use CSS classes.
              style={{...styles.notificationItem(notif.isRead), ...(notif.isRead ? {} : {borderLeft: `5px solid ${COLORS.primary}`})}}
              // You would handle the click logic here to mark as read
              >
              
              {/* Conditional Unread Dot */}
              {!notif.isRead && <div style={styles.unreadDot}></div>}

              {/* Icon */}
              <div style={styles.iconContainer}>{notif.icon}</div>

              {/* Message Content */}
              <div style={styles.textContent}>
                <p style={{ fontWeight: notif.isRead ? 'normal' : 'bold', margin: '0' }}>{notif.message}</p>
              </div>

              {/* Timestamp */}
              <p style={{ fontSize: '0.9rem', color: '#6c757d', marginLeft: '20px', flexShrink: 0 }}>
                {notif.time}
              </p>
            </div>
          </a>
        ))}
        
        {/* 'Mark All As Read' Button */}
        <div style={{ textAlign: 'right', marginTop: '20px', paddingRight: '20px' }}>
            <button style={{ 
                backgroundColor: 'transparent', 
                color: COLORS.primary, 
                border: 'none', 
                cursor: 'pointer',
                fontWeight: 'bold',
                padding: '10px',
                borderBottom: `2px dashed ${COLORS.primary}`
            }}>
                Mark All As Read
            </button>
        </div>
      </div>
      
    </div>
  );
}

export default Notify;