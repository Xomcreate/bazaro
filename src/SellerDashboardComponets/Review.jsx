import React, { useState } from 'react';

// Define the consistent color palette
const colors = {
  primary: 'orangered',   // Highlight color for main actions, ratings stars, and status
  secondary: 'black',     // Text, borders, main structure
  background: 'white',    // Page background
  lightText: 'white',     // Text on primary/secondary background
  border: '#ddd',         // Light border for review cards
  star: 'gold',           // Gold is standard for stars (neutral addition)
};

// Dummy Data
const dummyReviews = [
  { id: 1, product: 'Espresso Beans', rating: 5, customer: 'Liam K.', date: '2025-12-09', comment: 'Excellent flavor and fast shipping!', status: 'New' },
  { id: 2, product: 'French Press', rating: 3, customer: 'Olivia R.', date: '2025-12-08', comment: 'The press works fine, but shipping took too long.', status: 'Replied' },
  { id: 3, product: 'Drip Bags', rating: 5, customer: 'Noah B.', date: '2025-12-07', comment: 'My favorite coffee! Always fresh.', status: 'New' },
  { id: 4, product: 'Burr Grinder', rating: 1, customer: 'Emma S.', date: '2025-12-06', comment: 'Received broken. Needs better packaging.', status: 'New' },
];

const overallRating = 4.0;
const totalReviews = 45;

// Helper component for displaying stars
const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span 
                key={i} 
                style={{ color: i <= rating ? colors.star : colors.border, fontSize: '20px', marginRight: '2px' }}
            >
                ★
            </span>
        );
    }
    return <div style={{ display: 'inline-block' }}>{stars}</div>;
};

// Define styles for the Review Management page
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
  // --- Summary Card ---
  summaryCard: {
    marginBottom: '30px',
    padding: '20px',
    border: `1px solid ${colors.primary}`,
    borderRadius: '8px',
    backgroundColor: '#fff7f5', // Light orangered background
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  overallScore: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: colors.primary,
  },
  summaryText: {
    fontSize: '16px',
    color: colors.secondary,
  },
  // --- Filter and Sort Controls ---
  controls: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
  },
  filterButton: (isActive) => ({
    backgroundColor: isActive ? colors.primary : colors.background,
    color: isActive ? colors.lightText : colors.secondary,
    border: `1px solid ${colors.secondary}`,
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  }),
  // --- Review Card ---
  reviewCard: {
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '15px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    borderBottom: `1px dashed ${colors.border}`,
    paddingBottom: '10px',
  },
  reviewMeta: {
    fontSize: '14px',
    color: colors.secondary,
  },
  commentText: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: colors.secondary,
    marginBottom: '15px',
  },
  statusIndicator: (status) => ({
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '3px',
    fontWeight: 'bold',
    backgroundColor: status === 'New' ? colors.primary : colors.secondary,
    color: colors.lightText,
  }),
  responseButton: (isReplied) => ({
    backgroundColor: isReplied ? colors.secondary : colors.primary,
    color: colors.lightText,
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  }),
  vendorResponse: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderLeft: `3px solid ${colors.primary}`,
    borderRadius: '4px',
    fontSize: '14px',
    color: colors.secondary,
  }
};

function Review() {
    const [filter, setFilter] = useState('All');

    const filteredReviews = dummyReviews.filter(review => {
        if (filter === 'All') return true;
        if (filter === 'Needs Reply' && review.status === 'New') return true;
        if (filter === 'Replied' && review.status === 'Replied') return true;
        return false;
    });

    const filterOptions = ['All', 'Needs Reply', 'Replied'];

    return (
        <div style={styles.container}>
            {/* Header */}
            <header style={styles.header}>
                <h1 style={styles.title}>★ Product & Store Reviews</h1>
            </header>

            {/* Overall Rating Summary */}
            <div style={styles.summaryCard}>
                <div style={styles.ratingBlock}>
                    <p style={styles.overallScore}>{overallRating.toFixed(1)}</p>
                    <div>
                        <StarRating rating={overallRating} />
                        <p style={styles.summaryText}>based on {totalReviews} total ratings</p>
                    </div>
                </div>
                {/* Optional: Add a link to external review page */}
                <button 
                    style={styles.responseButton(false)} 
                    onClick={() => alert('Export Reviews')}
                >
                    Download Report
                </button>
            </div>

            {/* Filter Controls */}
            <div style={styles.controls}>
                <span style={{ fontSize: '16px', fontWeight: 'bold', color: colors.secondary }}>Filter Reviews:</span>
                {filterOptions.map(option => (
                    <button
                        key={option}
                        style={styles.filterButton(filter === option)}
                        onClick={() => setFilter(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>

            {/* Review List */}
            <main>
                {filteredReviews.length > 0 ? (
                    filteredReviews.map(review => (
                        <div key={review.id} style={styles.reviewCard}>
                            <div style={styles.cardHeader}>
                                <div>
                                    <StarRating rating={review.rating} />
                                    <p style={{ ...styles.reviewMeta, marginTop: '5px' }}>
                                        **{review.customer}** reviewing **{review.product}**
                                    </p>
                                </div>
                                <div>
                                    <span style={styles.statusIndicator(review.status)}>
                                        {review.status === 'New' ? 'Needs Reply' : 'Replied'}
                                    </span>
                                    <p style={{ ...styles.reviewMeta, textAlign: 'right', marginTop: '5px' }}>{review.date}</p>
                                </div>
                            </div>
                            
                            <p style={styles.commentText}>
                                **Comment:** "{review.comment}"
                            </p>

                            {review.status === 'Replied' && (
                                <div style={styles.vendorResponse}>
                                    **Your Reply:** Thank you for your feedback! We are actively working on improving our shipping speed.
                                </div>
                            )}

                            <button
                                style={styles.responseButton(review.status === 'Replied')}
                                onClick={() => alert(`Action: ${review.status === 'New' ? 'Reply to' : 'Edit Reply for'} Review #${review.id}`)}
                            >
                                {review.status === 'New' ? 'Reply to Review' : 'View/Edit Reply'}
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', marginTop: '20px', color: colors.secondary }}>No reviews match the current filter settings.</p>
                )}
            </main>
        </div>
    );
}

export default Review;