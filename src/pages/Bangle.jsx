import React from 'react';
import Navbar from '../components/Navbar';
import '../index.css';
import { useNavigate } from 'react-router-dom';

export default function Bangle() {
  const navigate = useNavigate();

  const bangleItems = [
    { name: "Stone Bangle", price: 519.00, img: "ba.jpeg" },
    { name: "Gemporia Bangles", price: 600.00, img: "b1.jpeg" },
    { name: "Diamond Bangles", price: 350.00, img: "b2.jpeg" },
    { name: "Wedding Bangles", price: 500.00, img: "b3.jpeg" },
    { name: "Antique Pearl Bangles", price: 800.00, img: "b4.jpeg" }
  ];

  const buyNow = (name, price) => {
    localStorage.setItem('itemName', name);
    localStorage.setItem('itemPrice', price);
    navigate('/order');
  };

  return (
    <>
      <Navbar />
      <h1>Bangles Collection</h1>
      <div className="gift-grid">
        {bangleItems.map((item, index) => (
          <div className="gift-item" key={index}>
            <img src={`/${item.img}`} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">₹{item.price.toFixed(2)}</p>
            <button className="btn" onClick={() => buyNow(item.name, item.price)}>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
}
