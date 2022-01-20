import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Navigation } from '../components';
import { LandingPage, ProductPage, ShoppingCart } from '../pages';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
