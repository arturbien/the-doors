import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
`;
const OrganizationInfo = ({ data, fetchData }) => {
  const [infoOpen, setInfoOpen] = useState(false);
  useEffect(() => {
    if (!data) {
      fetchData();
    }
  });

  return (
    <Wrapper>
      <Button onClick={() => setInfoOpen(!infoOpen)}>
        {"My organization"}
      </Button>
      {infoOpen && (
        <Info>
          {data ? (
            Object.keys(data).map(prop => (
              <p key={prop}>{prop + ": " + data[prop]}</p>
            ))
          ) : (
            <p>...loading</p>
          )}
        </Info>
      )}
    </Wrapper>
  );
};

export default OrganizationInfo;
