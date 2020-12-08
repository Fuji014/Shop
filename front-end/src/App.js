import React from "react";

// router
import { Switch, Route } from "react-router-dom";

// components
import PrivateRoute from "./components/HOC/PrivateRoutes";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Cart from "./containers/Cart";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Profile from "./containers/Profile";
import Shipping from "./containers/Shipping";
import Payment from "./containers/Payment";
import PlaceOrder from "./containers/PlaceOrder";
import Order from "./containers/Order";
import UserList from "./containers/UserList";
import UserEdit from "./containers/UserEdit";
import ProductList from "./containers/ProductList";
import ProductEdit from "./containers/ProductEdit";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/shipping" component={Shipping} />
        <Route path="/payment" component={Payment} />
        <Route path="/placeorder" component={PlaceOrder} />
        <Route path="/order/:id" component={Order} />
        <Route path="/admin/user/:id/edit" component={UserEdit} />
        {/* admin route */}
        <PrivateRoute path="/admin/userlist" component={UserList} />
        <PrivateRoute path="/admin/productlist" component={ProductList} />
        <PrivateRoute path="/admin/products/:id/edit" component={ProductEdit} />
      </Switch>
    </>
  );
}

export default App;
