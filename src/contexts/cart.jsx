import { createContext, useState } from 'react';
import { useEffect } from 'react';

// return the whole cart items list
export const addItem = (cartItems, product) => {
  // check if the item already exists
  const checkCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (checkCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  cartHasItems: false,
  setcartHasItems: () => {},
  cartItems: [],
  addCartItem: () => {}, // method exposed to the outside
  cartItemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartHasItems, setcartHasItems] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addCartItem = (product) => setCartItems(addItem(cartItems, product));

  useEffect(() => {
    const count = cartItems.reduce((accCount, cartItem) => accCount + cartItem.quantity, 0);
    setCartItemCount(count);
  }, [cartItems]);

  const value = { cartHasItems, setcartHasItems, cartItems, addCartItem, cartItemCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
