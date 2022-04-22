import { createContext, useState } from 'react';
import { useEffect } from 'react';

/**
 * The cart item needs to be a brand new object, with only fields being mutated, React
 * does not register that cart item as different, which re-render will not be triggered.
 */
// return the whole cart items list
const addItem = (cartItems, product) => {
  // check if the item already exists
  const checkCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (checkCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeItem = (cartItems, item) => {
  const checkCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (checkCartItem.quantity !== 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
  }
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

const clearItem = (cartItems, item) => cartItems.filter((cartItem) => cartItem.id !== item.id);

export const CartContext = createContext({
  cartHasItems: false,
  setcartHasItems: () => {},
  cartItems: [],
  addCartItem: () => {}, // method exposed to the outside,
  removeCartItem: () => {},
  cartItemCount: 0,
  clearCartItem: () => {},
  cartTotalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cartHasItems, setcartHasItems] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addCartItem = (product) => setCartItems(addItem(cartItems, product));
  const removeCartItem = (item) => {
    setCartItems(removeItem(cartItems, item));
  };
  const clearCartItem = (item) => {
    setCartItems(clearItem(cartItems, item));
  };
  // using separate useEffect to make each take single responsibility
  useEffect(() => {
    const count = cartItems.reduce((accCount, cartItem) => accCount + cartItem.quantity, 0);
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const price = cartItems.reduce((accPrice, cartItem) => accPrice + cartItem.quantity * cartItem.price, 0);
    setCartTotalPrice(price);
  }, [cartItems]);

  const value = {
    cartHasItems,
    setcartHasItems,
    cartItems,
    addCartItem,
    removeCartItem,
    cartItemCount,
    clearCartItem,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
