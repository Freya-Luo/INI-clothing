import { createAction, matcher, ActionPayload } from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES, CartItem } from "./cart-types";
import { CategoryItem } from "../categories/categories-types";

/* ------------------------ Helpers dealing with cart items ----------------- */
const addItem = (cartItems: CartItem[], item: CategoryItem): CartItem[] => {
  // check if the item already exists
  const checkCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (checkCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            subPrice: cartItem.subPrice + item.price,
          }
        : cartItem,
    );
  }

  return [...cartItems, { ...item, quantity: 1, subPrice: item.price }];
};

const removeItem = (cartItems: CartItem[], item: CategoryItem): CartItem[] => {
  const checkCartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (checkCartItem && checkCartItem.quantity !== 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
            subPrice: cartItem.subPrice - item.price,
          }
        : cartItem,
    );
  }
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

const clearItem = (cartItems: CartItem[], item: CategoryItem): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);

/* action creators */
// create action types for each action
export type SetCartHasItems = ActionPayload<CART_ACTION_TYPES.SET_CART_HAS_ITEMS, boolean>;
export type SetCartItems = ActionPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

// enhanced, type-restricted action creators with custom matchers
export const setCartHasItems = matcher(
  (hasItems: boolean): SetCartHasItems => createAction(CART_ACTION_TYPES.SET_CART_HAS_ITEMS, hasItems),
);
export const setCartItems = matcher(
  (cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems),
);

export const addCartItem = (cartItems: CartItem[], product: CategoryItem) => setCartItems(addItem(cartItems, product));
export const removeCartItem = (cartItems: CartItem[], item: CategoryItem) => setCartItems(removeItem(cartItems, item));
export const clearCartItem = (cartItems: CartItem[], item: CategoryItem) => setCartItems(clearItem(cartItems, item));
