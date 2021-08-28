import "./CheckoutItem.scss";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cartActions";

const CheckoutItem = ({ item, dispatch }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => dispatch(clearItem(item))}>
        &#10008;
      </div>
    </div>
  );
};

export default connect(null)(CheckoutItem);
