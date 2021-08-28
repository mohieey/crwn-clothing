import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleHideCart } from "../../redux/cart/cartActions";

import "./CartIcon.scss";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ itemsCount, toggleHideCart }) => {
  return (
    <div className="cart-icon" onClick={toggleHideCart}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHideCart: () => dispatch(toggleHideCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
