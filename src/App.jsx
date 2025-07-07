import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Accessories from './pages/Accessories';
import Branches from './pages/Branches';
import About from './pages/About';
import Contact from './pages/Contact';
import Bangle from './pages/Bangle';
import Earring from './pages/Earring';
import Hairclip from './pages/Hairclip';
import Handbag from './pages/Handbag';
import Necklace from './pages/Necklace';
import Order from './pages/Order';
import Receipt from './pages/Receipt';
import Sandal from './pages/Sandal';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bangle" element={<Bangle />} />
        <Route path="/earring" element={<Earring />} />
        <Route path="/hairclip" element={<Hairclip />} />
        <Route path="/handbag" element={<Handbag />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/order" element={<Order />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/sandal" element={<Sandal />} />
      </Routes>
    </BrowserRouter>
  );
}
