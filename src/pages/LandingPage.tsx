import React from 'react';
import { Hero } from '../components';

export const LandingPage = () => {
  return (
    <>
      <Hero />
      {/* 3 Products cards here list of 3 products, with price and name of the Blend underneath */}
      <div className=" my-12">Product Card</div>
      <div className=" my-12">Product Card</div>
      <div className=" my-12">Product Card</div>
    </>
  );
};
