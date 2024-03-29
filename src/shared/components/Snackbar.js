import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

import CloseButton from "./CloseButton";

const Snackbar = ({ message, variant, onClose }) => {
  let wrapper = useRef();
  useEffect(() => {
    const current = wrapper.current;
    current.style.transform = "translateY(0)";
    return () => (current.style.transform = "");
  }, []);
  return createPortal(
    <Wrapper ref={wrapper} variant={variant}>
      <Message>{message}</Message>
      <CloseButton
        onClick={() => {
          wrapper.current.style.transform = "translateY(-100%)";
          setTimeout(onClose, 200);
        }}
      />
    </Wrapper>,
    document.getElementById("portal")
  );
};

export default Snackbar;

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 80px;
  background: ${({ variant }) =>
    variant === "error" ? "rgba(242, 78, 51, 1)" : "rgba(29, 226, 120, 1)"};
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.14);

  transition: 0.2s transform ease-in-out;
  transform: translateY(-100%);

  ${CloseButton} {
    position: absolute;
    right: 31px;
    top: 32px;
  }
`;
const Message = styled.span`
  font-size: 16px;
  line-height: 21px;
  color: rgba(255, 255, 255, 1);
  a {
    text-decoration: underline;
  }
`;
