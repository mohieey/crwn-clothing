import { userActionTypes } from "./userActionsTypes";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENTUSER,
  payload: user,
});
