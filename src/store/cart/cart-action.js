import { createAction } from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES } from "./cart-types";

/* ------------------------ Helpers dealing with cart items ----------------- */
const addItem = (cartItems, product) => {
  // check if the item already exists
  const checkCartItem = cartItems.find((cartItem) => cartItem.id === product.id);

  if (checkCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeItem = (cartItems, item) => {
  const checkCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (checkCartItem.quantity !== 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
    );
  }
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

const clearItem = (cartItems, item) => cartItems.filter((cartItem) => cartItem.id !== item.id);

/* action creators */
export const setCartHasItems = (hasItems) => createAction(CART_ACTION_TYPES.SET_CART_HAS_ITEMS, hasItems);
export const addCartItem = (cartItems, product) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addItem(cartItems, product));
export const removeCartItem = (cartItems, item) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeItem(cartItems, item));
export const clearCartItem = (cartItems, item) => createAction(clearItem(cartItems, item));
