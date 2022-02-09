import React from 'react';
import { Link, useParams } from 'react-router-dom';
import commerce from '../api/commerce';
import { useCart } from '../hooks';

export const ProductPage = () => {
  const [product, setProduct] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const { addToCart }: any = useCart();
  const { id } = useParams();
  const productId = id as string;

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await commerce.products.retrieve(productId);
        setIsLoading(false);
        setProduct(response);
      } catch (error) {
        console.log(
          'There was an error getting the product information',
          error
        );
      }
    };
    getProduct();
  }, [productId]);

  const cleanDescription = product.description?.replace(/( |<([^>]+)>)/gi, ' ');

  const handleAddToCart = () => {
    addToCart(productId);
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 3000);
  };
  if (isLoading)
    return (
      <span className="h-screen flex w-full justify-center mt-20">
        isLoading
      </span>
    );
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-100 py-10 h-4/5 w-full">
        <div className="flex flex-col sm:flex-row h-full max-w-6xl items-center py-20 justify-center md:justify-between mx-auto sm:px-12 lg:px-24">
          <div className="mb-10 w-8/12 lg:w-10/12 rounded-lg overflow-auto">
            <img
              src={product.image?.url || 'http://tny.im/rbC'}
              alt=""
              className="w-full "
            />
          </div>
          <section className="w-9/12 sm:ml-[10%]">
            <div className="mb-4 md:mb-10">
              <p className="font-bold text-lg mb-3">
                {product.name || 'coffee-name'}
              </p>
              <p className="uppercase mb-3 text-sm">
                {product.price?.formatted_with_symbol || '$ Price'}
              </p>
              <p className="text-sm">
                {cleanDescription || 'description here'}
              </p>
            </div>
            <div className="w-full flex justify-center pr-5 flex-col">
              <div className="flex justify-center">
                <button
                  className="p-1 px-4 bg-gray-300 text-sm md:text-md rounded-md mr-8 hover:bg-gray-400 hover:text-white disabled:hover:bg-gray-300  disabled:hover:text-black disabled:cursor-not-allowed"
                  onClick={handleAddToCart}
                  disabled={isDisabled}
                >
                  Add to Cart
                </button>
                <button className="p-1 px-4 bg-gray-300 text-sm md:text-md rounded-md hover:bg-gray-400 hover:text-white ">
                  <Link to="/cart">View Cart</Link>
                </button>
              </div>
              {isDisabled && (
                <span className="m-auto text-green-600 text-sm">
                  Product added to cart!
                </span>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
