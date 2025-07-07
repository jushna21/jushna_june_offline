import React from 'react';

export default function Featured() {
  return (
    <>
      <h2 className="featured-title">Trendy Wear Collections</h2>
      <section className="featured-gifts">
        <div className="gift-item">
          <img src="/hairclip.jpeg" alt="Hairclip" />
          <h3>Hairclip collections</h3>
        </div>
        <div className="gift-item">
          <img src="/bangles.jpeg" alt="Bangles" />
          <h3>Bangles</h3>
        </div>
        <div className="gift-item">
          <img src="/necklace.jpeg" alt="Necklace" />
          <h3>Necklaces</h3>
        </div>
        <div className="gift-item">
          <img src="/earring.jpeg" alt="Earrings" />
          <h3>Earrings</h3>
        </div>
      </section>
    </>
  );
}
