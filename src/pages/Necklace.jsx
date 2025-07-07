import React from 'react';
import '../index.css'; 

export default function Necklaces() {
  const handleBuyNow = (itemName, itemPrice) => {
    localStorage.setItem('itemName', itemName);
    localStorage.setItem('itemPrice', itemPrice);
  };

  const necklaces = [
    { name: 'Emerald Necklace', price: 999.00, image: 'n1.jpeg' },
    { name: 'Diamond Necklace', price: 1390.00, image: 'n2.jpeg' },
    { name: 'Gold Necklace', price: 850.00, image: 'n3.jpeg' },
    { name: 'Pearl Necklace', price: 1400.00, image: 'n4.jpeg' },
    { name: 'Ruby Necklace', price: 1600.00, image: 'n5.jpeg' }
  ];

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

      <h1 style={{ textAlign: 'center', margin: '30px' }}>Necklace Collections</h1>

      <div className="gift-grid">
        {necklaces.map((item, index) => (
          <div className="gift-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price.toFixed(2)}</p>
            <a href="/order.html" className="btn" onClick={() => handleBuyNow(item.name, item.price)}>
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
