import { cartActionTypes } from "./cartActionsTypes";

export const toggleHideCart = () => ({
  type: cartActionTypes.TOGGLE_HIDDEN_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
