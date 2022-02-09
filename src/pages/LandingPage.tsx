import React from 'react';
import commerce from '../api/commerce';
import { Hero } from '../components';
import { ProductCard } from '../components';

export const LandingPage = () => {
  const [products, setProducts] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await commerce.products.list({
          category_slug: ['top-rated']
        });
        setIsLoading(false);
        setProducts(response.data);
      } catch (error) {
        console.log(
          'There was an error getting the product information',
          error
        );
      }
    };
    getProducts();
  }, []);

  return (
    <div className="mb-20 ">
      <Hero />
      <div className="px-12 xl:px-0 flex w-full justify-between max-w-6xl mx-auto flex-wrap ">
        {isLoading ? (
          <span className="flex w-full justify-center mt-20">Loading...</span>
        ) : (
          products.map((item) => (
            <ProductCard
              key={item.id}
              image={item.image.url}
              type={item.name}
              price={item.price.formatted}
              id={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
