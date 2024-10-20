import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';

import { CartType, ItemType } from '../item-type';

type CartActionsContextType = {
  addItemToCart: (item: ItemType) => void;
  removeItemFromCart: (item: CartType) => void;
  removeCart: () => void;
};

export const CartActionsContext = createContext<CartActionsContextType>({
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeCart: () => {},
});

export const CartItemsContext = createContext<CartType[]>([]);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartType[]>([]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const addItemToCart = useCallback((item: ItemType) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItemIndex === -1) {
        return [...prevCartItems, { ...item, quantity: 1 }];
      } else {
        return prevCartItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
    });
  }, []);

  const removeItemFromCart = useCallback((item: CartType) => {
    setCartItems((prevCartItems) => {
      return prevCartItems
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  }, []);

  const cartActions = useMemo(
    () => ({ addItemToCart, removeItemFromCart, removeCart }),
    [addItemToCart, removeItemFromCart, removeCart],
  );

  return (
    <CartItemsContext.Provider value={cartItems}>
      <CartActionsContext.Provider value={cartActions}>
        {children}
      </CartActionsContext.Provider>
    </CartItemsContext.Provider>
  );
};
