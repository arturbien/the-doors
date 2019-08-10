import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./pages/Login/Login";
import Design from "./pages/Design/Design";
function App({ user }) {
  return (
    <>
      <BrowserRouter>
        <>
          {user ? (
            <Switch>
              <Route exact path={"/"} component={Design} />
              <Redirect from={"/login"} to={"/"} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path={"/login"} component={Login} />
              <Redirect to={"/login"} />
            </Switch>
          )}
        </>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
