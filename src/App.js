import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

const HatsPage = () => {
  return <h1>Hats Page</h1>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
