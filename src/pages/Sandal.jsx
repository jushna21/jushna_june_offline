import React from 'react';
import Navbar from '../components/Navbar';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export default function Sandal() {
  const navigate = useNavigate();

  const sandalData = [
    { name: "Flat Sandals", price: 1999.00, img: "s1.jpeg" },
    { name: "Beige Heels", price: 1429.00, img: "s2.jpeg" },
    { name: "White Lace Sandals", price: 2199.00, img: "s3.jpeg" },
    { name: "Leather Wedges", price: 1399.00, img: "s4.jpeg" },
    { name: "Tan Heels", price: 949.00, img: "s5.jpeg" }
  ];

  const buyNow = (name, price) => {
    localStorage.setItem('itemName', name);
    localStorage.setItem('itemPrice', price);
    navigate('/order'); 
  };

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center', margin: '30px' }}>Sandals Collection</h1>
      <div className="gift-grid">
        {sandalData.map((item, index) => (
          <div className="gift-item" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price.toFixed(2)}</p>
            <button className="btn" onClick={() => buyNow(item.name, item.price)}>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
}
