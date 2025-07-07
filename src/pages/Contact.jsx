import React from 'react';
import Navbar from '../components/Navbar';
import '../index.css';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <>
      <Navbar />
      <div className="contact-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footer">
        <p>&copy; 2024 Fashion Boutique. All rights reserved.</p>
      </div>
    </>
  );
}
