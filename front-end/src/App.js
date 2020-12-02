import React, { useEffect } from "react";

// router
import { Switch, Route } from "react-router-dom";

// components
import Home from "./containers/Home";
import Product from "./containers/Product";
import Cart from "./containers/Cart";
import Login from "./containers/Login";
import Register from "./containers/Register";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;
