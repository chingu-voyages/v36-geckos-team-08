import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer, Navigation } from '../components';
import { CartProvider } from '../hooks';
import { LandingPage, ProductPage, ShopPage, ShoppingCart } from '../pages';

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col h-screen ">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
