import React, { useState } from 'react';

// Define the consistent color palette
const colors = {
  primary: 'orangered',   // Highlight color for main buttons and active states
  secondary: 'black',     // Text, borders, main structure
  background: 'white',    // Page background
  lightText: 'white',     // Text on primary/secondary background
  border: '#ddd',         // Light border for cards/inputs
};

// Dummy State (for form field examples)
const initialSettings = {
  storeName: 'The Cozy Coffee Corner',
  storeDescription: 'Sourcing the finest single-origin coffee beans and brewing equipment since 2020.',
  workingHours: 'Mon - Fri: 9:00 AM - 5:00 PM',
  logoUrl: 'https://via.placeholder.com/100x100?text=Logo',
  bannerUrl: 'https://via.placeholder.com/800x200?text=Store+Banner',
};

// Define styles for the Shop Settings Page
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
  // --- Settings Cards Container ---
  settingsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two columns for primary settings
    gap: '30px',
  },
  settingsCard: {
    padding: '25px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    backgroundColor: colors.background,
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: colors.secondary,
    marginBottom: '20px',
    borderBottom: `2px solid ${colors.primary}`, // Orangered underbar for title
    paddingBottom: '5px',
  },
  // --- Form Elements ---
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: `1px solid ${colors.border}`,
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box',
    color: colors.secondary,
  },
  textarea: {
    minHeight: '80px',
    resize: 'vertical',
  },
  // --- Image / Media Styles ---
  imagePreviewContainer: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    marginBottom: '15px',
  },
  logoPreview: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: `2px solid ${colors.border}`,
  },
  bannerPreview: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '4px',
    border: `2px solid ${colors.border}`,
    marginBottom: '10px',
  },
  // --- Action Button ---
  saveButton: {
    backgroundColor: colors.primary,
    color: colors.lightText,
    border: 'none',
    padding: '12px 25px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
};

function ShopSet() {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Shop settings saved!');
    console.log('Saved settings:', settings);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>⚙️ Shop Settings</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div style={styles.settingsGrid}>
          {/* Card 1: Store Identity (Name/Logo/Description) */}
          <div style={styles.settingsCard}>
            <h2 style={styles.cardTitle}>Store Identity & Branding</h2>

            {/* Store Name */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="storeName">Store Name</label>
              <input
                type="text"
                id="storeName"
                name="storeName"
                style={styles.input}
                value={settings.storeName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Store Logo */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Store Logo</label>
              <div style={styles.imagePreviewContainer}>
                <img src={settings.logoUrl} alt="Store Logo" style={styles.logoPreview} />
                <button 
                    type="button" 
                    style={{ ...styles.saveButton, padding: '8px 15px', marginTop: 0 }}
                    onClick={() => alert('Upload Logo functionality')}
                >
                    Upload New Logo
                </button>
              </div>
            </div>

            {/* Store Description */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="storeDescription">Store Description</label>
              <textarea
                id="storeDescription"
                name="storeDescription"
                style={{ ...styles.input, ...styles.textarea }}
                value={settings.storeDescription}
                onChange={handleChange}
                maxLength={500}
              />
              <small style={{ color: colors.secondary }}>Max 500 characters. Visible on your store page.</small>
            </div>
          </div>

          {/* Card 2: Visuals and Operations (Banner/Hours) */}
          <div style={styles.settingsCard}>
            <h2 style={styles.cardTitle}>Visuals & Operations</h2>

            {/* Store Banner */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Store Banner (Header Image)</label>
              <img src={settings.bannerUrl} alt="Store Banner" style={styles.bannerPreview} />
              <button 
                  type="button" 
                  style={{ ...styles.saveButton, width: '100%', padding: '10px', marginTop: 0 }}
                  onClick={() => alert('Upload Banner functionality')}
              >
                  Change Banner Image
              </button>
              <small style={{ color: colors.secondary }}>Recommended size: 16:9 aspect ratio.</small>
            </div>

            {/* Working Hours */}
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="workingHours">Working Hours / Availability</label>
              <input
                type="text"
                id="workingHours"
                name="workingHours"
                style={styles.input}
                value={settings.workingHours}
                onChange={handleChange}
              />
              <small style={{ color: colors.secondary }}>e.g., Mon - Fri: 9am - 5pm EST</small>
            </div>
          </div>
        </div>
        
        {/* Main Save Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button type="submit" style={styles.saveButton}>
            Save All Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default ShopSet;