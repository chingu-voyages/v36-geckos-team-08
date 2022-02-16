import React, { ReactChild } from 'react';
import commerce from '../api/commerce';

interface CartInterface {
  created: number;
  currency: { code: string; symbol: string };
  discount: [];
  expires: number;
  hosted_checkout_url: string;
  id: string;
  meta: null;
  subtotal: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  total_items: number;
  total_unique_items: number;
  updated: number;
  line_items: {
    [key: number]: object;
  }[];
}

interface CartContextInterface {
  cart: CartInterface | any;
  addToCart: (productId: string) => void;
  deleteItem: (itemId: string) => void;
  updateQuantity: (itemId: string, newQuantity: number) => void;
  isLoading: boolean;
}

const CartContext = React.createContext<CartContextInterface | null>(null);

export const CartProvider = ({ children }: { children: ReactChild }) => {
  const [cart, setCart] = React.useState<CartInterface | {}>({});
  const [isLoading, setIsLoading] = React.useState(true);

  const addToCart = (productId: string) => {
    commerce.cart.add(productId, 1).then((res) => {
      setCart(res.cart);
    });
  };
  const deleteItem = (itemId: string) => {
    commerce.cart.remove(itemId).then((res) => {
      setCart(res.cart);
    });
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      deleteItem(itemId);
    } else {
      commerce.cart.update(itemId, { quantity: newQuantity }).then((res) => {
        setCart(res.cart);
      });
    }
  };

  React.useEffect(() => {
    const getCart = async () => {
      try {
        const response = await commerce.cart.retrieve();
        setCart(response);
        setIsLoading(false);
      } catch (error) {
        console.log('There was an error getting the cart information', error);
      }
    };
    getCart();
  }, []);

  const cartContextData: CartContextInterface = {
    cart,
    addToCart,
    deleteItem,
    updateQuantity,
    isLoading
  };

  return (
    <CartContext.Provider value={cartContextData}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => React.useContext(CartContext);
