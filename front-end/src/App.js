import React from "react";

// router
import { Switch, Route } from "react-router-dom";

// components
import Home from "./containers/Home";
import Product from "./containers/Product";
import Cart from "./containers/Cart";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart/:id?" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
