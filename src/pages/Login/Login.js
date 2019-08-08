import React, { useState } from "react";
import styled from "styled-components";

import AppBar from "../../shared/AppBar";

import TextField from "../../shared/TextField";
import Checkbox from "../../shared/Checkbox";
import Progress from "../../shared/Progress";
import Modal from "../../shared/Modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div>
      <AppBar />
      <Wrapper>
        <form>
          <Heading>Log in</Heading>
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
          <LoginButton type="submit">Login</LoginButton>
        </form>
        {remember && (
          <Modal>
            <Progress percent={60} />
          </Modal>
        )}
      </Wrapper>
    </div>
  );
};

export default Login;

const Wrapper = styled.div`
  max-width: 397px;
  margin-top: 89px;
  margin-left: auto;
  margin-right: auto;
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
  margin-top: 29px;

  background: rgba(29, 226, 120, 1);

  border-radius: 6px;

  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;
