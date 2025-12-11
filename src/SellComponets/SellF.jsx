import React, { useState } from 'react';

function SellF() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., sending to an API)
    console.log('Inquiry submitted:', formData);
    // Placeholder message box instead of alert()
    const messageBox = document.getElementById('inquiryMessageBox');
    if (messageBox) {
        messageBox.innerText = `Thank you, ${formData.name}! Your inquiry has been received. We will contact you shortly.`;
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
            // Optionally reset form
            setFormData({ name: '', email: '', phone: '', category: '', description: '', file: null });
        }, 5000);
    }
  };

  // Common styles
  const inputStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '20px',
    fontSize: '1em',
  };

  const primaryButtonStyle = {
    backgroundColor: 'orangered',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1em',
    transition: 'background-color 0.3s',
  };

  return (
    <div
      style={{
        backgroundColor: '#f9f9f9', // Light gray background
        padding: '80px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Inquiry Message Box */}
      <div 
          id="inquiryMessageBox" 
          style={{ 
              display: 'none', 
              backgroundColor: 'orangered', 
              color: 'white', 
              padding: '15px', 
              borderRadius: '8px', 
              textAlign: 'center', 
              marginBottom: '30px',
              maxWidth: '600px',
              margin: '0 auto 30px auto'
          }}
      >
          
      </div>

      {/* Main Container */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Headline */}
        <h2 style={{ fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', color: 'black' }}>
          Want to <span style={{ color: 'orangered' }}>Sell</span> on ErrandBox?
        </h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto', color: '#666' }}>
          Fill out the form below or contact us directly to start your partnership.
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '0' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ ...inputStyle, marginBottom: '20px' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ ...inputStyle, marginBottom: '20px' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '20px', marginBottom: '0' }}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              style={{ ...inputStyle, marginBottom: '20px' }}
            />
             <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              style={{ ...inputStyle, color: formData.category ? 'black' : '#666' }}
            >
              <option value="" disabled>Select Primary Product Category *</option>
              <option value="fashion">Fashion & Apparel</option>
              <option value="electronics">Electronics</option>
              <option value="home">Home Goods</option>
              <option value="handmade">Handmade/Crafts</option>
              <option value="other">Other</option>
            </select>
          </div>
         
          <textarea
            name="description"
            placeholder="Short Description of Your Business/Products *"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            style={{ ...inputStyle, resize: 'vertical' }}
          />

          {/* Optional File Upload */}
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#333' }}>
            Optional: Upload a Product Catalog/File
          </label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            style={{ ...inputStyle, border: 'none', marginBottom: '30px' }}
          />
          
          <button 
            type="submit" 
            style={{ 
              ...primaryButtonStyle, 
              width: '100%',
              backgroundColor: 'orangered',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#cc4d00')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'orangered')}
          >
            Submit Inquiry
          </button>
        </form>

        <div style={{ borderTop: '1px solid #eee', marginTop: '40px', paddingTop: '30px', textAlign: 'center' }}>
          <h3 style={{ color: 'black', marginBottom: '20px', fontSize: '1.2em' }}>
            Prefer Direct Contact?
          </h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {/* Email Button */}
            <a 
              href="mailto:partners@bazaro.com" 
              style={{ 
                ...primaryButtonStyle, 
                backgroundColor: 'black', 
                padding: '12px 20px', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#333')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'black')}
            >
              <span style={{ marginRight: '8px' }}>✉️</span> Email Support
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                ...primaryButtonStyle, 
                backgroundColor: 'orangered', 
                padding: '12px 20px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#cc4d00')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'orangered')}
            >
              <span style={{ marginRight: '8px' }}>📞</span> WhatsApp Us
            </a>
          </div>

          {/* Link to Registration Page */}
          <div style={{ marginTop: '30px' }}>
            <p style={{ color: '#666', marginBottom: '10px' }}>
              Ready to go? If you already have an account, or want to start immediately:
            </p>
            <a 
              href="/seller-registration" 
              style={{ 
                color: 'orangered', 
                fontWeight: 'bold', 
                textDecoration: 'underline',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => (e.target.style.color = 'black')}
              onMouseOut={(e) => (e.target.style.color = 'orangered')}
            >
              Go to the full Registration Page →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SellF;