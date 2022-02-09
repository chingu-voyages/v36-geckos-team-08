import React from 'react';
import { useFormik } from 'formik';

export const Payment = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: () => {}
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="checkout-form">
        <label className="label">Card Number</label>
        <input
          className="input pl-6 peer border-gray-200 placeholder-gray-300 "
          type="text"
          name="card_number"
          placeholder="MM/YY"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      </div>
      <div className="checkout-form">
        <label className="label">Expire Date</label>
        <input
          className="input pl-6 peer border-gray-200 placeholder-gray-300 "
          type="text"
          name="expire_date"
          placeholder="MM/YY"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
      <div className="checkout-form">
        <label>
          <span className="label font-bold flex items-center gap-3 mb-3">
            CVC/CVV
            <span className="relative group">
              <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                Hey ceci est une infobulle !
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </span>
          <input
            className="input pl-6 peer border-gray-200 placeholder-gray-300 "
            type="text"
            name="card_cvc"
            placeholder="&bull;&bull;&bull;"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </label>
      </div>
    </form>
  );
};
