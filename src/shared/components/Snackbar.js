import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import CloseButton from "./CloseButton";

const Snackbar = ({ message, onClose }) => {
  let wrapper = useRef();
  useEffect(() => {
    const current = wrapper.current;
    current.style.transform = "translateY(0)";
    return () => (current.style.transform = "");
  }, []);
  return (
    <Wrapper ref={wrapper}>
      <Message>{message}</Message>
      <CloseButton
        onClick={() => {
          wrapper.current.style.transform = "translateY(-100%)";
          setTimeout(onClose, 200);
        }}
      />
    </Wrapper>
  );
};

export default Snackbar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(242, 78, 51, 1);
  transition: 0.2s all;
  transform: translateY(-100%);

  ${CloseButton} {
    position: absolute;
    right: 31px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const Message = styled.span`
  font-size: 16px;
  line-height: 21px;
  color: rgba(255, 255, 255, 1);
`;
