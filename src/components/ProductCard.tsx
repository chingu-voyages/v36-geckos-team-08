import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  image: string;
  type: string;
  price: string;
  alt?: string;
  isLoading?: boolean;
}

export const ProductCard = ({ id, image, type, price, alt }: Props) => {
  return (
    <div className="flex flex-col w-[30%] mb-8 hover:-translate-y-2 bg-transparent">
      <Link to={`product/${id}`}>
        <div className="shadow-md">
          <div className="mb-0.5">
            <img src={image} alt={alt} className="max-w-full h-full" />
          </div>
          <div className="flex p-2">
            <div className="flex flex-col">
              <span className="text-xs  mb-1.5">{type}</span>
              <span className="text-sm font-bold">${price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
