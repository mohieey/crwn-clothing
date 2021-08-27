import { cartActionTypes } from "./cartActionsTypes";

const initialState = { hidden: true };

const cartReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_HIDDEN_CART:
      return { ...prevState, hidden: !prevState.hidden };

    default:
      return prevState;
  }
};

export default cartReducer;
