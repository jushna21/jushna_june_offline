import React from 'react';

export default function HeroImages() {
  return (
    <div className="hero-images">
      <div>
        <img src="/sarees.jpeg" alt="Sarees" className="hero-img" />
        <h3>Sarees</h3>
      </div>
      <div>
        <img src="/handbag.jpeg" alt="Handbags" className="hero-img" />
        <h3>Handbags</h3>
      </div>
      <div>
        <img src="/sandal.jpeg" alt="Sandals" className="hero-img" />
        <h3>Sandals</h3>
      </div>
      <div>
        <img src="/watch.jpeg" alt="Luxury Watch" className="hero-img" />
        <h3>Luxury Watch</h3>
      </div>
    </div>
  );
}
