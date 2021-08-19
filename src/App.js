import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInAndUp from "./pages/SignInAndUp/SignInAndUp";
import { auth, createUserProfileDocument } from "./Firebase/FirebaseUtils";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unSubscribeFronAuth = null;

  componentDidMount() {
    this.unSubscribeFronAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          console.log(snapshot.data());

          this.setState(
            {
              currentUser: { id: snapshot.id, ...snapshot.data() },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFronAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;
