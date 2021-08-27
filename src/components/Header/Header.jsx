import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseUtils";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "./../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapPropsToState = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapPropsToState)(Header);
