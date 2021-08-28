import { createSelector } from "reselect";

//input slector
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((initialValue, item) => initialValue + item.quantity, 0)
);

export const selectCartITotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (initialValue, item) => initialValue + item.quantity * item.price,
    0
  )
);
