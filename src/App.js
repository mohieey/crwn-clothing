import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInAndUp from "./pages/SignInAndUp/SignInAndUp";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

function App() {
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

export default App;
