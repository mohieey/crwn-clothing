import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInAndUp from "./pages/SignInAndUp/SignInAndUp";
import { auth, createUserProfileDocument } from "./Firebase/FirebaseUtils";
import { setCurrentUser } from "./redux/user/userActions";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

class App extends React.Component {
  unSubscribeFronAuth = null;

  componentDidMount() {
    this.unSubscribeFronAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser(
            {
              currentUser: { id: snapshot.id, ...snapshot.data() },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFronAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
