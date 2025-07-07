import React from 'react';
import Navbar from '../components/Navbar';
import '../index.css';
import { Link } from 'react-router-dom';

export default function Accessories() {
  const categories = [
    { name: "Bangles", path: "/bangle" },
    { name: "Necklaces", path: "/necklace" },
    { name: "Sandals", path: "/sandal" },
    { name: "Hairclips", path: "/hairclip" },
    { name: "Handbags", path: "/handbag" },
    { name: "Earrings", path: "/earring" },
  ];

  return (
    <>
      <Navbar />
      <h2>Our Accessories</h2>
      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-item" key={index}>
            <h3>{item.name}</h3>
            <Link to={item.path}>Explore</Link>
          </div>
        ))}
      </div>
    </>
  );
}
