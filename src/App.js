import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";

import { Container } from "./shared/Container";

import Login from "./pages/Login/Login";
function App() {
  return (
    // <ThemeProvider>
    <>
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path={"/login"} component={() => <Login />} />
            <Route exact path={"/"} component={() => <h1>hey!</h1>} />
          </Switch>
        </>
      </BrowserRouter>
    </>
    // </ThemeProvider>
  );
}

export default App;
