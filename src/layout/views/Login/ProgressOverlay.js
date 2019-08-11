import React from "react";

import styled from "styled-components";

import FakeProgress from "../../../shared/components/FakeProgress";
import Modal from "../../../shared/components/Modal";

const ProgressOverlay = ({ message }) => {
  return (
    <Modal>
      <Center>
        {message && <Message>{message}</Message>}
        <FakeProgress />
      </Center>
    </Modal>
  );
};
export default ProgressOverlay;

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
