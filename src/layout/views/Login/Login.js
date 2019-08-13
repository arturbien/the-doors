import React, { useState } from "react";
import styled from "styled-components";

import { withTranslation } from "react-i18next";

import { connect } from "react-redux";
import { login } from "../../../store/actions/user";
import { dismissLoginError } from "../../../store/actions/errors";

import ProgressOverlay from "./ProgressOverlay";

import TextField from "../../../shared/components/TextField";
import Checkbox from "../../../shared/components/Checkbox";
import Snackbar from "../../../shared/components/Snackbar";

const Login = ({ login, loading, error, dismissLoginError, t }) => {
  const [email, setEmail] = useState("login@applover.pl");
  const [password, setPassword] = useState("password123");
  const [remember, setRemember] = useState(false);
  return (
    <div>
      <Wrapper>
        <Heading>{t("loginTitle")}</Heading>
        <form>
          {/* disabled fieldset makes all inputs inside disabled */}
          <fieldset disabled={loading}>
            <TextField
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t("email")}
              type="email"
            />
            <TextField
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={t("password")}
              type="password"
            />
            <Checkbox
              checked={remember}
              onChange={() => setRemember(!remember)}
              label={t("remember")}
              style={{ marginTop: 3 }}
            />
            <LoginButton
              onClick={e => {
                e.preventDefault();
                login({ email, password, remember });
              }}
            >
              {t("login")}
            </LoginButton>
          </fieldset>
        </form>
        {loading && !error && (
          <ProgressOverlay message={t("processing") + "..."} />
        )}
        {error && (
          <Snackbar
            variant="error"
            message={t("loginError")}
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
)(withTranslation()(Login));

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
