import React, { Component } from "react";
import Header from "./header/header.component";
import CategoryPage from "./category-page/category-page.component";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/loginPage.component";
import RegisterPage from "./pages/register/register.component";
import Menu from "./menu/menu.component";
import ProductList from "./pages/product-list/product-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/" component={CategoryPage} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/productlist" component={ProductList} />
        </Switch>
      </div>
    );
  }
}

export default App;
