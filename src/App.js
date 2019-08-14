import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./layout/views/Login/Login";
import Design from "./layout/views/Design/Design";
import AppBar from "./layout/AppBar";
import { fetchOrganization, setLanguage } from "./store/actions/user";

function App({ user, fetchOrganization, setLanguage }) {
  return (
    <>
      <BrowserRouter>
        <>
          <AppBar
            user={user}
            fetchOrganization={fetchOrganization}
            setLanguage={setLanguage}
          />
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
  fetchOrganization: () => dispatch(fetchOrganization()),
  setLanguage: language => dispatch(setLanguage(language))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
