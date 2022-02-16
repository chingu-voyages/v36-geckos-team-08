import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { BasicForm, PaymentForm, OrderSummary } from './Forms';

import { checkoutFormModel } from './FormModel/checkoutFormModel';
import { initialValues } from './FormModel/initialValues';
import { useCart } from 'hooks';
import { validationScheme } from './FormModel/validationScheme';

export const Checkout = () => {
  const { formId, formFields } = checkoutFormModel;
  const cart = useCart();

  const handlOnSubmit = async (values: any, actions: any) => {
    await new Promise((r) => setTimeout(r, 500));
    alert('Thank you for your order.');
  };

  return (
    <>
      <nav className="bg-white shadow mb-10">
        <div className="px-6 py-4 mx-auto max-w-6xl md:flex md:justify-between md:items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-black transition-colors duration-200 transform  lg:text-3xl hover:text-gray-600"
          >
            Coffee Shop
          </Link>
        </div>
      </nav>
      <Formik
        validationSchema={validationScheme}
        initialValues={initialValues}
        onSubmit={handlOnSubmit}
      >
        <Form
          id={formId}
          className="px-6 md:px-12 lg:px-0 mx-auto max-w-6xl flex flex-col md:flex-row justify-between gap-4"
        >
          <section className="md:w-4/6 flex flex-col mb-5">
            <div className="border rounded-md p-4 mb-2">
              <h2 className="mb-6 font-bold text-lg">Contact Information</h2>
              <BasicForm isContactForm formFields={formFields.contact} />
            </div>
            <div className="border rounded-md p-4 pb-0">
              <h2 className="mb-6 font-bold text-lg">Shipping Address</h2>
              <BasicForm isShippingForm formFields={formFields.shipping} />
            </div>
          </section>
          <section className="flex flex-col gap-6 md:pl-5 md:w-2/6 mb-5">
            <PaymentForm formFields={formFields.payment} />
            <OrderSummary subtotal={cart?.cart?.subtotal?.raw} />
          </section>
        </Form>
      </Formik>
    </>
  );
};
