import React, { useEffect, useRef } from "react";
import styled from "styled-components";

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
`;
const Message = styled.span`
  font-size: 16px;
  line-height: 21px;
  color: rgba(255, 255, 255, 1);
`;
const CloseButton = styled.button`
  display: inline-block;
  border: none;
  position: absolute;
  right: 31px;
  top: 33px;
  height: 14px;
  width: 14px;

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 6px;
    height: 14px;
    width: 2px;
    background: rgba(255, 255, 255, 1);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
