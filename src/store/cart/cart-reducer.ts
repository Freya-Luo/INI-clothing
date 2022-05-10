import { AnyAction } from "redux";
import { setCartHasItems, setCartItems } from "./cart-action";
import { CartItem } from "./cart-types";

export type CartState = {
  cartHasItems: boolean;
  cartItems: CartItem[];
};

const CART_INITIAL_STATE = {
  cartHasItems: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CartState => {
  if (setCartHasItems.match(action)) {
    return {
      ...state,
      cartHasItems: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
