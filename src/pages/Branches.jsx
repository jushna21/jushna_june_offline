import React from 'react';
import Navbar from '../components/Navbar';
import '../index.css';

export default function Branches() {
  const branches = [
    {
      name: 'Chennai',
      address: '123 Fashion Street, Chennai',
      contact: '9876543210',
    },
    {
      name: 'Coimbatore',
      address: '456 Stylish Avenue, Coimbatore',
      contact: '9876543211',
    },
    {
      name: 'Madurai',
      address: '789 Elegant Blvd, Madurai',
      contact: '9876543212',
    },
    {
      name: 'Tiruchirappalli',
      address: '321 Prestige Lane, Tiruchirappalli',
      contact: '9876543213',
    },
    {
      name: 'Erode',
      address: '654 Glamour St, Erode',
      contact: '9876543214',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="branches">
        <h2>Our Branches</h2>
        <div className="branches-container">
          {branches.map((branch, index) => (
            <div className="branch-box" key={index}>
              <h3>{branch.name}</h3>
              <p>Address: {branch.address}</p>
              <p>Contact: {branch.contact}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="footer">
        <p>&copy; 2024 Fashion Boutique. All rights reserved.</p>
      </div>
    </>
  );
}
