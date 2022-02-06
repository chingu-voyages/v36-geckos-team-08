import React from 'react';
import { useParams } from 'react-router-dom';

const product = {
  name: 'Unicorn Blend',
  price: 14,
  image:
    'https://cdn.shopify.com/s/files/1/0424/8862/7355/products/CT_PRODUCTS_SOCIAL_DOG_000-SRP-C.jpg?v=1634327763',
  description:
    ' light-to-medium roast with bright acidity and smoothly balanced flavors. Our most popular blend to flavor your morning.',
  roast: 'dark'
};

export const ProductPage = (props: any) => {
  const { id } = useParams();

  const handleAddToCart = () => {
    //add to cart
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-100 py-10 h-4/5 w-full">
        <div className="flex flex-col sm:flex-row h-full max-w-6xl items-center py-20 justify-center md:justify-between mx-auto sm:px-12 lg:px-24">
          <div className="mb-10 w-8/12 lg:w-10/12">
            <img
              src={product.image || 'http://tny.im/rbC'}
              alt=""
              className="w-full"
            />
          </div>
          <section className="w-9/12 sm:ml-[10%]">
            <div className="mb-4 md:mb-10">
              <p className="font-bold text-lg mb-3">
                {product.name || 'cofffe-name'}
              </p>
              <p className="uppercase mb-3 text-sm">$ price/bag size</p>
              <p className="text-sm">
                {product.description ||
                  'Excepteur sint occaecat cupidatat non proident'}
              </p>
            </div>
            <div className="w-full flex justify-center pr-5">
              <button
                className="p-1 px-4 bg-gray-300 text-sm md:text-md rounded-md mr-8"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="p-1 px-4 bg-gray-300 text-sm md:text-md rounded-md">
                View Cart
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
