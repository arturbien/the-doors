import React, { useEffect } from "react";
import styled from "styled-components";

import { withTranslation } from "react-i18next";

import { LANGUAGES } from "../config";
// TODO src-set on this image
import LogoImage from "../assets/images/Logo@2x.png";

import OrganizationInfo from "./OrganizationInfo";

import Select from "../shared/components/Select";
import LabelText from "../shared/components/LabelText";

const AppBar = ({ user, fetchOrganization, setLanguage, t, ...otherProps }) => {
  const languages = Object.keys(LANGUAGES).map(id => {
    const language = { ...LANGUAGES[id] };
    language.label = t(`languages.${language.value}`);
    return language;
  });
  const activeLanguageIndex = languages.findIndex(
    language => language.value === user.language
  );
  return (
    <Wrapper>
      <Center>
        <div>
          <a href="/">
            <Logo src={LogoImage} alt={"Applover logo"} />
          </a>
        </div>
        <div>
          <RightNav>
            <LabelText>{t("selectLanguage")}:</LabelText>
            <SelectWrapper>
              <Select
                onChange={language => setLanguage(language)}
                style={{ width: 112 }}
                items={languages}
                selectedIndex={activeLanguageIndex}
              />
            </SelectWrapper>
            {user.token && (
              <OrganizationInfo
                fetchData={fetchOrganization}
                data={user.organization}
              />
            )}
          </RightNav>
        </div>
      </Center>
    </Wrapper>
  );
};

export default withTranslation()(AppBar);

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
const SelectWrapper = styled.div`
  margin: 0 20px;
`;
const RightNav = styled.nav`
  display: inline-flex;
  align-items: center;
`;
