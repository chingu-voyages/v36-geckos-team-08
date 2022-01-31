import React from 'react';
import { Hero } from '../components';
import { ProductCard } from '../components/ProductCard';

export const LandingPage = () => {
  return (
    <div className="mb-20">
      <Hero />
      <div className="px-12 lg:px-0 flex w-full justify-between max-w-6xl mx-auto flex-wrap">
        <ProductCard
          image="https://cdn.shopify.com/s/files/1/0424/8862/7355/products/CT_PRODUCTS_SOCIAL_DOG_000-SRP-C.jpg?v=1634327763"
          type="Bold/Medium"
          price={25}
          id="bold-coffee"
        />
        <ProductCard
          image="https://cdn.shopify.com/s/files/1/0424/8862/7355/products/CT_PRODUCTS_SOCIAL_DOG_000-SRP-C.jpg?v=1634327763"
          type="Bold/Medium"
          price={25}
          id="bold-coffee"
        />
        <ProductCard
          image="https://cdn.shopify.com/s/files/1/0424/8862/7355/products/CT_PRODUCTS_SOCIAL_DOG_000-SRP-C.jpg?v=1634327763"
          type="Bold/Medium"
          price={25}
          id="bold-coffee"
        />
      </div>
    </div>
  );
};
