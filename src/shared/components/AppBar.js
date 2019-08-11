import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/images/Logo@2x.png";

const Wrapper = styled.header`
  height: 80px;
  background: #ffffff;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.16);
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1366px;
  height: 100%;
  align-items: center;
  margin: auto;
  padding-left: 107px;
`;
const Logo = styled.img`
  height: 47px;
  width: 47px;
`;
const AppBar = ({ left, right, ...otherProps }) => (
  <Wrapper>
    <Center>
      <div>
        <a href="/">
          <Logo src={LogoImage} alt={"Applover logo"} />
        </a>
      </div>
      {right && <div>{right}</div>}
    </Center>
  </Wrapper>
);

export default AppBar;
