import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const hairclips = [
  { name: 'Rhinestone hairclip', price: 149.00, img: 'h1.jpeg' },
  { name: 'Hair Claw Clip', price: 448.00, img: 'h2.jpeg' },
  { name: 'Butterfly Claw Clip', price: 565.00, img: 'h3.jpeg' },
  { name: 'Crystalstone hairclip', price: 299.00, img: 'h4.jpeg' },
  { name: 'Korean Hairclip', price: 999.00, img: 'h5.jpeg' },
];

export default function Hairclips() {
  const buyNow = (itemName, itemPrice) => {
    localStorage.setItem('itemName', itemName);
    localStorage.setItem('itemPrice', itemPrice);
  };

  return (
    <div>
      <div className="navbar">
        <div className="brand">Fashion Boutique</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/branch">Our Branch</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <h1 style={{ textAlign: 'center', margin: '30px' }}>Hairclips Collections</h1>
      <div className="gift-grid">
        {hairclips.map((item, index) => (
          <div className="gift-item" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price.toFixed(2)}</p>
            <Link to="/order" className="btn" onClick={() => buyNow(item.name, item.price)}>
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
