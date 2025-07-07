import React from 'react';
import '../index.css'; // move styles here or keep them inline
import { Link } from 'react-router-dom';

const earrings = [
  { name: 'Party wear Earrings', price: 350.00, img: 'e1.jpeg' },
  { name: 'Colourful Beaded Earrings', price: 400.00, img: 'e2.jpeg' },
  { name: 'Tourmaline Stone Earrings', price: 285.00, img: 'e3.jpeg' },
  { name: 'Textured Rectangular Earrings', price: 331.00, img: 'e4.jpeg' },
  { name: 'Sapphire Diamond Earrings', price: 1600.00, img: 'e5.jpeg' },
];

export default function Earrings() {
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

      <h1 style={{ textAlign: 'center', margin: '30px' }}>Earrings Collection</h1>
      <div className="gift-grid">
        {earrings.map((item, index) => (
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

      <div className="footer">
        <p>&copy; 2024 Fashion Boutique. All rights reserved.</p>
      </div>
    </div>
  );
}
