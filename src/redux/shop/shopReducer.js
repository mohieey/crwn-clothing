import SHOP_DATA from "./../../pages/Shop/ShopData";

const initialState = { collections: SHOP_DATA };

const shopReducer = (prevState = initialState, action) => {
  switch (action.type) {
    default:
      return prevState;
  }
};

export default shopReducer;
