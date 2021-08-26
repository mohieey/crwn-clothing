import { userActionTypes } from "./userActionsTypes";

const initialState = { currentUser: null };

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENTUSER:
      return { ...prevState, currentUser: action.payload };

    default:
      return prevState;
  }
};

export default userReducer;
