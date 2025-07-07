import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css';

export default function About() {
  return (
    <>
      <Navbar />

      <section className="about-section">
        <h2>About Fashion Boutique</h2>
        <p>
          Fashion Boutique is dedicated to bringing you the finest selection of trendy wear.
          We pride ourselves on offering stylish, high-quality clothing and accessories
          for every special occasion.
        </p>
      </section>

      <Footer />
    </>
  );
}
