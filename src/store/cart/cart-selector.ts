import { createSelector } from "reselect";
import { RootState } from "..";
import { CartState } from "./cart-reducer";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartHasItems = createSelector([selectCartReducer], (cart) => cart.cartHasItems);

export const selectCartItems = createSelector([selectCartReducer], (cart) => cart.cartItems);

/* derivative states from the store states are handled by the selectors */
export const selectCartTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accPrice, cartItem) => accPrice + cartItem.quantity * cartItem.price, 0),
);

export const selectCartItemCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accCount, cartItem) => accCount + cartItem.quantity, 0),
);
