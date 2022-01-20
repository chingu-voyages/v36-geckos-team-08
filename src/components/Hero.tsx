import React from 'react';

export const Hero = () => {
  return (
    <div className=" bg-hero bg-cover from-amber-700">
      <div className="grid grid-cols-2">
        <div className="md:py-48 py-22 px-10 px-0 max-w-md mx-auto ">
          <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
            <span className="block">
              Ready to taste the best coffee of world?
            </span>
            <span className="block">Get yours now.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
