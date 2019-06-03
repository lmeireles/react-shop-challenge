import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BaseStyles from "./base-styles";
import PrivateRoute from "./private-route";
import Header from "../components/header";
import Content from "../components/layout/content";
import Login from "../views/login/login";
import Home from "../views/home/home";
import Product from "../views/product";
import Admin from "../views/admin";
import Profile from "../views/profile";
import Cart from "../views/cart";
import Checkout from "../views/checkout";

const Root = ({ store, auth: auth }) => {
  return (
    <Provider store={store}>
      <>
        <BaseStyles />
        <Router>
          <Content>
            <Header />
            <Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/product/:id" component={Product} />
                <PrivateRoute path="/admin" component={Admin} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/checkout" component={Checkout} />
              </Switch>
            </Fragment>
            <Cart />
          </Content>
        </Router>
      </>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Root);
