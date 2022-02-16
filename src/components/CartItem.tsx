import React from 'react';
import { CustomNumberInput } from './CustomNumberInput';

interface ICartItem {
  id: string;
  price: string | string;
  quantity: number;
  totalValue: number | string;
  name: string;
  image: string;
  deleteItem: (id: string, quantity: number) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
}

export const CartItem = (props: ICartItem) => {
  const handleIncrement = () => {
    let newQuantity = props.quantity + 1;
    props.updateQuantity(props.id, newQuantity);
  };
  const handleDecrement = () => {
    let newQuantity = props.quantity - 1;
    props.updateQuantity(props.id, newQuantity);
  };
  const handleOnChangeValue = (newQuantity: number) => {
    props.updateQuantity(props.id, newQuantity);
  };
  const handleRemove = () => {
    props.deleteItem(props.id, 1);
  };

  return (
    <div className="mb-12 max-h-28 md:max-h-48 flex justify-between">
      <div className="w-1/6 mr-4">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-32 object-contain"
        />
      </div>
      <div className="w-5/6 flex flex-col px-0 justify-between">
        <span className="text-xl font-bold flex-start">{props.name}</span>
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <span className="text-md font-semibold flex items-center mb-1 ">
              <span className="pr-1">Quantity:</span>
              <CustomNumberInput
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleOnChangeValue={handleOnChangeValue}
                quantity={props.quantity}
              />
            </span>
            <span className="text-lg font-bold">{props.price}</span>
          </div>
          <button
            className="underline hover:text-blue-600"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
