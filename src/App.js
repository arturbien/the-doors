import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOrganization, setLanguage } from "./store/actions/user";

import Login from "./layout/views/Login/Login";
import Design from "./layout/views/Design/Design";
import Share from "./layout/views/Share/Share";
import AppBar from "./layout/AppBar";

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
              <Route path="/share" component={Share} />

              <Redirect from={"/login"} to={"/"} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path={"/login"} component={Login} />
              <Route path="/share" component={Share} />

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
