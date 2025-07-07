import React from 'react';
import '../index.css'; 

export default function Handbags() {
  const handleBuyNow = (itemName, itemPrice) => {
    localStorage.setItem('itemName', itemName);
    localStorage.setItem('itemPrice', itemPrice);
  };

  const handbags = [
    {
      name: 'Louis Vuitton Handbag',
      price: 11499,
      image: 'w1.jpeg'
    },
    {
      name: 'Gucci Handbag',
      price: 2650,
      image: 'w2.jpeg'
    },
    {
      name: 'Black Slingbag',
      price: 1590,
      image: 'w3.jpeg'
    },
    {
      name: 'Louis Perros Pink Handbag',
      price: 1449,
      image: 'w4.jpeg'
    },
    {
      name: 'Leather Handbag',
      price: 1300,
      image: 'w5.jpeg'
    }
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

      <h1 style={{ textAlign: 'center', margin: '30px' }}>Handbag Collection</h1>

      <div className="gift-grid">
        {handbags.map((bag, index) => (
          <div className="gift-item" key={index}>
            <img src={bag.image} alt={bag.name} />
            <h3>{bag.name}</h3>
            <p className="price">₹{bag.price.toFixed(2)}</p>
            <a href="/order.html" className="btn" onClick={() => handleBuyNow(bag.name, bag.price)}>Buy Now</a>
          </div>
        ))}
      </div>
    </div>
  );
}
