import React from 'react';

interface ICustomNumberInputs {
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleOnChangeValue: (quantity: number) => void;
  quantity: number;
}

export const CustomNumberInput = (props: ICustomNumberInputs) => {
  return (
    <div className="custom-number-input h-8 w-28">
      <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
        <button
          className="text-lg flex justify-center items-center bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={props.handleDecrement}
        >
          −
        </button>
        <span className="outline-none focus:outline-none justify-center h-8 text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 ">
          {props.quantity}
        </span>
        <button
          className="text-lg flex justify-center items-center bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={props.handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};
