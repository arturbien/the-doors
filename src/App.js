import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";

function App() {
  return (
    // <ThemeProvider>
    <>
      <BrowserRouter>
        <>
          <Switch>
            <Route exact path={"/login"} component={() => <h1>Login!</h1>} />
            <Route exact path={"/"} component={() => <h1>hey!</h1>} />
          </Switch>
        </>
      </BrowserRouter>
    </>
    // </ThemeProvider>
  );
}

export default App;
