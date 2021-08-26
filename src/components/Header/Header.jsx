import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseUtils";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
  console.log(currentUser);
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
      </div>
    </div>
  );
};

const mapPropsToState = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapPropsToState)(Header);
