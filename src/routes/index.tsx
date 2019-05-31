import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BaseStyles from "./base-styles";
import Content from "../components/content";
import Header from "../components/header";
import Login from "../views/login";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BaseStyles />
      <Router>
        <>
          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={Login} />
              {/* <PrivateRoute path="/home" component={Home} /> */}
            </Switch>
          </Content>
        </>
      </Router>
    </Provider>
  );
};

export default Root;
