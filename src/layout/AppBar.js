import React, { useEffect } from "react";
import styled from "styled-components";

import LogoImage from "../assets/images/Logo@2x.png";

import OrganizationInfo from "./OrganizationInfo";

const AppBar = ({ user, fetchOrganization, ...otherProps }) => {
  return (
    <Wrapper>
      <Center>
        <div>
          <a href="/">
            <Logo src={LogoImage} alt={"Applover logo"} />
          </a>
        </div>
        <div>
          {user.token && (
            <OrganizationInfo
              fetchData={fetchOrganization}
              data={user.organization}
            />
          )}
        </div>
      </Center>
    </Wrapper>
  );
};

export default AppBar;

const Wrapper = styled.header`
  position: relative;
  z-index: 2;
  height: 80px;
  background: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.18);
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
