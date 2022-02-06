import React from 'react';
import commerce from '../api';

export const ShopPage = () => {
  const [listOfProducts, setListOfProducts] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const getProducts = async () => {
    try {
      const response = await commerce.products.list();
      setIsLoading(false);
      setListOfProducts(response.data);
    } catch (error) {
      console.log('There was an error getting the product information', error);
    }
  };
  getProducts();
  return <div className="h-screen flex flex-col "></div>;
};
