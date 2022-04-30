import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer';

const CART_ACTION_TYPES = {
  SET_CART_HAS_ITEMS: 'SET_CART_HAS_ITEMS',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_ITEM_COUNT: 'SET_CART_ITEM_COUNT',
  SET_CART_TOTAL_PRICE: 'SET_CART_TOTAL_PRICE',
};

const initState = {
  cartHasItems: false,
  cartItems: [],
  cartItemCount: 0,
  cartTotalPrice: 0,
};

/* ------------------ Cart reducer ----------------------- */
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_CART_HAS_ITEMS:
      return {
        ...state,
        cartHasItems: payload.hasItems,
      };
    default:
      console.log(`Unhandled type ${type} in cartReducer`);
  }
};

/* ------------------------ Helpers dealing with cart items ----------------- */
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

/* ----------------------------- Cart Context Provider ------------------------- */
// define context object interface
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
  const [{ cartHasItems, cartItems, cartItemCount, cartTotalPrice }, dispatch] = useReducer(cartReducer, initState);

  /* sub-routine helper reducers */
  const updateCartItemsFireOff = (newCartItems) => {
    const count = newCartItems.reduce((accCount, cartItem) => accCount + cartItem.quantity, 0);
    const price = newCartItems.reduce((accPrice, cartItem) => accPrice + cartItem.quantity * cartItem.price, 0);

    const payload = {
      cartItems: newCartItems,
      cartItemCount: count,
      cartTotalPrice: price,
    };

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  };

  const setcartHasItemsFireOff = (hasItems) => {
    const payload = { hasItems };
    dispatch(createAction(CART_ACTION_TYPES.SET_CART_HAS_ITEMS, payload));
  };

  // object passed to the context provider
  const value = {
    cartHasItems,
    setcartHasItems: setcartHasItemsFireOff,
    cartItems,
    addCartItem: (product) => updateCartItemsFireOff(addItem(cartItems, product)),
    removeCartItem: (item) => updateCartItemsFireOff(removeItem(cartItems, item)),
    cartItemCount,
    clearCartItem: (item) => updateCartItemsFireOff(clearItem(cartItems, item)),
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/**
 * The cart item needs to be a brand new object, with only fields being mutated, React
 * does not register that cart item as different, which re-render will not be triggered.
 */
