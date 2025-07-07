import React, { useEffect, useState } from 'react';

export default function Receipt() {
  const [receipt, setReceipt] = useState({
    customerName: '',
    phoneNumber: '',
    address: '',
    paymentMethod: '',
    itemName: '',
    itemPrice: 0
  });

  useEffect(() => {
    const customerName = localStorage.getItem('customerName') || 'N/A';
    const phoneNumber = localStorage.getItem('phoneNumber') || 'N/A';
    const address = localStorage.getItem('address') || 'N/A';
    const paymentMethod = localStorage.getItem('paymentMethod') || 'N/A';
    const itemName = localStorage.getItem('itemName') || 'Item Not Selected';
    const itemPrice = parseFloat(localStorage.getItem('itemPrice')) || 0;

    setReceipt({
      customerName,
      phoneNumber,
      address,
      paymentMethod,
      itemName,
      itemPrice
    });
  }, []);

  return (
    <div>
      <div className="navbar" style={navbarStyle}>
        <div className="brand" style={brandStyle}>Fashion Boutique</div>
        <ul style={navListStyle}>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/accessories.html">Accessories</a></li>
          <li><a href="/branch.html">Our Branch</a></li>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div style={containerStyle}>
        <h1 style={{ textAlign: 'center' }}>Order Receipt</h1>
        <div style={itemStyle}><span><strong>Name:</strong></span> {receipt.customerName}</div>
        <div style={itemStyle}><span><strong>Phone Number:</strong></span> {receipt.phoneNumber}</div>
        <div style={itemStyle}><span><strong>Address:</strong></span> {receipt.address}</div>
        <div style={itemStyle}><span><strong>Payment Method:</strong></span> {receipt.paymentMethod}</div>
        <div style={itemStyle}><span><strong>Item:</strong></span> {receipt.itemName}</div>
        <div style={itemStyle}><span><strong>Price:</strong></span> ₹{receipt.itemPrice.toFixed(2)}</div>
        <div style={{ ...itemStyle, fontWeight: 'bold', color: 'black' }}>
          <span><strong>Total Amount:</strong></span> ₹{receipt.itemPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

const navbarStyle = {
  backgroundColor: 'pink',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const brandStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '48px',
  fontWeight: 'bold',
  color: 'black',
  marginRight: '20px'
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '15px'
};

const containerStyle = {
  maxWidth: '500px',
  margin: '20px auto',
  background: 'pink',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  textAlign: 'left'
};

const itemStyle = {
  margin: '10px 0'
};
