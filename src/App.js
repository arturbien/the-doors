import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./layout/views/Login/Login";
import Design from "./layout/views/Design/Design";
import AppBar from "./layout/AppBar";
import { fetchOrganization } from "./store/actions/user";

function App({ user, fetchOrganization }) {
  return (
    <>
      <BrowserRouter>
        <>
          <AppBar user={user} fetchOrganization={fetchOrganization} />
          {user.email ? (
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
const mapDispatchToProps = dispatch => ({
  fetchOrganization: () => dispatch(fetchOrganization())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
