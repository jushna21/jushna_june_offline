import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">Formal Boutique</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/branches">Our Branch</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
}
