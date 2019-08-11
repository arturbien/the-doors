import React, { useState } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { login } from "../../store/actions/user";
import { dismissLoginError } from "../../store/actions/errors";

import ProgressOverlay from "./ProgressOverlay";

import TextField from "../../shared//components/TextField";
import Checkbox from "../../shared/components/Checkbox";
import Snackbar from "../../shared/components/Snackbar";
import AppBar from "../../shared/components/AppBar";

const Login = ({ login, loading, error, dismissLoginError }) => {
  const [email, setEmail] = useState("login@applover.pl");
  const [password, setPassword] = useState("password123");
  const [remember, setRemember] = useState(false);
  return (
    <div>
      <AppBar />
      <Wrapper>
        <Heading>Log in</Heading>
        <form>
          {/* disabled fieldset makes all inputs inside disabled */}
          <fieldset disabled={loading}>
            <TextField
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email adress"
              type="email"
            />
            <TextField
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
            <Checkbox
              checked={remember}
              onChange={() => setRemember(!remember)}
              label="Keep me logged in"
              style={{ marginTop: 3 }}
            />
            <LoginButton
              onClick={e => {
                e.preventDefault();
                login({ email, password, remember });
              }}
            >
              Login
            </LoginButton>
          </fieldset>
        </form>
        {loading && !error && <ProgressOverlay message={"Processing..."} />}
        {error && (
          <Snackbar
            message="Invalid email or password"
            onClose={dismissLoginError}
          />
        )}
      </Wrapper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading.login,
    error: state.errors.login
  };
};
const mapDispatchToProps = dispatch => ({
  login: ({ email, password, remember }) =>
    dispatch(login({ email, password, remember })),
  dismissLoginError: () => dispatch(dismissLoginError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

const Wrapper = styled.div`
  max-width: 397px;
  margin-top: 89px;
  margin-left: auto;
  margin-right: auto;

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
`;
const Heading = styled.h3`
  margin-bottom: 56px;

  text-align: center;
  font-size: 24px;
  font-weight: normal;
  color: rgba(114, 114, 114, 1);
  line-height: 32px;
`;
// TODO fix line heights- they don't translate 1:1 to Adobe XD specs
const LoginButton = styled.button`
  height: 48px;
  width: 100%;
  margin-top: 27px;

  background: rgba(29, 226, 120, 1);

  border-radius: 6px;

  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;
