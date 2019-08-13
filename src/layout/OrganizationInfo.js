import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { withTranslation } from "react-i18next";

import LabelText from "../shared/components/LabelText";
import Popup from "../shared/components/Popup";

const Button = styled.button`
  height: 32px;
  padding: 0 8px;

  border-radius: 3px;
  background: rgba(119, 119, 157, 1);

  color: rgba(255, 255, 255, 1);
  font-weight: normal;
  font-size: 14px;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Info = styled(Popup)`
  position: absolute;
  top: calc(100% + 30px);
  right: 0;
  min-width: 400px;
  ${LabelText} {
    line-height: 26px;
  }
`;
const OrganizationInfo = ({ data, fetchData, t }) => {
  const [infoOpen, setInfoOpen] = useState(false);

  // fetch data only when user wants to see organization data
  useEffect(() => {
    if (!data && infoOpen) {
      fetchData();
    }
  }, [data, fetchData, infoOpen]);

  return (
    <Wrapper>
      <Button onClick={() => setInfoOpen(!infoOpen)}>
        {t("myOrganization")}
      </Button>
      {infoOpen && (
        <Info>
          {data ? (
            <>
              <LabelText>
                {t("name")}: {data.name}
              </LabelText>
              <br />
              <LabelText>
                {t("email")}: {data.email}
              </LabelText>
              <br />
              <LabelText>
                {t("phoneNumber")}: {data.phone_number}
              </LabelText>
              <br />
              <LabelText>
                {t("address")}:{" "}
                {data.address_line_1 + " " + data.address_line_2}
              </LabelText>
              <br />
              <LabelText>
                {t("city")}: {data.city}
              </LabelText>
              <LabelText>
                {t("postalCode")}: {data.postal_code}
              </LabelText>
            </>
          ) : (
            <p>{t("processing")}...</p>
          )}
        </Info>
      )}
    </Wrapper>
  );
};

export default withTranslation()(OrganizationInfo);
