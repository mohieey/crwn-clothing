import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleHideCart } from "../../redux/cart/cartActions";

import "./CartIcon.scss";

const CartIcon = ({ toggleHideCart }) => {
  return (
    <div className="cart-icon" onClick={toggleHideCart}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleHideCart: () => dispatch(toggleHideCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
