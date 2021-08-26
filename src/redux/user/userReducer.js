const initialState = { currentUser: null };

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENTUSER":
      return { ...prevState, currentUser: action.payload };

    default:
      return prevState;
  }
};

export default userReducer;
