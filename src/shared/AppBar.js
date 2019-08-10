import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Logo from "./Logo";

const Wrapper = styled.header`
  height: 80px;
  background: #ffffff;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.16);
`;

const Center = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  margin: auto;
  padding-left: 107px;
`;

const AppBar = ({ left, right, ...otherProps }) => (
  <Wrapper>
    <Center>
      <div>
        <a href="/">
          <Logo style={{ height: 47, marginTop: -1.5 }} />
        </a>
      </div>
      {right && <div>{right}</div>}
    </Center>
  </Wrapper>
);

export default AppBar;
