import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingPage, ProductPage, ShoppingCart } from '../pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}

export default App;
