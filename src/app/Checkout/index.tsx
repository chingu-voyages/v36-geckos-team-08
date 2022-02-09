import React from 'react';
import { Link } from 'react-router-dom';
import { OrderSummary } from './OrderSummary';
import { Payment } from './Payment';
import { ShippingForm } from './ShippingForm';

export const Checkout = () => {
  return (
    <>
      <nav className="bg-white shadow mb-10">
        <div className="px-6 py-4 mx-auto max-w-6xl md:flex md:justify-between md:items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-black transition-colors duration-200 transform  lg:text-3xl hover:text-gray-600 "
          >
            Coffee Shop
          </Link>
        </div>
      </nav>
      <section className="px-14 mx-auto max-w-6xl flex justify-between">
        <section className="w-3/6">
          <ShippingForm />
        </section>
        <section className="flex flex-col gap-6 pl-5 w-2/6">
          <Payment />
          <OrderSummary />
        </section>
      </section>
    </>
  );
};
