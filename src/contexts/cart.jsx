import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartHasItems: false,
  setcartHasItems: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartHasItems, setcartHasItems] = useState(false);
  const value = { cartHasItems, setcartHasItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
