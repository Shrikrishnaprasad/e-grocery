import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <Switch>
      <Route exact path="/productList">
        <h1>ProductList</h1>
        {/* <ProductList /> */}
      </Route>
      <Route exact path="/product/:id">
        <h1>Product</h1>
        {/* <Product /> */}
      </Route>
      <Route exact path="/register">
        <h1>Register</h1>
        {/* <Register /> */}
      </Route>
      <Route exact path="/login">
        <h1>Login</h1>
        {/* <Login /> */}
      </Route>
      <Route exact path="/cart">
        <h1>Cart</h1>
        {/* <Cart /> */}
      </Route>
      <Route exact path="/">
        {/* <h1>Home</h1> */}
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
