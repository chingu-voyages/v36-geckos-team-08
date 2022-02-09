import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../components';
import { useCart } from '../hooks';

export const ShoppingCart = () => {
  const { cart, deleteItem, isLoading, updateQuantity }: any = useCart();

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-6 ">
        <h1 className="text-4xl font-semibold mt-12 pb-6 border-b-2 border-gray-500">
          Shopping Cart
        </h1>
        <h2 className="text-md my-6 mb-12 font-semibold">
          Not ready to checkout?
          <Link to="/shop" className="cursor-pointer pl-1 underline">
            Continue Shopping
          </Link>
        </h2>
        <div className="m-2 xl:mx-0">
          {isLoading ? (
            'loading'
          ) : (
            <>
              <div className="flex flex-col">
                {cart?.line_items.map((item: any) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    totalValue={item.line_total.formatted_with_symbol}
                    price={item.price.formatted_with_symbol}
                    quantity={item.quantity}
                    name={item.name}
                    image={item.image.url}
                    deleteItem={deleteItem}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </div>
              <div className="mb-20 flex flex-col items-end">
                <span className="text-xl mb-12">
                  Subtotal:
                  <span className="ml-2">
                    {cart?.subtotal.formatted_with_symbol}
                  </span>
                </span>
                <Link
                  to="/checkout"
                  className="p-2 px-6 bg-gray-300 text-xl md:text-md rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
