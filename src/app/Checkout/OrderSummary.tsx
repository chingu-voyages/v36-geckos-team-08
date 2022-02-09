import React from 'react';

export const OrderSummary = () => {
  return (
    <div className="border-gray-300 rounded-md border px-4 pt-2">
      <p className="text-md font-semibold pb-4">Summary</p>
      <div className="flex flex-col gap-2 pb-2 border-b-2">
        <small className="flex justify-between">
          Subtotal <span>amount</span>
        </small>
        <small className="flex justify-between">
          Shipping <span>amount</span>
        </small>
        <small className="flex justify-between">
          Tax <span>amount</span>
        </small>
      </div>
      <p className="flex justify-between">
        Grand Total: <span>amount</span>
      </p>
      <div className="flex flex-wrap">
        <input type="checkbox" className="w-3 h-3 rounded-sm" />
        <span>Please check to aknowledge out Privacy & Terms Policy</span>
      </div>
    </div>
  );
};
