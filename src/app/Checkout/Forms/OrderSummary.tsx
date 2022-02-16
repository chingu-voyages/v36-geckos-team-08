import React from 'react';

export const OrderSummary = (props: { subtotal: number }) => {
  const shipping = 3.19;
  const tax = (props.subtotal + shipping) * (2.9 / 100);
  const grandTotal = props.subtotal + shipping + tax;
  return (
    <div className="border-gray-300 rounded-md border px-4 pt-2">
      <p className="text-lg font-bold pb-4">Summary</p>
      <div className="flex flex-col gap-2 pb-2 border-b-2">
        <small className="flex justify-between">
          Subtotal <span>${props.subtotal?.toFixed(2)}</span>
        </small>
        <small className="flex justify-between">
          Shipping <span>${shipping}</span>
        </small>
        <small className="flex justify-between">
          Tax <span>${tax?.toFixed(2)}</span>
        </small>
      </div>
      <p className="flex justify-between text-sm font-bold py-3">
        Grand Total: <span>${grandTotal.toFixed(2)}</span>
      </p>
      <div className="flex items-center mb-4">
        <input type="checkbox" className="w-3 h-3 rounded-sm mr-2" />
        <span className="text-[0.7rem]">
          Please check to aknowledge out
          <a href="#_" className="text-blue-600 hover:underline pl-1">
            Privacy & Terms Policy
          </a>
        </span>
      </div>
      <div className="flex w-full justify-center">
        <button
          type="submit"
          className="mx-auto p-2 bg-blue-700 shadow-lg rounded-md text-white font-bold mb-3"
        >
          Pay ${grandTotal.toFixed(2)}
        </button>
      </div>
    </div>
  );
};
