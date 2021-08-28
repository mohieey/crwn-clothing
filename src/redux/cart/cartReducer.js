import { cartActionTypes } from "./cartActionsTypes";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

const initialState = { hidden: true, cartItems: [] };

const cartReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_HIDDEN_CART:
      return { ...prevState, hidden: !prevState.hidden };

    case cartActionTypes.ADD_ITEM:
      return {
        ...prevState,
        cartItems: addItemToCart(prevState.cartItems, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...prevState,
        cartItems: removeItemFromCart(prevState.cartItems, action.payload),
      };

    case cartActionTypes.CLEAR_ITEM:
      return {
        ...prevState,
        cartItems: prevState.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return prevState;
  }
};

export default cartReducer;
