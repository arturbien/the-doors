import React, { useState } from "react";
import styled from "styled-components";
import { DOOR_TYPES } from "../../../config";

import Modal from "../../../shared/Modal";
import View2D from "../Preview/View2D";
import InfoIMG from "../../../assets/images/icon.svg";

import CloseButton from "../../../shared/CloseButton";

const TypeInfo = () => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <InfoIcon onClick={() => setInfoOpen(true)} />
      {infoOpen && (
        <Modal>
          <InfoWrapper>
            <InfoHeader>
              <InfoHeading>{"Door type"}</InfoHeading>
              <CloseButton
                onClick={() => setInfoOpen(false)}
                color="rgba(111, 145, 170, 1)"
              />
            </InfoHeader>
            <InfoBody>
              {Object.keys(DOOR_TYPES).map(doorType => (
                <div key={doorType}>
                  <DoorTypePreview>
                    <h5>{DOOR_TYPES[doorType].name}</h5>
                    <View2D type={DOOR_TYPES[doorType].value} />
                  </DoorTypePreview>
                </div>
              ))}
            </InfoBody>
          </InfoWrapper>
        </Modal>
      )}
    </>
  );
};

export default TypeInfo;

const InfoIcon = styled.span`
  position: absolute;
  top: 0px;
  right: -11px;
  display: inline-block;
  height: 10px;
  width: 10px;
  background: url(${InfoIMG});
  background-size: cover;
`;
const InfoWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 813px;
  height: 432px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(121, 152, 176, 1);
`;
const InfoHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 40px 90px 29px 29px;

  ${CloseButton} {
    position: absolute;
    top: 20px;
    right: 41px;
  }
`;
const InfoHeading = styled.h4`
  font-size: 24px;
  line-height: 32px;
  color: rgba(111, 145, 170, 1);
  padding-bottom: 7px;
  margin: 0;
  border-bottom: 1px solid rgba(111, 145, 170, 1);
`;
const InfoBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px;
`;
const DoorTypePreview = styled.div`
  position: relative;
  padding: 10px;
  margin-top: 40px;
  background: rgba(216, 216, 216, 1);

  & > h5 {
    position: absolute;
    width: 100%;
    top: -40px;
    margin: 0;
    text-align: center;
    color: rgba(111, 145, 170, 1);
    font-size: 18px;
  }
`;
