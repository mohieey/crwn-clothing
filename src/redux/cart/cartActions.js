import { cartActionTypes } from "./cartActionsTypes";

export const toggleHideCart = () => ({
  type: cartActionTypes.TOGGLE_HIDDEN_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item,
});
