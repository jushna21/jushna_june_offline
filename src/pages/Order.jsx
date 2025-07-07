import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Order() {
  const navigate = useNavigate();

  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    payment: 'cash',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: ''
  });

  // Get item & price from localStorage on mount
  useEffect(() => {
    setItem(localStorage.getItem('itemName') || '');
    setPrice(localStorage.getItem('itemPrice') || '');
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill in all required fields.");
      return;
    }

    // If online payment, validate card details
    if (form.payment === 'online') {
      if (!form.cardNumber || !form.expiryDate || !form.cvv) {
        alert("Please fill in all card details for online payment.");
        return;
      }
    }

    // Navigate to receipt page with query params
    const queryParams = new URLSearchParams({
      name: form.name,
      phone: form.phone,
      payment: form.payment,
      address: form.address,
      item,
      price
    }).toString();

    navigate(`/receipt?${queryParams}`);
  };

  return (
    <div>
      <div className="navbar">
        <div className="brand">Fashion Boutique</div>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/accessories.html">Accessories</a></li>
          <li><a href="/branch.html">Our Branch</a></li>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
        </ul>
      </div>

      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Order Form</h2>

      <div className="order-form" style={formStyle}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={form.name} onChange={handleChange} required />

          <label htmlFor="phone">Phone Number:</label>
          <input id="phone" type="tel" value={form.phone} onChange={handleChange} required />

          <label htmlFor="payment">Payment Method:</label>
          <select id="payment" value={form.payment} onChange={handleChange}>
            <option value="cash">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>

          {form.payment === 'online' && (
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input id="cardNumber" type="text" value={form.cardNumber} onChange={handleChange} maxLength="16" placeholder="Enter card number" />

              <label htmlFor="expiryDate">Expiry Date:</label>
              <input id="expiryDate" type="text" value={form.expiryDate} onChange={handleChange} maxLength="5" placeholder="MM/YY" />

              <label htmlFor="cvv">CVV:</label>
              <input id="cvv" type="text" value={form.cvv} onChange={handleChange} maxLength="3" placeholder="CVV" />
            </div>
          )}

          <label htmlFor="address">Address:</label>
          <input id="address" type="text" value={form.address} onChange={handleChange} required />

          <button type="submit" className="submit-button" style={submitStyle}>Submit Order</button>
        </form>
      </div>
    </div>
  );
}

// Inline CSS styles
const formStyle = {
  maxWidth: '500px',
  margin: '0 auto',
  background: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
};

const submitStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  width: '100%'
};
