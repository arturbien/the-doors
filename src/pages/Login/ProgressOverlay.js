import React from "react";

import styled from "styled-components";

import Progress from "../../shared/Progress";
import Modal from "../../shared/Modal";

const ProgressOverlay = ({ message }) => {
  return (
    <Modal>
      <Backdrop>
        <Center>
          {message && <Message>{message}</Message>}
          <Progress />
        </Center>
      </Backdrop>
    </Modal>
  );
};
export default ProgressOverlay;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(173, 178, 181, 0.83);
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  transform: translate(-50%, -50%);
`;
const Message = styled.p`
  position: absolute;

  bottom: 47px;
  left: 0;
  display: block;
  width: 100%;
  font-size: 24px;
  line-height: 32px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
`;
