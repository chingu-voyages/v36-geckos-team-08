import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Footer, Navigation } from '../components';
import { CartProvider } from '../hooks';
import { LandingPage, ProductPage, ShopPage, ShoppingCart } from '../pages';
import { Checkout } from './Checkout';

function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col h-screen ">
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<ShoppingCart />}>
              <Route index element={<>aa</>} />
            </Route>
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
